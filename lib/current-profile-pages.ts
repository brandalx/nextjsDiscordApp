import { getAuth } from "@clerk/nextjs/server";
import { db } from "./db";
import { NextApiRequest } from "next";
export const currentProfile = async (req: NextApiRequest) => {
  const { userId } = getAuth(req);
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
