"use client";

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { verdictData } from "../data/mockData";

const COLORS = [
  "#22c55e",
  "#ef4444",
  "#facc15",
  "#8b5cf6",
];

export default function VerdictPieChart() {
  return (
    <div className="bg-gray-900 rounded-xl p-6">
      <h2 className="text-xl font-bold mb-4">
        Verdict Distribution
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            data={verdictData}
            cx="50%"
            cy="50%"
            outerRadius={120}
            dataKey="value"
            label
          >
            {verdictData.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}