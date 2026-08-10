import Link from "next/link";
import type { Metadata } from "next";
import AppShell from "@/components/layout/AppShell";
import MaterialIcon from "@/components/ui/MaterialIcon";
import JsonLd from "@/components/ui/JsonLd";
import { whatsappContactLink } from "@/lib/whatsapp";
import { faqJsonLd, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Cuánta azúcar tiene el café DXN y quién no debería tomar Ganoderma",
  description:
    "Cuánta azúcar tiene cada producto DXN, qué dice la evidencia sobre el Ganoderma, el Cordyceps y la melena de león, y quién no debería tomarlos. Información completa, lo bueno y lo malo.",
  alternates: { canonical: "/transparencia" },
};

/**
 * Preguntas frecuentes en formato Q&A.
 *
 * Esta sección es el activo de posicionamiento más valioso del sitio:
 * responde de forma directa las preguntas que la gente le hace a Google
 * y a las IA sobre el Ganoderma, y nadie más en Bolivia las publica.
 */
const faqs = [
  {
    q: "¿Qué es el Ganoderma?",
    a: "El Ganoderma lucidum, también llamado reishi en japonés o lingzhi en chino, es un hongo de repisa que crece sobre madera dura y que la tradición asiática usa desde hace unos 2.000 años. Se reconoce por su superficie lacada y brillante de color rojo caoba con el borde blanco-crema. No se come como un champiñón: es leñoso y amargo, y se usa en extracto o en polvo. Sus compuestos más estudiados son los polisacáridos (beta-glucanos) y los triterpenoides (ácidos ganodéricos), que son los responsables de su sabor amargo.",
  },
  {
    q: "¿El Ganoderma da energía?",
    a: "No. El Ganoderma no es un estimulante y no hay evidencia de que aporte energía. Si tomas un café con Ganoderma y te sientes despierto, eso es efecto de la cafeína del café, no del hongo. Lo que sí se estudia en humanos del Ganoderma es la modulación del sistema inmune, la ansiedad y la calidad del sueño. El hongo con evidencia más interesante para energía es el Cordyceps, no el Ganoderma.",
  },
  {
    q: "¿Cuánta azúcar tiene el café DXN?",
    a: "Depende del formato. Los sobres de 21 gramos (Lingzhi Coffee 3 en 1, Cordyceps Coffee 3 en 1, Spirulina Coffee) tienen alrededor de 16 gramos de carbohidratos, en su mayoría azúcar: sus primeros ingredientes son azúcar y crema no láctea. Eso equivale a unas cuatro cucharaditas, más de la mitad del máximo diario de azúcares libres que sugiere la OMS. El sobre de Cocozhi, de 32 gramos, tiene todavía más. El único producto sin azúcar añadida es el Lingzhi Black Coffee, en sobre de 4,5 gramos, que lleva solo dos ingredientes: café y extracto de Ganoderma.",
  },
  {
    q: "¿Hay algún café DXN sin azúcar?",
    a: "Sí, el Lingzhi Black Coffee 2 en 1. Viene en sobre de 4,5 gramos y contiene únicamente café instantáneo y extracto de Ganoderma lucidum: sin azúcar añadida, sin crema no láctea y sin grasa vegetal hidrogenada. Es el único producto del catálogo del que se puede decir «sin azúcar» con precisión.",
  },
  {
    q: "¿Quién no debería tomar Ganoderma?",
    a: "Las personas que toman anticoagulantes o antiagregantes (warfarina, clopidogrel, aspirina en dosis médica), porque el reishi puede aumentar el riesgo de sangrado. Las personas que toman inmunosupresores, como corticoides, medicación de trasplante o tratamiento de enfermedad autoinmune, porque el Ganoderma modula el sistema inmune. Durante el embarazo y la lactancia, porque no hay datos suficientes. Y conviene suspenderlo dos semanas antes de una cirugía programada. En todos estos casos hay que consultar al médico antes de tomarlo.",
  },
  {
    q: "¿Cuál es la diferencia entre Ganoderma, Cordyceps y melena de león?",
    a: "Son tres hongos distintos con perfiles distintos. El Ganoderma (reishi) se estudia por el sistema inmune, la ansiedad y el sueño, y no es un estimulante. El Cordyceps contiene cordicepina y es el que tiene mejor evidencia para energía: hay ensayos con mejor tolerancia al ejercicio intenso y tiempos de reacción más rápidos. La melena de león (Hericium erinaceus) contiene hericenonas y erinacinas, y se investiga por su relación con el cerebro, aunque los ensayos en humanos son pequeños, cortos y de resultados mixtos.",
  },
  {
    q: "¿El café con Ganoderma cura algo?",
    a: "No. Los productos DXN son alimentos y suplementos alimenticios: no están destinados a diagnosticar, tratar, curar ni prevenir ninguna enfermedad, y no sustituyen una dieta equilibrada ni un tratamiento médico. Además, los estudios clínicos sobre estos hongos usan extractos en dosis altas (entre 500 y 2.000 miligramos diarios de Ganoderma, hasta 4 gramos de Cordyceps), muy por encima de lo que contiene un sobre de café.",
  },
];

