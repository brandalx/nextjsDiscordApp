"use client";
import {
  Code2,
  Fingerprint,
  Github,
  GithubIcon,
  Info,
  ScrollText,
  Text,
} from "lucide-react";
import { ModeToggle } from "../mode-toggle";

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

const Header = () => {
  return (
    <div className="flex justify-between px-5 my-2 items-center container">
      <div className="flex items-center">
        <Fingerprint className="text-indigo-500" />
        <div>
          <p className="px-2 font-mono">NexusTalk</p>
        </div>
      </div>

      <div className="flex items-center">
        <div>
          <Menubar className="border-dashed border h-[42px] w-[42px] flex justify-center items-center bg-transparent ">
            <MenubarMenu>
              <MenubarTrigger>
                <Info className="h-4 w-4 " />
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem className="font-mono text-sm">
                  <a
                    href="https://github.com/brandalx/NextJSNexusTalk"
                    target="_blank"
                  >
                    Code source
                  </a>
                  <MenubarShortcut>
                    <Github className="h-4 w-4" />
                  </MenubarShortcut>
                </MenubarItem>
                <MenubarItem className="font-mono text-sm">
                  <a href="http://brandnolandev.com/" target="_blank">
                    About NexusTalk
                  </a>

                  <MenubarShortcut>
                    <ScrollText className="h-4 w-4" />
                  </MenubarShortcut>
                </MenubarItem>

                <MenubarSeparator />
                <MenubarItem className="font-mono text-sm">
                  <a href="http://brandnolandev.com/about" target="_blank">
                    About Developer
                  </a>

                  <MenubarShortcut>
                    <Code2 className="h-4 w-4" />
                  </MenubarShortcut>
                </MenubarItem>

                <MenubarItem className="font-mono text-sm">
                  <a href="https://github.com/brandalx" target="_blank">
                    Developer GitHub
                  </a>

                  <MenubarShortcut>
                    <GithubIcon className="h-4 w-4" />
                  </MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
        <div className="border-dashed border ml-2 rounded-md">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
