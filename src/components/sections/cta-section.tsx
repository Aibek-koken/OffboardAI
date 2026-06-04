"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";

const AuroraBackground = dynamic(
  () => import("@/components/ui/animated-shader-background"),
  { ssr: false }
);

export default function CtaSection() {
  return (
    <section id="cta" className="relative overflow-hidden bg-bg py-24 md:py-32">
      <div className="absolute inset-0 opacity-35">
        <Suspense fallback={<div className="absolute inset-0 bg-bg" />}>
          <AuroraBackground />
        </Suspense>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg/70 to-bg" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
        <p className="section-eyebrow">Next step</p>
        <h2 className="font-heading text-4xl font-extrabold tracking-tight text-text md:text-6xl">
          Если инженер уходит сейчас, документ нужен до его последнего дня.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-text-muted">
          Запустим пилот без интеграций: согласуем роли, проведём интервью и
          передадим первый Role Technical Passport за 24 часа после созвона.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="mailto:founders@offboard.ai?subject=OffboardAI%20pilot" className="btn-primary px-8 py-4 text-lg">
            Написать о пилоте <ArrowRight aria-hidden="true" size={19} />
          </a>
          <span className="font-mono text-sm text-text-muted">
            founders@offboard.ai
          </span>
        </div>
      </div>
    </section>
  );
}
