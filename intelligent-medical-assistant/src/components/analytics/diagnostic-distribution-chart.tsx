"use client"

import { useEffect, useState } from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  TooltipProps
} from "recharts"
import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample data for diagnosis distribution
const diagnosisData = [
  { name: "Diabetes", count: 428, percent: 23.4 },
  { name: "Hypertension", count: 578, percent: 31.7 },
  { name: "Heart Disease", count: 247, percent: 13.5 },
  { name: "Respiratory", count: 345, percent: 18.9 },
  { name: "Mental Health", count: 159, percent: 8.7 },
  { name: "Other", count: 69, percent: 3.8 }
]

// Colors for the pie chart
const COLORS = ['#3b82f6', '#ef4444', '#a855f7', '#22c55e', '#f59e0b', '#64748b'];

// Define proper types for the tooltip
type CustomTooltipProps = TooltipProps<ValueType, NameType> & {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    payload: {
      name: string;
      count: number;
      percent: number;
    };
    color: string;
  }>;
  label?: string;
};

// Custom tooltip for charts
const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background border rounded-md shadow-sm p-3 text-xs">
        <p className="font-semibold mb-1">{payload[0].name}</p>
        <div className="flex flex-col">
          <div className="flex items-center">
            <span className="mr-1">Count:</span>
            <span className="font-medium">{payload[0].value}</span>
          </div>
          <div className="flex items-center">
            <span className="mr-1">Percentage:</span>
            <span className="font-medium">
              {payload[0].payload.percent}%
            </span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

// Define proper type for the pie chart active shape props
type PieChartProps = {
  cx: number;
  cy: number;
  innerRadius: number;
  outerRadius: number;
  startAngle: number;
  endAngle: number;
  fill: string;
  payload: {
    name: string;
    count: number;
    percent: number;
  };
  percent: number;
  value: number;
};

export function DiagnosticDistributionChart() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Set initial window width
    setWindowWidth(window.innerWidth);

    // Update window width on resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const onPieEnter = (_: unknown, index: number) => {
    setActiveIndex(index);
  };

  return (
    <Tabs defaultValue="pie">
      <div className="flex justify-between items-center mb-4">
        <TabsList>
          <TabsTrigger value="pie">Pie Chart</TabsTrigger>
          <TabsTrigger value="bar">Bar Chart</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="pie">
        <div className="w-full" style={{ height: windowWidth > 768 ? '300px' : '250px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                activeIndex={activeIndex}
                activeShape={(props: PieChartProps) => {
                  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
                  return (
                    <g>
                      <text x={cx} y={cy} dy={-20} textAnchor="middle" fill="currentColor" className="text-sm font-medium">
                        {payload.name}
                      </text>
                      <text x={cx} y={cy} textAnchor="middle" fill="currentColor" className="text-base font-bold">
                        {`${(percent * 100).toFixed(1)}%`}
                      </text>
                      <text x={cx} y={cy} dy={20} textAnchor="middle" fill="currentColor" className="text-xs">
                        {`${value} patients`}
                      </text>
                      <Pie
                        cx={cx}
                        cy={cy}
                        innerRadius={innerRadius}
                        outerRadius={outerRadius}
                        startAngle={startAngle}
                        endAngle={endAngle}
                        fill={fill}
                        data={[{ name: payload.name, value: 1 }]}
                      />
                    </g>
                  );
                }}
                data={diagnosisData}
                dataKey="count"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={windowWidth > 768 ? 60 : 40}
                outerRadius={windowWidth > 768 ? 90 : 70}
                fill="#8884d8"
                onMouseEnter={onPieEnter}
              >
                {diagnosisData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend
                layout="horizontal"
                verticalAlign="bottom"
                align="center"
                formatter={(value, entry, index) => {
                  return <span className="text-xs">{value} ({diagnosisData[index].percent}%)</span>;
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </TabsContent>
      <TabsContent value="bar">
        <div className="w-full" style={{ height: windowWidth > 768 ? '300px' : '250px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={diagnosisData}
              margin={{
                top: 5,
                right: 10,
                left: 10,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="name" className="text-xs" />
              <YAxis className="text-xs" />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="count" name="Patients" radius={[4, 4, 0, 0]}>
                {diagnosisData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </TabsContent>
    </Tabs>
  )
}
