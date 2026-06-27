export default function RecentSubmissions() {
  const submissions = [
    {
      user: "Angel",
      problem: "A",
      verdict: "Accepted",
      time: "10:15",
    },
    {
      user: "Rahul",
      problem: "B",
      verdict: "Wrong Answer",
      time: "10:16",
    },
    {
      user: "Priya",
      problem: "C",
      verdict: "Accepted",
      time: "10:18",
    },
    {
      user: "Arjun",
      problem: "D",
      verdict: "Time Limit Exceeded",
      time: "10:20",
    },
  ];

  return (
    <div className="bg-gray-900 rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-4">
        Recent Submissions
      </h2>

      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-700 text-left">
            <th className="py-3">User</th>
            <th>Problem</th>
            <th>Verdict</th>
            <th>Time</th>
          </tr>
        </thead>

        <tbody>
          {submissions.map((submission, index) => (
            <tr
              key={index}
              className="border-b border-gray-800"
            >
              <td className="py-3">{submission.user}</td>
              <td>{submission.problem}</td>
              <td>{submission.verdict}</td>
              <td
  className={
    submission.verdict === "Accepted"
      ? "text-green-400"
      : submission.verdict === "Wrong Answer"
      ? "text-red-400"
      : "text-yellow-400"
  }
>
  {submission.verdict}
</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}