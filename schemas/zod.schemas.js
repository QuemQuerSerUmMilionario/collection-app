import { z } from 'zod'

const MAX_FILE_SIZE = 5000000; // 5 MB in bytes
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

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

export const UserItemsSchema = z.object({
  collectionId: z.string().min(1),
  itemId: z.string().min(1),
  description: z.string(),
  files: z
    .any()
    .refine((files) => files?.length > 0, "Image is required.")
    .refine((files) => {
      const valid = !files?.some((f) => f?.size > MAX_FILE_SIZE);
      return valid;
    }, `Max file size is 5MB.`)
    .refine((files) => {
      const valid = files?.every((f) => ACCEPTED_IMAGE_TYPES.includes(f?.type));
      return valid;
    }, ".jpg, .jpeg, .png and .webp files are accepted.")
});

export const ItemSchema = z.object({
  year: z.string().min(1),
  model: z.string().min(1),
  collectionId: z.string().min(1),
  file: z
    .any()
    .refine((file) => file?.length > 0, "Image is required.")
    .refine((file) => {
      const valid = !file.size > MAX_FILE_SIZE;
      return valid;
    }, `Max file size is 5MB.`)
    .refine((files) => {
      const valid =  ACCEPTED_IMAGE_TYPES.includes(file?.type);
      return valid;
    }, ".jpg, .jpeg, .png and .webp files are accepted.")
});