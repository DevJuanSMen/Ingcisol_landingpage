import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ingcisolai.com"),
  title: "INGCISOL | Ejecución integral automatizada en construcción",
  description:
    "Consultoría técnica, diseño y ejecución de obra en el Caribe colombiano, con agentes de IA propios que acortan tiempos y protegen los márgenes de tu proyecto.",
  openGraph: {
    title: "INGCISOL | Ejecución integral automatizada en construcción",
    description:
      "Consultoría técnica, diseño y ejecución de obra en el Caribe colombiano. Cotizamos en menos de 45 minutos con PROCURA AI.",
    url: "https://ingcisolai.com",
    siteName: "INGCISOL",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "INGCISOL | Ejecución integral automatizada en construcción",
    description:
      "Consultoría técnica, diseño y ejecución de obra en el Caribe colombiano. Cotizamos en menos de 45 minutos.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-silver">
        {children}
      </body>
    </html>
  );
}
