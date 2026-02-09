"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  BarChart3,
  FileText,
  CheckCircle,
  Clock,
  Users,
  ArrowRight,
  LogOut,
  Zap,
  Plus,
} from "lucide-react";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/signin");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gray-bg flex items-center justify-center">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          <span className="text-[14px] text-gray-text">Loading...</span>
        </div>
      </div>
    );
  }

  if (!session) return null;

  const stats = [
    {
      label: "Forms Submitted",
      value: "0",
      change: "Get started below",
      changeColor: "text-primary",
      icon: FileText,
    },
    {
      label: "Success Rate",
      value: "—",
      change: "No data yet",
      changeColor: "text-gray-text",
      icon: CheckCircle,
    },
    {
      label: "Avg. Processing",
      value: "—",
      change: "AI-powered",
      changeColor: "text-primary",
      icon: Clock,
    },
    {
      label: "Active Guests",
      value: "0",
      change: "Add your first guest",
      changeColor: "text-gray-text",
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-bg">
      {/* Top nav */}
      <nav className="bg-white border-b border-gray-border">
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-1.5">
            <span className="text-[20px] font-bold text-dark tracking-tight">
              TM30<span className="text-primary">.ai</span>
            </span>
          </a>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center text-[12px] font-semibold text-primary">
                {session.user?.name?.charAt(0) ||
                  session.user?.email?.charAt(0)?.toUpperCase() ||
                  "U"}
              </div>
              <span className="text-[14px] text-dark font-medium hidden sm:block max-w-[160px] truncate">
                {session.user?.name || session.user?.email}
              </span>
            </div>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="flex items-center gap-1.5 text-[14px] text-gray-text hover:text-dark transition-colors px-3 py-2 rounded-lg hover:bg-gray-bg"
            >
              <LogOut size={15} />
              <span className="hidden sm:inline">Sign out</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-[1200px] mx-auto px-6 py-8">
        {/* Welcome */}
        <div className="mb-8">
          <h1 className="text-[28px] md:text-[32px] font-bold text-dark mb-1">
            Welcome{session.user?.name ? `, ${session.user.name}` : ""}!
          </h1>
          <p className="text-[15px] text-gray-text">
            Manage your TM30 submissions from one place.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-xl border border-gray-border p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[13px] text-gray-text">{stat.label}</span>
                <div className="w-8 h-8 rounded-lg bg-gray-bg flex items-center justify-center">
                  <stat.icon size={16} className="text-gray-text" />
                </div>
              </div>
              <div className="text-[28px] font-bold text-dark leading-tight">
                {stat.value}
              </div>
              <div className={`text-[12px] ${stat.changeColor} mt-1`}>
                {stat.change}
              </div>
            </div>
          ))}
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Submit new TM30 */}
          <div className="bg-white rounded-xl border border-gray-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center">
                <Plus size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="text-[16px] font-semibold text-dark">
                  Submit a TM30
                </h3>
                <p className="text-[13px] text-gray-text">
                  Snap a passport photo to get started
                </p>
              </div>
            </div>
            <button className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-primary text-white font-medium text-[14px] hover:bg-primary-dark transition-colors">
              <Zap size={16} />
              New submission
            </button>
          </div>

          {/* Recent activity */}
          <div className="bg-white rounded-xl border border-gray-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gray-bg flex items-center justify-center">
                <BarChart3 size={20} className="text-gray-text" />
              </div>
              <div>
                <h3 className="text-[16px] font-semibold text-dark">
                  Recent activity
                </h3>
                <p className="text-[13px] text-gray-text">
                  Your latest submissions
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center py-6 text-center">
              <div>
                <p className="text-[14px] text-gray-text mb-2">
                  No submissions yet
                </p>
                <p className="text-[12px] text-[#b0bec5]">
                  Your TM30 submissions will appear here
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
