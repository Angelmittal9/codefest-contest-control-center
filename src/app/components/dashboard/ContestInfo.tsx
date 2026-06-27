"use client";

import {
  Calendar,
  Clock,
  Users,
  Trophy,
} from "lucide-react";

export default function ContestInfo() {
  return (
    <div className="bg-[#081528] border border-gray-800 rounded-2xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        Contest Info
      </h2>

      <div className="space-y-5">

        <div className="flex items-center gap-3">
          <Trophy className="text-blue-400" />
          <div>
            <p className="text-gray-400 text-sm">
              Contest Name
            </p>
            <p className="font-medium">
              CodeFest 2025
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Calendar className="text-green-400" />
          <div>
            <p className="text-gray-400 text-sm">
              Start Date
            </p>
            <p className="font-medium">
              May 24, 2025
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Clock className="text-yellow-400" />
          <div>
            <p className="text-gray-400 text-sm">
              Duration
            </p>
            <p className="font-medium">
              4 Hours
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Users className="text-purple-400" />
          <div>
            <p className="text-gray-400 text-sm">
              Participants
            </p>
            <p className="font-medium">
              1,250
            </p>
          </div>
        </div>

      </div>

      <button
        className="
          mt-6
          w-full
          bg-blue-600
          hover:bg-blue-700
          py-3
          rounded-xl
          font-medium
          transition
        "
      >
        View Contest Details →
      </button>

    </div>
  );
}