import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import AnimatedCounter from "@/components/motion/AnimatedCounter";
import { numericStats, textStats, officeRenders } from "@/lib/data";

export default function AboutSection() {
  return (
    <section id="nosotros" className="bg-ink px-6 py-28 md:px-12 md:py-36">
      <div className="mx-auto max-w-7xl">
        {/* Cifras animadas (contador que se reanima en cada paso) */}
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3 lg:grid-cols-5">
          {numericStats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.06}>
              <div className="flex h-full flex-col items-center justify-center bg-ink px-4 py-10 text-center md:py-12">
                <dd className="text-4xl font-bold tracking-tight text-accent md:text-5xl">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    format={stat.format}
                    repeat
                  />
                </dd>
                <dt className="mt-3 text-[11px] font-semibold uppercase leading-tight tracking-widest text-silver/50">
                  {stat.label}
                </dt>
              </div>
            </Reveal>
          ))}
        </dl>

        {/* Credenciales (texto) — fila de píldoras */}
        <dl className="mt-4 flex flex-wrap justify-center gap-3">
          {textStats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.06}>
              <div className="flex items-center gap-3 rounded-full border border-white/10 bg-ink px-5 py-3">
                <dt className="text-[11px] font-semibold uppercase tracking-widest text-silver/40">
                  {stat.label}
                </dt>
                <span className="h-3 w-px bg-white/15" />
                <dd className="text-sm font-bold text-silver">{stat.value}</dd>
              </div>
            </Reveal>
          ))}
        </dl>

        {/* Texto y foto */}
        <div className="mt-20 grid gap-16 md:grid-cols-2 md:items-center md:gap-24">
          <Reveal>
            <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-bold leading-tight tracking-tight">
              Somos ingenieros que también construyen la tecnología que hace más eficiente la obra.
            </h2>
            <div className="mt-8 space-y-5 border-l-2 border-accent pl-6 text-silver/70">
              <p>
                INGCISOL nació en Valledupar en 2023 con una convicción clara: el sector
                constructor colombiano necesita empresas que hagan bien la ingeniería Y que
                sepan aplicar tecnología donde realmente importa.
              </p>
              <p>
                No somos una agencia de software que habla de construcción. Somos una empresa
                de ingeniería civil registrada, con RUP vigente, con proyectos activos en la
                región Caribe — y con agentes de IA propios que desarrollamos porque vimos los
                mismos problemas repetirse obra tras obra.
              </p>
              <p className="font-semibold text-silver">
                La construcción inteligente ya llegó al Caribe. Y nosotros la estamos construyendo.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="space-y-3">
              {/* Render principal de la nueva sede */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40">
                <Image
                  src={officeRenders[0].src}
                  alt={officeRenders[0].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full bg-ink/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-silver/80 backdrop-blur">
                  Nueva sede · Valledupar · Render
                </span>
              </div>

              {/* Miniaturas */}
              <div className="grid grid-cols-3 gap-3">
                {officeRenders.slice(1).map((render) => (
                  <div
                    key={render.src}
                    className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10"
                  >
                    <Image
                      src={render.src}
                      alt={render.alt}
                      fill
                      sizes="(max-width: 768px) 30vw, 13vw"
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
