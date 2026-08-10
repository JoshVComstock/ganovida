/**
 * Configuración central del sitio. Lee de variables de entorno con
 * valores de respaldo para desarrollo. Un único punto de acceso a la
 * config del negocio (WhatsApp, código DXN, redes, entrega).
 */
export const siteConfig = {
  name: "GanoVida",
  domain: "ganovida.shop",
  tagline: "Café y bienestar con Ganoderma",
  city: "Cochabamba",
  // Distribuidor independiente — NO es el sitio oficial de DXN.
  legalNote: "Distribuidor independiente de productos DXN.",

  // Número real de pedidos (Bolivia +591).
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "59165323871",
  sponsorCode: process.env.NEXT_PUBLIC_SPONSOR_CODE ?? "DXN000000",

  /**
   * Operación: trabajamos por pedido, no con stock. El cliente pide,
   * compramos y entregamos. El costo del envío sale del margen, así que
   * la entrega no se cobra aparte.
   */
  delivery: {
    leadTimeLabel: "1 a 2 días",
    freeShipping: true,
    area: "Cochabamba ciudad",
    note: "Trabajamos por pedido, no con stock: así te llega producto fresco.",
  },

  /** Pago mixto: adelanto para confirmar y el resto al recibir. */
  payment: {
    label: "Mixto",
    note: "Confirmas con un adelanto por QR y pagas el resto al recibir. El QR te lo enviamos por WhatsApp.",
  },

  social: {
    instagram:
      process.env.NEXT_PUBLIC_INSTAGRAM ?? "https://instagram.com/ganovida.bo",
    tiktok: process.env.NEXT_PUBLIC_TIKTOK ?? "https://tiktok.com/@ganovida.bo",
  },
} as const;

/** Moneda del sitio (Bolivianos). */
export const CURRENCY = "Bs.";

/** Formatea un precio en Bolivianos. */
export function formatPrice(value: number): string {
  return `${CURRENCY} ${value}`;
}
