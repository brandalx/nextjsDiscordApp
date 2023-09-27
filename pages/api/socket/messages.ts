import { typeNextApiResponseServerIo } from "@/types";
import { NextApiRequest } from "next";

export default async function handler(
  req: NextApiRequest,
  res: typeNextApiResponseServerIo
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  try {
  } catch (error) {
    console.log("[MESSAGE_POST]", error);
    return res.status(500).json({ message: "Internal error" });
  }
}
