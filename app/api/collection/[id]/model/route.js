import { db } from '@/lib/db';
import { authOptions } from '@app/api/auth/[...nextauth]/route'
import { getServerSession } from "next-auth"
import { getCollectionById } from '@/data/collection';
import { getItemById } from '@/data/model';
import {formDataToObject,handleResponse} from "@/lib/util"
import {uploadFile} from "@/lib/s3Client"
import {UserItemsSchema} from "@/schemas/zod.schemas"

export async function GET(request,{ params }) {
  const  id  = params.id;
  console.log(id);
  const items = await db.userCollection.findUnique({
    where: {
      id: id,
    },
    select: {
      name: true,
      description: true,
      items: {
        select: {
          description: true,
          name: true,
          itemImages: {
            select: {
              link: true,
              fileName: true,
            },
          },
          item: {
            select: {
              model: true,
              series: true,
              year: true
            },
          },
        },
      },
    },
  });
  return  handleResponse(JSON.stringify(items),200,'application/json;charset=utf-8')
}
  
export const POST = async (request, response) => {
  try {
      const session = await getServerSession(authOptions);
      const itemForm = await request.formData();
      const userItem = await formDataToObject(itemForm);
      const validResult = UserItemsSchema.safeParse(userItem);
      if (!validResult.success) {
          return new Response(JSON.stringify({ errors: validResult.error.issues }), { status: 400 })
      }
      const collectionExist = await getCollectionById(userItem.collectionId);
      if(!collectionExist){
        return new Response(JSON.stringify({ errors: [{ message: `Collection ${userItem.collectionId} not found` }] }), { status: 400 });
      }
      if(collectionExist.userId !== session.user?.id/*"clrm4nlhg00005zbhdnchsgw3"*/){
        return new Response(JSON.stringify({ errors: [{ message: `You have no permissions for add items to this collection` }] }), { status: 400 });
      }
      const itemExist = await getItemById(userItem.itemId);
      if(!itemExist){
        return new Response(JSON.stringify({ errors: [{ message: `Item ${userItem.itemId} not found`}] }), { status: 400});
      }

      const newItem = await db.$transaction(async (tx) => {
          const item = await tx.userItem.create({
              data: {
                itemId: userItem.itemId,
                userCollectionId: userItem.collectionId,
                name:userItem.name,
                description:userItem.description
              },
          });
          await Promise.all(userItem.files?.map(async (f) => {
              const filePath = `collections/${userItem.collectionId}/${userItem.itemId}/${encodeURIComponent(f.name)}`;
              const link = encodeURI(`${process.env.AWS_BUCKET_URL}/${filePath}`);
              await tx.userItemImage.create({
                data: {
                  itemId: userItem.itemId,
                  userCollectionId: userItem.collectionId,
                  link: link,
                  fileName: f.name
                },
              });
              const resultUpload = await uploadFile(filePath, f);
              if (resultUpload?.$metadata?.httpStatusCode != 200) {
                throw new Error(`Error model file`);
              }
          }));  
          return item;
      });
      return new Response(JSON.stringify(newItem), { status: 201 });
  } catch (error) {
      console.log(error);
      return new Response(JSON.stringify({ errors: [{ message: "Failed to create collection item ," + error }] }), { status: 500 });
  }
}