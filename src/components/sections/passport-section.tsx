"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const passportText = `# Role Technical Passport — Senior ML Engineer

## 1. Зоны ответственности
- ML Pipeline (репозиторий: ml-pipeline-v2)
- Feature Store интеграция с Feast
- Мониторинг дрейфа модели (Evidently AI)

## 2. Карта систем
- PostgreSQL (prod) → Feature Store → Training Pipeline → S3
- Внешние API: OpenAI, Cohere, Weights & Biases

## 3. ⚠️ Скрытые риски и техдолг
- Ретрейн модели падает при >500k записей (OOM) — обходной путь: ручной батчинг
- Cron-job для очистки S3 не настроен — делается вручную каждый понедельник

## 4. Архитектурные обоснования
Выбрали Feast вместо самописного Feature Store в Q2 2024 исходя из требований
к versioning и team size. Решение не задокументировано.

## 5. Регулярные скрытые задачи
- [ ] Каждый понедельник: aws s3 sync команда (см. скрипт /scripts/sync.sh)
- [ ] Раз в месяц: ротация ключей Weights & Biases вручную

## 6. Ключевые контакты
- DevOps по инфраструктуре: @alexk (Slack)
- Data Platform: Артём Васильев (подрядчик)

## 7. Открытые вопросы
- Миграция на новую версию Feast не завершена
- A/B тест модели v3 vs v4 не задокументирован`;

const badges = [
  "Зоны ответственности",
  "Карта систем",
  "Скрытые риски и техдолг",
  "Архитектурные решения",
  "Регулярные скрытые задачи",
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
          <p className="section-eyebrow">ЧТО ВЫ ПОЛУЧАЕТЕ</p>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-text md:text-5xl">
            Что вы получаете: Role Technical Passport
          </h2>
          <p className="mt-6 text-lg leading-8 text-text-muted">
            Готовый Markdown-документ с 7 разделами. Открывается в GitHub за 1 секунду.
            Живёт в вашем репозитории, GitLab wiki или Notion.
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
