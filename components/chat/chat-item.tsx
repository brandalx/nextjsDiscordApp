"use client";

import { Member, Profile } from "@prisma/client";

interface ChatItemProps {
  id: string;
  content: string;
  member: Member & {
    profile: Profile;
  };
  timestamp: string;
  fileUrl: string | null;
  deleted: boolean;
  currentMember: Member;
  usUpdated: boolean;
  socketUrl: string;
  socketQuery: Record<string, string>;
}

const ChatItem = ({
  id,
  content,
  currentMember,
  deleted,
  fileUrl,
  member,
  socketQuery,
  socketUrl,
  timestamp,
  usUpdated,
}: ChatItemProps) => {
  return <div>Chat Item</div>;
};

export default ChatItem;
