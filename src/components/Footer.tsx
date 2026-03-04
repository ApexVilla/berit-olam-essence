import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground py-16 border-t border-gold-dark/30">
    <div className="container mx-auto px-6">

      {/* Top Logo Section */}
      <div className="flex justify-center mb-12">
        <div className="bg-background/90 px-8 py-3 rounded-full shadow-md border border-border/50 backdrop-blur-sm">
          <img src="/logo.png" alt="Berit Olam Logo" className="h-10 md:h-14 lg:h-16 w-auto object-contain drop-shadow-sm" />
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12 text-center md:text-left">

        {/* About */}
        <div>
          <h4 className="font-display font-semibold text-accent mb-4 uppercase tracking-wider text-sm">Berit Olam</h4>
          <p className="font-body text-background/70 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
            Donde las promesas se transforman en arte y la experiencia se vuelve eterna. Especialistas en hacer de tus momentos especiales, recuerdos imborrables.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-semibold text-accent mb-4 uppercase tracking-wider text-sm">Enlaces Rápidos</h4>
          <ul className="flex flex-col gap-2 font-body text-background/70 text-sm">
            <li><a href="#inicio" className="hover:text-gold transition-colors">Inicio</a></li>
            <li><a href="#historia" className="hover:text-gold transition-colors">Nuestra Historia</a></li>
            <li><a href="#servicios" className="hover:text-gold transition-colors">Servicios</a></li>
            <li><a href="#galeria" className="hover:text-gold transition-colors">Galería</a></li>
            <li><a href="#contacto" className="hover:text-gold transition-colors">Contacto</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-display font-semibold text-accent mb-4 uppercase tracking-wider text-sm">Contacto</h4>
          <ul className="flex flex-col gap-3 font-body text-background/70 text-sm items-center md:items-start">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gold" />
              <span>+1 (234) 567-8900</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gold" />
              <span>contacto@beritolam.com</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gold" />
              <span>Ciudad de México, CP 01000</span>
            </li>
          </ul>

          <div className="flex items-center justify-center md:justify-start gap-4 mt-6">
            <a href="#" className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-gold transition-colors text-background">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-gold transition-colors text-background">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="pt-6 border-t border-background/10 text-center">
        <p className="font-body text-xs text-background/40">
          © {new Date().getFullYear()} Berit Olam. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
