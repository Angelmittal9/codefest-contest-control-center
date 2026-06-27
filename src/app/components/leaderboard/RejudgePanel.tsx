"use client";

import { useContestStore } from "../../store/contestStore";

export default function RejudgePanel() {
  const { submissions, rejudgeSubmission } = useContestStore();

  return (
    <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-700">
      <h2 className="text-2xl font-bold mb-6">
        Rejudge System
      </h2>

      <div className="space-y-4">
        {submissions.map((submission: any) => (
          <div
            key={submission.id}
            className="bg-zinc-800 p-4 rounded-lg flex items-center justify-between"
          >
            <div>
              <h3 className="font-semibold text-lg">
                {submission.user}
              </h3>

              <p className="text-sm text-zinc-400">
                Problem {submission.problem}
              </p>

              <p className="text-sm text-zinc-500">
                {submission.time}
              </p>

              <span
                className={`inline-block mt-2 px-3 py-1 rounded text-sm font-medium ${
                  submission.verdict === "Accepted"
                    ? "bg-green-500/20 text-green-400"
                    : submission.verdict === "Wrong Answer"
                    ? "bg-red-500/20 text-red-400"
                    : "bg-yellow-500/20 text-yellow-400"
                }`}
              >
                {submission.verdict}
              </span>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() =>
                  rejudgeSubmission(
                    submission.id,
                    "Accepted"
                  )
                }
                className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-lg transition"
              >
                AC
              </button>

              <button
                onClick={() =>
                  rejudgeSubmission(
                    submission.id,
                    "Wrong Answer"
                  )
                }
                className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-lg transition"
              >
                WA
              </button>

              <button
                onClick={() =>
                  rejudgeSubmission(
                    submission.id,
                    "Time Limit Exceeded"
                  )
                }
                className="bg-yellow-600 hover:bg-yellow-500 px-4 py-2 rounded-lg transition"
              >
                TLE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}