import { Metadata } from "next"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BadgeAlert,
  Bell,
  Check,
  ChevronDown,
  Clock,
  Filter,
  Heart,
  HeartPulse,
  BellRing,
  AlertTriangle,
  Pill,
  Settings,
  ShieldAlert,
  UserCheck,
  UserCog,
  Search,
  Server,
  ThumbsUp,
  Trash2,
  Info
} from "lucide-react"

export const metadata: Metadata = {
  title: "Alerts | Intelligent Medical Assistant",
  description: "Clinical alerts and notifications dashboard",
}

// Add this for static export
export function generateStaticParams() {
  return []
}

// Sample alerts data
const clinicalAlerts = [
  {
    id: "ca-1",
    priority: "high",
    type: "medication",
    message: "Potential medication interaction detected: Lisinopril and Potassium supplements",
    patient: "Khalid Al-Dosari",
    patientId: "P13579",
    date: "April 14, 2025",
    time: "10:22 AM",
    isRead: false
  },
  {
    id: "ca-2",
    priority: "medium",
    type: "vitals",
    message: "Blood pressure elevated above threshold: 155/95 mmHg",
    patient: "Ahmed Al-Saeed",
    patientId: "P12345",
    date: "April 14, 2025",
    time: "09:45 AM",
    isRead: false
  },
  {
    id: "ca-3",
    priority: "low",
    type: "labs",
    message: "Lab results ready for review: Complete Blood Count",
    patient: "Mohammed Al-Ahmadi",
    patientId: "P24680",
    date: "April 13, 2025",
    time: "04:30 PM",
    isRead: true
  },
  {
    id: "ca-4",
    priority: "medium",
    type: "checkup",
    message: "Annual check-up reminder: Schedule appointment for patient",
    patient: "Fatima Al-Zahrani",
    patientId: "P67890",
    date: "April 13, 2025",
    time: "11:15 AM",
    isRead: true
  },
  {
    id: "ca-5",
    priority: "high",
    type: "critical",
    message: "Critical lab value: Potassium 6.3 mmol/L (High)",
    patient: "Noura Al-Subaie",
    patientId: "P13579",
    date: "April 12, 2025",
    time: "08:05 AM",
    isRead: true
  }
]

const systemAlerts = [
  {
    id: "sys-1",
    priority: "medium",
    type: "system",
    message: "System maintenance scheduled for April 17, 2025 from 2:00 AM to 4:00 AM",
    date: "April 14, 2025",
    time: "08:30 AM",
    isRead: false
  },
  {
    id: "sys-2",
    priority: "low",
    type: "update",
    message: "New clinical guidelines available: Diabetes Management Protocol updated",
    date: "April 12, 2025",
    time: "10:15 AM",
    isRead: true
  },
  {
    id: "sys-3",
    priority: "low",
    type: "update",
    message: "System update completed: AI model improved for diagnostic suggestions",
    date: "April 10, 2025",
    time: "03:45 PM",
    isRead: true
  },
  {
    id: "sys-4",
    priority: "medium",
    type: "security",
    message: "Password change required: Current password will expire in 5 days",
    date: "April 09, 2025",
    time: "09:30 AM",
    isRead: true
  }
]

// Helper for priority badges
const getPriorityBadge = (priority: string) => {
  switch (priority) {
    case "high":
      return <Badge className="bg-red-500">High</Badge>
    case "medium":
      return <Badge className="bg-amber-500">Medium</Badge>
    case "low":
      return <Badge className="bg-green-500">Low</Badge>
    default:
      return <Badge>Unknown</Badge>
  }
}

