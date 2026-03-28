import WhatsAppIcon from "./WhatsAppIcon";
import { CONTACT } from "@/lib/constants";

export default function WhatsAppButton() {
  return (
    <a
      href={CONTACT.waLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-[90] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center"
    >
      <WhatsAppIcon className="w-6 h-6" />
    </a>
  );
}
