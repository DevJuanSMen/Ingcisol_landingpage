import Reveal from "@/components/motion/Reveal";
import { testimonials } from "@/lib/data";

export default function TestimonialsSection() {
  return (
    <section className="bg-ink-soft px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Lo que dicen quienes han trabajado con nosotros.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, i) => (
            <Reveal key={`${testimonial.name}-${i}`} delay={i * 0.1} className="h-full">
              <figure className="flex h-full flex-col gap-4 rounded-lg border border-dashed border-white/20 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
                <blockquote className="text-silver/80">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="text-sm font-semibold text-silver">
                  {testimonial.name}
                  <span className="block text-xs font-normal text-silver/50">
                    {testimonial.role}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
