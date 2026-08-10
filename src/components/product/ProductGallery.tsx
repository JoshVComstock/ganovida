"use client";

import { useState } from "react";
import ProductImage from "@/components/ui/ProductImage";
import type { Product } from "@/data/products";

interface ProductGalleryProps {
  product: Product;
}

/**
 * Galería del producto: imagen principal + miniaturas clickeables.
 * Las imágenes vienen del array `images` del producto (src/data/products.ts).
 */
export default function ProductGallery({ product }: ProductGalleryProps) {
  const [current, setCurrent] = useState(0);
  const images = product.images;
  const active = images[current] ?? images[0];

  return (
    <div className="lg:col-span-7 space-y-gutter">
      {/* Imagen principal — object-contain para no recortar el empaque */}
      <div className="aspect-square md:aspect-[4/5] overflow-hidden bg-background border border-outline-variant/40">
        <ProductImage
          src={active?.src ?? ""}
          alt={active?.alt ?? product.name}
          className="w-full h-full"
          sizes="(max-width: 1024px) 100vw, 60vw"
          fit="contain"
          padded
          priority
        />
      </div>

      {/* Miniaturas — solo si hay más de una imagen */}
      {images.length > 1 && (
        <div className="grid grid-cols-3 gap-gutter">
          {images.map((image, i) => {
            const isActive = i === current;
            return (
              <button
                key={image.src}
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`Ver imagen ${i + 1} de ${product.name}`}
                aria-current={isActive}
                className={`aspect-square overflow-hidden bg-background border transition-all ${
                  isActive
                    ? "border-primary ring-1 ring-primary"
                    : "border-outline-variant/40 hover:border-primary opacity-80 hover:opacity-100"
                }`}
              >
                <ProductImage
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full"
                  sizes="(max-width: 1024px) 33vw, 20vw"
                  fit="contain"
                  padded
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
