import { authOptions } from '@app/api/auth/[...nextauth]/route'
import { getServerSession } from "next-auth"
import { z } from 'zod'
import { PrismaClient } from '@prisma/client';
import {
    S3Client,
    PutObjectCommand,
  } from "@aws-sdk/client-s3";
const client = new S3Client({ region: process.env.AWS_REGION })
const prisma = new PrismaClient();
const FormData = z.object({
    name: z.string().min(1).max(70),
    description: z.string().min(1).max(200),
});

const createCollectionFolder = async (userId,folderName) => {
    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: `user-${userId}/collections/${folderName}/`,
      Body: '', 
    };
  
    await client.send(new PutObjectCommand(params));
  
};
export const GET = async (request,response) => {
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

export const POST = async (request,response) => {
    const session = await getServerSession(authOptions)
    console.log(session);
    try {
        const collectionForm = await request.json();
        const validResult = FormData.safeParse(collectionForm);
        if(!validResult.success){
            console.log(validResult.error);
            return new Response(JSON.stringify({errors:validResult.error.issues}), { status: 400  })
        }
        const collection = await prisma.userCollection.findFirst({
            where: {
                name: collectionForm.name,
                userId: session.user.id
            }
        });
        if(collection){
            return new Response(JSON.stringify([{message:"Collection with this name alredy exists"}]), { status: 400 });
        }

        const newCollection = await prisma.userCollection.create({
            data: {
                name:collectionForm.name,
                description:collectionForm.description,
                user: {
                    connect: {
                      id: session.user.id
                    }
                  },
            },
        });
        createCollectionFolder(session.user.id,newCollection.id)
        return new Response(JSON.stringify(newCollection), { status: 201 })
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify([{message:"Failed to create a new collection"}]), { status: 500 });
    }
}
