"use client";

import AreaCharts from "@/components/charts/area-chart";
import AreaChartGradient from "@/components/charts/area-chart-gradient";
import BarCharts from "@/components/charts/bar-chart";
import PieCharts from "@/components/charts/pie-chart";
import RadarCharts from "@/components/charts/radar-chart";
import RadialChart from "@/components/charts/radial-chart";
import { MainLayout } from "@/components/layout/main-layout";

export default function Dashboard() {
  return (
    <MainLayout activeItem="Dashboard">
      <h1 className="text-2xl font-bold text-white mb-4">Analytics</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        <AreaCharts />
        <AreaChartGradient />
        <PieCharts />
        <BarCharts />
        <RadialChart />
        <RadarCharts />
      </div>

      {/* User Management Table */}
    </MainLayout>
  );
}
