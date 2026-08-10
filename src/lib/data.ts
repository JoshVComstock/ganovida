import {
  products,
  focusGroups,
  type Category,
  type FocusKey,
  type Product,
} from "@/data/products";

/**
 * Capa de datos abstraída. Hoy lee del array tipado en /data.
 * TODO (Fase 2): reemplazar el cuerpo de estas funciones por consultas a la
 * base de datos, sin tocar los componentes que las consumen.
 */

export function getProducts(): Product[] {
  return products;
}

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

/** ¿Es un kit (combinación de productos) y no un producto suelto? */
export function isKit(product: Product): boolean {
  return product.focus === "kits";
}

/** Solo los kits. */
export function getKits(): Product[] {
  return products.filter(isKit);
}

/** Solo los productos sueltos (sin kits). */
export function getSingleProducts(): Product[] {
  return products.filter((p) => !isKit(p));
}

/** Kits destacados para el home. */
export function getFeaturedKits(limit = 3): Product[] {
  return getKits()
    .filter((p) => p.featured)
    .slice(0, limit);
}

/** Productos sueltos destacados para el home. */
export function getFeaturedProducts(limit = 4): Product[] {
  return getSingleProducts()
    .filter((p) => p.featured)
    .slice(0, limit);
}

export function getProductsByCategory(category: Category): Product[] {
  return products.filter((p) => p.category === category);
}

/** Productos agrupados por enfoque, en el orden de `focusGroups`. */
export function getProductsByFocus(): {
  key: FocusKey;
  label: string;
  description: string;
  items: Product[];
}[] {
  return focusGroups
    .map((group) => ({
      ...group,
      items: products.filter((p) => p.focus === group.key),
    }))
    .filter((group) => group.items.length > 0);
}

/**
 * Productos que incluye un kit, ya resueltos y contados.
 * Devuelve [] si el producto no es un kit.
 */
export function getKitItems(
  product: Product,
): { product: Product; quantity: number }[] {
  if (!product.includes?.length) return [];

  const counts = new Map<string, number>();
  for (const slug of product.includes) {
    counts.set(slug, (counts.get(slug) ?? 0) + 1);
  }

  return [...counts.entries()].flatMap(([slug, quantity]) => {
    const item = getProduct(slug);
    return item ? [{ product: item, quantity }] : [];
  });
}

/**
 * Productos relacionados. Nunca devuelve kits: desde una ficha queremos
 * llevar al cliente a otros productos concretos.
 */
export function getRelatedProducts(slug: string, limit = 3): Product[] {
  const current = getProduct(slug);
  const pool = getSingleProducts().filter((p) => p.slug !== slug);
  if (!current) return pool.slice(0, limit);

  // Desde un kit, mostramos lo que el kit incluye.
  if (isKit(current)) {
    const included = getKitItems(current).map((i) => i.product);
    const rest = pool.filter((p) => !included.some((i) => i.slug === p.slug));
    return [...included, ...rest].slice(0, limit);
  }

  const sameFocus = pool.filter((p) => p.focus === current.focus);
  const others = pool.filter((p) => p.focus !== current.focus);
  return [...sameFocus, ...others].slice(0, limit);
}

/** ¿El producto tiene precio público confirmado? (0 = por confirmar) */
export function hasPrice(product: Product): boolean {
  return product.publicPrice > 0;
}
