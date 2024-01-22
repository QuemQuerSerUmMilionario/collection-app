import { authOptions } from '@app/api/auth/[...nextauth]/route'
import { getServerSession } from "next-auth"
import { z } from 'zod'
import { db } from '@/lib/db';
import { getItems } from "@/data/model"
import {uploadFile} from "@/lib/s3Client"
import {formDataToObject} from "@/lib/util"
import { v4 as uuidv4 } from 'uuid';

const FormData = z.object({
    year: z.string().min(1),
    model: z.string().min(1),
    collectionId: z.string().min(1),
});
  
export const GET = async (req, response) => {
    try {
        const collectionId = req.nextUrl?.searchParams?.get('collectionId');
        const model = req.nextUrl?.searchParams?.get('model');
        const year = req.nextUrl?.searchParams?.get('year');
        if (!collectionId) {
            return new Response(JSON.stringify({ errors: [{ message: "Collection is required" }] }), { status: 400 })
        }
        const items = await getItems(parseInt(collectionId), model, year);
        return new Response(JSON.stringify(items), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify({ errors: [{ message: "Failed to fetch models , " + error }] }), { status: 500 })
    }
}

export const POST = async (request, response) => {
    try {
        const session = await getServerSession(authOptions)
        const itemForm = await request.formData();
        const item = await formDataToObject(itemForm);
        const file = itemForm.get("file");
        
        const validResult = FormData.safeParse({
            ...item,
            file: file,
        });

        if (!validResult.success) {
            console.log(validResult.error);
            return new Response(JSON.stringify({ errors: validResult.error.issues }), { status: 400 })
        }

        const items = await getItems(parseInt(item.collectionId), item.model,item.year);
        if (items?.length > 0) {
            return new Response(JSON.stringify({ errors: [{ message: "Item alredy exists" }] }), { status: 400 });
        }
        /*"clrm4nlhg00005zbhdnchsgw3"*/
        const newItem = await db.$transaction(async (tx) => {
            var entity = await tx.item.create({
                data: {
                    id:uuidv4(),
                    year: item.year,
                    model: item.model,
                    userId: session?.user?.id,
                    typeModelId:1,
                    typeCollectionId:parseInt(item.collectionId)
                },
            });
            const filePath = `items/model-${item.model}/${item.year}/${file.name}`;
            const resultUpload = await uploadFile(filePath, file);
            if (resultUpload?.$metadata?.httpStatusCode != 200) {
                throw new Error(`Error model file`);
            }
            entity = await tx.item.update({
                where: {
                    id: entity.id
                },
                data: {
                    image: `${process.env.AWS_BUCKET_URL}/${filePath}`,
                },
            });
            return entity;
        });
        return new Response(JSON.stringify(newItem), { status: 201 });
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({ errors: [{ message: "Failed to create a new item ," + error }] }), { status: 500 });
    }
}
