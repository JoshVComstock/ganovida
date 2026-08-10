/** Bloque de suscripción al newsletter. */
export default function Newsletter() {
  return (
    <section className="bg-surface-container-low py-16 md:py-24 border-t border-outline-variant">
      <div className="max-w-2xl mx-auto px-margin-mobile md:px-margin-desktop text-center">
        <h2 className="font-headline-sm text-xl md:text-headline-sm text-primary mb-3 md:mb-4">
          Únete a nuestra comunidad
        </h2>
        <p className="font-body-md text-sm md:text-body-md text-on-surface-variant mb-8 md:mb-10">
          Suscríbete para recibir noticias sobre lanzamientos exclusivos y
          consejos de bienestar.
        </p>
        <form className="flex flex-col sm:flex-row gap-3 sm:gap-0 sm:border border-outline focus-within:border-primary transition-colors">
          <input
            className="flex-grow px-5 md:px-6 py-4 bg-white sm:bg-transparent border border-outline-variant sm:border-none focus:outline-none focus:ring-0 font-body-md text-sm md:text-base"
            placeholder="Correo electrónico"
            required
            type="email"
          />
          <button
            className="bg-primary text-on-primary px-8 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-on-primary-fixed-variant transition-colors"
            type="submit"
          >
            Suscribirse
          </button>
        </form>
      </div>
    </section>
  );
}
