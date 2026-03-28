import { fetchProperties } from "@/lib/fetchProperties";
import { getPropertyListSchema } from "@/lib/schemas";
import PropertiesClient from "./PropertiesClient";

export const metadata = {
  title: "Portafolio Inmobiliario",
  description:
    "Explora nuestro catálogo de propiedades en venta y renta en Tuxtla Gutiérrez, Chiapas. Residencias, locales comerciales y terrenos con asesoría personalizada.",
  openGraph: {
    title: "Portafolio Inmobiliario | Jessi Narcia RE/MAX",
    description:
      "Propiedades exclusivas en venta y renta en Chiapas. Residencial y comercial.",
  },
};

export default async function PortafolioPage() {
  const properties = await fetchProperties();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getPropertyListSchema(properties)),
        }}
      />
      <PropertiesClient initialProperties={properties} />
    </>
  );
}
