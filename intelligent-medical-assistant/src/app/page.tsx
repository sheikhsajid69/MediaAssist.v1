import { Metadata } from "next"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { StatsCard } from "@/components/dashboard/stats-card"
import { ActivityChart } from "@/components/dashboard/activity-chart"
import { ChatInterface } from "@/components/dashboard/chat-interface"
import { RecentPatients } from "@/components/dashboard/recent-patients"
import {
  Stethoscope,
  VolumeX,
  FileCog,
  BrainCircuit,
  MessageSquare
} from "lucide-react"

export const metadata: Metadata = {
  title: "Dashboard | Intelligent Medical Assistant",
  description: "Medical AI transcription dashboard",
}

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-4 md:p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">
                Welcome back, Dr. Ahmed. Here's your transcription stats.
              </p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StatsCard
              title="Total Transcriptions"
              value="1,824"
              icon={<MessageSquare className="h-4 w-4 text-muted-foreground" />}
              trend={{ value: 12, isPositive: true }}
            />
            <StatsCard
              title="Medical Codes Generated"
              value="5,274"
              icon={<FileCog className="h-4 w-4 text-muted-foreground" />}
              trend={{ value: 8, isPositive: true }}
            />
            <StatsCard
              title="AI Diagnoses Suggestions"
              value="347"
              icon={<BrainCircuit className="h-4 w-4 text-muted-foreground" />}
              trend={{ value: 14, isPositive: true }}
            />
            <StatsCard
              title="Error Corrections"
              value="89"
              icon={<VolumeX className="h-4 w-4 text-muted-foreground" />}
              trend={{ value: 3, isPositive: false }}
              description="Speech recognition errors"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <ActivityChart />
          </div>

          <h2 className="text-2xl font-bold tracking-tight">Transcription & Analysis</h2>

          <div className="grid gap-4 md:grid-cols-3">
            <ChatInterface />
            <RecentPatients />
          </div>
        </main>
      </div>
    </div>
  )
}
