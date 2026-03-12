import { Mail, MapPin, Phone, MessageCircle, Facebook, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-foreground py-10 overflow-hidden border-t border-gold-dark/30">
      <div className="absolute inset-0 mesh-gold opacity-10 pointer-events-none" />
      <div className="absolute inset-0 grain opacity-10 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Top Logo Section */}
        <div className="flex flex-col items-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group p-2"
          >
            <div className="absolute inset-0 bg-white/5 rounded-2xl blur-lg group-hover:bg-white/10 transition-colors duration-500" />
            <img
              src="/logo-premium.png"
              alt="Berit Olam Logo"
              className="h-16 md:h-20 lg:h-24 w-auto object-contain relative z-10 transition-transform duration-500 group-hover:scale-105 mix-blend-multiply"
            />
          </motion.div>
          <p className="text-[9px] uppercase tracking-[0.4em] text-background/30 font-body mt-2">
            Atelier de eventos y moda
          </p>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 text-center md:text-left pt-6 border-t border-white/5">
          
          {/* Brand Identity */}
          <div className="lg:col-span-1">
            <h4 className="font-display text-lg text-gold mb-4 italic tracking-wide">Berit Olam</h4>
            <p className="font-body text-background/60 text-xs leading-relaxed max-w-xs mx-auto md:mx-0">
              Donde las promesas se transforman en arte y la experiencia se vuelve eterna.
              Decoración de eventos, vestidos de novia y quinceañera, trajes de gala y regalos personalizados en Venezuela.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-semibold text-accent mb-4 uppercase tracking-[0.2em] text-[10px]">Navegación</h4>
            <ul className="flex flex-col gap-2 font-body text-background/70 text-xs">
              {["Inicio", "Nuestra Historia", "Servicios", "Galería", "Contacto"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(" ", "-")}`} 
                    className="hover:text-gold transition-colors duration-300 flex items-center gap-2 group justify-center md:justify-start"
                  >
                    <span className="w-0 h-px bg-gold transition-all duration-300 group-hover:w-3" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-accent mb-4 uppercase tracking-[0.2em] text-[10px]">Atención</h4>
            <p className="text-background/40 text-[9px] uppercase tracking-widest mb-3">Respuesta directa y personalizada</p>
            <ul className="flex flex-col gap-4 font-body text-background/70 text-xs items-center md:items-start">
              <li className="flex items-start gap-3">
                <div className="bg-gold/10 p-1.5 rounded text-gold flex-shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col text-left gap-1.5">
                  <a href="https://wa.me/584162284715" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold transition-colors group">
                    <span className="text-background/90 font-medium">+58 416-2284715</span>
                    <MessageCircle className="w-3 h-3 text-green-500 opacity-70 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a href="https://wa.me/584269143449" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold transition-colors group">
                    <span className="text-background/90 font-medium">+58 426-9143449</span>
                    <MessageCircle className="w-3 h-3 text-green-500 opacity-70 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-gold/10 p-1.5 rounded text-gold flex-shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <a href="mailto:contacto@beritolam.com" className="text-background/90 text-left hover:text-gold transition-colors">contacto@beritolam.com</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-gold/10 p-1.5 rounded text-gold flex-shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="text-background/90 text-left">Venezuela</span>
              </li>
            </ul>
          </div>

          {/* Social Presence */}
          <div>
            <h4 className="font-display font-semibold text-accent mb-4 uppercase tracking-[0.2em] text-[10px]">Síguenos</h4>
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: TikTokIcon, href: "#", label: "TikTok" },
                { icon: MessageCircle, href: "https://wa.me/584162284715", label: "WhatsApp" }
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-foreground transition-all duration-300 text-gold"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-[10px] text-background/20 uppercase tracking-widest">
            © {currentYear} Berit Olam.
          </p>
          <div className="flex gap-6 text-[10px] text-background/20 uppercase tracking-widest">
            <a href="#" className="hover:text-gold transition-colors">Términos</a>
            <a href="#" className="hover:text-gold transition-colors">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
