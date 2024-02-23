import { authOptions } from '@app/api/auth/[...nextauth]/route'
import { getServerSession } from "next-auth"
import { db } from '@/lib/db';
import { getItems } from "@/data/model"
import {uploadFile} from "@/lib/s3Client"
import {formDataToObject} from "@/lib/util"
import { v4 as uuidv4 } from 'uuid';
import { ItemSchema } from '@schemas/zod.schemas';

export const GET = async (req, response) => {
    try {
        const collectionId = req.nextUrl?.searchParams?.get('collectionId')??"";
        const model = req.nextUrl?.searchParams?.get('model')??"";
        const year = req.nextUrl?.searchParams?.get('year')??"";
        const skip = req.nextUrl?.searchParams?.get('skip')??"";
        if (!collectionId) {
            return new Response(JSON.stringify({ errors: [{ message: "Collection is required" }] }), { status: 400 })
        }
        const items = await getItems(parseInt(collectionId), model, year,parseInt(skip),5);
        return new Response(JSON.stringify(items), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify({ errors: [{ message: "Failed to fetch models , " + error }] }), { status: 500 })
    }
}

export const POST = async (request, response) => {
    try {
        const session = await getServerSession(authOptions);
        const itemForm = await request.formData();
        const item = await formDataToObject(itemForm);
        const file = itemForm.get("file");
        const validResult = ItemSchema.safeParse(item);
        if (!validResult.success) {
            console.log(validResult.error);
            return new Response(JSON.stringify({ errors: validResult.error.issues }), { status: 400 })
        }

        const items = await getItems(parseInt(item.collectionId), item.model,item.year);
        if (items?.length > 0) {
            return new Response(JSON.stringify({ errors: [{ message: "Item alredy exists" }] }), { status: 400 });
        }
        /*"clrm4nlhg00005zbhdnchsgw3"*/
        var newItem = await db.$transaction(async (tx) => {
            const filePath = `items/model-${item.model}/${item.year}/${encodeURIComponent(file.name)}`;
            const link = encodeURI(`${process.env.AWS_BUCKET_URL}/${filePath}`);
            const entity  = await tx.item.create({
                data: {
                    id: uuidv4(), 
                    year: item.year,
                    model: item.model,
                    userId: session.user?.id,
                    typeModelId:1,
                    collectionId:parseInt(item.collectionId),
                    image: link
                }
            });
            const resultUpload = await uploadFile(filePath, file);
            if (resultUpload?.$metadata?.httpStatusCode != 200) {
                throw new Error(`Error model file`);
            }
            return entity;
        });
        return new Response(JSON.stringify(newItem), { status: 201 });
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({ errors: [{ message: "Failed to create a new item ," + error }] }), { status: 500 });
    }
}
