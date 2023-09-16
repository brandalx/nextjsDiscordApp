"use-client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogHeader,
} from "@/components/ui/dialog";

export const InitialModal = () => {
  return (
    <Dialog open>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6 ">
          <DialogTitle className="text-2xl text-center font-bold">
            Edit your server
          </DialogTitle>
          <DialogDescription className="text-center text-zinc-500">
            Edit your server name and image, you can always change it later as
            well
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
