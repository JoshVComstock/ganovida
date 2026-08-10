import Link from "next/link";
import ProductImage from "@/components/ui/ProductImage";
import MaterialIcon from "@/components/ui/MaterialIcon";
import { hasPrice, isKit } from "@/lib/data";
import { formatPrice } from "@/lib/config";
import { whatsappOrderLink, whatsappRestockLink } from "@/lib/whatsapp";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

/**
 * Tarjeta de producto: foto, presentación, nombre, precio público y botón de
 * pedido por WhatsApp.
 *
 * Reglas de negocio:
 *  - Se muestra únicamente el precio público oficial de DXN. No se muestran
 *    precios de afiliado ni "ahorros" (cláusula 13 del reglamento DXN).
 *  - Todas las fotos van en el mismo marco 3/4 con `object-contain`, para que
 *    cajas, bolsas y botellas se vean del mismo tamaño y alineadas.
 */
export default function ProductCard({ product }: ProductCardProps) {
  const href = `/productos/${product.slug}`;
  const kit = isKit(product);

  return (
    <article className="group flex flex-col h-full">
      <Link href={href} className="block">
        {/* Marco crema (#fcf9f8): mismo fondo con el que se generan los
            packshots, para que el empaque no quede sobre un recuadro visible */}
        <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-background border border-outline-variant/40">
          <ProductImage
            src={product.images[0]?.src ?? ""}
            alt={product.images[0]?.alt ?? product.name}
            className="w-full h-full transition-transform duration-700 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 22vw"
            fit="contain"
            padded
          />
          <span
            className={`absolute top-2 left-2 z-10 font-label-caps text-[9px] tracking-widest px-2 py-1 ${
              kit
                ? "bg-gold-dark text-white"
                : "bg-primary/90 text-on-primary"
            }`}
          >
            {kit ? "KIT" : "DXN"}
          </span>
          {!product.inStock && (
            <span className="absolute top-2 right-2 z-10 bg-surface-container-highest text-on-surface-variant font-label-caps text-[9px] tracking-widest px-2 py-1">
              SIN STOCK
            </span>
          )}
        </div>
      </Link>

      {/* Bloque de texto: crece para que todos los botones queden alineados */}
      <div className="flex flex-col flex-grow">
        <Link href={href} className="block">
          <span className="font-label-caps text-[10px] md:text-label-caps text-secondary uppercase">
            {product.presentation}
          </span>
          <h3 className="font-headline-sm text-base sm:text-lg md:text-xl text-primary mt-0.5 line-clamp-2">
            {product.name}
          </h3>
          {!product.inStock ? (
            <p className="font-body-md text-body-md text-secondary mt-1">
              Sin stock por ahora
            </p>
          ) : hasPrice(product) ? (
            <p className="font-body-md text-body-md text-primary font-medium mt-1">
              {formatPrice(product.publicPrice)}
            </p>
          ) : (
            <p className="font-body-md text-body-md text-secondary mt-1">
              Consultar precio
            </p>
          )}
        </Link>

        <div className="mt-auto pt-3 md:pt-4">
          <a
            href={
              product.inStock
                ? whatsappOrderLink(product.name, product.publicPrice)
                : whatsappRestockLink(product.name)
            }
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full inline-flex items-center justify-center gap-2 px-3 py-3 font-label-caps text-[10px] md:text-label-caps uppercase tracking-widest transition-colors ${
              product.inStock
                ? "bg-primary text-on-primary hover:bg-primary-container"
                : "border border-outline text-primary hover:bg-surface-variant"
            }`}
          >
            <MaterialIcon
              name={product.inStock ? "chat" : "notifications"}
              className="text-[16px] md:text-[18px]"
            />
            <span className="hidden sm:inline">
              {!product.inStock
                ? "Avísame cuando llegue"
                : hasPrice(product)
                  ? "Pedir por WhatsApp"
                  : "Consultar por WhatsApp"}
            </span>
            <span className="sm:hidden">
              {!product.inStock
                ? "Avísame"
                : hasPrice(product)
                  ? "Pedir"
                  : "Consultar"}
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}
