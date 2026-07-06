import Image from "next/image";
import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/motion/Reveal";
import { whatsappLinks } from "@/lib/whatsapp";

const EVENT_URL = "https://camacol.co/eventos/segunda-cumbre-de-ia-sector-constructor";

export default function CamacolSection() {
  return (
    <section id="camacol" className="bg-ink-soft px-6 py-20">
      <Reveal className="mx-auto max-w-4xl text-center">
        <span className="rounded-full border border-accent/40 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
          Evento Q3 2026
        </span>

        {/* Imagen oficial del evento */}
        <a
          href={EVENT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 block overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40 transition-transform duration-300 hover:scale-[1.01]"
        >
          <Image
            src="/eventos/camacol-cumbre.webp"
            alt="Segunda Cumbre de IA del Sector Constructor — CAMACOL, Cartagena, Julio 23–24 2026"
            width={1200}
            height={630}
            className="h-auto w-full"
          />
        </a>

        <h2 className="mt-8 text-2xl font-bold tracking-tight md:text-3xl">
          Segunda Cumbre de IA del Sector Constructor
          <br />
          CAMACOL · Cartagena · Julio 23–24, 2026
        </h2>
        <p className="mt-6 text-silver/80">
          El sector constructor de Colombia se reúne en Cartagena. INGCISOL lleva algo que
          nunca se ha visto en la Cumbre:
        </p>
        <p className="mt-4 font-semibold text-silver">
          PROCURA AI — el primer agente de cotización automatizada desarrollado por una
          empresa constructora del Caribe colombiano.
        </p>
        <p className="mt-2 text-silver/80">No es un concepto. Es un sistema en operación.</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <WhatsAppButton href={whatsappLinks.camacolWaitlist}>
            Registrar interés →
          </WhatsAppButton>
          <a
            href={EVENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-silver transition-all duration-200 hover:border-white hover:bg-white/5"
          >
            Ver evento oficial →
          </a>
        </div>
      </Reveal>
    </section>
  );
}
