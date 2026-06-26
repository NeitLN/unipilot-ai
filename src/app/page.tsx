import { AppLayout } from "@/components/layout/AppLayout"
import { PageContainer } from "@/components/shared/PageContainer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { 
  Sparkles, 
  Clock, 
  Calendar, 
  BookOpen, 
  CheckCircle2, 
  TrendingUp, 
  Activity, 
  Plus, 
  BrainCircuit,
  AlertCircle
} from "lucide-react"

export default function DashboardPage() {
  return (
    <AppLayout>
      <PageContainer className="gap-8">
        {/* Gradient Hero Section */}
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-indigo-500 via-primary to-indigo-700 p-8 md:p-12 text-white shadow-soft">
          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Good morning, Alex 👋</h1>
              <p className="text-indigo-100 text-lg md:text-xl max-w-2xl font-medium">
                You have 3 classes and 2 tasks due today. Let&apos;s make it a great day.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="secondary" className="gap-2 bg-white text-indigo-700 hover:bg-white/90 rounded-full px-6 shadow-sm">
                <Plus className="w-4 h-4" /> Add Task
              </Button>
              <Button className="gap-2 bg-indigo-900/40 text-white hover:bg-indigo-900/60 backdrop-blur-md rounded-full px-6 border border-white/20">
                <Sparkles className="w-4 h-4" /> AI Planner
              </Button>
            </div>
          </div>
          <div className="absolute top-0 right-0 -translate-y-16 translate-x-1/4 opacity-10 pointer-events-none">
            <BrainCircuit className="w-[32rem] h-[32rem]" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Today's Overview */}
          <Card className="col-span-1 md:col-span-2 shadow-card border-none bg-white/60 backdrop-blur-xl">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2 text-slate-800 dark:text-slate-200">
                <Clock className="w-5 h-5 text-indigo-500" /> Today&apos;s Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 items-center">
                <div className="flex-1 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-5 flex flex-col gap-1 transition-transform hover:-translate-y-1 duration-300">
                  <span className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">3</span>
                  <span className="text-sm text-slate-500 font-medium">Classes Today</span>
                </div>
                <div className="flex-1 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-5 flex flex-col gap-1 transition-transform hover:-translate-y-1 duration-300">
                  <span className="text-4xl font-bold text-amber-500">2</span>
                  <span className="text-sm text-slate-500 font-medium">Tasks Due</span>
                </div>
                <div className="flex-1 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-5 flex flex-col gap-1 transition-transform hover:-translate-y-1 duration-300">
                  <span className="text-4xl font-bold text-emerald-500">85%</span>
                  <span className="text-sm text-slate-500 font-medium">Focus Score</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AI Planner Teaser */}
          <Card className="col-span-1 shadow-card border-none bg-indigo-50/80 dark:bg-indigo-950/30 backdrop-blur-md relative overflow-hidden">
            <div className="absolute -top-6 -right-6 p-4 opacity-10 dark:opacity-20 text-indigo-600">
              <Sparkles className="w-32 h-32" />
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2 text-indigo-700 dark:text-indigo-400">
                <Sparkles className="w-5 h-5" /> Smart Suggestions
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                Based on your schedule, you have a 2-hour gap at 2 PM. I suggest working on your Data Structures assignment to stay ahead.
              </p>
              <Button size="sm" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-sm">
                Apply Suggestion
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Upcoming Assignments */}
            <Card className="shadow-card border-none bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
              <CardHeader className="flex flex-row items-center justify-between pb-4">
                <div>
                  <CardTitle className="text-xl flex items-center gap-2 text-slate-800 dark:text-slate-200">
                    <CheckCircle2 className="w-6 h-6 text-indigo-500" /> Upcoming Assignments
                  </CardTitle>
                  <CardDescription className="text-slate-500 mt-1">Tasks due within the next 7 days</CardDescription>
                </div>
                <Button variant="ghost" size="sm" className="text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 dark:hover:bg-indigo-950">View All</Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { title: "Data Structures - Project 2", due: "Today, 11:59 PM", course: "CS 301", priority: "High" },
                    { title: "Calculus III - Problem Set 4", due: "Tomorrow, 8:00 AM", course: "MATH 203", priority: "Medium" },
                    { title: "Read Chapter 5 - History", due: "In 3 days", course: "HIST 101", priority: "Low" },
                  ].map((task, i) => (
                    <div key={i} className="group flex items-center justify-between p-4 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md hover:border-indigo-100 dark:hover:border-indigo-900 transition-all cursor-pointer">
                      <div className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full border-2 border-slate-300 dark:border-slate-600 group-hover:border-indigo-400 transition-colors flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-slate-800 dark:text-slate-200">{task.title}</p>
                          <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
                            <span className="font-medium bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md">{task.course}</span>
                            <span>•</span>
                            <span className={task.due.includes("Today") ? "text-rose-500 font-medium" : ""}>{task.due}</span>
                          </div>
                        </div>
                      </div>
                      <Badge variant={task.priority === "High" ? "destructive" : task.priority === "Medium" ? "default" : "secondary"} className="rounded-lg px-3 py-1 shadow-none">
                        {task.priority}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Weekly Schedule Preview */}
            <Card className="shadow-card border-none bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
              <CardHeader className="flex flex-row items-center justify-between pb-4">
                <CardTitle className="text-xl flex items-center gap-2 text-slate-800 dark:text-slate-200">
                  <Calendar className="w-6 h-6 text-indigo-500" /> Today&apos;s Schedule
                </CardTitle>
                <Button variant="ghost" size="sm" className="text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 dark:hover:bg-indigo-950">Full Calendar</Button>
              </CardHeader>
              <CardContent>
                <div className="relative pl-6 border-l-2 border-slate-200 dark:border-slate-700 space-y-8 mt-2 ml-4">
                  {[
                    { time: "09:00 AM", title: "Data Structures & Algorithms", location: "Room 402", type: "Lecture", color: "bg-blue-500" },
                    { time: "11:30 AM", title: "Study Group - Calc", location: "Library", type: "Meeting", color: "bg-emerald-500" },
                    { time: "02:00 PM", title: "Machine Learning", location: "Online", type: "Lecture", color: "bg-purple-500" },
                  ].map((event, i) => (
                    <div key={i} className="relative group">
                      <div className={`absolute -left-[31px] top-1.5 w-4 h-4 rounded-full ${event.color} ring-4 ring-white dark:ring-slate-900 group-hover:scale-125 transition-transform`} />
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                        <div>
                          <p className="font-semibold text-slate-800 dark:text-slate-200">{event.title}</p>
                          <p className="text-sm text-slate-500 mt-1 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 block"></span>
                            {event.location}
                          </p>
                        </div>
                        <div className="text-left sm:text-right">
                          <p className="text-sm font-bold text-slate-700 dark:text-slate-300">{event.time}</p>
                          <Badge variant="outline" className="text-[11px] mt-2 rounded-md shadow-sm bg-white dark:bg-slate-900">{event.type}</Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            {/* GPA Summary */}
            <Card className="shadow-card border-none bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl flex items-center gap-2 text-slate-800 dark:text-slate-200">
                  <BookOpen className="w-6 h-6 text-indigo-500" /> Academic Standing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end gap-3 mb-6">
                  <span className="text-5xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight">3.85</span>
                  <span className="text-sm text-slate-500 font-medium mb-1.5">Cumulative GPA</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium text-slate-600 dark:text-slate-400">Current Semester Target</span>
                      <span className="text-indigo-600 font-bold">3.90</span>
                    </div>
                    <Progress value={85} className="h-2.5 bg-slate-100 dark:bg-slate-800 [&>div]:bg-indigo-500" />
                  </div>
                </div>
                <Separator className="my-6 border-slate-100 dark:border-slate-800" />
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500 font-medium">Total Credits Completed</span>
                  <span className="font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-lg">84 / 120</span>
                </div>
              </CardContent>
            </Card>

            {/* Burnout & Well-being */}
            <Card className="shadow-card border-none bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl flex items-center gap-2 text-slate-800 dark:text-slate-200">
                  <Activity className="w-6 h-6 text-indigo-500" /> Well-being
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20">
                  <div className="p-3 bg-white dark:bg-emerald-500/20 rounded-xl shadow-sm">
                    <TrendingUp className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-base font-bold text-emerald-700 dark:text-emerald-400">Optimal State</p>
                    <p className="text-sm text-emerald-600/80 dark:text-emerald-400/80 font-medium">Burnout risk is low</p>
                  </div>
                </div>
                <div className="space-y-5">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-600 dark:text-slate-400 font-medium">Sleep Average (7d)</span>
                      <span className="font-bold text-slate-700 dark:text-slate-300">7.2 hrs</span>
                    </div>
                    <Progress value={90} className="h-2 bg-slate-100 dark:bg-slate-800 [&>div]:bg-emerald-500" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-600 dark:text-slate-400 font-medium">Study Load</span>
                      <span className="font-bold text-amber-500">Heavy</span>
                    </div>
                    <Progress value={75} className="h-2 bg-slate-100 dark:bg-slate-800 [&>div]:bg-amber-500" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-card border-none bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="justify-start h-auto py-4 px-4 rounded-2xl border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-indigo-200 shadow-sm transition-all">
                  <div className="flex flex-col items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-indigo-500" />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Log Grades</span>
                  </div>
                </Button>
                <Button variant="outline" className="justify-start h-auto py-4 px-4 rounded-2xl border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-indigo-200 shadow-sm transition-all">
                  <div className="flex flex-col items-start gap-2">
                    <Activity className="w-5 h-5 text-emerald-500" />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Pomodoro</span>
                  </div>
                </Button>
                <Button variant="outline" className="justify-start h-auto py-4 px-4 rounded-2xl border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-indigo-200 shadow-sm transition-all">
                  <div className="flex flex-col items-start gap-2">
                    <BookOpen className="w-5 h-5 text-amber-500" />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Flashcards</span>
                  </div>
                </Button>
                <Button variant="outline" className="justify-start h-auto py-4 px-4 rounded-2xl border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-indigo-200 shadow-sm transition-all">
                  <div className="flex flex-col items-start gap-2">
                    <Calendar className="w-5 h-5 text-blue-500" />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Sync Canvas</span>
                  </div>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </PageContainer>
    </AppLayout>
  )
}
