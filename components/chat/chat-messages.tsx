"use client";

import { Member, Message, Profile } from "@prisma/client";
import ChatWelcome from "./chat-welcome";
import { useChatQuery } from "@/hooks/use-chat-query";
import { Loader2, ServerCrash } from "lucide-react";
import { group } from "console";
import { Fragment } from "react";
import ChatItem from "./chat-item";
import { format } from "date-fns";
import { useChatSocket } from "@/hooks/use-chat-socket";
const DATE_FORMAT = "d MMM yyyy, HH:mm";
type MessageWithMemberWithProfile = Message & {
  member: Member & {
    profile: Profile;
  };
};
interface ChatMessagesProps {
  name: string;
  member: Member;
  chatId: string;
  apiUrl: string;
  socketUrl: string;
  socketQuery: Record<string, string>;
  paramKey: "channelId" | "conversationId";
  paramValue: string;
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
  paramValue,
  type,
}: ChatMessagesProps) => {
  const queryKey = `chat:${chatId}`;
  const addKey = `chat:${chatId}:messages`;
  const updateKey = `chat:${chatId}:messages:update`;
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useChatQuery({
      queryKey,
      apiUrl,
      paramKey,
      paramValue,
    });

  useChatSocket({ queryKey, addKey, updateKey });

  if (status === "loading") {
    return (
      <div className="flex flex-col flex-1 justify-center items-center ">
        <Loader2 className="h-7 w-7 text-zinc-500 animate-spin" />

        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2">
          Loading messages...
        </p>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="flex flex-col flex-1 justify-center items-center ">
        <ServerCrash className="h-7 w-7 text-zinc-500 " />

        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2">
          Something went wrong, try refresh this page
        </p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col py-4 overflow-auto">
      <div className="flex-1" />

      <ChatWelcome type={type} name={name} />
      <div className="flex flex-col-reverse mt-auto">
        {data?.pages?.map((group, i) => (
          <Fragment key={i}>
            {group.items.map((message: MessageWithMemberWithProfile) => (
              <ChatItem
                id={message.id}
                content={message.content}
                currentMember={member}
                deleted={message.deleted}
                fileUrl={message.fileUrl}
                member={message.member}
                socketQuery={socketQuery}
                socketUrl={socketUrl}
                timestamp={format(new Date(message.createdAt), DATE_FORMAT)}
                isUpdated={message.updatedAt !== message.createdAt}
                key={message.id}
              />
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default ChatMessages;
