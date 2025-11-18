"use client";
import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, BrainCircuit, FolderX, ArrowDown } from "lucide-react";

const storySteps = [
  {
    icon: Lightbulb,
    iconColor: "var(--accent-blue)",
    text: "Great idea!",
    description: "You feel the excitement. This could be the one.",
  },
  {
    icon: BrainCircuit,
    iconColor: "var(--accent-purple)",
    text: "*3 hours later...*",
    description: "You have 15 tabs open, a mess of conflicting data, and more questions than answers.",
    showChaos: true,
  },
  {
    icon: FolderX,
    iconColor: "var(--accent-red)",
    text: "Maybe later...",
    description: 'You close your laptop. The project is postponed "until you have more time to think."',
  },
];

export function ProblemSection() {
  return (
    <section className="section-container relative w-full px-4 md:px-8" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-24 md:mb-32 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold mb-6 tracking-tight" style={{ color: "var(--text-primary)" }}>
            We've All Been There...
          </h2>
        </motion.div>

        {/* Visual Story */}
        <div className="space-y-20 md:space-y-28">
          {storySteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col items-center"
            >
              {/* Icon and Text */}
              <div className="flex flex-col items-center mb-12 md:mb-16">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-md flex items-center justify-center mb-8 border"
                  style={{
                    background: "var(--bg-secondary)",
                    borderColor: "var(--border-default)",
                  }}
                >
                  <step.icon className="w-8 h-8 md:w-10 md:h-10" style={{ color: "var(--text-primary)" }} strokeWidth={1.5} />
                </motion.div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center tracking-tight" style={{ color: "var(--text-primary)" }}>
                  {step.text}
                </div>
              </div>

              {/* Arrow Down (except for last step) */}
              {index < storySteps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
                  className="mb-12 md:mb-16"
                >
                  <ArrowDown className="w-6 h-6 md:w-7 md:h-7" style={{ color: "var(--text-disabled)" }} strokeWidth={1.5} />
                </motion.div>
              )}

              {/* Screenshot of tab chaos (for step 2) */}
              {step.showChaos && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                  className="w-full max-w-2xl p-4 md:p-6 mb-6 border"
                  style={{
                    background: "var(--bg-tertiary)",
                    borderRadius: "var(--radius-lg)",
                    borderColor: "var(--border-default)",
                  }}
                >
                  <div className="p-3 md:p-4" style={{ background: "var(--bg-secondary)", borderRadius: "var(--radius-md)" }}>
                    {/* Browser tabs simulation */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div
                          key={i}
                          className="px-3 py-1.5 text-xs truncate max-w-[120px] md:max-w-[150px]"
                          style={{
                            background: "var(--bg-tertiary)",
                            borderRadius: "var(--radius-sm)",
                            color: "var(--text-tertiary)",
                          }}
                        >
                          Tab {i + 1}...
                        </div>
                      ))}
                    </div>
                    {/* Content chaos */}
                    <div className="space-y-2">
                      <div className="h-3 rounded w-full" style={{ background: "var(--bg-tertiary)" }}></div>
                      <div className="h-3 rounded w-5/6" style={{ background: "var(--bg-tertiary)" }}></div>
                      <div className="h-3 rounded w-4/5" style={{ background: "var(--bg-tertiary)" }}></div>
                      <div className="h-3 rounded w-full" style={{ background: "var(--bg-tertiary)" }}></div>
                      <div className="h-3 rounded w-3/4" style={{ background: "var(--bg-tertiary)" }}></div>
                    </div>
                    <div className="mt-4 text-center text-xs" style={{ color: "var(--text-disabled)" }}>
                      Tab chaos screenshot
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Closing Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mt-24 md:mt-32 text-center"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed max-w-3xl mx-auto mb-6" style={{ color: "var(--text-primary)" }}>
            You're not lazy. You're just using broken tools.
          </p>
          <p className="text-lg md:text-xl mt-6 leading-relaxed max-w-3xl mx-auto" style={{ color: "var(--text-quaternary)" }}>
            Market research shouldn't kill your momentum.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

