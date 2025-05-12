import { Metadata } from "next"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Search,
  Filter,
  Calendar,
  User,
  Plus,
  FileText,
  Download
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Patient Records | Intelligent Medical Assistant",
  description: "Patient records management system",
}

// Sample patient data
const patients = [
  {
    id: "1",
    name: "Mohammed Al-Ahmadi",
    nationality: "Saudi",
    age: 58,
    gender: "Male",
    medicalId: "SA-10458723",
    phoneNumber: "+966 55 123 4567",
    lastVisit: "April 10, 2025",
    conditions: ["Type 2 diabetes", "Hypertension"],
    diagnoses: [
      { code: "E11.9", name: "Type 2 diabetes" },
      { code: "I10", name: "Hypertension" }
    ],
    status: "Follow-up",
    priority: "high"
  },
  {
    id: "2",
    name: "Fatima Al-Zahrani",
    nationality: "Saudi",
    age: 42,
    gender: "Female",
    medicalId: "SA-10985634",
    phoneNumber: "+966 50 987 6543",
    lastVisit: "April 9, 2025",
    conditions: ["Asthma", "Migraine"],
    diagnoses: [
      { code: "J45.909", name: "Asthma" },
      { code: "G43.909", name: "Migraine" }
    ],
    status: "Active",
    priority: "medium"
  },
  {
    id: "3",
    name: "Ahmad Qureshi",
    nationality: "Pakistani",
    age: 29,
    gender: "Male",
    medicalId: "EX-20341567",
    phoneNumber: "+966 54 765 4321",
    lastVisit: "April 8, 2025",
    conditions: ["Low back pain"],
    diagnoses: [
      { code: "M54.5", name: "Low back pain" }
    ],
    status: "New",
    priority: "low"
  },
  {
    id: "4",
    name: "Nora Al-Subaie",
    nationality: "Saudi",
    age: 35,
    gender: "Female",
    medicalId: "SA-10789342",
    phoneNumber: "+966 56 234 5678",
    lastVisit: "April 8, 2025",
    conditions: ["Gastritis", "Anxiety disorder"],
    diagnoses: [
      { code: "K29.60", name: "Gastritis" },
      { code: "F41.1", name: "Anxiety disorder" }
    ],
    status: "Active",
    priority: "medium"
  },
  {
    id: "5",
    name: "Khalid Al-Dosari",
    nationality: "Saudi",
    age: 64,
    gender: "Male",
    medicalId: "SA-10562187",
    phoneNumber: "+966 59 876 5432",
    lastVisit: "April 5, 2025",
    conditions: ["COPD", "Coronary artery disease"],
    diagnoses: [
      { code: "J44.9", name: "COPD" },
      { code: "I25.10", name: "Coronary artery disease" }
    ],
    status: "Follow-up",
    priority: "high"
  },
  {
    id: "6",
    name: "Layla Al-Ghamdi",
    nationality: "Saudi",
    age: 27,
    gender: "Female",
    medicalId: "SA-10698234",
    phoneNumber: "+966 58 345 6789",
    lastVisit: "April 4, 2025",
    conditions: ["Hypothyroidism"],
    diagnoses: [
      { code: "E03.9", name: "Hypothyroidism" }
    ],
    status: "New",
    priority: "low"
  },
  {
    id: "7",
    name: "Omar Al-Otaibi",
    nationality: "Saudi",
    age: 52,
    gender: "Male",
    medicalId: "SA-10437856",
    phoneNumber: "+966 57 654 3210",
    lastVisit: "April 3, 2025",
    conditions: ["Type 2 diabetes", "Diabetic neuropathy"],
    diagnoses: [
      { code: "E11.9", name: "Type 2 diabetes" },
      { code: "E11.40", name: "Diabetic neuropathy" }
    ],
    status: "Active",
    priority: "medium"
  },
  {
    id: "8",
    name: "Aisha Al-Qahtani",
    nationality: "Saudi",
    age: 38,
    gender: "Female",
    medicalId: "SA-10912456",
    phoneNumber: "+966 51 432 1098",
    lastVisit: "April 2, 2025",
    conditions: ["Rheumatoid arthritis"],
    diagnoses: [
      { code: "M06.9", name: "Rheumatoid arthritis" }
    ],
    status: "Follow-up",
    priority: "medium"
  }
]

// Helper function to get priority badge
const getPriorityBadge = (priority: string) => {
  switch (priority) {
    case "high":
      return <Badge className="bg-red-500">High Priority</Badge>
    case "medium":
      return <Badge className="bg-yellow-500">Medium Priority</Badge>
    case "low":
      return <Badge className="bg-green-500">Low Priority</Badge>
    default:
      return <Badge>Unknown Priority</Badge>
  }
}

// Helper function to get status badge
const getStatusBadge = (status: string) => {
  switch (status) {
    case "New":
      return <Badge className="bg-blue-500">New Patient</Badge>
    case "Active":
      return <Badge className="bg-green-500">Active Treatment</Badge>
    case "Follow-up":
      return <Badge className="bg-purple-500">Follow-up</Badge>
    default:
      return <Badge>Unknown Status</Badge>
  }
}

