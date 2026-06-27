"use client";

import { useState } from "react";
import {
  Settings,
  Shield,
  Bell,
  Users,
  Database,
  Save,
} from "lucide-react";

export default function SettingsPage() {
  const [twoFactor, setTwoFactor] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [submissionMonitoring, setSubmissionMonitoring] =
    useState(true);
  const [lockdownMode, setLockdownMode] = useState(false);

  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 3000);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-white flex items-center gap-3">
          <Settings className="text-purple-500" />
          Settings
        </h1>

        <p className="text-gray-400 mt-2">
          Configure contest platform settings and preferences.
        </p>
      </div>

      {/* Success Alert */}
      {saved && (
        <div className="bg-green-500/20 border border-green-500 text-green-400 px-4 py-3 rounded-xl">
          ✅ Settings saved successfully!
        </div>
      )}

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="bg-[#0d1d35] border border-gray-800 rounded-2xl p-6 hover:border-blue-500 transition-all">
          <Users className="text-blue-500 mb-3" size={28} />
          <p className="text-gray-400">Participants</p>
          <h2 className="text-3xl font-bold">1,250</h2>
        </div>

        <div className="bg-[#0d1d35] border border-gray-800 rounded-2xl p-6 hover:border-yellow-500 transition-all">
          <Bell className="text-yellow-500 mb-3" size={28} />
          <p className="text-gray-400">Notifications</p>
          <h2 className="text-3xl font-bold">24</h2>
        </div>

        <div className="bg-[#0d1d35] border border-gray-800 rounded-2xl p-6 hover:border-green-500 transition-all">
          <Shield className="text-green-500 mb-3" size={28} />
          <p className="text-gray-400">Security Level</p>
          <h2 className="text-3xl font-bold">High</h2>
        </div>

        <div className="bg-[#0d1d35] border border-gray-800 rounded-2xl p-6 hover:border-purple-500 transition-all">
          <Database className="text-purple-500 mb-3" size={28} />
          <p className="text-gray-400">Storage</p>
          <h2 className="text-3xl font-bold">78%</h2>
        </div>
      </div>

      {/* Settings Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Contest Configuration */}
        <div className="bg-[#0d1d35] border border-gray-800 rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-6">
            Contest Configuration
          </h2>

          <div className="space-y-4">
            <input
              placeholder="Contest Name"
              className="w-full p-3 bg-[#081528] border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500"
            />

            <input
              placeholder="Contest Duration"
              className="w-full p-3 bg-[#081528] border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500"
            />

            <input
              placeholder="Maximum Participants"
              className="w-full p-3 bg-[#081528] border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500"
            />

            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-6 py-3 bg-purple-600 rounded-xl hover:bg-purple-700 transition-all"
            >
              <Save size={18} />
              Save Changes
            </button>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-[#0d1d35] border border-gray-800 rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-6">
            Security Settings
          </h2>

          <div className="space-y-6">
            {/* Two Factor */}
            <div className="flex justify-between items-center">
              <span>Two-Factor Authentication</span>

              <button
                onClick={() => setTwoFactor(!twoFactor)}
                className={`relative w-12 h-6 rounded-full transition-all ${
                  twoFactor
                    ? "bg-green-500"
                    : "bg-gray-700"
                }`}
              >
                <div
                  className={`absolute top-1 h-4 w-4 bg-white rounded-full transition-all ${
                    twoFactor
                      ? "right-1"
                      : "left-1"
                  }`}
                />
              </button>
            </div>

            {/* Email Alerts */}
            <div className="flex justify-between items-center">
              <span>Email Alerts</span>

              <button
                onClick={() =>
                  setEmailAlerts(!emailAlerts)
                }
                className={`relative w-12 h-6 rounded-full transition-all ${
                  emailAlerts
                    ? "bg-purple-600"
                    : "bg-gray-700"
                }`}
              >
                <div
                  className={`absolute top-1 h-4 w-4 bg-white rounded-full transition-all ${
                    emailAlerts
                      ? "right-1"
                      : "left-1"
                  }`}
                />
              </button>
            </div>

            {/* Submission Monitoring */}
            <div className="flex justify-between items-center">
              <span>Submission Monitoring</span>

              <button
                onClick={() =>
                  setSubmissionMonitoring(
                    !submissionMonitoring
                  )
                }
                className={`relative w-12 h-6 rounded-full transition-all ${
                  submissionMonitoring
                    ? "bg-purple-600"
                    : "bg-gray-700"
                }`}
              >
                <div
                  className={`absolute top-1 h-4 w-4 bg-white rounded-full transition-all ${
                    submissionMonitoring
                      ? "right-1"
                      : "left-1"
                  }`}
                />
              </button>
            </div>

            {/* Lockdown */}
            <div className="flex justify-between items-center">
              <span>Contest Lockdown Mode</span>

              <button
                onClick={() =>
                  setLockdownMode(!lockdownMode)
                }
                className={`relative w-12 h-6 rounded-full transition-all ${
                  lockdownMode
                    ? "bg-red-500"
                    : "bg-gray-700"
                }`}
              >
                <div
                  className={`absolute top-1 h-4 w-4 bg-white rounded-full transition-all ${
                    lockdownMode
                      ? "right-1"
                      : "left-1"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* System Information */}
      <div className="bg-[#0d1d35] border border-gray-800 rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-6">
          System Information
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <p className="text-gray-400">
              Platform Version
            </p>

            <p className="font-semibold mt-2">
              v2.1.0
            </p>
          </div>

          <div>
            <p className="text-gray-400">
              Server Status
            </p>

            <p className="font-semibold text-green-500 mt-2">
              Operational
            </p>
          </div>

          <div>
            <p className="text-gray-400">
              Last Backup
            </p>

            <p className="font-semibold mt-2">
              Today, 09:30 AM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}