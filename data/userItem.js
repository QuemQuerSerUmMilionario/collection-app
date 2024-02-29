import { db } from "@/lib/db";

export const getUserItem = async (itemId,collectionId) => {
  try {
    const user = await db.userItem.findUnique({ 
        where: { 
            collectiondId:collectionId,
            itemId:itemId
        } 
    });
    return user;
  } catch (error) {
    console.error("Error fetching getUserItem:", error);
    throw error;
  }
};
