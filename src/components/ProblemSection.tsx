import Reveal from "@/components/motion/Reveal";
import { sectorProblems } from "@/lib/data";

export default function ProblemSection() {
  return (
    <section id="problemas" className="bg-ink px-6 py-28 md:px-12 md:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            El punto de partida
          </p>
          <h2 className="max-w-4xl text-[clamp(1.8rem,3.5vw,3rem)] font-bold leading-[1.05] tracking-tight">
            El sector construye bajo los mismos cinco problemas de siempre.
          </h2>
          <p className="mt-6 max-w-2xl text-silver/60">
            INGCISOL no vende promesas para resolverlos. Cada uno tiene una respuesta
            operativa concreta.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {sectorProblems.map((p, index) => (
            <Reveal key={p.num} delay={index * 0.07}>
              <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-ink-soft p-6 transition-colors duration-300 hover:border-accent/40 hover:bg-card">
                <span className="text-3xl font-bold text-accent/80">{p.num}</span>
                <span className="mt-4 w-fit rounded-full bg-accent/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-accent">
                  {p.tag}
                </span>
                <h3 className="mt-4 text-base font-bold leading-snug text-silver">
                  {p.solution}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-silver/60">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
