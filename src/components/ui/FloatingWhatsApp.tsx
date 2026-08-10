import MaterialIcon from "@/components/ui/MaterialIcon";
import { whatsappContactLink } from "@/lib/whatsapp";

/**
 * Botón flotante de WhatsApp, fijo abajo a la derecha en todas las pantallas.
 * En mobile se eleva para no chocar con la barra de navegación inferior.
 */
export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappContactLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed right-4 bottom-24 md:bottom-6 z-[70] w-14 h-14 rounded-full bg-whatsapp hover:bg-whatsapp-dark text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95"
    >
      <MaterialIcon name="chat" className="text-3xl" />
    </a>
  );
}
