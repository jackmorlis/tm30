"use client";

import { motion } from "framer-motion";
import {
  Users,
  FileCheck,
  Clock,
  Bell,
  Search,
  Settings,
  LayoutDashboard,
  Upload,
  BarChart3,
  ChevronDown,
} from "lucide-react";

export default function DashboardPreview() {
  return (
    <section className="py-20 bg-gray-bg">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-light text-primary text-[13px] font-medium mb-4">
            <LayoutDashboard size={14} />
            Admin Panel
          </div>
          <h2 className="text-[32px] md:text-[40px] font-bold text-dark mb-3">
            Everything in one place
          </h2>
          <p className="text-gray-text text-[16px] max-w-[520px] mx-auto">
            Track submissions, manage guests, and download receipts — all from your
            dashboard.
          </p>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-xl border border-gray-border bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)] overflow-hidden">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-border bg-gray-bg">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28C840]" />
              </div>
              <div className="flex-1 ml-3">
                <div className="max-w-[300px] h-7 rounded-md bg-white border border-gray-border flex items-center px-3">
                  <span className="text-[12px] text-gray-text">
                    tm30.ai/dashboard
                  </span>
                </div>
              </div>
            </div>

            {/* App layout */}
            <div className="flex min-h-[420px]">
              {/* Sidebar */}
              <div className="hidden md:flex flex-col w-[200px] border-r border-gray-border bg-white p-4">
                {/* Logo */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
                    <span className="text-white text-[11px] font-bold">T</span>
                  </div>
                  <span className="text-[14px] font-bold text-dark">
                    TM30.ai
                  </span>
                </div>

                {/* Nav items */}
                <div className="space-y-1">
                  {[
                    {
                      icon: LayoutDashboard,
                      label: "Dashboard",
                      active: true,
                    },
                    { icon: Upload, label: "New Submission", active: false },
                    { icon: Users, label: "Guests", active: false },
                    { icon: FileCheck, label: "Receipts", active: false },
                    { icon: BarChart3, label: "Analytics", active: false },
                    { icon: Settings, label: "Settings", active: false },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] ${
                        item.active
                          ? "bg-primary-light text-primary font-medium"
                          : "text-gray-text hover:bg-gray-bg"
                      }`}
                    >
                      <item.icon size={15} />
                      {item.label}
                    </div>
                  ))}
                </div>

                {/* User */}
                <div className="mt-auto pt-4 border-t border-gray-border">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-primary-light flex items-center justify-center text-[11px] font-bold text-primary">
                      D
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[12px] font-medium text-dark truncate">
                        Daniel G.
                      </div>
                      <div className="text-[10px] text-gray-text">
                        Pro Plan
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main content */}
              <div className="flex-1 bg-gray-bg p-5 md:p-6">
                {/* Top bar */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h3 className="text-[16px] font-semibold text-dark">
                      Dashboard
                    </h3>
                    <p className="text-[12px] text-gray-text">
                      Welcome back, Daniel
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg border border-gray-border bg-white flex items-center justify-center">
                      <Search size={14} className="text-gray-text" />
                    </div>
                    <div className="relative w-8 h-8 rounded-lg border border-gray-border bg-white flex items-center justify-center">
                      <Bell size={14} className="text-gray-text" />
                      <div className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-danger flex items-center justify-center">
                        <span className="text-[8px] text-white font-bold">
                          2
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                  {[
                    {
                      label: "Total Filed",
                      value: "247",
                      change: "+12 this week",
                      changeColor: "text-success",
                      icon: FileCheck,
                    },
                    {
                      label: "Success Rate",
                      value: "99.8%",
                      change: "Auto-retry on",
                      changeColor: "text-primary",
                      icon: BarChart3,
                    },
                    {
                      label: "Avg. Time",
                      value: "~10s",
                      change: "AI-powered",
                      changeColor: "text-primary",
                      icon: Clock,
                    },
                    {
                      label: "Active Guests",
                      value: "8",
                      change: "2 arriving today",
                      changeColor: "text-amber-500",
                      icon: Users,
                    },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-white rounded-lg border border-gray-border p-3.5"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] text-gray-text">
                          {stat.label}
                        </span>
                        <stat.icon size={13} className="text-gray-text/50" />
                      </div>
                      <div className="text-[22px] font-bold text-dark leading-tight">
                        {stat.value}
                      </div>
                      <div
                        className={`text-[11px] ${stat.changeColor} mt-0.5`}
                      >
                        {stat.change}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Two columns: Recent submissions + Quick actions */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Recent submissions table */}
                  <div className="md:col-span-2 bg-white rounded-lg border border-gray-border overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-3 border-b border-gray-border">
                      <span className="text-[13px] font-semibold text-dark">
                        Recent Submissions
                      </span>
                      <div className="flex items-center gap-1 text-[11px] text-gray-text px-2 py-1 rounded border border-gray-border bg-gray-bg">
                        Last 7 days
                        <ChevronDown size={12} />
                      </div>
                    </div>
                    <div className="divide-y divide-gray-border">
                      {[
                        {
                          name: "Willeke De Bruijn",
                          passport: "NL****014",
                          status: "Confirmed",
                          time: "2 min ago",
                          flag: "🇳🇱",
                        },
                        {
                          name: "John Smith",
                          passport: "US****789",
                          status: "Confirmed",
                          time: "1 hr ago",
                          flag: "🇺🇸",
                        },
                        {
                          name: "Marie Dupont",
                          passport: "FR****234",
                          status: "Confirmed",
                          time: "3 hrs ago",
                          flag: "🇫🇷",
                        },
                        {
                          name: "Yuki Tanaka",
                          passport: "JP****567",
                          status: "Processing",
                          time: "Just now",
                          flag: "🇯🇵",
                        },
                      ].map((row) => (
                        <div
                          key={row.name}
                          className="flex items-center justify-between px-4 py-2.5"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-7 h-7 rounded-full bg-primary-light flex items-center justify-center text-[11px] font-semibold text-primary">
                              {row.name.charAt(0)}
                            </div>
                            <div>
                              <div className="text-[12px] font-medium text-dark flex items-center gap-1.5">
                                {row.name}
                                <span className="text-[10px]">{row.flag}</span>
                              </div>
                              <div className="text-[11px] text-gray-text">
                                {row.passport}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <span
                              className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${
                                row.status === "Confirmed"
                                  ? "bg-green-50 text-success"
                                  : "bg-primary-light text-primary"
                              }`}
                            >
                              {row.status}
                            </span>
                            <span className="text-[11px] text-gray-text hidden sm:block w-16 text-right">
                              {row.time}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick actions + notification */}
                  <div className="space-y-4">
                    {/* Quick actions */}
                    <div className="bg-white rounded-lg border border-gray-border p-4">
                      <span className="text-[13px] font-semibold text-dark block mb-3">
                        Quick Actions
                      </span>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-primary text-white text-[12px] font-medium">
                          <Upload size={14} />
                          New Submission
                        </div>
                        <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg border border-gray-border text-dark text-[12px] font-medium hover:bg-gray-bg">
                          <Users size={14} className="text-gray-text" />
                          Add Guest
                        </div>
                        <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg border border-gray-border text-dark text-[12px] font-medium hover:bg-gray-bg">
                          <FileCheck size={14} className="text-gray-text" />
                          View All Receipts
                        </div>
                      </div>
                    </div>

                    {/* Notification card */}
                    <div className="bg-amber-50 rounded-lg border border-amber-200 p-4">
                      <div className="flex items-start gap-2">
                        <Bell
                          size={14}
                          className="text-amber-500 mt-0.5 flex-shrink-0"
                        />
                        <div>
                          <div className="text-[12px] font-medium text-amber-800 mb-0.5">
                            2 guests arriving today
                          </div>
                          <div className="text-[11px] text-amber-600">
                            Yuki Tanaka and 1 other guest check in today.
                            Passports are needed for TM30 filing.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
