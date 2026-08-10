import Button from "@/components/ui/Button";
import ProductImage from "@/components/ui/ProductImage";
import { heroImage } from "@/data/media";

/** Sección hero del home. */
export default function Hero() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[85vh] flex flex-col md:flex-row justify-center items-center overflow-hidden bg-surface pt-8 md:pt-0">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full grid grid-cols-1 md:grid-cols-12 items-center gap-gutter">
        {/* Texto */}
        <div className="md:col-span-6 z-10 hero-reveal order-2 md:order-1 mt-8 md:mt-0 text-center md:text-left">
          <span className="font-label-caps text-[10px] md:text-label-caps text-secondary mb-4 md:mb-6 block">
            PRODUCTOS ORIGINALES DXN · COCHABAMBA
          </span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6 md:mb-8 leading-[1.1]">
            Café con <span className="italic font-normal">Ganoderma</span> para
            los que trabajamos frente a una pantalla.
          </h1>
          <p className="font-body-md md:font-body-lg text-body-md md:text-body-lg text-on-surface-variant max-w-md mb-8 md:mb-12 mx-auto md:mx-0">
            El café de cada día, ahora con Ganoderma. Entrega en Cochabamba en 1
            a 2 días y te decimos lo bueno y lo malo de cada producto,
            empezando por cuánta azúcar tiene.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <Button
              href="/productos"
              variant="solid"
              className="px-8 md:px-12 py-4 md:py-5"
            >
              Ver productos
            </Button>
            <Button
              href="/afiliados"
              variant="outline"
              className="px-8 md:px-12 py-4 md:py-5"
            >
              Quiero precio afiliado
            </Button>
          </div>
        </div>

        {/* Imagen */}
        <div
          className="md:col-span-6 relative h-[350px] md:h-[600px] hero-reveal order-1 md:order-2"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="absolute inset-0 bg-surface-container-low -z-10 transform translate-x-4 translate-y-4 md:translate-x-12 md:translate-y-12" />
          <ProductImage
            src={heroImage.src}
            alt={heroImage.alt}
            className="w-full h-full"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
