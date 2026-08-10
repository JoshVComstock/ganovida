import Link from "next/link";
import MaterialIcon from "@/components/ui/MaterialIcon";
import { footerColumns } from "@/data/navigation";
import { siteConfig } from "@/lib/config";
import { whatsappContactLink } from "@/lib/whatsapp";

/** Pie de página global. Responsive: 1/2 columnas en mobile, 4 en desktop. */
export default function Footer() {
  return (
    <footer className="w-full py-16 md:py-20 bg-surface-container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-left">
        {/* Marca e info */}
        <div className="col-span-2 md:col-span-1 text-center md:text-left mb-4 md:mb-0">
          <span className="font-headline-sm text-xl md:text-headline-sm text-primary block mb-4 md:mb-6">
            GanoVida
          </span>
          <p className="font-body-md text-xs md:text-base text-on-surface-variant opacity-80">
            Tu tienda de café y bienestar con Ganoderma. Vendemos productos
            originales DXN con la marca, el servicio y el delivery de GanoVida.
          </p>
        </div>

        {/* Columnas de enlaces */}
        {footerColumns.map((col) => (
          <div key={col.title}>
            <h4 className="font-label-caps text-[10px] md:text-label-caps text-primary mb-4 md:mb-6 uppercase">
              {col.title}
            </h4>
            <ul className="space-y-2 md:space-y-4">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    className="font-body-md text-xs md:text-base text-on-surface-variant hover:text-primary transition-colors"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contacto y redes */}
        <div>
          <h4 className="font-label-caps text-[10px] md:text-label-caps text-primary mb-4 md:mb-6 uppercase">
            Síguenos
          </h4>
          <div className="flex gap-3 mb-6">
            <a
              href={siteConfig.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok de GanoVida"
              className="w-10 h-10 border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all"
            >
              <MaterialIcon name="music_note" className="text-[18px]" />
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de GanoVida"
              className="w-10 h-10 border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all"
            >
              <MaterialIcon name="photo_camera" className="text-[18px]" />
            </a>
            <a
              href={whatsappContactLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp de GanoVida"
              className="w-10 h-10 border border-outline-variant flex items-center justify-center hover:bg-whatsapp hover:text-white hover:border-whatsapp transition-all"
            >
              <MaterialIcon name="chat" className="text-[18px]" />
            </a>
          </div>
          <p className="font-body-md text-xs md:text-sm text-on-surface-variant opacity-80">
            Entrega en {siteConfig.delivery.leadTimeLabel} en{" "}
            {siteConfig.delivery.area}, sin costo de envío.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-12 md:mt-20 pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-body-md text-body-md text-on-surface-variant opacity-70 text-center">
          © {new Date().getFullYear()} GanoVida. Todos los derechos reservados.
        </span>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <Link
            href="/transparencia"
            className="font-body-md text-body-md text-on-surface-variant opacity-70 hover:opacity-100 transition-opacity"
          >
            Transparencia
          </Link>
          <Link
            href="/terminos"
            className="font-body-md text-body-md text-on-surface-variant opacity-70 hover:opacity-100 transition-opacity"
          >
            Términos y condiciones
          </Link>
        </div>
      </div>

      {/* Aviso legal: GanoVida es la marca/tienda; los productos son DXN. */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-6 text-center">
        <p className="font-body-md text-xs text-on-surface-variant opacity-60 max-w-2xl mx-auto">
          {siteConfig.legalNote} GanoVida es una marca y tienda independiente;
          no es el sitio oficial de DXN. Todas las marcas de productos
          pertenecen a DXN. Los productos DXN son alimentos y suplementos
          alimenticios: no sustituyen una dieta equilibrada ni un tratamiento
          médico, y no están destinados a diagnosticar, tratar, curar ni
          prevenir ninguna enfermedad.
        </p>
      </div>
    </footer>
  );
}
