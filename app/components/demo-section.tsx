"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, X, ArrowRight, CheckCircle2 } from "lucide-react";

export function DemoSection() {
  const [showVideo, setShowVideo] = useState(false);
  const [activeTab, setActiveTab] = useState<"before" | "after">("before");

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
            See It In Action
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            Preview of what's coming. Everything is ready, early access opening soon.
          </p>
        </motion.div>

        {/* Video/Demo Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 md:mb-12"
        >
          {!showVideo ? (
            <div
              className="relative rounded-lg overflow-hidden"
              style={{
                background: "var(--bg-secondary)",
                border: "var(--border-width) solid var(--border-default)",
                borderRadius: "var(--radius-lg)",
              }}
            >
              {/* Before/After Tabs */}
              <div className="flex" style={{ borderBottom: "var(--border-width) solid var(--border-default)" }}>
                <button
                  onClick={() => setActiveTab("before")}
                  className={`flex-1 px-6 py-4 text-sm md:text-base font-medium transition-colors ${
                    activeTab === "before"
                      ? "border-b-2"
                      : ""
                  }`}
                  style={{
                    color: activeTab === "before" ? "var(--text-primary)" : "var(--text-quaternary)",
                    borderBottomColor: activeTab === "before" ? "var(--accent-red)" : "transparent",
                    background: activeTab === "before" ? "var(--bg-tertiary)" : "transparent",
                  }}
                >
                  ❌ Before: The Chaos
                </button>
                <button
                  onClick={() => setActiveTab("after")}
                  className={`flex-1 px-6 py-4 text-sm md:text-base font-medium transition-colors ${
                    activeTab === "after"
                      ? "border-b-2"
                      : ""
                  }`}
                  style={{
                    color: activeTab === "after" ? "var(--text-primary)" : "var(--text-quaternary)",
                    borderBottomColor: activeTab === "after" ? "var(--accent-green)" : "transparent",
                    background: activeTab === "after" ? "var(--bg-tertiary)" : "transparent",
                  }}
                >
                  ✅ After: Clear Verdict
                </button>
              </div>

              {/* Content Area */}
              <div className="p-6 md:p-8 min-h-[400px] md:min-h-[500px]">
                {activeTab === "before" ? (
                  <div className="space-y-4">
                    {/* Browser Tabs Chaos */}
                    <div
                      className="rounded-lg p-4"
                      style={{
                        background: "var(--bg-tertiary)",
                        border: "var(--border-width) solid var(--border-default)",
                        borderRadius: "var(--radius-lg)",
                      }}
                    >
                      <div className="flex flex-wrap gap-2 mb-4">
                        {Array.from({ length: 15 }).map((_, i) => (
                          <div
                            key={i}
                            className="rounded px-3 py-1.5 text-xs truncate max-w-[140px]"
                            style={{
                              color: "var(--text-tertiary)",
                              background: "var(--bg-muted)",
                              border: "var(--border-width) solid var(--border-subtle)",
                              borderRadius: "var(--radius-sm)",
                            }}
                          >
                            {i === 0 && "Google Trends..."}
                            {i === 1 && "Reddit r/SaaS..."}
                            {i === 2 && "Product Hunt..."}
                            {i === 3 && "Ahrefs Keyword..."}
                            {i === 4 && "Indie Hackers..."}
                            {i >= 5 && `Tab ${i + 1}...`}
                          </div>
                        ))}
                      </div>

                      {/* Chaotic Content */}
                      <div className="space-y-3">
                        <div
                          className="rounded p-4"
                          style={{
                            background: "var(--bg-muted)",
                            border: "var(--border-width) solid var(--border-subtle)",
                            borderRadius: "var(--radius-md)",
                          }}
                        >
                          <div className="h-3 rounded w-3/4 mb-2" style={{ background: "var(--border-strong)" }}></div>
                          <div className="h-3 rounded w-full mb-2" style={{ background: "var(--border-strong)" }}></div>
                          <div className="h-3 rounded w-5/6" style={{ background: "var(--border-strong)" }}></div>
                        </div>
                        <div
                          className="rounded p-4"
                          style={{
                            background: "var(--bg-muted)",
                            border: "var(--border-width) solid var(--border-subtle)",
                            borderRadius: "var(--radius-md)",
                          }}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 rounded-full" style={{ background: "var(--accent-blue)" }}></div>
                            <div className="h-2 rounded w-1/2" style={{ background: "var(--border-strong)" }}></div>
                          </div>
                          <div className="h-2 rounded w-full mb-2" style={{ background: "var(--border-strong)" }}></div>
                          <div className="h-2 rounded w-2/3" style={{ background: "var(--border-strong)" }}></div>
                        </div>
                        <div
                          className="rounded p-4"
                          style={{
                            background: "var(--bg-muted)",
                            border: "var(--border-width) solid var(--border-subtle)",
                            borderRadius: "var(--radius-md)",
                          }}
                        >
                          <div className="h-2 rounded w-full mb-2" style={{ background: "var(--border-strong)" }}></div>
                          <div className="h-2 rounded w-4/5 mb-2" style={{ background: "var(--border-strong)" }}></div>
                          <div className="h-2 rounded w-3/4" style={{ background: "var(--border-strong)" }}></div>
                        </div>
                      </div>

                      <div className="mt-4 text-center text-sm" style={{ color: "var(--text-quaternary)" }}>
                        3 hours later... Still confused 🤯
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Clean Report */}
                    <div
                      className="rounded-lg p-6 md:p-8"
                      style={{
                        background: "var(--bg-tertiary)",
                        border: "var(--border-width) solid var(--border-default)",
                        borderRadius: "var(--radius-lg)",
                      }}
                    >
                      {/* Header with Verdict */}
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <h3 className="text-xl md:text-2xl font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
                            Market Analysis Report
                          </h3>
                          <p className="text-sm" style={{ color: "var(--text-tertiary)" }}>
                            Generated in 2 minutes
                          </p>
                        </div>
                          <div className="border rounded-full px-6 py-3" style={{ background: "rgba(34, 197, 94, 0.2)", borderColor: "rgba(34, 197, 94, 0.5)" }}>
                            <span className="font-bold text-xl" style={{ color: "var(--accent-green)" }}>GO</span>
                          </div>
                      </div>

                      {/* Report Sections */}
                      <div className="space-y-4">
                        {/* Search Demand */}
                        <div
                          className="rounded-lg p-4"
                          style={{
                            background: "var(--bg-muted)",
                            border: "var(--border-width) solid var(--border-subtle)",
                            borderRadius: "var(--radius-lg)",
                          }}
                        >
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-xl">📊</span>
                            <h4 className="font-medium" style={{ color: "var(--text-primary)" }}>Search Demand Score</h4>
                          </div>
                          <div className="flex items-end gap-1 h-16 mb-2">
                            {[40, 55, 45, 70, 65, 80, 75, 85].map((height, i) => (
                              <div
                                key={i}
                                className="flex-1 rounded-t"
                                style={{ height: `${height}%`, background: "var(--accent-blue)" }}
                              />
                            ))}
                          </div>
                          <p className="text-sm" style={{ color: "var(--text-tertiary)" }}>2.3K+ monthly searches, ↑ 23% trend</p>
                        </div>

                        {/* Pain Points */}
                        <div
                          className="rounded-lg p-4"
                          style={{
                            background: "var(--bg-muted)",
                            border: "var(--border-width) solid var(--border-subtle)",
                            borderRadius: "var(--radius-lg)",
                          }}
                        >
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-xl">💬</span>
                            <h4 className="font-medium" style={{ color: "var(--text-primary)" }}>Real Pain Points</h4>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: "var(--accent-red)" }} />
                              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                                "I waste hours tracking time manually..."
                              </p>
                            </div>
                            <div className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: "var(--accent-red)" }} />
                              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                                "Need something that syncs with calendar"
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Next Steps */}
                        <div
                          className="rounded-lg p-4"
                          style={{
                            background: "var(--bg-muted)",
                            border: "var(--border-width) solid var(--border-subtle)",
                            borderRadius: "var(--radius-lg)",
                          }}
                        >
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-xl">🚀</span>
                            <h4 className="font-medium" style={{ color: "var(--text-primary)" }}>Your Next Step</h4>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                              <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: "var(--accent-green)" }} strokeWidth={1.5} />
                              <span>Build MVP focusing on calendar integration</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                              <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: "var(--accent-green)" }} strokeWidth={1.5} />
                              <span>Target freelancers on Twitter/X</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                              <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: "var(--accent-green)" }} strokeWidth={1.5} />
                              <span>Price point: $9-15/month</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Video Button Overlay */}
              <div className="absolute top-4 right-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowVideo(true)}
                  className="flex items-center gap-2 px-4 py-2 backdrop-blur-sm border rounded-lg transition-colors text-sm"
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    borderRadius: "var(--radius-lg)",
                    color: "var(--text-primary)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                  }}
                >
                  <Play className="w-4 h-4" strokeWidth={1.5} />
                  Watch Walkthrough
                </motion.button>
              </div>
            </div>
          ) : (
            <div
              className="relative rounded-lg overflow-hidden"
              style={{
                background: "var(--bg-secondary)",
                border: "var(--border-width) solid var(--border-default)",
                borderRadius: "var(--radius-lg)",
              }}
            >
              {/* Video Placeholder - Replace with actual Loom embed */}
              <div
                className="relative aspect-video flex items-center justify-center"
                style={{ background: "var(--bg-tertiary)" }}
              >
                <div className="text-center p-8">
                  <div className="mb-4">
                    <Play className="w-12 h-12 mx-auto" style={{ color: "var(--text-quaternary)" }} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl mb-2" style={{ color: "var(--text-primary)" }}>Video Walkthrough</h3>
                  <p className="text-sm mb-6" style={{ color: "var(--text-tertiary)" }}>
                    Replace this with your Loom embed code
                  </p>
                  {/* Example Loom embed - replace with actual embed code */}
                  <div
                    className="rounded p-4 text-xs font-mono text-left max-w-md mx-auto"
                    style={{
                      color: "var(--text-quaternary)",
                      background: "var(--bg-muted)",
                      borderRadius: "var(--radius-md)",
                    }}
                  >
                    {`<iframe
  src="https://www.loom.com/embed/YOUR_VIDEO_ID"
  frameborder="0"
  allowfullscreen
  style="width: 100%; height: 100%;"
></iframe>`}
                  </div>
                </div>
                <button
                  onClick={() => setShowVideo(false)}
                  className="absolute top-4 right-4 p-2 backdrop-blur-sm border rounded-lg transition-colors"
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    borderRadius: "var(--radius-lg)",
                    color: "var(--text-primary)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                  }}
                >
                  <X className="w-5 h-5" strokeWidth={1.5} />
                </button>
              </div>
            </div>
          )}
        </motion.div>

        {/* Stats Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full"
            style={{
              background: "var(--bg-secondary)",
              border: "var(--border-width) solid var(--border-default)",
            }}
          >
            <span className="text-sm md:text-base" style={{ color: "var(--text-secondary)" }}>
              Based on analysis of{" "}
              <span className="font-semibold" style={{ color: "var(--text-primary)" }}>500+ real SaaS ideas</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

