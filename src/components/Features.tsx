"use client";

import { motion } from "framer-motion";
import {
  Scan,
  Globe,
  MessageCircle,
  RefreshCw,
  Lock,
  Smartphone,
  BarChart3,
  Users,
  Bell,
} from "lucide-react";

const features = [
  {
    icon: Scan,
    title: "AI passport scanner",
    description: "Reads passport data from any photo quality — blurry, low-light, or angled.",
  },
  {
    icon: Globe,
    title: "Multi-channel submit",
    description: "Submit via website, Telegram bot, or WhatsApp — whichever works for you.",
  },
  {
    icon: RefreshCw,
    title: "Auto-retry",
    description: "If Immigration is down, we retry every 5 minutes until your form goes through.",
  },
  {
    icon: Lock,
    title: "End-to-end encryption",
    description: "Passport data is encrypted and never stored longer than needed for processing.",
  },
  {
    icon: MessageCircle,
    title: "Telegram integration",
    description: "Send a passport photo via Telegram chat and get confirmation back instantly.",
  },
  {
    icon: BarChart3,
    title: "Dashboard & history",
    description: "Track submissions, download receipts, and manage guests from one place.",
  },
  {
    icon: Users,
    title: "Multi-property support",
    description: "Manage multiple properties and their guests from a single account.",
  },
  {
    icon: Smartphone,
    title: "Mobile optimized",
    description: "Works perfectly on any device — take photos and submit from your phone.",
  },
  {
    icon: Bell,
    title: "Expiry alerts",
    description: "Get notified before guest registrations expire so you never miss a deadline.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-bg">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-light text-primary text-[13px] font-medium mb-4">
            Features
          </div>
          <h2 className="text-[32px] md:text-[40px] font-bold text-dark mb-3">
            Everything you need, nothing you don&apos;t
          </h2>
          <p className="text-gray-text text-[16px] max-w-[500px] mx-auto">
            Built for property owners, hotels, and Airbnb hosts in Thailand.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
            >
              <div className="h-full rounded-xl border border-gray-border bg-white p-6 hover:border-primary/30 hover:shadow-[0_2px_12px_rgba(33,109,227,0.06)] transition-all group">
                <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <feature.icon size={20} className="text-primary" />
                </div>
                <h3 className="text-[15px] font-semibold text-dark mb-1.5">{feature.title}</h3>
                <p className="text-[13px] text-gray-text leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
