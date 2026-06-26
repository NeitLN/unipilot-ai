"use client"

import { Bell, Search, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/shared/ThemeToggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function TopNav() {
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between px-8 py-5 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="flex items-center md:hidden">
        <Sparkles className="w-6 h-6 text-indigo-600 mr-2" />
        <span className="text-lg font-bold">UniPilot</span>
      </div>
      
      <div className="hidden md:flex flex-1 max-w-xl">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Search className="w-4 h-4 text-slate-400" />
          </div>
          <Input
            type="search"
            className="w-full pl-11 h-11 bg-white dark:bg-slate-900 border-slate-200/60 dark:border-slate-800 focus:bg-white shadow-sm rounded-xl transition-all"
            placeholder="Search tasks, courses, or ask AI..."
          />
        </div>
      </div>

      <div className="flex items-center space-x-4 ml-auto">
        <ThemeToggle />
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-destructive rounded-full" />
        </Button>
        <Avatar className="w-9 h-9 border cursor-pointer hover:opacity-80 transition-opacity">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
