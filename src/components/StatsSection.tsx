import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: 10, suffix: "+", label: "Años de Experiencia", desc: "Creando momentos mágicos" },
  { value: 500, suffix: "+", label: "Eventos Realizados", desc: "Sueños hechos realidad" },
  { value: 100, suffix: "%", label: "Satisfacción", desc: "Compromiso con la excelencia" },
  { value: 24, suffix: "/7", label: "Atención", desc: "Siempre a tu lado" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let current = 0;
    const step = Math.max(1, Math.floor(target / 40));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(current);
    }, 30);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <div ref={ref} className="font-display text-4xl md:text-5xl font-bold text-gradient-gold">
      {count}{suffix}
    </div>
  );
};

const StatsSection = () => (
  <section className="py-20 bg-card">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="text-center"
          >
            <Counter target={stat.value} suffix={stat.suffix} />
            <p className="font-body text-sm font-semibold text-foreground mt-3 uppercase tracking-wider">
              {stat.label}
            </p>
            <p className="font-body text-xs text-muted-foreground mt-1">{stat.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
