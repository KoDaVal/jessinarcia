"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import PropertyCard from "@/components/PropertyCard";
import { usePropertyModal } from "@/components/PropertyModalProvider";

const FILTERS = [
  { id: "todas", label: "Todas" },
  { id: "residencial", label: "Residencial" },
  { id: "comercial", label: "Comercial" },
  { id: "renta", label: "Renta" },
];

export default function PropertiesClient({ initialProperties }) {
  const [filter, setFilter] = useState("todas");
  const [visibleCount, setVisibleCount] = useState(6);
  const { openModal } = usePropertyModal();

  const filteredProperties = useMemo(() => {
    if (filter === "todas") return initialProperties;
    if (filter === "renta")
      return initialProperties.filter((p) => p.operationType === "Renta");
    return initialProperties.filter(
      (p) => p.category === filter && p.operationType !== "Renta"
    );
  }, [filter, initialProperties]);

  const visibleProperties = filteredProperties.slice(0, visibleCount);

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif text-remax-navy mb-6">
            Portafolio Inmobiliario
          </h1>
          <p className="text-gray-500 font-light max-w-2xl text-lg">
            Explora nuestra selección de propiedades en venta y renta. Opciones
            que se adaptan a tu estilo de vida y objetivos de inversión.
          </p>
        </div>

        {/* Modern Filter Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => {
                setFilter(f.id);
                setVisibleCount(6);
              }}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-sm ${
                filter === f.id
                  ? "bg-remax-navy text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {visibleProperties.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visibleProperties.map((p, i) => (
                <FadeIn key={p.id} delay={(i % 6) * 100}>
                  <PropertyCard {...p} onClick={() => openModal(p)} />
                </FadeIn>
              ))}
            </div>

            {visibleCount < filteredProperties.length && (
              <div className="mt-16 text-center">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 6)}
                  className="glass px-8 py-3 rounded-full text-sm font-medium text-remax-navy hover:bg-white transition-colors"
                >
                  Mostrar más propiedades
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-32 glass rounded-3xl max-w-2xl mx-auto">
            <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-serif text-remax-navy mb-2">
              Sin resultados
            </h3>
            <p className="text-gray-500 font-light">
              No encontramos propiedades en esta categoría por el momento.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
