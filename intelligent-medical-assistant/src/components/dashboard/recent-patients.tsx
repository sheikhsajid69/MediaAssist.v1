"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  ChevronRight,
  Clock,
  Shield,
  Calendar,
  User,
  AlertTriangle
} from "lucide-react"
import Link from "next/link"

interface Patient {
  id: string
  name: string
  image?: string
  nationality: string
  age: number
  medicalId: string
  priority: "low" | "medium" | "high"
  lastVisit: string
  diagnoses: Array<{
    code: string
    name: string
  }>
}

const patients: Patient[] = [
  {
    id: "1",
    name: "Mohammed Al-Ahmadi",
    nationality: "Saudi",
    age: 58,
    medicalId: "SA-10458723",
    priority: "high",
    lastVisit: "Today, 10:30 AM",
    diagnoses: [
      { code: "E11.9", name: "Type 2 diabetes" },
      { code: "I10", name: "Hypertension" }
    ]
  },
  {
    id: "2",
    name: "Fatima Al-Zahrani",
    nationality: "Saudi",
    age: 42,
    medicalId: "SA-10985634",
    priority: "medium",
    lastVisit: "Yesterday, 3:15 PM",
    diagnoses: [
      { code: "J45.909", name: "Asthma" },
      { code: "G43.909", name: "Migraine" }
    ]
  },
  {
    id: "3",
    name: "Ahmad Qureshi",
    nationality: "Pakistani",
    age: 29,
    medicalId: "EX-20341567",
    priority: "low",
    lastVisit: "2 days ago",
    diagnoses: [
      { code: "M54.5", name: "Low back pain" }
    ]
  },
  {
    id: "4",
    name: "Nora Al-Subaie",
    nationality: "Saudi",
    age: 35,
    medicalId: "SA-10789342",
    priority: "medium",
    lastVisit: "2 days ago",
    diagnoses: [
      { code: "K29.60", name: "Gastritis" },
      { code: "F41.1", name: "Anxiety disorder" }
    ]
  }
]

export function RecentPatients() {
  return (
    <Card className="col-span-3 lg:col-span-1" style={{ height: "580px" }}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Recent Patients</CardTitle>
            <CardDescription>You have 4 recent patients</CardDescription>
          </div>
          <Link href="/patients" className="text-sm text-primary flex items-center">
            View all <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {patients.map((patient) => (
            <Link href={`/patients/${patient.id}`} key={patient.id}>
              <div className="flex items-center justify-between rounded-lg border p-3 transition-all hover:bg-accent">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarFallback>
                      {patient.name.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{patient.name}</div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <User className="mr-1 h-3 w-3" />
                      <span>{patient.age} years • {patient.nationality}</span>
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Shield className="mr-1 h-3 w-3" />
                      <span>{patient.medicalId}</span>
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="mr-1 h-3 w-3" />
                      <span>{patient.lastVisit}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <PriorityBadge priority={patient.priority} />
                  <div className="flex flex-wrap justify-end gap-1">
                    {patient.diagnoses.map((diagnosis) => (
                      <Badge key={diagnosis.code} variant="outline" className="text-xs">
                        {diagnosis.code}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function PriorityBadge({ priority }: { priority: Patient["priority"] }) {
  const variants = {
    low: "bg-green-500",
    medium: "bg-yellow-500",
    high: "bg-red-500"
  }

  return (
    <span className="flex items-center text-xs">
      <span
        className={`h-2 w-2 rounded-full ${variants[priority]} mr-1`}
      />
      {priority === "high" && <AlertTriangle className="h-3 w-3 mr-1 text-red-500" />}
      {priority.charAt(0).toUpperCase() + priority.slice(1)} Priority
    </span>
  )
}
