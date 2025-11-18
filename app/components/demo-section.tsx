"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp } from "lucide-react";
import { useMounted } from "../hooks/use-mounted";

export function DemoSection() {
  const mounted = useMounted();

  return (
    <section className="relative w-full pt-24 pb-40 px-4 md:px-8" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={mounted ? { opacity: 0 } : { opacity: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold mb-4 tracking-tight" style={{ color: "var(--text-primary)" }}>
            Sample Report
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            AI Time Tracking Tool Analysis
          </p>
        </motion.div>

        {/* Demo Report */}
        <motion.div
          initial={mounted ? { opacity: 0 } : { opacity: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div
            className="border"
            style={{
              background: "rgb(15, 15, 17)",
              borderColor: "rgba(39, 39, 42, 0.8)",
              borderRadius: "12px",
            }}
          >
            {/* Header with Verdict */}
            <div className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b" style={{ borderColor: "rgba(39, 39, 42, 0.8)" }}>
              <div>
                <div className="text-sm mb-1" style={{ color: "rgb(115, 115, 125)" }}>Verdict</div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" style={{ color: "rgb(125, 211, 252)" }} strokeWidth={2} />
                  <span className="font-bold text-2xl" style={{ color: "rgb(224, 242, 254)" }}>GO</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm mb-1" style={{ color: "rgb(115, 115, 125)" }}>Confidence</div>
                <div className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>87%</div>
              </div>
            </div>

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "rgba(39, 39, 42, 0.8)" }}>
              {/* Search Volume */}
              <div className="p-6" style={{ background: "rgb(15, 15, 17)" }}>
                <div className="text-xs mb-3 uppercase tracking-wider" style={{ color: "rgb(115, 115, 125)" }}>
                  Search Volume
                </div>
                <div className="text-2xl font-bold mb-1" style={{ color: "var(--text-primary)" }}>2.3K+</div>
                <div className="flex items-center gap-1 text-sm" style={{ color: "rgb(56, 189, 248)" }}>
                  <TrendingUp className="w-3.5 h-3.5" strokeWidth={2} />
                  <span>↑ 23% last 3 months</span>
                </div>
              </div>

              {/* Competition Level */}
              <div className="p-6" style={{ background: "rgb(15, 15, 17)" }}>
                <div className="text-xs mb-3 uppercase tracking-wider" style={{ color: "rgb(115, 115, 125)" }}>
                  Competition
                </div>
                <div className="text-2xl font-bold mb-1" style={{ color: "var(--text-primary)" }}>Medium</div>
                <div className="text-sm" style={{ color: "rgb(115, 115, 125)" }}>
                  Gap: Simple solution
                </div>
              </div>

              {/* Market Size */}
              <div className="p-6" style={{ background: "rgb(15, 15, 17)" }}>
                <div className="text-xs mb-3 uppercase tracking-wider" style={{ color: "rgb(115, 115, 125)" }}>
                  TAM
                </div>
                <div className="text-2xl font-bold mb-1" style={{ color: "var(--text-primary)" }}>$4.2B</div>
                <div className="text-sm" style={{ color: "rgb(115, 115, 125)" }}>
                  Time tracking market
                </div>
              </div>
            </div>

            {/* Pain Points */}
            <div className="p-6 md:p-8 border-t" style={{ borderColor: "rgba(39, 39, 42, 0.8)" }}>
              <div className="text-xs mb-4 uppercase tracking-wider" style={{ color: "rgb(115, 115, 125)" }}>
                Top Pain Points (from 247 users)
              </div>
              <div className="space-y-3">
                {[
                  { text: "Manual time tracking is time-consuming", percent: 67, sources: "Reddit, Twitter" },
                  { text: "Need calendar integration", percent: 54, sources: "Product Hunt" },
                  { text: "Current tools are too complex", percent: 43, sources: "Reviews, Forums" }
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-1.5">
                      <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                        {item.text}
                      </p>
                      <span className="text-xs font-semibold ml-3" style={{ color: "var(--text-primary)" }}>
                        {item.percent}%
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1 rounded-full overflow-hidden" style={{ background: "rgba(39, 39, 42, 0.8)" }}>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.percent}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.1, duration: 0.5, ease: "easeOut" }}
                          className="h-full"
                          style={{ background: "rgb(56, 189, 248)" }}
                        />
                      </div>
                      <span className="text-xs whitespace-nowrap" style={{ color: "rgb(115, 115, 125)" }}>
                        {item.sources}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Competitors */}
            <div className="p-6 md:p-8 border-t" style={{ borderColor: "rgba(39, 39, 42, 0.8)" }}>
              <div className="text-xs mb-4 uppercase tracking-wider" style={{ color: "rgb(115, 115, 125)" }}>
                Competition Analysis
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { name: "Toggl", users: "5M+", weakness: "Complex UI" },
                  { name: "Harvest", users: "70K+", weakness: "Expensive" },
                  { name: "Clockify", users: "10M+", weakness: "No auto-tracking" }
                ].map((comp, i) => (
                  <div
                    key={i}
                    className="p-3 border"
                    style={{
                      background: "rgb(18, 18, 20)",
                      borderColor: "rgba(39, 39, 42, 0.8)",
                      borderRadius: "8px",
                    }}
                  >
                    <div className="font-semibold text-sm mb-1" style={{ color: "var(--text-primary)" }}>
                      {comp.name}
                    </div>
                    <div className="text-xs mb-1" style={{ color: "rgb(115, 115, 125)" }}>
                      {comp.users} users
                    </div>
                    <div className="text-xs" style={{ color: "rgb(239, 68, 68)" }}>
                      ✗ {comp.weakness}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Plan */}
            <div className="p-6 md:p-8 border-t" style={{ borderColor: "rgba(39, 39, 42, 0.8)", background: "rgba(14, 165, 233, 0.03)" }}>
              <div className="text-xs mb-4 uppercase tracking-wider" style={{ color: "rgb(115, 115, 125)" }}>
                Recommended Action Plan
              </div>
              <div className="space-y-2">
                {[
                  { step: "1. MVP", action: "Focus on calendar integration + auto-tracking", timeline: "4-6 weeks" },
                  { step: "2. Launch", action: "Target freelancers on Twitter/X & Product Hunt", timeline: "Week 7" },
                  { step: "3. Pricing", action: "Start at $9-12/month (vs competitors $15-25)", timeline: "Day 1" }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 border"
                    style={{
                      background: "rgb(15, 15, 17)",
                      borderColor: "rgba(39, 39, 42, 0.8)",
                      borderRadius: "8px",
                    }}
                  >
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "rgb(125, 211, 252)" }} strokeWidth={2} />
                    <div className="flex-1">
                      <div className="font-medium text-sm mb-0.5" style={{ color: "var(--text-primary)" }}>
                        {item.step} {item.action}
                      </div>
                      <div className="text-xs" style={{ color: "rgb(115, 115, 125)" }}>
                        Timeline: {item.timeline}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 text-center border-t" style={{ borderColor: "rgba(39, 39, 42, 0.8)" }}>
              <div className="text-xs" style={{ color: "rgb(115, 115, 125)" }}>
                Generated in 2m 14s • Sources: Reddit (15), Product Hunt (8), Google Trends, Twitter (12)
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
