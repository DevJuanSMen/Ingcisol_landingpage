import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import { projectPhotos } from "@/lib/data";

export default function ProjectsMarquee() {
  return (
    <section className="bg-ink-soft py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <Reveal>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Evidencia, no adjetivos
          </p>
          <h2 className="text-[clamp(1.8rem,3vw,2.8rem)] font-bold leading-[1.05] tracking-tight">
            Proyectos reales, resultados verificables.
          </h2>
        </Reveal>
      </div>

      {/* Marquee infinito — máscara de degradado en los bordes */}
      <div className="mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div className="flex w-max animate-marquee gap-5 hover:[animation-play-state:paused]">
          {[...projectPhotos, ...projectPhotos].map((photo, i) => (
            <figure
              key={`${photo.src}-${i}`}
              className="group relative aspect-[4/5] w-72 shrink-0 overflow-hidden rounded-2xl border border-white/10"
            >
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                sizes="288px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 text-sm font-medium leading-snug text-silver">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
