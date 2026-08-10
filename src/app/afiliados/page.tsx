import AppShell from "@/components/layout/AppShell";
import AffiliateHero from "@/components/affiliate/AffiliateHero";
import AffiliateForm from "@/components/affiliate/AffiliateForm";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Afiliarse a DXN en Bolivia — precio de afiliado",
  description:
    "Te registramos como afiliado DXN sin costo, con tu propio código en eWorld, para que compres a precio de afiliado. Sin obligación de vender. Ser afiliado no garantiza ningún ingreso.",
  alternates: { canonical: "/afiliados" },
};

export default function AfiliadosPage() {
  return (
    <AppShell active="/afiliados">
      <AffiliateHero />
      <AffiliateForm />
    </AppShell>
  );
}
