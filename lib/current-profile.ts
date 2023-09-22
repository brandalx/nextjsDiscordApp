import { auth } from "@clerk/nextjs";
import { db } from "./db";
export const currentProfile = async () => {
  const { userId } = auth();
  if (!userId) {
    return null;
  }

  try {
    const profile = await db.profile.findUnique({
      where: {
        userId,
      },
    });
    return profile;
  } catch (error) {
    console.error("Error fetching profile:", error);
    throw error;
  }
};
