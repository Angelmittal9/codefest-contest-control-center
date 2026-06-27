"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


const data = [
  { time: "10:00", submissions: 200 },
  { time: "11:00", submissions: 450 },
  { time: "12:00", submissions: 700 },
  { time: "13:00", submissions: 1200 },
  { time: "14:00", submissions: 1600 }
];

export default function ContestCharts() {
  return (
    <div className="bg-gray-900 p-6 rounded-xl">
      <h2 className="text-xl font-bold mb-4">
        Submission Trend
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="submissions"
            stroke="#22c55e"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}