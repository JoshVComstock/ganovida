import type { MediaImage } from "./media";

export type Category = "unidad" | "sobre" | "caja" | "kit";

/** Grupos por enfoque / caso de uso (merchandising). */
export type FocusKey =
  | "kits"
  | "enfoque"
  | "energia"
  | "combustible"
  | "familia";

export interface FocusGroup {
  key: FocusKey;
  label: string;
  description: string;
}

/** Grupos que ordenan el catálogo por para-qué-sirve. */
export const focusGroups: FocusGroup[] = [
  {
    key: "kits",
    label: "Kits",
    description:
      "Combinaciones armadas por momento del día. Precio oficial de cada producto, con entrega y seguimiento incluidos.",
  },
  {
    key: "enfoque",
    label: "Enfoque",
    description: "Para tus momentos de concentración y claridad.",
  },
  {
    key: "energia",
    label: "Energía",
    description: "Para activarte y rendir en el día.",
  },
  {
    key: "combustible",
    label: "Combustible",
    description: "Nutrición para acompañar tu rutina.",
  },
  {
    key: "familia",
    label: "Noche y familia",
    description: "Para compartir y disfrutar, sin la cafeína del café.",
  },
];

export interface Product {
  id: string;
  slug: string;
  name: string;
  focus: FocusKey;
  /** Frase corta de posicionamiento (para qué público / cuándo). */
  tagline: string;
  description: string;
  /** Puntos de venta clave que se listan en la ficha. */
  highlights: string[];
  /** Ingredientes según el empaque DXN (opcional hasta confirmar). */
  ingredients?: string;
  /**
   * Nota de transparencia (azúcar, cafeína, datos que no tenemos).
   * Se muestra en un bloque destacado en la ficha. Es parte del
   * posicionamiento de la marca: decimos lo bueno y lo malo.
   */
  transparency?: string;
  category: Category;
  /** Presentación (ej. "20 sobres x 21 g"). */
  presentation: string;
  /** Peso neto del paquete (ej. "420 g"). Opcional hasta confirmar. */
  netWeight?: string;
  /**
   * Precio público en Bs, según la lista oficial de DXN Bolivia.
   * 0 = precio aún sin confirmar; la web muestra "Consultar por WhatsApp".
   *
   * ⚠️ Regla dura (cláusula 13 del reglamento DXN): el precio lo determina
   * DXN. No se puede subir, bajar ni ofrecer descuentos. Por eso NO existe
   * un campo de precio afiliado ni de "ahorro" en este archivo.
   */
  publicPrice: number;
  points?: number; // Valor en puntos DXN (PV) — confirmar en el back office
  /** Galería. La primera imagen es la principal (la de la tarjeta). */
  images: MediaImage[];
  featured?: boolean;
  inStock: boolean;
  /** Solo para kits: slugs de los productos incluidos. */
  includes?: string[];
  /** Solo para kits: para quién es (se muestra en la ficha). */
  forWho?: string;
}

/** Etiquetas legibles para cada categoría. */
export const categoryLabels: Record<Category, string> = {
  unidad: "Por unidad",
  sobre: "Por sobre",
  caja: "Por caja",
  kit: "Kit",
};

/** Nota de transparencia reutilizable para los sobres de 21 g. */
const SOBRE_21G =
  "Sobre de 21 g. Los primeros ingredientes son azúcar y crema no láctea (contiene grasa vegetal hidrogenada). Estimamos alrededor de 16 g de carbohidratos por sobre, en su mayoría azúcar — la OMS sugiere un máximo de 25 g de azúcares libres al día. Si buscas cero azúcar, tu opción es el Lingzhi Black Coffee. Aún no tenemos la tabla nutricional oficial de DXN Bolivia; en cuanto la tengamos la publicamos aquí.";

/** Nota para productos de los que todavía no tenemos ficha nutricional. */
const SIN_FICHA =
  "Todavía no tenemos la tabla nutricional oficial de DXN Bolivia para este producto, así que preferimos no darte cifras inventadas. Escríbenos por WhatsApp y te la enviamos apenas la tengamos.";

