"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  TooltipProps
} from "recharts"
import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent"

// Sample data for health metrics over time
const data = [
  {
    name: "Week 1",
    bloodGlucose: 148,
    bloodPressure: 138,
    cholesterol: 210,
    heartRate: 78
  },
  {
    name: "Week 2",
    bloodGlucose: 152,
    bloodPressure: 142,
    cholesterol: 208,
    heartRate: 76
  },
  {
    name: "Week 3",
    bloodGlucose: 145,
    bloodPressure: 140,
    cholesterol: 205,
    heartRate: 75
  },
  {
    name: "Week 4",
    bloodGlucose: 142,
    bloodPressure: 136,
    cholesterol: 200,
    heartRate: 74
  },
  {
    name: "Week 5",
    bloodGlucose: 138,
    bloodPressure: 134,
    cholesterol: 195,
    heartRate: 72
  },
  {
    name: "Week 6",
    bloodGlucose: 135,
    bloodPressure: 130,
    cholesterol: 190,
    heartRate: 71
  },
  {
    name: "Week 7",
    bloodGlucose: 132,
    bloodPressure: 128,
    cholesterol: 188,
    heartRate: 70
  },
  {
    name: "Week 8",
    bloodGlucose: 130,
    bloodPressure: 126,
    cholesterol: 185,
    heartRate: 70
  }
]

// Define proper types for the tooltip
type CustomTooltipProps = TooltipProps<ValueType, NameType> & {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    payload: {
      name: string;
      bloodGlucose: number;
      bloodPressure: number;
      cholesterol: number;
      heartRate: number;
    };
    color: string;
  }>;
  label?: string;
};

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background border rounded-md shadow-sm p-3 text-xs">
        <p className="font-semibold mb-1">{label}</p>
        {payload.map((entry, index) => (
          <div key={`item-${index}`} className="flex items-center">
            <div
              className="h-2 w-2 rounded-full mr-1"
              style={{ backgroundColor: entry.color }}
            />
            <span className="mr-1">{entry.name}:</span>
            <span className="font-medium">{entry.value}</span>
          </div>
        ))}
      </div>
    );
  }

  return null;
};

export function HealthTrendChart() {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis
            dataKey="name"
            className="text-xs"
            tick={{ fill: 'var(--foreground)' }}
          />
          <YAxis
            className="text-xs"
            tick={{ fill: 'var(--foreground)' }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="bloodGlucose"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
            name="Blood Glucose"
          />
          <Line
            type="monotone"
            dataKey="bloodPressure"
            stroke="#ef4444"
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
            name="Blood Pressure"
          />
          <Line
            type="monotone"
            dataKey="cholesterol"
            stroke="#22c55e"
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
            name="Cholesterol"
          />
          <Line
            type="monotone"
            dataKey="heartRate"
            stroke="#a855f7"
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
            name="Heart Rate"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
