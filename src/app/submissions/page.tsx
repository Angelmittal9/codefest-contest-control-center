"use client";

import { useMemo, useState } from "react";
import {
  Search,
  FileText,
  CheckCircle,
  Clock,
  PlayCircle,
  XCircle,
  AlertTriangle,
} from "lucide-react";

const submissionsData = [
  {
    id: 1,
    participant: "John Doe",
    problem: "Array Rotation",
    language: "C++",
    verdict: "Accepted",
    time: "10:24 AM",
  },
  {
    id: 2,
    participant: "Sarah Wilson",
    problem: "Binary Search",
    language: "Python",
    verdict: "Wrong Answer",
    time: "10:26 AM",
  },
  {
    id: 3,
    participant: "Mike Ross",
    problem: "Graph Traversal",
    language: "Java",
    verdict: "Pending",
    time: "10:28 AM",
  },
  {
    id: 4,
    participant: "Emma Stone",
    problem: "Dynamic Programming",
    language: "C++",
    verdict: "Running",
    time: "10:29 AM",
  },
  {
    id: 5,
    participant: "David Kim",
    problem: "Binary Search",
    language: "Python",
    verdict: "Time Limit Exceeded",
    time: "10:31 AM",
  },
  {
    id: 6,
    participant: "Lisa Wong",
    problem: "Array Rotation",
    language: "Java",
    verdict: "Runtime Error",
    time: "10:34 AM",
  },
  {
    id: 7,
    participant: "Alex Johnson",
    problem: "Graph Traversal",
    language: "C++",
    verdict: "Accepted",
    time: "10:36 AM",
  },
  {
    id: 8,
    participant: "Kevin Lee",
    problem: "Dynamic Programming",
    language: "Python",
    verdict: "Accepted",
    time: "10:39 AM",
  },
];

export default function SubmissionsPage() {
  const [search, setSearch] = useState("");
  const [verdictFilter, setVerdictFilter] = useState("All");
  const [problemFilter, setProblemFilter] = useState("All");
  const [participantFilter, setParticipantFilter] =
    useState("All");

  const filteredData = useMemo(() => {
    return submissionsData.filter((submission) => {
      const matchesSearch =
        submission.participant
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        submission.problem
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesVerdict =
        verdictFilter === "All" ||
        submission.verdict === verdictFilter;

      const matchesProblem =
        problemFilter === "All" ||
        submission.problem === problemFilter;

      const matchesParticipant =
        participantFilter === "All" ||
        submission.participant === participantFilter;

      return (
        matchesSearch &&
        matchesVerdict &&
        matchesProblem &&
        matchesParticipant
      );
    });
  }, [
    search,
    verdictFilter,
    problemFilter,
    participantFilter,
  ]);

  const getVerdictBadge = (verdict: string) => {
    switch (verdict) {
      case "Accepted":
        return (
          <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">
            Accepted
          </span>
        );

      case "Wrong Answer":
        return (
          <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-sm">
            Wrong Answer
          </span>
        );

      case "Pending":
        return (
          <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-sm">
            Pending
          </span>
        );

      case "Running":
        return (
          <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm">
            Running
          </span>
        );

      case "Time Limit Exceeded":
        return (
          <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-sm">
            TLE
          </span>
        );

      default:
        return (
          <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-sm">
            Runtime Error
          </span>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold">
          📄 Submission Monitoring
        </h1>

        <p className="text-gray-400 mt-2">
          Monitor all contest submissions in real-time.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-4">
        <div className="bg-[#081528] border border-gray-800 rounded-2xl p-5">
          <FileText className="text-blue-400 mb-3" />
          <p className="text-gray-400">
            Total Submissions
          </p>
          <h2 className="text-3xl font-bold">
            {submissionsData.length}
          </h2>
        </div>

        <div className="bg-[#081528] border border-gray-800 rounded-2xl p-5">
          <CheckCircle className="text-green-400 mb-3" />
          <p className="text-gray-400">
            Accepted
          </p>
          <h2 className="text-3xl font-bold">
            {
              submissionsData.filter(
                (s) => s.verdict === "Accepted"
              ).length
            }
          </h2>
        </div>

        <div className="bg-[#081528] border border-gray-800 rounded-2xl p-5">
          <Clock className="text-yellow-400 mb-3" />
          <p className="text-gray-400">
            Pending
          </p>
          <h2 className="text-3xl font-bold">
            {
              submissionsData.filter(
                (s) => s.verdict === "Pending"
              ).length
            }
          </h2>
        </div>

        <div className="bg-[#081528] border border-gray-800 rounded-2xl p-5">
          <AlertTriangle className="text-red-400 mb-3" />
          <p className="text-gray-400">
            Failed
          </p>
          <h2 className="text-3xl font-bold">
            {
              submissionsData.filter(
                (s) => s.verdict !== "Accepted"
              ).length
            }
          </h2>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-[#081528] border border-gray-800 rounded-2xl p-5">
        <div className="grid lg:grid-cols-4 gap-4">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-3 top-3 text-gray-500"
            />

            <input
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search..."
              className="w-full pl-10 p-3 bg-[#0d1d35] border border-gray-700 rounded-lg"
            />
          </div>

          <select
            value={verdictFilter}
            onChange={(e) =>
              setVerdictFilter(e.target.value)
            }
            className="p-3 bg-[#0d1d35] border border-gray-700 rounded-lg"
          >
            <option>All</option>
            <option>Accepted</option>
            <option>Pending</option>
            <option>Running</option>
            <option>Wrong Answer</option>
            <option>Time Limit Exceeded</option>
            <option>Runtime Error</option>
          </select>

          <select
            value={problemFilter}
            onChange={(e) =>
              setProblemFilter(e.target.value)
            }
            className="p-3 bg-[#0d1d35] border border-gray-700 rounded-lg"
          >
            <option>All</option>
            <option>Array Rotation</option>
            <option>Binary Search</option>
            <option>Graph Traversal</option>
            <option>Dynamic Programming</option>
          </select>

          <select
            value={participantFilter}
            onChange={(e) =>
              setParticipantFilter(e.target.value)
            }
            className="p-3 bg-[#0d1d35] border border-gray-700 rounded-lg"
          >
            <option>All</option>
            <option>John Doe</option>
            <option>Sarah Wilson</option>
            <option>Mike Ross</option>
            <option>Emma Stone</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#081528] border border-gray-800 rounded-2xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#0d1d35]">
            <tr>
              <th className="p-4 text-left">
                Participant
              </th>
              <th className="p-4 text-left">
                Problem
              </th>
              <th className="p-4 text-left">
                Language
              </th>
              <th className="p-4 text-left">
                Verdict
              </th>
              <th className="p-4 text-left">
                Submission Time
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredData.map((submission) => (
              <tr
                key={submission.id}
                className="border-t border-gray-800 hover:bg-[#0d1d35]"
              >
                <td className="p-4">
                  {submission.participant}
                </td>

                <td className="p-4">
                  {submission.problem}
                </td>

                <td className="p-4">
                  {submission.language}
                </td>

                <td className="p-4">
                  {getVerdictBadge(
                    submission.verdict
                  )}
                </td>

                <td className="p-4">
                  {submission.time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}