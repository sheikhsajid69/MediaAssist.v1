import { Metadata } from "next"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ArrowUpRight,
  Calendar,
  Download,
  HeartPulse,
  LineChart,
  Stethoscope,
  Brain,
  Activity,
  LucideIcon,
  BarChart,
  TrendingUp,
  Filter,
  Share2
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { HealthMetricCard } from "@/components/analytics/health-metric-card"
import { HealthTrendChart } from "@/components/analytics/health-trend-chart"
import { AnomalyList } from "@/components/analytics/anomaly-list"
import { DiagnosticDistributionChart } from "@/components/analytics/diagnostic-distribution-chart"

export const metadata: Metadata = {
  title: "Health Analytics | Intelligent Medical Assistant",
  description: "AI-powered health analytics and insights",
}

export default function AnalyticsPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-4 md:p-6 space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Health Analytics</h1>
              <p className="text-muted-foreground">
                AI-powered insights from patient data and medical records
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline">
                <Calendar className="mr-2 h-4 w-4" />
                Last 30 Days
              </Button>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
              <Button variant="outline">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
              <Button>
                <Download className="mr-2 h-4 w-4" />
                Export Report
              </Button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <HealthMetricCard
              title="Patient Population"
              value="1,248"
              trend="+12.5%"
              trendType="increase"
              description="Total patients analyzed"
              icon={<Stethoscope className="h-4 w-4 text-blue-500" />}
            />
            <HealthMetricCard
              title="AI Diagnoses"
              value="5,427"
              trend="+18.2%"
              trendType="increase"
              description="Auto-suggested diagnoses"
              icon={<Brain className="h-4 w-4 text-purple-500" />}
            />
            <HealthMetricCard
              title="Health Anomalies"
              value="847"
              trend="+7.4%"
              trendType="increase"
              description="Detected across all patients"
              icon={<Activity className="h-4 w-4 text-red-500" />}
            />
            <HealthMetricCard
              title="Avg. Health Score"
              value="78.4"
              trend="+3.2%"
              trendType="increase"
              description="Out of 100"
              icon={<HeartPulse className="h-4 w-4 text-green-500" />}
            />
          </div>

          <div className="grid gap-4 md:grid-cols-7">
            <Card className="md:col-span-4">
              <CardHeader>
                <CardTitle>Patient Health Trends</CardTitle>
                <CardDescription>
                  Aggregate metrics for patient population
                </CardDescription>
              </CardHeader>
              <CardContent>
                <HealthTrendChart />
                <div className="mt-4 flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-blue-500 mr-1" />
                    <span>Blood Glucose</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-red-500 mr-1" />
                    <span>Blood Pressure</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-green-500 mr-1" />
                    <span>Cholesterol</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-purple-500 mr-1" />
                    <span>Heart Rate</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="md:col-span-3">
              <CardHeader>
                <CardTitle>Health Anomalies</CardTitle>
                <CardDescription>
                  AI-detected anomalies in patient data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AnomalyList />
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="diagnoses">
            <TabsList className="mb-4 w-full md:w-auto">
              <TabsTrigger value="diagnoses">Diagnosis Distribution</TabsTrigger>
              <TabsTrigger value="demographics">Demographics</TabsTrigger>
              <TabsTrigger value="medications">Medication Analytics</TabsTrigger>
            </TabsList>
            <TabsContent value="diagnoses">
              <Card>
                <CardHeader>
                  <CardTitle>Diagnosis Distribution</CardTitle>
                  <CardDescription>
                    Most common diagnoses across patient population
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <DiagnosticDistributionChart />
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">
                          Diabetes Prevalence
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">23.4%</div>
                        <p className="text-xs text-muted-foreground">
                          Higher than national average (18.2%)
                        </p>
                        <div className="mt-2 flex items-center text-xs text-red-500">
                          <ArrowUpRight className="h-3 w-3 mr-1" />
                          <span>+5.2% from last quarter</span>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">
                          Hypertension
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">31.7%</div>
                        <p className="text-xs text-muted-foreground">
                          Slightly above national average (30.1%)
                        </p>
                        <div className="mt-2 flex items-center text-xs text-red-500">
                          <ArrowUpRight className="h-3 w-3 mr-1" />
                          <span>+1.6% from last quarter</span>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">
                          Respiratory Conditions
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">18.9%</div>
                        <p className="text-xs text-muted-foreground">
                          Lower than national average (22.3%)
                        </p>
                        <div className="mt-2 flex items-center text-xs text-green-500">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          <span>-3.4% from last quarter</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="demographics">
              <Card>
                <CardHeader>
                  <CardTitle>Patient Demographics</CardTitle>
                  <CardDescription>
                    Population distribution by age, gender, and location
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">
                          Age Distribution
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs">Under 18</span>
                          <span className="text-xs font-medium">12%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden mb-2">
                          <div className="bg-blue-500 h-full rounded-full" style={{ width: "12%" }}></div>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs">18-34</span>
                          <span className="text-xs font-medium">23%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden mb-2">
                          <div className="bg-blue-500 h-full rounded-full" style={{ width: "23%" }}></div>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs">35-54</span>
                          <span className="text-xs font-medium">35%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden mb-2">
                          <div className="bg-blue-500 h-full rounded-full" style={{ width: "35%" }}></div>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs">55-74</span>
                          <span className="text-xs font-medium">24%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden mb-2">
                          <div className="bg-blue-500 h-full rounded-full" style={{ width: "24%" }}></div>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs">75+</span>
                          <span className="text-xs font-medium">6%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden mb-2">
                          <div className="bg-blue-500 h-full rounded-full" style={{ width: "6%" }}></div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">
                          Gender Distribution
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-center">
                          <div className="space-y-2">
                            <div className="text-base font-bold">Male</div>
                            <div className="text-3xl font-bold">47%</div>
                            <div className="text-xs text-muted-foreground">586 patients</div>
                          </div>
                          <div className="h-20 w-[1px] bg-border mx-2"></div>
                          <div className="space-y-2">
                            <div className="text-base font-bold">Female</div>
                            <div className="text-3xl font-bold">53%</div>
                            <div className="text-xs text-muted-foreground">662 patients</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">
                          Region Distribution
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                              <span className="text-xs">Riyadh Region</span>
                            </div>
                            <span className="text-xs font-medium">42%</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="h-3 w-3 rounded-full bg-blue-500 mr-2"></div>
                              <span className="text-xs">Makkah Region</span>
                            </div>
                            <span className="text-xs font-medium">28%</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="h-3 w-3 rounded-full bg-purple-500 mr-2"></div>
                              <span className="text-xs">Eastern Province</span>
                            </div>
                            <span className="text-xs font-medium">15%</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                              <span className="text-xs">Madinah Region</span>
                            </div>
                            <span className="text-xs font-medium">8%</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                              <span className="text-xs">Other Regions</span>
                            </div>
                            <span className="text-xs font-medium">7%</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="medications">
              <Card>
                <CardHeader>
                  <CardTitle>Medication Analytics</CardTitle>
                  <CardDescription>
                    Medication usage patterns and effectiveness
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">
                          Most Prescribed
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="space-y-2">
                          <li className="flex items-center justify-between">
                            <span className="text-xs">1. Metformin</span>
                            <Badge>18.4%</Badge>
                          </li>
                          <li className="flex items-center justify-between">
                            <span className="text-xs">2. Lisinopril</span>
                            <Badge>14.2%</Badge>
                          </li>
                          <li className="flex items-center justify-between">
                            <span className="text-xs">3. Atorvastatin</span>
                            <Badge>12.7%</Badge>
                          </li>
                          <li className="flex items-center justify-between">
                            <span className="text-xs">4. Levothyroxine</span>
                            <Badge>9.5%</Badge>
                          </li>
                          <li className="flex items-center justify-between">
                            <span className="text-xs">5. Omeprazole</span>
                            <Badge>8.3%</Badge>
                          </li>
                        </ol>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">
                          Medication Adherence
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                            <span className="text-blue-700 dark:text-blue-300 text-lg font-bold">
                              76%
                            </span>
                          </div>
                          <div>
                            <div className="text-sm font-medium">Average adherence</div>
                            <div className="text-xs text-muted-foreground">Across all patients</div>
                          </div>
                        </div>
                        <div className="mt-2 space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs">Diabetes medications</span>
                            <span className="text-xs font-medium">82%</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs">Hypertension medications</span>
                            <span className="text-xs font-medium">79%</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs">Cholesterol medications</span>
                            <span className="text-xs font-medium">74%</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">
                          Medication Effectiveness
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs">Highly Effective</span>
                            <Badge className="bg-green-500">48%</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs">Moderately Effective</span>
                            <Badge className="bg-yellow-500">32%</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs">Minimally Effective</span>
                            <Badge className="bg-orange-500">14%</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs">Not Effective</span>
                            <Badge className="bg-red-500">6%</Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">
                          Side Effects Reported
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">623</div>
                        <p className="text-xs text-muted-foreground mb-2">
                          Total reported side effects
                        </p>
                        <div className="space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-xs">Mild</span>
                            <span className="text-xs font-medium">72%</span>
                          </div>
                          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                            <div className="bg-green-500 h-full rounded-full" style={{ width: "72%" }}></div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs">Moderate</span>
                            <span className="text-xs font-medium">21%</span>
                          </div>
                          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                            <div className="bg-yellow-500 h-full rounded-full" style={{ width: "21%" }}></div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs">Severe</span>
                            <span className="text-xs font-medium">7%</span>
                          </div>
                          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                            <div className="bg-red-500 h-full rounded-full" style={{ width: "7%" }}></div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="grid gap-4 md:grid-cols-3">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>AI Health Predictions</CardTitle>
                <CardDescription>
                  Machine learning projections based on current data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center mb-1">
                          <Badge variant="outline" className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                            Population Health
                          </Badge>
                          <Badge className="ml-2 bg-amber-500">Medium Confidence</Badge>
                        </div>
                        <h4 className="font-medium">Diabetes Prevalence Projection</h4>
                        <p className="text-sm text-muted-foreground">
                          Based on current trends and demographic factors, diabetes prevalence is projected to
                          increase by 4.2% in the next 12 months without intervention.
                        </p>
                      </div>
                      <LineChart className="h-10 w-10 text-blue-500" />
                    </div>
                    <div className="mt-3">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center mb-1">
                          <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                            Intervention Impact
                          </Badge>
                          <Badge className="ml-2 bg-green-500">High Confidence</Badge>
                        </div>
                        <h4 className="font-medium">Preventive Screening Effectiveness</h4>
                        <p className="text-sm text-muted-foreground">
                          Increasing preventive screenings by 25% could reduce emergency admissions by an
                          estimated 18% within 6 months, particularly for cardiovascular conditions.
                        </p>
                      </div>
                      <BarChart className="h-10 w-10 text-green-500" />
                    </div>
                    <div className="mt-3">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center mb-1">
                          <Badge variant="outline" className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400">
                            Patient Outcomes
                          </Badge>
                          <Badge className="ml-2 bg-green-500">High Confidence</Badge>
                        </div>
                        <h4 className="font-medium">Medication Adherence Impact</h4>
                        <p className="text-sm text-muted-foreground">
                          Improving medication adherence by 15% through automated reminders could reduce
                          hospital readmissions by approximately 23% for chronic condition patients.
                        </p>
                      </div>
                      <TrendingUp className="h-10 w-10 text-purple-500" />
                    </div>
                    <div className="mt-3">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Recent Health Insights</CardTitle>
                <CardDescription>
                  AI-generated insights from medical data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Rising Hypertension Cases",
                      description: "18% increase in newly diagnosed hypertension cases in the 30-45 age group compared to previous quarter",
                      date: "2 days ago",
                      avatar: "HA"
                    },
                    {
                      title: "Medication Response Pattern",
                      description: "Patients on combined metformin and SGLT2 inhibitors showing 24% better glycemic control",
                      date: "3 days ago",
                      avatar: "HA"
                    },
                    {
                      title: "Seasonal Health Trend",
                      description: "42% increase in respiratory conditions correlating with recent air quality changes",
                      date: "5 days ago",
                      avatar: "HA"
                    },
                    {
                      title: "Treatment Efficacy Alert",
                      description: "Statistically significant improvement in patients switched from ACE inhibitors to ARBs for blood pressure management",
                      date: "1 week ago",
                      avatar: "HA"
                    }
                  ].map((insight, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <Avatar>
                        <AvatarFallback className="bg-primary text-primary-foreground">{insight.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <h4 className="text-sm font-medium leading-none">{insight.title}</h4>
                        <p className="text-xs text-muted-foreground">{insight.description}</p>
                        <p className="text-xs text-muted-foreground">{insight.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