/** Azúcar y formato por producto. Sin cifras que no podamos sostener. */
const sugarTable = [
  {
    product: "Lingzhi Black Coffee 2 en 1",
    slug: "lingzhi-black-coffee-2-en-1",
    format: "Sobre de 4,5 g",
    sugar: "Sin azúcar añadida",
    level: "bajo" as const,
    note: "Dos ingredientes: café y extracto de Ganoderma.",
  },
  {
    product: "Lion's Mane Coffee Latte",
    slug: "lions-mane-coffee-latte",
    format: "Sobre de 15 g",
    sugar: "Con azúcar",
    level: "medio" as const,
    note: "Menos que un sobre de 21 g, pero no es un producto sin azúcar.",
  },
  {
    product: "Lingzhi Coffee 3 en 1",
    slug: "lingzhi-coffee-3-en-1",
    format: "Sobre de 21 g",
    sugar: "≈ 16 g de carbohidratos",
    level: "alto" as const,
    note: "Los primeros ingredientes son azúcar y crema no láctea.",
  },
  {
    product: "Cordyceps Coffee 3 en 1",
    slug: "cordyceps-coffee-3-en-1",
    format: "Sobre de 21 g",
    sugar: "≈ 16 g de carbohidratos",
    level: "alto" as const,
    note: "Mismo formato que el 3 en 1 clásico.",
  },
  {
    product: "Spirulina Coffee",
    slug: "spirulina-coffee",
    format: "Sobre de 21 g",
    sugar: "≈ 16 g de carbohidratos",
    level: "alto" as const,
    note: "Mismo formato que el 3 en 1 clásico.",
  },
  {
    product: "Cocozhi",
    slug: "cocozhi",
    format: "Sobre de 32 g",
    sugar: "El más alto del catálogo",
    level: "alto" as const,
    note: "Su ventaja no es ser saludable: es no tener la cafeína del café.",
  },
  {
    product: "Green Smoothie · Red Smoothie · NutriBlend Mix",
    slug: "nutriblend-mix",
    format: "Polvo, por porción",
    sugar: "Ficha pendiente",
    level: "pendiente" as const,
    note: "A base de arroz, quinua y avena. Aún no tenemos la tabla oficial.",
  },
  {
    product: "Choco Pro Bar · Lion's Mane Coffee Drink",
    slug: "choco-pro-bar",
    format: "Unidad",
    sugar: "Ficha pendiente",
    level: "pendiente" as const,
    note: "Estamos pidiendo la tabla nutricional a DXN Bolivia.",
  },
];

const levelStyles = {
  bajo: "bg-whatsapp/10 text-whatsapp-dark border-whatsapp/30",
  medio: "bg-gold-dark/10 text-gold-dark border-gold-dark/30",
  alto: "bg-error/10 text-error border-error/30",
  pendiente: "bg-surface-variant text-on-surface-variant border-outline-variant",
};

