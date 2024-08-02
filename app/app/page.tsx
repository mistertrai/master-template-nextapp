// app/app/page.tsx
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Avatar, Button, ScrollShadow, Spacer, Tooltip } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { useMediaQuery } from "usehooks-ts";

import { FirmIcon } from "@/components/icons/firm";
import { sectionItemsWithTeams } from "@/components/sidebar-items";
import { cn } from "@/lib/utils";
import Sidebar from "@/components/sidebar";
import { supabase } from "@/lib/supabase";

export default function AppPage() {
  const isCompact = useMediaQuery("(max-width: 768px)");
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      router.push('/login');
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  };

  return (
    <div className="flex h-screen w-full">
      <div
        className={cn(
          "relative flex h-full flex-col !border-r-small border-divider transition-width",
          {
            "w-16 items-center px-2 py-6": isCompact,
            "w-72 p-6": !isCompact,
          }
        )}
      >
        <div
          className={cn(
            "flex items-center gap-3 px-3",
            {
              "justify-center gap-0": isCompact,
            }
          )}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground">
            <FirmIcon className="text-background" />
          </div>
          <span
            className={cn("text-small font-bold uppercase opacity-100", {
              "w-0 opacity-0": isCompact,
            })}
          >
            FIRM
          </span>
        </div>
        <Spacer y={8} />
        <div className="flex items-center gap-3 px-3">
          <Avatar
            isBordered
            className="flex-none"
            size="sm"
            src="https://i.pravatar.cc/150?u=a04258114e29026708c"
          />
          <div className={cn("flex max-w-full flex-col", { hidden: isCompact })}>
            <p className="truncate text-small font-medium text-default-600">John Doe</p>
            <p className="truncate text-tiny text-default-400">Product Designer</p>
          </div>
        </div>
        <ScrollShadow className="-mr-6 h-full max-h-full py-6 pr-6">
          <Sidebar defaultSelectedKey="home" isCompact={isCompact} items={sectionItemsWithTeams} />
        </ScrollShadow>
        <Spacer y={2} />
        <div
          className={cn("mt-auto flex flex-col", {
            "items-center": isCompact,
          })}
        >
          <Tooltip content="Help & Feedback" isDisabled={!isCompact} placement="right">
            <Button
              fullWidth
              className={cn(
                "justify-start truncate text-default-500 data-[hover=true]:text-foreground",
                {
                  "justify-center": isCompact,
                }
              )}
              isIconOnly={isCompact}
              startContent={
                isCompact ? null : (
                  <Icon
                    className="flex-none text-default-500"
                    icon="solar:info-circle-line-duotone"
                    width={24}
                  />
                )
              }
              variant="light"
            >
              {isCompact ? (
                <Icon
                  className="text-default-500"
                  icon="solar:info-circle-line-duotone"
                  width={24}
                />
              ) : (
                "Help & Information"
              )}
            </Button>
          </Tooltip>
          <Tooltip content="Log Out" isDisabled={!isCompact} placement="right">
            <Button
              onClick={handleLogout}
              className={cn("justify-start text-default-500 data-[hover=true]:text-foreground", {
                "justify-center": isCompact,
              })}
              isIconOnly={isCompact}
              startContent={
                isCompact ? null : (
                  <Icon
                    className="flex-none rotate-180 text-default-500"
                    icon="solar:minus-circle-line-duotone"
                    width={24}
                  />
                )
              }
              variant="light"
            >
              {isCompact ? (
                <Icon
                  className="rotate-180 text-default-500"
                  icon="solar:minus-circle-line-duotone"
                  width={24}
                />
              ) : (
                "Log Out"
              )}
            </Button>
          </Tooltip>
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-between gap-3 border-b border-divider p-4">
          <h2 className="text-medium font-medium text-default-700">Overview</h2>
          <Button onClick={handleLogout}>Log Out</Button>
        </header>
        <main className="flex-1 p-4 overflow-auto">
          <div className="h-full w-full rounded-medium border-small border-divider" />
        </main>
      </div>
    </div>
  );
}
