"use client";

import {
  Users,
  Trophy,
  FileText,
  TrendingUp,
  Brain,
} from "lucide-react";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";

const submissionData = [
  { time: "10:00", submissions: 200 },
  { time: "11:00", submissions: 450 },
  { time: "12:00", submissions: 700 },
  { time: "13:00", submissions: 1200 },
  { time: "14:00", submissions: 1650 },
];

const departmentData = [
  { department: "CSE", score: 980 },
  { department: "IT", score: 850 },
  { department: "ECE", score: 740 },
  { department: "AI", score: 690 },
];

export default function DashboardPage() {
  const stats = [
    {
      title: "Participants",
      value: "1,250",
      change: "+12.5%",
      icon: <Users size={24} />,
      color: "text-green-400",
    },
    {
      title: "Active Contests",
      value: "8",
      change: "+4.2%",
      icon: <Trophy size={24} />,
      color: "text-yellow-400",
    },
    {
      title: "Submissions",
      value: "12,528",
      change: "+18.1%",
      icon: <FileText size={24} />,
      color: "text-blue-400",
    },
    {
      title: "Growth Rate",
      value: "+18%",
      change: "+2.4%",
      icon: <TrendingUp size={24} />,
      color: "text-purple-400",
    },
  ];

  return (
    <div className="space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold">
          Analytics Dashboard
        </h1>

        <p className="text-gray-400 mt-2">
          Monitor contest performance and platform activity.
        </p>
      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((item) => (
          <div
            key={item.title}
            className="
              bg-[#081528]
              border
              border-gray-800
              rounded-2xl
              p-5
            "
          >
            <div className="flex justify-between items-center">

              <div>
                <p className="text-gray-400 text-sm">
                  {item.title}
                </p>

                <h2 className="text-4xl font-bold mt-2">
                  {item.value}
                </h2>

                <p className="text-green-400 text-sm mt-2">
                  ↑ {item.change} this month
                </p>
              </div>

              <div className={item.color}>
                {item.icon}
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* CHARTS */}
      <div className="grid lg:grid-cols-2 gap-6">

        <div className="bg-[#081528] rounded-2xl p-6 border border-gray-800">
          <h2 className="text-2xl font-bold mb-5">
            Submission Trend
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={submissionData}>
              <CartesianGrid stroke="#1e293b" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="submissions"
                stroke="#22c55e"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-[#081528] rounded-2xl p-6 border border-gray-800">
          <h2 className="text-2xl font-bold mb-5">
            Department Performance
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={departmentData}>
              <CartesianGrid stroke="#1e293b" />
              <XAxis dataKey="department" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="score"
                fill="#3b82f6"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* BOTTOM SECTION */}
      <div className="grid lg:grid-cols-3 gap-6">

        {/* AI INSIGHTS */}
        <div className="bg-[#081528] rounded-2xl p-6 border border-gray-800">

          <div className="flex items-center gap-3 mb-5">
            <Brain className="text-purple-400" />
            <h2 className="text-xl font-bold">
              AI Insights
            </h2>
          </div>

          <div className="space-y-4 text-gray-300">

            <div>
              📈 Participation increased by 18%
            </div>

            <div>
              🔥 Peak activity occurred at 1 PM
            </div>

            <div>
              🎯 Acceptance rate improved by 7%
            </div>

            <div>
              ⚠ Problem D generated most failures
            </div>

            <div>
              🏆 CSE department leads overall rankings
            </div>

          </div>

        </div>

        {/* CONTEST PERFORMANCE */}
        <div className="bg-[#081528] rounded-2xl p-6 border border-gray-800">

          <h2 className="text-xl font-bold mb-5">
            Contest Performance
          </h2>

          <div className="space-y-6">

            <div>
              <div className="flex justify-between">
                <span>Acceptance Rate</span>
                <span>72%</span>
              </div>

              <div className="w-full bg-gray-800 h-3 rounded-full mt-2">
                <div className="bg-green-500 h-3 rounded-full w-[72%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between">
                <span>Completion Rate</span>
                <span>81%</span>
              </div>

              <div className="w-full bg-gray-800 h-3 rounded-full mt-2">
                <div className="bg-blue-500 h-3 rounded-full w-[81%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between">
                <span>User Engagement</span>
                <span>65%</span>
              </div>

              <div className="w-full bg-gray-800 h-3 rounded-full mt-2">
                <div className="bg-purple-500 h-3 rounded-full w-[65%]" />
              </div>
            </div>

          </div>

        </div>

        {/* ACTIVITY TIMELINE */}
        <div className="bg-[#081528] rounded-2xl p-6 border border-gray-800">

          <h2 className="text-xl font-bold mb-5">
            Recent Activity
          </h2>

          <div className="space-y-5">

            <div>
              🟢 John reached Rank #1
            </div>

            <div>
              🟡 Sarah solved 5 new problems
            </div>

            <div>
              🔵 New contest launched
            </div>

            <div>
              🟣 200 new submissions received
            </div>

            <div>
              🔴 Contest ends in 2 hours
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}