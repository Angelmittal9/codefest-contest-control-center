"use client";

import { useMemo, useState } from "react";
import {
  Search,
  Users,
  Trophy,
  CheckCircle,
} from "lucide-react";

const allParticipants = [
  {
    rank: 1,
    name: "John Doe",
    institution: "MIT",
    solved: 14,
    penalty: 120,
    status: "Active",
  },
  {
    rank: 2,
    name: "Sarah Wilson",
    institution: "Stanford",
    solved: 12,
    penalty: 150,
    status: "Active",
  },
  {
    rank: 3,
    name: "Mike Ross",
    institution: "Harvard",
    solved: 11,
    penalty: 180,
    status: "Active",
  },
  {
    rank: 24,
    name: "Emma Stone",
    institution: "MIT",
    solved: 7,
    penalty: 340,
    status: "Active",
  },
  {
    rank: 48,
    name: "David Kim",
    institution: "Oxford",
    solved: 5,
    penalty: 420,
    status: "Inactive",
  },
  {
    rank: 76,
    name: "Alex Johnson",
    institution: "Stanford",
    solved: 4,
    penalty: 550,
    status: "Active",
  },
  {
    rank: 102,
    name: "Lisa Wong",
    institution: "Harvard",
    solved: 3,
    penalty: 640,
    status: "Inactive",
  },
  {
    rank: 140,
    name: "Kevin Lee",
    institution: "MIT",
    solved: 2,
    penalty: 710,
    status: "Active",
  },
];

export default function ParticipantsPage() {
  const [search, setSearch] = useState("");
  const [institution, setInstitution] = useState("All");
  const [status, setStatus] = useState("All");
  const [rankFilter, setRankFilter] = useState(false);
  const [solvedFilter, setSolvedFilter] = useState(false);
  const [sortBy, setSortBy] = useState("rank");
  const [page, setPage] = useState(1);

  const pageSize = 5;

  const filteredParticipants = useMemo(() => {
    let data = [...allParticipants];

    if (search) {
      data = data.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (institution !== "All") {
      data = data.filter(
        (p) => p.institution === institution
      );
    }

    if (status !== "All") {
      data = data.filter((p) => p.status === status);
    }

    if (rankFilter) {
      data = data.filter((p) => p.rank < 50);
    }

    if (solvedFilter) {
      data = data.filter((p) => p.solved > 3);
    }

    data.sort((a, b) => {
      if (sortBy === "rank") return a.rank - b.rank;
      if (sortBy === "solved")
        return b.solved - a.solved;
      if (sortBy === "penalty")
        return a.penalty - b.penalty;
      return 0;
    });

    return data;
  }, [
    search,
    institution,
    status,
    rankFilter,
    solvedFilter,
    sortBy,
  ]);

  const totalPages = Math.ceil(
    filteredParticipants.length / pageSize
  );

  const paginatedData = filteredParticipants.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold">
          👥 Participant Management
        </h1>

        <p className="text-gray-400 mt-2">
          Search, filter and manage contest participants.
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-[#081528] border border-gray-800 rounded-2xl p-5">
          <Users className="text-blue-400 mb-3" />
          <p className="text-gray-400">
            Total Participants
          </p>
          <h2 className="text-3xl font-bold">
            {allParticipants.length}
          </h2>
        </div>

        <div className="bg-[#081528] border border-gray-800 rounded-2xl p-5">
          <Trophy className="text-yellow-400 mb-3" />
          <p className="text-gray-400">
            Top 50 Ranked
          </p>
          <h2 className="text-3xl font-bold">
            {
              allParticipants.filter(
                (p) => p.rank < 50
              ).length
            }
          </h2>
        </div>

        <div className="bg-[#081528] border border-gray-800 rounded-2xl p-5">
          <CheckCircle className="text-green-400 mb-3" />
          <p className="text-gray-400">
            Active Participants
          </p>
          <h2 className="text-3xl font-bold">
            {
              allParticipants.filter(
                (p) => p.status === "Active"
              ).length
            }
          </h2>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-[#081528] border border-gray-800 rounded-2xl p-5">
        <div className="grid lg:grid-cols-5 gap-4">
          <div className="relative">
            <Search
              className="absolute left-3 top-3 text-gray-500"
              size={18}
            />

            <input
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search participant..."
              className="w-full pl-10 p-3 rounded-lg bg-[#0d1d35] border border-gray-700"
            />
          </div>

          <select
            value={institution}
            onChange={(e) =>
              setInstitution(e.target.value)
            }
            className="p-3 rounded-lg bg-[#0d1d35] border border-gray-700"
          >
            <option>All</option>
            <option>MIT</option>
            <option>Stanford</option>
            <option>Harvard</option>
            <option>Oxford</option>
          </select>

          <select
            value={status}
            onChange={(e) =>
              setStatus(e.target.value)
            }
            className="p-3 rounded-lg bg-[#0d1d35] border border-gray-700"
          >
            <option>All</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>

          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value)
            }
            className="p-3 rounded-lg bg-[#0d1d35] border border-gray-700"
          >
            <option value="rank">Sort by Rank</option>
            <option value="solved">
              Sort by Solved
            </option>
            <option value="penalty">
              Sort by Penalty
            </option>
          </select>

          <div className="flex gap-4 items-center">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={rankFilter}
                onChange={() =>
                  setRankFilter(!rankFilter)
                }
              />
              Rank &lt; 50
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={solvedFilter}
                onChange={() =>
                  setSolvedFilter(!solvedFilter)
                }
              />
              Solved &gt; 3
            </label>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#081528] border border-gray-800 rounded-2xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#0d1d35]">
            <tr>
              <th className="p-4 text-left">Rank</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">
                Institution
              </th>
              <th className="p-4 text-left">
                Solved
              </th>
              <th className="p-4 text-left">
                Penalty
              </th>
              <th className="p-4 text-left">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {paginatedData.map((p) => (
              <tr
                key={p.rank}
                className="border-t border-gray-800 hover:bg-[#0d1d35]"
              >
                <td className="p-4">#{p.rank}</td>
                <td className="p-4">{p.name}</td>
                <td className="p-4">
                  {p.institution}
                </td>
                <td className="p-4">{p.solved}</td>
                <td className="p-4">
                  {p.penalty}
                </td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      p.status === "Active"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {p.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end gap-2">
        <button
          disabled={page === 1}
          onClick={() =>
            setPage((prev) => prev - 1)
          }
          className="px-4 py-2 bg-[#081528] rounded-lg border border-gray-800"
        >
          Previous
        </button>

        <span className="px-4 py-2">
          {page} / {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() =>
            setPage((prev) => prev + 1)
          }
          className="px-4 py-2 bg-[#081528] rounded-lg border border-gray-800"
        >
          Next
        </button>
      </div>
    </div>
  );
}