import Link from "next/link";
import MaterialIcon from "@/components/ui/MaterialIcon";
import ProductImage from "@/components/ui/ProductImage";
import { originImage } from "@/data/media";

/** Sección editorial "Compromiso con el Origen". */
export default function OriginCommitment() {
  return (
    <section className="py-20 md:py-40">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-gutter items-center">
        <div className="md:col-span-7">
          <div className="relative aspect-video overflow-hidden">
            <ProductImage
              src={originImage.src}
              alt={originImage.alt}
              className="w-full h-full"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </div>
        </div>

        <div className="md:col-span-4 md:col-start-9 text-center md:text-left px-4 md:px-0">
          <h2 className="font-headline-sm md:font-headline-md text-headline-sm md:text-headline-md text-primary mb-4 md:mb-6">
            Productos originales DXN
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6 md:mb-8 leading-relaxed">
            En GanoVida no fabricamos los productos: los elabora DXN, una
            empresa internacional reconocida por su café y sus productos con
            Ganoderma. Nosotros ponemos la marca, la atención cercana y el
            delivery para que compres original y con confianza.
          </p>
          <Link
            href="/nosotros"
            className="font-label-caps text-label-caps text-primary flex items-center justify-center md:justify-start gap-2 group"
          >
            CONOCER MÁS
            <MaterialIcon
              name="arrow_forward"
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
