"use client";

import { Channel, MemberRole, Server } from "@prisma/client";

interface ServerChannelProps {
  channel: Channel;
  server: Server;
  role?: MemberRole;
}
const ServerChannel = () => {
  return <div>Server Channel</div>;
};

export default ServerChannel;
