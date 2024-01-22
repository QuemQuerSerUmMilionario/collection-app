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
        Key: `users/user-${userId}/collections/`,
        Body: '', 
    };
    return await client.send(new PutObjectCommand(params));
};


export const createFolder = async (
    key
  ) => {
      const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: key,
        Body: '', 
      };
      return await client.send(new PutObjectCommand(params));
};

export const uploadFile = async (
    key,
    file
  ) => {
    const buffer = Buffer.from(await file.arrayBuffer());
    const uploadParams = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: key,
        Body: buffer
    };
    const uploadCommand = new PutObjectCommand(uploadParams);
    return await client.send(uploadCommand);
};

export const uploadItemFile = async (
  key,
  itemId,
  file
) => {
  const buffer = Buffer.from(await file.arrayBuffer());
  const uploadParams = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: `items/item-${itemId}/${key}`,
      Body: buffer
  };
  const uploadCommand = new PutObjectCommand(uploadParams);
  return await client.send(uploadCommand);
};

export const uploadUserItemFile = async (
  key,
  userId,
  collectiondId,
  file
) => {
  const buffer = Buffer.from(await file.arrayBuffer());
  const uploadParams = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: `users/user-${userId}/collections/${collectiondId}/${key}`,
      Body: buffer
  };
  const uploadCommand = new PutObjectCommand(uploadParams);
  return await client.send(uploadCommand);
};

export const fetchFiles = async (
    key
  ) => {
    const listObjectsParams = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Prefix:key,
    };
    const listObjectsCommand = new ListObjectsV2Command(listObjectsParams);
    return await client.send(listObjectsCommand);
};

export const fetchFolder = async (
  key
) => {
  const headObjectsParams = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Prefix: key,
  };
  const headObjectsCommand = new HeadObjectCommand(headObjectsParams);
  return await client.send(headObjectsCommand);
};