"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { AlertTriangle, Brain, Clock, TrendingDown } from "lucide-react";

const painCards = [
  {
    icon: Brain,
    title: "Архитектурные решения",
    text: "Почему был выбран именно этот подход? Почему не использовали более простое решение? Этот контекст нигде не записан.",
  },
  {
    icon: AlertTriangle,
    title: "Скрытый техдолг",
    text: "«Это держится на честном слове» — такие места в коде знает только один человек. Когда он уходит, вы об этом узнаете при падении.",
  },
  {
    icon: Clock,
    title: "Регулярные ручные задачи",
    text: "Что нужно делать вручную раз в неделю? Какой скрипт запускать в конце месяца? Новый инженер узнает об этом случайно.",
  },
];

const stats = [
  { value: 84, suffix: "%", label: "топ-менеджеров обеспокоены потерей знаний" },
  { value: 8, suffix: "%", label: "компаний умеют их системно сохранять" },
  { value: 3, suffix: "–4 мес", label: "средний цикл потери контекста в high-tech" },
];

function CountUp({
  value,
  suffix,
  active,
}: {
  value: number;
  suffix: string;
  active: boolean;
}) {
  const [display, setDisplay] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!active) return;
    if (reduceMotion) {
      setDisplay(value);
      return;
    }

    let frameId = 0;
    const startedAt = performance.now();
    const duration = 700;

    const tick = (time: number) => {
      const progress = Math.min((time - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [active, reduceMotion, value]);

  return (
    <span className="font-mono text-4xl font-bold tracking-tight text-text md:text-5xl">
      {display}
      {suffix}
    </span>
  );
}

export default function PainSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-120px" });
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="pain"
      ref={sectionRef}
      className="relative overflow-hidden border-t border-white/[0.07] bg-bg py-24 md:py-32"
    >
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="section-eyebrow">ПРОБЛЕМА</p>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-text md:text-5xl">
            Когда уходит senior-инженер, вы теряете не сотрудника — вы теряете контекст.
          </h2>
          <p className="mt-6 text-lg leading-8 text-text-muted">
            Архитектурные обоснования, скрытый техдолг и регулярные ручные процессы —
            всё это знает один человек. После его ухода команда тратит месяцы на восстановление.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {painCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.title}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : undefined}
                transition={{ duration: 0.35, delay: index * 0.08, ease: "easeOut" }}
                className="glass-card group p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 text-accent">
                  <Icon aria-hidden="true" size={22} strokeWidth={1.8} />
                </div>
                <h3 className="mt-6 font-heading text-xl font-bold text-text">
                  {card.title}
                </h3>
                <p className="mt-4 leading-7 text-text-muted">{card.text}</p>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-14 grid overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.03] md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-b border-white/[0.07] p-6 md:border-b-0 md:border-r md:last:border-r-0"
            >
              <CountUp value={stat.value} suffix={stat.suffix} active={inView} />
              <p className="mt-3 max-w-xs text-sm leading-6 text-text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-accent/20 bg-accent/5 p-5 text-text-muted">
          <TrendingDown aria-hidden="true" className="mt-1 shrink-0 text-accent" size={20} />
          <p>
            Для команды 20–80 человек это не редкий кризис, а регулярный
            операционный риск: ключевой контекст уходит каждые несколько месяцев.
          </p>
        </div>
      </div>
    </section>
  );
}
