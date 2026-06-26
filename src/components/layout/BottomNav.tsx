"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Layout, CheckCircle, BrainCircuit, Focus, MoreHorizontal } from "lucide-react"

const navigation = [
  { name: "Home", href: "/", icon: Layout },
  { name: "Tasks", href: "/assignments", icon: CheckCircle },
  { name: "Planner", href: "/ai-planner", icon: BrainCircuit },
  { name: "Focus", href: "/focus", icon: Focus },
  { name: "More", href: "/menu", icon: MoreHorizontal },
]

export function BottomNav() {
  const pathname = usePathname()

  return (
    <div className="md:hidden fixed bottom-6 left-4 right-4 z-50">
      <div className="bg-white/90 backdrop-blur-2xl border border-slate-200/50 shadow-[0_16px_40px_rgba(15,23,42,0.08)] rounded-[32px] px-2 py-2 flex items-center justify-around">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className="relative flex flex-col items-center justify-center w-full py-2"
            >
              <div className="relative z-10 flex flex-col items-center">
                <item.icon
                  className={cn(
                    "w-[22px] h-[22px] mb-1 transition-all duration-300",
                    isActive ? "text-indigo-600 scale-110" : "text-slate-400"
                  )}
                />
                <span className={cn(
                  "text-[10px] font-medium transition-colors duration-300",
                  isActive ? "text-indigo-600" : "text-slate-400"
                )}>
                  {item.name}
                </span>
              </div>
              {isActive && (
                <motion.div
                  layoutId="bottom-nav-active"
                  className="absolute inset-0 bg-indigo-50 rounded-2xl -z-0"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
