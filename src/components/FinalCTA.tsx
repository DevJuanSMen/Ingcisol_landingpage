import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/motion/Reveal";
import { whatsappLinks } from "@/lib/whatsapp";

export default function FinalCTA() {
  return (
    <section className="bg-ink px-6 py-28 md:px-12 md:py-36">
      <Reveal className="mx-auto max-w-7xl">
        <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-accent">
          Empieza hoy
        </p>
        <h2 className="max-w-4xl text-[clamp(1.8rem,3.5vw,3.2rem)] font-bold leading-[1.1] tracking-tight">
          Tu obra merece un ingeniero que también sea innovador.
        </h2>

        <div className="mt-8 h-px w-full bg-white/10" />

        <div className="mt-10 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xl text-silver/70">
            Escríbenos hoy. Cotizamos en menos de 45 minutos.
          </p>
          <WhatsAppButton href={whatsappLinks.base} className="px-10 py-4 text-base">
            Solicitar cotización por WhatsApp
          </WhatsAppButton>
        </div>

        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-2 text-sm text-silver/40">
          <span>WhatsApp: +57 302 230 2548</span>
          <span>Instagram: @ingcisol</span>
          <span>Valledupar, Cesar — Región Caribe</span>
        </div>
      </Reveal>
    </section>
  );
}
