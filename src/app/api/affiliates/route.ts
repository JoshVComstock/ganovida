import { NextResponse } from "next/server";

/**
 * POST /api/affiliates — registro de afiliados.
 *
 * Fase 1: valida y responde OK (el frontend usa WhatsApp por ahora).
 * TODO (Fase 2):
 *   - Guardar el registro en la base de datos.
 *   - Enviar correo de bienvenida con el código DXN generado.
 *   - Dar de alta en el back office DXN (eWorld) con el código de patrocinador.
 */
export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Validación mínima de campos obligatorios.
    const required = ["fullName", "idNumber", "phone", "email", "city"];
    const missing = required.filter((field) => !data?.[field]);
    if (missing.length > 0) {
      return NextResponse.json(
        { ok: false, error: `Faltan campos: ${missing.join(", ")}` },
        { status: 400 },
      );
    }

    // TODO: persistir en DB y enviar correo de bienvenida.

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Solicitud inválida" },
      { status: 400 },
    );
  }
}
