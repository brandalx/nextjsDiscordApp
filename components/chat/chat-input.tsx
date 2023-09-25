"use client";

import * as z from "zod";

interface ChatInputProps {
  apiUrl: string;
  query: Record<string, any>;
  type: "conversation" | "channel";
  name: string;
}

const formSchema = z.object({
  content: z.string().min(1),
});
const ChatInput = ({ apiUrl, query, type, name }: ChatInputProps) => {
  return <div>ChatInput</div>;
};

export default ChatInput;
