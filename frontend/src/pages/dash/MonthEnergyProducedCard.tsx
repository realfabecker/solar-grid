import { DashboardAmountOverviewCard } from "@/pages/dash/DashboardAmountOverviewCard.tsx";
import { Lightbulb } from "lucide-react";

export function MonthEnergyProducedCard() {
  const data = {
    title: "Produção Total (Mês)",
    overview: "+30% em relação ao mês anterior",
    amount: 100,
    Icon: Lightbulb,
  };
  return <DashboardAmountOverviewCard {...data} />;
}
