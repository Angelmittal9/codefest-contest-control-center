import {
  Users,
  Trophy,
  Activity,
  Target,
} from "lucide-react";

export default function AnalyticsPage() {
  const stats = [
    {
      title: "Participants",
      value: "1250",
      icon: Users,
    },
    {
      title: "Problems",
      value: "15",
      icon: Trophy,
    },
    {
      title: "Submissions",
      value: "8450",
      icon: Activity,
    },
    {
      title: "Acceptance Rate",
      value: "67%",
      icon: Target,
    },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-white">
        📈 Analytics
      </h1>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="bg-[#0d1d35] border border-gray-800 rounded-2xl p-6"
            >
              <Icon className="text-purple-500 mb-4" />

              <p className="text-gray-400">
                {stat.title}
              </p>

              <h2 className="text-3xl font-bold mt-2">
                {stat.value}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}