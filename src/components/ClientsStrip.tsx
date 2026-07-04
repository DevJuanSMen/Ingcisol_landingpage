import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import { clients } from "@/lib/data";

export default function ClientsStrip() {
  return (
    <section className="bg-ink-soft py-12">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-center text-sm font-medium uppercase tracking-widest text-silver/60">
            Entidades y empresas que han confiado en INGCISOL
          </p>
        </Reveal>
      </div>

      {/* Marquee de logos — máscara de degradado en los bordes */}
      <div
        className="mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      >
        <div className="flex w-max animate-marquee items-center gap-6 hover:[animation-play-state:paused] md:gap-8">
          {[...clients, ...clients].map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="flex h-24 w-44 shrink-0 items-center justify-center rounded-xl bg-white/95 px-6 shadow-lg shadow-black/20 transition-transform duration-300 hover:scale-105 md:w-52"
            >
              {client.logo ? (
                <div className="relative h-full w-full">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    sizes="208px"
                    className="object-contain p-2"
                  />
                </div>
              ) : (
                <span className="text-center text-sm font-semibold uppercase leading-tight tracking-wide text-ink">
                  {client.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
