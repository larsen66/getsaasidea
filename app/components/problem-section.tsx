"use client";
import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, BrainCircuit, FolderX, ArrowDown } from "lucide-react";
import { useMounted } from "../hooks/use-mounted";

const storySteps = [
  {
    icon: Lightbulb,
    iconColor: "rgb(56, 189, 248)",
    text: "Great idea!",
    description: "You feel the excitement. This could be the one.",
  },
  {
    icon: BrainCircuit,
    iconColor: "rgb(115, 115, 125)",
    text: "*3 hours later...*",
    description: "You have 15 tabs open, a mess of conflicting data, and more questions than answers.",
    showChaos: true,
  },
  {
    icon: FolderX,
    iconColor: "rgb(239, 68, 68)",
    text: "Maybe later...",
    description: 'You close your laptop. The project is postponed "until you have more time to think."',
  },
];

export function ProblemSection() {
  const mounted = useMounted();
  
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
            We've All Been There...
          </h2>
        </motion.div>

        {/* Visual Story */}
        <div className="space-y-20 md:space-y-28">
          {storySteps.map((step, index) => (
            <motion.div
              key={index}
              initial={mounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col items-center"
            >
              {/* Icon and Text */}
              <div className="flex flex-col items-center mb-12 md:mb-16">
                <motion.div
                  initial={mounted ? { scale: 0.8, opacity: 0 } : { scale: 1, opacity: 1 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-lg flex items-center justify-center mb-8 border"
                  style={{
                    background: "rgb(15, 15, 17)",
                    borderColor: "rgba(39, 39, 42, 0.8)",
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
                  initial={mounted ? { opacity: 0, y: -10 } : { opacity: 1, y: 0 }}
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
                  initial={mounted ? { opacity: 0, scale: 0.95 } : { opacity: 1, scale: 1 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                  className="w-full max-w-2xl p-4 md:p-6 mb-6 border"
                  style={{
                    background: "rgb(15, 15, 17)",
                    borderRadius: "12px",
                    borderColor: "rgba(39, 39, 42, 0.8)",
                  }}
                >
                  <div className="p-3 md:p-4" style={{ background: "rgb(18, 18, 20)", borderRadius: "10px" }}>
                    {/* Browser tabs simulation */}
                    <div className="flex flex-wrap gap-1.5 mb-4 opacity-50">
                      {Array.from({ length: 10 }).map((_, i) => (
                        <div
                          key={i}
                          className="px-2 py-1 text-xs truncate max-w-[100px] md:max-w-[130px] border"
                          style={{
                            background: "rgb(24, 24, 27)",
                            borderRadius: "4px",
                            borderColor: "rgba(39, 39, 42, 0.8)",
                            color: "rgb(82, 82, 91)",
                            fontSize: "9px",
                          }}
                        >
                          Tab {i + 1}...
                        </div>
                      ))}
                    </div>
                    {/* Content chaos */}
                    <div className="space-y-2">
                      <div className="h-2 rounded w-full" style={{ background: "rgba(63, 63, 70, 0.4)" }}></div>
                      <div className="h-2 rounded w-5/6" style={{ background: "rgba(63, 63, 70, 0.4)" }}></div>
                      <div className="h-2 rounded w-4/5" style={{ background: "rgba(63, 63, 70, 0.4)" }}></div>
                      <div className="h-2 rounded w-full" style={{ background: "rgba(63, 63, 70, 0.4)" }}></div>
                      <div className="h-2 rounded w-3/4" style={{ background: "rgba(63, 63, 70, 0.4)" }}></div>
                    </div>
                    <div className="mt-4 text-center text-xs" style={{ color: "rgb(82, 82, 91)" }}>
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
          initial={mounted ? { opacity: 0, y: 10 } : { opacity: 1, y: 0 }}
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

