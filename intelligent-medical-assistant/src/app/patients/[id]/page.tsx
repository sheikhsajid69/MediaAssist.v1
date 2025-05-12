import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  CalendarClock,
  Phone,
  MapPin,
  Mail,
  FileText,
  BarChart,
  Clipboard,
  Activity,
  Pill,
  MessageSquare,
  Download,
  Printer,
  Share2,
  ArrowLeft
} from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

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

// Generate static routes for each patient ID
export function generateStaticParams() {
  // For this demo, we're hardcoding a few patient IDs
  // In a real app, you would fetch these from an API or database
  return [
    { id: "P12345" },
    { id: "P67890" },
    { id: "P24680" },
    { id: "P13579" },
    // Add numerical IDs
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" }
  ]
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

// Mock patient data - in real app would come from API/DB
const patient = {
  id: "1",
  name: "Mohammed Al-Ahmadi",
  nationality: "Saudi",
  age: 58,
  gender: "Male",
  birthDate: "January 15, 1967",
  address: "Al Olaya District, Riyadh, Saudi Arabia",
  email: "mohammed.alahmadi@example.com",
  medicalId: "SA-10458723",
  phoneNumber: "+966 55 123 4567",
  insuranceProvider: "National Health Insurance",
  insuranceNumber: "NHIS-45781209",
  bloodType: "A+",
  height: "175 cm",
  weight: "82 kg",
  bmi: "26.8",
  emergencyContact: {
    name: "Fatima Al-Ahmadi",
    relation: "Spouse",
    phone: "+966 55 987 6543"
  },
  lastVisit: "April 10, 2025",
  nextAppointment: "April 24, 2025",
  conditions: ["Type 2 diabetes", "Hypertension"],
  allergies: ["Penicillin", "Sulfa drugs"],
  diagnoses: [
    { code: "E11.9", name: "Type 2 diabetes mellitus without complications", date: "March 15, 2022" },
    { code: "I10", name: "Essential (primary) hypertension", date: "March 15, 2022" },
    { code: "E78.5", name: "Hyperlipidemia, unspecified", date: "July 8, 2023" }
  ],
  medications: [
    { name: "Metformin", dosage: "1000mg", frequency: "Twice daily", startDate: "March 20, 2022" },
    { name: "Lisinopril", dosage: "10mg", frequency: "Once daily", startDate: "March 20, 2022" },
    { name: "Atorvastatin", dosage: "20mg", frequency: "Once daily at bedtime", startDate: "July 10, 2023" }
  ],
  labResults: [
    { name: "HbA1c", value: "7.2%", date: "April 3, 2025", normal: "4.0-5.6%" },
    { name: "Blood Glucose (Fasting)", value: "135 mg/dL", date: "April 3, 2025", normal: "70-99 mg/dL" },
    { name: "Blood Pressure", value: "138/85 mmHg", date: "April 10, 2025", normal: "120/80 mmHg" },
    { name: "Total Cholesterol", value: "185 mg/dL", date: "April 3, 2025", normal: "<200 mg/dL" },
    { name: "LDL Cholesterol", value: "110 mg/dL", date: "April 3, 2025", normal: "<100 mg/dL" },
    { name: "HDL Cholesterol", value: "42 mg/dL", date: "April 3, 2025", normal: ">40 mg/dL" },
    { name: "Triglycerides", value: "165 mg/dL", date: "April 3, 2025", normal: "<150 mg/dL" }
  ],
  vitalSigns: [
    { name: "Heart Rate", value: "78 bpm", date: "April 10, 2025", normal: "60-100 bpm" },
    { name: "Respiratory Rate", value: "16 breaths/min", date: "April 10, 2025", normal: "12-20 breaths/min" },
    { name: "Temperature", value: "36.7°C", date: "April 10, 2025", normal: "36.1-37.2°C" },
    { name: "Oxygen Saturation", value: "98%", date: "April 10, 2025", normal: "95-100%" }
  ],
  status: "Follow-up",
  priority: "high",
  notes: "Patient has been managing his diabetes well with medication and lifestyle changes. Blood pressure is slightly elevated, continue monitoring. Recommended increasing physical activity and reducing sodium intake."
}

export const generateMetadata = async ({ params }: { params: { id: string } }): Promise<Metadata> => {
  return {
    title: `Patient ${params.id} | Intelligent Medical Assistant`,
    description: "Patient details and medical records"
  }
}

export default function PatientDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-4 md:p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon" asChild>
                <Link href="/patients">
                  <ArrowLeft className="h-4 w-4" />
                </Link>
              </Button>
              <h1 className="text-3xl font-bold tracking-tight">Patient Record</h1>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Printer className="mr-2 h-4 w-4" />
                Print
              </Button>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
              <Button size="sm">
                <MessageSquare className="mr-2 h-4 w-4" />
                Message
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Patient Information Card */}
            <Card className="md:col-span-1">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xl font-bold">Patient Information</CardTitle>
                <Button variant="outline" size="sm">Edit</Button>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="flex flex-col items-center mb-6">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarFallback className="text-xl bg-primary text-primary-foreground">
                      {patient.name.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h2 className="text-2xl font-bold">{patient.name}</h2>
                  <div className="flex items-center gap-2 mt-2">
                    {getStatusBadge(patient.status)}
                    {getPriorityBadge(patient.priority)}
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-muted-foreground text-sm">
                    <Badge variant="outline">{patient.medicalId}</Badge>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-sm text-muted-foreground">Age</div>
                    <div className="text-sm font-medium text-right">{patient.age} years</div>
                    <div className="text-sm text-muted-foreground">Gender</div>
                    <div className="text-sm font-medium text-right">{patient.gender}</div>
                    <div className="text-sm text-muted-foreground">Birth Date</div>
                    <div className="text-sm font-medium text-right">{patient.birthDate}</div>
                    <div className="text-sm text-muted-foreground">Blood Type</div>
                    <div className="text-sm font-medium text-right">{patient.bloodType}</div>
                    <div className="text-sm text-muted-foreground">Height</div>
                    <div className="text-sm font-medium text-right">{patient.height}</div>
                    <div className="text-sm text-muted-foreground">Weight</div>
                    <div className="text-sm font-medium text-right">{patient.weight}</div>
                    <div className="text-sm text-muted-foreground">BMI</div>
                    <div className="text-sm font-medium text-right">{patient.bmi}</div>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="text-sm font-medium mb-2">Contact Information</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span>{patient.phoneNumber}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span>{patient.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{patient.address}</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="text-sm font-medium mb-2">Insurance Information</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Provider:</span>
                        <span className="font-medium">{patient.insuranceProvider}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Policy Number:</span>
                        <span className="font-medium">{patient.insuranceNumber}</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="text-sm font-medium mb-2">Emergency Contact</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Name:</span>
                        <span className="font-medium">{patient.emergencyContact.name}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Relation:</span>
                        <span className="font-medium">{patient.emergencyContact.relation}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Phone:</span>
                        <span className="font-medium">{patient.emergencyContact.phone}</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="text-sm font-medium mb-2">Appointments</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <CalendarClock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Last Visit:</span>
                        <span className="font-medium">{patient.lastVisit}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CalendarClock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Next Appointment:</span>
                        <span className="font-medium">{patient.nextAppointment}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Main Content Area */}
            <div className="md:col-span-2 space-y-6">
              {/* Medical Tabs */}
              <Tabs defaultValue="overview">
                <TabsList className="w-full">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="medical-history">Medical History</TabsTrigger>
                  <TabsTrigger value="lab-results">Lab Results</TabsTrigger>
                  <TabsTrigger value="medications">Medications</TabsTrigger>
                  <TabsTrigger value="consultations">Consultations</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="space-y-6 mt-6">
                  {/* Overview Tab Content */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Current Conditions</CardTitle>
                      <CardDescription>Active medical conditions and diagnoses</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-sm font-medium mb-2">Diagnoses</h3>
                          <div className="space-y-2">
                            {patient.diagnoses.map((diagnosis, index) => (
                              <div key={index} className="flex items-center justify-between p-2 rounded-md border">
                                <div>
                                  <div className="font-medium">{diagnosis.name}</div>
                                  <div className="text-xs text-muted-foreground">Diagnosed: {diagnosis.date}</div>
                                </div>
                                <Badge variant="outline">{diagnosis.code}</Badge>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium mb-2">Allergies</h3>
                          <div className="flex flex-wrap gap-2">
                            {patient.allergies.map((allergy, index) => (
                              <Badge key={index} variant="destructive">{allergy}</Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* More overview cards would go here */}
                </TabsContent>
                <TabsContent value="medical-history" className="space-y-6 mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Medical History</CardTitle>
                      <CardDescription>Comprehensive medical history records</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Medical history content would go here...</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="lab-results" className="space-y-6 mt-6">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <div>
                        <CardTitle>Laboratory Results</CardTitle>
                        <CardDescription>Blood tests and other diagnostic results</CardDescription>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Export Results
                      </Button>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-sm font-medium mb-4">Recent Lab Results (April 3, 2025)</h3>
                          <div className="rounded-md border">
                            <div className="bg-muted px-4 py-2 rounded-t-md grid grid-cols-4 gap-4">
                              <div className="font-medium text-sm">Test</div>
                              <div className="font-medium text-sm">Result</div>
                              <div className="font-medium text-sm">Normal Range</div>
                              <div className="font-medium text-sm">Status</div>
                            </div>
                            <div className="divide-y">
                              {patient.labResults.map((result, index) => {
                                // Determine if the result is normal or not
                                let status = "normal";
                                let statusColor = "text-green-500";

                                if (result.name === "Blood Glucose (Fasting)" && parseFloat(result.value) > 99) {
                                  status = "elevated";
                                  statusColor = "text-red-500";
                                } else if (result.name === "HbA1c" && parseFloat(result.value) > 5.6) {
                                  status = "elevated";
                                  statusColor = "text-red-500";
                                } else if (result.name === "Blood Pressure" && parseInt(result.value.split('/')[0]) > 120) {
                                  status = "elevated";
                                  statusColor = "text-amber-500";
                                } else if (result.name === "LDL Cholesterol" && parseInt(result.value) > 100) {
                                  status = "elevated";
                                  statusColor = "text-amber-500";
                                } else if (result.name === "Triglycerides" && parseInt(result.value) > 150) {
                                  status = "elevated";
                                  statusColor = "text-amber-500";
                                }

                                return (
                                  <div key={index} className="px-4 py-3 grid grid-cols-4 gap-4 items-center">
                                    <div className="text-sm font-medium">{result.name}</div>
                                    <div className="text-sm">{result.value}</div>
                                    <div className="text-sm text-muted-foreground">{result.normal}</div>
                                    <div className={`text-sm font-medium capitalize ${statusColor}`}>
                                      {status}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-sm font-medium mb-4">Vital Signs (April 10, 2025)</h3>
                          <div className="rounded-md border">
                            <div className="bg-muted px-4 py-2 rounded-t-md grid grid-cols-4 gap-4">
                              <div className="font-medium text-sm">Measurement</div>
                              <div className="font-medium text-sm">Value</div>
                              <div className="font-medium text-sm">Normal Range</div>
                              <div className="font-medium text-sm">Status</div>
                            </div>
                            <div className="divide-y">
                              {patient.vitalSigns.map((vital, index) => (
                                <div key={index} className="px-4 py-3 grid grid-cols-4 gap-4 items-center">
                                  <div className="text-sm font-medium">{vital.name}</div>
                                  <div className="text-sm">{vital.value}</div>
                                  <div className="text-sm text-muted-foreground">{vital.normal}</div>
                                  <div className="text-sm font-medium text-green-500">
                                    Normal
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Card>
                            <CardHeader className="py-3">
                              <CardTitle className="text-md">Glucose Trends</CardTitle>
                            </CardHeader>
                            <CardContent className="pb-4">
                              <div className="h-[200px] flex items-center justify-center bg-muted rounded-md">
                                <div className="text-center text-muted-foreground text-sm">
                                  Glucose Trend Chart would go here
                                </div>
                              </div>
                            </CardContent>
                          </Card>

                          <Card>
                            <CardHeader className="py-3">
                              <CardTitle className="text-md">Blood Pressure Trends</CardTitle>
                            </CardHeader>
                            <CardContent className="pb-4">
                              <div className="h-[200px] flex items-center justify-center bg-muted rounded-md">
                                <div className="text-center text-muted-foreground text-sm">
                                  Blood Pressure Trend Chart would go here
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="medications" className="space-y-6 mt-6">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <div>
                        <CardTitle>Medications</CardTitle>
                        <CardDescription>Current medication regimen</CardDescription>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Pill className="mr-2 h-4 w-4" />
                          Add Medication
                        </Button>
                        <Button variant="outline" size="sm">
                          <Printer className="mr-2 h-4 w-4" />
                          Print
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-sm font-medium mb-4">Current Medications</h3>
                          <div className="rounded-md border">
                            <div className="bg-muted px-4 py-2 rounded-t-md grid grid-cols-4 gap-4">
                              <div className="font-medium text-sm">Medication</div>
                              <div className="font-medium text-sm">Dosage</div>
                              <div className="font-medium text-sm">Frequency</div>
                              <div className="font-medium text-sm">Start Date</div>
                            </div>
                            <div className="divide-y">
                              {patient.medications.map((medication, index) => (
                                <div key={index} className="px-4 py-3 grid grid-cols-4 gap-4 items-center">
                                  <div className="text-sm font-medium">{medication.name}</div>
                                  <div className="text-sm">{medication.dosage}</div>
                                  <div className="text-sm">{medication.frequency}</div>
                                  <div className="text-sm text-muted-foreground">{medication.startDate}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-sm font-medium mb-2">Medication Schedule</h3>
                          <div className="rounded-md border p-4">
                            <div className="space-y-4">
                              <div>
                                <h4 className="text-sm font-medium mb-2">Morning</h4>
                                <div className="flex items-center space-x-2">
                                  <Badge className="bg-blue-500">Metformin 1000mg</Badge>
                                  <Badge className="bg-blue-500">Lisinopril 10mg</Badge>
                                </div>
                              </div>
                              <div>
                                <h4 className="text-sm font-medium mb-2">Evening</h4>
                                <div className="flex items-center space-x-2">
                                  <Badge className="bg-blue-500">Metformin 1000mg</Badge>
                                </div>
                              </div>
                              <div>
                                <h4 className="text-sm font-medium mb-2">Bedtime</h4>
                                <div className="flex items-center space-x-2">
                                  <Badge className="bg-blue-500">Atorvastatin 20mg</Badge>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-sm font-medium mb-2">Medication Notes</h3>
                          <div className="rounded-md border p-4">
                            <ul className="list-disc list-inside space-y-1">
                              <li className="text-sm">Take Metformin with food to reduce GI side effects</li>
                              <li className="text-sm">Monitor for side effects with Lisinopril, report any persistent dry cough</li>
                              <li className="text-sm">Atorvastatin should be taken at night for optimal efficacy</li>
                              <li className="text-sm">Monthly liver function monitoring recommended with statin therapy</li>
                            </ul>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Card>
                            <CardHeader className="py-3">
                              <CardTitle className="text-md">Medication Adherence</CardTitle>
                            </CardHeader>
                            <CardContent className="pb-4">
                              <div className="h-[180px] flex items-center justify-center bg-muted rounded-md">
                                <div className="text-center text-muted-foreground text-sm">
                                  Medication Adherence Chart would go here
                                </div>
                              </div>
                            </CardContent>
                          </Card>

                          <Card>
                            <CardHeader className="py-3">
                              <CardTitle className="text-md">Medication History</CardTitle>
                            </CardHeader>
                            <CardContent className="pt-0 pb-2">
                              <div className="space-y-2">
                                <div className="border-l-2 border-blue-500 pl-3 py-1">
                                  <div className="text-xs text-muted-foreground">Jul 10, 2023</div>
                                  <div className="text-sm">Added Atorvastatin 20mg daily</div>
                                </div>
                                <div className="border-l-2 border-amber-500 pl-3 py-1">
                                  <div className="text-xs text-muted-foreground">May 18, 2022</div>
                                  <div className="text-sm">Changed Metformin from 500mg to 1000mg twice daily</div>
                                </div>
                                <div className="border-l-2 border-blue-500 pl-3 py-1">
                                  <div className="text-xs text-muted-foreground">Mar 20, 2022</div>
                                  <div className="text-sm">Started Metformin 500mg and Lisinopril 10mg</div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="consultations" className="space-y-6 mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Consultation History</CardTitle>
                      <CardDescription>Records of patient consultations and visits</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Consultations content would go here...</p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
