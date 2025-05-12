import { Metadata } from "next"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BarChart, LineChart, PieChart } from "@/components/ui/charts" // Placeholder for chart components
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Brain,
  Lightbulb,
  Microscope,
  FileText,
  Search,
  Calendar,
  Download,
  Activity,
  TrendingUp,
  Filter,
  BarChart as BarChartIcon,
  PieChart as PieChartIcon,
  LineChart as LineChartIcon,
  ArrowRight
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI Insights | Intelligent Medical Assistant",
  description: "AI-powered insights from medical data",
}

export default function InsightsPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-4 md:p-6 space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">AI Insights</h1>
              <p className="text-muted-foreground">
                Machine learning analysis and medical data insights
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline">
                <Calendar className="mr-2 h-4 w-4" />
                Last 30 Days
              </Button>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <Button>
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Recent AI Activities</CardTitle>
                <CardDescription>AI-powered analysis and insights generated</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mt-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                        <Brain className="h-4 w-4 text-purple-500" />
                      </div>
                      <div>
                        <div className="font-medium">Diagnoses Suggestions</div>
                        <div className="text-sm text-muted-foreground">Last 30 days</div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold">347</div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                        <Microscope className="h-4 w-4 text-blue-500" />
                      </div>
                      <div>
                        <div className="font-medium">Lab Result Analysis</div>
                        <div className="text-sm text-muted-foreground">Last 30 days</div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold">215</div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                        <FileText className="h-4 w-4 text-green-500" />
                      </div>
                      <div>
                        <div className="font-medium">Medical Coding</div>
                        <div className="text-sm text-muted-foreground">Last 30 days</div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold">628</div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center">
                        <Activity className="h-4 w-4 text-amber-500" />
                      </div>
                      <div>
                        <div className="font-medium">Health Anomalies</div>
                        <div className="text-sm text-muted-foreground">Last 30 days</div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold">76</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">AI Performance Metrics</CardTitle>
                    <CardDescription>Accuracy and efficiency improvements</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <BarChartIcon className="h-4 w-4 mr-1" />
                      Bar
                    </Button>
                    <Button variant="outline" size="sm">
                      <LineChartIcon className="h-4 w-4 mr-1" />
                      Line
                    </Button>
                    <Button variant="outline" size="sm">
                      <PieChartIcon className="h-4 w-4 mr-1" />
                      Pie
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted rounded-md">
                  <div className="text-center text-muted-foreground">
                    Performance metrics visualization would appear here
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="clinical-insights">
            <TabsList className="grid w-full grid-cols-3 lg:w-auto">
              <TabsTrigger value="clinical-insights">Clinical Insights</TabsTrigger>
              <TabsTrigger value="population-health">Population Health</TabsTrigger>
              <TabsTrigger value="research">Research Findings</TabsTrigger>
            </TabsList>

            <TabsContent value="clinical-insights" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Clinical AI Insights</CardTitle>
                  <CardDescription>
                    AI-generated insights from clinical data
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 border rounded-lg p-4">
                      <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mt-1 flex-shrink-0">
                        <Brain className="h-5 w-5 text-purple-500" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">Treatment Effectiveness Pattern</h3>
                        <p className="text-muted-foreground">
                          AI analysis has identified that patients with type 2 diabetes and hypertension show 24% better glycemic control when prescribed the combination of metformin and SGLT2 inhibitors compared to metformin alone.
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Badge variant="outline">Pattern Analysis</Badge>
                            <Badge variant="outline">Treatment Efficacy</Badge>
                          </div>
                          <Button variant="outline" size="sm" className="gap-1">
                            View Details <ArrowRight className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 border rounded-lg p-4">
                      <div className="h-10 w-10 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center mt-1 flex-shrink-0">
                        <Lightbulb className="h-5 w-5 text-amber-500" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">Medication Adherence Insight</h3>
                        <p className="text-muted-foreground">
                          Patients who receive text message reminders for medication show an average 32% increase in adherence rate, particularly for chronic conditions like hypertension and diabetes.
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Badge variant="outline">Adherence</Badge>
                            <Badge variant="outline">Digital Health</Badge>
                          </div>
                          <Button variant="outline" size="sm" className="gap-1">
                            View Details <ArrowRight className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 border rounded-lg p-4">
                      <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mt-1 flex-shrink-0">
                        <TrendingUp className="h-5 w-5 text-blue-500" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">Diagnostic Pattern Detection</h3>
                        <p className="text-muted-foreground">
                          AI analysis of laboratory results indicates that patients with specific patterns of elevated liver enzymes (ALT > 50, AST > 45) have a 78% higher likelihood of developing metabolic syndrome within 2 years.
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Badge variant="outline">Predictive Analytics</Badge>
                            <Badge variant="outline">Lab Correlation</Badge>
                          </div>
                          <Button variant="outline" size="sm" className="gap-1">
                            View Details <ArrowRight className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="population-health" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Population Health Insights</CardTitle>
                  <CardDescription>
                    AI-generated insights from population health data
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 border rounded-lg p-4">
                      <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mt-1 flex-shrink-0">
                        <Activity className="h-5 w-5 text-green-500" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">Chronic Disease Distribution</h3>
                        <p className="text-muted-foreground">
                          Analysis of patient population shows a 14% increase in chronic respiratory conditions in the 30-45 age demographic compared to previous years, primarily in urban areas with lower air quality indices.
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Badge variant="outline">Epidemiology</Badge>
                            <Badge variant="outline">Environmental</Badge>
                          </div>
                          <Button variant="outline" size="sm" className="gap-1">
                            View Details <ArrowRight className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 border rounded-lg p-4">
                      <div className="h-10 w-10 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center mt-1 flex-shrink-0">
                        <TrendingUp className="h-5 w-5 text-red-500" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">Preventive Care Impact</h3>
                        <p className="text-muted-foreground">
                          Patients who completed recommended preventive screenings had 42% fewer emergency department visits for cardiovascular and diabetes-related complications compared to those who did not complete screenings.
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Badge variant="outline">Preventive Medicine</Badge>
                            <Badge variant="outline">Healthcare Economics</Badge>
                          </div>
                          <Button variant="outline" size="sm" className="gap-1">
                            View Details <ArrowRight className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="research" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Research-Driven AI Findings</CardTitle>
                  <CardDescription>
                    AI-generated research and evidence-based insights
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 border rounded-lg p-4">
                      <div className="h-10 w-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mt-1 flex-shrink-0">
                        <Microscope className="h-5 w-5 text-indigo-500" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">Pharmacogenomic Correlation</h3>
                        <p className="text-muted-foreground">
                          Analysis of patient genetic data and medication response shows that individuals with specific CYP2D6 variants have a 35% reduction in efficacy for certain antidepressant medications.
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Badge variant="outline">Pharmacogenomics</Badge>
                            <Badge variant="outline">Precision Medicine</Badge>
                          </div>
                          <Button variant="outline" size="sm" className="gap-1">
                            View Research <ArrowRight className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 border rounded-lg p-4">
                      <div className="h-10 w-10 rounded-full bg-cyan-100 dark:bg-cyan-900 flex items-center justify-center mt-1 flex-shrink-0">
                        <FileText className="h-5 w-5 text-cyan-500" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">Imaging Analysis Breakthrough</h3>
                        <p className="text-muted-foreground">
                          AI-enhanced medical imaging analysis can detect early-stage lung nodules with 92% accuracy compared to 76% with traditional radiologist review, potentially enabling earlier interventions for lung cancer.
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Badge variant="outline">Medical Imaging</Badge>
                            <Badge variant="outline">Early Detection</Badge>
                          </div>
                          <Button variant="outline" size="sm" className="gap-1">
                            View Research <ArrowRight className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <Card>
            <CardHeader>
              <CardTitle>AI-Generated Clinical Recommendations</CardTitle>
              <CardDescription>
                Smart recommendations based on clinical data analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[250px] pr-4">
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-start gap-3">
                      <Brain className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-medium">Medication Protocol Update</div>
                        <p className="text-sm text-muted-foreground mt-1">
                          Based on recent research and patient outcomes data, consider updating statin prescription protocols for diabetic patients to include more frequent liver function monitoring.
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="outline">Protocol Update</Badge>
                          <Badge className="bg-green-500">High Confidence</Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-start gap-3">
                      <Lightbulb className="h-5 w-5 text-amber-500 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-medium">Screening Recommendation</div>
                        <p className="text-sm text-muted-foreground mt-1">
                          For patients over 50 with family history of colorectal cancer, increase screening frequency to every 3 years instead of the standard 5 years based on new risk analysis.
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="outline">Preventive Care</Badge>
                          <Badge className="bg-green-500">High Confidence</Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-start gap-3">
                      <Activity className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-medium">Treatment Effectiveness</div>
                        <p className="text-sm text-muted-foreground mt-1">
                          For hypertension patients not responding to ACE inhibitors, switching to ARBs shows 28% better blood pressure control compared to increasing ACE inhibitor dosage.
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="outline">Treatment Efficacy</Badge>
                          <Badge className="bg-yellow-500">Medium Confidence</Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-start gap-3">
                      <FileText className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-medium">Documentation Improvement</div>
                        <p className="text-sm text-muted-foreground mt-1">
                          AI analysis of clinical documentation shows that including specific symptom duration in notes leads to 35% more accurate ICD-10 coding and improved reimbursement rates.
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="outline">Documentation</Badge>
                          <Badge className="bg-green-500">High Confidence</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
