"use client";
import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles } from "lucide-react";

const plans = [
  {
    name: "EARLY ACCESS",
    price: "",
    period: "",
    features: [
      "Unlimited idea analysis",
      "AI-powered market research",
      "GO/NO-GO verdict",
      "Full competitor breakdown",
      "PDF export",
      "Priority support",
    ],
    cta: "Join Waitlist",
    ctaVariant: "primary" as const,
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section className="section-container relative w-full px-4 md:px-8" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-24 md:mb-32 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold mb-6 tracking-tight" style={{ color: "var(--text-primary)" }}>
            Early Access Pricing
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            Everything is ready, but we're opening access gradually. Join the waitlist to be among the first.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-8 md:gap-12 mb-16 md:mb-24 max-w-2xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="relative p-8 md:p-10 border transition-all duration-300 group overflow-hidden"
              style={{
                background: "var(--bg-secondary)",
                borderRadius: "var(--radius-lg)",
                borderColor: plan.popular ? "var(--border-default)" : "var(--border-subtle)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.borderColor = "var(--border-default)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = plan.popular ? "var(--border-default)" : "var(--border-subtle)";
              }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div
                    className="px-5 py-2 text-sm font-semibold flex items-center gap-2 border"
                    style={{
                      background: "var(--bg-primary)",
                      borderColor: "var(--border-default)",
                      color: "var(--text-primary)",
                      borderRadius: "9999px",
                    }}
                  >
                    <Sparkles className="w-3.5 h-3.5" strokeWidth={1.5} />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-semibold mb-4" style={{ color: "var(--text-primary)" }}>
                  {plan.name}
                </h3>
                {plan.price ? (
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl md:text-5xl font-bold" style={{ color: "var(--text-primary)" }}>
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-base" style={{ color: "var(--text-disabled)" }}>{plan.period}</span>
                    )}
                  </div>
                ) : (
                  <p className="text-lg md:text-xl" style={{ color: "var(--text-secondary)" }}>
                    Be among the first to access when we launch
                  </p>
                )}
              </div>

              {/* Divider */}
              <div className="border-t mb-8" style={{ borderColor: "var(--border-subtle)" }}></div>

              {/* Features List */}
              <ul className="space-y-5 mb-10">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-4">
                    <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "var(--text-primary)" }} strokeWidth={2} />
                    <span className="text-base md:text-lg" style={{ color: "var(--text-tertiary)" }}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => {
                  // Handle plan selection
                  console.log(`Selected plan: ${plan.name}`);
                }}
                className="relative w-full py-4 md:py-5 font-semibold text-base md:text-lg transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden group/btn border"
                style={{
                  borderRadius: "var(--radius-lg)",
                  background: plan.ctaVariant === "primary" ? "var(--text-primary)" : "transparent",
                  color: plan.ctaVariant === "primary" ? "var(--bg-primary)" : "var(--text-primary)",
                  borderColor: plan.ctaVariant === "primary" ? "var(--text-primary)" : "var(--border-default)",
                }}
              >
                <span className="relative z-10">{plan.cta}</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300" strokeWidth={1.5} />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Trust Message */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-center"
        >
          <div
            className="inline-flex items-center gap-4 px-8 py-4 border"
            style={{
              background: "var(--bg-secondary)",
              borderColor: "var(--border-default)",
              borderRadius: "9999px",
            }}
          >
            <Sparkles className="w-4 h-4" style={{ color: "var(--text-quaternary)" }} strokeWidth={1.5} />
            <span className="text-base md:text-lg" style={{ color: "var(--text-tertiary)" }}>
              Limited early access spots. Join now to secure your place.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

