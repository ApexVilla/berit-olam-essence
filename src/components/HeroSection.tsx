import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const GoldenParticles = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-accent/40 animate-particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${6 + Math.random() * 6}s`,
          }}
        />
      ))}
    </div>
  );
};

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Elegant Background Image */}
      <div
        className="absolute inset-0 bg-[url('/hero-bg-professional.png')] bg-cover bg-center bg-no-repeat opacity-60 pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50 pointer-events-none" />

      <GoldenParticles />

      {/* Subtle decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />

      <div className="container mx-auto px-6 py-32 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-6">✨ Promesa Eterna</p>

          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-foreground leading-tight mb-6">
            Berit <span className="text-gradient-gold">Olam</span>
          </h1>

          <div className="golden-line w-24 mx-auto mb-8" />

          <p className="font-display text-lg md:text-2xl text-foreground/80 italic max-w-2xl mx-auto mb-4">
            Donde las Promesas se Transforman en Arte
          </p>
          <p className="font-display text-lg md:text-2xl text-foreground/80 italic max-w-2xl mx-auto mb-8">
            y la Experiencia se Vuelve Eterna
          </p>

          <p className="font-body text-sm md:text-base text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
            Una promesa eterna nos inspira y por eso diseñamos cada creación con compromiso, elegancia y sofisticación.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollTo("#servicios")}
              className="shimmer px-8 py-4 bg-gradient-gold text-accent-foreground font-body font-semibold text-sm tracking-wider uppercase rounded-full shadow-gold transition-transform hover:scale-105"
            >
              🌸 Ver Servicios
            </button>
            <button
              onClick={() => scrollTo("#contacto")}
              className="shimmer px-8 py-4 border border-accent text-foreground font-body font-semibold text-sm tracking-wider uppercase rounded-full hover:bg-accent/10 transition-all hover:scale-105"
            >
              ✨ Cotizar Ahora
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
