import MaterialIcon from "@/components/ui/MaterialIcon";

const benefits = [
  {
    icon: "sell",
    title: "Precio preferencial",
    description:
      "Como afiliado compras los productos DXN a precio de afiliado, para tu consumo o para revender. Es el precio más bajo al que se puede acceder.",
  },
  {
    icon: "hub",
    title: "Tu propio código",
    description:
      "Te registramos en el back office de DXN (eWorld) con tu propio código, para que compres directo y lleves tus puntos.",
  },
  {
    icon: "menu_book",
    title: "Materiales y acompañamiento",
    description:
      "Te compartimos lo que usamos nosotros: guías de producto, ideas de contenido y el mapa de a qué hora sirve cada cosa.",
  },
];

/** Hero de la página de afiliados: propuesta de valor, sin promesas de ingresos. */
export default function AffiliateHero() {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-gutter items-start">
      {/* Contenido */}
      <div className="space-y-10 max-w-xl">
        <div>
          <span className="font-label-caps text-label-caps uppercase text-on-surface-variant mb-4 block">
            PROGRAMA DE AFILIADOS
          </span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary leading-none mb-6">
            ¿Buscas el precio más bajo?
          </h1>
          <p className="font-body-lg text-body-lg text-secondary leading-relaxed">
            Entonces no nos compres al precio público: afíliate. El precio de
            afiliado es el precio al que compramos los que estamos registrados,
            y es el más bajo al que se puede acceder. Te registramos sin costo y
            sin obligación de vender nada.
          </p>
        </div>

        <div className="space-y-6">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="flex items-start gap-4">
              <MaterialIcon
                name={benefit.icon}
                className="text-primary text-2xl shrink-0 mt-0.5"
              />
              <div>
                <h3 className="font-body-md font-semibold text-primary uppercase tracking-tight mb-1">
                  {benefit.title}
                </h3>
                <p className="font-body-md text-secondary leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cómo funciona */}
      <div className="lg:pl-8">
        <div className="border border-outline-variant p-8 md:p-10">
          <h2 className="font-headline-sm text-headline-sm text-primary mb-8">
            Cómo funciona
          </h2>
          <ol className="space-y-8">
            {[
              {
                n: "01",
                t: "Llenas el formulario",
                d: "Con tus datos reales, porque van directo al registro oficial de DXN.",
              },
              {
                n: "02",
                t: "Te damos de alta",
                d: "Te registramos en eWorld con tu propio código de distribuidor.",
              },
              {
                n: "03",
                t: "Compras a precio de afiliado",
                d: "Para siempre, no una sola vez. Si además quieres construir algo, te acompañamos.",
              },
            ].map((step) => (
              <li key={step.n} className="flex gap-5">
                <span className="font-display-lg text-2xl text-primary/20 leading-none shrink-0">
                  {step.n}
                </span>
                <div>
                  <h3 className="font-headline-sm text-lg text-primary mb-1">
                    {step.t}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {step.d}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <a
          href="#formulario"
          className="mt-8 w-full inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-8 py-5 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary-container transition-colors"
        >
          <MaterialIcon name="arrow_downward" className="text-[18px]" />
          Quiero registrarme
        </a>

        <p className="font-body-md text-sm text-secondary mt-6 leading-relaxed">
          Ser afiliado no garantiza ningún ingreso. Lo que obtienes con
          seguridad es el precio de afiliado; cualquier resultado más allá de
          eso depende del trabajo de cada persona.
        </p>
      </div>
    </section>
  );
}
