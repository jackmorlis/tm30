"use client";

import { motion } from "framer-motion";
import { X, Check, AlertTriangle, Clock, FileWarning, Ban } from "lucide-react";

const without = [
  { icon: Clock, text: "Spend 30+ minutes navigating the Immigration Bureau website" },
  { icon: FileWarning, text: "Risk errors that delay or reject your submission" },
  { icon: AlertTriangle, text: "Fines of 800–1,600 THB per person for late filing" },
  { icon: Ban, text: "Office closed? No submission until next business day" },
];

const withTm30 = [
  { text: "Snap a photo and submit in 10 seconds" },
  { text: "AI extracts data perfectly — zero manual entry errors" },
  { text: "Auto-submit within 24 hours, every time" },
  { text: "24/7 automated submissions, even when offices are closed" },
];

export default function Comparison() {
  return (
    <section className="py-20 bg-gray-bg">
      <div className="max-w-[1000px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-[32px] md:text-[40px] font-bold text-dark mb-3">
            The old way vs. the TM30.ai way
          </h2>
          <p className="text-gray-text text-[16px]">
            See why thousands of property owners have switched.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Without */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-gray-border bg-white p-7"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
                <X size={16} className="text-danger" />
              </div>
              <span className="text-[16px] font-semibold text-dark">Without TM30.ai</span>
            </div>
            <div className="space-y-4">
              {without.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X size={12} className="text-danger" />
                  </div>
                  <span className="text-[14px] text-gray-text leading-relaxed">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* With */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-xl border-2 border-primary bg-white p-7 shadow-[0_0_0_4px_rgba(33,109,227,0.08)]"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center">
                <Check size={16} className="text-primary" />
              </div>
              <span className="text-[16px] font-semibold text-dark">With TM30.ai</span>
            </div>
            <div className="space-y-4">
              {withTm30.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-success" />
                  </div>
                  <span className="text-[14px] text-dark leading-relaxed">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
