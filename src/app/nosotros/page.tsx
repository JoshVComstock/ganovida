import Link from "next/link";
import type { Metadata } from "next";
import AppShell from "@/components/layout/AppShell";
import ProductImage from "@/components/ui/ProductImage";
import MaterialIcon from "@/components/ui/MaterialIcon";
import JsonLd from "@/components/ui/JsonLd";
import { aboutImage } from "@/data/media";
import { whatsappContactLink } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/config";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Quiénes somos — distribuidor DXN independiente en Cochabamba",
  description:
    "GanoVida es una tienda independiente de productos originales DXN en Cochabamba, Bolivia. No somos el sitio oficial de DXN: somos distribuidores independientes con entrega a domicilio y atención personal.",
  alternates: { canonical: "/nosotros" },
};

const principles = [
  {
    icon: "visibility",
    title: "Decimos lo malo también",
    text: "Publicamos cuánta azúcar tiene cada producto y quién no debería tomarlo. Si algo no te sirve, te lo decimos aunque perdamos la venta.",
  },
  {
    icon: "science",
    title: "Sin promesas médicas",
    text: "Vendemos alimentos y suplementos, no medicamentos. No curan nada y no reemplazan ningún tratamiento. Cuando la evidencia es débil, lo aclaramos.",
  },
  {
    icon: "handshake",
    title: "Precio oficial, siempre",
    text: "Cobramos el precio que determina DXN. Lo que agregamos no es descuento: es asesoría, entrega y seguimiento.",
  },
  {
    icon: "schedule",
    title: "Producto fresco, no de depósito",
    text: "Trabajamos por pedido. Tarda uno o dos días más, pero lo que recibes no estuvo meses guardado en una repisa.",
  },
];

export default function NosotrosPage() {
  return (
    <AppShell active="/nosotros">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", path: "/" },
          { name: "Nosotros", path: "/nosotros" },
        ])}
      />

      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-28">
        {/* Encabezado */}
        <div className="max-w-3xl mb-14 md:mb-20">
          <span className="font-label-caps text-label-caps text-secondary mb-4 block">
            NUESTRA HISTORIA
          </span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-8 leading-[1.1]">
            Empezó con un{" "}
            <span className="italic font-normal">bajón de las 3</span>.
          </h1>
          <div className="space-y-5 font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            <p>
              Trabajo frente a una pantalla. Como mucha gente en Cochabamba,
              pasaba el día a punta de café: uno para arrancar, otro a media
              mañana, otro a las tres para no caerme. Y a la noche, mirando el
              techo, preguntándome por qué no podía dormir.
            </p>
            <p>
              Cuando conocí el café con Ganoderma me pasó lo de siempre: mucha
              promesa y poca información. Nadie me supo decir cuánta azúcar
              tenía un sobre, ni qué dicen realmente los estudios, ni quién no
              debería tomarlo. Así que lo busqué yo.
            </p>
            <p>
              <strong className="text-primary">Eso es GanoVida.</strong> Una
              tienda que vende café con Ganoderma y que te cuenta lo mismo que
              yo hubiera querido que me contaran: qué hace, qué no hace, y qué
              lleva adentro.
            </p>
          </div>
        </div>

        {/* Imagen */}
        <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden mb-14 md:mb-20">
          <ProductImage
            src={aboutImage.src}
            alt={aboutImage.alt}
            className="w-full h-full"
            sizes="100vw"
          />
        </div>

        {/* Principios */}
        <div className="mb-16 md:mb-24">
          <h2 className="font-headline-md text-xl md:text-headline-md text-primary mb-3">
            Cómo trabajamos
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mb-10">
            Cuatro reglas que no negociamos, aunque cueste una venta.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-gutter">
            {principles.map((item) => (
              <div
                key={item.title}
                className="bg-surface-container-low p-7 md:p-8"
              >
                <MaterialIcon
                  name={item.icon}
                  className="text-3xl text-primary mb-4"
                />
                <h3 className="font-headline-sm text-lg text-primary mb-2">
                  {item.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Qué somos y qué no */}
        <div className="border-y border-outline-variant py-12 md:py-16 mb-16 md:mb-20">
          <h2 className="font-headline-md text-xl md:text-headline-md text-primary mb-8">
            Para que quede claro
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <h3 className="font-label-caps text-label-caps text-primary uppercase mb-4 flex items-center gap-2">
                <MaterialIcon name="check" className="text-[20px]" />
                Lo que somos
              </h3>
              <ul className="space-y-3">
                {[
                  `Una tienda independiente en ${siteConfig.city}, Bolivia`,
                  "Distribuidores independientes de productos DXN",
                  "Vendedores de producto original, sellado y con lote visible",
                  "Un canal de atención personal por WhatsApp",
                ].map((item) => (
                  <li
                    key={item}
                    className="font-body-md text-body-md text-on-surface-variant"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-label-caps text-label-caps text-secondary uppercase mb-4 flex items-center gap-2">
                <MaterialIcon name="close" className="text-[20px]" />
                Lo que no somos
              </h3>
              <ul className="space-y-3">
                {[
                  "No somos DXN ni su sitio oficial",
                  "No representamos a DXN ni hablamos en su nombre",
                  "No vendemos medicamentos ni prometemos curas",
                  "No damos consejo médico: para eso está tu médico",
                ].map((item) => (
                  <li
                    key={item}
                    className="font-body-md text-body-md text-on-surface-variant"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Cierre */}
        <div className="max-w-2xl">
          <h2 className="font-headline-md text-xl md:text-headline-md text-primary mb-4">
            ¿Hablamos?
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
            Si no sabes por dónde empezar, escríbenos y cuéntanos a qué hora del
            día te pega el cansancio. Te recomendamos uno solo, no el catálogo
            entero.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={whatsappContactLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white px-8 py-4 font-label-caps text-label-caps uppercase tracking-widest transition-colors"
            >
              <MaterialIcon name="chat" className="text-[18px]" />
              Escríbenos
            </a>
            <Link
              href="/transparencia"
              className="inline-flex items-center justify-center gap-2 border border-outline text-primary px-8 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-surface-variant transition-colors"
            >
              Ver transparencia
            </Link>
          </div>
        </div>
      </section>
    </AppShell>
  );
}
