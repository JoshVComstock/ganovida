import { CSSProperties } from "react";

interface MaterialIconProps {
  /** Nombre del ícono de Material Symbols (ej. "search", "shopping_bag") */
  name: string;
  className?: string;
  style?: CSSProperties;
}

/**
 * Ícono de Material Symbols Outlined.
 * La hoja de estilos de la fuente se carga en globals.css.
 */
export default function MaterialIcon({
  name,
  className = "",
  style,
}: MaterialIconProps) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={style}
      aria-hidden="true"
    >
      {name}
    </span>
  );
}
