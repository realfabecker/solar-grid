import { Helmet } from "react-helmet-async";
import { MonthEnergyProducedCard } from "@/pages/dash/MonthEnergyProducedCard.tsx";
import { TodayEnergyProducedCard } from "@/pages/dash/TodayEnergyProducedCard.tsx";
import { MonthRevenueMadeCard } from "@/pages/dash/MonthRevenueMadeCard.tsx";
import { EnergyProducedBarCharts } from "@/pages/dash/EnergyProducedBarCharts.tsx";

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />

      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

      <div className="grid lg:grid-cols-3 gap-4">
        <MonthEnergyProducedCard />
        <TodayEnergyProducedCard />
        <MonthRevenueMadeCard />
      </div>

      <div className="grid">
        <EnergyProducedBarCharts />
      </div>
    </>
  );
}
