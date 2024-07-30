import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart.tsx";

const chartData = Array.from({ length: 20 }).map((_, i) => ({
  date: `0${i + 1}/03`,
  amount: Math.floor(Math.random() * 100),
}));

export function EnergyProducedBarCharts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Produção no período</CardTitle>
        <CardDescription>Produção diária no período</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <BarChart data={chartData}>
            <CartesianGrid vertical={false} />

            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 2)}
            />

            <Bar dataKey="amount" fill={"var(--chart-1)"} radius={4} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
