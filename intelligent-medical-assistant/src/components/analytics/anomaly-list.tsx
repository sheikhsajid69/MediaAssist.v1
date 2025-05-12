"use client"

import { AlertTriangle, Activity, Brain } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

type AnomalyRisk = "low" | "medium" | "high" | "critical"

interface Anomaly {
  id: string
  title: string
  description: string
  patient: string
  patientId: string
  date: string
  risk: AnomalyRisk
  confidence: number
  category: string
}

const anomalies: Anomaly[] = [
  {
    id: "1",
    title: "Potential Diabetic Retinopathy",
    description: "AI detected signs of retinopathy in recent eye examination images",
    patient: "Mohammed Al-Ahmadi",
    patientId: "SA-10458723",
    date: "2 days ago",
    risk: "high",
    confidence: 87,
    category: "Diabetes Complication"
  },
  {
    id: "2",
    title: "Medication Non-Adherence",
    description: "Pattern suggests patient may not be taking hypertension medication",
    patient: "Fatima Al-Zahrani",
    patientId: "SA-10985634",
    date: "Yesterday",
    risk: "medium",
    confidence: 82,
    category: "Medication"
  },
  {
    id: "3",
    title: "Abnormal Kidney Function",
    description: "Recent lab results show elevated creatinine levels",
    patient: "Ahmad Qureshi",
    patientId: "EX-20341567",
    date: "Today",
    risk: "high",
    confidence: 92,
    category: "Lab Result"
  },
  {
    id: "4",
    title: "Potential Atrial Fibrillation",
    description: "Irregular heartbeat pattern detected in recent ECG",
    patient: "Nora Al-Subaie",
    patientId: "SA-10789342",
    date: "3 days ago",
    risk: "critical",
    confidence: 95,
    category: "Cardiology"
  },
  {
    id: "5",
    title: "Declining Respiratory Function",
    description: "Gradual decline in pulmonary function tests over last 3 visits",
    patient: "Khalid Al-Dosari",
    patientId: "SA-10562187",
    date: "5 days ago",
    risk: "medium",
    confidence: 78,
    category: "Pulmonology"
  }
]

const getRiskBadge = (risk: AnomalyRisk) => {
  switch (risk) {
    case "low":
      return <Badge className="bg-blue-500">Low Risk</Badge>
    case "medium":
      return <Badge className="bg-yellow-500">Medium Risk</Badge>
    case "high":
      return <Badge className="bg-red-500">High Risk</Badge>
    case "critical":
      return <Badge className="bg-red-700">Critical Risk</Badge>
    default:
      return <Badge>Unknown Risk</Badge>
  }
}

const getAnomalyIcon = (category: string) => {
  if (category.includes("Cardio") || category.includes("Heart")) {
    return <Activity className="h-4 w-4 text-red-500" />
  } else if (category.includes("Neuro") || category.includes("Brain")) {
    return <Brain className="h-4 w-4 text-purple-500" />
  } else {
    return <AlertTriangle className="h-4 w-4 text-amber-500" />
  }
}

export function AnomalyList() {
  return (
    <ScrollArea className="h-[350px] pr-4">
      <div className="space-y-4">
        {anomalies.map((anomaly) => (
          <div key={anomaly.id} className="rounded-lg border p-3">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center">
                {getAnomalyIcon(anomaly.category)}
                <span className="font-medium ml-2">{anomaly.title}</span>
              </div>
              {getRiskBadge(anomaly.risk)}
            </div>
            <p className="text-sm text-muted-foreground mb-2">{anomaly.description}</p>
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs text-muted-foreground">
                Patient: <span className="font-medium">{anomaly.patient}</span> ({anomaly.patientId})
              </div>
              <div className="text-xs text-muted-foreground">{anomaly.date}</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-xs">
                <span className="text-muted-foreground">Confidence:</span>{" "}
                <span className="font-medium">{anomaly.confidence}%</span>
              </div>
              <div className="text-xs">
                <Badge variant="outline">{anomaly.category}</Badge>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-end space-x-2">
              <Button variant="outline" size="sm">Investigate</Button>
              <Button size="sm">Alert Doctor</Button>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}
