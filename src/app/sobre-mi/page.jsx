import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Sobre Mí",
  description:
    "Conoce a Jessi Narcia, Asesora Inmobiliaria afiliada a RE/MAX Integral en Tuxtla Gutiérrez, Chiapas. Servicio profesional, cercano y transparente.",
  openGraph: {
    title: "Sobre Mí | Jessi Narcia RE/MAX",
    description:
      "Asesora Inmobiliaria con compromiso profesional y trato humano en Chiapas.",
  },
};

export default function SobreMiPage() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <FadeIn className="relative">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden relative z-10 shadow-2xl">
              <Image
                src="/images/jessi-narcia.jpg"
                alt="Jessi Narcia - Asesora Inmobiliaria RE/MAX"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-remax-navy/80 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h2 className="text-3xl font-serif mb-2">Jessi Narcia</h2>
                <p className="text-white/80 font-light text-sm">
                  Asesora Afiliada a RE/MAX Integral
                </p>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-remax-red/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-white rounded-[3rem] z-0 translate-x-4 translate-y-4" />
          </FadeIn>

          <FadeIn delay={200} className="md:pl-8">
            <span className="text-remax-red text-sm font-medium tracking-widest uppercase mb-4 block">
              Conóceme
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-remax-navy mb-8 leading-tight">
              Tu tranquilidad es mi prioridad.
            </h2>

            <div className="space-y-6 text-gray-600 font-light text-lg leading-relaxed mb-10">
              <p>
                Soy Jessi Narcia, Asesora Inmobiliaria afiliada a{" "}
                <strong>Remax Integral</strong>. Mi compromiso es brindarte un
                servicio profesional, cercano y transparente en cada etapa del
                proceso de compra, venta o renta de tu propiedad.
              </p>
              <p>
                Entiendo que una propiedad representa esfuerzo, sueños y
                patrimonio. Por ello, mi objetivo es que tomes decisiones
                informadas y seguras, respaldadas por la experiencia de una
                marca global.
              </p>
            </div>

            <div className="glass bg-white/50 p-6 rounded-2xl border-l-4 border-remax-red">
              <h4 className="font-serif text-xl text-remax-navy mb-2">
                Mi Promesa
              </h4>
              <p className="text-sm text-gray-600 font-light">
                Acompañamiento de principio a fin, garantizando un enfoque en
                seguridad, confianza y resultados tangibles.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
