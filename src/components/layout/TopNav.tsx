"use client"

import { Bell, Search, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function TopNav() {
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between px-6 sm:px-10 py-6 bg-transparent transition-all">
      <div className="flex items-center md:hidden">
        <Button variant="ghost" size="icon" className="mr-2 text-slate-500">
          <Menu className="w-5 h-5" />
        </Button>
        <span className="text-lg font-bold text-slate-800">UniPilot</span>
      </div>
      
      <div className="hidden md:flex flex-1 max-w-lg">
        <div className="relative w-full group">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Search className="w-[18px] h-[18px] text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
          </div>
          <Input
            type="search"
            className="w-full pl-11 h-12 bg-white/60 backdrop-blur-xl border-white focus:bg-white focus:border-indigo-100 focus:ring-4 focus:ring-indigo-500/5 shadow-[0_2px_12px_rgba(0,0,0,0.02)] rounded-[20px] transition-all text-[15px] font-medium placeholder:text-slate-400"
            placeholder="Ask AI or search anything..."
          />
        </div>
      </div>

      <div className="flex items-center space-x-5 ml-auto">
        <Button variant="ghost" size="icon" className="relative w-11 h-11 rounded-full bg-white/60 backdrop-blur-xl hover:bg-white shadow-[0_2px_12px_rgba(0,0,0,0.02)] border border-white text-slate-500 transition-all">
          <Bell className="w-[18px] h-[18px]" />
          <span className="absolute top-[10px] right-[10px] w-2 h-2 bg-rose-500 rounded-full border-2 border-white" />
        </Button>
        <Avatar className="w-11 h-11 border-2 border-white cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:scale-105 transition-transform">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback className="bg-indigo-50 text-indigo-600 font-bold">TN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
