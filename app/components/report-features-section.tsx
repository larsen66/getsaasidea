"use client";
import React from "react";
import { motion } from "framer-motion";
import { BarChart3, MessageSquare, Target, CheckCircle2, Rocket, TrendingUp } from "lucide-react";
import { useMounted } from "../hooks/use-mounted";

export function ReportFeaturesSection() {
  const mounted = useMounted();

  return (
    <section className="relative w-full pt-24 pb-40 px-4 md:px-8" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={mounted ? { opacity: 0, y: 10 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 tracking-tight" style={{ color: "var(--text-primary)" }}>
            Your Actionable Report Includes
          </h2>
          <p className="text-lg md:text-xl max-w-2xl" style={{ color: "var(--text-secondary)" }}>
            Everything you need to validate your idea in one comprehensive report
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Search Demand - Large */}
          <motion.div
            initial={mounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="md:col-span-2 p-8 border"
            style={{
              background: "rgb(15, 15, 17)",
              borderColor: "rgba(39, 39, 42, 0.8)",
              borderRadius: "12px",
            }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center border" style={{ background: "rgb(18, 18, 20)", borderColor: "rgba(39, 39, 42, 0.8)" }}>
                <BarChart3 className="w-5 h-5" style={{ color: "var(--text-primary)" }} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-1" style={{ color: "var(--text-primary)" }}>
                  Search Demand Score
                </h3>
                <p className="text-sm" style={{ color: "rgb(115, 115, 125)" }}>
                  Real search volume trends and growth patterns
                </p>
              </div>
            </div>

            {/* Chart Preview */}
            <div className="mt-6 p-6" style={{ background: "rgb(18, 18, 20)", borderRadius: "10px" }}>
              <div className="flex items-end gap-2 h-32">
                {[35, 42, 38, 55, 52, 68, 65, 75, 72, 85, 82, 90].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
                    className="flex-1 rounded-t"
                    style={{ background: "rgb(82, 82, 91)" }}
                  />
                ))}
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="text-xs" style={{ color: "rgb(115, 115, 125)" }}>Last 12 months</span>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-3.5 h-3.5" style={{ color: "var(--text-primary)" }} strokeWidth={2} />
                  <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>+23% growth</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Real Pain Points */}
          <motion.div
            initial={mounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-8 border"
            style={{
              background: "rgb(15, 15, 17)",
              borderColor: "rgba(39, 39, 42, 0.8)",
              borderRadius: "12px",
            }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center border" style={{ background: "rgb(18, 18, 20)", borderColor: "rgba(39, 39, 42, 0.8)" }}>
                <MessageSquare className="w-5 h-5" style={{ color: "var(--text-primary)" }} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1" style={{ color: "var(--text-primary)" }}>
                  Pain Points
                </h3>
                <p className="text-sm" style={{ color: "rgb(115, 115, 125)" }}>
                  From Reddit & forums
                </p>
              </div>
            </div>

            <div className="space-y-3 mt-6">
              {[
                { text: "Manual tracking takes hours", count: "247" },
                { text: "Need calendar sync", count: "189" },
                { text: "Too complex to use", count: "156" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + i * 0.1 }}
                  className="p-3 border"
                  style={{
                    background: "rgb(18, 18, 20)",
                    borderRadius: "8px",
                    borderColor: "rgba(39, 39, 42, 0.8)",
                  }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-sm flex-1" style={{ color: "var(--text-tertiary)" }}>
                      {item.text}
                    </span>
                    <span className="text-xs font-semibold" style={{ color: "rgb(115, 115, 125)" }}>
                      {item.count}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Competition Analysis */}
          <motion.div
            initial={mounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="p-8 border"
            style={{
              background: "rgb(15, 15, 17)",
              borderColor: "rgba(39, 39, 42, 0.8)",
              borderRadius: "12px",
            }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center border" style={{ background: "rgb(18, 18, 20)", borderColor: "rgba(39, 39, 42, 0.8)" }}>
                <Target className="w-5 h-5" style={{ color: "var(--text-primary)" }} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1" style={{ color: "var(--text-primary)" }}>
                  Competition
                </h3>
                <p className="text-sm" style={{ color: "rgb(115, 115, 125)" }}>
                  Market gaps
                </p>
              </div>
            </div>

            <div className="space-y-3 mt-6">
              {[
                { name: "Toggl", weakness: "Complex UI" },
                { name: "Harvest", weakness: "Expensive" },
                { name: "Clockify", weakness: "No auto-track" }
              ].map((comp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + i * 0.1 }}
                  className="flex items-center justify-between p-3 border"
                  style={{
                    background: "rgb(18, 18, 20)",
                    borderRadius: "8px",
                    borderColor: "rgba(39, 39, 42, 0.8)",
                  }}
                >
                  <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                    {comp.name}
                  </span>
                  <span className="text-xs" style={{ color: "rgb(115, 115, 125)" }}>
                    {comp.weakness}
                  </span>
                </motion.div>
              ))}

              <div className="mt-4 p-3 border-t" style={{ borderColor: "rgba(39, 39, 42, 0.8)" }}>
                <div className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                  Gap: Simple & affordable
                </div>
              </div>
            </div>
          </motion.div>

          {/* GO/NO-GO Verdict - Large */}
          <motion.div
            initial={mounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="md:col-span-2 p-8 border"
            style={{
              background: "rgb(15, 15, 17)",
              borderColor: "rgba(39, 39, 42, 0.8)",
              borderRadius: "12px",
            }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center border" style={{ background: "rgb(18, 18, 20)", borderColor: "rgba(39, 39, 42, 0.8)" }}>
                <CheckCircle2 className="w-5 h-5" style={{ color: "var(--text-primary)" }} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-1" style={{ color: "var(--text-primary)" }}>
                  GO/NO-GO Verdict
                </h3>
                <p className="text-sm" style={{ color: "rgb(115, 115, 125)" }}>
                  Clear decision with confidence score
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {/* Verdict */}
              <div className="p-6 border" style={{ background: "rgb(18, 18, 20)", borderRadius: "10px", borderColor: "rgba(39, 39, 42, 0.8)" }}>
                <div className="text-xs uppercase tracking-wider mb-3" style={{ color: "rgb(115, 115, 125)" }}>
                  Verdict
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-4xl font-bold" style={{ color: "var(--text-primary)" }}>GO</div>
                </div>
                <div className="text-sm mt-2" style={{ color: "rgb(115, 115, 125)" }}>
                  Strong market demand detected
                </div>
              </div>

              {/* Confidence */}
              <div className="p-6 border" style={{ background: "rgb(18, 18, 20)", borderRadius: "10px", borderColor: "rgba(39, 39, 42, 0.8)" }}>
                <div className="text-xs uppercase tracking-wider mb-3" style={{ color: "rgb(115, 115, 125)" }}>
                  Confidence
                </div>
                <div className="text-4xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>87%</div>
                <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(39, 39, 42, 0.8)" }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "87%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full"
                    style={{ background: "rgb(82, 82, 91)" }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Next Steps */}
          <motion.div
            initial={mounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="p-8 border"
            style={{
              background: "rgb(15, 15, 17)",
              borderColor: "rgba(39, 39, 42, 0.8)",
              borderRadius: "12px",
            }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center border" style={{ background: "rgb(18, 18, 20)", borderColor: "rgba(39, 39, 42, 0.8)" }}>
                <Rocket className="w-5 h-5" style={{ color: "var(--text-primary)" }} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1" style={{ color: "var(--text-primary)" }}>
                  Next Steps
                </h3>
                <p className="text-sm" style={{ color: "rgb(115, 115, 125)" }}>
                  Action plan
                </p>
              </div>
            </div>

            <div className="space-y-3 mt-6">
              {[
                "Build MVP with calendar sync",
                "Target freelancers on Twitter",
                "Price at $9-12/month"
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + i * 0.1 }}
                  className="flex items-start gap-3 p-3 border"
                  style={{
                    background: "rgb(18, 18, 20)",
                    borderRadius: "8px",
                    borderColor: "rgba(39, 39, 42, 0.8)",
                  }}
                >
                  <div className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 text-xs font-semibold mt-0.5"
                    style={{
                      background: "rgba(39, 39, 42, 0.8)",
                      color: "rgb(161, 161, 170)",
                    }}
                  >
                    {i + 1}
                  </div>
                  <span className="text-sm" style={{ color: "var(--text-tertiary)" }}>
                    {step}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={mounted ? { opacity: 0, y: 10 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-base" style={{ color: "rgb(115, 115, 125)" }}>
            All features ready. Join the waitlist for early access.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
