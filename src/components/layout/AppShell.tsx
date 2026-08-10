import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import BottomNav from "./BottomNav";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

interface AppShellProps {
  /** href activo para resaltar en el header. */
  active?: string;
  children: ReactNode;
}

/**
 * Estructura común de página: header superior, contenido, footer y
 * barra de navegación inferior (mobile). El padding inferior reserva el
 * espacio de la BottomNav para que no tape el footer en mobile.
 */
export default function AppShell({ active, children }: AppShellProps) {
  return (
    <div className="pb-20 md:pb-0">
      <Header active={active} />
      <main>{children}</main>
      <Footer />
      <BottomNav />
      <FloatingWhatsApp />
    </div>
  );
}
