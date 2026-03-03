import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/1234567890"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-accent rounded-full flex items-center justify-center shadow-gold animate-pulse-gold transition-transform hover:scale-110"
    aria-label="Contactar por WhatsApp"
  >
    <MessageCircle className="w-6 h-6 text-accent-foreground" />
  </a>
);

export default WhatsAppButton;
