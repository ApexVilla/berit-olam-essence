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
      <header
        className={`w-full max-w-6xl rounded-full transition-all duration-500 border border-transparent ${scrolled
          ? "bg-background/90 backdrop-blur-md shadow-lg border-border/50 py-1"
          : "bg-background/30 backdrop-blur-sm py-2"
          }`}
      >
        <div className="flex items-center justify-between px-6 sm:px-8 h-14 sm:h-16">
          <button onClick={() => handleClick("#inicio")} className="transition-transform hover:scale-105 group h-full flex items-center">
            <img src="/logo.png" alt="Berit Olam - Promesa Eterna" className="h-10 sm:h-12 w-auto object-contain mix-blend-multiply drop-shadow-sm group-hover:drop-shadow-md transition-all duration-300" />
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleClick(item.href)}
                className="text-sm font-body font-medium text-foreground/70 hover:text-accent transition-colors duration-300 tracking-wide uppercase"
              >
                {item.label}
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
              className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border/30 rounded-b-3xl shadow-xl overflow-hidden"
            >
              <nav className="flex flex-col items-center gap-4 py-6">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleClick(item.href)}
                    className="text-sm font-body font-medium text-foreground/70 hover:text-accent transition-colors uppercase tracking-wide"
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
  );
};

export default Header;
