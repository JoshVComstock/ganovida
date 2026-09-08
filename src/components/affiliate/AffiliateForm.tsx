"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import MaterialIcon from "@/components/ui/MaterialIcon";
import { whatsappAffiliateLink, type AffiliateFormData } from "@/lib/whatsapp";

const countries = [
  "Bolivia",
  "Argentina",
  "Chile",
  "Perú",
  "Colombia",
  "México",
  "España",
];

/**
 * Estilo base de los campos. `text-base` (16px) es intencional: si el input
 * mide menos de 16px, Safari en iPhone hace zoom automático al enfocarlo y
 * descuadra toda la página.
 */
const inputClasses =
  "w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 font-body-md text-base text-primary placeholder:text-secondary/60 transition-colors hover:border-outline focus:outline-none focus:border-primary";

const emptyForm: AffiliateFormData & { country: string; terms: boolean } = {
  fullName: "",
  idNumber: "",
  birthDate: "",
  phone: "",
  email: "",
  city: "",
  address: "",
  country: "Bolivia",
  terms: false,
};

/**
 * Formulario de registro de afiliado.
 * Sin backend aún: al enviar arma un mensaje de WhatsApp con los datos para
 * dar de alta al afiliado en el back office de DXN (eWorld).
 * TODO (Fase 2): enviar a POST /api/affiliates y guardar en DB.
 */
