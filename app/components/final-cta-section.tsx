"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Lock, Zap, Shield } from "lucide-react";
import { useMounted } from "../hooks/use-mounted";

export function FinalCTASection() {
  const mounted = useMounted();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Email submitted:", email);
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
              className="flex-1 px-8 py-6 md:py-7 border text-lg md:text-xl focus:outline-none focus:ring-1 focus:ring-white/30 focus:border-transparent transition-all duration-300"
              style={{
                borderRadius: "var(--radius-lg)",
                background: "var(--bg-secondary)",
                borderColor: "var(--border-default)",
                color: "var(--text-primary)",
              }}
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="px-10 py-6 md:py-7 font-semibold transition-all duration-300 whitespace-nowrap text-lg md:text-xl flex items-center justify-center gap-3 relative overflow-hidden group/btn border"
              style={{
                borderRadius: "var(--radius-lg)",
                background: "var(--text-primary)",
                color: "var(--bg-primary)",
                borderColor: "var(--text-primary)",
              }}
            >
              <span className="relative z-10">Join Early Access Waitlist</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300" strokeWidth={1.5} />
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

        {/* Trust Section */}
        <motion.div
          initial={mounted ? { opacity: 0, y: 10 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-sm md:text-base mb-6" style={{ color: "var(--text-disabled)" }}>
            Used by indie hackers from
          </p>

          {/* Logos */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60 hover:opacity-100 transition-opacity">
            {/* Y Combinator */}
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 flex items-center justify-center"
                style={{
                  background: "var(--text-primary)",
                  borderRadius: "9999px",
                }}
              >
                <span className="font-bold text-xs" style={{ color: "var(--bg-primary)" }}>Y</span>
              </div>
              <span className="font-semibold text-sm md:text-base" style={{ color: "var(--text-primary)" }}>
                Y Combinator
              </span>
            </div>

            {/* Indie Hackers */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "var(--gradient-purple)" }}>
                <span className="font-bold text-xs" style={{ color: "var(--text-primary)" }}>IH</span>
              </div>
              <span className="font-semibold text-sm md:text-base" style={{ color: "var(--text-primary)" }}>
                Indie Hackers
              </span>
            </div>

            {/* Product Hunt */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "var(--accent-blue)" }}>
                <span className="font-bold text-xs" style={{ color: "var(--text-primary)" }}>PH</span>
              </div>
              <span className="font-semibold text-sm md:text-base" style={{ color: "var(--text-primary)" }}>
                Product Hunt
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

