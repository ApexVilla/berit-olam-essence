import { motion } from "framer-motion";
import historyImage from "@/assets/history-image.jpg";

const HistorySection = () => (
  <section id="historia" className="relative py-16 sm:py-20 lg:py-24 bg-background section-frame overflow-hidden">
    <div className="absolute inset-0 mesh-rose opacity-40 pointer-events-none" />
    <div className="container mx-auto px-4 sm:px-6 relative z-10">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-accent font-body text-xs tracking-[0.3em] uppercase mb-4">Nuestra Historia</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            El Origen de <span className="text-gradient-gold">Berit Olam</span>
          </h2>
          <div className="golden-line w-16 mb-8" />

          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
            El nombre de Berit Olam nace del hebreo a través de una revelación profunda basada en la palabra:
          </p>

          <blockquote className="relative border-l-2 border-accent pl-6 py-4 mb-6">
            <span className="absolute -left-3 -top-4 text-4xl text-accent/40 font-display">“</span>
            <p className="font-display italic text-foreground/80 text-base leading-relaxed">
              "Conoce, pues, que Jehová tu Dios es Dios, Dios fiel, que guarda el pacto y la misericordia… hasta mil generaciones."
            </p>
            <cite className="block font-body text-xs text-accent mt-3 not-italic tracking-wider uppercase">
              — Deuteronomio 7:9
            </cite>
          </blockquote>

          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            Esta promesa marcó nuestra visión inquebrantable de crear cada detalle y experiencia con propósito, excelencia y compromiso.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-lg overflow-hidden shadow-gold">
            <img
              src={historyImage}
              alt="Decoración de eventos romántica en Venezuela por Berit Olam"
              className="w-full h-[320px] sm:h-[400px] md:h-[500px] object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
          </div>
          {/* Decorative frame */}
          <div className="absolute -top-3 -right-3 w-full h-full border border-accent/30 rounded-lg -z-10" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default HistorySection;
