import { authOptions } from '@app/api/auth/[...nextauth]/route'
import { getServerSession } from "next-auth"
import { db } from '@/lib/db';
import { getUserByCpfAndNotId,getUserByPhoneAndNotId ,getUserById} from '@/data/user';
import {UserSchema} from "@/schemas/zod.schemas"

export const GET = async (request) => {
    try {
        const session = await getServerSession(authOptions);
        const user = await getUserById(session?.user?.id)
        return new Response(JSON.stringify(user), { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({message:"Error",errors:[{message:"Failed to find user - " + error}]}), { status: 500 });
    }
}

export const PUT = async (request) => {
    try {
        const session = await getServerSession(authOptions);
        const userForm = await request.json();
        const validResult = UserSchema.safeParse(userForm);
        if(!validResult.success){
            console.log(validResult.error);
            return new Response(JSON.stringify({message: "Validation failed", errors: validResult.error.issues }), { status: 400 });
        }

        const userCpf = await getUserByCpfAndNotId(userForm.cpf,session.user.id);
        if(userCpf){
            return new Response(JSON.stringify({message:"Error",errors:[{message:"User with this cpf alredy exists"}]}), { status: 400 });
        }

        const userPhone = await getUserByPhoneAndNotId(userForm.phone,session.user.id);
        if(userPhone){
            return new Response(JSON.stringify({message:"Error",errors:[{message:"User with this phone alredy exists"}]}), { status: 400 });
        }

        const updateUser = await db.user.update({
            where: {
                id:session.user?.id,
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

