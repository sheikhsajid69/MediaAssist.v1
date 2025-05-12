"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  ChevronRight,
  Mic,
  Paperclip,
  SendHorizonal,
  Loader2,
  Languages,
  Settings
} from "lucide-react"

interface ChatMessage {
  id: string
  content: string
  sender: "user" | "assistant"
  timestamp: Date
  tags?: string[]
  status?: "recording" | "processing" | "complete"
}

export function ChatInterface() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      content: "Welcome to the Medical Transcription Service. You can start a new consultation by clicking the record button or typing your notes.",
      sender: "assistant",
      timestamp: new Date(),
    },
    {
      id: "2",
      content: "I need to transcribe a consultation for a patient with type 2 diabetes who is experiencing increased fatigue and blurred vision.",
      sender: "user",
      timestamp: new Date(Date.now() - 5 * 60000),
    },
    {
      id: "3",
      content: "I'll help you transcribe the consultation. Please proceed with the details of the patient's symptoms, examination findings, and your assessment.",
      sender: "assistant",
      timestamp: new Date(Date.now() - 4 * 60000),
    },
    {
      id: "4",
      content: "Patient is a 58-year-old male with a 10-year history of type 2 diabetes mellitus. He reports increased fatigue for the past 3 weeks and blurred vision that worsens throughout the day. Blood glucose readings at home have been between 180-240 mg/dL. He has been compliant with his medication regimen of Metformin 1000mg twice daily.",
      sender: "user",
      timestamp: new Date(Date.now() - 3 * 60000),
      status: "complete"
    },
    {
      id: "5",
      content: "Transcription completed. I've identified the following medical information:\n\n**Patient Demographics:** 58-year-old male\n**Medical History:** Type 2 diabetes mellitus (10-year history)\n**Current Symptoms:** Increased fatigue (3 weeks), blurred vision (worsens throughout day)\n**Measurements:** Blood glucose 180-240 mg/dL\n**Current Medications:** Metformin 1000mg BID\n\n**Potential ICD-10 Codes:**\n- E11.9 (Type 2 diabetes mellitus without complications)\n- E11.36 (Type 2 diabetes with diabetic retinopathy)\n- R53.83 (Other fatigue)\n\nWould you like me to continue with the assessment and plan section?",
      sender: "assistant",
      timestamp: new Date(Date.now() - 2 * 60000),
      tags: ["E11.9", "E11.36", "R53.83"]
    }
  ])

  const [inputValue, setInputValue] = useState("")
  const [isRecording, setIsRecording] = useState(false)

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    // Add user message
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date()
    }

    setMessages([...messages, newMessage])
    setInputValue("")

    // Simulate AI response (would be an API call in a real app)
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: "I'm processing your input. This would be connected to the medical transcription API in the production version.",
        sender: "assistant",
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiResponse])
    }, 1000)
  }

  const toggleRecording = () => {
    setIsRecording(!isRecording)

    if (!isRecording) {
      // Simulate recording started
      const recordingMessage: ChatMessage = {
        id: Date.now().toString(),
        content: "Recording started...",
        sender: "user",
        timestamp: new Date(),
        status: "recording"
      }

      setMessages([...messages, recordingMessage])
    } else {
      // Update the last message to show processing
      setMessages(prev => {
        const updatedMessages = [...prev]
        const lastMessage = updatedMessages[updatedMessages.length - 1]

        if (lastMessage.status === "recording") {
          updatedMessages[updatedMessages.length - 1] = {
            ...lastMessage,
            content: "Processing audio transcription...",
            status: "processing"
          }
        }

        return updatedMessages
      })

      // Simulate processing delay
      setTimeout(() => {
        setMessages(prev => {
          const updatedMessages = [...prev]
          const lastMessage = updatedMessages[updatedMessages.length - 1]

          if (lastMessage.status === "processing") {
            updatedMessages[updatedMessages.length - 1] = {
              ...lastMessage,
              content: "Patient reports increased headache intensity over the past week, particularly in the morning. No nausea or vomiting. Visual acuity unchanged. Blood pressure readings elevated at 145/92.",
              status: "complete"
            }
          }

          return updatedMessages
        })

        // Simulate AI processing the transcription
        setTimeout(() => {
          const analysisMessage: ChatMessage = {
            id: Date.now().toString(),
            content: "I've analyzed the new information:\n\n**Current Symptoms:** Increased headache intensity (1 week, worse in mornings)\n**Negative Symptoms:** No nausea or vomiting\n**Examination:** Visual acuity stable, BP elevated (145/92)\n\n**Additional ICD-10 Codes:**\n- R51 (Headache)\n- I10 (Essential hypertension)\n\nWould you like me to update the patient record with this information?",
            sender: "assistant",
            timestamp: new Date(),
            tags: ["R51", "I10"]
          }

          setMessages(prev => [...prev, analysisMessage])
        }, 1500)
      }, 2000)
    }
  }

  return (
    <Card className="flex flex-col col-span-3 lg:col-span-2" style={{ height: "580px" }}>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Medical AI Assistant</CardTitle>
        <div className="flex space-x-2">
          <Button variant="outline" size="icon">
            <Languages className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="flex-1 overflow-hidden">
        <ScrollArea className="h-[400px] pr-4">
          <div className="flex flex-col space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "assistant" ? "justify-start" : "justify-end"}`}
              >
                {message.sender === "assistant" && (
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarImage src="/ai-avatar.png" alt="AI" />
                    <AvatarFallback className="bg-primary text-primary-foreground">AI</AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={`rounded-lg px-4 py-2 max-w-[80%] ${
                    message.sender === "assistant"
                      ? "bg-muted"
                      : "bg-primary text-primary-foreground"
                  } ${message.status === "recording" && "bg-red-500 animate-pulse"} ${
                    message.status === "processing" && "bg-yellow-500"
                  }`}
                >
                  <div className="mb-1">
                    {message.sender === "assistant" ? "Medical AI" : "You"}
                    <span className="text-xs ml-2 opacity-70">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                  <div className="whitespace-pre-line">{message.content}</div>
                  {message.tags && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {message.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
                {message.sender === "user" && (
                  <Avatar className="h-8 w-8 ml-2">
                    <AvatarImage src="/user-avatar.png" alt="User" />
                    <AvatarFallback>DR</AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <div className="flex w-full items-center space-x-2">
          <Button variant="outline" size="icon">
            <Paperclip className="h-4 w-4" />
          </Button>
          <Button
            variant={isRecording ? "destructive" : "outline"}
            size="icon"
            onClick={toggleRecording}
          >
            {isRecording ? <Loader2 className="h-4 w-4 animate-spin" /> : <Mic className="h-4 w-4" />}
          </Button>
          <Input
            type="text"
            placeholder="Type your message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSendMessage()
              }
            }}
          />
          <Button onClick={handleSendMessage}>
            <SendHorizonal className="h-4 w-4 mr-1" />
            <span>Send</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
