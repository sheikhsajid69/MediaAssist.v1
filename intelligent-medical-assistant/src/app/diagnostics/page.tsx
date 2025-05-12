import { Metadata } from "next"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import {
  Stethoscope,
  Brain,
  Activity,
  FileText,
  PieChart,
  Search,
  Plus,
  Filter,
  Microscope,
  ClipboardCheck,
  Upload,
  Check,
  AlertTriangle,
  HeartPulse,
  Pill,
  Info
} from "lucide-react"
import { SymptomChecker } from "@/components/symptom-checker/symptom-checker"

export const metadata: Metadata = {
  title: "Diagnostics | Intelligent Medical Assistant",
  description: "AI-powered diagnostic tools and decision support",
}

export default function DiagnosticsPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-4 md:p-6 space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Diagnostics</h1>
              <p className="text-muted-foreground">
                AI-powered diagnostic tools and clinical decision support
              </p>
            </div>
          </div>

          <Tabs defaultValue="tools">
            <TabsList className="grid w-full grid-cols-3 lg:w-auto">
              <TabsTrigger value="tools">Diagnostic Tools</TabsTrigger>
              <TabsTrigger value="symptom-checker">Symptom Checker</TabsTrigger>
              <TabsTrigger value="ai-support">AI Support</TabsTrigger>
            </TabsList>

            {/* Diagnostic Tools Tab */}
            <TabsContent value="tools" className="space-y-6 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Lab Results Tool */}
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Lab Results Analyzer</CardTitle>
                      <Microscope className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <CardDescription>Analyze and interpret lab test results</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        Upload lab results for AI analysis and interpretation with reference ranges and trend visualization.
                      </p>
                      <div className="flex items-center justify-between gap-2 mt-4">
                        <Button variant="outline" className="w-full">
                          <Upload className="mr-2 h-4 w-4" />
                          Upload Results
                        </Button>
                        <Button className="w-full">
                          <Search className="mr-2 h-4 w-4" />
                          Browse
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* ECG Analysis Tool */}
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">ECG Analysis</CardTitle>
                      <HeartPulse className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <CardDescription>Electrocardiogram AI interpretation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        Upload ECG recordings for AI-powered analysis, rhythm identification, and anomaly detection.
                      </p>
                      <div className="flex items-center justify-between gap-2 mt-4">
                        <Button variant="outline" className="w-full">
                          <Upload className="mr-2 h-4 w-4" />
                          Upload ECG
                        </Button>
                        <Button className="w-full">
                          <Search className="mr-2 h-4 w-4" />
                          Browse
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Chest X-Ray Analysis */}
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Imaging Analysis</CardTitle>
                      <Stethoscope className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <CardDescription>Medical imaging AI interpretation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        AI analysis of X-rays, CT scans and other medical images with anomaly detection and reporting.
                      </p>
                      <div className="flex items-center justify-between gap-2 mt-4">
                        <Button variant="outline" className="w-full">
                          <Upload className="mr-2 h-4 w-4" />
                          Upload Image
                        </Button>
                        <Button className="w-full">
                          <Search className="mr-2 h-4 w-4" />
                          Browse
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Medication Interaction Tool */}
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Medication Checker</CardTitle>
                      <Pill className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <CardDescription>Drug interaction and compatibility analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        Check medication interactions, side effects, and dosage recommendations based on patient data.
                      </p>
                      <div className="flex items-center justify-between gap-2 mt-4">
                        <Button variant="outline" className="w-full">
                          <ClipboardCheck className="mr-2 h-4 w-4" />
                          Check Medications
                        </Button>
                        <Button className="w-full">
                          <Plus className="mr-2 h-4 w-4" />
                          Add Medications
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Differential Diagnosis Tool */}
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Differential Diagnosis</CardTitle>
                      <Brain className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <CardDescription>AI-assisted differential diagnosis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        Get AI-generated differential diagnoses based on symptoms, lab results, and patient history.
                      </p>
                      <div className="flex items-center justify-between gap-2 mt-4">
                        <Button variant="outline" className="w-full">
                          <Search className="mr-2 h-4 w-4" />
                          Input Symptoms
                        </Button>
                        <Button className="w-full">
                          <Brain className="mr-2 h-4 w-4" />
                          Analyze
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Risk Calculator */}
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Risk Calculator</CardTitle>
                      <PieChart className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <CardDescription>Disease risk assessment and scoring</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        Calculate disease risk scores (CVD, diabetes, stroke) based on patient metrics and history.
                      </p>
                      <div className="flex items-center justify-between gap-2 mt-4">
                        <Button variant="outline" className="w-full">
                          <Activity className="mr-2 h-4 w-4" />
                          Cardiovascular
                        </Button>
                        <Button className="w-full">
                          <Plus className="mr-2 h-4 w-4" />
                          More Calculators
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Diagnostic Results</CardTitle>
                  <CardDescription>
                    Recently analyzed diagnostic data and results
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px] pr-4">
                    <div className="space-y-4">
                      {/* Recent diagnostic item */}
                      <div className="flex items-center justify-between border rounded-md p-3">
                        <div className="flex items-center gap-3">
                          <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
                            <Microscope className="h-5 w-5 text-blue-500" />
                          </div>
                          <div>
                            <div className="font-medium">Complete Blood Count</div>
                            <div className="text-sm text-muted-foreground">Patient: Mohammed Al-Ahmadi • April 10, 2025</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-green-500">Normal</Badge>
                          <Button variant="ghost" size="sm">View</Button>
                        </div>
                      </div>

                      {/* Recent diagnostic item */}
                      <div className="flex items-center justify-between border rounded-md p-3">
                        <div className="flex items-center gap-3">
                          <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded-full">
                            <Stethoscope className="h-5 w-5 text-purple-500" />
                          </div>
                          <div>
                            <div className="font-medium">ECG Analysis</div>
                            <div className="text-sm text-muted-foreground">Patient: Fatima Al-Zahrani • April 9, 2025</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-yellow-500">Review</Badge>
                          <Button variant="ghost" size="sm">View</Button>
                        </div>
                      </div>

                      {/* Recent diagnostic item */}
                      <div className="flex items-center justify-between border rounded-md p-3">
                        <div className="flex items-center gap-3">
                          <div className="bg-amber-100 dark:bg-amber-900 p-2 rounded-full">
                            <Stethoscope className="h-5 w-5 text-amber-500" />
                          </div>
                          <div>
                            <div className="font-medium">Chest X-Ray</div>
                            <div className="text-sm text-muted-foreground">Patient: Ahmad Qureshi • April 8, 2025</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-green-500">Normal</Badge>
                          <Button variant="ghost" size="sm">View</Button>
                        </div>
                      </div>

                      {/* Recent diagnostic item */}
                      <div className="flex items-center justify-between border rounded-md p-3">
                        <div className="flex items-center gap-3">
                          <div className="bg-red-100 dark:bg-red-900 p-2 rounded-full">
                            <Pill className="h-5 w-5 text-red-500" />
                          </div>
                          <div>
                            <div className="font-medium">Medication Interaction Check</div>
                            <div className="text-sm text-muted-foreground">Patient: Khalid Al-Dosari • April 5, 2025</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-red-500">Interaction</Badge>
                          <Button variant="ghost" size="sm">View</Button>
                        </div>
                      </div>

                      {/* Recent diagnostic item */}
                      <div className="flex items-center justify-between border rounded-md p-3">
                        <div className="flex items-center gap-3">
                          <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full">
                            <Brain className="h-5 w-5 text-green-500" />
                          </div>
                          <div>
                            <div className="font-medium">Differential Diagnosis</div>
                            <div className="text-sm text-muted-foreground">Patient: Nora Al-Subaie • April 4, 2025</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-blue-500">Complete</Badge>
                          <Button variant="ghost" size="sm">View</Button>
                        </div>
                      </div>
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Symptom Checker Tab */}
            <TabsContent value="symptom-checker" className="mt-6">
              <SymptomChecker />
            </TabsContent>

            {/* AI Support Tab */}
            <TabsContent value="ai-support" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>AI Clinical Decision Support</CardTitle>
                  <CardDescription>
                    AI-powered assistance for clinical decision making
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p>
                      The AI Clinical Decision Support system provides evidence-based recommendations and treatment suggestions based on patient data, medical history, symptoms, and the latest clinical guidelines.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">Treatment Protocols</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Access AI-generated treatment protocols and care pathways based on current clinical guidelines.
                          </p>
                          <Button variant="outline" className="mt-2 w-full">
                            <Search className="mr-2 h-4 w-4" />
                            Browse Protocols
                          </Button>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">Evidence Lookup</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Search the latest medical research and evidence-based practices for specific conditions.
                          </p>
                          <Button variant="outline" className="mt-2 w-full">
                            <FileText className="mr-2 h-4 w-4" />
                            Search Evidence
                          </Button>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">Decision Trees</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Interactive clinical decision trees for diagnosis and treatment planning.
                          </p>
                          <Button variant="outline" className="mt-2 w-full">
                            <Activity className="mr-2 h-4 w-4" />
                            View Decision Trees
                          </Button>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">Clinical Guidelines</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Access up-to-date clinical practice guidelines from major medical organizations.
                          </p>
                          <Button variant="outline" className="mt-2 w-full">
                            <ClipboardCheck className="mr-2 h-4 w-4" />
                            View Guidelines
                          </Button>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="rounded-md border p-4">
                      <h3 className="text-lg font-medium mb-2">AI Consultation Assistant</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Get real-time AI assistance during patient consultations. The AI can suggest questions, possible diagnoses, and recommend tests based on the conversation.
                      </p>
                      <Button className="w-full">Start AI Consultation Assistant</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Clinical Decision Support Alerts</CardTitle>
                  <CardDescription>Recent AI-generated clinical alerts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 rounded-md border p-4 bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-800">
                      <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-amber-700 dark:text-amber-400">Medication Interaction Detected</h4>
                        <p className="text-sm text-amber-600 dark:text-amber-300 mt-1">
                          Potential interaction between Lisinopril and Spironolactone for patient Khalid Al-Dosari. Consider monitoring potassium levels.
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <Button variant="outline" size="sm" className="h-7 px-2">
                            View Details
                          </Button>
                          <Button variant="outline" size="sm" className="h-7 px-2">
                            <Check className="h-3 w-3" />
                            Acknowledge
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 rounded-md border p-4 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
                      <Info className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-blue-700 dark:text-blue-400">Guideline Update</h4>
                        <p className="text-sm text-blue-600 dark:text-blue-300 mt-1">
                          New diabetes management guidelines published by the International Diabetes Federation. Updated recommendations for HbA1c targets.
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <Button variant="outline" size="sm" className="h-7 px-2">
                            View Update
                          </Button>
                          <Button variant="outline" size="sm" className="h-7 px-2">
                            <Check className="h-3 w-3" />
                            Acknowledge
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 rounded-md border p-4">
                      <FileText className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Screening Reminder</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Routine cholesterol screening recommended for patient Mohammed Al-Ahmadi based on age and risk factors.
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <Button variant="outline" size="sm" className="h-7 px-2">
                            Schedule Test
                          </Button>
                          <Button variant="outline" size="sm" className="h-7 px-2">
                            <Check className="h-3 w-3" />
                            Acknowledge
                          </Button>
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
