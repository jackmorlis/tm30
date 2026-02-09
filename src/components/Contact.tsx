"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Send } from "lucide-react";

const channels = [
  { icon: Mail, title: "Email", detail: "admin@tm30.ai", href: "mailto:admin@tm30.ai" },
  { icon: MessageCircle, title: "Telegram", detail: "Chat with our bot", href: "#" },
  { icon: Send, title: "WhatsApp", detail: "Coming soon", href: "#" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-bg">
      <div className="max-w-[900px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-light text-primary text-[13px] font-medium mb-4">
              Contact
            </div>
            <h2 className="text-[32px] md:text-[36px] font-bold text-dark mb-3">
              Get in touch
            </h2>
            <p className="text-gray-text text-[15px] mb-8 leading-relaxed">
              Have questions about TM30 or our service? Reach out through any
              channel — we typically respond within a few hours.
            </p>
            <div className="space-y-3">
              {channels.map((ch) => (
                <a
                  key={ch.title}
                  href={ch.href}
                  className="flex items-center gap-4 p-4 rounded-lg border border-gray-border bg-white hover:border-primary/30 hover:shadow-[0_2px_8px_rgba(33,109,227,0.04)] transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <ch.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-[14px] font-medium text-dark">{ch.title}</div>
                    <div className="text-[13px] text-gray-text">{ch.detail}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="rounded-xl border border-gray-border bg-white p-7">
              <h3 className="text-[17px] font-semibold text-dark mb-5">Send a message</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-[13px] text-gray-text mb-1.5">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-border text-dark text-[14px] placeholder-[#b0bec5] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[13px] text-gray-text mb-1.5">Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-border text-dark text-[14px] placeholder-[#b0bec5] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[13px] text-gray-text mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    placeholder="How can we help?"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-border text-dark text-[14px] placeholder-[#b0bec5] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-primary text-white font-medium text-[14px] hover:bg-primary-dark transition-colors"
                >
                  Send message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
