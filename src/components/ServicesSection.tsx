import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const services = [
  {
    image: "/service_decor_event_1772579064771.png",
    title: "Decoración y Diseño de Eventos",
    desc: "Transformamos tus ideas en escenarios extraordinarios para celebraciones inolvidables.",
    benefits: [
      "Diseño temático exclusivo",
      "Ambientación floral premium",
      "Iluminación escénica elegante"
    ]
  },
  {
    image: "/service_personalized_gifts_1772579076984.png",
    title: "Regalos Personalizados y Únicos",
    desc: "Regalos personalizados y artesanales diseñados para sorprender y emocionar a tus seres queridos.",
    benefits: [
      "Empaquetado de lujo",
      "Caligrafía y sellos artísticos",
      "Personalización detallada"
    ]
  },
  {
    image: "/service_wedding_dress_1772579088964.png",
    title: "Vestidos de Novia",
    desc: "Diseños de alta costura que reflejan la pureza y la belleza de una promesa eterna.",
    benefits: [
      "Telas importadas exclusivas",
      "Ajuste perfecto a la silueta",
      "Asesoramiento de imagen nupcial"
    ]
  },
  {
    image: "/service_quinceanera_dress_1772579125461.png",
    title: "Vestidos para 15 Años (Quinceañera)",
    desc: "Piezas espectaculares para deslumbrar en tu fiesta de quinceañera.",
    benefits: [
      "Bordados en cristales",
      "Faldas de volumen romántico",
      "Diseños vanguardistas"
    ]
  },
  {
    image: "/service_mens_suit_1772579146023.png",
    title: "Trajes de Gala para Caballeros",
    desc: "Sastrería impecable que proyecta elegancia, clase y presencia absoluta.",
    benefits: [
      "Cortes modernos y clásicos",
      "Telas de tacto premium",
      "Accesorios para complementar"
    ]
  },
];

const ServicesSection = () => (
  <section id="servicios" className="relative py-16 sm:py-20 lg:py-24 bg-secondary/30 section-frame overflow-hidden">
    <div className="absolute inset-0 mesh-gold opacity-40 pointer-events-none" />
    <div className="container mx-auto px-4 sm:px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-accent font-body text-[10px] sm:text-xs tracking-[0.4em] uppercase mb-4">
          Nuestros Servicios
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          Excelencia en Cada <span className="text-gradient-gold">Detalle</span>
        </h2>
        <div className="golden-line w-24 mx-auto mt-6" />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="group flex flex-col rounded-2xl border border-border/60 overflow-hidden transition-all duration-500 hover:border-gold/60 hover:-translate-y-1 glass-panel lux-shadow"
          >
            <div className="relative h-52 sm:h-60 w-full overflow-hidden">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <div className="absolute top-4 left-4 z-20 rounded-full border border-white/60 bg-white/80 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-foreground/70">
                Atelier {String(i + 1).padStart(2, "0")}
              </div>
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="p-8 flex-1 flex flex-col">
              <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-gold transition-colors">
                {service.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">{service.desc}</p>

              <div className="mt-auto pt-6 border-t border-border/50">
                <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-4">Beneficios Incluidos:</p>
                <ul className="space-y-3 mb-6">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start text-sm text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-gold mr-3 shrink-0 mt-0.5" />
                      <span className="font-body">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/584162284715?text=${encodeURIComponent(`Hola Berit Olam! Me gustaría cotizar el servicio de: ${service.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-full inline-flex items-center justify-center px-4 py-2.5 bg-gold/10 hover:bg-gold text-gold hover:text-primary-foreground border border-gold transition-all duration-300 rounded-full text-sm font-semibold tracking-wide"
                >
                  Cotizar este servicio
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
