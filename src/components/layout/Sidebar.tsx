"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

const navigation = [
  { name: "My Day", href: "/" },
  { name: "Priorities", href: "/assignments" },
  { name: "Timeline", href: "/schedule" },
  { name: "Zone", href: "/focus" },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="hidden lg:flex flex-col fixed inset-y-0 left-0 w-[240px] z-50 py-12 px-6 border-r border-[var(--border-subtle)] bg-[var(--bg-canvas)]/80 backdrop-blur-2xl">
      <div className="flex items-center mb-12 px-4">
        <span className="text-[15px] font-bold tracking-tight text-[var(--text-ink)]">UniPilot</span>
      </div>
      
      <div className="flex flex-col flex-grow">
        <nav className="flex-1 space-y-0.5">
          {navigation.map((item) => {
            const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== "/")
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`group relative flex items-center px-4 py-2.5 text-[13px] rounded-[10px] transition-colors duration-200 ${
                  isActive
                    ? "text-[var(--text-ink)] font-semibold"
                    : "text-[var(--text-muted)] hover:text-[var(--text-ink)] font-medium"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="sidebar-active"
                    className="absolute inset-0 bg-[var(--surface-elevated)] border-material shadow-premium-soft rounded-[10px] -z-10"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
                <span className="relative z-10 tracking-wide">{item.name}</span>
              </Link>
            )
          })}
        </nav>
      </div>

      <div className="flex flex-shrink-0 mb-4">
        <Link
          href="/settings"
          className="flex items-center w-full px-4 py-2.5 text-[13px] font-medium text-[var(--text-muted)] rounded-[10px] hover:bg-[var(--surface-dimmed)] hover:text-[var(--text-ink)] transition-colors duration-200 tracking-wide"
        >
          Preferences
        </Link>
      </div>
    </div>
  )
}
