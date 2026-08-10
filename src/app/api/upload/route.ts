import { NextResponse } from "next/server";

/**
 * POST /api/upload — subida de imágenes de producto.
 *
 * Fase 1: placeholder. Las imágenes viven en /public/images/products.
 * TODO (Fase 2): integrar UploadThing o Cloudinary y devolver la URL remota.
 * Recuerda habilitar el host en `images.remotePatterns` de next.config.mjs.
 */
export async function POST() {
  return NextResponse.json({
    ok: true,
    note: "Placeholder — TODO: integrar UploadThing o Cloudinary.",
  });
}
