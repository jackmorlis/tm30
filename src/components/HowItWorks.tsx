"use client";

import { motion } from "framer-motion";
import { Camera, Cpu, Send, Download } from "lucide-react";

const steps = [
  {
    icon: Camera,
    step: "1",
    title: "Snap a passport photo",
    description:
      "Take a photo of your guest's passport with your phone. Even blurry or low-light photos work — our AI handles the rest.",
  },
  {
    icon: Cpu,
    step: "2",
    title: "AI reads & fills the form",
    description:
      "Our system extracts name, nationality, passport number, and all required fields automatically. No manual data entry.",
  },
  {
    icon: Send,
    step: "3",
    title: "Auto-submit to Immigration",
    description:
      "We submit the TM30 form directly to Thailand's Immigration Bureau. If their system is down, we retry every 5 minutes.",
  },
  {
    icon: Download,
    step: "4",
    title: "Get your confirmation",
    description:
      "Receive instant confirmation and download your official receipt anytime from your dashboard.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="max-w-[1000px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-light text-primary text-[13px] font-medium mb-4">
            How it works
          </div>
          <h2 className="text-[32px] md:text-[40px] font-bold text-dark mb-3">
            Four steps. Ten seconds.
          </h2>
          <p className="text-gray-text text-[16px] max-w-[500px] mx-auto">
            From passport photo to official confirmation — faster than making a coffee.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group"
            >
              <div className="flex items-start gap-5 rounded-xl border border-gray-border bg-white p-6 hover:border-primary/30 hover:shadow-[0_2px_12px_rgba(33,109,227,0.06)] transition-all">
                {/* Step number */}
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-[15px]">{step.step}</span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <step.icon size={16} className="text-primary" />
                    <h3 className="text-[16px] font-semibold text-dark">{step.title}</h3>
                  </div>
                  <p className="text-[14px] text-gray-text leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center mt-10"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-white font-medium text-[15px] hover:bg-primary-dark transition-colors"
          >
            Try it free
          </a>
        </motion.div>
      </div>
    </section>
  );
}