export default function AffiliateForm() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const update = (field: keyof typeof form, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.fullName.trim()) next.fullName = "Ingresa tu nombre completo.";
    if (!form.idNumber.trim())
      next.idNumber = "Ingresa tu cédula de identidad.";
    if (!form.birthDate) next.birthDate = "Ingresa tu fecha de nacimiento.";
    if (!/^[0-9+\s]{7,}$/.test(form.phone))
      next.phone = "Ingresa un WhatsApp válido.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Ingresa un correo válido.";
    if (!form.city.trim()) next.city = "Ingresa tu ciudad.";
    if (!form.address.trim()) next.address = "Ingresa tu dirección.";
    if (!form.terms) next.terms = "Debes aceptar los términos.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      // Lleva al primer campo con error, si no se ve en pantalla.
      document
        .querySelector<HTMLElement>("[data-error='true']")
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    const link = whatsappAffiliateLink({
      fullName: form.fullName,
      idNumber: form.idNumber,
      birthDate: form.birthDate,
      phone: form.phone,
      email: form.email,
      city: `${form.city} (${form.country})`,
      address: form.address,
    });
    window.open(link, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <section
      id="formulario"
      className="scroll-mt-28 bg-surface-container-low border-t border-outline-variant"
    >
      <div className="max-w-[720px] mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
        {sent ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-whatsapp/10 flex items-center justify-center">
              <MaterialIcon
                name="check_circle"
                className="text-4xl text-whatsapp"
              />
            </div>
            <h2 className="font-headline-sm text-headline-sm text-primary mb-3">
              ¡Solicitud enviada!
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8 max-w-md mx-auto">
              Se abrió WhatsApp con tus datos. Envíanos ese mensaje y te damos
              de alta como afiliado con tu propio código DXN.
            </p>
            <button
              type="button"
              onClick={() => {
                setForm(emptyForm);
                setSent(false);
              }}
              className="font-label-caps text-label-caps uppercase text-primary border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors"
            >
              Enviar otra solicitud
            </button>
          </div>
        ) : (
          <>
            <header className="mb-10 md:mb-12">
              <span className="font-label-caps text-label-caps text-secondary mb-2 block">
                REGISTRO
              </span>
              <h2 className="font-headline-md text-2xl md:text-headline-md text-primary mb-3">
                Tus datos
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Van directo al registro oficial de DXN, así que tienen que ser
                reales. Al enviar se abre WhatsApp con el mensaje ya armado.
              </p>
            </header>

            <form onSubmit={handleSubmit} noValidate className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <Field
                  name="name"
                  autoComplete="name"
                  label="Nombre completo"
                  error={errors.fullName}
                  value={form.fullName}
                  onChange={(v) => update("fullName", v)}
                  placeholder="Ej. Javier Montenegro"
                />
                <Field
                  name="idNumber"
                  label="Cédula de identidad"
                  inputMode="numeric"
                  error={errors.idNumber}
                  value={form.idNumber}
                  onChange={(v) => update("idNumber", v)}
                  placeholder="Ej. 1234567"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <Field
                  name="bday"
                  autoComplete="bday"
                  label="Fecha de nacimiento"
                  error={errors.birthDate}
                  type="date"
                  value={form.birthDate}
                  onChange={(v) => update("birthDate", v)}
                />
                <Field
                  name="tel"
                  autoComplete="tel"
                  label="Teléfono / WhatsApp"
                  error={errors.phone}
                  type="tel"
                  inputMode="tel"
                  value={form.phone}
                  onChange={(v) => update("phone", v)}
                  placeholder="Ej. 70000000"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <Field
                  name="email"
                  autoComplete="email"
                  label="Correo electrónico"
                  error={errors.email}
                  type="email"
                  inputMode="email"
                  value={form.email}
                  onChange={(v) => update("email", v)}
                  placeholder="javier@ejemplo.com"
                />
                <div>
                  <label
                    htmlFor="country"
                    className="font-label-caps text-label-caps text-on-surface-variant block mb-2 uppercase"
                  >
                    País
                  </label>
                  <div className="relative">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className={`${inputClasses} appearance-none pr-8 cursor-pointer`}
                      value={form.country}
                      onChange={(e) => update("country", e.target.value)}
                    >
                      {countries.map((c) => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
                    <MaterialIcon
                      name="expand_more"
                      className="absolute right-0 bottom-3 text-secondary pointer-events-none text-[20px]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <Field
                  name="city"
                  autoComplete="address-level2"
                  label="Ciudad"
                  error={errors.city}
                  value={form.city}
                  onChange={(v) => update("city", v)}
                  placeholder="Ej. Cochabamba"
                />
                <Field
                  name="address"
                  autoComplete="street-address"
                  label="Dirección"
                  error={errors.address}
                  value={form.address}
                  onChange={(v) => update("address", v)}
                  placeholder="Calle, número, zona"
                />
              </div>

              {/* Términos */}
              <div data-error={Boolean(errors.terms)} className="pt-2">
                <div className="flex items-start gap-3">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    checked={form.terms}
                    onChange={(e) => update("terms", e.target.checked)}
                    aria-invalid={Boolean(errors.terms)}
                    className="mt-1 w-5 h-5 shrink-0 accent-[#182519] cursor-pointer"
                  />
                  <label
                    htmlFor="terms"
                    className="font-body-md text-body-md text-on-surface-variant leading-relaxed cursor-pointer"
                  >
                    Acepto los{" "}
                    <Link
                      href="/terminos"
                      target="_blank"
                      className="text-primary border-b border-primary hover:text-secondary hover:border-secondary transition-colors"
                    >
                      términos y condiciones
                    </Link>{" "}
                    y entiendo que mis datos se envían a DXN para crear mi
                    registro de distribuidor independiente.
                  </label>
                </div>
                {errors.terms && (
                  <p className="font-body-md text-sm text-error mt-2 ml-8">
                    {errors.terms}
                  </p>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 sm:px-12 py-5 bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-widest transition-all duration-300 hover:bg-primary-container active:scale-[0.98]"
                >
                  <MaterialIcon name="chat" className="text-[18px]" />
                  Enviar por WhatsApp
                </button>

                <p className="font-body-md text-sm text-secondary mt-6 leading-relaxed">
                  El registro es sin costo y no te obliga a vender nada. Ser
                  afiliado no garantiza ningún ingreso: lo que obtienes con
                  seguridad es el precio de afiliado.
                </p>
              </div>
            </form>
          </>
        )}
      </div>
    </section>
  );
}

/** Campo de texto reutilizable con etiqueta y error. */
function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  inputMode,
  autoComplete,
  error,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  inputMode?: "numeric" | "tel" | "email" | "text";
  autoComplete?: string;
  error?: string;
}) {
  const errorId = error ? `${name}-error` : undefined;

  return (
    <div data-error={Boolean(error)}>
      <label
        htmlFor={name}
        className="font-label-caps text-label-caps text-on-surface-variant block mb-2 uppercase"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        inputMode={inputMode}
        autoComplete={autoComplete}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={errorId}
        className={`${inputClasses} ${error ? "border-error" : ""}`}
      />
      {error && (
        <p id={errorId} className="font-body-md text-sm text-error mt-2">
          {error}
        </p>
      )}
    </div>
  );
}
