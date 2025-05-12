"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ArrowUpRight, ArrowDownRight } from "lucide-react"

interface HealthMetricCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  value: string | number
  trend: string
  trendType: "increase" | "decrease" | "neutral"
  description?: string
  icon?: React.ReactNode
}

export function HealthMetricCard({
  title,
  value,
  trend,
  trendType,
  description,
  icon,
  className,
  ...props
}: HealthMetricCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)} {...props}>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && (
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        )}
        {trend && (
          <div className="flex items-center mt-1">
            {trendType === "increase" ? (
              <div className="flex items-center text-emerald-500 text-xs">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                {trend}
              </div>
            ) : trendType === "decrease" ? (
              <div className="flex items-center text-red-500 text-xs">
                <ArrowDownRight className="h-3 w-3 mr-1" />
                {trend}
              </div>
            ) : (
              <div className="text-muted-foreground text-xs">{trend}</div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
