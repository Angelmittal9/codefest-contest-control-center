"use client";

import { Users, UserCheck, Trophy, Target } from "lucide-react";

export default function StatsCards() {
  const stats = [
    {
      title: "Participants",
      value: "1,250",
      growth: "+12.5%",
      subtitle: "from last contest",
      icon: <Users size={24} />,
      iconBg: "bg-purple-500/20",
      iconColor: "text-purple-400",
    },
    {
      title: "Active Users",
      value: "920",
      growth: "+8.3%",
      subtitle: "from last contest",
      icon: <UserCheck size={24} />,
      iconBg: "bg-green-500/20",
      iconColor: "text-green-400",
    },
    {
      title: "Average Score",
      value: "78%",
      growth: "+6.7%",
      subtitle: "from last contest",
      icon: <Trophy size={24} />,
      iconBg: "bg-blue-500/20",
      iconColor: "text-blue-400",
    },
    {
      title: "Completion Rate",
      value: "85%",
      growth: "+10.4%",
      subtitle: "from last contest",
      icon: <Target size={24} />,
      iconBg: "bg-orange-500/20",
      iconColor: "text-orange-400",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="
            bg-[#081528]
            border
            border-gray-800
            rounded-2xl
            p-5
            hover:border-blue-500/50
            transition-all
            duration-300
          "
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">{stat.title}</p>

              <h3 className="text-4xl font-bold mt-2">
                {stat.value}
              </h3>

              <div className="flex items-center gap-2 mt-3">
                <span className="text-green-400 text-sm font-medium">
                  ↑ {stat.growth}
                </span>

                <span className="text-gray-500 text-sm">
                  {stat.subtitle}
                </span>
              </div>
            </div>

            <div
              className={`
                h-16 w-16
                rounded-2xl
                flex
                items-center
                justify-center
                ${stat.iconBg}
                ${stat.iconColor}
              `}
            >
              {stat.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}