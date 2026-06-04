"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";

const rows = [
  {
    label: "Целевой пользователь",
    sensay: "HR",
    notion: "Любой",
    loom: "Любой",
    offboard: "CTO / EM",
  },
  {
    label: "Результат",
    sensay: "AI-чатбот",
    notion: "Пустой шаблон",
    loom: "Видео (часы)",
    offboard: "Готовый Markdown",
  },
  {
    label: "Техдолг и риски",
    sensay: "✗",
    notion: "✗",
    loom: "✗",
    offboard: "✓",
  },
  {
    label: "В GitHub за 1 клик",
    sensay: "✗",
    notion: "✗",
    loom: "✗",
    offboard: "✓",
  },
  {
    label: "Архитектурные решения",
    sensay: "✗",
    notion: "✗",
    loom: "Частично",
    offboard: "✓",
  },
  {
    label: "Время до результата",
    sensay: "Дни",
    notion: "Недели",
    loom: "Часы просмотра",
    offboard: "24 часа",
  },
];

export default function ComparisonSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="comparison" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">ПОЧЕМУ НЕ АЛЬТЕРНАТИВЫ</p>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-text md:text-5xl">
            Альтернативы не решают проблему CTO
          </h2>
          <p className="mt-6 text-lg leading-8 text-text-muted">
            Чатботы, базы знаний и видеозаписи — каждый решает только одну часть.
            Ни один инструмент не создаёт готовый к передаче технический документ.
          </p>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="mt-14 overflow-x-auto rounded-3xl border border-white/[0.07] bg-bg/70"
        >
          <div className="min-w-[860px]">
            <div className="grid grid-cols-[1.05fr_1fr_1fr_1fr_1.2fr] border-b border-white/[0.07] text-sm font-semibold uppercase tracking-[0.16em] text-text-muted">
              <div className="p-5">Критерий</div>
              <div className="p-5">Sensay</div>
              <div className="p-5">Notion/Confluence</div>
              <div className="p-5">Loom</div>
              <div className="border-l border-accent/25 bg-accent/10 p-5 text-accent">
                OffboardAI
              </div>
            </div>

            {rows.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[1.05fr_1fr_1fr_1fr_1.2fr] border-b border-white/[0.07] last:border-b-0"
              >
                <div className="p-5 font-semibold text-text">{row.label}</div>
                <div className="p-5 text-text-muted">{row.sensay}</div>
                <div className="p-5 text-text-muted">{row.notion}</div>
                <div className="p-5 text-text-muted">{row.loom}</div>
                <div className="border-l border-accent/20 bg-accent/[0.06] p-5 text-text font-medium">
                  {row.offboard}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <blockquote className="mx-auto mt-10 max-w-4xl rounded-3xl border border-accent/20 bg-accent/[0.04] p-6 text-center font-heading text-xl font-bold leading-snug text-text md:p-8 md:text-2xl">
          “Чатбот — это поиск.<br />
          Паспорт — это документ, который живёт в вашем репозитории.”
        </blockquote>
      </div>
    </section>
  );
}
