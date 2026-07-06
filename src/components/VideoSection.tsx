"use client";

import { useRef, useState } from "react";
import Reveal from "@/components/motion/Reveal";
import { executionVideos, type ExecutionVideo } from "@/lib/data";

function VideoCard({ video }: { video: ExecutionVideo }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    ref.current?.play().then(() => setPlaying(true)).catch(() => {});
  };
  const pause = () => {
    ref.current?.pause();
    setPlaying(false);
  };

  return (
    <figure
      className="group relative aspect-video cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-black"
      onMouseEnter={play}
      onMouseLeave={pause}
      onClick={() => (playing ? pause() : play())}
    >
      <video
        ref={ref}
        src={video.src}
        poster={video.poster}
        muted
        loop
        playsInline
        preload="none"
        className="h-full w-full object-cover"
      />
      {/* Botón play (se oculta al reproducir) */}
      <span
        className={`pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          playing ? "opacity-0" : "opacity-100"
        }`}
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/90 text-white shadow-lg">
          <svg viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-6 w-6" aria-hidden>
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink to-transparent p-4 text-sm font-medium text-silver">
        {video.caption}
      </figcaption>
    </figure>
  );
}

export default function VideoSection() {
  return (
    <section id="ejecucion" className="bg-ink px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Sin renders, sin stock
          </p>
          <h2 className="text-[clamp(1.8rem,3vw,2.8rem)] font-bold leading-[1.05] tracking-tight">
            Ejecución real, en terreno.
          </h2>
          <p className="mt-6 max-w-xl text-silver/60">
            Registro propio de obra en el Caribe colombiano. Pasa el cursor — o toca en
            móvil — para reproducir.
          </p>
        </Reveal>

        {/* Videos en tamaño contenido (no ocupan toda la pantalla) */}
        <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
          {executionVideos.map((video, index) => (
            <Reveal key={video.src} delay={index * 0.1}>
              <VideoCard video={video} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