export default function PatientsPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-4 md:p-6 space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Patient Records</h1>
              <p className="text-muted-foreground">
                Manage and view detailed patient information
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline">
                <FileText className="mr-2 h-4 w-4" />
                Generate Report
              </Button>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Patient
              </Button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="relative w-full md:w-auto flex-1 max-w-lg">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search patients by name, ID or condition..."
                className="pl-8 pr-4"
              />
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <Button variant="outline" className="flex-1 md:flex-none">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
              <Button variant="outline" className="flex-1 md:flex-none">
                <Calendar className="mr-2 h-4 w-4" />
                Date Range
              </Button>
              <Button variant="outline" className="flex-1 md:flex-none">
                <User className="mr-2 h-4 w-4" />
                Doctor
              </Button>
            </div>
          </div>

          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All Patients</TabsTrigger>
              <TabsTrigger value="recent">Recent Visits</TabsTrigger>
              <TabsTrigger value="high-priority">High Priority</TabsTrigger>
              <TabsTrigger value="follow-up">Follow-up</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <Card>
                <CardHeader>
                  <CardTitle>All Patients ({patients.length})</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {patients.map((patient) => (
                      <Link href={`/patients/${patient.id}`} key={patient.id}>
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-lg border p-4 transition-all hover:bg-accent">
                          <div className="flex items-center gap-4">
                            <Avatar className="h-12 w-12">
                              <AvatarFallback className="bg-primary text-primary-foreground">
                                {patient.name.split(" ").map(n => n[0]).join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{patient.name}</div>
                              <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 text-xs text-muted-foreground">
                                <div>{patient.age} years • {patient.gender}</div>
                                <div>{patient.medicalId}</div>
                                <div>Last visit: {patient.lastVisit}</div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
                            <div className="flex flex-wrap gap-1">
                              {patient.diagnoses.map((diagnosis) => (
                                <Badge key={diagnosis.code} variant="outline" className="text-xs">
                                  {diagnosis.code}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {getStatusBadge(patient.status)}
                              {getPriorityBadge(patient.priority)}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="recent">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Visits (Last 7 Days)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {patients.slice(0, 5).map((patient) => (
                      <Link href={`/patients/${patient.id}`} key={patient.id}>
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-lg border p-4 transition-all hover:bg-accent">
                          <div className="flex items-center gap-4">
                            <Avatar className="h-12 w-12">
                              <AvatarFallback className="bg-primary text-primary-foreground">
                                {patient.name.split(" ").map(n => n[0]).join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{patient.name}</div>
                              <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 text-xs text-muted-foreground">
                                <div>{patient.age} years • {patient.gender}</div>
                                <div>{patient.medicalId}</div>
                                <div>Last visit: {patient.lastVisit}</div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
                            <div className="flex flex-wrap gap-1">
                              {patient.diagnoses.map((diagnosis) => (
                                <Badge key={diagnosis.code} variant="outline" className="text-xs">
                                  {diagnosis.code}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {getStatusBadge(patient.status)}
                              {getPriorityBadge(patient.priority)}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="high-priority">
              <Card>
                <CardHeader>
                  <CardTitle>High Priority Patients</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {patients
                      .filter(patient => patient.priority === "high")
                      .map((patient) => (
                        <Link href={`/patients/${patient.id}`} key={patient.id}>
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-lg border p-4 transition-all hover:bg-accent">
                            <div className="flex items-center gap-4">
                              <Avatar className="h-12 w-12">
                                <AvatarFallback className="bg-primary text-primary-foreground">
                                  {patient.name.split(" ").map(n => n[0]).join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium">{patient.name}</div>
                                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 text-xs text-muted-foreground">
                                  <div>{patient.age} years • {patient.gender}</div>
                                  <div>{patient.medicalId}</div>
                                  <div>Last visit: {patient.lastVisit}</div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
                              <div className="flex flex-wrap gap-1">
                                {patient.diagnoses.map((diagnosis) => (
                                  <Badge key={diagnosis.code} variant="outline" className="text-xs">
                                    {diagnosis.code}
                                  </Badge>
                                ))}
                              </div>
                              <div className="flex flex-wrap gap-1">
                                {getStatusBadge(patient.status)}
                                {getPriorityBadge(patient.priority)}
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="follow-up">
              <Card>
                <CardHeader>
                  <CardTitle>Follow-up Patients</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {patients
                      .filter(patient => patient.status === "Follow-up")
                      .map((patient) => (
                        <Link href={`/patients/${patient.id}`} key={patient.id}>
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-lg border p-4 transition-all hover:bg-accent">
                            <div className="flex items-center gap-4">
                              <Avatar className="h-12 w-12">
                                <AvatarFallback className="bg-primary text-primary-foreground">
                                  {patient.name.split(" ").map(n => n[0]).join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium">{patient.name}</div>
                                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 text-xs text-muted-foreground">
                                  <div>{patient.age} years • {patient.gender}</div>
                                  <div>{patient.medicalId}</div>
                                  <div>Last visit: {patient.lastVisit}</div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
                              <div className="flex flex-wrap gap-1">
                                {patient.diagnoses.map((diagnosis) => (
                                  <Badge key={diagnosis.code} variant="outline" className="text-xs">
                                    {diagnosis.code}
                                  </Badge>
                                ))}
                              </div>
                              <div className="flex flex-wrap gap-1">
                                {getStatusBadge(patient.status)}
                                {getPriorityBadge(patient.priority)}
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
