import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/motion/Reveal";
import { whatsappLinks } from "@/lib/whatsapp";

export default function FinalCTA() {
  return (
    <section id="cta-final" className="bg-ink px-6 py-28 md:px-12 md:py-36">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.05] tracking-tight">
          Construcción con cerebro.
          <br />
          Empieza con un mensaje.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-silver/70">
          Cuéntanos tu proyecto por WhatsApp. PROCURA AI arma el borrador de cotización en
          menos de 45 minutos.
        </p>

        <div className="mt-10 flex justify-center">
          <WhatsAppButton href={whatsappLinks.base} className="px-10 py-4 text-base">
            Solicitar cotización por WhatsApp
          </WhatsAppButton>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-silver/40">
          <span>WhatsApp: +57 302 230 2548</span>
          <span>Instagram: @ingcisol_ingenieria</span>
          <span>Valledupar, Cesar — Región Caribe</span>
        </div>
      </Reveal>
    </section>
  );
}
