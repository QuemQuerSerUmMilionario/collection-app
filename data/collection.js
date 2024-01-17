import { db } from "@/lib/db";

export const getCollectionByUser = async (userId) => {
  try {
    const user = await db.userCollection.findMany({
      where: { userId }
    });
    return user;
  } catch (error) {
    console.log("Error fetching getUserByEmail:" + error);
    throw error;
  }
};