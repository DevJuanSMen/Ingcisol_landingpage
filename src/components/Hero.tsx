"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import WhatsAppButton from "@/components/WhatsAppButton";
import { credentials } from "@/lib/data";
import { whatsappLinks } from "@/lib/whatsapp";

const HEADLINE = ["Ejecución", "integral", "automatizada", "en", "construcción."];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-ink"
    >
      {/* Fondo parallax con dot grid */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 bg-dot-grid"
        aria-hidden
      />
      {/* Gradiente inferior para dar profundidad */}
      <div
        className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-ink to-transparent"
        aria-hidden
      />

      {/* Contenido */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pt-10 pb-16 md:px-12"
      >
        {/* Slogan */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-accent md:mb-8 md:text-sm"
        >
          Anticipamos · Optimizamos · Entregamos
        </motion.p>

        {/* H1 masivo — reveal por palabra */}
        <h1 className="text-[clamp(2.2rem,5.5vw,4.8rem)] font-bold leading-[0.95] tracking-tighter text-silver">
          {HEADLINE.map((word, i) => (
            <span
              key={word + i}
              className="inline-block overflow-hidden"
              style={{ marginRight: "0.25em" }}
            >
              <motion.span
                className="inline-block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.1 + i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Línea separadora */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 h-px w-full bg-white/15"
        />

        {/* Subtítulo + CTAs en dos columnas */}
        <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-lg text-base text-silver/70 md:text-lg"
          >
            Consultoría técnica, diseño y ejecución de obra en el Caribe colombiano.
            Con agentes de IA propios que acortan tiempos y protegen los márgenes de tu proyecto.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="flex shrink-0 flex-wrap gap-3"
          >
            <WhatsAppButton href={whatsappLinks.base} className="px-8 py-3.5 text-base">
              Solicitar cotización
            </WhatsAppButton>
            <WhatsAppButton href="#servicios" variant="outline" className="px-8 py-3.5 text-base">
              Ver servicios
            </WhatsAppButton>
          </motion.div>
        </div>

        {/* Credenciales */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-xs text-silver/50"
        >
          {credentials.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Logo grande flotante — esquina inferior derecha */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 right-0 z-0 select-none"
        aria-hidden
      >
        <Image
          src="/logo.png"
          alt=""
          width={600}
          height={600}
          className="w-[min(60vw,500px)] object-contain"
          priority
        />
      </motion.div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="relative z-10 flex justify-center pb-8"
        aria-hidden
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 text-silver/40"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <span className="text-lg">↓</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
