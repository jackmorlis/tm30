"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";

const articles = [
  {
    title: "What is the Difference Between TM30 and TM47?",
    description:
      "Understanding the key differences between these two important Thai immigration forms and when each one applies.",
    category: "Guide",
    readTime: "5 min read",
    gradient: "from-teal-400 to-cyan-400",
  },
  {
    title: "Can I Self-Register the TM30 Form?",
    description:
      "A complete walkthrough of the self-registration process and when you might need professional help instead.",
    category: "How-To",
    readTime: "4 min read",
    gradient: "from-blue-400 to-indigo-400",
  },
  {
    title: "TM30 Explained: 2024 Complete Guide",
    description:
      "Everything you need to know about TM30 requirements, recent changes, and compliance tips for property owners.",
    category: "Guide",
    readTime: "8 min read",
    gradient: "from-cyan-400 to-teal-400",
  },
  {
    title: "Hotel Industry vs Tech: TM30 Troubles",
    description:
      "How technology challenges affect hotels dealing with immigration compliance and what solutions exist.",
    category: "Industry",
    readTime: "6 min read",
    gradient: "from-emerald-400 to-green-400",
  },
  {
    title: "Thai Bureaucracy for Hotels and Guests",
    description:
      "Navigating the administrative requirements that accommodation providers face with foreign guests.",
    category: "Insights",
    readTime: "7 min read",
    gradient: "from-blue-400 to-teal-400",
  },
  {
    title: "TM30 for Tourists vs Expats",
    description:
      "How TM30 requirements differ for short-term tourists and long-term expatriates living in Thailand.",
    category: "Guide",
    readTime: "5 min read",
    gradient: "from-teal-400 to-blue-400",
  },
];

export default function Articles() {
  return (
    <section id="articles" className="relative py-32 overflow-hidden bg-slate-50/50">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/20 rounded-full blur-[128px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-sm text-blue-700 mb-6">
            Learn More
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-800">
            Latest <span className="gradient-text">Articles</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Stay informed with our guides, tips, and insights about TM30 and
            Thai immigration.
          </p>
        </motion.div>

        {/* Articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.a
              key={article.title}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group"
            >
              <div className="h-full rounded-2xl bg-white border border-slate-100 shadow-sm overflow-hidden hover:shadow-lg hover:shadow-teal-50 hover:border-teal-100 transition-all duration-500 group-hover:scale-[1.02]">
                {/* Colored top bar */}
                <div
                  className={`h-1.5 bg-gradient-to-r ${article.gradient}`}
                />
                <div className="p-7">
                  {/* Meta */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-xs text-teal-700 font-medium">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-400">
                      <Clock size={12} />
                      {article.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold mb-3 text-slate-800 group-hover:text-teal-700 transition-colors flex items-start gap-2">
                    {article.title}
                    <ArrowUpRight
                      size={16}
                      className="flex-shrink-0 mt-1 text-teal-500 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {article.description}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
