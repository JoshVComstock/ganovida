import Link from "next/link";
import type { Metadata } from "next";
import AppShell from "@/components/layout/AppShell";
import ProductCard from "@/components/product/ProductCard";
import MaterialIcon from "@/components/ui/MaterialIcon";
import JsonLd from "@/components/ui/JsonLd";
import { getProductsByFocus } from "@/lib/data";
import { whatsappAdviceLink, whatsappTastingLink } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/config";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Café con Ganoderma y productos DXN — precios en Bolivia",
  description:
    "Catálogo completo con precios: Lingzhi Coffee 3 en 1, Black Coffee sin azúcar, Cordyceps, Cocozhi, smoothies y kits armados por momento del día. Entrega en Cochabamba en 1 a 2 días.",
  alternates: { canonical: "/productos" },
};

export default function ProductosPage() {
  const groups = getProductsByFocus();

  return (
    <AppShell active="/productos">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", path: "/" },
          { name: "Productos", path: "/productos" },
        ])}
      />
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24">
        <header className="mb-8 md:mb-12">
          <span className="font-label-caps text-label-caps text-secondary mb-2 block">
            CATÁLOGO
          </span>
          <h1 className="font-display-lg-mobile md:text-display-lg font-display-lg text-primary">
            Café con Ganoderma y productos DXN
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant mt-4 max-w-2xl">
            Organizados por el momento del día en que los vas a usar. Si no
            sabes cuál te conviene, escríbenos: preguntamos a qué hora te pega
            el cansancio y te recomendamos uno solo.
          </p>
        </header>

        {/* Navegación rápida por grupo */}
        <nav className="flex flex-wrap gap-2 mb-12 md:mb-16">
          {groups.map((group) => (
            <a
              key={group.key}
              href={`#${group.key}`}
              className="font-label-caps text-[11px] md:text-label-caps uppercase tracking-widest border border-outline-variant px-4 py-2 text-on-surface-variant hover:border-primary hover:text-primary transition-colors"
            >
              {group.label}
            </a>
          ))}
        </nav>

        {/* Secciones por enfoque */}
        <div className="space-y-16 md:space-y-24">
          {groups.map((group) => (
            <section key={group.key} id={group.key} className="scroll-mt-28">
              <div className="mb-8 md:mb-10">
                <h2 className="font-headline-md text-xl md:text-headline-md text-primary">
                  {group.label}
                </h2>
                <p className="font-body-md text-sm md:text-body-md text-on-surface-variant mt-1 max-w-2xl">
                  {group.description}
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-gutter">
                {group.items.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Ayuda para elegir + degustación */}
        <section className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-gutter">
          <div className="bg-surface-container-low p-8 md:p-10">
            <MaterialIcon name="forum" className="text-4xl text-primary mb-5" />
            <h2 className="font-headline-sm text-xl md:text-headline-sm text-primary mb-3">
              ¿No sabes cuál elegir?
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">
              Cuéntanos a qué hora del día te pega el cansancio y te
              recomendamos uno solo, no el catálogo entero. Entrega en{" "}
              {siteConfig.delivery.leadTimeLabel} en {siteConfig.delivery.area},
              sin costo de envío.
            </p>
            <a
              href={whatsappAdviceLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-8 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary-container transition-colors"
            >
              <MaterialIcon name="chat" className="text-[18px]" />
              Ayúdame a elegir
            </a>
          </div>

          <div className="bg-surface-container-low p-8 md:p-10">
            <MaterialIcon
              name="local_cafe"
              className="text-4xl text-primary mb-5"
            />
            <h2 className="font-headline-sm text-xl md:text-headline-sm text-primary mb-3">
              ¿Prefieres probarlo antes?
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">
              Coordinamos una degustación sin costo: te preparamos la taza y
              decides después. Sin compromiso y sin charla de negocio.
            </p>
            <a
              href={whatsappTastingLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-outline text-primary px-8 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-surface-variant transition-colors"
            >
              Quiero probarlo
            </a>
          </div>
        </section>

        <div className="mt-10 text-center">
          <Link
            href="/transparencia"
            className="font-label-caps text-label-caps text-primary border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors uppercase"
          >
            Ver cuánta azúcar tiene cada producto
          </Link>
        </div>
      </div>
    </AppShell>
  );
}
