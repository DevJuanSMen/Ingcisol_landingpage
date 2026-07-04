import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/motion/Reveal";
import { whatsappLinks } from "@/lib/whatsapp";

export default function CamacolSection() {
  return (
    <section className="bg-ink-soft px-6 py-20">
      <Reveal className="mx-auto max-w-4xl text-center">
        <span className="rounded-full border border-accent/40 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
          Evento Q3 2026
        </span>
        <h2 className="mt-5 text-2xl font-bold tracking-tight md:text-3xl">
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

        <div className="mt-8">
          <WhatsAppButton href={whatsappLinks.camacolWaitlist}>
            Registrar interés →
          </WhatsAppButton>
        </div>
      </Reveal>
    </section>
  );
}
