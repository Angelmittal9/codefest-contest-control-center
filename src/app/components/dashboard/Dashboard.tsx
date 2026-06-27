"use client";

import { useState } from "react";

import ContestCharts from "../ContestCharts";
import ContestInfo from "./ContestInfo";
import AuthGuard from "../AuthGuard";
import LeaderboardControls from "../leaderboard/LeaderboardControls";
import ContestTimer from "../ContestTimer";
import Podium from "../leaderboard/Podium";
import StatsCards from "../leaderboard/StatsCards";
import VerdictPieChart from "../VerdictPieChart";
import ActivityFeed from "../activities/ActivityFeed";
import Leaderboard from "../leaderboard/Leaderboard";
import RecentSubmissions from "../submissions/RecentSubmissions";

export default function Dashboard() {
  const [freezeMode, setFreezeMode] = useState(false);

  return (

      <div className="space-y-6">
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
        <div>
          <h1 className="text-4xl font-bold flex items-center gap-3">
            🏆 Leaderboard
          </h1>

          <p className="text-gray-400 mt-1">
            Track performance and rankings of participants
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => setFreezeMode(!freezeMode)}
            className={`px-5 py-2 rounded-xl font-medium transition-all duration-300
            ${
              freezeMode
                ? "bg-yellow-500 text-black hover:bg-yellow-400"
                : "bg-red-500 text-white hover:bg-red-400"
            }`}
          >
            {freezeMode ? "🔓 Unfreeze" : "🔒 Freeze"}
          </button>

          <div className="px-4 py-2 rounded-xl bg-[#081528] border border-gray-800">
            🟢 Live Updates
          </div>
        </div>
      </div>

      {/* FREEZE MODE ALERT */}
      {freezeMode && (
        <div className="bg-yellow-500/10 border border-yellow-500 text-yellow-400 rounded-2xl p-4">
          <div className="font-semibold text-lg">
            🔒 Leaderboard Frozen
          </div>

          <p className="text-sm mt-2">
            New submissions will continue appearing in the Submission
            Monitoring System, but leaderboard rankings will remain
            unchanged until freeze mode is disabled.
          </p>
        </div>
      )}

      {/* STATUS CARDS */}
      <div className="grid md:grid-cols-4 gap-4">
        <div className="bg-[#081528] border border-gray-800 rounded-2xl p-5">
          <p className="text-gray-400 text-sm">
            Contest Status
          </p>

          <h2 className="text-3xl font-bold text-green-400 mt-2">
            LIVE
          </h2>
        </div>

        <div className="bg-[#081528] border border-gray-800 rounded-2xl p-5">
          <p className="text-gray-400 text-sm">
            Leaderboard Status
          </p>

          <h2
            className={`text-3xl font-bold mt-2 ${
              freezeMode
                ? "text-yellow-400"
                : "text-green-400"
            }`}
          >
            {freezeMode ? "FROZEN" : "LIVE"}
          </h2>
        </div>

        <div className="bg-[#081528] border border-gray-800 rounded-2xl p-5">
          <p className="text-gray-400 text-sm">
            Active Participants
          </p>

          <h2 className="text-3xl font-bold mt-2">
            920
          </h2>
        </div>

        <div className="bg-[#081528] border border-gray-800 rounded-2xl p-5">
          <p className="text-gray-400 text-sm">
            Contest Progress
          </p>

          <h2 className="text-3xl font-bold mt-2">
            72%
          </h2>
        </div>
      </div>

      {/* TIMER */}
      <ContestTimer />

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        {/* LEFT */}
        <div className="xl:col-span-3 space-y-6">
          <StatsCards />

          <Podium />

          <LeaderboardControls />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <VerdictPieChart />
            <ContestCharts />
          </div>

          {/* LEADERBOARD CARD */}
          <div className="bg-[#081528] border border-gray-800 rounded-2xl p-5">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">
                Contest Rankings
              </h2>

              {freezeMode && (
                <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm">
                  Frozen
                </span>
              )}
            </div>

            <Leaderboard freezeMode={freezeMode} />
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          <ActivityFeed />

          <RecentSubmissions />

          <ContestInfo />
                </div>
      </div>
    </div>
  );
}
