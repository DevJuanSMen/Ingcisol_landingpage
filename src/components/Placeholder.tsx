type PlaceholderProps = {
  label: string;
  aspect?: string;
  className?: string;
};

export default function Placeholder({
  label,
  aspect = "aspect-[4/3]",
  className = "",
}: PlaceholderProps) {
  return (
    <div
      className={`${aspect} ${className} relative flex items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-[repeating-linear-gradient(45deg,_#22262c_0px,_#22262c_12px,_#2a2f37_12px,_#2a2f37_24px)]`}
    >
      <span className="rounded-full bg-ink/80 px-4 py-2 text-center text-xs font-medium uppercase tracking-wide text-silver/70">
        {label}
      </span>
    </div>
  );
}
