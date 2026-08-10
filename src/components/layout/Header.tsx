"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import MaterialIcon from "@/components/ui/MaterialIcon";
import { navLinks } from "@/data/navigation";
import { whatsappContactLink } from "@/lib/whatsapp";

interface HeaderProps {
  /** Enlace activo actual (href) para resaltar en el nav. */
  active?: string;
}

/**
 * Barra de navegación superior.
 * - Desktop: logo + enlaces + acciones (búsqueda / carrito).
 * - Mobile: logo + acciones. La navegación principal pasa a <BottomNav />.
 */
export default function Header({ active = "/" }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`w-full top-0 sticky z-50 bg-surface/95 backdrop-blur-md border-b border-outline-variant transition-all duration-300 ease-in-out ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div
        className={`flex justify-between items-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto transition-all duration-300 ${
          scrolled ? "h-16 md:h-20" : "h-16 md:h-24"
        }`}
      >
        {/* Marca */}
        <Link href="/" className="flex items-center gap-2 md:gap-3">
          <Image
            src="/logo-icon.png"
            alt="GanoVida"
            width={40}
            height={40}
            priority
            className="h-9 w-9 md:h-11 md:w-11 object-contain"
          />
          <span className="font-headline-md text-[20px] md:text-headline-md tracking-tighter text-primary">
            GanoVida
          </span>
        </Link>

        {/* Enlaces desktop */}
        <nav className="hidden md:flex gap-8 lg:gap-10 items-center">
          {navLinks.map((link) => {
            const isActive = active === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-body-md text-body-md uppercase tracking-widest transition-colors duration-300 ${
                  isActive
                    ? "text-primary border-b border-primary pb-1"
                    : "text-secondary hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Acción principal: los pedidos se cierran por WhatsApp, no hay carrito. */}
        <a
          href={whatsappContactLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Pedir por WhatsApp"
          className="inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white px-3 md:px-6 py-2.5 md:py-3 font-label-caps text-[10px] md:text-label-caps uppercase tracking-widest transition-colors"
        >
          <MaterialIcon name="chat" className="text-[18px]" />
          <span className="hidden sm:inline">Pedir</span>
        </a>
      </div>
    </header>
  );
}
