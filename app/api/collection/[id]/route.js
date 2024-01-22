import { authOptions } from '@app/api/auth/[...nextauth]/route'
import { getServerSession } from "next-auth"
import { z } from 'zod'
import { db } from '@/lib/db';

const FormData = z.object({
    id: z.string(),
    name: z.string().min(1).max(70),
    description: z.string().min(1).max(200),
});

export const GET = async (request,{params}) => {
    try {
        const session = await getServerSession(authOptions);
        const { id } = params.id;
        const existingCollection = await db.userCollection.findFirst({
            select: {
                id: true,
                name: true,
                description: true,
            },
            where: {
                id,
                userId: session.user.id,
            },
        });

        if (!existingCollection) {
            return new Response(JSON.stringify([{ message: 'Collection not found',errors:[{message:"Collection not found"}] }]), { status: 400 });
        }
        
        return new Response(JSON.stringify(existingCollection), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify([{message: 'Internal server error',errors:[{message:"Failed to fetch collection"}]}]), { status: 500 });
    }
}

export const PUT = async (request,{params}) => {
    const session = await getServerSession(authOptions);
    try {
        const collectionForm = await request.json();
        const validResult = FormData.safeParse(collectionForm);
        if(!validResult.success){
            console.log(validResult.error);
            return new Response(JSON.stringify({message: "Validation failed", errors: validResult.error.issues }), { status: 400 });
        }
        const collection = await db.userCollection.findFirst({
            where: {
                id :{
                    not:collectionForm.id
                },
                name: collectionForm.name,
                userId: session.user.id
            }
        });
        if(collection){
            return new Response(JSON.stringify({message:"Error",errors:[{message:"Collection with this name alredy exists"}]}), { status: 400 });
        }
        const updateCollection = await db.userCollection.update({
            where: {
                id:collectionForm.id,
            },
            data: {
                name:collectionForm.name,
                description:collectionForm.description,
            },
        });
        return new Response(JSON.stringify(updateCollection), { status: 200 })
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({message:"Error",errors:[{message:"Failed to update collection"}]}), { status: 500 });
    }
}

export const DELETE = async (request,{params}) => {
    const session = await getServerSession(authOptions);
    const { id } = params.id;
    try {
        const existingCollection = await db.userCollection.findFirst({
            where: {
                id,
                userId: session.user.id,
            },
        });

        if (!existingCollection) {
            return new Response(JSON.stringify({message:"Error",errors:[{ message: 'Collection not found' }]}), { status: 400 });
        }

        await db.userCollection.delete({
            where: {
                id,
            },
        });

        return new Response(JSON.stringify({message: 'Collection deleted successfully'}), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({message:"Internal Server Error",errors:[{ message: 'Failed to delete collection' }]}), { status: 500 });
    }
};
