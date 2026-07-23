import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppButton() {
  const phone = "528129474909";

  const message = encodeURIComponent(
    "Hola, encontré su sitio web y me gustaría solicitar información sobre un proyecto."
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-xl transition-all duration-300 hover:scale-110"
    >
      <FaWhatsapp className="text-white text-4xl" />
    </a>
  );
}