const stats = [
  { value: "100%", label: "Original DXN" },
  { value: "Delivery", label: "A domicilio" },
  { value: "WhatsApp", label: "Atención directa" },
];

/** Banner de filosofía de marca (fondo primary). */
export default function PhilosophyStatement() {
  return (
    <section className="bg-primary py-20 md:py-32 text-on-primary">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
        <span className="font-label-caps text-[10px] md:text-label-caps tracking-[0.2em] md:tracking-[0.3em] opacity-60 mb-6 md:mb-8 block">
          NUESTRA FILOSOFÍA
        </span>
        <blockquote className="font-display-lg text-[28px] md:text-display-lg max-w-4xl mx-auto leading-tight italic">
          &ldquo;Creemos que el ritual diario del café debe nutrir no solo el
          espíritu, sino también el cuerpo.&rdquo;
        </blockquote>

        <div className="mt-12 md:mt-16 grid grid-cols-3 md:flex md:justify-center gap-2 md:gap-12 items-center opacity-80 md:opacity-60">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center ${
                i === 1 ? "border-x md:border-x-0 border-on-primary/20" : ""
              } md:flex md:items-center md:gap-12`}
            >
              <div>
                <span className="font-display-lg text-2xl md:text-[48px] block">
                  {stat.value}
                </span>
                <span className="font-label-caps text-[8px] md:text-label-caps uppercase">
                  {stat.label}
                </span>
              </div>
              {i < stats.length - 1 && (
                <div className="hidden md:block w-px h-12 bg-on-primary/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
