import { motion } from "framer-motion";
import { Flower2, Gift, Heart, Crown, Gem } from "lucide-react";

const services = [
  {
    icon: Flower2,
    title: "Decoración y Diseño de Eventos",
    desc: "Cumpleaños · Fiestas Sorpresa · Eventos Especiales · Detalles personalizados",
  },
  {
    icon: Gift,
    title: "Regalos Únicos y Personalizados",
    desc: "Arte hecho con amor para sorprender",
  },
  {
    icon: Heart,
    title: "Vestidos de Novia",
    desc: "Diseños elegantes que representan una promesa eterna",
  },
  {
    icon: Crown,
    title: "Vestidos para 15 Años",
    desc: "Estética, glamour y distinción",
  },
  {
    icon: Gem,
    title: "Trajes de Gala para Caballeros",
    desc: "Clase y presencia para momentos inolvidables",
  },
];

const ServicesSection = () => (
  <section id="servicios" className="py-24 bg-secondary/30">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-accent font-body text-xs tracking-[0.3em] uppercase mb-4">Nuestros Servicios</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          Excelencia en Cada <span className="text-gradient-gold">Detalle</span>
        </h2>
        <div className="golden-line w-24 mx-auto mt-6" />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="group bg-card rounded-lg border border-border hover:border-accent/50 p-8 transition-all duration-500 hover:shadow-gold"
          >
            <service.icon className="w-8 h-8 text-accent mb-5 group-hover:scale-110 transition-transform" />
            <h3 className="font-display text-lg font-semibold text-foreground mb-3">{service.title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
