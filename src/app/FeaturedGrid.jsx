"use client";

import FadeIn from "@/components/FadeIn";
import PropertyCard from "@/components/PropertyCard";
import { usePropertyModal } from "@/components/PropertyModalProvider";

export default function FeaturedGrid({ properties }) {
  const { openModal } = usePropertyModal();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {properties.map((p, i) => (
        <FadeIn key={p.id} delay={i * 100}>
          <PropertyCard {...p} onClick={() => openModal(p)} />
        </FadeIn>
      ))}
    </div>
  );
}
