/**
 * ═══════════════════════════════════════════════════════════════
 *  IMÁGENES DEL SITIO — todo centralizado aquí
 * ═══════════════════════════════════════════════════════════════
 *
 * CÓMO REEMPLAZAR POR TUS PROPIAS FOTOS:
 *   1. Copia tu foto a  public/images/...
 *   2. Cambia el `src` por la ruta local, ej:  src: "/images/ganoderma/1.jpg"
 *   3. Listo. No hace falta tocar ningún componente.
 *
 * ─────────────────────────────────────────────────────────────
 *  FOTOS PENDIENTES ANTES DE LANZAR
 * ─────────────────────────────────────────────────────────────
 *
 *  A) PACKSHOTS (public/products/) — 1 por producto, fondo blanco,
 *     PNG, mínimo 1200x1600 px, vertical. Faltan:
 *       · cocozhi.png
 *       · lions-mane-drink.png
 *
 *  B) FOTO DE AMBIENTE (public/images/) — para hero y secciones.
 *     Idealmente tuyas: tu escritorio, tu taza, tu entrega.
 *
 *  C) ⚠️ GANODERMA: las fotos de abajo son de Unsplash y varias NO son
 *     Ganoderma lucidum. Tu público googlea. El G. lucidum se reconoce
 *     por: forma de repisa o riñón, superficie lacada y brillante como
 *     barnizada, rojo caoba, borde blanco-crema, creciendo sobre madera
 *     dura. Reemplázalas antes de lanzar o quita la galería.
 */

export interface MediaImage {
  src: string;
  alt: string;
  /** Texto opcional bajo la foto. */
  caption?: string;
}

/** Construye una URL de Unsplash optimizada. */
const unsplash = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

/* ─────────────── PORTADA / HERO ─────────────── */

export const heroImage: MediaImage = {
  src: unsplash("1518057111178-44a106bad636", 1200),
  alt: "Taza de café recién servida por la mañana",
};

/* ─────────────── SECCIÓN GANODERMA ─────────────── */

/** Foto grande de portada de la sección de Ganoderma. */
export const ganodermaCover: MediaImage = {
  src: unsplash("1586686804243-d763a9afb755", 1200),
  alt: "Hongo Ganoderma creciendo sobre un tronco",
};

/** Fotos secundarias de la sección de Ganoderma. */
export const ganodermaGallery: MediaImage[] = [
  {
    src: unsplash("1542913235-1f46ce06443d", 800),
    alt: "Detalle de un hongo en primer plano",
    caption: "El hongo",
  },
  {
    src: unsplash("1600998382820-214909f6ad37", 800),
    alt: "Hongos creciendo de forma natural sobre madera",
    caption: "Su origen",
  },
  {
    src: unsplash("1630286057323-905c2a21941f", 800),
    alt: "Textura de un hongo Ganoderma en detalle",
    caption: "Su textura",
  },
];

/* ─────────────── SECCIÓN "PRODUCTOS ORIGINALES DXN" ─────────────── */

export const originImage: MediaImage = {
  src: unsplash("1422433555807-2559a27433bd", 1200),
  alt: "Granos de café y taza servida",
};

/* ─────────────── PÁGINA NOSOTROS ─────────────── */

export const aboutImage: MediaImage = {
  src: unsplash("1545319261-f3760f9dd64d", 1200),
  alt: "Café servido, listo para disfrutar",
};

/* ─────────────── VIDEOS DE YOUTUBE ─────────────── */

export interface VideoItem {
  /** ID del video de YouTube (lo que va después de ?v= en la URL). */
  id: string;
  title: string;
  description?: string;
}

/**
 * Videos que se muestran en la sección "En video".
 * Deja el array vacío ([]) y la sección desaparece sola.
 *
 * ⚠️ REVISA el contenido de cada video antes de publicarlo: no debe hacer
 * promesas médicas. Lo ideal es reemplazarlos por videos tuyos.
 */
export const videos: VideoItem[] = [
  {
    id: "eGjUBsPM6To",
    title: "Lingzhi Coffee 3 en 1",
    description: "Conoce el café con Ganoderma más vendido de DXN.",
  },
  {
    id: "3HSWZyNXvws",
    title: "Lingzhi Black Coffee",
    description: "El café negro con Ganoderma, sin azúcar.",
  },
];
