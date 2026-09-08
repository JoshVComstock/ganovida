import AppShell from "@/components/layout/AppShell";
import Hero from "@/components/home/Hero";
import GanodermaSection from "@/components/home/GanodermaSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import VideoSection from "@/components/home/VideoSection";
import PhilosophyStatement from "@/components/home/PhilosophyStatement";
import OriginCommitment from "@/components/home/OriginCommitment";

/**
 * Home.
 *
 * <VideoSection /> se muestra sola cuando el array `videos` de
 * src/data/media.ts tiene contenido. Hoy está vacío a propósito (ver la nota
 * en ese archivo), así que la sección no ocupa espacio.
 */
export default function HomePage() {
  return (
    <AppShell active="/">
      <Hero />
      <div className="h-20 md:h-32" />
      <GanodermaSection />
      <div className="h-20 md:h-32" />
      <FeaturedProducts />
      <div className="h-20 md:h-32" />
      <VideoSection />
      <PhilosophyStatement />
      <OriginCommitment />
    </AppShell>
  );
}
