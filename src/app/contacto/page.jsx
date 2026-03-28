import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contacto",
  description:
    "Contáctame para asesoría inmobiliaria profesional en Tuxtla Gutiérrez, Chiapas. Compra, venta y renta de propiedades con RE/MAX Integral.",
  openGraph: {
    title: "Contacto | Jessi Narcia RE/MAX",
    description:
      "Agenda una asesoría personalizada para tus proyectos inmobiliarios.",
  },
};

export default function ContactoPage() {
  return <ContactForm />;
}
