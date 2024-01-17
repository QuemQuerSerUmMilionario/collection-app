import bcrypt from "bcryptjs";
import { PrismaClient } from '@prisma/client';
import { z } from 'zod'
import { sendVerificationEmail } from "@/lib/mail";
import { generateVerificationToken } from "@/lib/tokens";

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
            return new Response(JSON.stringify({message:"Invalid Params",errors:validResult.error.issues}), { status: 400 })
        }
        var user = await prisma.user.findUnique({
            where: {
                email:userForm.email,
            }
        });
        if (user) {
            return new Response(JSON.stringify({message:"Invalid Params",errors:[{ message: "User with this e-mail alredy exists" }]}), { status: 500 });
        }
        const hashPassword = await bcrypt.hash(userForm.password,8);
        user = await prisma.user.create({
            data: {
                email: userForm.email,
                name: userForm.name,
                password: hashPassword,
                image:"/assets/images/perfil.png"
            },
        });
        const verificationToken = await generateVerificationToken(userForm.email);
        await sendVerificationEmail(
          verificationToken.identifier,
          verificationToken.token,
        );
      
        return new Response(JSON.stringify([{message:"Sucessfully registered account"}]), { status: 201 })
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({message:"Internal Server Error",errors:[{ message: 'Failed to register account' }]}), { status: 500 });
    }
}
