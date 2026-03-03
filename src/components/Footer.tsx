const Footer = () => (
  <footer className="bg-foreground py-6 border-t border-gold-dark/30">
    <div className="container mx-auto px-6 text-center">
      <div className="flex justify-center mb-4">
        <div className="bg-background/90 px-8 py-3 rounded-full shadow-md border border-border/50 backdrop-blur-sm">
          <img src="/logo.png" alt="Berit Olam Logo" className="h-10 md:h-14 lg:h-16 w-auto object-contain drop-shadow-sm" />
        </div>
      </div>
      <p className="font-body text-xs text-background/40">
        © {new Date().getFullYear()} Berit Olam. Todos los derechos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
