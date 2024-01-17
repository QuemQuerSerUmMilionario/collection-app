import { authOptions } from '@app/api/auth/[...nextauth]/route'
import { getServerSession } from "next-auth"
import { z } from 'zod'
import { db } from '@/lib/db';
import { createFolder } from "@/lib/s3Client"
import {getCollectionByUser} from "@/data/collection"
const FormData = z.object({
    name: z.string().min(1).max(70),
    description: z.string().min(1).max(200),
});

export const GET = async (request,response) => {
    try {
        const session = await getServerSession(authOptions)
        const collections = await getCollectionByUser(session.user.id);
        console.log(collections);
        return new Response(JSON.stringify(collections), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify({errors:[{message:"Failed to fetch all collections , " + error}]}), { status: 500 })
    }
}

export const POST = async (request,response) => {
    const session = await getServerSession(authOptions)
    try {
        const collectionForm = await request.json();
        const validResult = FormData.safeParse(collectionForm);
        if(!validResult.success){
            console.log(validResult.error);
            return new Response(JSON.stringify({errors:validResult.error.issues}), { status: 400  })
        }
        const collection = await db.userCollection.findFirst({
            where: {
                name: collectionForm.name,
                userId: session.user.id
            }
        });
        if(collection){
            console.log("entrou");
            return new Response(JSON.stringify({errors:[{message:"Collection with this name alredy exists"}]}), { status: 400 });
        }

        const newCollection = await db.userCollection.create({
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
        createFolder(session.user.id,newCollection.id)
        return new Response(JSON.stringify(newCollection), { status: 201 })
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({errors:[{message:"Failed to create a new collection ," + error}]}), { status: 500 });
    }
}
