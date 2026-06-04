"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const AuroraBackground = dynamic(
  () => import("@/components/ui/animated-shader-background"),
  { ssr: false }
);

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const trustStats = [
  { icon: "⬥", label: "30 мин интервью" },
  { icon: "⬥", label: "24 часа до результата" },
  { icon: "⬥", label: "100% конфиденциально" },
];

export default function HeroSection() {
  const scrollToNext = () => {
    const el = document.querySelector("#pain");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Aurora Shader Background */}
      <Suspense
        fallback={
          <div className="absolute inset-0 w-full h-full bg-bg" />
        }
      >
        <AuroraBackground />
      </Suspense>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg/40 to-bg z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
        <motion.div
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          {/* Pill badge */}
          <motion.div custom={0} variants={fadeInUp}>
            <span className="pill-badge">
              Только для CTO и Engineering Managers
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1}
            variants={fadeInUp}
            className="mt-8 font-heading font-extrabold text-text text-4xl sm:text-5xl lg:text-7xl leading-[1.1] tracking-tight"
          >
            Ваш senior уходит через 2 недели.
            <br />
            <span className="text-text-muted">
              Где живёт его знание об архитектуре?
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            custom={2}
            variants={fadeInUp}
            className="mt-6 max-w-2xl text-base sm:text-lg lg:text-xl text-text-muted leading-relaxed font-body"
          >
            OffboardAI проводит 30-минутное голосовое интервью с уходящим
            инженером и за 24 часа создаёт Role Technical Passport —
            структурированный Markdown-документ, который мгновенно
            интегрируется в GitHub, GitLab или Notion.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={3}
            variants={fadeInUp}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a href="#pricing" className="btn-primary text-base lg:text-lg px-8 py-4">
              Запустить пилот за $1,500
            </a>
            <a href="#passport" className="btn-secondary text-base lg:text-lg px-8 py-4">
              Посмотреть пример паспорта →
            </a>
          </motion.div>

          {/* Trust stats */}
          <motion.div
            custom={4}
            variants={fadeInUp}
            className="mt-12 flex flex-wrap justify-center gap-6 sm:gap-10"
          >
            {trustStats.map((stat) => (
              <span
                key={stat.label}
                className="text-sm sm:text-base font-mono text-text-muted flex items-center gap-2"
              >
                <span className="text-accent text-xs">{stat.icon}</span>
                {stat.label}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-text-muted animate-bounce-slow cursor-pointer"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} strokeWidth={1.5} />
      </button>
    </section>
  );
}
