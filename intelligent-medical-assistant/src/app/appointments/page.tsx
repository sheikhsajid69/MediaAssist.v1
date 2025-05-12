import { Metadata } from "next"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Calendar,
  Clock,
  User,
  Plus,
  Video,
  Phone,
  Check,
  X,
  Users,
  Filter,
  Search,
  CalendarDays,
  CalendarSearch,
  MessageSquareText
} from "lucide-react"

export const metadata: Metadata = {
  title: "Appointments | Intelligent Medical Assistant",
  description: "Manage patient appointments and schedules",
}

// Add this for static export
export function generateStaticParams() {
  return []
}

// Simulated appointment data
const upcomingAppointments = [
  {
    id: "app-1",
    patientName: "Ahmed Al-Saeed",
    patientId: "P12345",
    date: "April 15, 2025",
    time: "09:30 AM",
    type: "in-person",
    status: "confirmed",
    reason: "Annual check-up",
    notes: "Patient has history of hypertension"
  },
  {
    id: "app-2",
    patientName: "Fatima Al-Zahrani",
    patientId: "P67890",
    date: "April 15, 2025",
    time: "11:00 AM",
    type: "video",
    status: "confirmed",
    reason: "Follow-up on lab results",
    notes: "Review thyroid panel results"
  },
  {
    id: "app-3",
    patientName: "Mohammed Al-Ahmadi",
    patientId: "P24680",
    date: "April 16, 2025",
    time: "10:15 AM",
    type: "phone",
    status: "pending",
    reason: "Medication consultation",
    notes: "Discuss potential side effects of new medication"
  },
  {
    id: "app-4",
    patientName: "Noura Al-Subaie",
    patientId: "P13579",
    date: "April 16, 2025",
    time: "02:45 PM",
    type: "in-person",
    status: "confirmed",
    reason: "Diabetes management",
    notes: "Review glucose monitoring data"
  },
  {
    id: "app-5",
    patientName: "Khalid Al-Dosari",
    patientId: "P13579",
    date: "April 17, 2025",
    time: "09:00 AM",
    type: "video",
    status: "confirmed",
    reason: "Post-surgery follow-up",
    notes: "Assess wound healing progress"
  }
]

// Appointment type badge helper
const getAppointmentTypeBadge = (type: string) => {
  switch (type) {
    case "in-person":
      return <Badge className="bg-blue-500">In-Person</Badge>
    case "video":
      return <Badge className="bg-purple-500">Video Call</Badge>
    case "phone":
      return <Badge className="bg-green-500">Phone Call</Badge>
    default:
      return <Badge>Unknown</Badge>
  }
}

// Appointment status badge helper
const getAppointmentStatusBadge = (status: string) => {
  switch (status) {
    case "confirmed":
      return <Badge className="bg-emerald-500">Confirmed</Badge>
    case "pending":
      return <Badge className="bg-amber-500">Pending</Badge>
    case "cancelled":
      return <Badge className="bg-red-500">Cancelled</Badge>
    case "completed":
      return <Badge className="bg-slate-500">Completed</Badge>
    default:
      return <Badge>Unknown</Badge>
  }
}

