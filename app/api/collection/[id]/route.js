import { authOptions } from '@app/api/auth/[...nextauth]/route'
import { getServerSession } from "next-auth"
import { z } from 'zod'
import { db } from '@/lib/db';


const FormData = z.object({
    id: z.string(),
    name: z.string().min(1).max(70),
    description: z.string().min(1).max(200),
});
export const PATCH = async (request,response) => {
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
                id :{
                    not:collectionForm.id
                },
                name: collectionForm.name,
                userId: session.user.id
            }
        });
        if(collection){
            return new Response(JSON.stringify([{message:"Collection with this name alredy exists"}]), { status: 400 });
        }

        const newCollection = await db.userCollection.create({
            data: {
                id:collectionForm.id,
                name:collectionForm.name,
                description:collectionForm.description,
                user: {
                    connect: {
                      id: session.user.id
                    }
                },
            },
        });
        return new Response(JSON.stringify(newCollection), { status: 201 })
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify([{message:"Failed to update collection"}]), { status: 500 });
    }
}

export const DELETE = async (request,response) => {
    const session = await getServerSession(authOptions);
    const { id } = request.params;

    try {
        const existingCollection = await db.userCollection.findFirst({
            where: {
                id,
                userId: session.user.id,
            },
        });

        if (!existingCollection) {
            return new Response(JSON.stringify([{ message: 'Collection not found' }]), { status: 400 });
        }

        await db.userCollection.delete({
            where: {
                id,
            },
        });

        return new Response(JSON.stringify([{ message: 'Collection deleted successfully' }]), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify([{ message: 'Failed to delete collection' }]), { status: 500 });
    }
};
