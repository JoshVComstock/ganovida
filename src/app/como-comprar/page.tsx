import type { Metadata } from "next";
import AppShell from "@/components/layout/AppShell";
import MaterialIcon from "@/components/ui/MaterialIcon";
import JsonLd from "@/components/ui/JsonLd";
import { whatsappContactLink, whatsappAdviceLink } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/config";
import { faqJsonLd, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Cómo comprar café DXN en Cochabamba",
  description:
    "Pides por WhatsApp y recibes en 1 a 2 días en Cochabamba, sin costo de envío. Pago mixto: adelanto por QR y el resto al recibir. Trabajamos por pedido, no con stock.",
  alternates: { canonical: "/como-comprar" },
};

const steps = [
  {
    icon: "storefront",
    title: "Elige tu producto",
    text: "Explora el catálogo y toca el botón de WhatsApp. Si no sabes cuál te conviene, escríbenos y te preguntamos a qué hora te pega el cansancio antes de recomendarte.",
  },
  {
    icon: "chat",
    title: "Confirmamos por WhatsApp",
    text: "Se abre el chat con tu pedido listo. Coordinamos día y dirección de entrega, y te enviamos el QR para el adelanto que confirma tu pedido.",
  },
  {
    icon: "local_shipping",
    title: "Recibes y pagas el resto",
    text: `Te lo llevamos en ${siteConfig.delivery.leadTimeLabel} a tu casa u oficina en ${siteConfig.delivery.area}. Pagas el saldo al recibir, en efectivo o por QR.`,
  },
];

const faqs = [
  {
    q: "¿Por qué tardan 1 o 2 días y no me lo dan al instante?",
    a: "Porque trabajamos por pedido, no con stock. Tú pides, nosotros compramos y te entregamos. Tarda un poco más, pero lo que te llega no estuvo meses en una repisa.",
  },
  {
    q: "¿Cuánto cuesta el envío?",
    a: `Nada. La entrega en ${siteConfig.delivery.area} va incluida en el precio: el costo lo asumimos nosotros. Si estás fuera de la ciudad, escríbenos y lo coordinamos.`,
  },
  {
    q: "¿Tengo que pagar todo por adelantado?",
    a: "No. Con un adelanto por QR confirmamos tu pedido y el resto lo pagas cuando recibes. Si prefieres pagar todo al recibir, dínoslo y lo vemos.",
  },
  {
    q: "¿Los productos son originales?",
    a: "Sí. Compramos directamente a DXN Bolivia S.R.L. y te entregamos el producto sellado, con su lote y fecha visibles. GanoVida es una tienda independiente: no somos DXN, somos distribuidores independientes de sus productos.",
  },
  {
    q: "¿Puedo probar antes de comprar una caja?",
    a: "Sí, para eso está el Kit Prueba. Dos botellas listas para tomar, sin compromiso, para que sepas si te gusta el sabor antes de comprometerte con una caja.",
  },
  {
    q: "¿Hacen pedidos para oficinas?",
    a: "Sí, es de lo que más hacemos. Coordinamos una entrega mensual para tu equipo. Escríbenos con cuántas personas son y armamos la combinación.",
  },
];

export default function ComoComprarPage() {
  return (
    <AppShell active="/como-comprar">
      <JsonLd
        data={[
          faqJsonLd(faqs),
          breadcrumbJsonLd([
            { name: "Inicio", path: "/" },
            { name: "Cómo comprar", path: "/como-comprar" },
          ]),
        ]}
      />
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24">
        {/* Encabezado */}
        <header className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="font-label-caps text-label-caps text-secondary mb-4 block">
            SIMPLE Y SIN VUELTAS
          </span>
          <h1 className="font-display-lg-mobile md:text-display-lg font-display-lg text-primary mb-4">
            Cómo comprar
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Cerramos todo por WhatsApp para darte atención personal. Tres pasos,
            entrega en {siteConfig.delivery.leadTimeLabel} y sin costo de envío
            en {siteConfig.delivery.area}.
          </p>
        </header>

        {/* Pasos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-gutter mb-16 md:mb-24">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="bg-surface-container-low p-8 md:p-10 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <MaterialIcon
                  name={step.icon}
                  className="text-4xl text-primary"
                />
                <span className="font-display-lg text-[48px] text-primary/10 leading-none">
                  0{i + 1}
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary">
                {step.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        {/* Franja de garantías */}
        <div className="grid grid-cols-1 sm:grid-cols-3 border-y border-outline-variant divide-y sm:divide-y-0 sm:divide-x divide-outline-variant mb-16 md:mb-24">
          {[
            {
              icon: "local_shipping",
              title: "Envío sin costo",
              text: `${siteConfig.delivery.area}, en ${siteConfig.delivery.leadTimeLabel}`,
            },
            {
              icon: "payments",
              title: "Pago mixto",
              text: "Adelanto por QR y el resto al recibir",
            },
            {
              icon: "verified_user",
              title: "Producto original",
              text: "Sellado, con lote y fecha visibles",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 py-8 px-2 sm:px-8"
            >
              <MaterialIcon
                name={item.icon}
                className="text-primary text-3xl shrink-0"
              />
              <div>
                <h3 className="font-headline-sm text-lg text-primary mb-1">
                  {item.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Preguntas frecuentes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="font-label-caps text-label-caps text-secondary mb-2 block">
              PREGUNTAS FRECUENTES
            </span>
            <h2 className="font-headline-md text-xl md:text-headline-md text-primary mb-4">
              Lo que suelen preguntarnos
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">
              Si te queda alguna duda, escríbenos. Respondemos personalmente.
            </p>
            <a
              href={whatsappContactLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white px-8 py-4 font-label-caps text-label-caps uppercase tracking-widest transition-colors"
            >
              <MaterialIcon name="chat" className="text-[18px]" />
              Escríbenos por WhatsApp
            </a>
          </div>

          <div className="lg:col-span-8">
            <dl className="divide-y divide-outline-variant border-y border-outline-variant">
              {faqs.map((faq) => (
                <div key={faq.q} className="py-6">
                  <dt className="font-headline-sm text-lg text-primary mb-2">
                    {faq.q}
                  </dt>
                  <dd className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {faq.a}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10">
              <a
                href={whatsappAdviceLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-outline text-primary px-8 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-surface-variant transition-colors"
              >
                No sé cuál elegir
              </a>
            </div>
          </div>
        </div>
      </section>
    </AppShell>
  );
}