export default function AppointmentsPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-4 md:p-6 space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Appointments</h1>
              <p className="text-muted-foreground">
                Manage patient appointments and schedule consultations
              </p>
            </div>
            <Button className="md:w-auto w-full">
              <Plus className="mr-2 h-4 w-4" />
              New Appointment
            </Button>
          </div>

          <Tabs defaultValue="calendar" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-4">
              <TabsTrigger value="calendar">
                <Calendar className="mr-2 h-4 w-4" />
                Calendar View
              </TabsTrigger>
              <TabsTrigger value="list">
                <CalendarSearch className="mr-2 h-4 w-4" />
                Appointments List
              </TabsTrigger>
              <TabsTrigger value="stats">
                <CalendarDays className="mr-2 h-4 w-4" />
                Schedule Analytics
              </TabsTrigger>
            </TabsList>

            {/* Calendar View Tab */}
            <TabsContent value="calendar">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Monthly Calendar</CardTitle>
                    <CardDescription>
                      View and manage appointments for April 2025
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-7 gap-1">
                      {/* Calendar header */}
                      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                        <div key={day} className="text-center font-medium text-sm p-2">
                          {day}
                        </div>
                      ))}

                      {/* Calendar days - hardcoded for April 2025 */}
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div key={`blank-${i}`} className="p-2 text-center text-muted-foreground text-sm"></div>
                      ))}

                      {Array.from({ length: 30 }).map((_, i) => {
                        const day = i + 1;
                        const isToday = day === 14; // Assuming today is April 14
                        const hasAppointments = [15, 16, 17].includes(day);
                        return (
                          <div
                            key={`day-${day}`}
                            className={`p-2 min-h-[80px] border rounded-md ${
                              isToday
                                ? "bg-primary/10 border-primary"
                                : hasAppointments
                                ? "bg-secondary/20"
                                : ""
                            }`}
                          >
                            <div className="text-right font-medium text-sm mb-1">
                              {day}
                              {hasAppointments && (
                                <Badge variant="outline" className="ml-1">
                                  {day === 15 ? "2" : day === 16 ? "2" : "1"}
                                </Badge>
                              )}
                            </div>
                            {day === 15 && (
                              <div className="text-xs bg-blue-100 dark:bg-blue-900 p-1 rounded mb-1 truncate">
                                09:30 Ahmed
                              </div>
                            )}
                            {day === 15 && (
                              <div className="text-xs bg-purple-100 dark:bg-purple-900 p-1 rounded mb-1 truncate">
                                11:00 Fatima
                              </div>
                            )}
                            {day === 16 && (
                              <div className="text-xs bg-green-100 dark:bg-green-900 p-1 rounded mb-1 truncate">
                                10:15 Mohammed
                              </div>
                            )}
                            {day === 16 && (
                              <div className="text-xs bg-blue-100 dark:bg-blue-900 p-1 rounded mb-1 truncate">
                                02:45 Noura
                              </div>
                            )}
                            {day === 17 && (
                              <div className="text-xs bg-purple-100 dark:bg-purple-900 p-1 rounded mb-1 truncate">
                                09:00 Khalid
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Today's Schedule</CardTitle>
                    <CardDescription>
                      April 14, 2025
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-center p-4 border border-dashed rounded-md">
                        <Calendar className="h-10 w-10 mx-auto mb-2 text-muted-foreground" />
                        <h3 className="font-medium">No Appointments Today</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          You have a free day with no scheduled appointments.
                        </p>
                        <Button variant="outline" className="mt-4 w-full">
                          <Plus className="mr-2 h-4 w-4" />
                          Schedule New
                        </Button>
                      </div>

                      <div className="space-y-1">
                        <h3 className="font-medium">Tomorrow's Appointments</h3>
                        <div className="border rounded-md p-3 mt-2">
                          <div className="flex justify-between items-start mb-2">
                            <div className="font-medium">Ahmed Al-Saeed</div>
                            <Badge className="bg-blue-500">In-Person</Badge>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="mr-1 h-3.5 w-3.5" />
                            09:30 AM - 10:00 AM
                          </div>
                          <div className="text-sm mt-2">
                            Annual check-up
                          </div>
                        </div>

                        <div className="border rounded-md p-3 mt-2">
                          <div className="flex justify-between items-start mb-2">
                            <div className="font-medium">Fatima Al-Zahrani</div>
                            <Badge className="bg-purple-500">Video Call</Badge>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="mr-1 h-3.5 w-3.5" />
                            11:00 AM - 11:30 AM
                          </div>
                          <div className="text-sm mt-2">
                            Follow-up on lab results
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Upcoming Appointments</CardTitle>
                  <CardDescription>
                    Scheduled for the next 7 days
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px] pr-4">
                    <div className="space-y-4">
                      {upcomingAppointments.map((appointment) => (
                        <div key={appointment.id} className="flex items-center justify-between border rounded-md p-3">
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-full
                              ${appointment.type === 'in-person' ? 'bg-blue-100 dark:bg-blue-900' :
                                appointment.type === 'video' ? 'bg-purple-100 dark:bg-purple-900' :
                                'bg-green-100 dark:bg-green-900'}`}>
                              {appointment.type === 'in-person' ?
                                <User className={`h-5 w-5 ${appointment.type === 'in-person' ? 'text-blue-500' :
                                  appointment.type === 'video' ? 'text-purple-500' : 'text-green-500'}`} /> :
                                appointment.type === 'video' ?
                                <Video className={`h-5 w-5 ${appointment.type === 'in-person' ? 'text-blue-500' :
                                  appointment.type === 'video' ? 'text-purple-500' : 'text-green-500'}`} /> :
                                <Phone className={`h-5 w-5 ${appointment.type === 'in-person' ? 'text-blue-500' :
                                  appointment.type === 'video' ? 'text-purple-500' : 'text-green-500'}`} />}
                            </div>
                            <div>
                              <div className="font-medium">{appointment.patientName}</div>
                              <div className="text-sm text-muted-foreground">
                                {appointment.date} • {appointment.time} • {appointment.reason}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            {getAppointmentStatusBadge(appointment.status)}
                            <Button variant="ghost" size="sm">View</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Appointments List Tab */}
            <TabsContent value="list">
              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <CardTitle>All Appointments</CardTitle>
                      <CardDescription>
                        View and manage upcoming and past appointments
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
                          placeholder="Search appointments..."
                          className="pl-8 h-9 w-full md:w-[250px] rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-md divide-y">
                    <div className="grid grid-cols-12 gap-2 p-3 font-medium bg-muted/50 text-sm">
                      <div className="col-span-3">Patient</div>
                      <div className="col-span-2">Date & Time</div>
                      <div className="col-span-2">Type</div>
                      <div className="col-span-2">Status</div>
                      <div className="col-span-2">Reason</div>
                      <div className="col-span-1">Actions</div>
                    </div>

                    {/* Appointment rows */}
                    {upcomingAppointments.map((appointment) => (
                      <div key={appointment.id} className="grid grid-cols-12 gap-2 p-3 items-center text-sm">
                        <div className="col-span-3 flex items-center gap-2">
                          <User className="h-4 w-4 text-muted-foreground" />
                          <div>
                            <div>{appointment.patientName}</div>
                            <div className="text-xs text-muted-foreground">{appointment.patientId}</div>
                          </div>
                        </div>
                        <div className="col-span-2">
                          <div>{appointment.date}</div>
                          <div className="text-xs text-muted-foreground">{appointment.time}</div>
                        </div>
                        <div className="col-span-2">
                          {getAppointmentTypeBadge(appointment.type)}
                        </div>
                        <div className="col-span-2">
                          {getAppointmentStatusBadge(appointment.status)}
                        </div>
                        <div className="col-span-2 truncate" title={appointment.reason}>
                          {appointment.reason}
                        </div>
                        <div className="col-span-1">
                          <div className="flex gap-1">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MessageSquareText className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              {appointment.status === "confirmed" ?
                                <X className="h-4 w-4" /> :
                                <Check className="h-4 w-4" />
                              }
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Schedule Analytics Tab */}
            <TabsContent value="stats">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Total Appointments</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">127</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      +12% from last month
                    </p>
                    <div className="mt-4 h-1 w-full bg-muted overflow-hidden rounded-full">
                      <div className="bg-primary h-1 w-3/4 rounded-full" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Appointment Types</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-2 mt-2">
                      <div className="flex flex-col items-center justify-center p-2 border rounded-md">
                        <User className="h-5 w-5 text-blue-500 mb-1" />
                        <div className="text-xl font-bold">52</div>
                        <div className="text-xs text-muted-foreground">In-Person</div>
                      </div>
                      <div className="flex flex-col items-center justify-center p-2 border rounded-md">
                        <Video className="h-5 w-5 text-purple-500 mb-1" />
                        <div className="text-xl font-bold">43</div>
                        <div className="text-xs text-muted-foreground">Video Call</div>
                      </div>
                      <div className="flex flex-col items-center justify-center p-2 border rounded-md">
                        <Phone className="h-5 w-5 text-green-500 mb-1" />
                        <div className="text-xl font-bold">32</div>
                        <div className="text-xs text-muted-foreground">Phone Call</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">89%</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      +4% from last month
                    </p>
                    <div className="grid grid-cols-4 gap-1 mt-4 text-xs">
                      <div className="col-span-3">
                        <div className="h-1 w-full bg-emerald-500 rounded-full" />
                        <div className="mt-1">Completed</div>
                      </div>
                      <div className="col-span-1">
                        <div className="h-1 w-full bg-red-500 rounded-full" />
                        <div className="mt-1">Cancelled</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Busy Hours</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-lg font-bold">10:00 - 11:00 AM</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Peak appointment time
                    </p>
                    <div className="mt-4 grid grid-cols-12 gap-1 h-8 items-end">
                      {[3, 6, 9, 12, 15, 10, 5, 7, 8, 4, 2, 1].map((value, i) => (
                        <div
                          key={i}
                          className="bg-primary/80 rounded-t w-full"
                          style={{ height: `${(value / 15) * 100}%` }}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>8AM</span>
                      <span>12PM</span>
                      <span>4PM</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Appointment Trends</CardTitle>
                  <CardDescription>
                    Monthly appointment statistics and trends
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[250px] w-full flex items-end justify-between gap-2">
                    {[
                      { month: "Jan", count: 85, increase: false },
                      { month: "Feb", count: 78, increase: false },
                      { month: "Mar", count: 90, increase: true },
                      { month: "Apr", count: 127, increase: true },
                      { month: "May", count: 0, increase: false },
                      { month: "Jun", count: 0, increase: false },
                      { month: "Jul", count: 0, increase: false },
                      { month: "Aug", count: 0, increase: false },
                      { month: "Sep", count: 0, increase: false },
                      { month: "Oct", count: 0, increase: false },
                      { month: "Nov", count: 0, increase: false },
                      { month: "Dec", count: 0, increase: false }
                    ].map((item, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div className="text-sm font-medium">
                          {item.count > 0 && item.count}
                        </div>
                        <div
                          className={`w-14 rounded-t-md ${
                            item.count === 0
                              ? "bg-muted h-4"
                              : item.increase
                                ? "bg-emerald-500"
                                : "bg-blue-500"
                          }`}
                          style={{
                            height: item.count === 0 ? 8 : `${(item.count / 130) * 200}px`,
                          }}
                        />
                        <div className="text-xs text-muted-foreground mt-1">{item.month}</div>
                      </div>
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
