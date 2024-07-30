import { DashboardAmountOverviewCard } from "@/pages/dash/DashboardAmountOverviewCard.tsx";
import { Lightbulb } from "lucide-react";

export function TodayEnergyProducedCard() {
  const data = {
    title: "Produção Total (Hoje)",
    overview: "+5% em relação ao dia anterior",
    amount: 25,
    Icon: Lightbulb,
  };
  return <DashboardAmountOverviewCard {...data} />;
}
