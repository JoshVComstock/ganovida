import MaterialIcon from "@/components/ui/MaterialIcon";
import ProductImage from "@/components/ui/ProductImage";
import { ganodermaCover, ganodermaGallery } from "@/data/media";

/**
 * Sección educativa sobre el Ganoderma (el ingrediente que caracteriza a los
 * productos DXN): portada grande + explicación corta + fotos + puntos clave.
 *
 * IMPORTANTE: redactada sin afirmaciones médicas. Se habla de tradición,
 * hábito y bienestar — nunca de curar, tratar o prevenir enfermedades.
 * Los textos e imágenes salen de src/data/media.ts.
 */
const points = [
  {
    icon: "history",
    title: "Tradición milenaria",
    text: "Usado desde hace más de 2.000 años en la tradición asiática, donde se lo conoce como el hongo de la vitalidad.",
  },
  {
    icon: "coffee",
    title: "Sin cambiar tu hábito",
    text: "No tienes que cambiar tu rutina. Sigue siendo el café de cada mañana, ahora con Ganoderma.",
  },
  {
    icon: "eco",
    title: "Cultivado por DXN",
    text: "DXN cultiva su propio Ganoderma y controla el proceso desde el cultivo hasta el producto final.",
  },
  {
    icon: "self_improvement",
    title: "Un ritual diario",
    text: "El bienestar entendido como un hábito constante y disfrutable, no como una promesa milagrosa.",
  },
];

export default function GanodermaSection() {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      {/* Portada grande con texto encima */}
      <div className="relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-[21/9] overflow-hidden mb-12 md:mb-16">
        <ProductImage
          src={ganodermaCover.src}
          alt={ganodermaCover.alt}
          className="w-full h-full"
          sizes="100vw"
        />
        {/* Degradado para que el texto siempre se lea */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-primary/10" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 lg:p-16">
          <span className="font-label-caps text-[10px] md:text-label-caps text-on-primary/70 mb-3 block">
            EL INGREDIENTE
          </span>
          <h2 className="font-display-lg text-[28px] sm:text-[40px] lg:text-display-lg text-on-primary mb-4 leading-tight max-w-3xl">
            ¿Qué es el Ganoderma?
          </h2>
          <p className="font-body-md md:font-body-lg text-body-md md:text-body-lg text-on-primary/90 max-w-2xl leading-relaxed">
            También llamado <em>Reishi</em> o <em>Lingzhi</em>, es un hongo que
            la tradición asiática valora desde hace siglos. DXN lo cultiva y lo
            integra en su café: la misma taza de siempre, con un ingrediente que
            marca la diferencia.
          </p>
        </div>
      </div>

      {/* Fotos relacionadas */}
      <div className="grid grid-cols-3 gap-4 md:gap-gutter mb-12 md:mb-16">
        {ganodermaGallery.map((image) => (
          <figure key={image.src} className="group">
            <div className="aspect-square overflow-hidden mb-3">
              <ProductImage
                src={image.src}
                alt={image.alt}
                className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 33vw, 25vw"
              />
            </div>
            {image.caption && (
              <figcaption className="font-label-caps text-[10px] md:text-label-caps text-secondary uppercase text-center">
                {image.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      {/* Puntos clave */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-gutter">
        {points.map((point) => (
          <div key={point.title} className="flex flex-col gap-2">
            <MaterialIcon name={point.icon} className="text-3xl text-primary" />
            <h3 className="font-headline-sm text-lg text-primary">
              {point.title}
            </h3>
            <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
              {point.text}
            </p>
          </div>
        ))}
      </div>

      {/* Nota legal — protege frente a claims de salud */}
      <p className="font-body-md text-xs text-secondary opacity-70 mt-10 leading-relaxed max-w-3xl">
        Los productos DXN son alimentos y suplementos alimenticios. No sustituyen
        una dieta equilibrada ni un tratamiento médico.
      </p>
    </section>
  );
}
