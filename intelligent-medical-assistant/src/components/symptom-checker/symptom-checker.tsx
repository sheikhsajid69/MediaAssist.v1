"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import {
  Search,
  Plus,
  Trash,
  BadgeAlert,
  ArrowRight,
  RefreshCcw,
  Brain,
  Info,
  CheckCircle,
  AlertTriangle,
  Calendar,
  MessageSquare
} from "lucide-react"

// Symptom checker component that uses AI to analyze symptoms and provide triage recommendations
export function SymptomChecker() {
  const [step, setStep] = useState<'symptoms' | 'questions' | 'result'>('symptoms')
  const [symptoms, setSymptoms] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [questionIndex, setQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [analyzing, setAnalyzing] = useState(false)
  const [triageResult, setTriageResult] = useState<'urgent' | 'soon' | 'routine' | ''>('')
  const [diagnosisProbabilities, setDiagnosisProbabilities] = useState<{condition: string, probability: number}[]>([])

  // Mock symptom suggestions
  const symptomSuggestions = [
    "Headache", "Fever", "Cough", "Fatigue", "Chest Pain",
    "Shortness of Breath", "Abdominal Pain", "Nausea", "Vomiting",
    "Diarrhea", "Joint Pain", "Muscle Pain", "Dizziness", "Sore Throat"
  ].filter(s => s.toLowerCase().includes(searchTerm.toLowerCase()) && !symptoms.includes(s))

  // Mock follow-up questions based on symptoms
  const followUpQuestions = [
    {
      id: "duration",
      question: "How long have you been experiencing these symptoms?",
      options: ["Less than 24 hours", "1-3 days", "4-7 days", "More than a week"]
    },
    {
      id: "severity",
      question: "On a scale of 1-10, how would you rate the severity of your symptoms?",
      options: ["1-3 (Mild)", "4-6 (Moderate)", "7-8 (Severe)", "9-10 (Very Severe)"]
    },
    {
      id: "fever_temp",
      question: "If you have fever, what is your temperature?",
      options: ["No fever", "37.5-38°C (99.5-100.4°F)", "38.1-39°C (100.5-102.2°F)", "Above 39°C (102.2°F)"]
    },
    {
      id: "medication",
      question: "Have you taken any medication for these symptoms?",
      options: ["No", "Yes, with improvement", "Yes, without improvement", "Yes, symptoms worsened"]
    },
    {
      id: "medical_history",
      question: "Do you have any relevant medical conditions?",
      options: ["None", "Diabetes", "Heart disease", "Respiratory condition", "Immune disorder"]
    }
  ]

  // Add symptom to the list
  const addSymptom = (symptom: string) => {
    if (!symptoms.includes(symptom)) {
      setSymptoms([...symptoms, symptom])
      setSearchTerm("")
    }
  }

  // Remove symptom from the list
  const removeSymptom = (symptom: string) => {
    setSymptoms(symptoms.filter(s => s !== symptom))
  }

  // Custom symptom from search input
  const addCustomSymptom = () => {
    if (searchTerm.trim() && !symptoms.includes(searchTerm.trim())) {
      setSymptoms([...symptoms, searchTerm.trim()])
      setSearchTerm("")
    }
  }

  // Move to questions step
  const proceedToQuestions = () => {
    if (symptoms.length > 0) {
      setStep('questions')
      setQuestionIndex(0)
    }
  }

  // Handle answering a question and move to next
  const answerQuestion = (answer: string) => {
    const currentQuestion = followUpQuestions[questionIndex]
    setAnswers({...answers, [currentQuestion.id]: answer})

    if (questionIndex < followUpQuestions.length - 1) {
      setQuestionIndex(questionIndex + 1)
    } else {
      // Last question answered, proceed to analysis
      analyzeSymptoms()
    }
  }

  // Analyze symptoms and generate triage result
  const analyzeSymptoms = () => {
    setAnalyzing(true)
    setStep('result')

    // Simulate AI processing delay
    setTimeout(() => {
      // Mock logic for triage decision
      const hasSevereSymptomsSet = symptoms.some(s =>
        ["Chest Pain", "Shortness of Breath"].includes(s)
      )
      const isSevere = answers.severity?.includes("Severe") || answers.severity?.includes("Very Severe")
      const hasHighFever = answers.fever_temp?.includes("Above 39°C")
      const hasRiskFactors = answers.medical_history !== "None" && answers.medical_history !== undefined

      // Determine triage level
      let triage: 'urgent' | 'soon' | 'routine' = 'routine'
      if (hasSevereSymptomsSet || (isSevere && hasHighFever)) {
        triage = 'urgent'
      } else if (isSevere || hasHighFever || hasRiskFactors) {
        triage = 'soon'
      }

      // Mock diagnostic suggestions
      const diagnoses: {condition: string, probability: number}[] = []

      if (symptoms.includes("Headache")) {
        diagnoses.push({ condition: "Tension Headache", probability: 65 })
        diagnoses.push({ condition: "Migraine", probability: 45 })
      }

      if (symptoms.includes("Fever") && symptoms.includes("Cough")) {
        diagnoses.push({ condition: "Upper Respiratory Infection", probability: 78 })
        diagnoses.push({ condition: "Influenza", probability: 60 })
        diagnoses.push({ condition: "COVID-19", probability: 55 })
      }

      if (symptoms.includes("Chest Pain") && symptoms.includes("Shortness of Breath")) {
        diagnoses.push({ condition: "Anxiety", probability: 40 })
        diagnoses.push({ condition: "Angina", probability: 35 })
        diagnoses.push({ condition: "Pneumonia", probability: 32 })
      }

      if (symptoms.includes("Abdominal Pain")) {
        diagnoses.push({ condition: "Gastritis", probability: 50 })
        diagnoses.push({ condition: "Gastroenteritis", probability: 45 })
      }

      // Sort by probability
      diagnoses.sort((a, b) => b.probability - a.probability)

      setTriageResult(triage)
      setDiagnosisProbabilities(diagnoses)
      setAnalyzing(false)
    }, 2000)
  }

  // Restart the symptom checker
  const restart = () => {
    setStep('symptoms')
    setSymptoms([])
    setSearchTerm("")
    setQuestionIndex(0)
    setAnswers({})
    setTriageResult('')
    setDiagnosisProbabilities([])
  }

  // Get triage indicator component
  const getTriageIndicator = () => {
    switch (triageResult) {
      case 'urgent':
        return (
          <div className="flex items-center text-red-500 gap-2 text-lg font-bold">
            <BadgeAlert className="h-6 w-6" />
            <span>Urgent Care Recommended</span>
          </div>
        )
      case 'soon':
        return (
          <div className="flex items-center text-amber-500 gap-2 text-lg font-bold">
            <AlertTriangle className="h-6 w-6" />
            <span>Seek Medical Attention Soon</span>
          </div>
        )
      case 'routine':
        return (
          <div className="flex items-center text-green-500 gap-2 text-lg font-bold">
            <CheckCircle className="h-6 w-6" />
            <span>Routine Care</span>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>AI Symptom Checker</CardTitle>
        <CardDescription>
          Enter your symptoms and answer a few questions for AI-powered health recommendations
        </CardDescription>
      </CardHeader>
      <CardContent>
        {step === 'symptoms' && (
          <>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Enter symptoms..."
                    className="pl-8 pr-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && searchTerm.trim()) {
                        addCustomSymptom()
                      }
                    }}
                  />
                </div>
                <Button onClick={addCustomSymptom} disabled={!searchTerm.trim()}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              {/* Symptom suggestions */}
              {searchTerm && symptomSuggestions.length > 0 && (
                <div className="border rounded-md p-2">
                  <p className="text-sm text-muted-foreground mb-2">Suggestions:</p>
                  <div className="flex flex-wrap gap-2">
                    {symptomSuggestions.slice(0, 6).map((symptom) => (
                      <Badge
                        key={symptom}
                        variant="outline"
                        className="cursor-pointer hover:bg-muted"
                        onClick={() => addSymptom(symptom)}
                      >
                        {symptom} <Plus className="ml-1 h-3 w-3" />
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Selected symptoms */}
              <div>
                <p className="text-sm font-medium mb-2">Selected Symptoms:</p>
                {symptoms.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {symptoms.map((symptom) => (
                      <Badge key={symptom} variant="secondary" className="gap-1">
                        {symptom}
                        <button
                          className="ml-1 h-3 w-3 rounded-full"
                          onClick={() => removeSymptom(symptom)}
                        >
                          <Trash className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">No symptoms selected</p>
                )}
              </div>

              <div className="rounded-md bg-muted p-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Info className="h-4 w-4" />
                  <p>
                    Please select all symptoms you're experiencing. The more detailed you are, the more accurate our analysis will be.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}

        {step === 'questions' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-muted-foreground">
                Question {questionIndex + 1} of {followUpQuestions.length}
              </p>
              <Badge variant="outline">
                {questionIndex + 1}/{followUpQuestions.length}
              </Badge>
            </div>

            <Progress value={(questionIndex + 1) / followUpQuestions.length * 100} className="w-full" />

            <div className="py-4">
              <h3 className="text-lg font-medium mb-4">
                {followUpQuestions[questionIndex].question}
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {followUpQuestions[questionIndex].options.map((option) => (
                  <Button
                    key={option}
                    variant="outline"
                    className="w-full justify-start h-auto py-3 px-4"
                    onClick={() => answerQuestion(option)}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex items-center text-sm text-muted-foreground">
              <p>Analyzing symptoms: {symptoms.join(", ")}</p>
            </div>
          </div>
        )}

        {step === 'result' && (
          <div className="space-y-6">
            {analyzing ? (
              <div className="flex flex-col items-center justify-center py-8">
                <RefreshCcw className="h-8 w-8 animate-spin text-primary mb-4" />
                <p className="text-lg font-medium">Analyzing your symptoms...</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Our AI is reviewing your symptoms and medical information
                </p>
              </div>
            ) : (
              <>
                <div className="p-4 rounded-lg border border-muted-foreground/20">
                  <h3 className="text-lg font-medium mb-4">Analysis Result</h3>

                  {/* Triage result */}
                  <div className="mb-6">
                    {getTriageIndicator()}
                    <div className="mt-2 text-sm text-muted-foreground">
                      Based on your reported symptoms and answers
                    </div>
                  </div>

                  {/* Potential conditions */}
                  <div className="space-y-3">
                    <h4 className="font-medium flex items-center gap-2">
                      <Brain className="h-4 w-4" />
                      Potential Conditions to Discuss with Your Doctor
                    </h4>

                    <div className="space-y-3">
                      {diagnosisProbabilities.map((diagnosis) => (
                        <div key={diagnosis.condition} className="rounded-md border p-3">
                          <div className="flex justify-between mb-1">
                            <div className="font-medium">{diagnosis.condition}</div>
                            <Badge variant={diagnosis.probability > 70 ? "default" : "secondary"}>
                              {diagnosis.probability}% Match
                            </Badge>
                          </div>
                          <Progress value={diagnosis.probability} className="h-2" />
                        </div>
                      ))}

                      {diagnosisProbabilities.length === 0 && (
                        <p className="text-muted-foreground text-sm">
                          No specific conditions identified based on the provided symptoms.
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 p-3 rounded-md bg-blue-50 dark:bg-blue-950 text-sm">
                    <p className="text-blue-700 dark:text-blue-300 font-medium">
                      This is not a medical diagnosis
                    </p>
                    <p className="mt-1 text-blue-600 dark:text-blue-400">
                      This tool provides information only. Always consult with a healthcare professional for proper diagnosis and treatment.
                    </p>
                  </div>
                </div>

                {/* Recommendations */}
                <div>
                  <h3 className="text-lg font-medium mb-3">Recommendations</h3>
                  <div className="space-y-3">
                    {triageResult === 'urgent' && (
                      <div className="rounded-md border border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-900/30 p-3">
                        <p className="font-medium text-red-700 dark:text-red-400">Seek immediate medical attention</p>
                        <p className="text-sm text-red-600 dark:text-red-300 mt-1">
                          Your symptoms suggest a condition that requires urgent medical care. Please contact emergency services or go to your nearest emergency room.
                        </p>
                      </div>
                    )}

                    {triageResult === 'soon' && (
                      <div className="rounded-md border border-amber-200 bg-amber-50 dark:bg-amber-900/20 dark:border-amber-900/30 p-3">
                        <p className="font-medium text-amber-700 dark:text-amber-400">Schedule a medical appointment soon</p>
                        <p className="text-sm text-amber-600 dark:text-amber-300 mt-1">
                          Your symptoms suggest a condition that should be evaluated by a healthcare provider within the next few days.
                        </p>
                      </div>
                    )}

                    {triageResult === 'routine' && (
                      <div className="rounded-md border border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-900/30 p-3">
                        <p className="font-medium text-green-700 dark:text-green-400">Consider a routine appointment</p>
                        <p className="text-sm text-green-600 dark:text-green-300 mt-1">
                          Your symptoms suggest a condition that can be addressed during a routine medical appointment.
                        </p>
                      </div>
                    )}

                    <div className="rounded-md border p-3">
                      <p className="font-medium">Would you like to:</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                        <Button variant="outline" className="flex items-center justify-center gap-2">
                          <Calendar className="h-4 w-4" />
                          Schedule Appointment
                        </Button>
                        <Button className="flex items-center justify-center gap-2">
                          <MessageSquare className="h-4 w-4" />
                          Telemedicine Consultation
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        {step === 'symptoms' && (
          <>
            <Button variant="ghost" disabled>Back</Button>
            <Button onClick={proceedToQuestions} disabled={symptoms.length === 0}>
              Next <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </>
        )}

        {step === 'questions' && (
          <>
            <Button
              variant="ghost"
              onClick={() => {
                setQuestionIndex(Math.max(0, questionIndex - 1))
                // If we're at the first question and going back, return to symptoms
                if (questionIndex === 0) {
                  setStep('symptoms')
                }
              }}
            >
              Back
            </Button>
            <div className="text-sm text-muted-foreground">
              Select an answer to continue
            </div>
          </>
        )}

        {step === 'result' && !analyzing && (
          <>
            <Button variant="outline" onClick={restart}>
              <RefreshCcw className="mr-2 h-4 w-4" />
              Start Over
            </Button>
            <Button>
              Save Results
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  )
}
