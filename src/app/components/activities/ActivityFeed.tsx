export default function ActivityFeed() {
  const activities = [
    {
      time: "10:30 AM",
      event: "Leaderboard unfrozen",
    },
    {
      time: "10:28 AM",
      event: "Submission judged",
    },
    {
      time: "10:25 AM",
      event: "Submission received",
    },
    {
      time: "10:20 AM",
      event: "New participant joined",
    },
    {
      time: "10:15 AM",
      event: "Leaderboard frozen",
    },
  ];
  const getBadge = (event: string) => {
  if (event.includes("joined")) return "🟢";
  if (event.includes("received")) return "📨";
  if (event.includes("judged")) return "⚖️";
  if (event.includes("unfrozen")) return "🔓";
  if (event.includes("frozen")) return "🔒";
  return "📌";
};

  return (
    <div className="bg-gray-900 rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-4">
        Activity Feed
      </h2>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="border-l-4 border-blue-500 pl-4 py-2"
          >
            <p className="font-medium">
  {getBadge(activity.event)} {activity.event}
</p>

            <p className="text-sm text-gray-400">
              {activity.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}