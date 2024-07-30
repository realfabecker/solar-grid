import { DashboardAmountOverviewCard } from "@/pages/dash/DashboardAmountOverviewCard.tsx";
import { Coins } from "lucide-react";

export function MonthRevenueMadeCard() {
  const data = {
    title: "Rendimento Total (Mês)",
    overview: "+30% em relação ao mês anterior",
    amount: 140.5,
    Icon: Coins,
  };
  return <DashboardAmountOverviewCard {...data} />;
}
