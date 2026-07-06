import { whatsappLinks } from "@/lib/whatsapp";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLinks.base}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition-transform duration-200 hover:scale-110 active:scale-95"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden>
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.71.45 3.38 1.3 4.85L2 22l5.36-1.4a9.9 9.9 0 004.68 1.19h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.79 14.13c-.24.68-1.4 1.31-1.93 1.34-.5.03-1 .21-3.32-.7-2.8-1.11-4.6-3.98-4.74-4.17-.14-.19-1.13-1.5-1.13-2.87 0-1.36.71-2.03.97-2.31.24-.27.53-.33.71-.33.18 0 .35 0 .5.01.16.01.38-.06.6.45.24.57.81 1.98.88 2.12.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.17-.3.37-.43.5-.14.14-.29.29-.13.57.17.28.75 1.24 1.62 2 1.11.98 2.05 1.29 2.33 1.43.28.14.44.12.6-.07.17-.19.71-.83.9-1.11.19-.28.38-.24.63-.14.26.1 1.64.77 1.92.91.28.14.47.21.53.33.07.12.07.68-.17 1.36z" />
      </svg>
    </a>
  );
}
