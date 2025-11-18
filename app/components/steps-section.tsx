"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Clock, TrendingUp } from "lucide-react";
import { useMounted } from "../hooks/use-mounted";

const steps = [
  {
    number: 1,
    title: "Describe Your Idea",
    description: "Tell us your SaaS idea in plain English",
    duration: "30 seconds",
  },
  {
    number: 2,
    title: "AI Analyzes Market",
    description: "We scan trends, competition, and demand",
    duration: "2 minutes",
  },
  {
    number: 3,
    title: "Get Clear Verdict",
    description: "Receive GO/NO-GO with action plan",
    duration: "instant",
  },
];

const exampleIdea = "A tool that helps freelancers automatically track billable hours and generate invoices from their calendar events.";

export function StepsSection() {
  const mounted = useMounted();
  const [activeStep, setActiveStep] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showVerdict, setShowVerdict] = useState(false);

  // Auto-play through steps
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setActiveStep(0);
    }, 500);

    const timer2 = setTimeout(() => {
      setInputValue(exampleIdea);
      setTimeout(() => setActiveStep(1), 500);
    }, 2000);

    const timer3 = setTimeout(() => {
      setIsAnalyzing(true);
    }, 3000);

    const timer4 = setTimeout(() => {
      setActiveStep(2);
      setIsAnalyzing(false);
      setShowVerdict(true);
    }, 7000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  const renderStepContent = (stepIndex: number) => {
    switch (stepIndex) {
      case 0:
        return (
          <motion.div
            key="step-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="w-full"
          >
            <div
              className="p-8 border"
              style={{
                background: "rgb(15, 15, 17)",
                borderColor: "rgba(39, 39, 42, 0.8)",
                borderRadius: "12px",
              }}
            >
              {/* Label */}
              <div className="text-xs uppercase tracking-wider mb-6" style={{ color: "rgb(115, 115, 125)" }}>
                Step 1: Input
              </div>

              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Describe your SaaS idea..."
                className="w-full h-40 p-5 border resize-none text-base focus:outline-none transition-all"
                style={{
                  background: "rgb(18, 18, 20)",
                  borderColor: "rgba(39, 39, 42, 0.8)",
                  borderRadius: "10px",
                  color: "var(--text-primary)",
                }}
              />

              {!inputValue && (
                <div className="mt-4 text-sm italic" style={{ color: "rgb(115, 115, 125)" }}>
                  Example: {exampleIdea}
                </div>
              )}
            </div>
          </motion.div>
        );

      case 1:
        return (
          <motion.div
            key="step-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="w-full"
          >
            <div
              className="p-8 border"
              style={{
                background: "rgb(15, 15, 17)",
                borderColor: "rgba(39, 39, 42, 0.8)",
                borderRadius: "12px",
              }}
            >
              {/* Label */}
              <div className="text-xs uppercase tracking-wider mb-6" style={{ color: "rgb(115, 115, 125)" }}>
                Step 2: Analysis
              </div>

              {isAnalyzing ? (
                <div className="space-y-8">
                  {/* Scanning header */}
                  <div className="mb-6">
                    <div className="font-medium text-lg mb-1" style={{ color: "var(--text-primary)" }}>
                      Analyzing market data
                    </div>
                    <div className="text-sm" style={{ color: "rgb(115, 115, 125)" }}>
                      Scanning multiple sources...
                    </div>
                  </div>

                  {/* Simple progress bar */}
                  <div className="relative">
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(39, 39, 42, 0.8)" }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 3, ease: "easeOut" }}
                        className="h-full"
                        style={{ background: "rgb(82, 82, 91)" }}
                      />
                    </div>
                  </div>

                  {/* Data sources grid */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { name: "Reddit", posts: "247" },
                      { name: "Product Hunt", reviews: "89" },
                      { name: "Google Trends", trend: "+23%" }
                    ].map((source, i) => (
                      <motion.div
                        key={source.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.15, duration: 0.3 }}
                        className="p-4 text-center border"
                        style={{
                          background: "rgb(18, 18, 20)",
                          borderRadius: "8px",
                          borderColor: "rgba(39, 39, 42, 0.8)",
                        }}
                      >
                        <div className="text-xs mb-2" style={{ color: "rgb(115, 115, 125)" }}>
                          {source.name}
                        </div>
                        <div className="font-semibold text-lg" style={{ color: "var(--text-primary)" }}>
                          {source.posts || source.reviews || source.trend}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Status messages */}
                  <div className="space-y-2.5">
                    {[
                      "Analyzing search demand...",
                      "Identifying pain points...",
                      "Evaluating competition..."
                    ].map((msg, i) => (
                      <motion.div
                        key={msg}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: i * 0.4, duration: 0.3 }}
                        className="flex items-center gap-3 text-sm"
                        style={{ color: "rgb(115, 115, 125)" }}
                      >
                        <div className="w-1 h-1 rounded-full" style={{ background: "rgb(82, 82, 91)" }} />
                        {msg}
                      </motion.div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center py-20">
                  <div className="text-center" style={{ color: "rgb(115, 115, 125)" }}>
                    Click step 2 to analyze
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            key="step-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="w-full"
          >
            <div
              className="p-8 border"
              style={{
                background: "rgb(15, 15, 17)",
                borderColor: "rgba(39, 39, 42, 0.8)",
                borderRadius: "12px",
              }}
            >
              {/* Label */}
              <div className="text-xs uppercase tracking-wider mb-6" style={{ color: "rgb(115, 115, 125)" }}>
                Step 3: Verdict
              </div>

              {showVerdict ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  {/* Verdict Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center border"
                        style={{
                          background: "rgb(18, 18, 20)",
                          borderColor: "rgba(39, 39, 42, 0.8)",
                        }}
                      >
                        <CheckCircle2 className="w-6 h-6" style={{ color: "var(--text-primary)" }} strokeWidth={2} />
                      </div>
                      <div>
                        <div className="font-bold text-3xl tracking-tight" style={{ color: "var(--text-primary)" }}>
                          GO
                        </div>
                        <div className="text-sm" style={{ color: "rgb(115, 115, 125)" }}>
                          Strong market signal
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs mb-1" style={{ color: "rgb(115, 115, 125)" }}>
                        CONFIDENCE
                      </div>
                      <div className="text-3xl font-bold" style={{ color: "var(--text-primary)" }}>
                        87%
                      </div>
                    </div>
                  </div>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-3 gap-px" style={{ background: "rgba(39, 39, 42, 0.8)" }}>
                    {[
                      { label: "Search Vol.", value: "2.3K+", trend: "+23%" },
                      { label: "Competition", value: "Medium", trend: "Gap found" },
                      { label: "TAM", value: "$4.2B", trend: "Growing" }
                    ].map((metric, i) => (
                      <motion.div
                        key={metric.label}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: i * 0.1, duration: 0.3 }}
                        className="p-4"
                        style={{ background: "rgb(18, 18, 20)" }}
                      >
                        <div className="text-xs mb-2" style={{ color: "rgb(115, 115, 125)" }}>
                          {metric.label}
                        </div>
                        <div className="font-bold text-xl mb-1" style={{ color: "var(--text-primary)" }}>
                          {metric.value}
                        </div>
                        <div className="flex items-center gap-1 text-xs" style={{ color: "rgb(115, 115, 125)" }}>
                          <TrendingUp className="w-3 h-3" strokeWidth={2} />
                          {metric.trend}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Next Steps */}
                  <div
                    className="p-5 border"
                    style={{
                      background: "rgb(18, 18, 20)",
                      borderColor: "rgba(39, 39, 42, 0.8)",
                      borderRadius: "10px",
                    }}
                  >
                    <div className="text-xs uppercase tracking-wider mb-4" style={{ color: "rgb(115, 115, 125)" }}>
                      Recommended Action
                    </div>
                    <div className="space-y-3">
                      {[
                        "Build MVP: Calendar integration + auto-tracking",
                        "Target: Freelancers on Twitter/X & Product Hunt",
                        "Pricing: $9-12/mo (vs competitors $15-25)"
                      ].map((step, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 + i * 0.1, duration: 0.3 }}
                          className="flex items-start gap-3"
                        >
                          <div
                            className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 text-xs font-semibold mt-0.5"
                            style={{
                              background: "rgba(39, 39, 42, 0.8)",
                              color: "rgb(161, 161, 170)",
                            }}
                          >
                            {i + 1}
                          </div>
                          <div className="text-sm" style={{ color: "var(--text-tertiary)" }}>
                            {step}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="flex items-center justify-center py-20">
                  <div className="text-center" style={{ color: "rgb(115, 115, 125)" }}>
                    Verdict will appear here
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <section data-section="steps" className="section-container relative w-full px-4 md:px-8" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={mounted ? { opacity: 0, y: 10 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-24 md:mb-32 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold mb-6 tracking-tight" style={{ color: "var(--text-primary)" }}>
            How It Works
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            From idea to verdict in 3 simple steps
          </p>
        </motion.div>

        {/* Steps Layout */}
        <div className="grid md:grid-cols-[280px_1fr] gap-8 md:gap-12 mb-20">
          {/* Left: Step Navigation */}
          <div className="relative">
            <div className="space-y-0">
              {steps.map((step, index) => {
                const isActive = activeStep === index;
                const isCompleted = activeStep > index;

                return (
                  <div key={index} className="relative">
                    {/* Connecting line */}
                    {index < steps.length - 1 && (
                      <div
                        className="absolute left-6 top-14 w-0.5 h-16"
                        style={{
                          background: "rgba(39, 39, 42, 0.8)",
                        }}
                      >
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{
                            height: isCompleted || isActive ? "100%" : 0,
                          }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                          className="w-full"
                          style={{ background: "rgb(82, 82, 91)" }}
                        />
                      </div>
                    )}

                    {/* Step button */}
                    <motion.button
                      onClick={() => {
                        setActiveStep(index);
                        if (index === 1) {
                          setIsAnalyzing(true);
                          setTimeout(() => setIsAnalyzing(false), 3000);
                        }
                        if (index === 2) setShowVerdict(true);
                      }}
                      initial={mounted ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="relative flex items-start gap-4 py-6 w-full text-left transition-all duration-300"
                    >
                      {/* Step number */}
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-lg border relative z-10 transition-all duration-300"
                        style={{
                          background: isActive || isCompleted ? "rgb(24, 24, 27)" : "rgb(18, 18, 20)",
                          borderColor: isActive || isCompleted ? "rgba(82, 82, 91, 0.8)" : "rgba(39, 39, 42, 0.8)",
                          color: isActive || isCompleted ? "var(--text-primary)" : "rgb(115, 115, 125)",
                        }}
                      >
                        {isCompleted ? (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            <CheckCircle2 className="w-5 h-5" strokeWidth={2.5} />
                          </motion.div>
                        ) : (
                          step.number
                        )}
                      </div>

                      {/* Step info */}
                      <div className="flex-1 pt-1">
                        <div
                          className="font-semibold text-base mb-1 transition-colors duration-300"
                          style={{
                            color: isActive ? "var(--text-primary)" : "var(--text-quaternary)",
                          }}
                        >
                          {step.title}
                        </div>
                        <div
                          className="text-sm mb-2 transition-colors duration-300"
                          style={{
                            color: isActive ? "var(--text-tertiary)" : "rgb(115, 115, 125)",
                          }}
                        >
                          {step.description}
                        </div>
                        <div className="flex items-center gap-2 text-xs" style={{ color: "rgb(115, 115, 125)" }}>
                          <Clock className="w-3 h-3" strokeWidth={1.5} />
                          {step.duration}
                        </div>
                      </div>
                    </motion.button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Step Content */}
          <div className="relative min-h-[500px]">
            <AnimatePresence mode="wait">
              {renderStepContent(activeStep)}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={mounted ? { opacity: 0, y: 10 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-center"
        >
          <div
            className="inline-flex items-center gap-4 px-8 py-4 border"
            style={{
              background: "rgb(15, 15, 17)",
              borderColor: "rgba(39, 39, 42, 0.8)",
              borderRadius: "9999px",
            }}
          >
            <Clock className="w-4 h-4" style={{ color: "rgb(115, 115, 125)" }} strokeWidth={1.5} />
            <span className="text-base font-medium" style={{ color: "var(--text-tertiary)" }}>
              Everything is ready. Join the waitlist for early access.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
