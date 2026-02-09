"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20">
      <div className="max-w-[800px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-primary p-10 md:p-14 text-center"
        >
          <h2 className="text-[28px] md:text-[36px] font-bold text-white mb-3">
            Ready to put TM30 on autopilot?
          </h2>
          <p className="text-white/70 text-[16px] mb-8 max-w-[400px] mx-auto">
            Join 1,000+ property owners who never worry about TM30 compliance again.
          </p>
          <a
            href="/signup"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white text-primary font-semibold text-[15px] hover:bg-gray-bg transition-colors"
          >
            Get started — it&apos;s free
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
