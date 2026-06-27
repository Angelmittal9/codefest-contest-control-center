export default function ProblemsPage() {
  const problems = [
    {
      title: "Array Rotation",
      difficulty: "Easy",
      solves: 845,
    },
    {
      title: "Binary Search Tree",
      difficulty: "Medium",
      solves: 510,
    },
    {
      title: "Dynamic Programming",
      difficulty: "Hard",
      solves: 201,
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-white">
          💻 Problems
        </h1>

        <p className="text-gray-400 mt-2">
          Contest problem set overview.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {problems.map((problem) => (
          <div
            key={problem.title}
            className="bg-[#0d1d35] border border-gray-800 rounded-2xl p-6"
          >
            <h2 className="text-xl font-semibold text-white">
              {problem.title}
            </h2>

            <p className="text-gray-400 mt-2">
              Difficulty: {problem.difficulty}
            </p>

            <p className="mt-4">
              Solved by {problem.solves} users
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}