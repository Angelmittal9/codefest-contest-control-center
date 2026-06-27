"use client";

const winners = [
  {
    rank: 2,
    name: "Sarah",
    username: "@sarah_23",
    score: 920,
    solved: 12,
    image: "https://i.pravatar.cc/150?img=32",
  },
  {
    rank: 1,
    name: "John",
    username: "@john_doe",
    score: 980,
    solved: 14,
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    rank: 3,
    name: "Mike",
    username: "@mike_98",
    score: 890,
    solved: 11,
    image: "https://i.pravatar.cc/150?img=15",
  },
];

export default function Podium() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {winners.map((user) => (
        <div
          key={user.rank}
          className={`
            relative
            bg-[#081528]
            rounded-2xl
            p-6
            border
            transition-all
            duration-300
            hover:scale-[1.02]
            ${
              user.rank === 1
                ? "border-yellow-500 shadow-lg shadow-yellow-500/10"
                : "border-gray-800"
            }
          `}
        >
          <div className="text-4xl text-center mb-3">
            {user.rank === 1 && "🥇"}
            {user.rank === 2 && "🥈"}
            {user.rank === 3 && "🥉"}
          </div>

          <img
            src={user.image}
            alt={user.name}
            className="w-20 h-20 rounded-full mx-auto border-2 border-gray-700"
          />

          <h3 className="text-xl font-bold text-center mt-4">
            {user.name}
          </h3>

          <p className="text-center text-gray-400 text-sm">
            {user.username}
          </p>

          <div className="text-center mt-4">
            <p className="text-gray-400 text-sm">Score</p>

            <h2
              className={`text-4xl font-bold ${
                user.rank === 1
                  ? "text-yellow-400"
                  : "text-white"
              }`}
            >
              {user.score}
            </h2>
          </div>

          <p className="text-center text-green-400 mt-3">
            ✓ Solved {user.solved} problems
          </p>
        </div>
      ))}
    </div>
  );
}