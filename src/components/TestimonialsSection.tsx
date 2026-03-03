import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "La elegancia y profesionalismo de Berit Olam superó todas nuestras expectativas. Un servicio verdaderamente premium.",
    name: "Carlos Mendoza",
    role: "Evento Corporativo",
  },
  {
    quote: "Mi vestido de novia fue un sueño hecho realidad. Cada detalle fue cuidado con tanto amor que no puedo dejar de recomendarlos.",
    name: "María Fernández",
    role: "Boda Exclusiva",
  },
  {
    quote: "Los 15 de mi hija fueron mágicos gracias a Berit Olam. Desde la decoración hasta el vestido, todo fue perfecto.",
    name: "Ana Rodríguez",
    role: "Fiesta de 15 Años",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonios" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-accent font-body text-xs tracking-[0.3em] uppercase mb-4">Testimonios</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Lo que Dicen <span className="text-gradient-gold">Nuestros Clientes</span>
          </h2>
          <div className="golden-line w-24 mx-auto mt-6" />
        </motion.div>

        <div className="max-w-2xl mx-auto text-center min-h-[250px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="font-display text-lg md:text-xl italic text-foreground/80 leading-relaxed mb-8">
                "{testimonials[current].quote}"
              </p>
              <p className="font-body text-sm font-semibold text-foreground">
                — {testimonials[current].name}
              </p>
              <p className="font-body text-xs text-muted-foreground mt-1">
                {testimonials[current].role}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-accent w-6" : "bg-border"
              }`}
              aria-label={`Testimonio ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
