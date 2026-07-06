import { Fragment } from "react";
import { aiAgents } from "@/lib/data";
import Reveal from "@/components/motion/Reveal";

const FLOW = [
  "Landing",
  "Catálogo digital",
  "PROCURA AI · cotización <45 min",
  "Ejecución",
];

export default function AISection() {
  return (
    <section id="ia" className="bg-ink-soft px-6 py-28 md:px-12 md:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            El diferenciador
          </p>
          <h2 className="max-w-4xl text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.02] tracking-tight">
            El sector constructor ya tiene IA. La mayoría no sabe usarla todavía.{" "}
            <span className="text-silver/40">Nosotros la construimos.</span>
          </h2>
          <p className="mt-8 max-w-2xl text-lg text-silver/70">
            En INGCISOL no usamos herramientas genéricas de IA. Desarrollamos nuestros propios
            agentes, conectados directamente con la operación: cotización, actas de obra y
            análisis de licitaciones.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {aiAgents.map((agent, index) => (
            <Reveal key={agent.name} delay={index * 0.1}>
              <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-ink p-8 transition-colors duration-300 hover:border-accent/40 hover:bg-card">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-2xl font-bold">{agent.name}</h3>
                  <span
                    className={`flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wide ${
                      agent.status === "activo"
                        ? "bg-accent/20 text-accent"
                        : "bg-white/10 text-silver/50"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        agent.status === "activo" ? "bg-accent" : "bg-silver/50"
                      }`}
                    />
                    {agent.status === "activo" ? "Activo" : "En desarrollo"}
                  </span>
                </div>

                {agent.status === "activo" && (
                  <p className="mt-6 text-lg font-semibold italic leading-snug text-silver">
                    &ldquo;Antes, cotizar tardaba días. Ahora tarda 45 minutos.&rdquo;
                  </p>
                )}

                <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-silver/60">
                  {agent.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Flujo del ecosistema */}
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-3 rounded-2xl border border-white/10 bg-ink px-6 py-6">
            {FLOW.map((step, i) => (
              <Fragment key={step}>
                <span className="rounded-full bg-white/5 px-4 py-2 text-xs font-semibold text-silver/80 md:text-sm">
                  {step}
                </span>
                {i < FLOW.length - 1 && <span className="text-accent">→</span>}
              </Fragment>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
