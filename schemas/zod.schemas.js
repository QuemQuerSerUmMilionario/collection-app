import { z } from 'zod'

export const UserItemSchema = z.object({
  collectiondId: z.string().min(1),
  itemId: z.string().min(1),
  description: z.string(),
});

export const UserSchema = z.object({
  cpf: z.string(),
  phone: z.string(),
  name: z.string(),
});

export const CollectionSchema = z.object({
  name: z.string().min(1).max(70),
  description: z.string().min(1).max(200),
});

export const RegisterSchema = z.object({
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
