"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  Users,
  Trophy,
  FileText,
  CheckCircle,
  XCircle,
  Activity,
  Clock3,
  TrendingUp,
  Download,
  Shield,
  UserPlus,
} from "lucide-react";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";
const defaultParticipants = [
  { name: "John", score: 980 },
  { name: "Sarah", score: 920 },
  { name: "Mike", score: 890 },
];

const defaultActivities = [
  {
    title: "John solved Problem E",
    time: "2 min ago",
  },
  {
    title: "Sarah entered Top 10",
    time: "4 min ago",
  },
  {
    title: "Submission rejudged",
    time: "8 min ago",
  },
];
const chartData = [
  { day: "Mon", submissions: 1200 },
  { day: "Tue", submissions: 1800 },
  { day: "Wed", submissions: 2400 },
  { day: "Thu", submissions: 2100 },
  { day: "Fri", submissions: 3200 },
  { day: "Sat", submissions: 4100 },
];

export default function OverviewPage() {
  const router = useRouter();

  const [isFrozen, setIsFrozen] = useState(false);

const [participants, setParticipants] =
  useState(defaultParticipants);

const [activities, setActivities] =
  useState(defaultActivities);


  const [timeLeft, setTimeLeft] = useState({
  hours: 2,
  minutes: 58,
  seconds: 34,
});
const [lastAction, setLastAction] =
  useState<string | null>(null);

const [isTimerRunning, setIsTimerRunning] =
  useState(true);

const [mounted, setMounted] = useState(false);

  useEffect(() => {
  if (!isTimerRunning) return;

  const timer = setInterval(() => {
    setTimeLeft((prev) => {
      let { hours, minutes, seconds } = prev;

      if (
        hours === 0 &&
        minutes === 0 &&
        seconds === 0
      ) {
        return prev;
      }

      if (seconds > 0) {
        seconds--;
      } else if (minutes > 0) {
        minutes--;
        seconds = 59;
      } else if (hours > 0) {
        hours--;
        minutes = 59;
        seconds = 59;
      }

      return {
        hours,
        minutes,
        seconds,
      };
    });
  }, 1000);

  return () => clearInterval(timer);
}, [isTimerRunning]);
useEffect(() => {
  setMounted(true);

  const savedFrozen =
    localStorage.getItem("isFrozen");

  const savedParticipants =
    localStorage.getItem("participants");

  const savedActivities =
    localStorage.getItem("activities");

  if (savedFrozen) {
    setIsFrozen(JSON.parse(savedFrozen));
  }

  if (savedParticipants) {
    setParticipants(JSON.parse(savedParticipants));
  }

  if (savedActivities) {
    setActivities(JSON.parse(savedActivities));
  }
}, []);
  const addActivity = (message: string) => {
    setActivities((prev) => [
      {
        title: message,
        time: "Just now",
      },
      ...prev,
    ]);
  };

  const handleFreeze = () => {
    const nextState = !isFrozen;

    setIsFrozen(nextState);

    addActivity(
      nextState
        ? "Leaderboard Frozen"
        : "Leaderboard Unfrozen"
    );
  };

  const handleRejudge = () => {
  setLastAction("Submission verdict changed AC → WA");

  addActivity(
    "Submission Rejudged (AC → WA)"
  );
};

  const handleExportCSV = () => {
    const csv =
      "Name,Score\n" +
      participants
        .map((p) => `${p.name},${p.score}`)
        .join("\n");

    const blob = new Blob([csv], {
      type: "text/csv",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = "leaderboard.csv";
    a.click();

    URL.revokeObjectURL(url);

    addActivity("Leaderboard Exported");
  };

  const handleAddUser = () => {
    const id = participants.length + 1;

    const newUser = {
      name: `User ${id}`,
      score: Math.floor(Math.random() * 1000),
    };

    setParticipants((prev) => [...prev, newUser]);

    addActivity(`${newUser.name} Joined Contest`);
  };

  const stats = [
    {
      title: "Participants",
      value: participants.length,
      trend: "+12%",
      icon: Users,
      color: "text-green-400",
    },
    {
      title: "Problems",
      value: "15",
      trend: "+3",
      icon: Trophy,
      color: "text-yellow-400",
    },
    {
      title: "Submissions",
      value: "12,528",
      trend: "+328",
      icon: FileText,
      color: "text-blue-400",
    },
    {
      title: "Accepted",
      value: "5,220",
      trend: "41.6%",
      icon: CheckCircle,
      color: "text-emerald-400",
    },
    {
      title: "Rejected",
      value: "7,308",
      trend: "58.4%",
      icon: XCircle,
      color: "text-red-400",
    },
    {
      title: "Status",
      value: isFrozen ? "FROZEN" : "LIVE",
      trend: "Running",
      icon: Activity,
      color: "text-purple-400",
    },
  ];
  const handleUndoRejudge = () => {
  if (!lastAction) return;

  addActivity(
    "Rejudge Reverted (WA → AC)"
  );

  setLastAction(null);
};
  useEffect(() => {
  localStorage.setItem(
    "participants",
    JSON.stringify(participants)
  );
}, [participants]);

useEffect(() => {
  localStorage.setItem(
    "activities",
    JSON.stringify(activities)
  );
}, [activities]);

useEffect(() => {
  localStorage.setItem(
    "isFrozen",
    JSON.stringify(isFrozen)
  );
}, [isFrozen]);
  return (
    <div className="space-y-8">
      {/* HERO */}
      <div className="bg-[#081528] border border-gray-800 rounded-3xl p-8">
        <div className="flex flex-col lg:flex-row justify-between gap-6">
          <div>
            <h1 className="text-5xl font-extrabold">
              Contest Control Center
            </h1>

            <p className="text-gray-400 mt-3 text-lg">
              CodeFest Summer Challenge 2025
            </p>
          </div>

          <div className="flex gap-4 flex-wrap">
            <div className="bg-green-500/20 border border-green-500/30 px-5 py-3 rounded-full text-green-400 font-semibold">
              ● LIVE CONTEST
            </div>

            <div className="bg-purple-500/20 border border-purple-500/30 px-5 py-3 rounded-full text-purple-300 font-semibold">
              72% Complete
            </div>
          </div>
        </div>
      </div>

      {/* KPI */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-6 gap-5">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="bg-[#081528] border border-gray-800 rounded-2xl p-6 hover:border-purple-500 transition-all duration-300"
            >
              <div className="flex justify-between items-center">
                <Icon size={28} className={item.color} />

                <div className="flex items-center gap-1 text-green-400 text-xs">
                  <TrendingUp size={14} />
                  {item.trend}
                </div>
              </div>

              <p className="text-gray-400 mt-5 text-sm">
                {item.title}
              </p>

              <h3 className="text-3xl font-bold mt-2">
                {item.value}
              </h3>
            </div>
          );
        })}
      </div>

      {/* PROGRESS + TIMER */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-[#081528] border border-gray-800 rounded-2xl p-7">
          <h2 className="text-2xl font-bold mb-6">
            Contest Progress
          </h2>

          <div className="w-full bg-gray-800 rounded-full h-5">
            <div className="bg-green-500 h-5 rounded-full w-[72%]" />
          </div>

          <div className="grid grid-cols-3 mt-8">
            <div>
              <p className="text-gray-400">Completion</p>
              <p className="text-3xl font-bold mt-1">72%</p>
            </div>

            <div>
              <p className="text-gray-400">Active Users</p>
              <p className="text-3xl font-bold mt-1">920</p>
            </div>

            <div>
              <p className="text-gray-400">Solved Problems</p>
              <p className="text-3xl font-bold mt-1">8,942</p>
            </div>
          </div>
        </div>

        <div className="bg-[#081528] border border-gray-800 rounded-2xl p-7">
          <div className="flex items-center gap-3 mb-5">
            <Clock3 className="text-green-400" />

            <h2 className="text-2xl font-bold">
              Live Timer
            </h2>
          </div>

          <div className="text-center">
            <div className="text-6xl font-extrabold text-green-400">
              {String(timeLeft.hours).padStart(2, "0")}:
              {String(timeLeft.minutes).padStart(2, "0")}:
              {String(timeLeft.seconds).padStart(2, "0")}
            </div>

            <p className="text-gray-400 mt-4 text-lg">
              Contest Ends In
            </p>

            <div className="mt-6 flex justify-center gap-3">
  <button
    onClick={() => setIsTimerRunning(true)}
    className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded-full font-medium transition"
  >
    Start
  </button>

  <button
    onClick={() => setIsTimerRunning(false)}
    className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-full font-medium transition"
  >
    Pause
  </button>
  
</div>

<div className="mt-4">
  <span
    className={`px-4 py-2 rounded-full text-sm font-medium ${
      isTimerRunning
        ? "bg-green-500/20 text-green-400"
        : "bg-yellow-500/20 text-yellow-400"
    }`}
  >
    {isTimerRunning
      ? "Timer Running"
      : "Timer Paused"}
  </span>
</div>
          </div>
        </div>
      </div>

      {/* CHART + FEED */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-[#081528] border border-gray-800 rounded-2xl p-7">
          <h2 className="text-2xl font-bold mb-5">
            Submission Analytics
          </h2>

          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <XAxis dataKey="day" />
                <Tooltip />
                <Area
                  dataKey="submissions"
                  stroke="#8b5cf6"
                  fill="#8b5cf6"
                  fillOpacity={0.25}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-[#081528] border border-gray-800 rounded-2xl p-7">
          <h2 className="text-2xl font-bold mb-5">
            Activity Feed
          </h2>

          <div className="space-y-4 max-h-[320px] overflow-y-auto">
            {activities.map((item, index) => (
              <div
                key={index}
                className="bg-[#0d1d35] border border-gray-800 rounded-xl p-4"
              >
                <p className="font-medium">
                  {item.title}
                </p>

                <span className="text-sm text-gray-500">
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TOP PARTICIPANTS + QUICK ACTIONS */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-[#081528] border border-gray-800 rounded-2xl p-7">
          <h2 className="text-2xl font-bold mb-5">
            Top Participants
          </h2>

          <div className="space-y-4">
            {participants.slice(0, 3).map((user, index) => (
              <div
                key={user.name}
                className="bg-[#0d1d35] border border-gray-800 rounded-xl p-4 flex justify-between items-center"
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">
                    {index === 0
                      ? "🥇"
                      : index === 1
                      ? "🥈"
                      : "🥉"}
                  </span>

                  <div>
                    <p className="font-bold text-lg">
                      {user.name}
                    </p>

                    <p className="text-gray-400 text-sm">
                      Contest Participant
                    </p>
                  </div>
                </div>

                <p className="text-xl font-bold">
                  {user.score}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-[#081528] border border-gray-800 rounded-2xl p-7">
  <h2 className="text-2xl font-bold mb-5">
    Quick Actions
  </h2>

  <div className="grid grid-cols-2 gap-4">
    <button
      onClick={handleFreeze}
      className={`p-5 rounded-xl font-semibold transition ${
        isFrozen
          ? "bg-red-600 hover:bg-red-700"
          : "bg-purple-600 hover:bg-purple-700"
      }`}
    >
      {isFrozen
        ? "Unfreeze Leaderboard"
        : "Freeze Leaderboard"}
    </button>

    <button
      onClick={handleRejudge}
      className="bg-blue-600 hover:bg-blue-700 p-5 rounded-xl font-semibold transition"
    >
      Rejudge
    </button>

    <button
      onClick={handleExportCSV}
      className="bg-green-600 hover:bg-green-700 p-5 rounded-xl font-semibold transition"
    >
      Export CSV
    </button>

    <button
      onClick={handleAddUser}
      className="bg-orange-600 hover:bg-orange-700 p-5 rounded-xl font-semibold transition"
    >
      Add User
    </button>
  </div>

  {lastAction && (
    <button
      onClick={handleUndoRejudge}
      className="
        w-full
        mt-4
        bg-yellow-600
        hover:bg-yellow-700
        p-4
        rounded-xl
        font-semibold
        transition
      "
    >
      Undo Last Rejudge
    </button>
  )}

  <div className="mt-5 p-4 bg-[#0d1d35] rounded-xl border border-gray-800">
    <p className="text-gray-400 text-sm">
      Leaderboard Status
    </p>

    <p
      className={`font-bold mt-2 ${
        isFrozen
          ? "text-red-400"
          : "text-green-400"
      }`}
    >
      {isFrozen
        ? "Frozen"
        : "Active"}
    </p>
  </div>

  {lastAction && (
    <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
      <p className="text-yellow-400 text-sm">
        Last Action
      </p>

      <p className="font-medium mt-1">
        {lastAction}
      </p>
    </div>
  )}
</div>
      </div>
      
    </div>
  );
}