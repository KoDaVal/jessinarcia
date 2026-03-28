import Link from "next/link";

export const metadata = {
  title: "Página no encontrada",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <p className="text-remax-red text-sm font-medium tracking-widest uppercase mb-4">
          Error 404
        </p>
        <h1 className="text-5xl font-serif text-remax-navy mb-6">
          Página no encontrada
        </h1>
        <p className="text-gray-500 font-light mb-10">
          La página que buscas no existe o ha sido movida. Te invitamos a
          explorar nuestro portafolio de propiedades.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-remax-navy text-white px-8 py-4 rounded-full font-medium hover:bg-remax-red transition-colors"
          >
            Volver al Inicio
          </Link>
          <Link
            href="/portafolio"
            className="bg-white text-remax-navy px-8 py-4 rounded-full font-medium border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            Ver Portafolio
          </Link>
        </div>
      </div>
    </div>
  );
}
