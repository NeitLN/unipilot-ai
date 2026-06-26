"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

const navigation = [
  { name: "Day", href: "/" },
  { name: "Priorities", href: "/assignments" },
  { name: "Flow", href: "/schedule" },
  { name: "Zone", href: "/focus" },
]

export function BottomNav() {
  const pathname = usePathname()

  return (
    <div className="lg:hidden fixed bottom-8 left-6 right-6 z-50">
      <div className="bg-[var(--surface-elevated)]/90 backdrop-blur-2xl border-material shadow-premium-hover rounded-[20px] px-1.5 py-1.5 flex items-center justify-around">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className="relative px-4 py-2 z-10 w-full text-center"
            >
              <span className={`relative z-10 text-[12px] font-semibold transition-colors duration-300 ${isActive ? "text-[var(--text-ink)]" : "text-[var(--text-muted)]"}`}>
                {item.name}
              </span>
              {isActive && (
                <motion.div
                  layoutId="bottom-nav-active"
                  className="absolute inset-0 bg-[var(--surface-dimmed)] shadow-inner-soft rounded-[14px] -z-0"
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                />
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
