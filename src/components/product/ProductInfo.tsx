import Link from "next/link";
import MaterialIcon from "@/components/ui/MaterialIcon";
import { hasPrice, isKit, getKitItems } from "@/lib/data";
import { formatPrice, siteConfig } from "@/lib/config";
import {
  whatsappOrderLink,
  whatsappAdviceLink,
  whatsappRestockLink,
} from "@/lib/whatsapp";
import type { Product } from "@/data/products";

interface ProductInfoProps {
  product: Product;
}

/**
 * Panel de detalles del producto: precio público oficial, contenido (si es
 * kit), puntos clave, ingredientes y bloque de transparencia.
 *
 * Regla de negocio: solo se muestra el precio público oficial de DXN. No hay
 * precios de afiliado ni "ahorros" (cláusula 13 del reglamento DXN).
 */
export default function ProductInfo({ product }: ProductInfoProps) {
  const priceKnown = hasPrice(product);
  const kit = isKit(product);
  const kitItems = kit ? getKitItems(product) : [];

  return (
    <div className="lg:col-span-5 lg:sticky lg:top-32">
      <span className="font-label-caps text-label-caps text-secondary mb-4 block uppercase">
        {[product.presentation, product.netWeight].filter(Boolean).join(" · ")}
      </span>
      <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-3">
        {product.name}
      </h1>
      <p className="font-body-lg text-body-lg text-secondary italic mb-6">
        {product.tagline}
      </p>

      {priceKnown ? (
        <p className="font-headline-sm text-headline-sm text-primary mb-1">
          {formatPrice(product.publicPrice)}
        </p>
      ) : (
        <p className="font-headline-sm text-headline-sm text-primary mb-1">
          Consulta el precio por WhatsApp
        </p>
      )}
      {kit && priceKnown && (
        <p className="font-body-md text-sm text-on-surface-variant mb-6">
          Precio oficial de cada producto, sumado. Entrega, asesoría y
          seguimiento van incluidos.
        </p>
      )}
      {!kit && <div className="mb-6" />}

      <div className="h-px w-full bg-outline-variant mb-8" />

      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-8">
        {product.description}
      </p>

      {/* Contenido del kit */}
      {kitItems.length > 0 && (
        <div className="mb-8">
          <h2 className="font-label-caps text-label-caps text-primary uppercase mb-3">
            Qué incluye
          </h2>
          <ul className="divide-y divide-outline-variant/60 border-y border-outline-variant/60">
            {kitItems.map(({ product: item, quantity }) => (
              <li key={item.slug}>
                <Link
                  href={`/productos/${item.slug}`}
                  className="flex items-center justify-between gap-4 py-3 hover:text-primary transition-colors"
                >
                  <span className="font-body-md text-body-md text-on-surface-variant">
                    {quantity > 1 && (
                      <span className="text-primary font-medium">
                        {quantity}×{" "}
                      </span>
                    )}
                    {item.name}
                  </span>
                  <span className="font-body-md text-sm text-secondary whitespace-nowrap">
                    {formatPrice(item.publicPrice * quantity)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Para quién es (kits) */}
      {product.forWho && (
        <div className="mb-8 bg-surface-container-low p-5">
          <h2 className="font-label-caps text-label-caps text-primary uppercase mb-2">
            Para quién es
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            {product.forWho}
          </p>
        </div>
      )}

      {/* Puntos de venta clave */}
      <ul className="space-y-3 mb-8">
        {product.highlights.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-on-surface-variant"
          >
            <MaterialIcon
              name="check"
              className="text-primary mt-0.5 shrink-0"
              style={{ fontVariationSettings: "'opsz' 20" }}
            />
            <span className="font-body-md text-body-md">{item}</span>
          </li>
        ))}
      </ul>

      {/* Ingredientes (según el empaque DXN) */}
      {product.ingredients && (
        <div className="mb-8 py-6 border-y border-outline-variant">
          <h2 className="font-label-caps text-label-caps text-primary uppercase mb-2">
            Ingredientes
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            {product.ingredients}
          </p>
        </div>
      )}

      {/* Transparencia: lo que otros no te dicen */}
      {product.transparency && (
        <div className="mb-8 border-l-2 border-gold-dark bg-surface-container-low p-5">
          <h2 className="font-label-caps text-label-caps text-gold-dark uppercase mb-2 flex items-center gap-2">
            <MaterialIcon name="info" className="text-[18px]" />
            Lo que deberías saber
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            {product.transparency}
          </p>
          <Link
            href="/transparencia"
            className="inline-block mt-3 font-label-caps text-[11px] text-primary border-b border-primary pb-0.5 hover:text-secondary hover:border-secondary transition-colors uppercase"
          >
            Ver toda la información
          </Link>
        </div>
      )}

      {/* Disponibilidad y entrega */}
      {product.inStock ? (
        <div className="flex items-start gap-3 mb-8 text-on-surface-variant">
          <MaterialIcon
            name="local_shipping"
            className="text-primary mt-0.5 shrink-0"
          />
          <p className="font-body-md text-body-md">
            Entrega en {siteConfig.delivery.leadTimeLabel} en{" "}
            {siteConfig.delivery.area}, sin costo de envío.{" "}
            <span className="text-secondary">{siteConfig.delivery.note}</span>
          </p>
        </div>
      ) : (
        <div className="flex items-start gap-3 mb-8 bg-surface-container-low p-5">
          <MaterialIcon
            name="schedule"
            className="text-secondary mt-0.5 shrink-0"
          />
          <p className="font-body-md text-body-md text-on-surface-variant">
            <span className="text-primary font-medium">
              Sin stock por ahora.
            </span>{" "}
            Todavía no lo tenemos disponible en Bolivia. Escríbenos y te
            avisamos apenas llegue.
          </p>
        </div>
      )}

      {/* Acciones */}
      <div className="flex flex-col gap-3">
        {product.inStock ? (
          <a
            href={whatsappOrderLink(product.name, product.publicPrice)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-5 bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-[0.2em] hover:bg-primary-container transition-all duration-300 active:scale-[0.98]"
          >
            <MaterialIcon name="chat" className="text-[20px]" />
            {priceKnown ? "Pedir por WhatsApp" : "Consultar por WhatsApp"}
          </a>
        ) : (
          <a
            href={whatsappRestockLink(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-5 bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-[0.2em] hover:bg-primary-container transition-all duration-300 active:scale-[0.98]"
          >
            <MaterialIcon name="notifications" className="text-[20px]" />
            Avísame cuando llegue
          </a>
        )}
        <a
          href={whatsappAdviceLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center py-5 border border-outline text-primary font-label-caps text-label-caps uppercase tracking-[0.2em] hover:bg-surface-variant transition-all duration-300 active:scale-[0.98]"
        >
          No sé cuál elegir
        </a>
      </div>

      {/* Sellos de confianza */}
      <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-6 border-t border-outline-variant">
        <div className="flex items-center gap-3">
          <MaterialIcon name="verified_user" className="text-secondary" />
          <span className="font-body-md text-body-md text-secondary">
            Producto original DXN
          </span>
        </div>
        <Link
          href="/afiliados"
          className="flex items-center gap-3 hover:text-primary transition-colors"
        >
          <MaterialIcon name="group" className="text-secondary" />
          <span className="font-body-md text-body-md text-secondary">
            Los afiliados acceden a precio preferencial
          </span>
        </Link>
      </div>
    </div>
  );
}
