"use client";

import { useState } from "react";
import Image from "next/image";
import {
  X,
  MapPin,
  Bed,
  Bath,
  Maximize,
  Layout,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { CONTACT } from "@/lib/constants";

export default function PropertyModal({ property, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!property) return null;

  const isCommercial = property.category && property.category.includes("comercial");
  const spacesLabel = isCommercial ? "Espacios" : "Recámaras";
  const spacesIcon = isCommercial ? (
    <Layout className="w-5 h-5 text-gray-400" />
  ) : (
    <Bed className="w-5 h-5 text-gray-400" />
  );

  const hasImages = property.images && property.images.length > 0;
  const currentImage = hasImages ? property.images[currentIndex] : null;

  const nextImage = () =>
    setCurrentIndex((prev) =>
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  const prevImage = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? property.images.length - 1 : prev - 1
    );

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-white/30 backdrop-blur-xl transition-opacity duration-500"
        onClick={onClose}
      />

      {/* Glass Modal Content */}
      <div className="relative w-full max-w-6xl h-full max-h-[90vh] glass rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row animate-slide-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 bg-white/50 backdrop-blur-md p-2 rounded-full hover:bg-white transition-colors shadow-sm"
        >
          <X size={20} className="text-remax-navy" />
        </button>

        {/* IMAGE CAROUSEL (Left Side) */}
        <div className="relative w-full md:w-3/5 h-[40vh] md:h-full bg-gray-200 group">
          {currentImage && (
            <Image
              src={currentImage}
              alt={`${property.title} - Vista ${currentIndex + 1}`}
              fill
              unoptimized
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

          <div className="absolute top-6 left-6 flex gap-2">
            <span className="glass-dark text-white px-4 py-1.5 rounded-full text-xs font-medium tracking-wide">
              {property.operationType}
            </span>
          </div>

          {hasImages && property.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 glass p-3 rounded-full hover:bg-white text-black opacity-0 group-hover:opacity-100 transition-all shadow-lg translate-x-4 group-hover:translate-x-0"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 glass p-3 rounded-full hover:bg-white text-black opacity-0 group-hover:opacity-100 transition-all shadow-lg -translate-x-4 group-hover:translate-x-0"
              >
                <ChevronRight size={20} />
              </button>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 bg-black/20 backdrop-blur-md px-3 py-2 rounded-full">
                {property.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === currentIndex
                        ? "bg-white w-6"
                        : "bg-white/40 hover:bg-white/80 w-1.5"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* DETAILS (Right Side) */}
        <div className="w-full md:w-2/5 h-full overflow-y-auto bg-white/40 p-8 md:p-12 flex flex-col hide-scrollbar">
          <div className="mb-8">
            <p className="text-sm font-medium tracking-widest text-remax-red uppercase mb-3">
              {property.category}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-remax-navy leading-tight mb-4">
              {property.title}
            </h2>
            <p className="text-gray-500 flex items-center gap-2 text-sm font-light">
              <MapPin size={16} /> {property.location}
            </p>
          </div>

          <div className="mb-10 pb-10 border-b border-gray-200/60">
            <p className="text-sm tracking-widest text-gray-500 uppercase mb-2">
              Precio de lista
            </p>
            <p className="text-4xl font-light text-remax-navy">
              {property.priceFormatted}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-10">
            <div className="glass p-4 rounded-2xl flex flex-col items-center justify-center text-center">
              {spacesIcon}
              <span className="block text-xl font-medium text-remax-navy mt-2">
                {property.beds}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-gray-500 mt-1">
                {spacesLabel}
              </span>
            </div>
            <div className="glass p-4 rounded-2xl flex flex-col items-center justify-center text-center">
              <Bath className="w-5 h-5 text-gray-400" />
              <span className="block text-xl font-medium text-remax-navy mt-2">
                {property.baths}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-gray-500 mt-1">
                Baños
              </span>
            </div>
            <div className="glass p-4 rounded-2xl flex flex-col items-center justify-center text-center">
              <Maximize className="w-5 h-5 text-gray-400" />
              <span className="block text-xl font-medium text-remax-navy mt-2">
                {property.sqftDisplay}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-gray-500 mt-1">
                m²
              </span>
            </div>
          </div>

          <div className="mb-12 flex-grow">
            <h3 className="text-lg font-medium mb-4 flex items-center gap-2 text-remax-navy">
              <Quote className="w-4 h-4 text-remax-red" /> Descripción
            </h3>
            {property.sqftFull && (
              <p className="text-xs font-medium tracking-wider text-remax-navy mb-4 bg-white/50 px-4 py-2 rounded-lg inline-block">
                {property.sqftFull}
              </p>
            )}
            <div className="text-gray-600 font-light leading-relaxed whitespace-pre-line text-sm">
              {property.description ||
                "Contáctenos para más detalles y agendar una visita privada a esta exclusiva propiedad."}
            </div>
          </div>

          <div className="pt-6 mt-auto">
            <a
              href={`${CONTACT.waLink}?text=Hola%20Jessi,%20me%20interesa%20información%20sobre%20${encodeURIComponent(property.title)}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-remax-navy text-white py-4 px-6 rounded-2xl hover:bg-[#152042] transition-all font-medium text-sm shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Agendar Visita Privada
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}