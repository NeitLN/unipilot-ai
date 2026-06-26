"use client"

import { AppLayout } from "@/components/layout/AppLayout"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { 
  Sparkles, 
  Target,
  Clock,
  Play,
  ArrowRight,
  BookOpen,
  Focus,
  CheckCircle2,
  Calendar,
  Activity,
  HeartPulse
} from "lucide-react"

export default function DashboardPage() {
  return (
    <AppLayout>
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 md:gap-10">
        
        {/* Main Narrative Column (65%) */}
        <div className="xl:col-span-8 space-y-10">
          
          {/* Today OS Header */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 text-[13px] font-bold tracking-wide uppercase text-slate-400">
              <span>Friday, July 8</span>
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              <span className="text-emerald-500">Optimal State</span>
            </div>
            <h1 className="text-4xl md:text-[44px] font-extrabold tracking-tight text-slate-900 leading-tight">
              Good morning, Tien.
            </h1>
          </motion.div>

          {/* AI Assistant Brief */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -left-4 top-6 w-1 h-12 bg-indigo-500 rounded-r-full" />
            <div className="bg-white/80 backdrop-blur-2xl rounded-[32px] p-8 md:p-10 shadow-[0_8px_40px_rgba(0,0,0,0.03)] border border-white">
              
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/20 flex-shrink-0 relative">
                  <div className="absolute inset-0 rounded-full border border-white/40" />
                  <Sparkles className="w-5 h-5 text-white" />
                  <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full" />
                </div>
                
                <div className="pt-1">
                  <p className="text-[19px] text-slate-700 leading-relaxed font-medium max-w-2xl mb-8">
                    Your workload is manageable today. You have 3 classes, 2 assignments, and one perfect 90-minute study slot at 2 PM. I recommend finishing the <span className="text-indigo-600 font-semibold bg-indigo-50 px-2 py-0.5 rounded-md">Database task</span> before dinner to protect your evening.
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    <Button className="h-12 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white px-8 font-semibold shadow-md shadow-indigo-500/10">
                      Accept Plan
                    </Button>
                    <Button variant="outline" className="h-12 rounded-full px-6 border-slate-200 text-slate-600 font-semibold hover:bg-slate-50 bg-white shadow-sm">
                      Adjust Timeline
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mission of the Day */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-bold text-slate-800 text-[17px] flex items-center gap-2">
                <Target className="w-5 h-5 text-indigo-500" /> Mission of the Day
              </h3>
            </div>
            
            <div className="group bg-white rounded-[28px] p-7 shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-slate-100/50 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-400 cursor-pointer">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-[20px] bg-rose-50 flex items-center justify-center flex-shrink-0 border border-rose-100/50 group-hover:scale-105 transition-transform duration-400">
                  <CheckCircle2 className="w-7 h-7 text-rose-500" />
                </div>
                <div className="pt-1">
                  <h4 className="text-[20px] font-bold text-slate-900 mb-2">Finish Database Assignment</h4>
                  <div className="flex flex-wrap items-center gap-2.5 text-[14px] font-semibold">
                    <span className="text-rose-500 bg-rose-50 px-2.5 py-1 rounded-lg">Due Tonight 11:59 PM</span>
                    <span className="text-slate-500 flex items-center gap-1 bg-slate-50 px-2.5 py-1 rounded-lg"><Clock className="w-4 h-4"/> 90 mins</span>
                    <span className="text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-lg flex items-center gap-1"><Sparkles className="w-3.5 h-3.5" /> Start at 2:00 PM</span>
                  </div>
                </div>
              </div>
              <div className="w-14 h-14 rounded-full bg-slate-900 flex items-center justify-center text-white shadow-md group-hover:bg-indigo-600 transition-colors shrink-0">
                <Play className="w-5 h-5 ml-1" />
              </div>
            </div>
          </motion.div>

          {/* Today Timeline - The Core Component */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-slate-800 text-[17px] flex items-center gap-2">
                <Calendar className="w-5 h-5 text-slate-400" /> Today&apos;s Flow
              </h3>
              <Button variant="ghost" className="text-indigo-600 font-bold hover:bg-indigo-50">View Week</Button>
            </div>
            
            <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.02)] border border-white">
              <div className="relative pl-6 sm:pl-8 space-y-10">
                
                {/* Visual Line */}
                <div className="absolute top-4 bottom-4 left-[9px] sm:left-[17px] w-0.5 bg-slate-100 rounded-full" />
                
                {/* Timeline Item 1 - Past */}
                <div className="relative group opacity-50">
                  <div className="absolute -left-[22px] sm:-left-[22px] top-1.5 w-[14px] h-[14px] rounded-full bg-slate-300 border-4 border-white" />
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div>
                      <p className="text-[13px] font-bold text-slate-400 mb-1 tracking-wide">08:00 AM</p>
                      <h4 className="text-[18px] font-bold text-slate-900 line-through decoration-2 decoration-slate-300">Algorithms & Complexity</h4>
                      <p className="text-[14px] text-slate-500 font-medium mt-1">Room 402 • Prof. Davis</p>
                    </div>
                  </div>
                </div>

                {/* Timeline Item 2 - Current/Next */}
                <div className="relative group">
                  <div className="absolute -left-[24px] sm:-left-[24px] top-1.5 w-[18px] h-[18px] rounded-full bg-blue-500 border-4 border-white shadow-[0_0_12px_rgba(59,130,246,0.4)]" />
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 bg-blue-50/50 p-5 rounded-[20px] -mt-3 border border-blue-100/50">
                    <div>
                      <p className="text-[13px] font-bold text-blue-600 mb-1 tracking-wide">10:00 AM — CURRENT</p>
                      <h4 className="text-[18px] font-bold text-slate-900">Requirements Engineering</h4>
                      <p className="text-[14px] text-slate-600 font-medium mt-1">Lab 2 • Active Session</p>
                    </div>
                  </div>
                </div>

                {/* Timeline Item 3 - AI Block */}
                <div className="relative group">
                  <div className="absolute -left-[24px] sm:-left-[24px] top-1.5 w-[18px] h-[18px] rounded-full bg-indigo-500 border-4 border-white shadow-[0_0_12px_rgba(99,102,241,0.4)]" />
                  <div className="bg-indigo-50/70 rounded-[20px] p-5 -mt-3 border border-indigo-100/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <p className="text-[13px] font-bold text-indigo-600 mb-1 tracking-wide flex items-center gap-1"><Sparkles className="w-3.5 h-3.5"/> 02:00 PM</p>
                      <h4 className="text-[18px] font-bold text-slate-900">Focus: Database</h4>
                      <p className="text-[14px] text-slate-600 font-medium mt-1">AI Optimized Block • 90 mins</p>
                    </div>
                    <Button className="h-10 px-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-sm font-semibold">
                      Start Prep
                    </Button>
                  </div>
                </div>

                {/* Timeline Item 4 - Rest */}
                <div className="relative group">
                  <div className="absolute -left-[22px] sm:-left-[22px] top-1.5 w-[14px] h-[14px] rounded-full border-2 border-emerald-400 bg-white" />
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div>
                      <p className="text-[13px] font-bold text-slate-500 mb-1 tracking-wide">06:00 PM</p>
                      <h4 className="text-[18px] font-bold text-slate-900 flex items-center gap-2">
                        Evening Rest <Badge variant="outline" className="text-[11px] bg-emerald-50 text-emerald-600 border-emerald-200">Protected</Badge>
                      </h4>
                      <p className="text-[14px] text-slate-500 font-medium mt-1">No tasks scheduled</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>

        {/* Right Rail Pulse Cards (35%) */}
        <div className="xl:col-span-4 space-y-5 pt-2">
          
          {/* Priority Stack Preview */}
          <motion.div 
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-xl rounded-[28px] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-white"
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-bold text-slate-800 text-[15px] flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-slate-400" /> Upcoming Deadlines
              </h3>
              <span className="text-[13px] font-bold text-indigo-600 cursor-pointer hover:underline">All</span>
            </div>
            <div className="space-y-3">
              {[
                { title: "Calculus III Prob Set", due: "Tomorrow, 8 AM", color: "bg-amber-400" },
                { title: "Read Chapter 5", due: "In 3 days", color: "bg-slate-300" },
                { title: "Project Proposal", due: "Next week", color: "bg-slate-300" },
              ].map((task, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-[16px] hover:bg-slate-50 cursor-pointer transition-colors group border border-transparent hover:border-slate-100">
                  <div className={`w-1.5 h-10 rounded-full ${task.color}`} />
                  <div>
                    <p className="text-[15px] font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">{task.title}</p>
                    <p className="text-[13px] font-medium text-slate-500 mt-0.5">{task.due}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Focus Pulse */}
          <motion.div 
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/80 backdrop-blur-xl rounded-[28px] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-white group hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-slate-700 font-bold text-[15px]">
                <div className="w-8 h-8 rounded-[12px] bg-sky-50 flex items-center justify-center">
                  <Focus className="w-4 h-4 text-sky-500" />
                </div>
                Focus
              </div>
              <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-slate-600 transition-colors" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-[36px] font-extrabold text-slate-900 tracking-tight">2h 15m</span>
            </div>
            <div className="mt-4 flex gap-1.5">
              {[1, 2, 3, 4].map((day) => (
                <div key={day} className="h-2 flex-1 rounded-full bg-sky-500" />
              ))}
              <div className="h-2 flex-1 rounded-full bg-slate-100" />
            </div>
            <p className="text-[13px] text-slate-500 font-bold mt-3">🔥 4-day streak</p>
          </motion.div>

          {/* Energy Pulse */}
          <motion.div 
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white/80 backdrop-blur-xl rounded-[28px] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-white group hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-slate-700 font-bold text-[15px]">
                <div className="w-8 h-8 rounded-[12px] bg-emerald-50 flex items-center justify-center">
                  <HeartPulse className="w-4 h-4 text-emerald-500" />
                </div>
                Energy
              </div>
            </div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-[36px] font-extrabold text-emerald-500 tracking-tight">82%</span>
            </div>
            <div className="bg-emerald-50/50 rounded-[16px] p-3 border border-emerald-100/50">
              <p className="text-[13px] font-bold text-emerald-700 leading-relaxed">
                Workload is balanced. Recovery is on track.
              </p>
            </div>
          </motion.div>

          {/* GPA Pulse */}
          <motion.div 
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white/80 backdrop-blur-xl rounded-[28px] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-white group hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-slate-700 font-bold text-[15px]">
                <div className="w-8 h-8 rounded-[12px] bg-indigo-50 flex items-center justify-center">
                  <Activity className="w-4 h-4 text-indigo-500" />
                </div>
                GPA
              </div>
            </div>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-[36px] font-extrabold text-slate-900 tracking-tight">3.42</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-[13px] font-bold">
                <span className="text-slate-500">Target: 3.50</span>
                <span className="text-indigo-600">Achievable</span>
              </div>
              <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500 rounded-full w-[85%]" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </AppLayout>
  )
}
