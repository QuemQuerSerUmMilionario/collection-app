import { db } from "@/lib/db";

export const getVerificationTokenByToken = async (
  token
) => {
  try {
    const verificationToken = await db.verificationToken.findUnique({
      where: { token }
    });

    return verificationToken;
  } catch (error) {
    console.error("Error fetching getVerificationTokenByToken:", error);
    throw error;
  }
}

export const getVerificationTokenByEmail = async (
  email
) => {
  try {
    const verificationToken = await db.verificationToken.findFirst({
      where: { identifier:email }
    });

    return verificationToken;
  } catch (error) {
    console.error("Error fetching getVerificationTokenByEmail:", error);
    throw error;
  }
}