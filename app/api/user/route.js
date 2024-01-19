import { authOptions } from '@app/api/auth/[...nextauth]/route'
import { getServerSession } from "next-auth"
import { z } from 'zod'
import { db } from '@/lib/db';
import { getUserByCpf,getUserByEmail,getUserByPhone,getUserByName } from '@/data/user';

const FormData = z.object({
    cpf: z.string(),
    phone: z.string(),
    name: z.string(),
});

export const PUT = async (request) => {
    const session = await getServerSession(authOptions);
    try {
        const userForm = await request.json();
        const validResult = FormData.safeParse(userForm);
        if(!validResult.success){
            console.log(validResult.error);
            return new Response(JSON.stringify({message: "Validation failed", errors: validResult.error.issues }), { status: 400 });
        }
        const userExist = await db.user.findFirst({
            where: {
                id :{
                    not:session.user.id
                },
                name:userForm.name,
            }
        });
        if(userExist){
            return new Response(JSON.stringify({message:"Error",errors:[{message:"User with this name alredy exists"}]}), { status: 400 });
        }

        const updateUser = await db.user.update({
            where: {
                id:session.user.id,
            },
            data: {
                name:userForm.name,
                cpf: userForm.cpf,
                phone: userForm.phone,
            },
        });
        return new Response(JSON.stringify(updateUser), { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({message:"Error",errors:[{message:"Failed to update user - " + error}]}), { status: 500 });
    }
}

