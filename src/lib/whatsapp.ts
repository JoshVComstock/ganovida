import { siteConfig } from "./config";

/**
 * Construye un enlace wa.me con un mensaje pre-armado.
 * Todos los pedidos y solicitudes del sitio se cierran por WhatsApp.
 */
function buildLink(message: string): string {
  const phone = siteConfig.whatsappNumber;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/**
 * Enlace para pedir un producto concreto.
 * Si `price` es 0 (precio aún sin confirmar), el mensaje pide precio en vez de
 * mencionar un monto.
 */
export function whatsappOrderLink(productName: string, price: number): string {
  const msg =
    price > 0
      ? `Hola GanoVida 👋, quiero pedir: ${productName} (Bs. ${price}). ¿Me confirmas la entrega?`
      : `Hola GanoVida 👋, quiero información y precio de: ${productName}. ¿Me ayudas?`;
  return buildLink(msg);
}

/** Enlace para avisar cuando un producto sin stock vuelva a estar disponible. */
export function whatsappRestockLink(productName: string): string {
  const msg = `Hola GanoVida 👋, me interesa el ${productName}. ¿Me avisas cuando lo tengas disponible?`;
  return buildLink(msg);
}

/** Enlace para coordinar una degustación sin costo. */
export function whatsappTastingLink(): string {
  const msg = `Hola GanoVida 👋, quiero probar antes de comprar. ¿Coordinamos una degustación?`;
  return buildLink(msg);
}

/** Enlace genérico de contacto/consulta. */
export function whatsappContactLink(): string {
  const msg = `Hola GanoVida 👋, tengo una consulta.`;
  return buildLink(msg);
}

/**
 * Enlace para la consulta de asesoría: en vez de mandar el catálogo,
 * arrancamos preguntando a qué hora le pega el cansancio.
 */
export function whatsappAdviceLink(): string {
  const msg = `Hola GanoVida 👋, no sé cuál me conviene. ¿Me ayudas a elegir?`;
  return buildLink(msg);
}

/** Enlace para pedidos de empresa / oficina. */
export function whatsappBusinessLink(): string {
  const msg = `Hola GanoVida 👋, quiero cotizar el café para mi oficina. Somos aproximadamente ___ personas.`;
  return buildLink(msg);
}

/**
 * Enlace de solicitud de afiliación con los datos del formulario.
 * Mientras no haya backend, así llegan los datos para dar de alta en eWorld.
 */
export interface AffiliateFormData {
  fullName: string;
  idNumber: string;
  birthDate: string;
  phone: string;
  email: string;
  city: string;
  address: string;
}

export function whatsappAffiliateLink(data: AffiliateFormData): string {
  const msg = [
    `Hola GanoVida 👋, quiero afiliarme al programa. Mis datos:`,
    `• Nombre: ${data.fullName}`,
    `• Cédula: ${data.idNumber}`,
    `• Fecha de nacimiento: ${data.birthDate}`,
    `• WhatsApp: ${data.phone}`,
    `• Correo: ${data.email}`,
    `• Ciudad: ${data.city}`,
    `• Dirección: ${data.address}`,
  ].join("\n");
  return buildLink(msg);
}
