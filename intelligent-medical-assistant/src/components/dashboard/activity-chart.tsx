"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend
} from "recharts"

// Sample data - would come from API in real app
const weeklyData = [
  { name: "Mon", consultations: 4, transcriptions: 7, coding: 10 },
  { name: "Tue", consultations: 7, transcriptions: 12, coding: 15 },
  { name: "Wed", consultations: 5, transcriptions: 14, coding: 8 },
  { name: "Thu", consultations: 8, transcriptions: 9, coding: 12 },
  { name: "Fri", consultations: 6, transcriptions: 11, coding: 9 },
  { name: "Sat", consultations: 2, transcriptions: 5, coding: 4 },
  { name: "Sun", consultations: 1, transcriptions: 3, coding: 2 },
]

const monthlyData = [
  { name: "Week 1", consultations: 25, transcriptions: 40, coding: 35 },
  { name: "Week 2", consultations: 32, transcriptions: 48, coding: 42 },
  { name: "Week 3", consultations: 28, transcriptions: 45, coding: 38 },
  { name: "Week 4", consultations: 30, transcriptions: 52, coding: 45 },
]

export function ActivityChart() {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Activity Overview</CardTitle>
        <CardDescription>
          View your medical assistant activity statistics
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="weekly">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="weekly">Weekly</TabsTrigger>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
            </TabsList>
            <div className="flex items-center space-x-2 text-xs">
              <div className="flex items-center">
                <div className="h-3 w-3 rounded bg-primary mr-1" />
                <span>Consultations</span>
              </div>
              <div className="flex items-center">
                <div className="h-3 w-3 rounded bg-blue-500 mr-1" />
                <span>Transcriptions</span>
              </div>
              <div className="flex items-center">
                <div className="h-3 w-3 rounded bg-green-500 mr-1" />
                <span>Medical Coding</span>
              </div>
            </div>
          </div>
          <TabsContent value="weekly" className="pt-4">
            <ResponsiveContainer width="100%" height={350}>
              <AreaChart
                data={weeklyData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <defs>
                  <linearGradient id="colorConsultations" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorTranscriptions" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorCoding" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="name" className="text-sm" />
                <YAxis className="text-sm" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--background))",
                    borderColor: "hsl(var(--border))",
                    borderRadius: "var(--radius)",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="consultations"
                  stroke="hsl(var(--primary))"
                  fillOpacity={1}
                  fill="url(#colorConsultations)"
                  activeDot={{ r: 8 }}
                />
                <Area
                  type="monotone"
                  dataKey="transcriptions"
                  stroke="#3b82f6"
                  fillOpacity={1}
                  fill="url(#colorTranscriptions)"
                />
                <Area
                  type="monotone"
                  dataKey="coding"
                  stroke="#22c55e"
                  fillOpacity={1}
                  fill="url(#colorCoding)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </TabsContent>
          <TabsContent value="monthly" className="pt-4">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart
                data={monthlyData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="name" className="text-sm" />
                <YAxis className="text-sm" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--background))",
                    borderColor: "hsl(var(--border))",
                    borderRadius: "var(--radius)",
                  }}
                />
                <Bar dataKey="consultations" fill="hsl(var(--primary))" barSize={20} />
                <Bar dataKey="transcriptions" fill="#3b82f6" barSize={20} />
                <Bar dataKey="coding" fill="#22c55e" barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
