"use client";

import { motion } from "framer-motion";
import { Star, ArrowRight, Shield, Zap, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="pt-16">
      {/* Main hero area */}
      <div className="max-w-[1200px] mx-auto px-6 pt-16 pb-8 md:pt-24 md:pb-12">
        <div className="text-center max-w-[800px] mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-light text-primary text-[13px] font-medium mb-6"
          >
            <Zap size={14} />
            1,000+ property owners trust TM30.ai
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-[40px] md:text-[56px] lg:text-[64px] font-bold leading-[1.1] tracking-tight text-dark mb-5"
          >
            Put your TM30
            <br />
            <span className="text-primary">on autopilot</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[17px] md:text-[19px] text-gray-text leading-relaxed max-w-[560px] mx-auto mb-8"
          >
            Snap a passport photo, and our AI submits the TM30 form to
            Thailand&apos;s Immigration Bureau in seconds. No paperwork. No queues.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10"
          >
            <a
              href="/signup"
              className="group flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-white font-medium text-[15px] hover:bg-primary-dark transition-colors"
            >
              Get started — it&apos;s free
              <ArrowRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </a>
            <a
              href="#how-it-works"
              className="flex items-center gap-2 px-7 py-3.5 rounded-lg border border-gray-border text-dark font-medium text-[15px] hover:bg-gray-bg transition-colors"
            >
              See how it works
            </a>
          </motion.div>

          {/* Social proof row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap items-center justify-center gap-5 text-[13px]"
          >
            <div className="flex items-center gap-1.5">
              <div className="flex -space-x-1.5">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full bg-primary-light border-2 border-white flex items-center justify-center text-[10px] font-bold text-primary"
                  >
                    {["S", "J", "N", "M"][i]}
                  </div>
                ))}
              </div>
              <span className="text-gray-text">10,000+ forms filed</span>
            </div>
            <div className="w-px h-4 bg-gray-border hidden sm:block" />
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className="text-amber-400 fill-amber-400"
                />
              ))}
              <span className="text-gray-text ml-1">4.7/5 on Trustpilot</span>
            </div>
            <div className="w-px h-4 bg-gray-border hidden sm:block" />
            <div className="flex items-center gap-1.5">
              <Shield size={14} className="text-success" />
              <span className="text-gray-text">Encrypted & secure</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Dashboard mockup */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="max-w-[1100px] mx-auto px-6 pb-20"
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
                <span className="text-[12px] text-gray-text">tm30.ai/dashboard</span>
              </div>
            </div>
          </div>

          {/* Dashboard content */}
          <div className="p-6 md:p-8 bg-gray-bg">
            {/* Stats row */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
              {[
                { label: "Forms Submitted", value: "247", change: "+12 this week", changeColor: "text-success" },
                { label: "Success Rate", value: "99.8%", change: "Auto-retry on", changeColor: "text-primary" },
                { label: "Avg. Processing", value: "~10s", change: "AI-powered", changeColor: "text-primary" },
                { label: "Active Guests", value: "8", change: "2 arriving today", changeColor: "text-amber-500" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-lg border border-gray-border p-4"
                >
                  <div className="text-[12px] text-gray-text mb-1">{stat.label}</div>
                  <div className="text-[26px] font-bold text-dark leading-tight">{stat.value}</div>
                  <div className={`text-[12px] ${stat.changeColor} mt-0.5`}>{stat.change}</div>
                </div>
              ))}
            </div>

            {/* Recent submissions table */}
            <div className="bg-white rounded-lg border border-gray-border overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-border">
                <span className="text-[13px] font-semibold text-dark">Recent Submissions</span>
              </div>
              <div className="divide-y divide-gray-border">
                {[
                  { name: "John Smith", passport: "US****789", status: "Confirmed", time: "2 min ago" },
                  { name: "Marie Dupont", passport: "FR****234", status: "Confirmed", time: "1 hr ago" },
                  { name: "Yuki Tanaka", passport: "JP****567", status: "Processing", time: "Just now" },
                ].map((row) => (
                  <div key={row.name} className="flex items-center justify-between px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center text-[12px] font-semibold text-primary">
                        {row.name.charAt(0)}
                      </div>
                      <div>
                        <div className="text-[13px] font-medium text-dark">{row.name}</div>
                        <div className="text-[12px] text-gray-text">{row.passport}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span
                        className={`text-[12px] font-medium px-2 py-0.5 rounded-full ${
                          row.status === "Confirmed"
                            ? "bg-green-50 text-success"
                            : "bg-primary-light text-primary"
                        }`}
                      >
                        {row.status}
                      </span>
                      <span className="text-[12px] text-gray-text hidden sm:block">{row.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
