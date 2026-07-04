import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/motion/Reveal";
import { projects } from "@/lib/data";
import { whatsappLinks } from "@/lib/whatsapp";

export default function ProjectsSection() {
  return (
    <section id="proyectos" className="bg-ink px-6 py-28 md:px-12 md:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Portafolio activo
          </p>
          <h2 className="text-[clamp(1.8rem,3vw,2.8rem)] font-bold leading-[1.05] tracking-tight">
            Lo que estamos construyendo ahora mismo.
          </h2>
          <p className="mt-6 text-silver/60">
            Proyectos reales. Clientes reales. Números reales.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.12}>
              <article className="flex h-full flex-col bg-ink p-8 transition-colors hover:bg-ink-soft md:p-10">
                <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-ink-soft to-card">
                  <div className="flex flex-col items-center gap-2 text-center">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-accent/40 text-accent">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                        aria-hidden
                      >
                        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3Z" />
                        <circle cx="12" cy="13" r="3" />
                      </svg>
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-silver/80">
                      Próximamente
                    </span>
                    <span className="text-[11px] text-silver/40">
                      Registro fotográfico en camino
                    </span>
                  </div>
                </div>

                <p className="mt-6 text-xs font-bold uppercase tracking-widest text-accent">
                  {project.scope}
                </p>
                <h3 className="mt-2 text-xl font-bold text-silver">{project.name}</h3>
                <p className="text-sm text-silver/50">{project.client}</p>

                <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-silver/60">
                  {project.facts.map((fact) => (
                    <li key={fact} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-accent" />
                      {fact}
                    </li>
                  ))}
                </ul>

                <p className="mt-4 text-sm leading-relaxed text-silver/60">
                  {project.description}
                </p>

                <blockquote className="mt-6 border-l-2 border-accent pl-4 text-sm italic text-silver/70">
                  {project.quote}
                </blockquote>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col items-start gap-4 border border-white/10 p-8 md:flex-row md:items-center md:justify-between md:p-10">
            <p className="text-xl font-semibold">¿Tienes un proyecto similar?</p>
            <WhatsAppButton href={whatsappLinks.base}>
              Cuéntanos qué necesitas →
            </WhatsAppButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
