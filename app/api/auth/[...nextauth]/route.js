import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from '@prisma/client';
import bcrypt from "bcryptjs";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { createUserFolder,fetchFolder } from "@/lib/s3Client"

const prisma = new PrismaClient();


export const authOptions = {
  pages: {
    signIn: '/login',
    signOut: '/',
    error: '/auth/error',
    verifyRequest: '/new-verification', 
    newUser: '/collection' 
  },
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
  session:{
    strategy: "jwt",
    maxAge:  60*60*24  
  },
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async signIn ({ user, account, profile, email, credentials }){
      if(credentials && user?.error){
        throw new Error(user.error);
      }
      const collectionFolderExists = fetchFolder(user.id,"");
      if(!collectionFolderExists){
        createUserFolder(user.id);
      }
      return user;
    },
    async jwt({ token, user, account, profile}) {
       if (account && user) {
        token.image = user.image;
        token.email = user.email;
        token.name = user.name;
        token.id = user.id;
        return token
      }
      return token
    },
    async session({ session, user, token }) {
      if (token) {
        session.user = {};
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.id = token.sub;
        session.user.image = token.image;
        session.accessToken = token.accessToken;
        session.error = token.error;
      }
      return  session;
    },
    
  }
}

const handler = NextAuth(authOptions);


const handleCredentialLogin = async (credentials) => {
  try {
    if(credentials){
      var user = await prisma.user.findUnique({
        where: {
          email:credentials.email,
        }
      });
      
      if (!user) {
          return { error: 'userNotFound' };
      }
  
      if(!user.emailVerified){
        return { error: 'emailNotVerified' };
      }
  
      const passwordsMatch = await bcrypt.compare(credentials.password, user.password);
      if (!passwordsMatch) {
          return { error: 'passwordInvalid' };
      }
      return user;
    }
  } catch (error) {
    console.log("Error: ", error);
  }
  return null;
}

export { handler as GET, handler as POST , handler}
