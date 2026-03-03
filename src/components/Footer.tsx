const Footer = () => (
  <footer className="bg-foreground py-12">
    <div className="container mx-auto px-6 text-center">
      <p className="font-display text-2xl font-semibold text-background/90 mb-2">
        Berit <span className="text-accent">Olam</span>
      </p>
      <p className="font-body text-xs text-background/50 tracking-wider uppercase mb-6">
        Promesa Eterna
      </p>
      <div className="golden-line w-16 mx-auto mb-6 opacity-50" />
      <p className="font-body text-xs text-background/40">
        © {new Date().getFullYear()} Berit Olam. Todos los derechos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
