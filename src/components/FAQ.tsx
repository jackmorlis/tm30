"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is TM30?",
    answer: "The TM30 is a Thai immigration form used to track the locations of foreigners within the country. Property owners and accommodation providers must submit this form within 24 hours of a foreign guest's arrival.",
  },
  {
    question: "Who is responsible for submitting TM30?",
    answer: "The property owner or landlord — not the guest — is legally responsible. This applies to hotels, guesthouses, Airbnb hosts, and anyone renting property to foreign nationals. Fines range from 800–1,600 THB per person for non-compliance.",
  },
  {
    question: "As a guest, do I need to worry about TM30?",
    answer: "For short stays under one month, generally no. However, if you're extending your stay or applying for a new visa, verify that your landlord has submitted the TM30. Some insurance companies also require a TM30 return slip for hospital bill reimbursements.",
  },
  {
    question: "How does TM30.ai make this easier?",
    answer: "You simply take a photo of your guest's passport. Our AI extracts all the data, fills out the form, and submits it to the Immigration Bureau electronically. The entire process takes about 10 seconds.",
  },
  {
    question: "Is TM30.ai affiliated with the Thai government?",
    answer: "No. TM30.ai is an independent online service that submits forms on your behalf to the Immigration Bureau. We are not affiliated with the Royal Thai Police or any government agency.",
  },
  {
    question: "What happens if Immigration's system is down?",
    answer: "Our auto-retry system automatically attempts to resubmit your form every 5 minutes until it goes through. You'll be notified once the submission is confirmed.",
  },
  {
    question: "What submission channels do you support?",
    answer: "You can submit through our website, via our Telegram bot, or through WhatsApp. All channels use the same AI processing and deliver the same fast, reliable results.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-gray-bg">
      <div className="max-w-[700px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-light text-primary text-[13px] font-medium mb-4">
            FAQ
          </div>
          <h2 className="text-[32px] md:text-[40px] font-bold text-dark">
            Frequently asked questions
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
            >
              <div className="rounded-lg border border-gray-border bg-white overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-bg/50 transition-colors"
                >
                  <span className="text-[15px] font-medium text-dark pr-4">{faq.question}</span>
                  {openIndex === index ? (
                    <Minus size={18} className="text-primary flex-shrink-0" />
                  ) : (
                    <Plus size={18} className="text-gray-text flex-shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-4 text-[14px] text-gray-text leading-relaxed border-t border-gray-border pt-3">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
