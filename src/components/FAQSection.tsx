"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqs } from "@/lib/data";
import Reveal from "@/components/motion/Reveal";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-ink px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Preguntas frecuentes
          </h2>
        </Reveal>

        <div className="mt-10 divide-y divide-white/10 border-t border-white/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={faq.question} delay={Math.min(index * 0.05, 0.3)}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-silver">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 text-xl text-accent"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm text-silver/70">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
