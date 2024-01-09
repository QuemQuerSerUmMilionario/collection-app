import  { S3Client, PutObjectCommand,ListObjectsV2Command }  from '@aws-sdk/client-s3'
import { authOptions } from '@app/api/auth/[...nextauth]/route'
import { getServerSession } from "next-auth"
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const client = new S3Client({ region: process.env.AWS_REGION })


export async function GET(request,{ params }) {
    const id = params.id;
    const session = await getServerSession(authOptions)
    try {
     var user = await prisma.user.findUnique({
          where: {
            email: session.user.email,
          }
      });  
      const listObjectsParams = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Prefix: `user-${user.id}/collections/${id}/`,
      };
      const listObjectsCommand = new ListObjectsV2Command(listObjectsParams);

      const response = await client.send(listObjectsCommand);
      const images = response.Contents.filter((object) => !object.Key.endsWith('/')) .map((object) => process.env.AWS_BUCKET_URL + '/' + object.Key);
      return new Response(JSON.stringify(images), { status: 200 })
    } catch (error) {
      return Response.json({ error: error.message }, { status: 500 })
    }
}
  
export async function POST(request, { params }) {
  const session = await getServerSession(authOptions);
  const id = params.id;
  try {
    var user = await prisma.user.findUnique({
        where: {
          email: session.user.email,
        }
    });
    if(user){
      const formData = await request.formData();
      const file =  formData.get("file");
      if(!file) {
          return NextResponse.json( { error: "File is required."}, { status: 400 } );
      } 
  
      const buffer = Buffer.from(await file.arrayBuffer());
      const uploadParams = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `user-${user.id}/collections/${id}/${file.name}`,
        Body: buffer
      };
      const uploadCommand = new PutObjectCommand(uploadParams);
      await client.send(uploadCommand);
      return Response.json({ success:true })
    }else{
      return Response.json({ error: "log in first" })
    }
  } catch (error) {
    return Response.json({ error: error.message })
  }
}
