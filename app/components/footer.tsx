"use client";
import React from "react";
import { motion } from "framer-motion";
import { Twitter, Mail } from "lucide-react";
import { useMounted } from "../hooks/use-mounted";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Sample Report", href: "#sample-report" },
  { label: "Contact", href: "#contact" },
  { label: "Terms", href: "#terms" },
  { label: "Privacy", href: "#privacy" },
];

export function Footer() {
  const mounted = useMounted();
  
  return (
    <footer
      className="relative w-full pt-24 pb-12 px-4 md:px-8 border-t"
      style={{
        background: "var(--bg-primary)",
        borderColor: "var(--border-subtle)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Bio Section */}
        <motion.div
          initial={mounted ? { opacity: 0, y: 10 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12 md:mb-16 text-center"
        >
          <p className="text-base md:text-lg" style={{ color: "var(--text-quaternary)" }}>
            Built by {"David"}
            <span className="font-medium" style={{ color: "var(--text-primary)" }}></span>, indie hacker tired of analysis paralysis
          </p>
        </motion.div>

        {/* Links and Social */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          {/* Navigation Links */}
          <motion.nav
            initial={mounted ? { opacity: 0, y: 10 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-8"
          >
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="transition-colors duration-300 text-base md:text-lg"
                style={{
                  color: "var(--text-disabled)",
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = "var(--text-primary)"}
                onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-disabled)"}
              >
                {link.label}
              </a>
            ))}
          </motion.nav>

          {/* Social Links */}
          <motion.div
            initial={mounted ? { opacity: 0, y: 10 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex items-center gap-6"
          >
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300"
              style={{ color: "var(--text-disabled)" }}
              onMouseEnter={(e) => e.currentTarget.style.color = "var(--text-primary)"}
              onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-disabled)"}
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" strokeWidth={1.5} />
            </a>
            <a
              href="mailto:contact@example.com"
              className="transition-colors duration-300"
              style={{ color: "var(--text-disabled)" }}
              onMouseEnter={(e) => e.currentTarget.style.color = "var(--text-primary)"}
              onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-disabled)"}
              aria-label="Email"
            >
              <Mail className="w-5 h-5" strokeWidth={1.5} />
            </a>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={mounted ? { opacity: 0 } : { opacity: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-12 pt-12 border-t text-center"
          style={{ borderColor: "var(--border-subtle)" }}
        >
          <p className="text-sm md:text-base" style={{ color: "var(--text-disabled)" }}>
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

