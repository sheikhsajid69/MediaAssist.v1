import { Metadata } from "next"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Search,
  FileText,
  Copy,
  Check,
  ClipboardCheck,
  FileQuestion,
  BookOpen
} from "lucide-react"

export const metadata: Metadata = {
  title: "Medical Coding | Intelligent Medical Assistant",
  description: "Automated medical coding system for ICD-10 codes",
}

export default function CodingPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-4 md:p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Medical Coding</h1>
              <p className="text-muted-foreground">
                Automatic ICD-10 code detection from medical transcriptions
              </p>
            </div>
            <div>
              <Button>
                <FileText className="mr-2 h-4 w-4" />
                Export Coding Report
              </Button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Medical Transcription</CardTitle>
                <CardDescription>
                  Patient consultation from 25 March 2025, 10:30 AM
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-4 rounded-md space-y-2 text-sm">
                  <p><span className="font-semibold">Doctor:</span> Good morning, Mr. Mohammed. How are you feeling today?</p>
                  <p><span className="font-semibold">Patient:</span> I've been experiencing increased fatigue for the past 3 weeks, doctor. And my vision gets blurry, especially in the afternoons.</p>
                  <p><span className="font-semibold">Doctor:</span> I see. Have you been checking your blood glucose levels at home?</p>
                  <p><span className="font-semibold">Patient:</span> Yes, they've been higher than usual, between 180 and 240.</p>
                  <p><span className="font-semibold">Doctor:</span> And you've been taking your Metformin regularly?</p>
                  <p><span className="font-semibold">Patient:</span> Yes, 1000mg twice daily as prescribed.</p>
                  <p><span className="font-semibold">Doctor:</span> Have you been experiencing any headaches?</p>
                  <p><span className="font-semibold">Patient:</span> Actually, yes. They've gotten worse this past week, especially in the mornings.</p>
                  <p><span className="font-semibold">Doctor:</span> Any nausea or vomiting with these headaches?</p>
                  <p><span className="font-semibold">Patient:</span> No, just the headache.</p>
                  <p><span className="font-semibold">Doctor:</span> Let's check your blood pressure. [Pause] It's 145/92, which is elevated. Given your history of type 2 diabetes for the past 10 years, the blurry vision, and elevated blood glucose, we should adjust your management plan.</p>
                </div>

                <div className="mt-6">
                  <h3 className="font-semibold mb-2 text-lg">AI-Generated Medical Summary</h3>
                  <div className="space-y-2 p-4 border rounded-md">
                    <p><span className="font-semibold">Patient Demographics:</span> Male, 58 years old</p>
                    <p><span className="font-semibold">Chief Complaints:</span> Increased fatigue (3 weeks), blurred vision (worse in afternoons), headaches (1 week, worse in mornings)</p>
                    <p><span className="font-semibold">Negative Symptoms:</span> No nausea or vomiting</p>
                    <p><span className="font-semibold">Vital Signs:</span> BP 145/92 mmHg (elevated)</p>
                    <p><span className="font-semibold">Lab Values:</span> Home blood glucose 180-240 mg/dL</p>
                    <p><span className="font-semibold">Current Medications:</span> Metformin 1000mg BID</p>
                    <p><span className="font-semibold">Medical History:</span> Type 2 diabetes mellitus (10-year history)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>ICD-10 Codes</CardTitle>
                <CardDescription>
                  AI-detected codes from the transcription
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="font-medium">Primary Diagnoses</div>
                    <div className="space-y-2">
                      <CodeCard
                        code="E11.9"
                        description="Type 2 diabetes mellitus without complications"
                        confidence={98}
                      />
                      <CodeCard
                        code="I10"
                        description="Essential (primary) hypertension"
                        confidence={96}
                      />
                      <CodeCard
                        code="E11.36"
                        description="Type 2 diabetes mellitus with diabetic retinopathy"
                        confidence={87}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="font-medium">Secondary Diagnoses</div>
                    <div className="space-y-2">
                      <CodeCard
                        code="R53.83"
                        description="Other fatigue"
                        confidence={92}
                      />
                      <CodeCard
                        code="R51"
                        description="Headache"
                        confidence={85}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="font-medium">Suggested Codes</div>
                    <div className="space-y-2">
                      <CodeCard
                        code="E11.40"
                        description="Type 2 diabetes with diabetic neuropathy, unspecified"
                        confidence={65}
                        isSuggestion
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button className="w-full">
                      <ClipboardCheck className="mr-2 h-4 w-4" />
                      Approve & Send to EHR
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>ICD-10 Code Search</CardTitle>
              <CardDescription>
                Search for additional codes to add to the patient record
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 mb-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search by code or description..."
                    className="pl-8"
                  />
                </div>
                <Button>Search</Button>
              </div>

              <Tabs defaultValue="recent">
                <TabsList className="mb-4">
                  <TabsTrigger value="recent">Recent Codes</TabsTrigger>
                  <TabsTrigger value="common">Common Diabetic Codes</TabsTrigger>
                  <TabsTrigger value="all">All Categories</TabsTrigger>
                </TabsList>
                <TabsContent value="recent">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {[
                      { code: "J45.909", desc: "Asthma, unspecified" },
                      { code: "M54.5", desc: "Low back pain" },
                      { code: "G43.909", desc: "Migraine, unspecified" },
                      { code: "K29.60", desc: "Gastritis, unspecified" },
                      { code: "F41.1", desc: "Generalized anxiety disorder" },
                      { code: "Z79.4", desc: "Long term (current) use of insulin" }
                    ].map((item) => (
                      <Button key={item.code} variant="outline" className="justify-start h-auto py-2">
                        <div className="text-left">
                          <div className="font-semibold">{item.code}</div>
                          <div className="text-xs text-muted-foreground truncate">{item.desc}</div>
                        </div>
                      </Button>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="common">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {[
                      { code: "E11.9", desc: "Type 2 diabetes mellitus without complications" },
                      { code: "E11.36", desc: "Type 2 diabetes with diabetic retinopathy" },
                      { code: "E11.40", desc: "Type 2 diabetes with diabetic neuropathy" },
                      { code: "E11.51", desc: "Type 2 diabetes with diabetic peripheral angiopathy" },
                      { code: "E11.65", desc: "Type 2 diabetes with hyperglycemia" },
                      { code: "E11.21", desc: "Type 2 diabetes with diabetic nephropathy" }
                    ].map((item) => (
                      <Button key={item.code} variant="outline" className="justify-start h-auto py-2">
                        <div className="text-left">
                          <div className="font-semibold">{item.code}</div>
                          <div className="text-xs text-muted-foreground truncate">{item.desc}</div>
                        </div>
                      </Button>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="all">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <Button variant="outline" className="justify-start h-auto py-3">
                      <BookOpen className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">Endocrine System (E00-E89)</div>
                        <div className="text-xs text-muted-foreground">Diabetes, thyroid disorders, metabolic disorders</div>
                      </div>
                    </Button>
                    <Button variant="outline" className="justify-start h-auto py-3">
                      <BookOpen className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">Circulatory System (I00-I99)</div>
                        <div className="text-xs text-muted-foreground">Hypertension, heart disease, vascular disorders</div>
                      </div>
                    </Button>
                    <Button variant="outline" className="justify-start h-auto py-3">
                      <BookOpen className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">Respiratory System (J00-J99)</div>
                        <div className="text-xs text-muted-foreground">COPD, asthma, pneumonia, respiratory infections</div>
                      </div>
                    </Button>
                    <Button variant="outline" className="justify-start h-auto py-3">
                      <BookOpen className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">Digestive System (K00-K95)</div>
                        <div className="text-xs text-muted-foreground">GERD, ulcers, liver disorders, intestinal issues</div>
                      </div>
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}

interface CodeCardProps {
  code: string
  description: string
  confidence: number
  isSuggestion?: boolean
}

function CodeCard({ code, description, confidence, isSuggestion }: CodeCardProps) {
  return (
    <div className="border rounded-md p-3 relative">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center">
            <Badge variant={isSuggestion ? "outline" : "default"} className="mr-2">
              {code}
            </Badge>
            {isSuggestion && (
              <Badge variant="outline" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-500">
                Suggested
              </Badge>
            )}
          </div>
          <div className="text-sm mt-1">{description}</div>
        </div>
        <div className="flex items-center">
          {confidence >= 90 ? (
            <div className="text-xs flex items-center text-green-600 dark:text-green-500">
              <Check className="h-3 w-3 mr-1" />
              {confidence}%
            </div>
          ) : confidence >= 75 ? (
            <div className="text-xs text-blue-600 dark:text-blue-500">{confidence}%</div>
          ) : (
            <div className="text-xs flex items-center text-yellow-600 dark:text-yellow-500">
              <FileQuestion className="h-3 w-3 mr-1" />
              {confidence}%
            </div>
          )}
        </div>
      </div>
      <div className="absolute top-2 right-2">
        <Button variant="ghost" size="icon" className="h-6 w-6">
          <Copy className="h-3 w-3" />
        </Button>
      </div>
    </div>
  )
}
