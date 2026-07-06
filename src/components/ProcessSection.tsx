import Reveal from "@/components/motion/Reveal";
import { processSteps } from "@/lib/data";

const NOTCH = 20; // px de la punta/muesca de la flecha

export default function ProcessSection() {
  return (
    <section id="proceso" className="bg-ink-soft px-6 py-28 md:px-12 md:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Método
          </p>
          <h2 className="text-[clamp(1.8rem,3vw,2.8rem)] font-bold leading-[1.05] tracking-tight">
            Seis pasos, sin improvisación.
          </h2>
        </Reveal>

        {/* Desktop: flechas interconectadas (todas visibles, sin scroll) */}
        <Reveal delay={0.1}>
          <div className="mt-14 hidden items-stretch md:flex">
            {processSteps.map((step, i) => {
              const first = i === 0;
              const last = i === processSteps.length - 1;
              const clip = first
                ? `polygon(0 0, calc(100% - ${NOTCH}px) 0, 100% 50%, calc(100% - ${NOTCH}px) 100%, 0 100%)`
                : last
                ? `polygon(0 0, 100% 0, 100% 100%, 0 100%, ${NOTCH}px 50%)`
                : `polygon(0 0, calc(100% - ${NOTCH}px) 0, 100% 50%, calc(100% - ${NOTCH}px) 100%, 0 100%, ${NOTCH}px 50%)`;
              return (
                <div
                  key={step.num}
                  style={{ clipPath: clip, marginLeft: first ? 0 : -NOTCH }}
                  className={`flex flex-1 flex-col justify-center py-10 pr-6 transition-colors duration-300 ${
                    first ? "pl-6" : "pl-9"
                  } ${i % 2 === 0 ? "bg-ink" : "bg-[#39414c]"} hover:bg-accent/15`}
                >
                  <span className="text-base font-bold text-accent">{step.num}</span>
                  <h3 className="mt-2.5 text-lg font-bold leading-tight text-silver">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-silver/60">
                    {step.body}
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Móvil: stack vertical (todas visibles, sin scroll horizontal) */}
        <Reveal delay={0.1}>
          <div className="mt-10 space-y-3 md:hidden">
            {processSteps.map((step) => (
              <div
                key={step.num}
                className="rounded-xl border border-white/10 bg-ink p-5"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/15 text-sm font-bold text-accent">
                    {step.num}
                  </span>
                  <h3 className="text-base font-bold text-silver">{step.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-silver/60">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