const warnings = [
  {
    icon: "medication",
    title: "Si tomas anticoagulantes",
    text: "Warfarina, clopidogrel o aspirina en dosis médica. El Ganoderma puede aumentar el riesgo de sangrado. Consúltalo con tu médico antes de tomarlo.",
  },
  {
    icon: "shield",
    title: "Si tomas inmunosupresores",
    text: "Corticoides, medicación de trasplante o tratamiento de una enfermedad autoinmune. El Ganoderma modula el sistema inmune y podría ir en contra de lo que busca tu tratamiento.",
  },
  {
    icon: "pregnant_woman",
    title: "Embarazo y lactancia",
    text: "No es que se sepa que hace daño: es que no hay datos suficientes. Cuando no hay datos, la respuesta correcta es no.",
  },
  {
    icon: "healing",
    title: "Si tienes cirugía programada",
    text: "Suspéndelo dos semanas antes, otra vez por el tema del sangrado.",
  },
];

const evidence = [
  {
    title: "Ganoderma (Reishi / Lingzhi)",
    yes: "Lo que más se estudia en humanos es la modulación del sistema inmune, la ansiedad y la calidad del sueño.",
    no: "No es un estimulante y no te da energía. Si sientes que te despierta, eso es la cafeína del café.",
  },
  {
    title: "Cordyceps",
    yes: "Es el que tiene los estudios más interesantes para energía: tolerancia al esfuerzo y tiempos de reacción más rápidos.",
    no: "Los ensayos usan hasta 4 g diarios de extracto. Un sobre de café tiene mucho menos.",
  },
  {
    title: "Melena de león (Lion's Mane)",
    yes: "En laboratorio estimula factores de crecimiento nervioso. Es el hongo que más se investiga por su relación con el cerebro.",
    no: "En humanos los ensayos son pequeños, cortos y de resultados mixtos. Es una apuesta interesante, no una promesa.",
  },
  {
    title: "Espirulina",
    yes: "Aporta proteína vegetal y micronutrientes.",
    no: "No mejoró la fatiga frente a placebo en los estudios que existen. Es nutrición, no un energizante.",
  },
];

