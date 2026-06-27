"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { useTheme } from "../ThemeContext";

import {
  LayoutDashboard,
  Trophy,
  Users,
  FileText,
  Code2,
  BarChart3,
  Settings,
  Home,
  Moon,
  Sun,
  Menu,
  ChevronLeft,
  RefreshCw,
  LogOut,
} from "lucide-react";

const menuItems = [
  { name: "Overview", href: "/", icon: Home },
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Leaderboard", href: "/leaderboard", icon: Trophy },
  { name: "Participants", href: "/participants", icon: Users },
  { name: "Submissions", href: "/submissions", icon: FileText },
  { name: "Problems", href: "/problems", icon: Code2 },
  { name: "Rejudge", href: "/rejudge", icon: RefreshCw },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  const [collapsed, setCollapsed] = useState(false);

  const { theme, toggleTheme } = useTheme();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/login";
  };

  return (
    <aside
      className={`
        h-screen
        bg-[#081528]/95
        backdrop-blur-xl
        border-r
        border-gray-800
        flex
        flex-col
        shrink-0
        transition-all
        duration-300
        ${collapsed ? "w-20" : "w-72"}
      `}
    >
      {/* HEADER */}
      <div className="p-6 border-b border-gray-800">
        <div
          className={`flex items-center ${
            collapsed ? "justify-center" : "justify-between"
          }`}
        >
          {!collapsed && (
            <h1 className="text-3xl font-bold flex items-center gap-2 text-white">
              <span className="text-purple-500 drop-shadow-[0_0_12px_#8b5cf6]">
                &lt;/&gt;
              </span>
              CodeFest
            </h1>
          )}

          {collapsed && (
            <div className="text-purple-500 text-2xl font-bold">
              &lt;/&gt;
            </div>
          )}

          <button
            onClick={() => setCollapsed(!collapsed)}
            className={`
              h-9
              w-9
              flex
              items-center
              justify-center
              rounded-lg
              border
              border-gray-700
              bg-white/5
              hover:bg-white/10
              transition-all
              text-white
              ${collapsed ? "absolute top-6 right-5" : ""}
            `}
          >
            {collapsed ? (
              <Menu size={18} />
            ) : (
              <ChevronLeft size={18} />
            )}
          </button>
        </div>
      </div>

      {/* NAVIGATION */}
      <div className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`
                flex
                items-center
                ${collapsed ? "justify-center" : "gap-3"}
                px-4
                py-3
                rounded-xl
                transition-all
                duration-300
                hover:translate-x-1
                ${
                  active
                    ? "bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white shadow-lg shadow-purple-900/30"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                }
              `}
            >
              <Icon size={20} />

              {!collapsed && (
                <span className="text-[15px] font-medium">
                  {item.name}
                </span>
              )}
            </Link>
          );
        })}
      </div>

      {/* USER SECTION */}
      <div className="p-4 border-t border-gray-800">
        {!collapsed ? (
          <>
            <div className="bg-[#0d1d35] rounded-2xl p-4 border border-gray-800">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-500 flex items-center justify-center text-lg font-bold text-white">
                  A
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-white">
                      Admin
                    </p>

                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  </div>

                  <p className="text-sm text-gray-400">
                    admin@codefest.com
                  </p>
                </div>
              </div>
            </div>

            {/* THEME TOGGLE */}
            <div className="flex items-center justify-between mt-4 px-2">
              <div className="flex items-center gap-2 text-gray-300">
                {theme === "dark" ? (
                  <Moon size={18} />
                ) : (
                  <Sun size={18} />
                )}

                <span className="text-sm">
                  {theme === "dark"
                    ? "Dark Mode"
                    : "Light Mode"}
                </span>
              </div>

              <button
                onClick={toggleTheme}
                className="relative w-12 h-6 bg-purple-600 rounded-full"
              >
                <div
                  className={`absolute top-1 h-4 w-4 bg-white rounded-full transition-all duration-300 ${
                    theme === "dark"
                      ? "right-1"
                      : "left-1"
                  }`}
                />
              </button>
            </div>

            {/* LOGOUT */}
            <button
              onClick={handleLogout}
              className="
                mt-4
                w-full
                flex
                items-center
                justify-center
                gap-2
                bg-red-600
                hover:bg-red-700
                py-2.5
                rounded-xl
                text-white
                font-medium
                transition
              "
            >
              <LogOut size={18} />
              Logout
            </button>
          </>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-500 flex items-center justify-center text-lg font-bold text-white">
              A
            </div>

            <button onClick={toggleTheme}>
              {theme === "dark" ? (
                <Moon
                  size={20}
                  className="text-gray-400"
                />
              ) : (
                <Sun
                  size={20}
                  className="text-yellow-400"
                />
              )}
            </button>

            <button onClick={handleLogout}>
              <LogOut
                size={20}
                className="text-red-400"
              />
            </button>
          </div>
        )}
      </div>
    </aside>
  );
}