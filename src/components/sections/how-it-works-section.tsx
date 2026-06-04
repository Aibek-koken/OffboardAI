"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { FileCheck2, MessageSquareText, Mic2, Send } from "lucide-react";
import { useRef } from "react";

const steps = [
  {
    icon: Mic2,
    title: "30-минутный Zoom",
    text: "Интервьюер ведёт уходящего инженера по техническому шаблону: системы, риски, решения, ручные процессы.",
  },
  {
    icon: MessageSquareText,
    title: "Транскрипция и DLP",
    text: "Текст очищается от секретов и паттернов ключей. Мы фиксируем логику, а не доступы.",
  },
  {
    icon: FileCheck2,
    title: "Генерация паспорта",
    text: "ИИ и редактор собирают Role Technical Passport в Markdown с секциями, понятными преемнику.",
  },
  {
    icon: Send,
    title: "Лёгкий апрув и передача",
    text: "Сотрудник быстро подтверждает точность, после чего CTO получает документ для GitHub, GitLab или Notion.",
  },
];

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-140px" });
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative overflow-hidden bg-bg py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="section-eyebrow">Concierge MVP</p>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-text md:text-5xl">
            Ценность доказывается без тяжёлого продукта.
          </h2>
          <p className="mt-6 text-lg leading-8 text-text-muted">
            Первая версия — ручной консьерж-сервис с ИИ в середине процесса.
            Это быстрее валидирует боль и качество финального артефакта.
          </p>
        </div>

        <div className="relative mt-16 grid gap-6 lg:grid-cols-4">
          <div className="absolute left-8 right-8 top-10 hidden h-px bg-white/[0.08] lg:block" />
          <motion.div
            aria-hidden="true"
            initial={reduceMotion ? false : { scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : undefined}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="absolute left-8 right-8 top-10 hidden h-px origin-left bg-accent/60 lg:block"
          />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.article
                key={step.title}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : undefined}
                transition={{ duration: 0.35, delay: index * 0.08, ease: "easeOut" }}
                className="relative rounded-3xl border border-white/[0.07] bg-surface/70 p-6"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-accent/25 bg-bg text-accent shadow-[0_0_40px_rgba(74,222,128,0.12)]">
                  <Icon aria-hidden="true" size={28} strokeWidth={1.7} />
                </div>
                <p className="mt-7 font-mono text-sm text-accent">
                  0{index + 1}
                </p>
                <h3 className="mt-3 font-heading text-xl font-bold text-text">
                  {step.title}
                </h3>
                <p className="mt-4 leading-7 text-text-muted">{step.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
