"use client";

import { useState } from "react";
import Image from "next/image";
import MaterialIcon from "@/components/ui/MaterialIcon";
import { videos } from "@/data/media";

/**
 * Sección "En video". Los videos se configuran en src/data/media.ts.
 * Si el array `videos` está vacío, la sección no se muestra.
 *
 * Carga diferida: primero se ve la miniatura y solo al hacer clic se carga
 * el reproductor de YouTube (mejor velocidad y menos cookies de terceros).
 */
export default function VideoSection() {
  const [playing, setPlaying] = useState<string | null>(null);

  if (videos.length === 0) return null;

  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      <div className="mb-10 md:mb-12 max-w-xl">
        <span className="font-label-caps text-label-caps text-secondary mb-2 block">
          EN VIDEO
        </span>
        <h2 className="font-headline-sm md:font-headline-md text-headline-sm md:text-headline-md text-primary mb-3">
          Conoce los productos
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Míralos por dentro antes de pedir. Si tienes dudas, escríbenos por
          WhatsApp y te ayudamos a elegir.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {videos.map((video) => {
          const isPlaying = playing === video.id;
          return (
            <article key={video.id}>
              <div className="relative aspect-video overflow-hidden bg-primary/5 border border-outline-variant/30">
                {isPlaying ? (
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setPlaying(video.id)}
                    aria-label={`Reproducir: ${video.title}`}
                    className="group absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                      alt={video.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 bg-primary/30 group-hover:bg-primary/20 transition-colors" />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="w-16 h-16 rounded-full bg-surface/90 flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                        <MaterialIcon
                          name="play_arrow"
                          className="text-4xl text-primary"
                        />
                      </span>
                    </span>
                  </button>
                )}
              </div>
              <h3 className="font-headline-sm text-lg text-primary mt-4">
                {video.title}
              </h3>
              {video.description && (
                <p className="font-body-md text-sm text-on-surface-variant mt-1">
                  {video.description}
                </p>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
