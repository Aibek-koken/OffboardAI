"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EyeOff, ShieldCheck, Trash2 } from "lucide-react";

const securityItems = [
  {
    icon: EyeOff,
    title: "Интерфейсный барьер",
    text: "Перед интервью сотрудник видит жёсткое предупреждение: не произносить пароли, токены и API-ключи.",
  },
  {
    icon: ShieldCheck,
    title: "DLP-редактура",
    text: "Паттерны, похожие на секреты, приватные ключи и токены, заменяются на [REDACTED] до сборки документа.",
  },
  {
    icon: Trash2,
    title: "Минимизация данных",
    text: "Аудио не хранится. Транскрипт удаляется после генерации и апрува Role Technical Passport.",
  },
];

export default function SecuritySection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="security" className="bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">Security by default</p>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-text md:text-5xl">
            Мы фиксируем логику, а не доступы.
          </h2>
          <p className="mt-6 text-lg leading-8 text-text-muted">
            MVP спроектирован под минимизацию чувствительных данных: меньше
            хранения, меньше поверхности атаки, меньше организационного трения.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {securityItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.35, delay: index * 0.08, ease: "easeOut" }}
                className="rounded-3xl border border-accent/15 bg-accent/[0.04] p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <Icon aria-hidden="true" size={23} strokeWidth={1.7} />
                </div>
                <h3 className="mt-6 font-heading text-xl font-bold text-text">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-text-muted">{item.text}</p>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-8 rounded-3xl border border-amber-300/25 bg-amber-300/10 p-6 text-amber-100">
          <p className="font-semibold">Предупреждение перед интервью</p>
          <p className="mt-2 leading-7 text-amber-100/85">
            Запрещено называть вслух пароли, токены и API-ключи. Инструмент
            фиксирует архитектурную логику, процессы и риски — не секреты.
          </p>
        </div>
      </div>
    </section>
  );
}
