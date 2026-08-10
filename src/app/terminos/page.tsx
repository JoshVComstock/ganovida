import Link from "next/link";
import type { Metadata } from "next";
import AppShell from "@/components/layout/AppShell";
import MaterialIcon from "@/components/ui/MaterialIcon";
import JsonLd from "@/components/ui/JsonLd";
import { whatsappContactLink } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/config";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description:
    "Condiciones de compra, entrega, pago, cambios y devoluciones de GanoVida, tienda independiente de productos DXN en Cochabamba, Bolivia. Política de privacidad.",
  alternates: { canonical: "/terminos" },
  robots: { index: true, follow: true },
};

const LAST_UPDATE = "agosto de 2026";

interface Section {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
}

const sections: Section[] = [
  {
    id: "quienes-somos",
    title: "1. Quiénes somos",
    paragraphs: [
      `GanoVida es una tienda independiente operada por un distribuidor independiente de DXN en ${siteConfig.city}, Bolivia. Comercializamos productos originales de la marca DXN.`,
      "GanoVida no es DXN, no es el sitio oficial de DXN, no representa a DXN ni actúa en su nombre. Todas las marcas, logotipos y nombres de producto pertenecen a sus respectivos titulares.",
      `Todo el contacto comercial se realiza por WhatsApp al número +${siteConfig.whatsappNumber}.`,
    ],
  },
  {
    id: "productos",
    title: "2. Sobre los productos",
    paragraphs: [
      "Los productos que vendemos son alimentos y suplementos alimenticios elaborados por DXN. No son medicamentos.",
      "No están destinados a diagnosticar, tratar, curar ni prevenir ninguna enfermedad, y no sustituyen una dieta equilibrada, un estilo de vida saludable ni un tratamiento médico.",
      "La información que publicamos sobre ingredientes, evidencia científica y advertencias tiene fines informativos y educativos. No constituye asesoramiento médico. Ante cualquier duda de salud, consulta a un profesional.",
    ],
    bullets: [
      "Si tomas anticoagulantes o antiagregantes, consulta a tu médico antes de consumir productos con Ganoderma.",
      "Si tomas inmunosupresores, consulta a tu médico antes de consumirlos.",
      "No recomendamos su consumo durante el embarazo o la lactancia por falta de datos suficientes.",
      "Si tienes una cirugía programada, consulta a tu médico.",
    ],
  },
  {
    id: "precios",
    title: "3. Precios",
    paragraphs: [
      "Todos los precios se muestran en bolivianos (Bs.) e incluyen el precio de venta oficial determinado por DXN. GanoVida no aplica descuentos, recargos ni promociones sobre el precio de los productos.",
      "Los precios pueden cambiar sin aviso previo si DXN los actualiza. El precio válido es el que confirmamos por WhatsApp al momento de cerrar tu pedido.",
      "El precio de afiliado no es un precio de venta al público: es el precio de compra de las personas registradas como distribuidores independientes de DXN. Por eso no lo publicamos en este sitio.",
    ],
  },
  {
    id: "pedidos",
    title: "4. Pedidos",
    paragraphs: [
      "Los pedidos se realizan y confirman exclusivamente por WhatsApp. Este sitio no procesa pagos ni genera pedidos automáticamente.",
      "Trabajamos por pedido y no mantenemos inventario permanente: cuando confirmas tu pedido, lo compramos y te lo entregamos. Por eso el producto que recibes es reciente.",
      "Un pedido se considera confirmado únicamente cuando acordamos por WhatsApp el producto, el precio, la dirección y la fecha de entrega, y se ha recibido el adelanto correspondiente.",
      "Podemos rechazar o cancelar un pedido si el producto deja de estar disponible, si hay un error evidente de precio o si no logramos contactarte para coordinar la entrega. En esos casos devolvemos íntegramente cualquier monto adelantado.",
    ],
  },
  {
    id: "pagos",
    title: "5. Formas de pago",
    paragraphs: [
      "Trabajamos con pago mixto: un adelanto para confirmar el pedido y el saldo restante contra entrega.",
      "El adelanto se realiza por transferencia o QR; te enviamos los datos por WhatsApp al confirmar. El saldo puede pagarse en efectivo o por QR al momento de recibir.",
      "No almacenamos datos de tarjetas ni credenciales bancarias. Este sitio no cuenta con pasarela de pago.",
    ],
  },
  {
    id: "entregas",
    title: "6. Entregas",
    paragraphs: [
      `Entregamos a domicilio u oficina dentro de ${siteConfig.delivery.area} sin costo adicional. El costo del envío está asumido por GanoVida.`,
      `El plazo habitual de entrega es de ${siteConfig.delivery.leadTimeLabel} hábiles desde la confirmación del pedido. Es un plazo estimado, no garantizado: puede variar por disponibilidad del producto o por causas ajenas a nosotros.`,
      "Para entregas fuera de la ciudad, coordinamos el envío y su costo por WhatsApp antes de confirmar el pedido.",
      "Si no es posible entregarte en la dirección y horario acordados, nos comunicaremos para reprogramar. Después de dos intentos fallidos de entrega, el pedido puede cancelarse.",
    ],
  },
  {
    id: "cambios",
    title: "7. Cambios y devoluciones",
    paragraphs: [
      "Revisa tu pedido al momento de recibirlo. Si el producto llega dañado, con el sello roto, vencido o si no corresponde a lo que pediste, avísanos dentro de las 48 horas siguientes a la entrega y lo cambiamos sin costo.",
      "Por tratarse de productos alimenticios, no aceptamos devoluciones de productos abiertos, consumidos parcialmente o cuyo empaque haya sido manipulado, salvo defecto de fábrica.",
      "No realizamos cambios ni devoluciones por preferencias de sabor. Para eso ofrecemos degustaciones sin costo antes de comprar: escríbenos y la coordinamos.",
      "Si cancelas un pedido ya confirmado antes de que lo hayamos comprado, devolvemos el adelanto íntegro. Si ya fue comprado, coordinamos contigo un cambio por otro producto.",
    ],
  },
  {
    id: "afiliados",
    title: "8. Programa de afiliados",
    paragraphs: [
      "Podemos registrarte como distribuidor independiente de DXN sin costo, usando el formulario de este sitio. El registro se realiza en el sistema oficial de DXN (eWorld) y queda sujeto a la aprobación de DXN.",
      "Al registrarte pasas a tener una relación directa con DXN y quedas sujeto a su Reglamento de Membresía de Distribución, su Código de Conducta y su Plan de Marketing.",
      "Ser afiliado te permite comprar a precio de afiliado. No garantiza ningún ingreso, ganancia ni resultado económico. Cualquier resultado depende del trabajo, la dedicación y las circunstancias de cada persona. GanoVida no promete ni insinúa ingresos de ningún tipo.",
      "No cobramos por registrarte ni por los materiales de apoyo que compartimos.",
    ],
  },
  {
    id: "privacidad",
    title: "9. Privacidad y datos personales",
    paragraphs: [
      "Solo recogemos los datos que tú nos entregas voluntariamente: nombre, teléfono, dirección de entrega y, en el caso del formulario de afiliación, los datos que DXN exige para el registro.",
      "Usamos esos datos únicamente para procesar tu pedido, coordinar la entrega, darte seguimiento posventa y, si corresponde, tramitar tu registro como afiliado ante DXN.",
      "No vendemos, alquilamos ni cedemos tus datos a terceros con fines comerciales. Los datos del formulario de afiliación se transmiten a DXN porque es imprescindible para crear tu registro.",
      "Este sitio no utiliza cookies de seguimiento publicitario ni de perfilado. Los formularios se envían a través de WhatsApp, cuyo tratamiento de datos se rige por las políticas de esa plataforma.",
      "Puedes pedirnos en cualquier momento que eliminemos tus datos escribiéndonos por WhatsApp.",
    ],
  },
  {
    id: "propiedad",
    title: "10. Propiedad intelectual",
    paragraphs: [
      "Los textos, el diseño y las fotografías propias de este sitio pertenecen a GanoVida.",
      "Las marcas DXN, los nombres de sus productos, sus logotipos y el material gráfico de sus empaques son propiedad de DXN y se muestran únicamente con fines de identificación de los productos que comercializamos.",
    ],
  },
  {
    id: "responsabilidad",
    title: "11. Limitación de responsabilidad",
    paragraphs: [
      "GanoVida se responsabiliza por la autenticidad de los productos que entrega y por el cumplimiento de las condiciones de compra descritas en este documento.",
      "No nos responsabilizamos por el uso que cada persona haga de los productos, ni por reacciones individuales derivadas de condiciones de salud preexistentes, tratamientos médicos en curso o alergias no informadas.",
      "La información publicada en este sitio se ofrece de buena fe y con la mejor evidencia disponible al momento de escribirla. Puede quedar desactualizada.",
    ],
  },
  {
    id: "cambios-terminos",
    title: "12. Cambios en estos términos",
    paragraphs: [
      "Podemos actualizar estos términos cuando cambien nuestras condiciones de operación. La versión vigente es siempre la publicada en esta página, con su fecha de actualización.",
      "Las condiciones aplicables a tu pedido son las vigentes al momento en que lo confirmamos por WhatsApp.",
    ],
  },
  {
    id: "ley",
    title: "13. Legislación aplicable",
    paragraphs: [
      "Estos términos se rigen por la legislación del Estado Plurinacional de Bolivia. Cualquier controversia se resolverá ante los tribunales competentes de Cochabamba, Bolivia.",
    ],
  },
];

