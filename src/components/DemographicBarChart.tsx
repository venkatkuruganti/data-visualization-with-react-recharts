import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  Cell
} from "recharts";
import ChartCard from "./ui-lib/ChartCard/ChartCard";
import { AGE_GROUP } from "../data/website-visit-age-group";
import { COLORS } from "../constants/colors";
import { TooltipContainerStyles } from "../constants/tooltip-container-styles";
import { getAgeWithLabel } from "../utils/age-mapping";

const DemographicBarChart: React.FC = () => {
  return (
    <ChartCard heading="Website visit age group BarChart">
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={AGE_GROUP} className="chart">
        <CartesianGrid
          vertical={false}
          stroke="#d6d9da"
          strokeDasharray="3 3"
          />
          <XAxis
            dataKey="age"
            tickLine={true}
          />
          <YAxis 
          unit="%" 
          width={35} 
          axisLine={true} 
          tickLine={true}
          />
          <Tooltip
            cursor={false}
            contentStyle={TooltipContainerStyles}
            labelFormatter={getAgeWithLabel}
          />
          <Bar dataKey="percentage" fill="#3066BE" unit="%" name="Percentage">
          {AGE_GROUP.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
            </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

export default DemographicBarChart;
