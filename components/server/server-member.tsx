"use client";

import { Member, Profile, Server } from "@prisma/client";

interface ServerMemberProps {
  member: Member & { profile: Profile };
  server: Server;
}
const ServerMember = ({ member, server }: ServerMemberProps) => {
  return <div>Server Member</div>;
};

export default ServerMember;
