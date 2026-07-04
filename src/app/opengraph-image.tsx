import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const alt = "INGCISOL — Ejecución integral automatizada en construcción";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  const logoData = await readFile(join(process.cwd(), "public", "logo.png"));
  const logoBase64 = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#0f1114",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
          position: "relative",
        }}
      >
        {/* Línea naranja superior */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "#e85d04",
          }}
        />

        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoBase64}
          alt="INGCISOL"
          style={{ height: "180px", width: "auto", objectFit: "contain" }}
        />

        {/* Tagline */}
        <p
          style={{
            marginTop: "32px",
            fontSize: "24px",
            color: "#f4f6f8",
            textAlign: "center",
            fontFamily: "sans-serif",
            lineHeight: 1.4,
            maxWidth: "700px",
          }}
        >
          Consultoría técnica, diseño y ejecución de obra en el Caribe colombiano.
        </p>

        {/* Pill naranja */}
        <div
          style={{
            marginTop: "28px",
            background: "#e85d04",
            color: "#ffffff",
            fontSize: "18px",
            fontFamily: "sans-serif",
            fontWeight: "bold",
            padding: "12px 28px",
            borderRadius: "6px",
          }}
        >
          Cotizamos en menos de 45 minutos · ingcisolai.com
        </div>

        {/* Línea naranja inferior */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "#e85d04",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
