"use client";
import React, { memo } from "react";
import { motion } from "framer-motion";
import { Users, Quote } from "lucide-react";
import { useMounted } from "../hooks/use-mounted";

const testimonials = [
  {
    quote: "Got early access last week. Saved me a weekend of research.",
    author: "Alex K.",
    credential: "Early Access Member",
    avatar: "AK",
  },
  {
    quote: "Found a gap in 10 mins. Can't wait for full launch!",
    author: "Sarah M.",
    credential: "Early Access Member",
    avatar: "SM",
  },
  {
    quote: "Wish I had this 5 ideas ago. Glad I joined early.",
    author: "Mike R.",
    credential: "Early Access Member",
    avatar: "MR",
  },
];

export const SocialProof = memo(function SocialProof() {
  const mounted = useMounted();
  
  return (
    <section className="relative w-full pt-24 pb-40 px-4 md:px-8" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={mounted ? { opacity: 0, y: 10 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
          className="mb-24 md:mb-32 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold mb-6 tracking-tight" style={{ color: "var(--text-primary)" }}>
            Early Access Members
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={mounted ? { opacity: 0, y: 10 } : false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="rounded-lg p-8 md:p-10 border"
              style={{
                background: "rgb(15, 15, 17)",
                borderColor: "rgba(39, 39, 42, 0.8)",
                borderRadius: "12px",
              }}
            >
              {/* Quote icon */}
              <div className="relative mb-6">
                <Quote className="w-8 h-8 opacity-20" style={{ color: "var(--text-quaternary)" }} strokeWidth={1.5} />
              </div>

              <div className="relative flex flex-col gap-6">
                <p className="text-lg md:text-xl font-medium leading-relaxed" style={{ color: "var(--text-primary)" }}>
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4 pt-6 border-t" style={{ borderColor: "var(--border-subtle)" }}>
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-semibold text-base flex-shrink-0 border" style={{ background: "rgb(24, 24, 27)", borderColor: "rgba(39, 39, 42, 0.8)", color: "rgb(161, 161, 170)" }}>
                    {testimonial.avatar}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-base font-semibold" style={{ color: "var(--text-primary)" }}>
                      {testimonial.author}
                    </span>
                    <span style={{ color: "var(--text-quaternary)" }} className="text-sm">
                      {testimonial.credential}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Badge */}
        <motion.div
          initial={mounted ? { opacity: 0, y: 10 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex justify-center"
        >
          <div
            className="inline-flex items-center gap-4 px-8 py-4 rounded-full border"
            style={{
              background: "rgb(15, 15, 17)",
              borderColor: "rgba(39, 39, 42, 0.8)",
            }}
          >
            <Users className="w-4 h-4" style={{ color: "var(--text-quaternary)" }} strokeWidth={1.5} />
            <span style={{ color: "var(--text-secondary)" }} className="text-base font-medium">
              <span className="font-semibold" style={{ color: "var(--text-primary)" }}>200+ builders</span> already on the waitlist
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

