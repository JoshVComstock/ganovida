import { NextResponse } from "next/server";

/**
 * POST /api/orders — pedidos.
 *
 * Fase 1: placeholder. Los pedidos se cierran por WhatsApp.
 * TODO (Fase 2):
 *   - Registrar el pedido en la base de datos.
 *   - Asociar el pedido al código DXN para el cálculo de puntos/volumen.
 *   - Notificar al negocio (correo / WhatsApp Business API).
 */
export async function POST() {
  return NextResponse.json({
    ok: true,
    note: "Placeholder — los pedidos se gestionan por WhatsApp en Fase 1.",
  });
}
