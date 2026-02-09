"use client";

import { motion } from "framer-motion";
import { Star, ArrowRight, Shield, Zap } from "lucide-react";
import HeroSteps from "./HeroSteps";

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

      {/* How it works visual steps */}
      <HeroSteps />
    </section>
  );
}
