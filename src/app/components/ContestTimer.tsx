"use client";

import { useEffect, useState } from "react";

export default function ContestTimer() {
  const [timeLeft, setTimeLeft] = useState(3 * 60 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="bg-gray-900 rounded-xl p-6">
      <h2 className="text-xl font-bold mb-2">
        Contest Timer
      </h2>

      <div className="text-4xl font-bold text-green-400">
        {String(hours).padStart(2, "0")}:
        {String(minutes).padStart(2, "0")}:
        {String(seconds).padStart(2, "0")}
      </div>

      <p className="text-gray-400 mt-2">
        Contest Ends Soon
      </p>
    </div>
  );
}