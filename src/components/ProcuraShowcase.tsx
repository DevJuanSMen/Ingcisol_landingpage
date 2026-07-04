import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import WhatsAppButton from "@/components/WhatsAppButton";
import { procuraShots, type ProcuraShot } from "@/lib/data";
import { whatsappLinks } from "@/lib/whatsapp";

function BrowserFrame({
  shot,
  priority = false,
}: {
  shot: ProcuraShot;
  priority?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-card shadow-2xl shadow-black/40">
      {/* Barra de navegador */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-ink-soft px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400/70" />
        <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
        <span className="h-3 w-3 rounded-full bg-green-400/70" />
        <span className="ml-3 truncate rounded bg-white/5 px-3 py-1 text-[11px] text-silver/40">
          app.procura.ai — {shot.title}
        </span>
      </div>
      <Image
        src={shot.src}
        alt={shot.title}
        width={1860}
        height={920}
        priority={priority}
        className="h-auto w-full"
      />
    </div>
  );
}

export default function ProcuraShowcase() {
  const [featured, ...rest] = procuraShots;

  return (
    <section className="bg-ink px-6 py-28 md:px-12 md:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            PROCURA AI · En operación
          </p>
          <h2 className="max-w-3xl text-[clamp(1.8rem,3.5vw,3rem)] font-bold leading-[1.05] tracking-tight">
            No es una demo. Es el panel que usamos todos los días.
          </h2>
          <p className="mt-6 max-w-xl text-silver/60">
            Así se ve PROCURA AI por dentro: control de presupuesto APU,
            cotizaciones comparadas y órdenes de compra, en tiempo real sobre
            proyectos activos.
          </p>
        </Reveal>

        {/* Captura destacada */}
        <Reveal delay={0.1} className="mt-14">
          <BrowserFrame shot={featured} priority />
          <p className="mt-4 text-sm text-silver/50">{featured.caption}</p>
        </Reveal>

        {/* Capturas secundarias */}
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {rest.map((shot, index) => (
            <Reveal key={shot.src} delay={0.15 + index * 0.1}>
              <BrowserFrame shot={shot} />
              <p className="mt-4 text-sm text-silver/50">{shot.caption}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-col items-start gap-4 border border-accent/30 p-8 md:flex-row md:items-center md:justify-between md:p-10">
            <p className="text-xl font-semibold">
              ¿Quieres ver PROCURA AI funcionando con tu proyecto?
            </p>
            <WhatsAppButton href={whatsappLinks.procuraAI}>
              Agendar una demo →
            </WhatsAppButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
