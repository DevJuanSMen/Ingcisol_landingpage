type WhatsAppButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
};

export default function WhatsAppButton({
  href,
  children,
  variant = "primary",
  className = "",
}: WhatsAppButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]";
  const styles =
    variant === "primary"
      ? "bg-accent text-white hover:bg-accent-dark"
      : "border border-white/30 text-silver hover:border-white hover:bg-white/5";

  const isInternalAnchor = href.startsWith("#");

  return (
    <a
      href={href}
      {...(!isInternalAnchor && { target: "_blank", rel: "noopener noreferrer" })}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </a>
  );
}
