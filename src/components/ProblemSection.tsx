import Reveal from "@/components/motion/Reveal";
import { problemCards } from "@/lib/data";

export default function ProblemSection() {
  return (
    <section className="bg-ink px-6 py-28 md:px-12 md:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="max-w-4xl text-[clamp(2.5rem,5.5vw,5rem)] font-bold leading-[0.95] tracking-tight">
            La mayoría de obras no pierde plata en el campo.{" "}
            <span className="text-silver/40">La pierde en el escritorio.</span>
          </h2>
          <p className="mt-8 max-w-xl text-lg text-silver/70">
            Presupuesto sin APU real, compras sin programación, sin corte de obra mensual.
            Los tres los controlamos. Y ahora los automatizamos.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
          {problemCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.1}>
              <div className="flex h-full flex-col bg-ink p-8 transition-colors duration-300 hover:bg-ink-soft md:p-10">
                <span className="mb-6 text-4xl font-bold text-accent">0{index + 1}</span>
                <h3 className="text-xl font-bold text-silver">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-silver/60">{card.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
