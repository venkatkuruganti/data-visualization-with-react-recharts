import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar
} from "recharts";
import ChartCard from "./ui-lib/ChartCard/ChartCard";
import { RAINFALL } from "../data/melb-monthly-rainfall";
import { getMonthNameByOrder } from "../utils/month-mapping";
import { TooltipContainerStyles } from "../constants/tooltip-container-styles";

const RainFallBarChart: React.FC = () => {
  return (
    <ChartCard heading="Melbourne 2019 monthly rainfall BarChart">
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={RAINFALL["2019"]} className="chart"> 
          <CartesianGrid
            vertical={false}
            stroke="#d6d9da"
            strokeDasharray="3 3"
          />
          <XAxis
            dataKey="month"
            tickFormatter={getMonthNameByOrder}
            tickLine={true}
          />
          <YAxis 
          unit="ml" 
          width={35} 
          axisLine={true} 
          tickLine={true}
          />
          <Tooltip
            cursor={false}
            contentStyle={TooltipContainerStyles}
            labelFormatter={getMonthNameByOrder}
          />
          <Bar dataKey="rainfall" fill="#3066BE" unit="ml" name="Rainfall" />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

export default RainFallBarChart;
