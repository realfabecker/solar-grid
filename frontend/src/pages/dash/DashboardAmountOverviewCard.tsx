import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import * as react from "react";

type PeriodEnergyProducedCardProps = {
  title: string;
  overview: string;
  amount: number;
  icon: react.RefAttributes<SVGSVGElement>;
};

export function DashboardAmountOverviewCard({
  title,
  overview,
  amount,
  Icon,
}: Readonly<PeriodEnergyProducedCardProps>) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">{amount}</span>
        <p className="text-sm text-muted-foreground">{overview}</p>
      </CardContent>
    </Card>
  );
}
