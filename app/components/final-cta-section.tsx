"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Lock, Zap, Shield } from "lucide-react";
import { useMounted } from "../hooks/use-mounted";

export function FinalCTASection() {
  const mounted = useMounted();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setEmail("");
        // Reset success message after 3 seconds
        setTimeout(() => setSubmitStatus("idle"), 3000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 3000);
      }
    } catch (error) {
      console.error("Error submitting email:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-container relative w-full px-4 md:px-8 overflow-hidden" style={{ background: "var(--bg-primary)" }}>
      {/* Background gradient glow - very subtle */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-5 blur-3xl pointer-events-none"
        style={{ background: "var(--gradient-glow)" }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={mounted ? { opacity: 0, y: 10 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-24 md:mb-32 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold mb-6 tracking-tight" style={{ color: "var(--text-primary)" }}>
            Ready to Get Early Access?
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            Everything is built and ready. We're opening access to a select group first.
          </p>
        </motion.div>

        {/* Email Form */}
        <motion.form
          initial={mounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="mb-12 md:mb-16"
        >
          <div className="flex flex-col sm:flex-row gap-5 max-w-3xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-8 py-6 md:py-7 border text-lg md:text-xl focus:outline-none focus:ring-1 focus:ring-[rgb(56,189,248)] focus:border-[rgb(56,189,248)] transition-all duration-300"
              style={{
                borderRadius: "12px",
                background: "rgb(15, 15, 17)",
                borderColor: "rgba(39, 39, 42, 0.8)",
                color: "var(--text-primary)",
              }}
            />
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={!isSubmitting ? { scale: 1.01 } : {}}
              whileTap={!isSubmitting ? { scale: 0.99 } : {}}
              className="px-10 py-6 md:py-7 font-semibold transition-all duration-300 whitespace-nowrap text-lg md:text-xl flex items-center justify-center gap-3 relative overflow-hidden group/btn border disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                borderRadius: "var(--radius-lg)",
                background: submitStatus === "success" ? "rgb(34, 197, 94)" : submitStatus === "error" ? "rgb(239, 68, 68)" : "var(--text-primary)",
                color: "var(--bg-primary)",
                borderColor: submitStatus === "success" ? "rgb(34, 197, 94)" : submitStatus === "error" ? "rgb(239, 68, 68)" : "var(--text-primary)",
              }}
            >
              <span className="relative z-10">
                {isSubmitting ? "Submitting..." : submitStatus === "success" ? "Success!" : submitStatus === "error" ? "Try Again" : "Join Early Access Waitlist"}
              </span>
              {!isSubmitting && submitStatus !== "success" && (
                <ArrowRight className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300" strokeWidth={1.5} />
              )}
            </motion.button>
          </div>
        </motion.form>

        {/* Trust Badges */}
        <motion.div
          initial={mounted ? { opacity: 0, y: 10 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 text-base md:text-lg" style={{ color: "var(--text-quaternary)" }}>
            <Lock className="w-4 h-4" strokeWidth={1.5} />
            <span>No spam. Unsubscribe anytime.</span>
          </div>
          <div className="flex items-center gap-3 text-base md:text-lg" style={{ color: "var(--text-quaternary)" }}>
            <Zap className="w-4 h-4" strokeWidth={1.5} />
            <span>Early access starting soon.</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

