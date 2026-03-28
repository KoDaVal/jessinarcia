"use client";

import { memo } from "react";
import Image from "next/image";
import { ArrowRight, MapPin, Bed, Bath, Maximize, Layout } from "lucide-react";

const PropertyCard = memo(function PropertyCard({
  image,
  title,
  priceFormatted,
  location,
  beds,
  baths,
  sqftDisplay,
  category,
  operationType,
  onClick,
}) {
  const isCommercial = category && category.includes("comercial");
  const spacesLabel = isCommercial ? "Esp" : "Rec";

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer flex flex-col h-full bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 relative border border-gray-100/50"
    >
      <div className="relative overflow-hidden aspect-[4/3] bg-gray-200">
        {image && (
          <Image
            src={image}
            alt={title}
            fill
            unoptimized
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/20 transition-colors duration-500" />

        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-white/95 backdrop-blur-md text-remax-navy text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
            {operationType}
          </span>
        </div>

        <div className="absolute bottom-4 left-5 right-5 flex justify-between items-end">
          <p className="font-serif text-2xl text-white drop-shadow-md">
            {priceFormatted}
          </p>
          <span className="bg-remax-red text-white w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 shadow-lg">
            <ArrowRight size={18} />
          </span>
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col bg-white">
        <div className="mb-4">
          <p className="text-[11px] text-remax-red uppercase tracking-widest font-medium mb-2">
            {category}
          </p>
          <h3 className="font-serif text-xl text-remax-navy leading-tight group-hover:text-remax-red transition-colors line-clamp-2">
            {title}
          </h3>
        </div>

        <p className="text-xs text-gray-500 flex items-center gap-1.5 mb-6 font-light">
          <MapPin size={14} className="text-gray-400" /> {location}
        </p>

        <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100 text-sm text-gray-600 font-light">
          <span className="flex items-center gap-1.5">
            <Bed size={16} className="text-remax-navy opacity-70" /> {beds}{" "}
            {spacesLabel}
          </span>
          <span className="flex items-center gap-1.5">
            <Bath size={16} className="text-remax-navy opacity-70" /> {baths}{" "}
            Baños
          </span>
          <span className="flex items-center gap-1.5">
            <Maximize size={16} className="text-remax-navy opacity-70" />{" "}
            {sqftDisplay} m²
          </span>
        </div>
      </div>
    </div>
  );
});

export default PropertyCard;