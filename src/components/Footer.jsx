import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-remax-navy text-white pt-20 pb-10 px-6 relative z-[50] rounded-t-[3rem] mt-10">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <h4 className="font-serif text-3xl mb-4 text-white">
              {CONTACT.name}
            </h4>
            <p className="text-white/60 text-sm font-light leading-relaxed max-w-sm mb-6">
              Asesora Inmobiliaria Afiliada a RE/MAX Integral. Acompañamiento
              profesional, cercano y transparente para cuidar tu patrimonio.
            </p>
            <div className="flex gap-4">
              <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-remax-red transition-colors cursor-pointer">
                <Facebook size={18} />
              </span>
              <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-remax-red transition-colors cursor-pointer">
                <Instagram size={18} />
              </span>
            </div>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <h5 className="text-sm font-medium tracking-widest text-white/40 uppercase mb-6">
              Contacto
            </h5>
            <ul className="space-y-4 text-sm font-light text-white/80">
              <li>
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Phone size={14} className="text-remax-red" />{" "}
                  {CONTACT.displayPhone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail size={14} className="text-remax-red" /> Enviar Correo
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin
                  size={14}
                  className="text-remax-red mt-1 flex-shrink-0"
                />{" "}
                {CONTACT.location}
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h5 className="text-sm font-medium tracking-widest text-white/40 uppercase mb-6">
              Navegación
            </h5>
            <ul className="space-y-3 text-sm font-light text-white/80">
              <li>
                <Link
                  href="/"
                  className="hover:text-remax-red transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/portafolio"
                  className="hover:text-remax-red transition-colors"
                >
                  Portafolio
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre-mi"
                  className="hover:text-remax-red transition-colors"
                >
                  Sobre Mí
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="hover:text-remax-red transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8 text-[11px] text-white/40 uppercase tracking-widest font-medium gap-4">
          <p>
            &copy; {new Date().getFullYear()} {CONTACT.name}. Todos los derechos
            reservados.
          </p>
          <div className="flex items-center gap-2">
            <span>Powered by</span>
            <span className="text-white font-bold">RE/MAX</span>
            <span>Integral</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
