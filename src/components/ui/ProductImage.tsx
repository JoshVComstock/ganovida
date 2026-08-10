"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductImageProps {
  src: string;
  alt: string;
  /** Clases de tamaño/proporción del contenedor (ej. "aspect-[4/5]"). */
  className?: string;
  sizes?: string;
  priority?: boolean;
  /**
   * "cover" recorta para llenar el marco (fotos de ambiente).
   * "contain" muestra el empaque completo sin recortar: es lo correcto para
   * packshots, porque cada producto tiene una forma distinta (caja, bolsa,
   * botella) y así todos se ven al mismo tamaño y alineados.
   */
  fit?: "cover" | "contain";
  /** Padding interno cuando fit="contain", para que el empaque respire. */
  padded?: boolean;
}

/**
 * Imagen de producto con next/image y respaldo gris.
 * Si la foto todavía no existe en /public, muestra un recuadro gris del mismo
 * tamaño. Al colocar el archivo real, aparece automáticamente.
 * Preparada para URLs remotas en Fase 2 (ver remotePatterns en next.config).
 */
export default function ProductImage({
  src,
  alt,
  className = "",
  sizes = "(max-width: 768px) 50vw, 25vw",
  priority = false,
  fit = "cover",
  padded = false,
}: ProductImageProps) {
  const [failed, setFailed] = useState(false);
  const hasSrc = Boolean(src) && !failed;

  /**
   * Fondo del marco:
   *  - Sin foto todavía → gris, para que se note que falta.
   *  - Packshot (contain) → `background` (#fcf9f8), EL MISMO crema con el que
   *    se generan los packshots. Si el marco no coincide con el fondo de la
   *    imagen se ve un rectángulo recortado encima del empaque.
   *    ⚠️ Si algún día cambias el fondo de las fotos, cambia también este
   *    color: los dos tienen que ser exactamente el mismo.
   *  - Foto de ambiente (cover) → gris mientras carga; la foto lo tapa igual.
   */
  const bgClass = !hasSrc
    ? "bg-placeholder"
    : fit === "contain"
      ? "bg-background"
      : "bg-placeholder";

  return (
    <div className={`relative overflow-hidden ${bgClass} ${className}`}>
      {hasSrc && (
        // Envoltura interna: permite dar aire alrededor del empaque sin que
        // `fill` ignore el padding (fill se posiciona sobre este contenedor).
        <div
          className={`absolute inset-0 ${padded ? "p-4 md:p-6" : ""}`}
        >
          <div className="relative w-full h-full">
            <Image
              src={src}
              alt={alt}
              fill
              sizes={sizes}
              priority={priority}
              className={fit === "contain" ? "object-contain" : "object-cover"}
              onError={() => setFailed(true)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
