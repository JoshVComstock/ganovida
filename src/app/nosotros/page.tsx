import AppShell from "@/components/layout/AppShell";
import ProductImage from "@/components/ui/ProductImage";
import { aboutImage } from "@/data/media";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiénes somos — distribuidor DXN independiente en Cochabamba",
  description:
    "GanoVida es una tienda independiente de productos originales DXN en Cochabamba, Bolivia. No somos el sitio oficial de DXN: somos distribuidores independientes con entrega a domicilio y atención personal.",
  alternates: { canonical: "/nosotros" },
};

export default function NosotrosPage() {
  return (
    <AppShell active="/nosotros">
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20 md:py-32">
        <div className="max-w-3xl">
          <span className="font-label-caps text-label-caps text-secondary mb-4 block">
            NUESTRA HISTORIA
          </span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-8 leading-[1.1]">
            Tu tienda de <span className="italic font-normal">confianza</span>.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            GanoVida es una marca y tienda boliviana que acerca los productos de
            café y bienestar con Ganoderma de <strong>DXN</strong>. Nosotros no
            fabricamos los productos —lo hace DXN—; lo que ponemos es una
            experiencia de compra cuidada, atención cercana por WhatsApp y
            delivery a tu puerta, para que compres original y sin complicaciones.
          </p>
        </div>

        <div className="mt-16 aspect-video overflow-hidden">
          <ProductImage
            src={aboutImage.src}
            alt={aboutImage.alt}
            className="w-full h-full"
            sizes="100vw"
          />
        </div>
      </section>
    </AppShell>
  );
}
