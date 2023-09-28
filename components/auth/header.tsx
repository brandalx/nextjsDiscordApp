"use client";
import { Fingerprint } from "lucide-react";
import { ModeToggle } from "../mode-toggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "../../components/ui/navigation-menu";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "GitHub Repo of NexusTalk",
    href: "https://github.com/brandalx/NextJSNexusTalk",
    description: "See open source code of this porject",
  },
  {
    title: "Read about NexusTalk",
    href: "https://brandnolandev.com/projects/648207b8c3da1d9a1258ce17",
    description: "Read about NexusTalk on Developer Web Site",
  },
  {
    title: "About Developer of NexusTalk",
    href: "http://brandnolandev.com/about",
    description: "Read more about developer",
  },
  {
    title: "Visit Developer GitHub",
    href: "https://github.com/brandalx",
    description: "Visit Developer's GitHub and checkout other projects",
  },
];
const Header = () => {
  return (
    <div className="flex justify-between px-5 items-center container">
      <div className="flex items-center">
        <Fingerprint className="text-indigo-500" />
        <div>
          <p className="px-2 font-mono">NexusTalk</p>
        </div>
        <div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-mono dark:border-white border-black border m-2">
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-2 p-2 md:w-[400px] md:grid-cols-2 lg:w-[500px]  ">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      <div className="flex items-center">
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <div className="dark:border-white border-black border m-2 rounded-md px-2">
          <a
            target="_blank"
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none font-mono">
              {title}
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </div>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
