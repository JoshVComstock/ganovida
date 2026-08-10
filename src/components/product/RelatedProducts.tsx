import ProductCard from "./ProductCard";
import type { Product } from "@/data/products";

interface RelatedProductsProps {
  products: Product[];
}

/** Sección "También te puede gustar" con productos relacionados. */
export default function RelatedProducts({ products }: RelatedProductsProps) {
  if (products.length === 0) return null;

  return (
    <section className="mt-24 md:mt-40">
      <div className="flex justify-between items-end mb-10 md:mb-12">
        <div>
          <span className="font-label-caps text-label-caps text-secondary mb-2 block">
            TE PODRÍA GUSTAR
          </span>
          <h2 className="font-headline-md text-headline-md text-primary">
            También te puede gustar
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-gutter">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
