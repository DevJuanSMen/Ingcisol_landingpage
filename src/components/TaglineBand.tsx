const ITEMS = [
  "ANTICIPAMOS",
  "·",
  "OPTIMIZAMOS",
  "·",
  "ENTREGAMOS",
  "·",
  "CONSTRUCCIÓN CON CEREBRO",
  "·",
  "PROCURA AI",
  "·",
  "REGIÓN CARIBE",
  "·",
  "COTIZAMOS EN 45 MINUTOS",
  "·",
  "ANTICIPAMOS",
  "·",
  "OPTIMIZAMOS",
  "·",
  "ENTREGAMOS",
  "·",
  "CONSTRUCCIÓN CON CEREBRO",
  "·",
  "PROCURA AI",
  "·",
  "REGIÓN CARIBE",
  "·",
  "COTIZAMOS EN 45 MINUTOS",
  "·",
];

export default function TaglineBand() {
  return (
    <div className="overflow-hidden border-y border-white/10 bg-ink-soft py-4">
      <div className="flex w-max animate-marquee-tag items-center gap-8 hover:[animation-play-state:paused]">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span
            key={i}
            className={
              item === "·"
                ? "text-accent text-lg leading-none"
                : "whitespace-nowrap text-xs font-bold uppercase tracking-[0.18em] text-silver/60"
            }
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
