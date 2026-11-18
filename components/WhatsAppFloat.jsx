import { FaWhatsapp } from "react-icons/fa";
import { whatsappLink } from "@/data/site";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      className="wa-float"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp />
      <span className="wa-float__label">Chat with us</span>
    </a>
  );
}
