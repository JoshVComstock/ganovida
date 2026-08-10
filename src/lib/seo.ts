import { siteConfig } from "./config";
import type { Product } from "@/data/products";

/**
 * ═══════════════════════════════════════════════════════════════
 *  SEO / GEO — un solo lugar para metadatos y datos estructurados
 * ═══════════════════════════════════════════════════════════════
 *
 * SEO  = que Google te encuentre.
 * GEO  = que ChatGPT, Gemini o Perplexity te citen cuando alguien
 *        pregunta "¿el ganoderma da energía?" o "¿cuánta azúcar tiene
 *        el café DXN?".
 *
 * Los motores generativos citan páginas que responden preguntas de
 * forma directa, con datos concretos y estructura clara. Por eso la
 * página /transparencia es nuestro mejor activo: nadie más publica
 * esa información.
 */

/** URL canónica del sitio. Cambiar por el dominio final en producción. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ganovida.shop";

export const SITE_NAME = siteConfig.name;

/** Aviso legal corto que se repite en metadatos y datos estructurados. */
export const LEGAL_DISCLAIMER =
  "GanoVida es una tienda independiente operada por un distribuidor independiente de DXN. No es el sitio oficial de DXN. Los productos son alimentos y suplementos alimenticios; no sustituyen una dieta equilibrada ni un tratamiento médico.";

/* ─────────────────────── PALABRAS CLAVE ─────────────────────── */

/**
 * Marca + producto. Son las de mayor intención de compra: quien busca
 * esto ya sabe lo que quiere.
 */
export const KEYWORDS_MARCA = [
  "DXN Bolivia",
  "DXN Cochabamba",
  "comprar DXN Bolivia",
  "productos DXN Bolivia",
  "distribuidor DXN Cochabamba",
  "GanoVida",
];

/** Ingrediente. Volumen medio, competencia baja en Bolivia. */
export const KEYWORDS_INGREDIENTE = [
  "café con Ganoderma",
  "Ganoderma Bolivia",
  "Ganoderma lucidum",
  "reishi Bolivia",
  "lingzhi Bolivia",
  "hongo reishi Cochabamba",
  "Cordyceps Bolivia",
  "melena de león Bolivia",
  "Lion's Mane Bolivia",
];

/** Producto concreto. Intención de compra alta. */
export const KEYWORDS_PRODUCTO = [
  "Lingzhi Coffee 3 en 1 Bolivia",
  "Lingzhi Black Coffee precio Bolivia",
  "Cordyceps Coffee 3 en 1",
  "Cocozhi Bolivia",
  "Spirulina Coffee DXN",
  "café DXN precio Bolivia",
];

/** Local. Es donde puedes ganar rápido: casi nadie compite. */
export const KEYWORDS_LOCAL = [
  "café con Ganoderma Cochabamba",
  "delivery café Cochabamba",
  "comprar café Ganoderma Bolivia",
  "café oficina Cochabamba",
];

/**
 * Preguntas. Son las de GEO: no traen mucho tráfico de Google pero son
 * lo que la gente le pregunta a una IA, y responderlas bien es lo que
 * hace que te citen.
 */
export const KEYWORDS_PREGUNTAS = [
  "qué es el Ganoderma",
  "para qué sirve el café con Ganoderma",
  "el Ganoderma da energía",
  "cuánta azúcar tiene el café DXN",
  "quién no debería tomar Ganoderma",
  "Ganoderma contraindicaciones",
  "diferencia entre Ganoderma Cordyceps y melena de león",
  "café sin azúcar con Ganoderma",
];

export const ALL_KEYWORDS = [
  ...KEYWORDS_MARCA,
  ...KEYWORDS_INGREDIENTE,
  ...KEYWORDS_PRODUCTO,
  ...KEYWORDS_LOCAL,
  ...KEYWORDS_PREGUNTAS,
];

/* ─────────────────────── DATOS ESTRUCTURADOS ─────────────────────── */

/**
 * Negocio local. `areaServed` en Cochabamba es lo que le dice a Google
 * que somos relevantes para las búsquedas de esa ciudad.
 */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "OnlineStore",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/logo.png`,
    description: `Tienda independiente de café y productos de bienestar con Ganoderma (DXN) en ${siteConfig.city}, Bolivia. Entrega a domicilio y pedidos por WhatsApp.`,
    slogan: "Café y bienestar con Ganoderma",
    telephone: `+${siteConfig.whatsappNumber}`,
    currenciesAccepted: "BOB",
    paymentAccepted: "Efectivo, QR",
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city,
      addressCountry: "BO",
    },
    areaServed: [
      { "@type": "City", name: siteConfig.city },
      { "@type": "Country", name: "Bolivia" },
    ],
    sameAs: [siteConfig.social.instagram, siteConfig.social.tiktok],
    disambiguatingDescription: LEGAL_DISCLAIMER,
  };
}

/** Sitio web + acción de búsqueda. */
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: "es-BO",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

/** Ficha de producto con precio y disponibilidad. */
export function productJsonLd(product: Product) {
  const url = `${SITE_URL}/productos/${product.slug}`;
  const image = product.images[0]?.src
    ? `${SITE_URL}${product.images[0].src}`
    : `${SITE_URL}/logo.png`;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${url}#product`,
    name: product.name,
    description: product.description,
    image,
    url,
    sku: product.slug,
    brand: { "@type": "Brand", name: "DXN" },
    category: product.focus,
    ...(product.netWeight ? { weight: product.netWeight } : {}),
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: "BOB",
      price: product.publicPrice,
      availability: product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "City", name: siteConfig.city },
      deliveryLeadTime: {
        "@type": "QuantitativeValue",
        minValue: 1,
        maxValue: 2,
        unitCode: "DAY",
      },
    },
  };
}

/** Migas de pan: ayudan a que Google entienda la jerarquía del sitio. */
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

/**
 * Preguntas y respuestas. Es el formato que más citan los motores
 * generativos, porque la respuesta ya viene delimitada.
 */
export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

// El componente que inyecta estos objetos en la página vive en
// components/ui/JsonLd.tsx (este archivo es .ts y no puede contener JSX).
