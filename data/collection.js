import { db } from "@/lib/db";

export const getCollectionByUser = async (userId) => {
  try {
    const user = await db.userCollection.findMany({
      where: { userId }
    });
    return user;
  } catch (error) {
    console.log("Error fetching getCollectionByUser:" + error);
    throw error;
  }
};

export const getCollectionById = async (collectioId) => {
  try {
    const user = await db.userCollection.findUnique({
      where: { id:collectioId }
    });
    return user;
  } catch (error) {
    console.log("Error fetching getCollectionById:" + error);
    throw error;
  }
};