"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MaterialIcon from "@/components/ui/MaterialIcon";

/**
 * Barra de navegación inferior estilo app móvil.
 * Solo visible en mobile (oculta en md+). Reemplaza los enlaces del header.
 */
export default function BottomNav() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-[60] bg-surface/90 backdrop-blur-lg border-t border-outline-variant h-20 flex items-center px-6 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      <div className="flex w-full items-center justify-between">
        {/* Cómo comprar */}
        <Link
          href="/como-comprar"
          className="flex flex-col items-center gap-1 group w-1/3"
        >
          <MaterialIcon
            name="local_shipping"
            className={
              isActive("/como-comprar")
                ? "text-primary"
                : "text-secondary group-active:text-primary"
            }
          />
          <span
            className={`font-label-caps text-[9px] ${
              isActive("/como-comprar")
                ? "text-primary"
                : "text-secondary group-active:text-primary"
            }`}
          >
            COMPRAR
          </span>
        </Link>

        {/* Catálogo (destacado) */}
        <div className="relative -top-6 w-1/3 flex justify-center">
          <Link
            href="/productos"
            className="w-16 h-16 bg-primary rounded-full flex flex-col items-center justify-center shadow-lg transform active:scale-95 transition-transform"
          >
            <MaterialIcon
              name="coffee"
              className="text-on-primary text-3xl"
            />
            <span className="font-label-caps text-[8px] text-on-primary -mt-1">
              CATÁLOGO
            </span>
          </Link>
        </div>

        {/* Afiliados */}
        <Link
          href="/afiliados"
          className="flex flex-col items-center gap-1 group w-1/3"
        >
          <MaterialIcon
            name="group"
            className={
              isActive("/afiliados")
                ? "text-primary"
                : "text-secondary group-active:text-primary"
            }
          />
          <span
            className={`font-label-caps text-[9px] ${
              isActive("/afiliados")
                ? "text-primary"
                : "text-secondary group-active:text-primary"
            }`}
          >
            AFILIADOS
          </span>
        </Link>
      </div>
    </nav>
  );
}