/**
 * ═══════════════════════════════════════════════════════════════
 *  CATÁLOGO
 * ═══════════════════════════════════════════════════════════════
 *
 * PRECIOS: lista oficial DXN Bolivia S.R.L., vigente desde octubre 2025
 * (precio de menudeo por unidad). No modificar sin actualizar la lista.
 *
 * ⚠️ NOMBRES DE ARCHIVO: siempre en minúsculas, sin espacios y sin tildes.
 * Los servidores de producción distinguen mayúsculas y los espacios/tildes
 * pueden romperse al subir desde Windows. Usa guiones: `kit-enfoque.png`.
 *
 * FOTO PENDIENTE:
 *   - /products/lions-mane-drink.png (producto sin stock por ahora)
 *
 * FOTOS DE KIT: el montaje va PRIMERO en el array `images`; a continuación
 * las fotos individuales de cada producto, que quedan como miniaturas de la
 * galería.
 */
export const products: Product[] = [
  // ═══════════════════════════ KITS ═══════════════════════════
  // Precio = suma exacta de los precios oficiales. Sin descuento
  // (cláusula 13.3). Lo que se agrega es servicio: entrega, asesoría,
  // tarjeta del Mapa del Día y seguimiento.
  {
    id: "k2",
    slug: "kit-casa",
    name: "Kit Casa",
    focus: "kits",
    tagline: "El desayuno y la noche de toda la familia.",
    description:
      "Cocozhi para la noche, cuando ya no quieres café pero quieres algo caliente, y NutriBlend Mix para resolver el desayuno de la semana. Es el kit que no consume una persona: lo consume una casa.",
    highlights: [
      "1 Cocozhi (20 sobres x 32 g)",
      "1 NutriBlend Mix (300 g)",
      "Cocozhi no tiene la cafeína del café: sirve de noche",
      "Entrega sin costo en Cochabamba",
    ],
    forWho:
      "Para papás y mamás que trabajan, o para quien comparte la merienda con la familia.",
    category: "kit",
    presentation: "2 productos",
    publicPrice: 559,
    includes: ["cocozhi", "nutriblend-mix"],
    images: [
      {
        src: "/products/kit-casa.png",
        alt: "Kit Casa GanoVida: Cocozhi y NutriBlend Mix juntos",
      },
      { src: "/products/cocozhi.png", alt: "Kit Casa GanoVida: Cocozhi" },
      {
        src: "/products/nutriBlendMixx.png",
        alt: "Kit Casa GanoVida: NutriBlend Mix",
      },
    ],
    featured: true,
    inStock: true,
  },
  {
    id: "k3",
    slug: "kit-bajon-de-las-3",
    name: "Kit Bajón de las 3",
    focus: "kits",
    tagline: "Para el que almuerza y a las 3 de la tarde ya no rinde.",
    description:
      "El Cordyceps se toma antes del bajón, a las 2, no cuando ya estás muerto. Y la barra reemplaza el snack de masa de las 4 por uno con proteína, que no te dispara la glucosa. Es la combinación para llegar a las 6 sin arrastrarte.",
    highlights: [
      "1 Cordyceps Coffee 3 en 1 (20 sobres x 21 g)",
      "1 Choco Pro Bar",
      "Pensado para la caída de energía de la tarde",
      "Entrega sin costo en Cochabamba",
    ],
    forWho:
      "Para trabajo de oficina: contabilidad, administración, atención al cliente, call center.",
    category: "kit",
    presentation: "2 productos",
    publicPrice: 668,
    includes: ["cordyceps-coffee-3-en-1", "choco-pro-bar"],
    images: [
      {
        src: "/products/kit-bajon-de-las-3.png",
        alt: "Kit Bajón de las 3 GanoVida: Cordyceps Coffee 3 en 1 y Choco Pro Bar juntos",
      },
      {
        src: "/products/cordycepscoffe.png",
        alt: "Kit Bajón de las 3 GanoVida: Cordyceps Coffee 3 en 1",
      },
      {
        src: "/products/chocoProBar.png",
        alt: "Kit Bajón de las 3 GanoVida: Choco Pro Bar",
      },
    ],
    inStock: true,
  },
  {
    id: "k4",
    slug: "kit-enfoque",
    name: "Kit Enfoque",
    focus: "kits",
    tagline: "El negro para arrancar. El latte para el bloque profundo.",
    description:
      "Lingzhi Black Coffee para el primer café del día, sin azúcar. Y Lion's Mane Coffee Latte para las 9 de la mañana, cuando arranca el bloque de trabajo que define tu día.",
    highlights: [
      "1 Lingzhi Black Coffee 2 en 1 (20 sobres x 4.5 g)",
      "1 Lion's Mane Coffee Latte (20 sobres x 15 g)",
      "El Black Coffee es el único sin azúcar añadida del catálogo",
      "Entrega sin costo en Cochabamba",
    ],
    forWho:
      "Para quien trabaja frente a una pantalla y necesita bloques largos de concentración.",
    category: "kit",
    presentation: "2 productos",
    publicPrice: 752,
    includes: ["lingzhi-black-coffee-2-en-1", "lions-mane-coffee-latte"],
    images: [
      {
        src: "/products/kit-enfoque.png",
        alt: "Kit Enfoque GanoVida: Lingzhi Black Coffee y Lion's Mane Coffee Latte juntos",
      },
      {
        src: "/products/BlackCoffe2in1.png",
        alt: "Kit Enfoque GanoVida: Lingzhi Black Coffee 2 en 1",
      },
      {
        src: "/products/coffeLatte.png",
        alt: "Kit Enfoque GanoVida: Lion's Mane Coffee Latte",
      },
    ],
    featured: true,
    inStock: true,
  },
  {
    id: "k5",
    slug: "kit-combustible",
    name: "Kit Combustible",
    focus: "kits",
    tagline: "Verde en la mañana, rojo antes de entrenar.",
    description:
      "Los dos smoothies son a base de arroz, quinua y avena, así que la glucosa sube lento y no hay pico ni caída. El verde suma vegetales; el rojo suma remolacha, asaí y flor de Jamaica.",
    highlights: [
      "1 Green Smoothie (400 g)",
      "1 Red Smoothie (400 g)",
      "100 % vegano, a base de granos y semillas",
      "Entrega sin costo en Cochabamba",
    ],
    forWho:
      "Para quien trabaja frente a una pantalla y además entrena. Lo recomendamos cuando ya probaste otro producto nuestro.",
    category: "kit",
    presentation: "2 productos",
    publicPrice: 870,
    includes: ["green-smoothie", "red-smoothie"],
    images: [
      {
        src: "/products/kit-combustible.png",
        alt: "Kit Combustible GanoVida: Green Smoothie y Red Smoothie juntos",
      },
      {
        src: "/products/greeSmoothie.png",
        alt: "Kit Combustible GanoVida: Green Smoothie",
      },
      {
        src: "/products/redSmoothie.png",
        alt: "Kit Combustible GanoVida: Red Smoothie",
      },
    ],
    inStock: true,
  },
  {
    id: "k6",
    slug: "kit-dia-completo",
    name: "Kit Día Completo",
    focus: "kits",
    tagline: "Desayuno, mañana y tarde. El día entero cubierto.",
    description:
      "NutriBlend a las 7 para que a las 10 no tengas hambre. Black Coffee a las 8 para arrancar sin azúcar. Cordyceps a las 2, antes del bajón. Es nuestro kit más completo y el que más piden los que ya nos compraron una vez.",
    highlights: [
      "1 Lingzhi Black Coffee 2 en 1 (20 sobres x 4.5 g)",
      "1 Cordyceps Coffee 3 en 1 (20 sobres x 21 g)",
      "1 NutriBlend Mix (300 g)",
      "Cubre desayuno, mañana y tarde. Te dura un mes",
    ],
    forWho:
      "Para freelancers, emprendedores y gente con jornadas largas que ya probó algo nuestro.",
    category: "kit",
    presentation: "3 productos",
    publicPrice: 874,
    includes: [
      "lingzhi-black-coffee-2-en-1",
      "cordyceps-coffee-3-en-1",
      "nutriblend-mix",
    ],
    images: [
      {
        src: "/products/kit-dia-completo.png",
        alt: "Kit Día Completo GanoVida: Lingzhi Black Coffee, Cordyceps Coffee y NutriBlend Mix juntos",
      },
      {
        src: "/products/BlackCoffe2in1.png",
        alt: "Kit Día Completo GanoVida: Lingzhi Black Coffee 2 en 1",
      },
      {
        src: "/products/cordycepscoffe.png",
        alt: "Kit Día Completo GanoVida: Cordyceps Coffee 3 en 1",
      },
      {
        src: "/products/nutriBlendMixx.png",
        alt: "Kit Día Completo GanoVida: NutriBlend Mix",
      },
    ],
    featured: true,
    inStock: true,
  },
  {
    id: "k7",
    slug: "kit-oficina",
    name: "Kit Oficina",
    focus: "kits",
    tagline: "El café del mes para tu equipo, entregado sin que tengas que acordarte.",
    description:
      "Cinco cajas de Lingzhi Coffee 3 en 1: 100 sobres, suficiente para un equipo mediano durante un mes. Coordinamos la entrega mensual contigo y te dejamos las tarjetas del Mapa del Día para el equipo.",
    highlights: [
      "5 cajas de Lingzhi Coffee 3 en 1 (100 sobres en total)",
      "Entrega mensual coordinada, sin costo",
      "Ideal para equipos de 10 a 30 personas",
      "Escríbenos y armamos la combinación que prefieras",
    ],
    forWho:
      "Para agencias, estudios, consultoras, coworkings y call centers que compran el café de la oficina.",
    category: "kit",
    presentation: "5 cajas",
    publicPrice: 1825,
    includes: [
      "lingzhi-coffee-3-en-1",
      "lingzhi-coffee-3-en-1",
      "lingzhi-coffee-3-en-1",
      "lingzhi-coffee-3-en-1",
      "lingzhi-coffee-3-en-1",
    ],
    images: [
      {
        src: "/products/LingzhiCoffe3in1.png",
        alt: "Kit Oficina GanoVida: cinco cajas de Lingzhi Coffee 3 en 1",
      },
    ],
    inStock: true,
  },

  // ─────────────────────────── ENFOQUE ───────────────────────────
  {
    id: "1",
    slug: "lingzhi-coffee-3-en-1",
    name: "Lingzhi Coffee 3 en 1",
    focus: "enfoque",
    tagline: "El más vendido del mundo. Cremoso y fácil de adoptar.",
    description:
      "Café premezclado con extracto de Ganoderma: café instantáneo, crema no láctea y azúcar. Cremoso, familiar y listo en segundos — el sabor que le entra a casi todo el mundo. Es el producto más vendido de DXN a nivel mundial, y es el reemplazo directo del café con leche y azúcar de siempre.",
    highlights: [
      "Sabor cremoso y familiar, fácil de adoptar",
      "Práctico e instantáneo: solo agrega agua caliente",
      "El más vendido de DXN a nivel mundial",
      "Con extracto de Ganoderma lucidum",
    ],
    ingredients:
      "Crema no láctea, azúcar, café instantáneo y extracto de Ganoderma lucidum.",
    /*  transparency: SOBRE_21G, */
    category: "caja",
    presentation: "20 sobres x 21 g",
    netWeight: "420 g",
    publicPrice: 365,
    images: [
      {
        src: "/products/LingzhiCoffe3in1.png",
        alt: "Empaque de DXN Lingzhi Coffee 3 en 1 con extracto de Ganoderma",
      },
    ],
    featured: true,
    inStock: true,
  },
  {
    id: "2",
    slug: "lingzhi-black-coffee-2-en-1",
    name: "Lingzhi Black Coffee 2 en 1",
    focus: "enfoque",
    tagline: "Dos ingredientes: café y Ganoderma. Nada más.",
    description:
      "Café negro instantáneo con extracto de Ganoderma, sin azúcar ni crema, con sabor y aroma intensos. Es el único producto del catálogo donde 'sin azúcar' es literal, y por eso es el que recomendamos a quien busca energía sin el pico de azúcar de la mañana.",
    highlights: [
      "Solo dos ingredientes: café y extracto de Ganoderma",
      "Sin azúcar añadida ni crema no láctea",
      "Sabor y aroma intensos, como un café negro de verdad",
      "Formato compacto: sobres de 4.5 g",
    ],
    ingredients: "Café instantáneo y extracto de Ganoderma lucidum.",
   /*  transparency:
      "Sobre de 4,5 g con dos ingredientes: café y extracto de Ganoderma. Sin azúcar añadida ni crema. Es el único del catálogo del que podemos decir eso con honestidad. DXN lo describe además como bajo en cafeína (0,06 %); no tenemos el dato en miligramos por sobre, lo estamos pidiendo.",
    */ category: "caja",
    presentation: "20 sobres x 4.5 g",
    netWeight: "90 g",
    publicPrice: 371,
    images: [
      {
        src: "/products/BlackCoffe2in1.png",
        alt: "Empaque de DXN Lingzhi Black Coffee 2 en 1",
      },
    ],
    featured: true,
    inStock: true,
  },
  {
    id: "3",
    slug: "lions-mane-coffee-latte",
    name: "Lion's Mane Coffee Latte",
    focus: "enfoque",
    tagline: "Café latte cremoso con hongo melena de león.",
    description:
      "Café premezclado con polvo de Lion's Mane (Hericium erinaceus), el hongo que más se está estudiando por su relación con el cerebro. Suave y cremoso tipo latte, para acompañar tus bloques de concentración. La evidencia en humanos todavía es preliminar, y preferimos decírtelo.",
    highlights: [
      "Con hongo Lion's Mane (Hericium erinaceus)",
      "Sabor latte, suave y cremoso",
      "Sobre de 15 g: menos azúcar que un sobre de 21 g",
      "Práctico e instantáneo",
    ],
    ingredients:
      "Crema no láctea, azúcar, café instantáneo y polvo de Lion's Mane (Hericium erinaceus).",
    transparency:
      "Sobre de 15 g. Lleva azúcar y crema no láctea, aunque menos que un sobre de 21 g. No es un producto sin azúcar. Sobre el hongo: los estudios en humanos son pequeños, cortos y de resultados mixtos — es una apuesta interesante, no una promesa.",
    category: "caja",
    presentation: "20 sobres x 15 g",
    netWeight: "300 g",
    publicPrice: 381,
    images: [
      {
        src: "/products/coffeLatte.png",
        alt: "DXN Lion's Mane Coffee Latte, café premezclado con hongo Lion's Mane",
      },
    ],
    inStock: true,
  },
  {
    id: "4",
    slug: "lions-mane-coffee-drink",
    name: "Lion's Mane Coffee Drink",
    focus: "enfoque",
    tagline: "Café en botella, listo para tomar. Sin stock por ahora.",
    description:
      "La versión en botella, lista para tomar, del café con Lion's Mane. Se abre y listo, sin preparar nada. Todavía no lo tenemos disponible en Bolivia: escríbenos si te interesa y te avisamos apenas llegue.",
    highlights: [
      "Listo para tomar, sin preparación",
      "Con hongo Lion's Mane (Hericium erinaceus)",
      "Práctico para llevar",
      "Aún no disponible: consúltanos y te avisamos",
    ],
/*     transparency: SIN_FICHA,
 */    category: "unidad",
    presentation: "Botella de 330 ml",
    netWeight: "330 ml",
    publicPrice: 50,
    images: [
      {
        src: "/products/lions-mane-drink.png",
        alt: "DXN Lion's Mane Coffee Drink en botella",
      },
    ],
    inStock: false,
  },

  // ─────────────────────────── ENERGÍA ───────────────────────────
  {
    id: "5",
    slug: "cordyceps-coffee-3-en-1",
    name: "Cordyceps Coffee 3 en 1",
    focus: "energia",
    tagline: "El de la tarde. Tómalo antes del bajón, no después.",
    description:
      "Café premezclado con extracto de Cordyceps. De los tres hongos que maneja DXN, es el que tiene los estudios más interesantes en tolerancia al esfuerzo y tiempos de reacción. Un consejo que no te cuesta nada: tómalo a las 2, media hora antes de tu caída de energía, no cuando ya estás muerto.",
    highlights: [
      "Con extracto de Cordyceps",
      "Pensado para la caída de energía de la tarde",
      "Práctico e instantáneo, formato 3 en 1",
      "También funciona antes de entrenar",
    ],
    ingredients:
      "Café instantáneo, azúcar de caña, crema no láctea y extracto de Cordyceps.",
/*     transparency: SOBRE_21G,
 */    category: "caja",
    presentation: "20 sobres x 21 g",
    netWeight: "420 g",
    publicPrice: 375,
    images: [
      {
        src: "/products/cordycepscoffe.png",
        alt: "Empaque de DXN Cordyceps Coffee 3 en 1",
      },
    ],
    featured: true,
    inStock: true,
  },
  {
    id: "6",
    slug: "choco-pro-bar",
    name: "Choco Pro Bar",
    focus: "energia",
    tagline: "La barra de las 4 de la tarde. Hecha en Bolivia.",
    description:
      "Una barra de proteína cubierta de chocolate, lista para comer. Su valor no es exótico: es reemplazar el snack de masa de media tarde por uno con proteína, que no te dispara la glucosa y no te deja peor a las 5.",
    highlights: [
      "Barra de proteína con cobertura de chocolate",
      "Producto elaborado en Bolivia",
      "Lista para comer, práctica para llevar",
      "Buena antes o después de entrenar",
    ],
/*     transparency: SIN_FICHA,
 */    category: "caja",
    presentation: "Caja de barras",
    publicPrice: 293,
    images: [
      {
        src: "/products/chocoProBar.png",
        alt: "DXN Choco Pro Bar, barra de proteína con cobertura de chocolate",
      },
    ],
    inStock: true,
  },

  // ────────────────────────── COMBUSTIBLE ─────────────────────────
  {
    id: "7",
    slug: "green-smoothie",
    name: "Green Smoothie",
    focus: "combustible",
    tagline: "Desayuno vegano a base de quinua y avena.",
    description:
      "Mezcla vegetal en polvo para preparar al instante. Lo interesante no es que sea 'verde': es que la quinua y la avena liberan la glucosa lento, así que no tienes el pico y la caída que te da el pan blanco con café a media mañana.",
    highlights: [
      "100 % vegano, de origen vegetal",
      "A base de arroz, quinua, avena y almendra",
      "Carbohidrato de liberación lenta",
      "Se prepara al instante",
    ],
    ingredients:
      "Mezcla en polvo a base de arroz, quinua, avena, almendra, espinaca, apio y menta.",
/*     transparency: SIN_FICHA,
 */    category: "unidad",
    presentation: "Bolsa de 400 g",
    netWeight: "400 g",
    publicPrice: 435,
    images: [
      {
        src: "/products/greeSmoothie.png",
        alt: "DXN Green Smoothie Mix Powder, mezcla vegetal vegana en polvo",
      },
    ],
    inStock: true,
  },
  {
    id: "11",
    slug: "red-smoothie",
    name: "Red Smoothie",
    focus: "combustible",
    tagline: "La versión roja: remolacha, asaí y flor de Jamaica.",
    description:
      "La contraparte frutal del Green Smoothie, con la misma base de arroz, quinua y avena. Cambia los vegetales verdes por remolacha, asaí y flor de Jamaica. Sabor más frutal, misma lógica de glucosa lenta.",
    highlights: [
      "100 % vegano, de origen vegetal",
      "Con remolacha, asaí y flor de Jamaica",
      "Misma base de quinua y avena que el verde",
      "Sabor frutal y refrescante",
    ],
    ingredients:
      "Mezcla en polvo a base de arroz, quinua, avena, almendra, remolacha, asaí y flor de Jamaica.",
/*     transparency: SIN_FICHA,
 */    category: "unidad",
    presentation: "Bolsa de 400 g",
    netWeight: "400 g",
    publicPrice: 435,
    images: [
      {
        src: "/products/redSmoothie.png",
        alt: "DXN Red Smoothie Mix Powder, mezcla vegetal vegana con frutos rojos",
      },
    ],
    inStock: true,
  },
  {
    id: "8",
    slug: "spirulina-coffee",
    name: "Spirulina Coffee",
    focus: "combustible",
    tagline: "Tu café con el aporte nutricional de la spirulina.",
    description:
      "Café instantáneo combinado con spirulina, una cianobacteria rica en proteína y micronutrientes. Es café con un extra nutricional — no es un energizante distinto, y preferimos que lo sepas antes de comprarlo.",
    highlights: [
      "Café combinado con spirulina",
      "Aporte de proteína vegetal y micronutrientes",
      "Práctico e instantáneo",
      "Una forma diferente de tomar tu café",
    ],
    ingredients: "Crema no láctea, azúcar, café instantáneo y spirulina.",
/*     transparency: SOBRE_21G,
 */    category: "caja",
    presentation: "20 sobres x 21 g",
    netWeight: "420 g",
    publicPrice: 381,
    images: [
      {
        src: "/products/spirulinaCoffe.png",
        alt: "DXN Spirulina Coffee, café premezclado con spirulina",
      },
    ],
    inStock: true,
  },
  {
    id: "9",
    slug: "nutriblend-mix",
    name: "NutriBlend Mix",
    focus: "combustible",
    tagline: "Avena, arroz y soya con chía. El desayuno de 30 segundos.",
    description:
      "Mezcla de avena, harina de arroz y soya con semillas de chía. Es el producto más accesible del catálogo y el que resuelve el desayuno cuando no tienes tiempo de nada. Fibra y proteína vegetal en vez de pan blanco.",
    highlights: [
      "Avena, harina de arroz y soya con semillas de chía",
      "El producto más accesible del catálogo",
      "Se prepara al instante",
      "Ideal para el desayuno o como snack",
    ],
    ingredients:
      "Mezcla de avena, harina de arroz y soya con semillas de chía.",
/*     transparency: SIN_FICHA,
 */    category: "unidad",
    presentation: "Bolsa de 300 g",
    netWeight: "300 g",
    publicPrice: 128,
    images: [
      {
        src: "/products/nutriBlendMixx.png",
        alt: "DXN NutriBlend Mix, mezcla de avena, arroz y soya con chía",
      },
    ],
    inStock: true,
  },

  // ────────────────────────── NOCHE Y FAMILIA ─────────────────────
  {
    id: "10",
    slug: "cocozhi",
    name: "Cocozhi",
    focus: "familia",
    tagline: "El de las 8 de la noche. Sin la cafeína del café.",
    description:
      "Bebida de cacao con extracto de Ganoderma. Su ventaja real es simple: no tiene la cafeína del café, así que puedes tomarlo de noche sin que te desvele. Es el que toman los chicos y el que convierte la merienda en algo de toda la casa.",
    highlights: [
      "Chocolate caliente con Ganoderma",
      "Sin la cafeína del café: sirve para la noche",
      "Cremoso, para compartir con la familia",
      "Sobres prácticos de 32 g",
    ],
    ingredients:
      "Crema, azúcar, leche descremada en polvo, extracto de malta, cacao, extracto de Ganoderma y saborizante (vainilla).",
  /*   transparency:
      "Sobre de 32 g — es el formato con más azúcar de todo el catálogo. No te lo vendemos como un producto saludable: te lo vendemos como el que sí te deja dormir. Aún no tenemos la tabla nutricional oficial de DXN Bolivia; en cuanto la tengamos la publicamos aquí.",
     */category: "caja",
    presentation: "20 sobres x 32 g",
    netWeight: "640 g",
    publicPrice: 431,
    images: [
      { src: "/products/cocozhi.png", alt: "DXN Cocozhi, chocolate con Ganoderma" },
    ],
    featured: true,
    inStock: true,
  },
];
