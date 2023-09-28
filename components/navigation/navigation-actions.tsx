"use client";

import { Fingerprint, Plus } from "lucide-react";
import { ActionTooltip } from "../ui/action-tooltip";
import { useModal } from "@/hooks/use-modal-store";
const NavigtaionAction = () => {
  const { onOpen } = useModal();
  return (
    <div>
      <ActionTooltip side="right" align="center" label="server">
        <button
          onClick={() => onOpen("createServer")}
          className="group flex items-center"
        >
          <div className="flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-emerald-500">
            {/* <div>
              <div className="flex items-center justify-center">
                <Fingerprint className="group-hover:text-white transition text-emerald-500" />
              </div>
            </div> */}

            <Plus
              className="group-hover:text-white transition text-emerald-500"
              size={25}
            />
          </div>
        </button>
      </ActionTooltip>
    </div>
  );
};

export default NavigtaionAction;
