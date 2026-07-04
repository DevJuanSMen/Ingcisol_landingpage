import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import { workPhotos } from "@/lib/data";

export default function WorksGallery() {
  return (
    <section className="bg-ink-soft px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Registro de obra
          </p>
          <h2 className="max-w-2xl text-[clamp(1.8rem,3vw,2.8rem)] font-bold leading-[1.05] tracking-tight">
            Obra en campo, no renders de catálogo.
          </h2>
          <p className="mt-6 max-w-xl text-silver/60">
            Tomas aéreas de ejecución vial y de urbanismo en la región Caribe.
          </p>
        </Reveal>

        {/* Grilla de tarjetas 3:4 — todas visibles, sin recorte */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {workPhotos.map((photo, index) => (
            <Reveal key={photo.src} delay={index * 0.08}>
              <article className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay degradado inferior */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-lg font-bold leading-tight text-silver">
                    {photo.title}
                  </h3>
                  <p className="mt-1 text-sm text-silver/70">{photo.caption}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
