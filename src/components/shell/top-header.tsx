"use client";

import { Bell, UserRound } from "lucide-react";
import { usePathname } from "next/navigation";
import { IconButton } from "@/components/ui";
import { navItems } from "./navigation";

export function TopHeader() {
  const pathname = usePathname();
  const current = navItems.find((item) => (item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)));

  return (
    <header className="top-header">
      <div className="min-w-0">
        <p className="text-xs font-medium text-[var(--color-text-muted)] sm:text-sm">UniPilot AI</p>
        <p className="truncate text-base font-semibold text-[var(--color-ink)] sm:text-lg">{current?.label ?? "Student workspace"}</p>
      </div>
      <div className="flex items-center gap-2" aria-label="Account controls">
        <IconButton label="Notifications are not configured in Phase 1" disabled>
          <Bell className="size-5" aria-hidden="true" />
        </IconButton>
        <IconButton label="Account is not configured in Phase 1" disabled>
          <UserRound className="size-5" aria-hidden="true" />
        </IconButton>
      </div>
    </header>
  );
}
