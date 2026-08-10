"use client";

import { FormEvent, useState } from "react";
import MaterialIcon from "@/components/ui/MaterialIcon";
import { whatsappAffiliateLink, type AffiliateFormData } from "@/lib/whatsapp";

const countries = ["Bolivia", "Argentina", "Chile", "Perú", "Colombia", "México", "España"];

const inputClasses =
  "w-full bg-transparent border-0 border-b border-outline-variant py-4 px-0 font-body-md text-primary transition-colors group-hover:border-primary focus:outline-none focus:border-primary";

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
 * que Josh dé de alta al afiliado en el back office de DXN (eWorld).
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
    if (!form.idNumber.trim()) next.idNumber = "Ingresa tu cédula de identidad.";
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
    if (!validate()) return;

    // Abre WhatsApp con los datos del afiliado.
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

  if (sent) {
    return (
      <div className="max-w-[640px] mx-auto text-center py-16">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-whatsapp/10 flex items-center justify-center">
          <MaterialIcon name="check_circle" className="text-4xl text-whatsapp" />
        </div>
        <h3 className="font-headline-sm text-headline-sm text-primary mb-3">
          ¡Solicitud enviada!
        </h3>
        <p className="font-body-md text-body-md text-secondary mb-8">
          Se abrió WhatsApp con tus datos. Envíanos el mensaje y te daremos de
          alta como afiliado con tu propio código DXN.
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(emptyForm);
            setSent(false);
          }}
          className="font-label-caps text-label-caps uppercase text-primary border-b border-primary pb-1"
        >
          Enviar otra solicitud
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <Field
          label="NOMBRE COMPLETO"
          error={errors.fullName}
          value={form.fullName}
          onChange={(v) => update("fullName", v)}
          placeholder="Ej. Javier Montenegro"
        />
        <Field
          label="CÉDULA DE IDENTIDAD"
          error={errors.idNumber}
          value={form.idNumber}
          onChange={(v) => update("idNumber", v)}
          placeholder="Ej. 1234567"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <Field
          label="FECHA DE NACIMIENTO"
          error={errors.birthDate}
          type="date"
          value={form.birthDate}
          onChange={(v) => update("birthDate", v)}
        />
        <Field
          label="TELÉFONO / WHATSAPP"
          error={errors.phone}
          type="tel"
          value={form.phone}
          onChange={(v) => update("phone", v)}
          placeholder="Ej. 70000000"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <Field
          label="CORREO ELECTRÓNICO"
          error={errors.email}
          type="email"
          value={form.email}
          onChange={(v) => update("email", v)}
          placeholder="javier@ejemplo.com"
        />
        <div className="relative group">
          <label className="font-label-caps text-label-caps text-on-surface-variant block mb-2">
            PAÍS
          </label>
          <select
            className={`${inputClasses} appearance-none`}
            value={form.country}
            onChange={(e) => update("country", e.target.value)}
          >
            {countries.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <Field
          label="CIUDAD"
          error={errors.city}
          value={form.city}
          onChange={(v) => update("city", v)}
          placeholder="Ej. Santa Cruz"
        />
        <Field
          label="DIRECCIÓN"
          error={errors.address}
          value={form.address}
          onChange={(v) => update("address", v)}
          placeholder="Calle, número, zona"
        />
      </div>

      <div>
        <div className="flex items-center space-x-3 py-2">
          <input
            id="terms"
            type="checkbox"
            checked={form.terms}
            onChange={(e) => update("terms", e.target.checked)}
            className="w-5 h-5 rounded-none border-outline text-primary focus:ring-0"
          />
          <label htmlFor="terms" className="font-body-md text-on-surface-variant text-sm">
            Acepto los términos y condiciones del programa de afiliados.
          </label>
        </div>
        {errors.terms && (
          <p className="font-body-md text-xs text-error mt-1">{errors.terms}</p>
        )}
      </div>

      <div className="pt-4 flex justify-center">
        <button
          type="submit"
          className="group inline-flex items-center gap-2 px-16 py-6 bg-primary text-on-primary font-label-caps text-label-caps tracking-widest transition-all duration-300 hover:bg-primary-container active:scale-95"
        >
          <MaterialIcon name="chat" className="text-[18px]" />
          <span className="uppercase">Unirse al Programa</span>
        </button>
      </div>
    </form>
  );
}

/** Campo de texto reutilizable con etiqueta y error. */
function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  error,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  error?: string;
}) {
  return (
    <div className="relative group">
      <label className="font-label-caps text-label-caps text-on-surface-variant block mb-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={inputClasses}
      />
      {error && (
        <p className="font-body-md text-xs text-error mt-1">{error}</p>
      )}
    </div>
  );
}
