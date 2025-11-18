"use client";
import React, { useRef, memo, useCallback } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { Clock, CreditCard, Zap, ArrowRight, X, CheckCircle2, Rocket } from "lucide-react";

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

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
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
            style={{
              borderRadius: "var(--radius-lg)",
              background: "var(--text-primary)",
              color: "var(--bg-primary)",
              border: "var(--border-width) solid var(--text-primary)",
            }}
            className="px-10 py-6 text-lg font-semibold hover:opacity-90 transition-all duration-300 whitespace-nowrap flex items-center justify-center gap-2 group"
          >
            Join Early Access Waitlist
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={1.5} />
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
          className="mx-auto h-full w-full flex items-center justify-center overflow-hidden"
          style={{
            borderRadius: "var(--radius-md)",
            background: "var(--bg-secondary)",
          }}
        >
          <div className="grid grid-cols-2 h-full w-full gap-4 p-6">
            {/* Before */}
            <div
              className="p-6 flex flex-col border"
              style={{
                background: "var(--bg-primary)",
                borderRadius: "var(--radius-md)",
                borderColor: "var(--border-default)",
              }}
            >
              <div className="text-base font-medium mb-6 flex items-center gap-3" style={{ color: "var(--text-secondary)" }}>
                <X className="w-4 h-4" style={{ color: "var(--text-quaternary)" }} strokeWidth={1.5} />
                <span>Before</span>
              </div>
              <div
                className="flex-1 p-3 overflow-hidden"
                style={{
                  background: "var(--bg-muted)",
                  borderRadius: "var(--radius-sm)",
                }}
              >
                <div className="flex flex-wrap gap-1 mb-3">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={i}
                      className="px-2 py-1 text-xs truncate max-w-[80px]"
                      style={{
                        background: "var(--bg-tertiary)",
                        borderRadius: "var(--radius-sm)",
                        color: "var(--text-quaternary)",
                      }}
                    >
                      Tab {i + 1}
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  <div className="h-2 rounded w-3/4" style={{ background: "var(--border-strong)" }}></div>
                  <div className="h-2 rounded w-full" style={{ background: "var(--border-strong)" }}></div>
                  <div className="h-2 rounded w-5/6" style={{ background: "var(--border-strong)" }}></div>
                </div>
                <div className="mt-3 text-xs text-center" style={{ color: "var(--text-disabled)" }}>
                  Chaos of 20 tabs
                </div>
              </div>
            </div>

            {/* After */}
            <div
              className="p-6 flex flex-col border"
              style={{
                background: "var(--bg-primary)",
                borderRadius: "var(--radius-md)",
                borderColor: "var(--border-default)",
              }}
            >
              <div className="text-base font-medium mb-6 flex items-center gap-3" style={{ color: "var(--text-secondary)" }}>
                <CheckCircle2 className="w-4 h-4" style={{ color: "var(--text-quaternary)" }} strokeWidth={1.5} />
                <span>After</span>
              </div>
              <div
                className="flex-1 p-4 flex flex-col justify-center"
                style={{
                  background: "var(--bg-muted)",
                  borderRadius: "var(--radius-sm)",
                }}
              >
                <div
                  className="p-4 mb-6 border"
                  style={{
                    background: "var(--bg-secondary)",
                    borderColor: "var(--border-default)",
                    borderRadius: "var(--radius-md)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle2 className="w-4 h-4" style={{ color: "var(--text-primary)" }} strokeWidth={1.5} />
                    <div className="font-semibold text-lg" style={{ color: "var(--text-primary)" }}>GO</div>
                  </div>
                  <div className="text-sm" style={{ color: "var(--text-tertiary)" }}>Clear verdict</div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 rounded w-full" style={{ background: "var(--border-strong)" }}></div>
                  <div className="h-2 rounded w-3/4" style={{ background: "var(--border-strong)" }}></div>
                </div>
                <div className="mt-3 text-xs text-center" style={{ color: "var(--text-tertiary)" }}>
                  Clean dashboard with verdict
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
});
