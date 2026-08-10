interface PlaceholderProps {
  /**
   * Clases de tamaño/proporción (ej. "aspect-[4/5]", "h-full w-full").
   * El placeholder respeta el mismo tamaño que la imagen final.
   */
  className?: string;
  /** Texto/etiqueta opcional visible dentro del recuadro gris. */
  label?: string;
}

/**
 * Recuadro gris que reserva el espacio exacto de una imagen todavía no cargada.
 * Sustituir por <Image> cuando estén las fotos reales.
 */
export default function Placeholder({
  className = "",
  label,
}: PlaceholderProps) {
  return (
    <div
      className={`flex items-center justify-center bg-placeholder text-secondary/50 ${className}`}
      role="img"
      aria-label={label ?? "Imagen pendiente"}
    >
      {label ? (
        <span className="font-label-caps text-label-caps uppercase tracking-widest">
          {label}
        </span>
      ) : null}
    </div>
  );
}
