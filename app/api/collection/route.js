import { authOptions } from '@app/api/auth/[...nextauth]/route'
import { getServerSession } from "next-auth"
import { PrismaClient } from '@prisma/client';
import {
    S3Client,
    PutObjectCommand,
  } from "@aws-sdk/client-s3";
const client = new S3Client({ region: process.env.AWS_REGION })
const prisma = new PrismaClient();
const createCollectionFolder = async (userId,folderName) => {
    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: `user-${userId}/collections/${folderName}/`,
      Body: '', 
    };
  
    await client.send(new PutObjectCommand(params));
  
};
export const GET = async (request) => {
    try {
        const session = await getServerSession(authOptions)
        const collections = await prisma.userCollection.findMany({
            where: {
                user: {
                    email: session.user.email
                },
            }
        });

        return new Response(JSON.stringify(collections), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all collections", { status: 500 })
    }
}

export const POST = async (req,res) => {
    const { description } = await req.json();
    try {
        const session = await getServerSession(authOptions)
        var user = await prisma.user.findUnique({
            where: {
                email: session.user.email
            }
        });
        const newCollection = await prisma.userCollection.create({
            data: {
                description:description,
                user: {
                    connect: {
                      email: session.user.email
                    }
                  },
            },
        });
        createCollectionFolder(user.id,newCollection.id)
        return new Response(JSON.stringify(newCollection), { status: 201 })
    } catch (error) {
        console.log(error);
        return new Response("Failed to create a new collection", { status: 500 });
    }
}
