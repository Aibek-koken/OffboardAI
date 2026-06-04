"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check, Minus, X } from "lucide-react";

const rows = [
  {
    label: "Цель",
    hr: "понять причины ухода",
    loom: "записать монолог",
    offboard: "передать техническую роль",
  },
  {
    label: "Формат",
    hr: "анкета или общий разговор",
    loom: "часовые видео",
    offboard: "структурированное интервью",
  },
  {
    label: "Артефакт",
    hr: "заметки HR",
    loom: "ссылка на запись",
    offboard: "Markdown Role Technical Passport",
  },
  {
    label: "Пользователь",
    hr: "HR и People Ops",
    loom: "тот, кто найдёт время",
    offboard: "CTO, EM, преемник роли",
  },
  {
    label: "Скорость внедрения",
    hr: "быстро, но нерелевантно",
    loom: "быстро, но плохо ищется",
    offboard: "24 часа до готового документа",
  },
];

export default function ComparisonSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="comparison" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">Why now</p>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-text md:text-5xl">
            Не ещё один HR-опрос. Техническая передача роли.
          </h2>
          <p className="mt-6 text-lg leading-8 text-text-muted">
            Проблема не в том, что уходящий инженер ничего не сказал. Проблема
            в том, что это не превратилось в документ, которым пользуется
            инженерная команда.
          </p>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="mt-14 overflow-x-auto rounded-3xl border border-white/[0.07] bg-bg/70"
        >
          <div className="min-w-[820px]">
            <div className="grid grid-cols-[1.05fr_1fr_1fr_1.2fr] border-b border-white/[0.07] text-sm font-semibold uppercase tracking-[0.16em] text-text-muted">
              <div className="p-5">Критерий</div>
              <div className="p-5">Exit-интервью</div>
              <div className="p-5">Loom / созвон</div>
              <div className="border-l border-accent/25 bg-accent/10 p-5 text-accent">
                OffboardAI
              </div>
            </div>

            {rows.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[1.05fr_1fr_1fr_1.2fr] border-b border-white/[0.07] last:border-b-0"
              >
                <div className="p-5 font-semibold text-text">{row.label}</div>
                <div className="flex gap-3 p-5 text-text-muted">
                  <X aria-hidden="true" className="mt-1 shrink-0 text-red-300/80" size={16} />
                  <span>{row.hr}</span>
                </div>
                <div className="flex gap-3 p-5 text-text-muted">
                  <Minus aria-hidden="true" className="mt-1 shrink-0 text-amber-200/80" size={16} />
                  <span>{row.loom}</span>
                </div>
                <div className="flex gap-3 border-l border-accent/20 bg-accent/[0.06] p-5 text-text">
                  <Check aria-hidden="true" className="mt-1 shrink-0 text-accent" size={17} />
                  <span>{row.offboard}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <blockquote className="mx-auto mt-10 max-w-4xl rounded-3xl border border-white/[0.07] bg-white/[0.03] p-6 text-center font-heading text-2xl font-bold leading-snug text-text md:p-8 md:text-3xl">
          “Мы не записываем воспоминания. Мы превращаем роль в пригодный для
          передачи технический актив.”
        </blockquote>
      </div>
    </section>
  );
}
