"use client";

import { create } from "zustand";

interface Participant {
  id: number;
  name: string;
  username: string;
  department: string;
  score: number;
  solved: number;
  image: string;
}

interface Submission {
  id: number;
  user: string;
  problem: string;
  verdict: string;
  time: string;
}

interface ContestStore {
  participants: Participant[];
  submissions: Submission[];
  rejudgeSubmission: (
    submissionId: number,
    verdict: string
  ) => void;
}

export const useContestStore = create<ContestStore>(
  (set) => ({
    participants: [
      {
        id: 1,
        name: "John",
        username: "@john_doe",
        department: "CSE",
        score: 980,
        solved: 14,
        image: "https://i.pravatar.cc/150?img=12",
      },
      {
        id: 2,
        name: "Sarah",
        username: "@sarah_23",
        department: "IT",
        score: 920,
        solved: 12,
        image: "https://i.pravatar.cc/150?img=32",
      },
      {
        id: 3,
        name: "Mike",
        username: "@mike_98",
        department: "CSE",
        score: 890,
        solved: 11,
        image: "https://i.pravatar.cc/150?img=15",
      },
    ],

    submissions: [
      {
        id: 1,
        user: "John",
        problem: "A",
        verdict: "Accepted",
        time: "10:15",
      },
      {
        id: 2,
        user: "Sarah",
        problem: "B",
        verdict: "Wrong Answer",
        time: "10:16",
      },
    ],

    rejudgeSubmission: (submissionId, verdict) =>
      set((state) => {
        const submissions = state.submissions.map(
          (s) =>
            s.id === submissionId
              ? { ...s, verdict }
              : s
        );

        return { submissions };
      }),
  })
);