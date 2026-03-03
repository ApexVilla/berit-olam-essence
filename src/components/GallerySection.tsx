import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Decoración con rosas", tall: true },
  { src: gallery2, alt: "Vestido de novia", tall: false },
  { src: gallery3, alt: "Regalos personalizados", tall: false },
  { src: gallery4, alt: "Celebración de gala", tall: false },
  { src: gallery5, alt: "Traje de gala", tall: true },
  { src: gallery6, alt: "Vestido de 15 años", tall: false },
];

const GallerySection = () => (
  <section id="galeria" className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-accent font-body text-xs tracking-[0.3em] uppercase mb-4">Galería</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          Momentos que <span className="text-gradient-gold">Perduran</span>
        </h2>
        <div className="golden-line w-24 mx-auto mt-6" />
      </motion.div>

      <div className="columns-2 md:columns-3 gap-4 space-y-4">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="relative group overflow-hidden rounded-lg break-inside-avoid border border-border"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <p className="font-body text-xs text-accent-foreground font-medium bg-accent/80 backdrop-blur-sm px-3 py-1.5 rounded-full inline-block">
                {img.alt}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
