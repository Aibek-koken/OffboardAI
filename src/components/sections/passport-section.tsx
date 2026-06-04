"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const passportText = `# Role Technical Passport — ML Platform Lead

## 1. Зоны ответственности
- inference-gateway: latency budgets, fallback routing
- model-registry: release approvals and rollback rules
- weekly manual check: stale embeddings report

## 2. Скрытые риски и техдолг
- batch reindex job fails silently above 1.8M records
- old provider contract has undocumented 429 behavior
- feature flag "fast-path-v2" should not be enabled before load test

## 3. Архитектурное обоснование
Redis stream was chosen over Kafka because the team needed operational
simplicity during the seed-stage rewrite. Revisit after enterprise rollout.

## 4. Открытые вопросы
- Who owns vector DB cost alerts after the handoff?
- Should region failover stay manual for the next quarter?`;

const badges = [
  "Зоны ответственности",
  "Карта систем",
  "Скрытые риски",
  "Архитектурные решения",
  "Регулярные задачи",
  "Ключевые контакты",
  "Открытые вопросы",
];

export default function PassportSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-120px" });
  const reduceMotion = useReducedMotion();
  const [visibleText, setVisibleText] = useState("");

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setVisibleText(passportText);
      return;
    }

    let index = 0;
    const interval = window.setInterval(() => {
      index += 12;
      setVisibleText(passportText.slice(0, index));
      if (index >= passportText.length) window.clearInterval(interval);
    }, 24);

    return () => window.clearInterval(interval);
  }, [inView, reduceMotion]);

  return (
    <section
      id="passport"
      ref={sectionRef}
      className="relative overflow-hidden bg-surface py-24 md:py-32"
    >
      <div className="absolute -right-24 top-28 h-80 w-80 rounded-full bg-accent-2/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
        <div>
          <p className="section-eyebrow">The artifact</p>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-text md:text-5xl">
            Финальный результат — не запись, а технический паспорт роли.
          </h2>
          <p className="mt-6 text-lg leading-8 text-text-muted">
            Markdown-документ можно положить в репозиторий, GitLab wiki или
            Notion. Он помогает новому владельцу роли понять контекст без
            просмотра часов видео.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-accent/20 bg-accent/5 px-4 py-2 text-sm text-accent"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="terminal-window"
        >
          <div className="terminal-header">
            <span className="terminal-dot bg-red-400" />
            <span className="terminal-dot bg-amber-300" />
            <span className="terminal-dot bg-accent" />
            <span className="ml-3 font-mono text-xs text-text-muted">
              role-technical-passport.md
            </span>
          </div>
          <pre className="min-h-[560px] whitespace-pre-wrap p-5 font-mono text-xs leading-6 text-slate-300 sm:p-7 sm:text-sm">
            {visibleText}
            <span className="animate-typewriter-cursor text-accent">▋</span>
          </pre>
        </motion.div>
      </div>
    </section>
  );
}
