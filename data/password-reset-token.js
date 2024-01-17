import { db } from "@/lib/db";

export const getPasswordResetTokenByToken = async (token) => {
  try {
    const passwordResetToken = await db.passwordResetToken.findUnique({
      where: { token }
    });

    return passwordResetToken;
  } catch (error) {
    console.error("Error fetching reset token:", error);
    throw error;
  }
};

export const getPasswordResetTokenByEmail = async (email) => {
  try {
    const passwordResetToken = await db.passwordResetToken.findFirst({
      where: { email }
    });

    return passwordResetToken;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};
