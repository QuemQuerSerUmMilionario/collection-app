import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from '@prisma/client';
import bcrypt from "bcryptjs";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import {
  S3Client,
  PutObjectCommand,
  HeadObjectCommand
} from "@aws-sdk/client-s3";
const client = new S3Client({ region: process.env.AWS_REGION })
const prisma = new PrismaClient();

const createCollectionFolder = async (userId) => {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `user-${userId}/collections/`,
    Body: '', 
  };
  await client.send(new PutObjectCommand(params));
};

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "E-mail:",
          type: "text",
          placeholder: "email"
        },
        password: {
            label: "Password:",
            type: "password",
            placeholder: "password"
        }
      },
      async authorize(credentials) {
        return  handleCredentialLogin(credentials);
      }
    }),
  ],
};

const handler = NextAuth({
  providers: authOptions.providers,
  session:{
    strategy: "jwt",
    maxAge:  60*60*24  
  },
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async signIn ({ user, account, profile, email, credentials }){
      try{
        const collectionFolderExists = await client.send(new HeadObjectCommand({
          Bucket: process.env.AWS_BUCKET_NAME,
          Key: `user-${user.id}/collections/`,
        })).catch((error) => {
          if (error.name === 'NotFound') {
            return null;
          }
          throw error;
        });
        if(!collectionFolderExists){
          createCollectionFolder(user.id);
        }
      }catch(e){
        console.log(e)
      }
      return user;
    },
    async jwt({  token, user, account, profile}) {
       if (account && user) {
        token.image = user.image;
        token.email = user.email;
        token.name = user.name;
        token.id = user.id;
        return Promise.resolve(token);
      }
      return Promise.resolve(token)
    },
    async session({ session, user, token }) {
      if (token) {
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.id = token.id;
        session.user.image = token.image;
        session.accessToken = token.accessToken;
        session.error = token.error;
      }
      return  Promise.resolve(session);
    },
    pages: {
      signIn: '/login',
      signOut: '/',
      error: '/auth/error', // Error code passed in query string as ?error=
      verifyRequest: '/auth/verify-request', // (used for check email message)
      newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
    }
  }
});

/*const handleProfileLogin = async (profile) => {
  try {
    var userExists = await prisma.user.findUnique({
      where: {
        email: profile.email,
      }
    });
    if (!userExists) {
       userExists = await prisma.user.create({
        data: {
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
        },
      });
        await createCollectionFolder(userExists.id);
    }
    return userExists
  } catch (error) {
    console.log("Error checking if user exists: ", error.message);
    return false
  }
}*/

const handleCredentialLogin = async (credentials) => {
  try {
    var user = await prisma.user.findUnique({
      where: {
        email:credentials.email,
      }
    });
    
    if (!user) {
      return null;
    }
    const passwordsMatch = await bcrypt.compare(credentials.password, user.password);
    if (!passwordsMatch) {
      return null;
    }
    return user;
  } catch (error) {
    console.log("Error: ", error);
    return null;
  }
}

export { handler as GET, handler as POST , handler}
