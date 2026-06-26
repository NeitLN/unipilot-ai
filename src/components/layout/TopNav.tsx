"use client"

import { Bell, Search, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function TopNav() {
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between px-4 sm:px-8 py-5 bg-[#F8FAFC]/80 backdrop-blur-xl border-b border-transparent transition-all">
      <div className="flex items-center md:hidden">
        <div className="w-8 h-8 rounded-xl bg-indigo-50 flex items-center justify-center mr-2 shadow-sm border border-indigo-100/50">
          <Sparkles className="w-4 h-4 text-indigo-500" />
        </div>
        <span className="text-lg font-bold text-slate-800">UniPilot</span>
      </div>
      
      <div className="hidden md:flex flex-1 max-w-xl">
        <div className="relative w-full group">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Search className="w-[18px] h-[18px] text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
          </div>
          <Input
            type="search"
            className="w-full pl-12 h-12 bg-white border-slate-200/60 focus:bg-white focus:border-indigo-200 focus:ring-4 focus:ring-indigo-500/10 shadow-[0_2px_10px_rgba(15,23,42,0.02)] rounded-[18px] transition-all text-[15px]"
            placeholder="Search tasks, courses, or ask AI..."
          />
        </div>
      </div>

      <div className="flex items-center space-x-4 ml-auto">
        <Button variant="ghost" size="icon" className="relative w-10 h-10 rounded-full hover:bg-slate-200/50 text-slate-500">
          <Bell className="w-[18px] h-[18px]" />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-[#F8FAFC]" />
        </Button>
        <Avatar className="w-10 h-10 border border-slate-200 cursor-pointer shadow-sm hover:scale-105 transition-transform">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback className="bg-indigo-50 text-indigo-600 font-medium">TN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
