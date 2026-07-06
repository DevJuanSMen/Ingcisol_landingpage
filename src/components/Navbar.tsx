"use client";

import { useState } from "react";
import Image from "next/image";
import { navLinks } from "@/lib/data";
import { whatsappLinks } from "@/lib/whatsapp";

const INSTAGRAM_URL = "https://www.instagram.com/ingcisol_ingenieria/";
const LINKEDIN_URL = "https://www.linkedin.com/company/ingcisol/";

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconLinkedIn({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#top" className="shrink-0">
          <Image
            src="/logo.png"
            alt="INGCISOL Ingeniería y Construcción"
            width={160}
            height={64}
            className="h-14 w-auto object-contain md:h-16"
            priority
          />
        </a>

        <ul className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-silver/80 transition-colors hover:text-silver"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram @ingcisol_ingenieria"
            className="text-silver/50 transition-colors hover:text-silver"
          >
            <IconInstagram className="h-5 w-5" />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn INGCISOL"
            className="text-silver/50 transition-colors hover:text-silver"
          >
            <IconLinkedIn className="h-5 w-5" />
          </a>
          <a
            href={whatsappLinks.base}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.03] hover:bg-accent-dark active:scale-[0.98]"
          >
            Cotizar por WhatsApp
          </a>
        </div>

        <button
          type="button"
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-1.5 md:hidden"
        >
          <span className="h-0.5 w-6 bg-silver" />
          <span className="h-0.5 w-6 bg-silver" />
          <span className="h-0.5 w-6 bg-silver" />
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-ink px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-silver/80 hover:text-silver"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center gap-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram @ingcisol_ingenieria"
              className="text-silver/50 hover:text-silver"
            >
              <IconInstagram className="h-5 w-5" />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn INGCISOL"
              className="text-silver/50 hover:text-silver"
            >
              <IconLinkedIn className="h-5 w-5" />
            </a>
          </div>
          <a
            href={whatsappLinks.base}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-white"
          >
            Cotizar por WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
