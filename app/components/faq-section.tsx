"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle, ArrowRight } from "lucide-react";
import { useMounted } from "../hooks/use-mounted";

const faqs = [
  {
    question: "How accurate is the AI analysis?",
    answer: "We aggregate data from 5+ sources (Google Trends, Reddit, Product Hunt...). 200+ builders have validated their ideas with us.",
    hasComparison: false,
  },
  {
    question: "When will early access be available?",
    answer: "Everything is built and ready. We're opening access gradually to ensure the best experience. Join the waitlist to be notified when your spot is ready.",
    hasComparison: false,
  },
  {
    question: "How is this different from manual research?",
    answer: "",
    hasComparison: true,
    comparison: {
      manual: [
        "3-5 hours of research",
        "15+ browser tabs open",
        "Conflicting data sources",
        "No clear verdict",
        "Analysis paralysis",
      ],
      ourTool: [
        "2 minutes to get report",
        "Single dashboard view",
        "Aggregated from 5+ sources",
        "Clear GO/NO-GO verdict",
        "Actionable next steps",
      ],
    },
  },
  {
    question: "What's included in early access?",
    answer: "Early access includes unlimited idea analysis, AI-powered market research, GO/NO-GO verdicts, full competitor breakdowns, PDF exports, and priority support.",
    hasComparison: false,
  },
];

export function FAQSection() {
  const mounted = useMounted();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-container relative w-full px-4 md:px-8" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={mounted ? { opacity: 0, y: 10 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-24 md:mb-32 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold mb-6 tracking-tight" style={{ color: "var(--text-primary)" }}>
            Common Questions
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-6 mb-16 md:mb-24">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={mounted ? { opacity: 0, y: 10 } : false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border overflow-hidden"
              style={{
                background: "rgb(15, 15, 17)",
                borderColor: "rgba(39, 39, 42, 0.8)",
                borderRadius: "12px",
              }}
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 md:px-10 py-6 md:py-8 flex items-center justify-between text-left transition-all duration-300"
                style={{
                  background: openIndex === index ? "var(--bg-tertiary)" : "transparent",
                }}
              >
                <span className="font-medium text-lg md:text-xl pr-4" style={{ color: "var(--text-primary)" }}>
                  Q: {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5" style={{ color: "var(--text-quaternary)" }} strokeWidth={1.5} />
                </motion.div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 md:px-10 pb-6 md:pb-8 pt-0">
                      {faq.hasComparison ? (
                        <div className="space-y-4">
                          <p className="text-sm md:text-base mb-4" style={{ color: "var(--text-tertiary)" }}>
                            A: See the difference:
                          </p>
                          {/* Comparison Table */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Manual Research */}
                            <div
                              className="p-4 border"
                              style={{
                                background: "rgb(18, 18, 20)",
                                borderRadius: "10px",
                                borderColor: "rgba(39, 39, 42, 0.8)",
                              }}
                            >
                              <h4 className="font-semibold mb-3 text-sm md:text-base" style={{ color: "rgb(239, 68, 68)" }}>
                                Manual Research
                              </h4>
                              <ul className="space-y-2">
                                {faq.comparison?.manual.map((item, i) => (
                                  <li
                                    key={i}
                                    className="flex items-start gap-2 text-xs md:text-sm"
                                    style={{ color: "var(--text-quaternary)" }}
                                  >
                                    <span className="mt-1" style={{ color: "var(--accent-red)" }}>✗</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Our Tool */}
                            <div
                              className="p-4 border"
                              style={{
                                background: "rgb(18, 18, 20)",
                                borderRadius: "10px",
                                borderColor: "rgba(56, 189, 248, 0.3)",
                              }}
                            >
                              <h4 className="font-semibold mb-3 text-sm md:text-base" style={{ color: "rgb(56, 189, 248)" }}>
                                Our Tool
                              </h4>
                              <ul className="space-y-2">
                                {faq.comparison?.ourTool.map((item, i) => (
                                  <li
                                    key={i}
                                    className="flex items-start gap-2 text-xs md:text-sm"
                                    style={{ color: "var(--text-tertiary)" }}
                                  >
                                    <span className="mt-1" style={{ color: "var(--accent-green)" }}>✓</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <p className="text-sm md:text-base" style={{ color: "var(--text-tertiary)" }}>
                          A: {faq.answer}
                        </p>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* More Questions CTA */}
        <motion.div
          initial={mounted ? { opacity: 0, y: 10 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-sm md:text-base mb-4" style={{ color: "var(--text-quaternary)" }}>
            More questions?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                // Link to full FAQ page or open chat
                console.log("Open FAQ or chat");
              }}
              className="inline-flex items-center gap-2 px-6 py-3 border transition-all text-sm md:text-base"
              style={{
                background: "var(--bg-secondary)",
                borderColor: "var(--border-default)",
                borderRadius: "var(--radius-lg)",
                color: "var(--text-primary)",
              }}
            >
              <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
              Chat with us
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                // Link to full FAQ
                console.log("View full FAQ");
              }}
              className="inline-flex items-center gap-2 px-6 py-3 border transition-all text-sm md:text-base"
              style={{
                background: "transparent",
                borderColor: "var(--border-default)",
                borderRadius: "var(--radius-lg)",
                color: "var(--text-quaternary)",
              }}
            >
              View full FAQ
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

