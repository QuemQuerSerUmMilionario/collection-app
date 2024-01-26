import { authOptions } from '@app/api/auth/[...nextauth]/route'
import { getServerSession } from "next-auth"
import { z } from 'zod'
import { db } from '@/lib/db';
import { getCollectionById } from '@/data/collection';
import { getItemById } from '@/data/model';
import {formDataToObject} from "@/lib/util"
import {uploadFile} from "@/lib/s3Client"
const FormData = z.object({
  collectionId: z.string().min(1),
  itemId: z.string().min(1),
  description: z.string(),
});

export async function GET(request,{ params }) {
  const items = await db.userCollection.findMany({
    include: {
      items: {
        include : {
           itemImages:true,
        }
      },
    },
     where: { 
      id:"b47df16e-8d6d-4035-a5df-9e0ddb1fe3b6" 
    }
  });
  return new Response(JSON.stringify(items), { status: 200 });

}
  
export const POST = async (request, response) => {
  try {
      const session = await getServerSession(authOptions);
      const itemForm = await request.formData();
      const userItem = await formDataToObject(itemForm);
      const file = itemForm.get("files");
      const validResult = FormData.safeParse(userItem);
      if (!validResult.success) {
          console.log(validResult.error);
          return new Response(JSON.stringify({ errors: validResult.error.issues }), { status: 400 })
      }
      const collectionExist = await getCollectionById(userItem.collectionId);
      if(!collectionExist){
        return new Response(JSON.stringify({ errors: [{ message: "Collection not found"}] }), { status: 400 });
      }

      const itemExist = await getItemById(userItem.itemId);
      if(!itemExist){
        return new Response(JSON.stringify({ errors: [{ message: "Item not found"}] }), { status: 400 });
      }

      const newItem = await db.$transaction(async (tx) => {
          const item = await tx.userItem.create({
              data: {
                itemId: userItem.itemId,
                userCollectionId: userItem.collectionId
              },
            });
         const filePath = `collections/${userItem.collectionId}/${userItem.itemId}/${file.name}`;
          await tx.userItemImage.create({
            data: {
              itemId: userItem.itemId,
              userCollectionId: userItem.collectionId,
              link: `${process.env.AWS_BUCKET_URL}/${filePath}`,
              fileName:file.name
            },
          });
          const resultUpload = await uploadFile(filePath, file);
          if (resultUpload?.$metadata?.httpStatusCode != 200) {
              throw new Error(`Error model file`);
          }
          return item;
      });
      return new Response(JSON.stringify(newItem), { status: 200 });
  } catch (error) {
      console.log(error);
      return new Response(JSON.stringify({ errors: [{ message: "Failed to create collection item ," + error }] }), { status: 500 });
  }
}