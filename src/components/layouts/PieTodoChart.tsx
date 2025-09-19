"use client"

import { TrendingUp } from "lucide-react"
import { LabelList, Pie, PieChart } from "recharts"
import stats from "../../../data/statsData"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import type { ChartConfig } from "@/components/ui/chart"

export const description = "Diagramme circulaire des tâches"

const chartData = stats.map((stat, idx) => ({
  status: stat.state,
  value: stat.count,
  fill: [
    "#10b981", // green
    "#f59e42", // orange
    "#ef4444", // red
    "#6366f1", // indigo
  ][idx % 5],
}))

const chartConfig = {
  value: { label: "Nombre" },
  status: { label: "Statut" },
} satisfies ChartConfig

const PieTodoChart = () => {
  return (
    <Card className="flex flex-col border-none w-full">
      <CardHeader className="items-center pb-0 text-center">
        <CardTitle className="text-3xl text-center font-bold text-blue-700">Diagramme circulaire des tâches</CardTitle>
        <CardDescription>Répartition des statuts</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="[&_.recharts-text]:fill-background mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="value" hideLabel />}
            />
            <Pie data={chartData} dataKey="value" nameKey="status">
              <LabelList
                dataKey="status"
                className="fill-background"
                stroke="none"
                fontSize={10}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Tendance en hausse ce mois-ci <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Répartition des tâches par statut
        </div>
      </CardFooter>
    </Card>
  )
}

export default PieTodoChart
