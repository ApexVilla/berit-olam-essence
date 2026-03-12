import { motion } from "framer-motion";

const keywords = [
  "Decoración de eventos",
  "Vestidos de novia",
  "Quinceañera",
  "Trajes de gala",
  "Regalos personalizados",
  "Venezuela"
];

const EssenceSection = () => (
  <section id="filosofia" className="py-16 sm:py-20 lg:py-24 bg-gradient-rose relative overflow-hidden section-frame">
    {/* Decorative */}
    <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent/5 blur-3xl" />
    <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />
    <div className="absolute inset-0 grain opacity-25 pointer-events-none" />
    <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 ring-orbit opacity-50" />

    <div className="container mx-auto px-4 sm:px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <p className="text-accent font-body text-[10px] sm:text-xs tracking-[0.4em] uppercase mb-4">Nuestra Esencia</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          Nuestra Visión <span className="text-gradient-gold">Creativa</span>
        </h2>
        <div className="golden-line w-24 mx-auto mt-6" />
      </motion.div>

      <motion.blockquote
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-2xl mx-auto text-center mb-12 relative"
      >
        <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-5xl text-accent/30 font-display">“</span>
        <p className="font-display text-xl md:text-2xl italic text-foreground/80 leading-relaxed">
          "Cada diseño es una obra de arte.<br />
          Cada detalle es una expresión de amor.<br />
          Cada evento es una promesa que perdura."
        </p>
      </motion.blockquote>

      <div className="flex flex-wrap justify-center gap-4">
        {keywords.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            animate={{ 
              y: [0, -5, 0],
            }}
            whileHover={{ 
              scale: 1.1, 
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              borderColor: "hsl(var(--gold))",
              boxShadow: "0 10px 25px -5px rgba(212, 175, 55, 0.4)"
            }}
            viewport={{ once: true }}
            transition={{ 
              delay: 0.4 + i * 0.1, 
              duration: 0.5,
              y: {
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="font-display text-sm md:text-base font-semibold text-gradient-gold border border-accent/30 rounded-full px-6 py-2 bg-card/70 backdrop-blur-sm shadow-gold cursor-default transition-colors"
          >
            {word}
          </motion.span>
        ))}
      </div>
    </div>
  </section>
);

export default EssenceSection;
