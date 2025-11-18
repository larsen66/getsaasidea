"use client";
import React, { useRef, memo, useCallback } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { Clock, CreditCard, Zap, ArrowRight, CheckCircle2, Rocket } from "lucide-react";

export const ContainerScroll = ({
  titleComponent,
  children,
  formComponent,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
  formComponent?: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    
    let ticking = false;
    const handleResize = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkMobile();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const animationEnd = 0.15;
  const rotate = useTransform(scrollYProgress, [0, animationEnd], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, animationEnd], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, animationEnd], [0, -100]);

  return (
    <div
      className="min-h-screen flex flex-col justify-center relative px-4 pt-32 pb-32 md:px-8 md:pt-40 md:pb-40"
      ref={containerRef}
    >
      <div
        className="w-full relative flex flex-col"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card
          rotate={rotate}
          scale={scale}
          scrollProgress={scrollYProgress}
          animationEnd={animationEnd}
        >
          {children}
        </Card>
        {formComponent && (
          <div className="mt-12 md:mt-16 flex flex-col items-center relative z-10">
            {formComponent}
          </div>
        )}
      </div>
    </div>
  );
};

export const Header = ({
  translate,
  titleComponent,
}: {
  translate: MotionValue<number>;
  titleComponent: string | React.ReactNode;
}) => {
  return (
      <motion.div
        style={{
          translateY: translate,
        }}
        className="max-w-6xl mx-auto text-center mb-12 md:mb-16"
      >
        {titleComponent}
      </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  scrollProgress,
  animationEnd,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  scrollProgress: MotionValue<number>;
  animationEnd: number;
  children: React.ReactNode;
}) => {
  const topPosition = useTransform(
    scrollProgress,
    [0, animationEnd],
    ["20vh", "calc(50vh - 20rem)"]
  );

  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        top: topPosition,
        position: "sticky",
        boxShadow: "var(--shadow-card)",
        background: "var(--bg-secondary)",
      }}
      className="max-w-5xl mx-auto h-[32rem] md:h-[44rem] w-full p-1 rounded-[1rem]"
    >
      <div
        className="h-full w-full overflow-hidden p-2 md:p-4"
        style={{
          borderRadius: "var(--radius-lg)",
          background: "var(--bg-muted)",
          border: "var(--border-width) solid var(--border-default)",
        }}
      >
        {children}
      </div>
    </motion.div>
  );
};

