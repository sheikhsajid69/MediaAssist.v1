import { Metadata } from "next"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChatInterface } from "@/components/dashboard/chat-interface"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  Search,
  Mic,
  FileText,
  Upload,
  Languages,
  BrainCircuit
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI Transcription | Intelligent Medical Assistant",
  description: "Medical transcription powered by AI",
}

export default function TranscriptionPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-4 md:p-6 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">AI Transcription</h1>
              <p className="text-muted-foreground">
                Convert medical conversations to text with automatic ICD coding
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button>
                <Upload className="mr-2 h-4 w-4" />
                Upload Audio
              </Button>
              <Button variant="default">
                <Mic className="mr-2 h-4 w-4" />
                New Recording
              </Button>
            </div>
          </div>

          <Tabs defaultValue="realtime">
            <TabsList className="grid w-full grid-cols-3 mb-4">
              <TabsTrigger value="realtime">Real-Time Transcription</TabsTrigger>
              <TabsTrigger value="multilingual">Multilingual Translation</TabsTrigger>
              <TabsTrigger value="history">Transcription History</TabsTrigger>
            </TabsList>
            <TabsContent value="realtime" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <ChatInterface />
                </div>
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Transcription Settings</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Language</span>
                          <div className="flex items-center">
                            <Languages className="mr-2 h-4 w-4" />
                            <span className="text-sm">English / Arabic</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Auto ICD Coding</span>
                          <div className="flex items-center">
                            <FileText className="mr-2 h-4 w-4" />
                            <span className="text-sm">Enabled</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">AI Suggestions</span>
                          <div className="flex items-center">
                            <BrainCircuit className="mr-2 h-4 w-4" />
                            <span className="text-sm">Enabled</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Recent ICD Codes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <Badge variant="outline" className="mr-1">E11.9</Badge>
                        <Badge variant="outline" className="mr-1">E11.36</Badge>
                        <Badge variant="outline" className="mr-1">R53.83</Badge>
                        <Badge variant="outline" className="mr-1">R51</Badge>
                        <Badge variant="outline" className="mr-1">I10</Badge>
                        <Badge variant="outline" className="mr-1">J45.909</Badge>
                        <Badge variant="outline" className="mr-1">G43.909</Badge>
                        <Badge variant="outline" className="mr-1">M54.5</Badge>
                        <Badge variant="outline" className="mr-1">K29.60</Badge>
                        <Badge variant="outline" className="mr-1">F41.1</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Today's Schedule</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span className="text-sm">3 appointments today</span>
                        </div>
                        <div className="rounded-md border p-2">
                          <div className="font-medium">Mohammed Al-Ahmadi</div>
                          <div className="text-xs text-muted-foreground">10:30 AM - Follow-up</div>
                        </div>
                        <div className="rounded-md border p-2">
                          <div className="font-medium">Fatima Al-Zahrani</div>
                          <div className="text-xs text-muted-foreground">1:15 PM - New consultation</div>
                        </div>
                        <div className="rounded-md border p-2">
                          <div className="font-medium">Ahmad Qureshi</div>
                          <div className="text-xs text-muted-foreground">3:45 PM - Results review</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="multilingual">
              <Card>
                <CardHeader>
                  <CardTitle>Multilingual Transcription</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Transcribe medical conversations in multiple languages with real-time translation.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Source Language</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="grid grid-cols-2 gap-2">
                            <Button variant="outline" className="justify-start">
                              <svg className="mr-2 h-4 w-4" viewBox="0 0 640 480">
                                <path fill="#ce1126" d="M0 0h640v480H0"/>
                                <path fill="#fff" d="M0 0h640v320H0"/>
                                <path fill="#006847" d="M0 0h640v160H0"/>
                                <path d="M320 240l-42.2 65h-83.6l65-42.2-24.9-76.6L320 212.4l85.7-26.2-24.9 76.6 65 42.2h-83.6z" fill="#fff"/>
                              </svg>
                              Arabic
                            </Button>
                            <Button variant="default" className="justify-start">
                              <svg className="mr-2 h-4 w-4" viewBox="0 0 640 480">
                                <path fill="#012169" d="M0 0h640v480H0z"/>
                                <path fill="#FFF" d="M75 0l244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"/>
                                <path fill="#C8102E" d="M424 281l216 159v40L369 281h55zm-184 20l6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"/>
                                <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z"/>
                                <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z"/>
                              </svg>
                              English
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Target Language</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="grid grid-cols-2 gap-2">
                            <Button variant="outline" className="justify-start">
                              <svg className="mr-2 h-4 w-4" viewBox="0 0 640 480">
                                <path fill="#ce1126" d="M0 0h640v480H0"/>
                                <path fill="#fff" d="M0 0h640v320H0"/>
                                <path fill="#006847" d="M0 0h640v160H0"/>
                                <path d="M320 240l-42.2 65h-83.6l65-42.2-24.9-76.6L320 212.4l85.7-26.2-24.9 76.6 65 42.2h-83.6z" fill="#fff"/>
                              </svg>
                              Arabic
                            </Button>
                            <Button variant="default" className="justify-start">
                              <svg className="mr-2 h-4 w-4" viewBox="0 0 640 480">
                                <path fill="#012169" d="M0 0h640v480H0z"/>
                                <path fill="#FFF" d="M75 0l244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"/>
                                <path fill="#C8102E" d="M424 281l216 159v40L369 281h55zm-184 20l6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"/>
                                <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z"/>
                                <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z"/>
                              </svg>
                              English
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="flex justify-center mt-6">
                    <Button size="lg">
                      <Mic className="mr-2 h-4 w-4" />
                      Start Multilingual Recording
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="history">
              <Card>
                <CardHeader className="flex flex-row items-center">
                  <CardTitle>Transcription History</CardTitle>
                  <div className="ml-auto flex items-center gap-2">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <input
                        type="search"
                        placeholder="Search transcriptions..."
                        className="pl-8 h-9 w-[200px] md:w-[300px] rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm"
                      />
                    </div>
                    <Button variant="outline" size="sm">
                      <Calendar className="mr-2 h-4 w-4" />
                      Filter
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className="rounded-lg border p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-medium">Patient Consultation #{5-i}</div>
                          <Badge variant={i === 0 ? "default" : "outline"}>
                            {i === 0 ? "New" : "Archived"}
                          </Badge>
                        </div>
                        <div className="text-sm text-muted-foreground mb-2">
                          {new Date(Date.now() - i * 86400000).toLocaleDateString()} • {i === 0 ? "Today" : `${i} days ago`}
                        </div>
                        <div className="flex flex-wrap gap-1 mb-2">
                          <Badge variant="outline" className="text-xs">E11.9</Badge>
                          <Badge variant="outline" className="text-xs">I10</Badge>
                          {i === 0 && <Badge variant="outline" className="text-xs">R51</Badge>}
                          {i === 1 && <Badge variant="outline" className="text-xs">J45.909</Badge>}
                          {i === 2 && <Badge variant="outline" className="text-xs">M54.5</Badge>}
                        </div>
                        <div className="flex justify-end">
                          <Button variant="ghost" size="sm">View Details</Button>
                        </div>
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
