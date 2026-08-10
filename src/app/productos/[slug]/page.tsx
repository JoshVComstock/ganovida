import { notFound } from "next/navigation";
import type { Metadata } from "next";
import AppShell from "@/components/layout/AppShell";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductArt from "@/components/product/ProductArt";
import RelatedProducts from "@/components/product/RelatedProducts";
import JsonLd from "@/components/ui/JsonLd";
import { getProduct, getProducts, getRelatedProducts } from "@/lib/data";
import { productJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/config";

interface ProductPageProps {
  params: { slug: string };
}

/** Pre-genera una ruta estática por cada producto del catálogo. */
export function generateStaticParams() {
  return getProducts().map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = getProduct(params.slug);
  if (!product) return { title: "Producto" };

  const path = `/productos/${product.slug}`;
  const title = `${product.name} — precio y entrega en ${siteConfig.city}`;
  const description = `${product.tagline} ${product.presentation}. Bs. ${product.publicPrice}, entrega en ${siteConfig.delivery.leadTimeLabel} en ${siteConfig.city} sin costo de envío. Producto original DXN.`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      title,
      description,
      images: product.images[0]?.src
        ? [{ url: product.images[0].src, alt: product.images[0].alt }]
        : undefined,
    },
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const related = getRelatedProducts(product.slug);

  return (
    <AppShell active="/productos">
      <JsonLd
        data={[
          productJsonLd(product),
          breadcrumbJsonLd([
            { name: "Inicio", path: "/" },
            { name: "Productos", path: "/productos" },
            { name: product.name, path: `/productos/${product.slug}` },
          ]),
        ]}
      />

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </div>

        <ProductArt />
        <RelatedProducts products={related} />
      </div>
    </AppShell>
  );
}
