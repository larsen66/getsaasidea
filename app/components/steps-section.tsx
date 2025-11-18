"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, CheckCircle2, FileText, Clock } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Describe",
    description: "Tell us your SaaS idea in plain English",
    component: "describe",
  },
  {
    number: 2,
    title: "AI Analyzes",
    description: "Our AI scans market data, trends, and competition",
    component: "analyze",
  },
  {
    number: 3,
    title: "Get Verdict",
    description: "Receive a clear GO/NO-GO decision with next steps",
    component: "verdict",
  },
];

const exampleIdea = "A tool that helps freelancers automatically track billable hours and generate invoices from their calendar events.";

export function StepsSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showVerdict, setShowVerdict] = useState(false);

  useEffect(() => {
    // Auto-advance demo
    const timer1 = setTimeout(() => {
      setInputValue(exampleIdea);
    }, 1000);

    const timer2 = setTimeout(() => {
      setIsAnalyzing(true);
    }, 3000);

    const timer3 = setTimeout(() => {
      setIsAnalyzing(false);
      setShowVerdict(true);
    }, 6000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const renderStepContent = (stepIndex: number) => {
    switch (stepIndex) {
      case 0:
        return (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-2xl mx-auto"
          >
            <div
              className="p-6 md:p-8 border"
              style={{
                background: "var(--bg-secondary)",
                borderColor: "var(--border-default)",
                borderRadius: "var(--radius-lg)",
              }}
            >
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Describe your SaaS idea here..."
                className="w-full h-32 md:h-40 p-4 border-2 resize-none text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                style={{
                  background: "var(--bg-tertiary)",
                  borderColor: "var(--border-default)",
                  borderRadius: "var(--radius-lg)",
                  color: "var(--text-primary)",
                }}
              />
              {!inputValue && (
                <div className="mt-3 text-xs italic" style={{ color: "var(--text-disabled)" }}>
                  Example: {exampleIdea}
                </div>
              )}
            </div>
          </motion.div>
        );

      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-2xl mx-auto"
          >
            <div
              className="p-6 md:p-8 border"
              style={{
                background: "var(--bg-secondary)",
                borderColor: "var(--border-default)",
                borderRadius: "var(--radius-lg)",
              }}
            >
              <div className="flex flex-col items-center justify-center min-h-[200px] md:min-h-[250px]">
                {isAnalyzing ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="mb-6"
                    >
                      <Sparkles className="w-10 h-10 md:w-12 md:h-12" style={{ color: "var(--accent-blue)" }} strokeWidth={1.5} />
                    </motion.div>
                    <div className="space-y-3 w-full">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.5 }}
                        className="h-2 rounded-full overflow-hidden"
                        style={{ background: "rgba(96, 165, 250, 0.2)" }}
                      >
                        <motion.div
                          animate={{ x: ["-100%", "100%"] }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="h-full w-1/3 rounded-full"
                          style={{ background: "var(--accent-blue)" }}
                        />
                      </motion.div>
                      <div className="text-center text-sm md:text-base" style={{ color: "var(--text-quaternary)" }}>
                        Scanning market data...
                      </div>
                      <div className="grid grid-cols-3 gap-2 mt-4">
                        {["Reddit", "Product Hunt", "Google Trends"].map((source, i) => (
                          <motion.div
                            key={source}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: i * 0.3 }}
                            className="p-2 text-center text-xs"
                            style={{
                              background: "var(--bg-tertiary)",
                              borderRadius: "var(--radius-md)",
                              color: "var(--text-disabled)",
                            }}
                          >
                            {source}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-center" style={{ color: "var(--text-disabled)" }}>
                    Click "Analyze" to start
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-2xl mx-auto"
          >
            <div
              className="p-6 md:p-8 border"
              style={{
                background: "var(--bg-secondary)",
                borderColor: "var(--border-default)",
                borderRadius: "var(--radius-lg)",
              }}
            >
              {showVerdict ? (
                <div className="space-y-6">
                  {/* Verdict Badge */}
                  <div className="flex items-center justify-center">
                    <div
                      className="px-8 py-4 flex items-center gap-4 border"
                      style={{
                        background: "var(--bg-secondary)",
                        borderColor: "var(--border-default)",
                        borderRadius: "9999px",
                      }}
                    >
                      <CheckCircle2 className="w-5 h-5" style={{ color: "var(--text-primary)" }} strokeWidth={1.5} />
                      <span className="font-semibold text-xl md:text-2xl" style={{ color: "var(--text-primary)" }}>
                        GO
                      </span>
                    </div>
                  </div>

                  {/* Report Content */}
                  <div className="space-y-4">
                    <div
                      className="p-4 border"
                      style={{
                        background: "var(--bg-tertiary)",
                        borderRadius: "var(--radius-lg)",
                        borderColor: "var(--border-default)",
                      }}
                    >
                      <h4 className="font-medium mb-2 text-sm md:text-base" style={{ color: "var(--text-primary)" }}>
                        Market Opportunity
                      </h4>
                      <p className="text-xs md:text-sm" style={{ color: "var(--text-quaternary)" }}>
                        Strong demand detected. 2.3K+ monthly searches for "freelancer time tracking"
                      </p>
                    </div>

                    <div
                      className="p-4 border"
                      style={{
                        background: "var(--bg-tertiary)",
                        borderRadius: "var(--radius-lg)",
                        borderColor: "var(--border-default)",
                      }}
                    >
                      <h4 className="font-medium mb-2 text-sm md:text-base" style={{ color: "var(--text-primary)" }}>
                        Competition Analysis
                      </h4>
                      <p className="text-xs md:text-sm" style={{ color: "var(--text-quaternary)" }}>
                        Existing solutions are complex. Opportunity for simpler, calendar-integrated approach.
                      </p>
                    </div>

                    <div
                      className="p-4 border"
                      style={{
                        background: "var(--bg-tertiary)",
                        borderRadius: "var(--radius-lg)",
                        borderColor: "var(--border-default)",
                      }}
                    >
                      <h4 className="font-medium mb-2 text-sm md:text-base" style={{ color: "var(--text-primary)" }}>
                        Next Steps
                      </h4>
                      <ul className="text-xs md:text-sm space-y-1 list-disc list-inside" style={{ color: "var(--text-quaternary)" }}>
                        <li>Build MVP focusing on calendar integration</li>
                        <li>Target freelancers on Twitter/X</li>
                        <li>Price point: $9-15/month</li>
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center min-h-[200px] md:min-h-[250px]">
                  <div className="text-center">
                    <FileText className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4" style={{ color: "var(--text-disabled)" }} strokeWidth={1.5} />
                    <p className="text-sm md:text-base" style={{ color: "var(--text-disabled)" }}>
                      Your verdict will appear here
                    </p>
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
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-24 md:mb-32 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold mb-4 tracking-tight" style={{ color: "var(--text-primary)" }}>
            3 Steps to Clarity
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            This is how it works. Everything is ready, join the waitlist for early access.
          </p>
        </motion.div>

        {/* Steps Navigation */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mb-16 md:mb-24">
          {steps.map((step, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setActiveStep(index);
                if (index === 1) setIsAnalyzing(true);
                if (index === 2) setShowVerdict(true);
              }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center gap-4 md:gap-6 px-6 md:px-8 py-6 border transition-all duration-300 group relative overflow-hidden"
              style={{
                borderRadius: "var(--radius-lg)",
                background: activeStep === index ? "var(--bg-secondary)" : "transparent",
                borderColor: activeStep === index ? "var(--border-default)" : "var(--border-subtle)",
                color: activeStep === index ? "var(--text-primary)" : "var(--text-disabled)",
              }}
            >
              {/* Step number badge */}
              <div
                className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center flex-shrink-0 relative z-10 font-semibold text-base md:text-lg border"
                style={{
                  background: activeStep === index ? "var(--bg-primary)" : "var(--bg-tertiary)",
                  borderColor: activeStep === index ? "var(--border-default)" : "var(--border-subtle)",
                  color: activeStep === index ? "var(--text-primary)" : "var(--text-quaternary)",
                }}
              >
                {step.number}
              </div>

              <div className="text-left relative z-10">
                <div className="font-semibold text-base md:text-lg mb-1">{step.title}</div>
                <div className="text-sm hidden md:block" style={{ color: activeStep === index ? "var(--text-tertiary)" : "var(--text-disabled)" }}>
                  {step.description}
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Interactive Demo */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {renderStepContent(activeStep)}
          </motion.div>
        </AnimatePresence>

        {/* Time Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-20 md:mt-28 text-center"
        >
          <div
            className="inline-flex items-center gap-4 px-8 py-4 border"
            style={{
              background: "var(--bg-secondary)",
              borderColor: "var(--border-default)",
              borderRadius: "9999px",
            }}
          >
            <Clock className="w-4 h-4" style={{ color: "var(--text-quaternary)" }} strokeWidth={1.5} />
            <span className="text-base md:text-lg font-medium" style={{ color: "var(--text-tertiary)" }}>
              Takes less time than your morning coffee
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

