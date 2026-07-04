"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { serviceGroups } from "@/lib/data";
import { whatsappLinks } from "@/lib/whatsapp";
import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/motion/Reveal";

export default function ServicesSection() {
  const [activeId, setActiveId] = useState(serviceGroups[0].id);
  const activeGroup = serviceGroups.find((g) => g.id === activeId) ?? serviceGroups[0];
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="servicios" className="bg-ink py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <Reveal>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            57 servicios en catálogo
          </p>
          <h2 className="text-[clamp(1.8rem,3vw,2.8rem)] font-bold leading-[1.05] tracking-tight">
            ¿Qué hace INGCISOL?
          </h2>
          <p className="mt-6 max-w-xl text-silver/60 uppercase tracking-wide text-sm font-semibold">
            Impulsa tus márgenes en cada etapa de tu obra aplicando automatización en todo el proceso.
          </p>
        </Reveal>

        {/* Tabs */}
        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap gap-3 border-b border-white/10 pb-4">
            {serviceGroups.map((group) => (
              <button
                key={group.id}
                type="button"
                onClick={() => setActiveId(group.id)}
                className={`px-6 py-2.5 text-sm font-semibold transition-all duration-200 ${
                  activeId === group.id
                    ? "bg-accent text-white"
                    : "border border-white/20 text-silver/70 hover:border-white/40 hover:text-silver"
                }`}
              >
                {group.title}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Cards con scroll horizontal draggable */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeGroup.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mt-6 mb-8 text-sm text-silver/60 md:text-base">
              {activeGroup.description}
            </p>

            {/* Hint de scroll en mobile */}
            <p className="mb-3 text-[10px] uppercase tracking-widest text-silver/30 md:hidden">
              ← Desliza para ver más →
            </p>

            <div
              ref={scrollRef}
              className="cursor-grab overflow-x-auto pb-4 active:cursor-grabbing"
              style={{ scrollbarWidth: "none" }}
            >
              <div className="flex w-max gap-px border border-white/10 bg-white/10">
                {activeGroup.services.map((service, index) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: index * 0.03, ease: [0.16, 1, 0.3, 1] }}
                    className="flex w-56 shrink-0 flex-col justify-between bg-ink p-6 transition-colors duration-200 hover:bg-ink-soft md:w-64"
                  >
                    <div>
                      <h3 className="text-sm font-semibold leading-snug text-silver">
                        {service.name}
                      </h3>
                      <p className="mt-1 text-[10px] uppercase tracking-wide text-silver/40">
                        {service.unit}
                      </p>
                      <p className="mt-4 text-xl font-bold text-accent">
                        {service.priceLabel}
                      </p>
                    </div>
                    <WhatsAppButton
                      href={whatsappLinks.service(service.name)}
                      variant="outline"
                      className="mt-6 w-full py-2 text-xs"
                    >
                      Cotizar
                    </WhatsAppButton>
                  </motion.div>
                ))}
              </div>
            </div>

            <p className="mt-4 text-xs text-silver/40">
              Precios &ldquo;desde&rdquo;. El valor final se define en cotización formal según alcance y ubicación.
            </p>
          </motion.div>
        </AnimatePresence>

        {/* CTA cierre */}
        <Reveal delay={0.1}>
          <div className="mt-16 flex flex-col items-start gap-4 border border-white/10 p-8 md:flex-row md:items-center md:justify-between md:p-10">
            <p className="text-xl font-semibold">
              ¿No encuentras lo que necesitas? Tenemos 57 servicios en catálogo.
            </p>
            <WhatsAppButton href={whatsappLinks.base}>
              Hablar con un ingeniero →
            </WhatsAppButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
