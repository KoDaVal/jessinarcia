"use client";

import { createContext, useContext, useState } from "react";
import PropertyModal from "./PropertyModal";

const PropertyModalContext = createContext(null);

export function usePropertyModal() {
  return useContext(PropertyModalContext);
}

export function PropertyModalProvider({ children }) {
  const [selectedProperty, setSelectedProperty] = useState(null);

  return (
    <PropertyModalContext.Provider value={{ openModal: setSelectedProperty }}>
      {children}
      {selectedProperty && (
        <PropertyModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}
    </PropertyModalContext.Provider>
  );
}
