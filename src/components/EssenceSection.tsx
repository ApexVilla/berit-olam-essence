import { motion } from "framer-motion";

const keywords = ["Elegancia", "Distinción", "Estética", "Arte con Amor"];

const EssenceSection = () => (
  <section id="filosofia" className="py-24 bg-gradient-rose relative overflow-hidden">
    {/* Decorative */}
    <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent/5 blur-3xl" />
    <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <p className="text-accent font-body text-xs tracking-[0.3em] uppercase mb-4">Nuestra Esencia</p>
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
        className="max-w-2xl mx-auto text-center mb-12"
      >
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
            viewport={{ once: true }}
            transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
            className="font-display text-sm md:text-base font-semibold text-gradient-gold border border-accent/30 rounded-full px-6 py-2 bg-card/50 backdrop-blur-sm"
          >
            {word}
          </motion.span>
        ))}
      </div>
    </div>
  </section>
);

export default EssenceSection;
