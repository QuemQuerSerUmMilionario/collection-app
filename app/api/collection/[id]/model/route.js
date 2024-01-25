import { authOptions } from '@app/api/auth/[...nextauth]/route'
import { getServerSession } from "next-auth"
import { z } from 'zod'
import { db } from '@/lib/db';
import { getCollectionById } from '@/data/collection';
import {formDataToObject} from "@/lib/util"
const FormData = z.object({
  collectiondId: z.string().min(1),
  itemId: z.string().min(1),
  description: z.string(),
});

export async function GET(request,{ params }) {
    
}
  
export const POST = async (request, response) => {
  try {
      const session = await getServerSession(authOptions);
      const itemForm = await request.formData();
      const userItem = await formDataToObject(itemForm);
      const file = itemForm.get("files");
      const validResult = FormData.safeParse(itemForm);
      if (!validResult.success) {
          console.log(validResult.error);
          return new Response(JSON.stringify({ errors: validResult.error.issues }), { status: 400 })
      }
      const collection = await getCollectionById(userItem.collectionId);
      if(!collection){
        return new Response(JSON.stringify({ errors: [{ message: "Collection not found"}] }), { status: 400 });
      }

      const item = await getItemById(userItem.collectionId);
      if(!collection){
        return new Response(JSON.stringify({ errors: [{ message: "Item not found"}] }), { status: 400 });
      }

      const newItem = await db.$transaction(async (tx) => {
          const userItem = await tx.userItem.create({
              data: {
                  collectionId: userItem.collectiondId,
                  itemId: userItem.itemId,
                  userId: session?.user?.id,
              },
          });
          await tx.userItemImage.create({
            data: {
              itemId: item.itemId,
              collectionId:item.collectionId,
              image: `${process.env.AWS_BUCKET_URL}/${filePath}`,
            },
          });
          const filePath = `collections/${userItem.collectiondId}/${userItem.id}/${file.name}`;
          const resultUpload = await uploadFile(filePath, file);
          if (resultUpload?.$metadata?.httpStatusCode != 200) {
              throw new Error(`Error model file`);
          }
          return entity;
      });
      return new Response(JSON.stringify(newItem), { status: 200 });
  } catch (error) {
      console.log(error);
      return new Response(JSON.stringify({ errors: [{ message: "Failed to create collection item ," + error }] }), { status: 500 });
  }
}