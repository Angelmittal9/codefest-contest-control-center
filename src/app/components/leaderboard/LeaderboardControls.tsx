"use client";

import { Search, Download } from "lucide-react";

export default function LeaderboardControls() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mb-6">

      {/* Search Bar */}
      <div className="relative w-full lg:flex-1">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search participants..."
          className="
            w-full
            bg-[#081528]
            border
            border-gray-700
            rounded-xl
            py-3
            pl-11
            pr-4
            text-white
            placeholder-gray-500
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            transition-all
          "
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">

        <select
          className="
            bg-[#081528]
            border
            border-gray-700
            rounded-xl
            px-4
            py-3
            text-white
            cursor-pointer
          "
        >
          <option>Department</option>
          <option>CSE</option>
          <option>IT</option>
          <option>ECE</option>
        </select>

        <select
          className="
            bg-[#081528]
            border
            border-gray-700
            rounded-xl
            px-4
            py-3
            text-white
            cursor-pointer
          "
        >
          <option>Sort By</option>
          <option>Highest Score</option>
          <option>Lowest Score</option>
          <option>Most Improved</option>
        </select>

        <button
          className="
            flex
            items-center
            gap-2
            bg-blue-600
            hover:bg-blue-700
            px-5
            py-3
            rounded-xl
            font-medium
            transition-all
          "
        >
          <Download size={18} />
          Export CSV
        </button>

      </div>
    </div>
  );
}