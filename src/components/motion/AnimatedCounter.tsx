"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  /** "year" muestra el número sin separador de miles (ej: 2023). */
  format?: "year";
  /** Si es true, el conteo se reinicia y reanima cada vez que entra al viewport. */
  repeat?: boolean;
  className?: string;
};

export default function AnimatedCounter({
  value,
  suffix = "",
  format,
  repeat = false,
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { margin: "-50px", once: !repeat });

  const fmt = (n: number) =>
    (format === "year"
      ? String(Math.round(n))
      : Math.round(n).toLocaleString("es-CO")) + suffix;

  const [display, setDisplay] = useState(fmt(0));

  useEffect(() => {
    if (!isInView) {
      if (repeat) setDisplay(fmt(0));
      return;
    }
    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate(latest) {
        setDisplay(fmt(latest));
      },
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView, value, repeat]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
