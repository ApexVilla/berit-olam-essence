import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Historia", href: "#historia" },
  { label: "Servicios", href: "#servicios" },
  { label: "Galería", href: "#galeria" },
  { label: "Filosofía", href: "#filosofia" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed top-2 sm:top-4 left-0 right-0 z-50 flex justify-center w-full px-4">
      <div
        className={`w-full max-w-6xl rounded-full p-[1px] transition-all duration-500 ${scrolled
          ? "bg-gradient-to-r from-accent/60 via-gold/70 to-accent/60 shadow-lg lux-shadow"
          : "bg-gradient-to-r from-accent/30 via-gold/40 to-accent/30"
          }`}
      >
        <header
          className={`rounded-full transition-all duration-500 ${scrolled
            ? "bg-background/90 backdrop-blur-md border border-border/60 py-1"
            : "bg-background/40 backdrop-blur-sm border border-transparent py-2"
            }`}
        >
          <div className="flex items-center justify-between px-5 sm:px-7 h-14 sm:h-16">
            <button
              onClick={() => handleClick("#inicio")}
              className="transition-transform hover:scale-105 group h-full flex items-center gap-3 overflow-hidden rounded-l-full"
            >
              <img
                src="/logo-premium.png"
                alt="Berit Olam - Promesa Eterna"
                className="h-14 sm:h-20 w-auto object-contain mix-blend-multiply transition-all duration-300"
              />
              <span className="hidden sm:flex flex-col items-start">
                <span className="text-[10px] uppercase tracking-[0.35em] text-foreground/60 font-body">
                  Atelier
                </span>
                <span className="text-xs font-semibold text-foreground/80">
                  Promesa Eterna
                </span>
              </span>
            </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleClick(item.href)}
                className="group flex flex-col items-center text-xs font-body font-semibold text-foreground/70 hover:text-accent transition-colors duration-300 tracking-[0.2em] uppercase"
              >
                <span>{item.label}</span>
                <span className="mt-1 h-px w-0 bg-gradient-to-r from-transparent via-accent to-transparent transition-all duration-300 group-hover:w-10" />
              </button>
            ))}
          </nav>

          {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-foreground p-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden glass-panel border-t border-border/40 rounded-b-3xl shadow-xl overflow-hidden"
              >
                <nav className="flex flex-col items-center gap-5 py-6">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => handleClick(item.href)}
                      className="text-xs font-body font-semibold text-foreground/70 hover:text-accent transition-colors uppercase tracking-[0.2em]"
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </header>
      </div>
    </div>
  );
};

export default Header;
