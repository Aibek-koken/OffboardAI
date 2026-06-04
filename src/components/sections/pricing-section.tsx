"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const pilotFeatures = [
  "3 увольнения или передачи роли",
  "Ручная настройка глоссария компании",
  "Консьерж-интервью и редактура",
  "Markdown-паспорт за 24 часа",
];

const sessionFeatures = [
  "Фиксированная цена после пилота",
  "Лимитированные сессии по потребности",
  "Единый формат для всех ролей",
  "Готовность к годовой подписке",
];

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="mt-8 space-y-4">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-text-muted">
          <CheckCircle2 aria-hidden="true" className="mt-0.5 shrink-0 text-accent" size={18} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PricingSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="pricing" className="relative overflow-hidden bg-surface py-24 md:py-32">
      <div className="absolute left-1/2 top-24 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">Pricing</p>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-text md:text-5xl">
            Пилот покупается как страхование релиза, не как HR-софтина.
          </h2>
          <p className="mt-6 text-lg leading-8 text-text-muted">
            Цена привязана к стоимости потери контекста: несколько недель
            senior-времени дороже, чем структурированная передача роли.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-2">
          <motion.article
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative overflow-hidden rounded-3xl border border-accent/40 bg-bg p-8 shadow-[0_0_60px_rgba(74,222,128,0.12)]"
          >
            <div className="absolute right-6 top-6 rounded-full bg-accent px-3 py-1 font-mono text-xs font-bold text-bg">
              Рекомендовано
            </div>
            <p className="font-mono text-sm uppercase tracking-[0.18em] text-accent">
              Pilot package
            </p>
            <h3 className="mt-5 font-heading text-2xl font-bold text-text">
              $1,500 за 3 увольнения
            </h3>
            <p className="mt-4 leading-7 text-text-muted">
              Подходит, когда ключевой инженер уже уходит в ближайшие две
              недели и нужно быстро сохранить контекст.
            </p>
            <FeatureList items={pilotFeatures} />
            <a href="mailto:founders@offboard.ai?subject=OffboardAI%20pilot" className="btn-primary mt-9 w-full justify-center">
              Забронировать пилот <ArrowRight aria-hidden="true" size={18} />
            </a>
          </motion.article>

          <motion.article
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.35, delay: 0.08, ease: "easeOut" }}
            className="rounded-3xl border border-white/[0.07] bg-white/[0.03] p-8"
          >
            <p className="font-mono text-sm uppercase tracking-[0.18em] text-text-muted">
              After pilot
            </p>
            <h3 className="mt-5 font-heading text-2xl font-bold text-text">
              $500 за сессию
            </h3>
            <p className="mt-4 leading-7 text-text-muted">
              Для команд, которым нужен повторяемый процесс передачи технических
              ролей без запуска полноценного knowledge-management проекта.
            </p>
            <FeatureList items={sessionFeatures} />
            <a href="#cta" className="btn-secondary mt-9 w-full justify-center">
              Обсудить подписку <ArrowRight aria-hidden="true" size={18} />
            </a>
          </motion.article>
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-text-muted">
          ROI-ориентир: если паспорт экономит преемнику 2–3 рабочих дня senior
          engineering time, пилот уже окупается.
        </p>
      </div>
    </section>
  );
}
