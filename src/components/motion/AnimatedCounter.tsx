"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

type AnimatedCounterProps = {
  value: string;
  className?: string;
};

export default function AnimatedCounter({ value, className = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const isNumeric = /^\d+$/.test(value);
  const [display, setDisplay] = useState(isNumeric ? "0" : value);

  useEffect(() => {
    if (!isInView || !isNumeric) return;
    const target = parseInt(value, 10);
    const controls = animate(0, target, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate(latest) {
        setDisplay(String(Math.round(latest)));
      },
    });
    return () => controls.stop();
  }, [isInView, isNumeric, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
