import Link from "next/link";
import MaterialIcon from "@/components/ui/MaterialIcon";

/** Bloque editorial al pie de la ficha de producto (3 columnas). */
export default function ProductArt() {
  return (
    <section className="mt-24 md:mt-40">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-gutter">
        {/* El ingrediente */}
        <div className="bg-surface-container-low p-8 md:p-10 flex flex-col gap-6">
          <MaterialIcon name="eco" className="text-4xl text-primary" />
          <div>
            <h3 className="font-headline-sm text-headline-sm mb-3">
              El Ganoderma
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Un hongo usado desde hace siglos en la tradición asiática, también
              llamado reishi o lingzhi. Es el ingrediente que caracteriza a los
              productos de café de DXN.
            </p>
          </div>
        </div>

        {/* Transparencia */}
        <div className="bg-surface-container-low p-8 md:p-10 flex flex-col gap-6 border-l-2 border-gold-dark">
          <MaterialIcon name="info" className="text-4xl text-gold-dark" />
          <div>
            <h3 className="font-headline-sm text-headline-sm mb-3">
              Lo bueno y lo malo
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4">
              Publicamos cuánta azúcar lleva cada producto, qué dice la
              evidencia de verdad y quién no debería tomarlo. Preferimos que
              decidas con la información completa.
            </p>
            <Link
              href="/transparencia"
              className="font-label-caps text-label-caps text-primary border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors uppercase"
            >
              Ver transparencia
            </Link>
          </div>
        </div>

        {/* Marca DXN */}
        <div className="bg-primary p-8 md:p-10 text-on-primary flex flex-col gap-6">
          <MaterialIcon name="verified_user" className="text-4xl opacity-80" />
          <div>
            <h3 className="font-headline-sm text-headline-sm mb-3">
              Producto original DXN
            </h3>
            <p className="font-body-md text-body-md opacity-80 leading-relaxed mb-4">
              Los productos los elabora DXN, una empresa internacional presente
              en decenas de países. GanoVida te los acerca originales, con
              asesoría y entrega en Cochabamba.
            </p>
            <Link
              href="/afiliados"
              className="font-label-caps text-label-caps border-b border-on-primary/30 pb-1 self-start hover:border-on-primary transition-colors uppercase"
            >
              Ser afiliado
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
