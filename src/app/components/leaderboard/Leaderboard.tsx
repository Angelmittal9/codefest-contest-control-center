"use client";

interface LeaderboardProps {
  freezeMode: boolean;
}

const liveParticipants = [
  {
    rank: 1,
    name: "John",
    username: "@john_doe",
    department: "CSE",
    score: 980,
    solved: "14 / 15",
    trend: "+2",
    progress: 93,
    image: "https://i.pravatar.cc/100?img=12",
  },
  {
    rank: 2,
    name: "Sarah",
    username: "@sarah_23",
    department: "IT",
    score: 920,
    solved: "12 / 15",
    trend: "+1",
    progress: 80,
    image: "https://i.pravatar.cc/100?img=32",
  },
  {
    rank: 3,
    name: "Mike",
    username: "@mike_98",
    department: "CSE",
    score: 890,
    solved: "11 / 15",
    trend: "-1",
    progress: 73,
    image: "https://i.pravatar.cc/100?img=15",
  },
  {
    rank: 4,
    name: "David",
    username: "@david_07",
    department: "ECE",
    score: 850,
    solved: "10 / 15",
    trend: "0",
    progress: 66,
    image: "https://i.pravatar.cc/100?img=25",
  },
  {
    rank: 5,
    name: "Emma",
    username: "@emma_11",
    department: "IT",
    score: 815,
    solved: "10 / 15",
    trend: "+3",
    progress: 66,
    image: "https://i.pravatar.cc/100?img=44",
  },
];

const frozenParticipants = [
  {
    rank: 1,
    name: "Sarah",
    username: "@sarah_23",
    department: "IT",
    score: 920,
    solved: "12 / 15",
    trend: "0",
    progress: 80,
    image: "https://i.pravatar.cc/100?img=32",
  },
  {
    rank: 2,
    name: "John",
    username: "@john_doe",
    department: "CSE",
    score: 910,
    solved: "12 / 15",
    trend: "0",
    progress: 80,
    image: "https://i.pravatar.cc/100?img=12",
  },
  {
    rank: 3,
    name: "Mike",
    username: "@mike_98",
    department: "CSE",
    score: 890,
    solved: "11 / 15",
    trend: "0",
    progress: 73,
    image: "https://i.pravatar.cc/100?img=15",
  },
  {
    rank: 4,
    name: "David",
    username: "@david_07",
    department: "ECE",
    score: 850,
    solved: "10 / 15",
    trend: "0",
    progress: 66,
    image: "https://i.pravatar.cc/100?img=25",
  },
  {
    rank: 5,
    name: "Emma",
    username: "@emma_11",
    department: "IT",
    score: 815,
    solved: "10 / 15",
    trend: "0",
    progress: 66,
    image: "https://i.pravatar.cc/100?img=44",
  },
];

export default function Leaderboard({
  freezeMode,
}: LeaderboardProps) {
  const participants = freezeMode
    ? frozenParticipants
    : liveParticipants;

  return (
    <div className="bg-[#081528] rounded-2xl p-6 border border-gray-800">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">
          Leaderboard Rankings
        </h2>

        {freezeMode && (
          <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500 text-sm">
            🔒 Frozen Rankings
          </span>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-800 text-gray-400">
              <th className="text-left p-4">Rank</th>
              <th className="text-left p-4">Participant</th>
              <th className="text-left p-4">Department</th>
              <th className="text-left p-4">Score</th>
              <th className="text-left p-4">Solved</th>
              <th className="text-left p-4">Trend</th>
              <th className="text-left p-4">Progress</th>
            </tr>
          </thead>

          <tbody>
            {participants.map((user) => (
              <tr
                key={user.rank}
                className="border-b border-gray-800 hover:bg-white/5 transition"
              >
                <td className="p-4 font-bold">
                  {user.rank === 1
                    ? "🥇"
                    : user.rank === 2
                    ? "🥈"
                    : user.rank === 3
                    ? "🥉"
                    : user.rank}
                </td>

                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={user.image}
                      alt={user.name}
                      className="w-10 h-10 rounded-full"
                    />

                    <div>
                      <p className="font-medium">
                        {user.name}
                      </p>

                      <p className="text-sm text-gray-400">
                        {user.username}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="p-4">
                  {user.department}
                </td>

                <td className="p-4 text-green-400 font-bold">
                  {user.score}
                </td>

                <td className="p-4">
                  {user.solved}
                </td>

                <td
                  className={`p-4 font-semibold ${
                    user.trend.includes("-")
                      ? "text-red-400"
                      : user.trend === "0"
                      ? "text-gray-400"
                      : "text-green-400"
                  }`}
                >
                  {user.trend === "0"
                    ? "—"
                    : user.trend}
                </td>

                <td className="p-4 min-w-[180px]">
                  <div className="flex items-center gap-3">
                    <span className="text-sm w-10">
                      {user.progress}%
                    </span>

                    <div className="flex-1 bg-gray-800 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{
                          width: `${user.progress}%`,
                        }}
                      />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}