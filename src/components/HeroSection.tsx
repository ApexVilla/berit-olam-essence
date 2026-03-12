import { useRef } from "react";
import { motion } from "framer-motion";

const GoldenParticles = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 14 }).map((_, i) => (
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
    <section id="inicio" className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Elegant Background Image */}
      <div
        className="absolute inset-0 bg-[url('/hero-bg-professional.png')] bg-cover bg-center bg-no-repeat opacity-60 pointer-events-none"
      />
      <div className="absolute inset-0 mesh-rose opacity-70 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/60 pointer-events-none" />
      <div className="absolute inset-0 grain opacity-30 pointer-events-none" />

      <div className="hidden sm:block">
        <GoldenParticles />
      </div>

      {/* Subtle decorative circles */}
      <div className="absolute top-16 right-6 sm:right-12 w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-accent/10 blur-3xl animate-drift pointer-events-none" />
      <div className="absolute bottom-16 left-6 sm:left-12 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-primary/20 blur-3xl animate-drift-slow pointer-events-none" />
      <div className="absolute -top-24 right-8 sm:right-16 w-64 h-64 sm:w-80 sm:h-80 ring-orbit opacity-70 pointer-events-none" />
      <div className="absolute -bottom-28 left-6 sm:left-16 w-72 h-72 sm:w-96 sm:h-96 ring-orbit ring-orbit-reverse opacity-60 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 py-24 sm:py-28 md:py-32 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-accent/30 bg-background/60 px-4 py-2 backdrop-blur mb-6">
            <span className="h-2 w-2 rounded-full bg-gold animate-pulse-gold" />
            <span className="text-[10px] sm:text-xs tracking-[0.4em] uppercase text-foreground/70 font-body">
              Atelier Promesa Eterna
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-foreground leading-tight mb-6">
            Berit <span className="text-gradient-gold">Olam</span>
            <span className="block text-base sm:text-lg md:text-2xl font-body font-semibold text-foreground/80 mt-4">
              Decoración de eventos y vestidos de novia en Venezuela
            </span>
          </h1>

          <div className="golden-line w-24 mx-auto mb-8" />

          <p className="font-display text-lg md:text-2xl text-foreground/80 italic max-w-2xl mx-auto mb-4">
            Donde las Promesas se Transforman en Arte
          </p>
          <p className="font-display text-lg md:text-2xl text-foreground/80 italic max-w-2xl mx-auto mb-8">
            y la Experiencia se Vuelve Eterna
          </p>

          <p className="font-body text-sm md:text-base text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
            Especialistas en decoración de eventos en Venezuela, vestidos de novia y quinceañera, trajes de gala y regalos personalizados para momentos inolvidables.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollTo("#servicios")}
              className="shimmer w-full sm:w-auto px-8 py-4 bg-gradient-gold text-accent-foreground font-body font-semibold text-sm tracking-wider uppercase rounded-full shadow-gold transition-transform hover:scale-105"
            >
              Ver Servicios
            </button>
            <button
              onClick={() => scrollTo("#contacto")}
              className="shimmer w-full sm:w-auto px-8 py-4 border border-accent text-foreground font-body font-semibold text-sm tracking-wider uppercase rounded-full hover:bg-accent/10 transition-all hover:scale-105"
            >
              Cotizar Ahora
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