export const HeroScrollDemo = memo(function HeroScrollDemo() {
  const [email, setEmail] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<"idle" | "success" | "error">("idle");

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
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
  }, [email]);

  const formComponent = (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-3xl w-full px-4 mb-12">
        <div className="relative flex-1">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            style={{
              background: "var(--bg-secondary)",
              borderColor: "var(--border-default)",
              borderRadius: "var(--radius-lg)",
              color: "var(--text-primary)",
            }}
            className="w-full px-8 py-6 text-lg border placeholder-[var(--text-quaternary)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-blue)] focus:border-[var(--accent-blue)] transition-all duration-300"
          />
        </div>
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              borderRadius: "var(--radius-lg)",
              background: submitStatus === "success" ? "rgb(34, 197, 94)" : submitStatus === "error" ? "rgb(239, 68, 68)" : "var(--text-primary)",
              color: "var(--bg-primary)",
              border: "var(--border-width) solid",
              borderColor: submitStatus === "success" ? "rgb(34, 197, 94)" : submitStatus === "error" ? "rgb(239, 68, 68)" : "var(--text-primary)",
              opacity: isSubmitting ? 0.7 : 1,
            }}
            className="px-10 py-6 text-lg font-semibold hover:opacity-90 transition-all duration-300 whitespace-nowrap flex items-center justify-center gap-2 group disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : submitStatus === "success" ? "Success!" : submitStatus === "error" ? "Try Again" : "Join Early Access Waitlist"}
            {!isSubmitting && submitStatus !== "success" && (
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={1.5} />
            )}
          </button>
      </form>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-base" style={{ color: "var(--text-tertiary)" }}>
        <div className="flex items-center gap-3">
          <Clock className="w-4 h-4" style={{ color: "var(--text-quaternary)" }} strokeWidth={1.5} />
          <span>15-minute setup</span>
        </div>
        <div className="flex items-center gap-3">
          <CreditCard className="w-4 h-4" style={{ color: "var(--text-quaternary)" }} strokeWidth={1.5} />
          <span>No credit card</span>
        </div>
        <div className="flex items-center gap-3">
          <Zap className="w-4 h-4" style={{ color: "var(--text-quaternary)" }} strokeWidth={1.5} />
          <span>Be among the first to try it</span>
        </div>
      </div>
    </>
  );

  return (
    <div className="flex items-center justify-center min-h-screen w-full py-32 md:py-40 relative">
      {/* Background gradient glow - very subtle */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] opacity-10 blur-3xl pointer-events-none"
        style={{ background: "var(--gradient-glow)" }}
      />

      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-semibold mb-12 leading-tight tracking-tight" style={{ color: "var(--text-primary)" }}>
              Validate Your SaaS Idea in{" "}
              <span className="relative inline-block" style={{ color: "var(--accent-blue)" }}>
                15 Minutes
              </span>
              , Not 15 Hours
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-4xl mx-auto leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              AI-powered market research that gives you a clear GO/NO-GO verdict and your exact next step.
            </p>
            <div className="mb-16 inline-flex items-center gap-3 px-6 py-3 rounded-full border" style={{
              background: "var(--bg-secondary)",
              borderColor: "var(--border-default)",
              borderRadius: "9999px",
            }}>
              <Rocket className="w-4 h-4 flex-shrink-0" style={{ color: "var(--text-primary)" }} strokeWidth={1.5} />
              <span className="text-sm md:text-base font-semibold" style={{ color: "var(--text-primary)" }}>
                Early Access Available Soon
              </span>
            </div>
          </>
        }
        formComponent={formComponent}
      >
        <div
          className="mx-auto h-full w-full flex items-center justify-center overflow-hidden relative"
          style={{
            borderRadius: "var(--radius-md)",
            background: "rgb(10, 10, 11)",
          }}
        >
          <div className="grid grid-cols-2 h-full w-full gap-4 p-6 relative z-10">
            {/* Before - Chaotic State */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="p-6 flex flex-col border"
              style={{
                background: "rgb(15, 15, 17)",
                borderRadius: "12px",
                borderColor: "rgba(39, 39, 42, 0.8)",
              }}
            >
              <div className="text-xs font-medium mb-6 flex items-center gap-2" style={{ color: "rgb(115, 115, 125)" }}>
                <div className="w-1 h-1 rounded-full" style={{ background: "rgb(239, 68, 68)" }}></div>
                <span className="uppercase tracking-wider">Before</span>
              </div>

              <div
                className="flex-1 p-5 overflow-hidden"
                style={{
                  background: "rgb(18, 18, 20)",
                  borderRadius: "10px",
                  border: "1px solid rgba(39, 39, 42, 0.6)",
                }}
              >
                {/* Browser tabs - overwhelming */}
                <div className="flex flex-wrap gap-1 mb-5 opacity-50">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div
                      key={i}
                      className="px-2 py-1 text-xs border"
                      style={{
                        background: "rgb(24, 24, 27)",
                        borderRadius: "4px",
                        borderColor: "rgba(39, 39, 42, 0.8)",
                        color: "rgb(82, 82, 91)",
                        fontSize: "9px",
                      }}
                    >
                      Tab {i + 1}
                    </div>
                  ))}
                </div>

                {/* Messy content lines */}
                <div className="space-y-2.5 mb-5">
                  {[70, 100, 55, 85].map((width, i) => (
                    <div
                      key={i}
                      className="h-1.5 rounded"
                      style={{
                        background: "rgba(63, 63, 70, 0.4)",
                        width: `${width}%`,
                      }}
                    ></div>
                  ))}
                </div>

                {/* Scattered notes */}
                <div className="grid grid-cols-2 gap-1.5">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="p-2 border"
                      style={{
                        background: "rgb(24, 24, 27)",
                        borderRadius: "4px",
                        borderColor: "rgba(39, 39, 42, 0.8)",
                      }}
                    >
                      <div className="h-1 w-3/4 rounded mb-1" style={{ background: "rgba(63, 63, 70, 0.5)" }}></div>
                      <div className="h-1 w-1/2 rounded" style={{ background: "rgba(63, 63, 70, 0.3)" }}></div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 text-xs text-center" style={{ color: "rgb(82, 82, 91)" }}>
                  Hours of scattered research
                </div>
              </div>
            </motion.div>

            {/* After - Clean & Organized */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="p-6 flex flex-col border"
              style={{
                background: "rgb(15, 15, 17)",
                borderRadius: "12px",
                borderColor: "rgba(39, 39, 42, 0.8)",
              }}
            >
              <div className="text-xs font-medium mb-6 flex items-center gap-2" style={{ color: "rgb(115, 115, 125)" }}>
                <div className="w-1 h-1 rounded-full" style={{ background: "rgb(56, 189, 248)" }}></div>
                <span className="uppercase tracking-wider">After</span>
              </div>

              <div
                className="flex-1 p-5 flex flex-col justify-between"
                style={{
                  background: "rgb(18, 18, 20)",
                  borderRadius: "10px",
                  border: "1px solid rgba(39, 39, 42, 0.6)",
                }}
              >
                {/* Main verdict card */}
                <div
                  className="p-5 mb-5 border"
                  style={{
                    background: "rgba(14, 165, 233, 0.04)",
                    borderRadius: "10px",
                    borderColor: "rgba(56, 189, 248, 0.15)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center border"
                      style={{
                        background: "rgba(14, 165, 233, 0.08)",
                        borderColor: "rgba(56, 189, 248, 0.2)",
                      }}
                    >
                      <CheckCircle2 className="w-4 h-4" style={{ color: "rgb(125, 211, 252)" }} strokeWidth={2} />
                    </div>
                    <div>
                      <div className="font-bold text-xl tracking-tight" style={{ color: "rgb(224, 242, 254)" }}>
                        GO
                      </div>
                      <div className="text-xs" style={{ color: "rgb(115, 115, 125)" }}>
                        Strong signal
                      </div>
                    </div>
                  </div>

                  {/* Mini progress bars */}
                  <div className="space-y-2">
                    {[
                      { label: "Market", width: "85%" },
                      { label: "Competition", width: "72%" },
                      { label: "Demand", width: "90%" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="text-xs" style={{ color: "rgb(115, 115, 125)", width: "70px" }}>{item.label}</div>
                        <div className="flex-1 h-1 rounded-full overflow-hidden" style={{ background: "rgba(39, 39, 42, 0.8)" }}>
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: item.width }}
                            transition={{ delay: 0.5 + i * 0.1, duration: 0.6, ease: "easeOut" }}
                            className="h-full rounded-full"
                            style={{ background: "rgb(56, 189, 248)" }}
                          ></motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Next steps */}
                <div className="space-y-1.5">
                  <div className="text-xs font-medium mb-2" style={{ color: "rgb(115, 115, 125)" }}>
                    NEXT STEPS
                  </div>
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 p-2.5 border"
                      style={{
                        background: "rgb(24, 24, 27)",
                        borderRadius: "6px",
                        borderColor: "rgba(39, 39, 42, 0.8)",
                      }}
                    >
                      <div className="w-4 h-4 rounded flex items-center justify-center text-xs font-medium"
                        style={{
                          background: "rgba(39, 39, 42, 0.8)",
                          color: "rgb(115, 115, 125)",
                          fontSize: "10px",
                        }}
                      >
                        {i}
                      </div>
                      <div className="flex-1">
                        <div className="h-1 rounded" style={{ background: "rgba(63, 63, 70, 0.5)", width: i === 1 ? "75%" : i === 2 ? "60%" : "70%" }}></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 text-xs text-center" style={{ color: "rgb(115, 115, 125)" }}>
                  Clear roadmap in 15 minutes
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
});
