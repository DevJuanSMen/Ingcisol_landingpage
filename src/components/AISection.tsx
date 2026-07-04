import { aiAgents } from "@/lib/data";
import { whatsappLinks } from "@/lib/whatsapp";
import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/motion/Reveal";

export default function AISection() {
  return (
    <section id="ia" className="bg-ink-soft px-6 py-28 md:px-12 md:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Ecosistema de IA propio
          </p>
          <h2 className="max-w-4xl text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[0.95] tracking-tight">
            El sector constructor ya tiene IA.
            La mayoría no sabe usarla.{" "}
            <span className="text-silver/40">Nosotros la construimos.</span>
          </h2>
          <p className="mt-8 max-w-xl text-lg text-silver/70">
            En INGCISOL no usamos herramientas genéricas de IA. Desarrollamos nuestros propios
            agentes, conectados directamente con la operación.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
          {aiAgents.map((agent, index) => (
            <Reveal key={agent.name} delay={index * 0.12}>
              <div className="flex h-full flex-col bg-ink-soft p-8 transition-colors duration-300 hover:bg-card md:p-10">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-2xl font-bold">{agent.name}</h3>
                  <span
                    className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wide ${
                      agent.status === "activo"
                        ? "bg-accent/20 text-accent"
                        : "bg-white/10 text-silver/50"
                    }`}
                  >
                    {agent.status === "activo" ? "● Activo" : "● En desarrollo"}
                  </span>
                </div>

                <p className="text-[11px] uppercase tracking-wider text-silver/40">
                  {agent.statusLabel}
                </p>

                <p className="mt-6 whitespace-pre-line text-lg font-semibold leading-snug text-silver">
                  {agent.title}
                </p>
                <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-silver/60">
                  {agent.body}
                </p>

                {agent.flow && (
                  <div className="mt-8 border-t border-white/10 pt-6">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-silver/60">
                      {agent.flow.map((step, i) => (
                        <span key={step} className="flex items-center gap-2">
                          <span className="rounded bg-white/10 px-2 py-1">{step}</span>
                          {i < agent.flow!.length - 1 && (
                            <span className="text-accent">→</span>
                          )}
                        </span>
                      ))}
                    </div>
                    <p className="mt-4 text-xs font-bold uppercase tracking-widest text-accent">
                      ≤ 45 minutos
                    </p>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col items-start gap-4 border border-accent/30 p-8 md:flex-row md:items-center md:justify-between md:p-10">
            <p className="text-xl font-semibold">
              ¿Tu empresa constructora quiere acceso a PROCURA AI?
            </p>
            <WhatsAppButton href={whatsappLinks.procuraAI}>
              Hablar con nosotros →
            </WhatsAppButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
