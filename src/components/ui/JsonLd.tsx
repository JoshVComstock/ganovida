interface JsonLdProps {
  /** Objeto schema.org (ver src/lib/seo.ts). */
  data: object | object[];
}

/**
 * Inyecta datos estructurados schema.org en la página.
 *
 * Sirve para dos cosas: que Google muestre resultados enriquecidos
 * (precio, disponibilidad, preguntas frecuentes) y que los motores
 * generativos entiendan de qué trata la página sin tener que adivinar.
 */
export default function JsonLd({ data }: JsonLdProps) {
  const payload = Array.isArray(data) ? data : [data];

  return (
    <>
      {payload.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
