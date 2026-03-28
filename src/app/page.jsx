import Image from "next/image";
import { ArrowRight, Loader, ShieldCheck, HeartHandshake, Award } from "lucide-react";
import Link from "next/link";
import { fetchProperties } from "@/lib/fetchProperties";
import FadeIn from "@/components/FadeIn";
import FeaturedGrid from "./FeaturedGrid";

export default async function HomePage() {
  const allProperties = await fetchProperties();
  const featured = allProperties.filter((p) => p.isFeatured).slice(0, 3);
  const featuredProperties = featured.length > 0 ? featured : allProperties.slice(0, 3);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[100svh] flex items-center justify-center p-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="Luxury Real Estate Chiapas"
            fill
            priority
            quality={85}
            sizes="100vw"
            className="object-cover scale-105 animate-zoom-out"
          />
          <div className="absolute inset-0 bg-remax-navy/50 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA] via-[#FAFAFA]/10 to-transparent h-full" />
        </div>

        <div className="relative z-10 w-full max-w-5xl mt-20 md:mt-0 flex flex-col items-center">
          <FadeIn delay={200} className="text-center max-w-4xl w-full mx-auto animate-float px-6">
            <span className="inline-block bg-remax-red text-white text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-6 shadow-lg">
              RE/MAX Integral
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight drop-shadow-xl">
              Jessi Narcia
            </h1>
            <p className="text-lg md:text-2xl text-white/90 font-light mb-10 max-w-2xl mx-auto drop-shadow-md">
              Tu Asesora Inmobiliaria de Confianza en todo México. Decisiones
              seguras para tu patrimonio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/portafolio"
                className="bg-remax-red text-white px-8 py-4 rounded-full font-medium hover:bg-[#b00320] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-center"
              >
                Explorar Propiedades
              </Link>
              <Link
                href="/contacto"
                className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-medium border border-white/20 hover:bg-white/20 transition-all shadow-sm hover:shadow-md text-center"
              >
                Agendar Asesoría
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* VALUE PROP SECTION */}
      <section className="py-24 px-6 relative z-10 -mt-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-6">
            <FadeIn
              delay={100}
              className="glass bg-white/70 p-10 rounded-3xl hover:-translate-y-2 transition-transform duration-500"
            >
              <div className="w-14 h-14 mb-6 rounded-2xl bg-remax-navy/5 flex items-center justify-center text-remax-red">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-serif mb-3 text-remax-navy">
                Seguridad Total
              </h3>
              <p className="text-gray-600 font-light leading-relaxed text-sm">
                Acompañamiento integral y transparente. Protegemos tu patrimonio
                en cada etapa del proceso legal y comercial.
              </p>
            </FadeIn>
            <FadeIn
              delay={200}
              className="glass bg-white/70 p-10 rounded-3xl hover:-translate-y-2 transition-transform duration-500"
            >
              <div className="w-14 h-14 mb-6 rounded-2xl bg-remax-navy/5 flex items-center justify-center text-remax-red">
                <HeartHandshake size={28} />
              </div>
              <h3 className="text-xl font-serif mb-3 text-remax-navy">
                Trato Humano
              </h3>
              <p className="text-gray-600 font-light leading-relaxed text-sm">
                Atención personalizada y cercana. No solo vemos propiedades,
                entendemos historias y proyectos de vida.
              </p>
            </FadeIn>
            <FadeIn
              delay={300}
              className="glass bg-white/70 p-10 rounded-3xl hover:-translate-y-2 transition-transform duration-500"
            >
              <div className="w-14 h-14 mb-6 rounded-2xl bg-remax-navy/5 flex items-center justify-center text-remax-red">
                <Award size={28} />
              </div>
              <h3 className="text-xl font-serif mb-3 text-remax-navy">
                Respaldo RE/MAX
              </h3>
              <p className="text-gray-600 font-light leading-relaxed text-sm">
                Con el poder de la red inmobiliaria más grande, garantizamos
                resultados efectivos y exposición máxima.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FEATURED PROPERTIES */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <p className="text-sm font-medium tracking-widest text-remax-red uppercase mb-3">
                Colección Exclusiva
              </p>
              <h2 className="text-4xl md:text-5xl font-serif text-remax-navy">
                Propiedades Destacadas
              </h2>
            </div>
            <Link
              href="/portafolio"
              className="group flex items-center gap-2 text-sm font-medium text-remax-navy bg-white/50 px-6 py-3 rounded-full hover:bg-white transition-colors shadow-sm"
            >
              Ver Catálogo{" "}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          <FeaturedGrid properties={featuredProperties} />
        </div>
      </section>
    </>
  );
}
