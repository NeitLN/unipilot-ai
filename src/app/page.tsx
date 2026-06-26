"use client"

import { AppLayout } from "@/components/layout/AppLayout"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { 
  Sparkles, 
  BrainCircuit,
  Target,
  Clock,
  CheckCircle2,
  Calendar,
  Activity,
  HeartPulse,
  Play,
  Plus,
  ArrowRight,
  BookOpen,
  Focus
} from "lucide-react"

export default function DashboardPage() {
  return (
    <AppLayout>
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        
        {/* Main Narrative Column (65%) */}
        <div className="xl:col-span-8 space-y-10">
          
          {/* Compact Greeting */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-2"
          >
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Good morning, Tien 👋
            </h1>
            <div className="flex items-center gap-3 text-slate-500 font-medium">
              <span>Today is Friday, July 8</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 block" />
              <span>Workload is Medium</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 block" />
              <span className="flex items-center gap-1 text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md text-sm">
                <Sparkles className="w-3.5 h-3.5" /> AI confidence: 94%
              </span>
            </div>
          </motion.div>

          {/* AI Brief Card */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative overflow-hidden rounded-[24px] bg-white border border-slate-100 shadow-[0_8px_30px_rgba(15,23,42,0.04)] p-6 md:p-8"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-400" />
            <div className="absolute -right-12 -top-12 opacity-[0.03] text-violet-600 pointer-events-none">
              <BrainCircuit className="w-64 h-64" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-violet-50 flex items-center justify-center border border-violet-100">
                  <Sparkles className="w-4 h-4 text-violet-600" />
                </div>
                <h2 className="font-semibold text-slate-900">Today&apos;s Brief</h2>
              </div>
              
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium max-w-3xl mb-6">
                Today looks manageable. You have 3 classes, 2 assignments, and one good 90-minute study slot at 2 PM. I recommend finishing the Database task before dinner so you can keep your evening clear.
              </p>
              
              <div className="flex gap-3">
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-6 shadow-sm">
                  Accept Plan
                </Button>
                <Button variant="outline" className="rounded-full px-6 border-slate-200 text-slate-700 hover:bg-slate-50">
                  Adjust
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Mission of the Day */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-5 h-5 text-slate-400" />
              <h3 className="font-semibold text-slate-800 text-lg">Mission of the Day</h3>
            </div>
            
            <div className="group bg-white rounded-[24px] p-6 shadow-[0_8px_30px_rgba(15,23,42,0.04)] border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)] transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center flex-shrink-0 border border-rose-100">
                  <CheckCircle2 className="w-6 h-6 text-rose-500" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">Finish Database Assignment</h4>
                  <div className="flex flex-wrap items-center gap-3 text-sm font-medium">
                    <span className="text-rose-500">Due tonight at 11:59 PM</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300 block" />
                    <span className="text-slate-500 flex items-center gap-1"><Clock className="w-3.5 h-3.5"/> 90 mins est.</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300 block" />
                    <span className="text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">Suggested: 2:00 PM</span>
                  </div>
                </div>
              </div>
              <Button className="rounded-full bg-slate-900 hover:bg-slate-800 text-white shadow-sm gap-2">
                <Play className="w-4 h-4" /> Start Focus
              </Button>
            </div>
          </motion.div>

          {/* Today Timeline */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="w-5 h-5 text-slate-400" />
              <h3 className="font-semibold text-slate-800 text-lg">Today&apos;s Flow</h3>
            </div>
            
            <div className="bg-white rounded-[24px] p-8 shadow-[0_8px_30px_rgba(15,23,42,0.04)] border border-slate-100">
              <div className="relative pl-6 border-l-2 border-slate-100 space-y-8">
                
                {/* Timeline Item 1 */}
                <div className="relative group">
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-300 ring-4 ring-white" />
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-bold text-slate-500 mb-1">08:00 AM</p>
                      <h4 className="text-lg font-bold text-slate-900">Algorithms & Complexity</h4>
                      <p className="text-slate-500 font-medium">Room 402 • Prof. Davis</p>
                    </div>
                    <Badge variant="secondary" className="bg-slate-100 text-slate-600 hover:bg-slate-200 rounded-lg">Lecture</Badge>
                  </div>
                </div>

                {/* Timeline Item 2 */}
                <div className="relative group opacity-50">
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-300 ring-4 ring-white" />
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-bold text-slate-500 mb-1">10:00 AM</p>
                      <h4 className="text-lg font-bold text-slate-900 line-through">Requirements Engineering</h4>
                      <p className="text-slate-500 font-medium">Lab 2 • Completed</p>
                    </div>
                    <Badge variant="secondary" className="bg-slate-100 text-slate-600 rounded-lg">Lab</Badge>
                  </div>
                </div>

                {/* Timeline Item 3 - AI Suggestion */}
                <div className="relative group">
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-indigo-500 ring-4 ring-indigo-50 shadow-[0_0_12px_rgba(99,102,241,0.4)] animate-pulse" />
                  <div className="bg-indigo-50/50 rounded-2xl p-4 border border-indigo-100/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-bold text-indigo-600 mb-1 flex items-center gap-1"><Sparkles className="w-3.5 h-3.5"/> 02:00 PM</p>
                      <h4 className="text-lg font-bold text-slate-900">Database Assignment</h4>
                      <p className="text-slate-600 font-medium">AI Suggested Focus Block • 90 mins</p>
                    </div>
                    <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-sm">
                      Start Now
                    </Button>
                  </div>
                </div>

                {/* Timeline Item 4 */}
                <div className="relative group">
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-slate-300 bg-white ring-4 ring-white" />
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-bold text-slate-500 mb-1">06:00 PM</p>
                      <h4 className="text-lg font-bold text-slate-900">Evening Rest</h4>
                      <p className="text-slate-500 font-medium">Protected time</p>
                    </div>
                    <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 rounded-lg">Recovery</Badge>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>

        {/* Right Rail Pulse Cards (35%) */}
        <div className="xl:col-span-4 space-y-6">
          
          {/* Quick Actions */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 gap-3"
          >
            <Button variant="outline" className="h-14 rounded-2xl border-slate-200 bg-white shadow-sm hover:border-indigo-200 hover:bg-indigo-50/50 text-slate-700 font-semibold justify-start px-4 group transition-all">
              <Plus className="w-4 h-4 mr-2 text-slate-400 group-hover:text-indigo-600" /> New Task
            </Button>
            <Button variant="outline" className="h-14 rounded-2xl border-slate-200 bg-white shadow-sm hover:border-indigo-200 hover:bg-indigo-50/50 text-slate-700 font-semibold justify-start px-4 group transition-all">
              <Play className="w-4 h-4 mr-2 text-slate-400 group-hover:text-indigo-600" /> Focus
            </Button>
          </motion.div>

          {/* Focus Pulse */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-[24px] p-6 shadow-[0_8px_30px_rgba(15,23,42,0.04)] border border-slate-100 group hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)] transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-slate-700 font-semibold">
                <div className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center">
                  <Focus className="w-4 h-4 text-sky-500" />
                </div>
                Focus Time
              </div>
              <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-slate-600 transition-colors" />
            </div>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-extrabold text-slate-900 tracking-tight">2h 15m</span>
              <span className="text-sm text-slate-500 font-medium mb-1">today</span>
            </div>
            <div className="mt-4 flex gap-1">
              {[1, 2, 3, 4].map((day) => (
                <div key={day} className="h-1.5 flex-1 rounded-full bg-sky-500" />
              ))}
              <div className="h-1.5 flex-1 rounded-full bg-slate-100" />
            </div>
            <p className="text-xs text-slate-500 font-medium mt-3">🔥 4-day streak</p>
          </motion.div>

          {/* Energy Pulse */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-[24px] p-6 shadow-[0_8px_30px_rgba(15,23,42,0.04)] border border-slate-100 group hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)] transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-slate-700 font-semibold">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                  <HeartPulse className="w-4 h-4 text-emerald-500" />
                </div>
                Energy & Burnout
              </div>
              <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-slate-600 transition-colors" />
            </div>
            <div className="flex items-end gap-2 mb-1">
              <span className="text-4xl font-extrabold text-emerald-500 tracking-tight">82%</span>
            </div>
            <p className="text-sm font-semibold text-slate-700 mb-4">Low burnout risk</p>
            <div className="bg-emerald-50 rounded-xl p-3 border border-emerald-100/50">
              <p className="text-xs font-medium text-emerald-700 leading-relaxed">
                Your workload is well-balanced. Keep your evening free as planned to maintain recovery.
              </p>
            </div>
          </motion.div>

          {/* GPA Pulse */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white rounded-[24px] p-6 shadow-[0_8px_30px_rgba(15,23,42,0.04)] border border-slate-100 group hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)] transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-slate-700 font-semibold">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
                  <Activity className="w-4 h-4 text-indigo-500" />
                </div>
                GPA Trajectory
              </div>
              <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-slate-600 transition-colors" />
            </div>
            <div className="flex items-end gap-2 mb-4">
              <span className="text-4xl font-extrabold text-slate-900 tracking-tight">3.42</span>
              <span className="text-sm text-slate-500 font-medium mb-1">Current</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-500">Target: 3.50</span>
                <span className="text-indigo-600">Achievable</span>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500 rounded-full w-[85%]" />
              </div>
            </div>
          </motion.div>

          {/* Priority Stack Preview */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white rounded-[24px] p-6 shadow-[0_8px_30px_rgba(15,23,42,0.04)] border border-slate-100"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-slate-800 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-slate-400" /> Upcoming
              </h3>
              <span className="text-xs font-bold text-indigo-600 cursor-pointer hover:underline">View All</span>
            </div>
            <div className="space-y-3">
              {[
                { title: "Calculus III Prob Set", due: "Tomorrow", color: "bg-amber-500" },
                { title: "Read Chapter 5", due: "In 3 days", color: "bg-slate-300" },
              ].map((task, i) => (
                <div key={i} className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 cursor-pointer transition-colors group">
                  <div className={`w-1 h-8 rounded-full ${task.color}`} />
                  <div>
                    <p className="text-sm font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">{task.title}</p>
                    <p className="text-xs font-medium text-slate-500">{task.due}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </AppLayout>
  )
}
