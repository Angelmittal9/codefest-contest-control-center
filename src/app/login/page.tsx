"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Mock Credentials
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("isLoggedIn", "true");
      router.push("/");
    } else {
      setError("Invalid Username or Password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020817]">
      <div className="w-full max-w-md bg-[#081528] border border-slate-700 rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-white text-center mb-2">
          CodeFest
        </h1>

        <p className="text-slate-400 text-center mb-8">
          Contest Control Center
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="text-sm text-slate-300 block mb-2">
              Username
            </label>

            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-[#0F1C33] border border-slate-600 rounded-lg px-4 py-3 text-white outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <label className="text-sm text-slate-300 block mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#0F1C33] border border-slate-600 rounded-lg px-4 py-3 text-white outline-none focus:border-purple-500"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center text-slate-400 text-sm">
          Demo Credentials:
          <br />
          Username: admin
          <br />
          Password: admin123
        </div>
      </div>
    </div>
  );
}