import bcrypt from "bcryptjs";
import { PrismaClient } from '@prisma/client';
import { z } from 'zod'

const FormData = z.object({
  name: z.string().min(1).max(70),
  email: z.string().email().max(64),
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
}).superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match"
      });
    }
});


const prisma = new PrismaClient();


export const POST = async (request) => {
    const userForm = await request.json();
    try {
        const validResult = FormData.safeParse(userForm);
        if(!validResult.success){
            return new Response(JSON.stringify({errors:validResult.error.issues}), { status: 400  })
        }
        var user = await prisma.user.findUnique({
            where: {
                email:userForm.email,
            }
        });
        if (user) {
            return new Response(JSON.stringify({message:"User with this e-mail alredy exists"}), { status: 400 })
        }
        const hashPassword = await bcrypt.hash(userForm.password,8);
        user = await prisma.user.create({
            data: {
                email: userForm.email,
                name: userForm.name,
                password: hashPassword,
                image:""
            },
        });
        return new Response(JSON.stringify({message:"Sucessfully registered account"}), { status: 200 })
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({message:"Failed to register account"}), { status: 500 })
    }
}
