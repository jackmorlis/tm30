"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "0",
    period: "/month",
    description: "For small property owners with occasional guests.",
    features: [
      "Up to 5 guests per month",
      "AI passport scanning",
      "Auto-submission to Immigration",
      "Email confirmations",
      "Dashboard access",
    ],
    cta: "Get started free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "490",
    period: "/mo",
    description: "For active hosts and small hotels with regular guests.",
    features: [
      "Up to 50 guests per month",
      "Everything in Free",
      "Telegram bot integration",
      "Priority processing",
      "Bulk receipt downloads",
      "Submission history export",
    ],
    cta: "Upgrade to Pro",
    highlighted: true,
    badge: "Most popular",
  },
  {
    name: "Business",
    price: "1,500",
    period: "/mo",
    description: "For hotels and large operations needing high volume.",
    features: [
      "Unlimited guests",
      "Everything in Pro",
      "WhatsApp integration",
      "API access",
      "Dedicated support",
      "Custom integrations",
      "SLA guarantee",
    ],
    cta: "Contact sales",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
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
            Pricing
          </div>
          <h2 className="text-[32px] md:text-[40px] font-bold text-dark mb-3">
            Simple, transparent pricing
          </h2>
          <p className="text-gray-text text-[16px] max-w-[420px] mx-auto">
            Start free. Upgrade when you need more. No hidden fees.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative"
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <div className="px-3 py-1 rounded-full bg-primary text-white text-[12px] font-medium">
                    {plan.badge}
                  </div>
                </div>
              )}

              <div
                className={`h-full rounded-xl p-7 flex flex-col ${
                  plan.highlighted
                    ? "border-2 border-primary bg-white shadow-[0_0_0_4px_rgba(33,109,227,0.08)]"
                    : "border border-gray-border bg-white"
                }`}
              >
                <div className="mb-5">
                  <h3 className="text-[17px] font-semibold text-dark mb-1">{plan.name}</h3>
                  <p className="text-[13px] text-gray-text">{plan.description}</p>
                </div>

                <div className="flex items-baseline gap-0.5 mb-6">
                  <span className="text-[12px] text-gray-text">THB</span>
                  <span className="text-[40px] font-bold text-dark leading-none">{plan.price}</span>
                  <span className="text-[14px] text-gray-text">{plan.period}</span>
                </div>

                <ul className="space-y-2.5 mb-7 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check size={16} className="text-success flex-shrink-0 mt-0.5" />
                      <span className="text-[13px] text-dark">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className={`block w-full text-center py-3 rounded-lg font-medium text-[14px] transition-colors ${
                    plan.highlighted
                      ? "bg-primary text-white hover:bg-primary-dark"
                      : "border border-gray-border text-dark hover:bg-gray-bg"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
