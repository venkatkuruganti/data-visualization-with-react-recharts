import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line
} from "recharts";
import ChartCard from "./ui-lib/ChartCard/ChartCard";
import { TEMPERATURE } from "../data/melb-monthly-temperature";
import { getMonthNameByOrder } from "../utils/month-mapping";
import { TooltipContainerStyles } from "../constants/tooltip-container-styles";

const TemperatureLineChart: React.FC = () => {
  return (
    <ChartCard heading="Melbourne 2019 monthly temperature LineChart">
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={TEMPERATURE["2019"]} className="chart">
          <CartesianGrid
            vertical={true}
            stroke="#d6d9da"
            strokeDasharray="3 3"
          />
          <XAxis
            dataKey="month"
            tickFormatter={getMonthNameByOrder}
            tickLine={true}
          />
          <YAxis
            unit="°C"
            width={35}
            axisLine={true}
            tickLine={true}
            domain={["auto", "auto"]}
          />
          <Tooltip
            labelFormatter={getMonthNameByOrder}
            cursor={false}
            contentStyle={TooltipContainerStyles}
          />
          <Line
            type="monotone"
            dataKey="temperature"
            stroke="#EF5B5B"
            name="Temperature"
            unit="°C"
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

export default TemperatureLineChart;