export default function TerminosPage() {
  return (
    <AppShell active="/terminos">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", path: "/" },
          { name: "Términos y condiciones", path: "/terminos" },
        ])}
      />

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24">
        {/* Encabezado */}
        <header className="max-w-3xl mb-12 md:mb-16">
          <span className="font-label-caps text-label-caps text-secondary mb-2 block">
            LEGAL
          </span>
          <h1 className="font-display-lg-mobile md:text-display-lg font-display-lg text-primary mb-6">
            Términos y condiciones
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Cómo compramos, entregamos y respondemos. Está escrito para que se
            entienda, no para esconder nada.
          </p>
          <p className="font-body-md text-sm text-secondary mt-4">
            Última actualización: {LAST_UPDATE}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Índice */}
          <nav className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
            <h2 className="font-label-caps text-label-caps text-primary uppercase mb-4">
              Contenido
            </h2>
            <ul className="space-y-2 border-l border-outline-variant pl-4">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contenido */}
          <div className="lg:col-span-8 space-y-12">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-28"
              >
                <h2 className="font-headline-sm text-xl md:text-headline-sm text-primary mb-4">
                  {section.title}
                </h2>
                {section.paragraphs?.map((text) => (
                  <p
                    key={text.slice(0, 40)}
                    className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4"
                  >
                    {text}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="space-y-2 mt-4">
                    {section.bullets.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-on-surface-variant"
                      >
                        <MaterialIcon
                          name="chevron_right"
                          className="text-primary mt-0.5 shrink-0 text-[18px]"
                        />
                        <span className="font-body-md text-body-md">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {/* Contacto */}
            <section className="border-t border-outline-variant pt-10">
              <h2 className="font-headline-sm text-xl md:text-headline-sm text-primary mb-4">
                ¿Alguna duda?
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                Escríbenos y te respondemos personalmente. También puedes
                revisar la{" "}
                <Link
                  href="/transparencia"
                  className="text-primary border-b border-primary hover:text-secondary hover:border-secondary transition-colors"
                >
                  página de transparencia
                </Link>{" "}
                para la información de azúcar y las advertencias de consumo.
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
            </section>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
