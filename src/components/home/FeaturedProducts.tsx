import Link from "next/link";
import ProductCard from "@/components/product/ProductCard";
import { getFeaturedKits, getFeaturedProducts } from "@/lib/data";

/**
 * Sección de destacados del home: primero los kits (armados por momento del
 * día), luego los productos sueltos más pedidos.
 */
export default function FeaturedProducts() {
  const kits = getFeaturedKits(3);
  const featured = getFeaturedProducts(4);

  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop space-y-16 md:space-y-24">
      {/* Kits */}
      {kits.length > 0 && (
        <div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-14 gap-4">
            <div className="max-w-xl">
              <span className="font-label-caps text-label-caps text-secondary mb-2 block">
                ARMADOS POR MOMENTO DEL DÍA
              </span>
              <h2 className="font-headline-sm md:font-headline-md text-headline-sm md:text-headline-md text-primary mb-2 md:mb-4">
                Kits
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Combinaciones pensadas para cubrir tu día completo. Precio
                oficial de cada producto, con entrega y seguimiento incluidos.
              </p>
            </div>
            <Link
              href="/productos#kits"
              className="font-label-caps text-label-caps text-primary border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-all whitespace-nowrap"
            >
              Ver todos los kits
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 md:gap-gutter">
            {kits.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}

      {/* Productos sueltos */}
      <div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-14 gap-4">
          <div className="max-w-xl">
            <h2 className="font-headline-sm md:font-headline-md text-headline-sm md:text-headline-md text-primary mb-2 md:mb-4">
              Los favoritos
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Los productos que más piden nuestros clientes para su ritual
              diario de café y bienestar.
            </p>
          </div>
          <Link
            href="/productos"
            className="font-label-caps text-label-caps text-primary border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-all whitespace-nowrap"
          >
            Ver todos los productos
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 md:gap-gutter">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
