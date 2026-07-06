import { businessLines } from "@/lib/data";
import { whatsappLinks } from "@/lib/whatsapp";
import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/motion/Reveal";

export default function ServicesSection() {
  return (
    <section id="servicios" className="bg-ink py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <Reveal>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Lo que hacemos
          </p>
          <h2 className="text-[clamp(1.8rem,3vw,2.8rem)] font-bold leading-[1.05] tracking-tight">
            Tres líneas de negocio, un mismo estándar técnico.
          </h2>
          <p className="mt-6 max-w-xl text-silver/60">
            Consultoría, diseño y ejecución — con precio de referencia visible antes de escribir.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {businessLines.map((line, index) => (
            <Reveal key={line.title} delay={index * 0.1}>
              <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-ink-soft p-8 transition-colors duration-300 hover:border-accent/40 hover:bg-card">
                <h3 className="text-xl font-bold text-silver">{line.title}</h3>
                <p className="mt-3 text-sm text-silver/60">{line.benefit}</p>

                <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-6 text-sm text-silver/80">
                  {line.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-sm text-silver/50">
                  <span className="font-bold text-accent">{line.anchor}</span>
                </p>

                <WhatsAppButton
                  href={whatsappLinks.custom(line.waMessage)}
                  className="mt-6 w-full"
                >
                  Cotizar {line.title.toLowerCase()}
                </WhatsAppButton>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Cierre: puente al catálogo completo */}
        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col items-start gap-4 rounded-2xl border border-white/10 p-8 md:flex-row md:items-center md:justify-between md:p-10">
            <p className="text-lg font-semibold md:text-xl">
              ¿No encuentras lo que necesitas? Tenemos 57 servicios en catálogo.
            </p>
            <WhatsAppButton href={whatsappLinks.base}>
              Hablar con un ingeniero →
            </WhatsAppButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
