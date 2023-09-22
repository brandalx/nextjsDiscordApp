"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
} from "@/components/ui/dialog";

import { useModal } from "@/hooks/use-modal-store";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Check, Copy, RefreshCcw } from "lucide-react";

import { useState } from "react";
import axios from "axios";

export const MembersModal = () => {
  const { isOpen, onClose, type, data, onOpen } = useModal();

  const isModalOpen = isOpen && type === "members";
  const { server } = data;

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6 ">
          <DialogTitle className="text-2xl text-center font-bold">
            Invite members
          </DialogTitle>
        </DialogHeader>
        <div className="p-6">hello members</div>
      </DialogContent>
    </Dialog>
  );
};