export default function TransparenciaPage() {
  return (
    <AppShell active="/transparencia">
      <JsonLd
        data={[
          faqJsonLd(faqs),
          breadcrumbJsonLd([
            { name: "Inicio", path: "/" },
            { name: "Transparencia", path: "/transparencia" },
          ]),
        ]}
      />
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24">
        {/* Encabezado */}
        <header className="max-w-3xl mb-16 md:mb-24">
          <span className="font-label-caps text-label-caps text-secondary mb-2 block">
            LO BUENO Y LO MALO
          </span>
          <h1 className="font-display-lg-mobile md:text-display-lg font-display-lg text-primary mb-6">
            Transparencia
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Vendemos estos productos y aun así queremos que sepas lo que llevan
            dentro, qué dice la evidencia de verdad y quién no debería tomarlos.
            Preferimos que decidas con la información completa a venderte algo
            que después no te sirve.
          </p>
        </header>

        {/* Azúcar */}
        <section className="mb-20 md:mb-28">
          <h2 className="font-headline-md text-xl md:text-headline-md text-primary mb-3">
            Cuánta azúcar tiene cada producto
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mb-8">
            La OMS sugiere un máximo de unos 25 g de azúcares libres al día. Un
            sobre de 21 g te consume más de la mitad. No es un problema si lo
            sabes: es un problema si nadie te lo dice.
          </p>

          <div className="space-y-3">
            {sugarTable.map((row) => (
              <div
                key={row.product}
                className="border border-outline-variant p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-3 md:gap-6"
              >
                <div className="md:flex-1">
                  <Link
                    href={`/productos/${row.slug}`}
                    className="font-headline-sm text-base md:text-lg text-primary hover:text-secondary transition-colors"
                  >
                    {row.product}
                  </Link>
                  <p className="font-body-md text-sm text-on-surface-variant mt-1">
                    {row.note}
                  </p>
                </div>
                <span className="font-label-caps text-[11px] text-secondary uppercase md:w-40">
                  {row.format}
                </span>
                <span
                  className={`font-label-caps text-[11px] uppercase tracking-wider border px-3 py-2 text-center md:w-52 ${
                    levelStyles[row.level]
                  }`}
                >
                  {row.sugar}
                </span>
              </div>
            ))}
          </div>

          <p className="font-body-md text-sm text-secondary mt-6 max-w-2xl">
            Las cifras marcadas con «≈» son estimaciones a partir del listado de
            ingredientes del empaque. Estamos pidiendo las tablas nutricionales
            oficiales a DXN Bolivia S.R.L. y las publicaremos aquí en cuanto las
            tengamos.
          </p>
        </section>

        {/* Qué dice la evidencia */}
        <section className="mb-20 md:mb-28">
          <h2 className="font-headline-md text-xl md:text-headline-md text-primary mb-3">
            Qué dice la evidencia (y qué no)
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mb-8">
            Un aviso que vale para los cuatro: los estudios clínicos usan
            extractos en dosis altas, muy por encima de lo que lleva un sobre de
            café. El café no es un suplemento de dosis alta, es un hábito
            diario.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-gutter">
            {evidence.map((item) => (
              <div
                key={item.title}
                className="border border-outline-variant p-6 md:p-8"
              >
                <h3 className="font-headline-sm text-lg text-primary mb-5">
                  {item.title}
                </h3>
                <div className="flex items-start gap-3 mb-4">
                  <MaterialIcon
                    name="check_circle"
                    className="text-whatsapp shrink-0 mt-0.5"
                  />
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {item.yes}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <MaterialIcon
                    name="cancel"
                    className="text-error shrink-0 mt-0.5"
                  />
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {item.no}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quién no debería tomarlo */}
        <section className="mb-20 md:mb-28">
          <h2 className="font-headline-md text-xl md:text-headline-md text-primary mb-3">
            Quién no debería tomarlo
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mb-8">
            Si estás en alguno de estos casos, preferimos no venderte. Habla
            primero con tu médico.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-gutter">
            {warnings.map((item) => (
              <div
                key={item.title}
                className="bg-surface-container-low p-6 md:p-8 flex items-start gap-4"
              >
                <MaterialIcon
                  name={item.icon}
                  className="text-primary text-3xl shrink-0"
                />
                <div>
                  <h3 className="font-headline-sm text-lg text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Preguntas frecuentes — el bloque que responde lo que la gente busca */}
        <section className="mb-20 md:mb-28">
          <h2 className="font-headline-md text-xl md:text-headline-md text-primary mb-3">
            Preguntas frecuentes sobre el Ganoderma
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mb-8">
            Las respuestas directas a lo que más nos preguntan. Sin rodeos y
            sin promesas.
          </p>

          <dl className="divide-y divide-outline-variant border-y border-outline-variant">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-7">
                <dt className="font-headline-sm text-lg md:text-xl text-primary mb-3">
                  {faq.q}
                </dt>
                <dd className="font-body-md text-body-md text-on-surface-variant leading-relaxed max-w-3xl">
                  {faq.a}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Aviso legal */}
        <section className="border-t border-outline-variant pt-10">
          <div className="max-w-3xl">
            <h2 className="font-label-caps text-label-caps text-primary uppercase mb-4">
              Aviso importante
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4">
              Los productos DXN son alimentos y suplementos alimenticios. No
              sustituyen una dieta equilibrada ni un tratamiento médico, y no
              están destinados a diagnosticar, tratar, curar ni prevenir ninguna
              enfermedad. Nada de lo que dice esta página es consejo médico.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-8">
              GanoVida es una tienda independiente operada por un distribuidor
              independiente de DXN. No es el sitio oficial de DXN. Todas las
              marcas de producto pertenecen a DXN.
            </p>
            <a
              href={whatsappContactLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-outline text-primary px-8 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-surface-variant transition-colors"
            >
              <MaterialIcon name="chat" className="text-[18px]" />
              Tengo una duda
            </a>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
