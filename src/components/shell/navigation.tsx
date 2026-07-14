"use client";

import {
  BarChart3,
  BookOpenCheck,
  CalendarDays,
  CircleGauge,
  Clock3,
  GraduationCap,
  LayoutDashboard,
  MoreHorizontal,
  Sparkles,
  X,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { IconButton } from "@/components/ui";
import { cn } from "@/components/ui/utils";

export type NavItem = {
  href: string;
  label: string;
  shortLabel?: string;
  icon: LucideIcon;
};

export const navItems: NavItem[] = [
  { href: "/", label: "Dashboard", shortLabel: "Home", icon: LayoutDashboard },
  { href: "/assignments", label: "Assignments", shortLabel: "Tasks", icon: BookOpenCheck },
  { href: "/study-plan", label: "Study Plan", shortLabel: "Plan", icon: Sparkles },
  { href: "/schedule", label: "Schedule", icon: CalendarDays },
  { href: "/focus", label: "Focus", icon: Clock3 },
  { href: "/gpa", label: "GPA", icon: GraduationCap },
  { href: "/workload-risk", label: "Workload Risk", shortLabel: "Risk", icon: CircleGauge },
];

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

function ProductMark() {
  return (
    <Link href="/" className="flex min-h-11 items-center gap-3 rounded-[var(--radius-sm)] px-2 text-[var(--color-ink)] hover:bg-[var(--color-surface-muted)]" aria-label="UniPilot AI dashboard">
      <span className="flex size-9 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-primary)] text-[var(--color-on-primary)]">
        <BarChart3 className="size-5" aria-hidden="true" />
      </span>
      <span>
        <span className="block text-sm font-bold tracking-[-0.02em]">UniPilot AI</span>
        <span className="block text-xs text-[var(--color-text-muted)]">Student workspace</span>
      </span>
    </Link>
  );
}

export function DesktopNavigation() {
  const pathname = usePathname();

  return (
    <aside className="desktop-sidebar" aria-label="Primary navigation">
      <ProductMark />
      <nav className="mt-8 flex-1" aria-label="Academic modules">
        <ul className="grid gap-1">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);
            const Icon = item.icon;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex min-h-11 items-center gap-3 rounded-[var(--radius-sm)] px-3 text-sm font-medium transition-colors duration-200",
                    active
                      ? "bg-[var(--color-selected-bg)] text-[var(--color-selected-text)]"
                      : "text-[var(--color-text-muted)] hover:bg-[var(--color-surface-muted)] hover:text-[var(--color-ink)]",
                  )}
                >
                  <Icon className="size-5 shrink-0" aria-hidden="true" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="rounded-[var(--radius-md)] bg-[var(--color-primary-soft)] p-3 text-sm text-[var(--color-selected-text)]">
        <p className="font-semibold">Phase 1 foundation</p>
        <p className="mt-1 text-xs leading-5">Core features are intentionally not active yet.</p>
      </div>
    </aside>
  );
}

export function MobileNavigation() {
  const pathname = usePathname();
  const [moreOpen, setMoreOpen] = React.useState(false);
  const primaryItems = navItems.slice(0, 4);
  const moreItems = navItems.slice(4);
  const moreIsActive = moreItems.some((item) => isActive(pathname, item.href));

  return (
    <>
      {moreOpen ? (
        <div id="mobile-more-navigation" className="mobile-more-panel">
          <div className="mb-2 flex items-center justify-between gap-3 px-1">
            <p className="text-sm font-semibold text-[var(--color-ink)]">More modules</p>
            <IconButton label="Close more navigation" className="size-11 border-transparent" onClick={() => setMoreOpen(false)}>
              <X className="size-5" aria-hidden="true" />
            </IconButton>
          </div>
          <nav aria-label="Additional academic modules">
            <ul className="grid gap-1">
              {moreItems.map((item) => {
                const active = isActive(pathname, item.href);
                const Icon = item.icon;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMoreOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex min-h-11 items-center gap-3 rounded-[var(--radius-sm)] px-3 text-sm font-medium",
                        active
                          ? "bg-[var(--color-selected-bg)] text-[var(--color-selected-text)]"
                          : "text-[var(--color-text)] hover:bg-[var(--color-surface-muted)]",
                      )}
                    >
                      <Icon className="size-5" aria-hidden="true" />
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      ) : null}

      <nav className="mobile-bottom-nav" aria-label="Primary mobile navigation">
        <ul className="grid grid-cols-5 gap-1">
          {primaryItems.map((item) => {
            const active = isActive(pathname, item.href);
            const Icon = item.icon;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex min-h-14 min-w-0 flex-col items-center justify-center gap-1 rounded-[var(--radius-sm)] px-1 text-xs font-semibold",
                    active
                      ? "bg-[var(--color-selected-bg)] text-[var(--color-selected-text)]"
                      : "text-[var(--color-text-muted)] hover:bg-[var(--color-surface-muted)]",
                  )}
                >
                  <Icon className="size-5" aria-hidden="true" />
                  <span className="max-w-full truncate">{item.shortLabel ?? item.label}</span>
                </Link>
              </li>
            );
          })}
          <li>
            <button
              type="button"
              aria-expanded={moreOpen}
              aria-controls="mobile-more-navigation"
              onClick={() => setMoreOpen((current) => !current)}
              className={cn(
                "flex min-h-14 w-full min-w-0 flex-col items-center justify-center gap-1 rounded-[var(--radius-sm)] px-1 text-xs font-semibold",
                moreOpen || moreIsActive
                  ? "bg-[var(--color-selected-bg)] text-[var(--color-selected-text)]"
                  : "text-[var(--color-text-muted)] hover:bg-[var(--color-surface-muted)]",
              )}
            >
              <MoreHorizontal className="size-5" aria-hidden="true" />
              More
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
