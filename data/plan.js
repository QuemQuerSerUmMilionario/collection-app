import { db } from "@/lib/db";

export const getPlanByPriceId = async (priceId) => {
  try {
    const plan = await db.plan.findUnique({ where: { priceId:priceId } });
    return plan;
  } catch (error) {
    console.error("Error fetching getPlanByPriceId:", error);
    throw error;
  }
};


