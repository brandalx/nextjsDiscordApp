"use client";

import { Member } from "@prisma/client";

interface ChatMessagesProps {
  name: string;
  member: Member;
  chatId: string;
  apiUrl: string;
  socketUrl: string;
  socketQuery: Record<string, string>;
  paramKey: "channelId" | "conversationId";
  paramValues: string;
  type: "channel" | "conversation";
}
const ChatMessages = ({
  name,
  member,
  chatId,
  apiUrl,
  socketUrl,
  socketQuery,
  paramKey,
  paramValues,
  type,
}: ChatMessagesProps) => {
  return <div>Chat messages</div>;
};

export default ChatMessages;
