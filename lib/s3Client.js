import {
    S3Client,
    PutObjectCommand,
    HeadObjectCommand
} from "@aws-sdk/client-s3";

const client = new S3Client({ region: process.env.AWS_REGION })

export const createUserFolder = async (
    userId
  ) => {
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `user-${userId}/collections/`,
        Body: '', 
    };
    return await client.send(new PutObjectCommand(params));
};

export const createFolder = async (
    userId,
    folderId
  ) => {
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `user-${userId}/collections/${folderId}/`,
        Body: '', 
      };
    return await client.send(new PutObjectCommand(params));
};

export const uploadFile = async (
    userId,
    folderId,
    file
  ) => {
    const buffer = Buffer.from(await file.arrayBuffer());
    const uploadParams = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `user-${userId}/collections/${folderId}/${file.name}`,
        Body: buffer
    };
    const uploadCommand = new PutObjectCommand(uploadParams);
    return await client.send(uploadCommand);
};

export const fetchFiles = async (
    userId,
    folderId,
  ) => {
    const listObjectsParams = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Prefix: `user-${userId}/collections/${folderId}/`,
    };
    const listObjectsCommand = new ListObjectsV2Command(listObjectsParams);
    return await client.send(listObjectsCommand);
};