// Helper for alert type icons
const getAlertTypeIcon = (type: string) => {
  switch (type) {
    case "medication":
      return <Pill className="h-5 w-5 text-purple-500" />
    case "vitals":
      return <HeartPulse className="h-5 w-5 text-red-500" />
    case "labs":
      return <ChevronDown className="h-5 w-5 text-blue-500" />
    case "checkup":
      return <UserCheck className="h-5 w-5 text-green-500" />
    case "critical":
      return <AlertTriangle className="h-5 w-5 text-red-500" />
    case "system":
      return <Server className="h-5 w-5 text-slate-500" />
    case "update":
      return <Info className="h-5 w-5 text-blue-500" />
    case "security":
      return <ShieldAlert className="h-5 w-5 text-amber-500" />
    default:
      return <BadgeAlert className="h-5 w-5 text-muted-foreground" />
  }
}

export default function AlertsPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-4 md:p-6 space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Alerts & Notifications</h1>
              <p className="text-muted-foreground">
                Monitor clinical alerts, system notifications, and important updates
              </p>
            </div>
            <div className="flex gap-2 md:w-auto w-full">
              <Button variant="outline" className="md:w-auto w-full">
                <Settings className="mr-2 h-4 w-4" />
                Alert Settings
              </Button>
              <Button className="md:w-auto w-full">
                <Check className="mr-2 h-4 w-4" />
                Mark All Read
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="md:col-span-1">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Unread Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">3</div>
                <p className="text-xs text-muted-foreground mt-1">
                  2 high priority alerts require attention
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-red-500" />
                    <span className="text-sm">2 High Priority</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-amber-500" />
                    <span className="text-sm">1 Medium Priority</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-sm">0 Low Priority</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-1">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Alert Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-2">
                  <Button variant="outline" className="justify-start">
                    <HeartPulse className="mr-2 h-4 w-4 text-red-500" />
                    Clinical Alerts
                    <Badge className="ml-auto">5</Badge>
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Bell className="mr-2 h-4 w-4 text-amber-500" />
                    System Notifications
                    <Badge className="ml-auto">4</Badge>
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <UserCog className="mr-2 h-4 w-4 text-blue-500" />
                    Admin Alerts
                    <Badge className="ml-auto">2</Badge>
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Server className="mr-2 h-4 w-4 text-purple-500" />
                    Data Alerts
                    <Badge className="ml-auto">3</Badge>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Alert Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <div className="absolute left-3 top-0 bottom-0 w-[1px] bg-border" />
                  <div className="space-y-6 pl-8">
                    <div className="relative">
                      <div className="absolute left-[-30px] h-6 w-6 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center">
                        <AlertTriangle className="h-3 w-3 text-red-500" />
                      </div>
                      <div className="text-sm font-medium">High Priority Alert</div>
                      <div className="text-xs text-muted-foreground mb-1">10:22 AM Today</div>
                      <div className="text-sm">
                        Potential medication interaction detected for Khalid Al-Dosari
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute left-[-30px] h-6 w-6 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center">
                        <HeartPulse className="h-3 w-3 text-amber-500" />
                      </div>
                      <div className="text-sm font-medium">Medium Priority Alert</div>
                      <div className="text-xs text-muted-foreground mb-1">09:45 AM Today</div>
                      <div className="text-sm">
                        Blood pressure elevated above threshold for Ahmed Al-Saeed
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute left-[-30px] h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                        <Server className="h-3 w-3 text-blue-500" />
                      </div>
                      <div className="text-sm font-medium">System Notification</div>
                      <div className="text-xs text-muted-foreground mb-1">08:30 AM Today</div>
                      <div className="text-sm">
                        System maintenance scheduled for April 17, 2025
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="clinical" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-4">
              <TabsTrigger value="clinical">
                <HeartPulse className="mr-2 h-4 w-4" />
                Clinical Alerts
              </TabsTrigger>
              <TabsTrigger value="system">
                <BellRing className="mr-2 h-4 w-4" />
                System Notifications
              </TabsTrigger>
              <TabsTrigger value="admin">
                <UserCog className="mr-2 h-4 w-4" />
                Admin Alerts
              </TabsTrigger>
              <TabsTrigger value="data">
                <Server className="mr-2 h-4 w-4" />
                Data Alerts
              </TabsTrigger>
            </TabsList>

            {/* Clinical Alerts Tab */}
            <TabsContent value="clinical">
              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <CardTitle>Clinical Alerts</CardTitle>
                      <CardDescription>
                        Patient-specific alerts and clinical notifications
                      </CardDescription>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2">
                      <Button variant="outline" size="sm">
                        <Filter className="mr-2 h-4 w-4" />
                        Filter
                      </Button>
                      <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <input
                          type="search"
                          placeholder="Search alerts..."
                          className="pl-8 h-9 w-full md:w-[250px] rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[450px] pr-4">
                    <div className="space-y-4">
                      {clinicalAlerts.map((alert) => (
                        <div
                          key={alert.id}
                          className={`flex items-start border rounded-md p-4 ${
                            !alert.isRead ? "bg-primary/5 dark:bg-primary/10" : ""
                          }`}
                        >
                          <div className={`p-2 rounded-full flex-shrink-0 mr-4
                            ${alert.type === 'medication' ? 'bg-purple-100 dark:bg-purple-900' :
                              alert.type === 'vitals' ? 'bg-red-100 dark:bg-red-900' :
                              alert.type === 'labs' ? 'bg-blue-100 dark:bg-blue-900' :
                              alert.type === 'checkup' ? 'bg-green-100 dark:bg-green-900' :
                              'bg-amber-100 dark:bg-amber-900'}`}
                          >
                            {getAlertTypeIcon(alert.type)}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <div className="font-medium">{alert.message}</div>
                              {getPriorityBadge(alert.priority)}
                            </div>
                            <div className="text-sm text-muted-foreground mb-2">
                              Patient: {alert.patient} ({alert.patientId})
                            </div>
                            <div className="flex items-center text-xs text-muted-foreground">
                              <Clock className="mr-1 h-3 w-3" />
                              {alert.date} at {alert.time}
                              {!alert.isRead && (
                                <span className="ml-2 h-2 w-2 rounded-full bg-primary"></span>
                              )}
                            </div>
                            <div className="flex items-center justify-end gap-2 mt-3">
                              <Button variant="outline" size="sm">
                                <ThumbsUp className="mr-2 h-3 w-3" />
                                Acknowledge
                              </Button>
                              <Button variant="outline" size="sm">View Details</Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>

            {/* System Notifications Tab */}
            <TabsContent value="system">
              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <CardTitle>System Notifications</CardTitle>
                      <CardDescription>
                        System updates, maintenance notifications, and general alerts
                      </CardDescription>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2">
                      <Button variant="outline" size="sm">
                        <Filter className="mr-2 h-4 w-4" />
                        Filter
                      </Button>
                      <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <input
                          type="search"
                          placeholder="Search notifications..."
                          className="pl-8 h-9 w-full md:w-[250px] rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[450px] pr-4">
                    <div className="space-y-4">
                      {systemAlerts.map((alert) => (
                        <div
                          key={alert.id}
                          className={`flex items-start border rounded-md p-4 ${
                            !alert.isRead ? "bg-primary/5 dark:bg-primary/10" : ""
                          }`}
                        >
                          <div className={`p-2 rounded-full flex-shrink-0 mr-4
                            ${alert.type === 'system' ? 'bg-slate-100 dark:bg-slate-900' :
                              alert.type === 'update' ? 'bg-blue-100 dark:bg-blue-900' :
                              'bg-amber-100 dark:bg-amber-900'}`}
                          >
                            {getAlertTypeIcon(alert.type)}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <div className="font-medium">{alert.message}</div>
                              {getPriorityBadge(alert.priority)}
                            </div>
                            <div className="flex items-center text-xs text-muted-foreground">
                              <Clock className="mr-1 h-3 w-3" />
                              {alert.date} at {alert.time}
                              {!alert.isRead && (
                                <span className="ml-2 h-2 w-2 rounded-full bg-primary"></span>
                              )}
                            </div>
                            <div className="flex items-center justify-end gap-2 mt-3">
                              <Button variant="outline" size="sm">
                                <ThumbsUp className="mr-2 h-3 w-3" />
                                Acknowledge
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Trash2 className="mr-2 h-3 w-3" />
                                Dismiss
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Admin Alerts Tab */}
            <TabsContent value="admin">
              <Card>
                <CardHeader>
                  <CardTitle>Administrative Alerts</CardTitle>
                  <CardDescription>
                    Account, billing, and administrative notifications
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center h-[300px] text-center">
                  <div className="bg-muted/30 p-4 rounded-full mb-4">
                    <UserCog className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">No Administrative Alerts</h3>
                  <p className="text-muted-foreground max-w-md">
                    There are currently no active administrative alerts or notifications.
                    Any account-related notifications will appear here.
                  </p>
                  <Button variant="outline" className="mt-4">
                    <Settings className="mr-2 h-4 w-4" />
                    Admin Settings
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Data Alerts Tab */}
            <TabsContent value="data">
              <Card>
                <CardHeader>
                  <CardTitle>Data & Analytics Alerts</CardTitle>
                  <CardDescription>
                    Alerts related to data quality, analytics, and reports
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="border rounded-md p-4 bg-blue-50 dark:bg-blue-950">
                      <div className="flex items-start">
                        <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900 flex-shrink-0 mr-4">
                          <Server className="h-5 w-5 text-blue-500" />
                        </div>
                        <div>
                          <div className="font-medium">Data Dashboard Updated</div>
                          <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                            The analytics dashboard has been updated with new patient metrics.
                            New visualizations available for patient demographics.
                          </p>
                          <div className="flex items-center text-xs text-blue-600 dark:text-blue-400 mt-2">
                            <Clock className="mr-1 h-3 w-3" />
                            April 12, 2025 at 02:15 PM
                          </div>
                          <div className="flex items-center gap-2 mt-3">
                            <Button size="sm" variant="outline" className="bg-white dark:bg-blue-900">
                              View Dashboard
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border rounded-md p-4 bg-amber-50 dark:bg-amber-950">
                      <div className="flex items-start">
                        <div className="p-2 rounded-full bg-amber-100 dark:bg-amber-900 flex-shrink-0 mr-4">
                          <AlertTriangle className="h-5 w-5 text-amber-500" />
                        </div>
                        <div>
                          <div className="font-medium">Data Quality Alert</div>
                          <p className="text-sm text-amber-700 dark:text-amber-300 mt-1">
                            Missing patient demographic data detected in recent records.
                            Please ensure all required fields are completed.
                          </p>
                          <div className="flex items-center text-xs text-amber-600 dark:text-amber-400 mt-2">
                            <Clock className="mr-1 h-3 w-3" />
                            April 11, 2025 at 09:30 AM
                          </div>
                          <div className="flex items-center gap-2 mt-3">
                            <Button size="sm" variant="outline" className="bg-white dark:bg-amber-900">
                              Review Records
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border rounded-md p-4">
                      <div className="flex items-start">
                        <div className="p-2 rounded-full bg-green-100 dark:bg-green-900 flex-shrink-0 mr-4">
                          <Check className="h-5 w-5 text-green-500" />
                        </div>
                        <div>
                          <div className="font-medium">Monthly Report Available</div>
                          <p className="text-sm text-muted-foreground mt-1">
                            The March 2025 clinical statistics report is now available for download.
                            Includes patient volume, diagnostic trends, and treatment outcomes.
                          </p>
                          <div className="flex items-center text-xs text-muted-foreground mt-2">
                            <Clock className="mr-1 h-3 w-3" />
                            April 5, 2025 at 10:45 AM
                          </div>
                          <div className="flex items-center gap-2 mt-3">
                            <Button size="sm" variant="outline">
                              Download Report
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
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
