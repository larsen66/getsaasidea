"use client";
import React from "react";
import { motion } from "framer-motion";
import { BarChart3, MessageSquare, Target, CheckCircle2, Rocket, ArrowRight } from "lucide-react";

const reportFeatures = [
  {
    icon: BarChart3,
    title: "Search Demand Score",
    description: "See real search volume trends",
    preview: "trend",
    color: "var(--accent-blue)",
  },
  {
    icon: MessageSquare,
    title: "Real Pain Points",
    description: "Extracted from Reddit & forums",
    preview: "painPoints",
    color: "var(--accent-purple)",
  },
  {
    icon: Target,
    title: "Competition Analysis",
    description: "Gaps and opportunities highlighted",
    preview: "competition",
    color: "var(--accent-green)",
  },
  {
    icon: CheckCircle2,
    title: "GO/NO-GO Verdict",
    description: "Clear decision with reasoning",
    preview: "verdict",
    color: "var(--accent-green)",
  },
  {
    icon: Rocket,
    title: "Your Next Step",
    description: "Concrete action to take",
    preview: "nextStep",
    color: "var(--accent-blue)",
  },
];

const renderPreview = (previewType: string) => {
  switch (previewType) {
    case "trend":
      return (
        <div
          className="rounded p-3 h-24 flex flex-col justify-end"
          style={{
            background: "var(--bg-tertiary)",
            borderRadius: "var(--radius-md)",
          }}
        >
          <div className="flex items-end gap-1 h-full">
            {[40, 55, 45, 70, 65, 80, 75].map((height, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${height}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex-1 rounded-t"
                style={{ background: "var(--accent-blue)" }}
              />
            ))}
          </div>
          <div className="text-xs mt-2 text-center" style={{ color: "var(--text-quaternary)" }}>
            Trending ↑ 23%
          </div>
        </div>
      );

    case "painPoints":
      return (
        <div
          className="rounded p-3 h-24 space-y-2"
          style={{
            background: "var(--bg-tertiary)",
            borderRadius: "var(--radius-md)",
          }}
        >
          <div className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: "var(--accent-red)" }} />
            <div className="text-xs flex-1" style={{ color: "var(--text-secondary)" }}>
              "I waste hours tracking time manually..."
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: "var(--accent-red)" }} />
            <div className="text-xs flex-1" style={{ color: "var(--text-secondary)" }}>
              "Need something that syncs with calendar"
            </div>
          </div>
        </div>
      );

    case "competition":
      return (
        <div
          className="rounded p-3 h-24 space-y-2"
          style={{
            background: "var(--bg-tertiary)",
            borderRadius: "var(--radius-md)",
          }}
        >
          <div className="flex items-center justify-between">
            <div className="text-xs" style={{ color: "var(--text-tertiary)" }}>Competitor A</div>
            <div className="text-xs" style={{ color: "var(--accent-green)" }}>✓ Complex</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-xs" style={{ color: "var(--text-tertiary)" }}>Competitor B</div>
            <div className="text-xs" style={{ color: "var(--accent-blue)" }}>⚠ Expensive</div>
          </div>
          <div className="mt-2 pt-2 border-t" style={{ borderColor: "var(--border-default)" }}>
            <div className="text-xs font-medium" style={{ color: "var(--accent-blue)" }}>
              Gap: Simple & affordable
            </div>
          </div>
        </div>
      );

    case "verdict":
      return (
        <div
          className="rounded p-3 h-24 flex flex-col items-center justify-center"
          style={{
            background: "var(--bg-tertiary)",
            borderRadius: "var(--radius-md)",
          }}
        >
          <div className="border rounded-full px-4 py-2 mb-2" style={{ background: "rgba(34, 197, 94, 0.2)", borderColor: "rgba(34, 197, 94, 0.5)" }}>
            <span className="font-bold text-lg" style={{ color: "var(--accent-green)" }}>GO</span>
          </div>
          <div className="text-xs text-center" style={{ color: "var(--text-tertiary)" }}>
            Strong market demand detected
          </div>
        </div>
      );

    case "nextStep":
      return (
        <div
          className="rounded p-3 h-24 flex flex-col justify-center"
          style={{
            background: "var(--bg-tertiary)",
            borderRadius: "var(--radius-md)",
          }}
        >
          <div className="text-xs font-medium mb-2" style={{ color: "var(--text-primary)" }}>
            Build MVP focusing on:
          </div>
          <div className="space-y-1">
            <div className="text-xs flex items-center gap-2" style={{ color: "var(--text-tertiary)" }}>
              <span className="w-1 h-1 rounded-full" style={{ background: "var(--accent-blue)" }} />
              Calendar integration
            </div>
            <div className="text-xs flex items-center gap-2" style={{ color: "var(--text-tertiary)" }}>
              <span className="w-1 h-1 rounded-full" style={{ background: "var(--accent-blue)" }} />
              Simple UI
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
};

export function ReportFeaturesSection() {
  return (
    <section className="relative w-full pt-24 pb-40 px-4 md:px-8" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-24 md:mb-32 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold mb-4 tracking-tight" style={{ color: "var(--text-primary)" }}>
            Your Actionable Report Includes:
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            All features are ready. Join the waitlist to get early access.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-16 md:mb-24">
          {reportFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative rounded-lg p-8 transition-all duration-300 group overflow-hidden"
                style={{
                  background: "var(--bg-secondary)",
                  border: "var(--border-width) solid var(--border-default)",
                  borderRadius: "var(--radius-lg)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-default)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-default)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >

                {/* Header */}
                <div className="relative flex items-start gap-5 mb-6">
                  <div className="w-11 h-11 rounded-md flex items-center justify-center flex-shrink-0 border" style={{ background: "var(--bg-tertiary)", borderColor: "var(--border-default)" }}>
                    <IconComponent className="w-5 h-5" style={{ color: "var(--text-primary)" }} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-xl mb-2" style={{ color: "var(--text-primary)" }}>
                      {feature.title}
                    </h3>
                    <p style={{ color: "var(--text-tertiary)" }} className="text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Preview */}
                <div className="mt-4">{renderPreview(feature.preview)}</div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              // Scroll to steps section or open demo
              const stepsSection = document.querySelector('[data-section="steps"]');
              if (stepsSection) {
                stepsSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="inline-flex items-center gap-3 px-10 py-5 font-semibold rounded-lg border transition-all duration-300 text-lg md:text-xl"
            style={{
              background: "var(--text-primary)",
              color: "var(--bg-primary)",
              borderColor: "var(--text-primary)",
            }}
          >
            See Sample Report
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={1.5} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

