import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { SidebarItem } from "~/components/sidebar-item";
import { cn } from "~/lib/utils";

type Props = {
  className?: string;
};

export function Sidebar({ className }: Props) {
  return (
    <div
      className={cn(
        "left-0 top-0 flex h-full flex-col border-r-2 px-4 lg:fixed lg:w-[256px]",
        className
      )}
    >
      <Link href="/learn">
        <div className=" flex items-center gap-x-3 pb-7 pl-4 pt-8">
          <Image src="/mascot.svg" height={40} width={40} alt="Mascot" />
          <h1 className="text-2xl font-extrabold tracking-wide text-green-600">
            Lingo
          </h1>
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-y-2">
        {Object.entries(navItem).map(([href, { label, iconSrc }]) => (
          <SidebarItem
            key={label}
            label={label}
            href={href}
            iconSrc={iconSrc}
          />
        ))}
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="size-5 animate-spin text-muted-foreground" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
      </div>
    </div>
  );
}

const navItem = {
  "/learn": {
    label: "Learn",
    iconSrc: "/learn.svg",
  },
  "/leaderboard": {
    label: "Leaderboard",
    iconSrc: "/leaderboard.svg",
  },
  "/quests": {
    label: "Quests",
    iconSrc: "/quests.svg",
  },
  "/shop": {
    label: "Shop",
    iconSrc: "/shop.svg",
  },
};
