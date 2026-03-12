import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ nombre: "", telefono: "", evento: "", mensaje: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola Berit Olam!\n\nNombre: ${form.nombre}\nTeléfono: ${form.telefono}\nEvento: ${form.evento}\nMensaje: ${form.mensaje}`;
    window.open(`https://wa.me/584162284715?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="contacto" className="py-16 sm:py-20 lg:py-24 bg-gradient-rose relative overflow-hidden section-frame">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute inset-0 grain opacity-25 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-accent font-body text-[10px] sm:text-xs tracking-[0.4em] uppercase mb-4">Contacto</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Hagamos Realidad Tu <span className="text-gradient-gold">Sueño</span>
          </h2>
          <div className="golden-line w-24 mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] gap-8 items-start">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-card/80 backdrop-blur-sm rounded-2xl border border-border p-8 lux-shadow glass-panel"
          >
            {[
              { name: "nombre" as const, label: "Nombre", type: "text" },
              { name: "telefono" as const, label: "Teléfono", type: "tel" },
              { name: "evento" as const, label: "Tipo de Evento", type: "text" },
            ].map((field) => (
              <div key={field.name} className="mb-5">
                <label className="block font-body text-xs text-muted-foreground uppercase tracking-wider mb-2">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  value={form[field.name]}
                  onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                  required
                  className="w-full bg-background border border-border focus:border-accent rounded-lg px-4 py-3 font-body text-base sm:text-sm text-foreground outline-none transition-colors"
                />
              </div>
            ))}

            <div className="mb-6">
              <label className="block font-body text-xs text-muted-foreground uppercase tracking-wider mb-2">
                Mensaje
              </label>
              <textarea
                value={form.mensaje}
                onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                rows={4}
                required
                className="w-full bg-background border border-border focus:border-accent rounded-lg px-4 py-3 font-body text-base sm:text-sm text-foreground outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="shimmer w-full flex items-center justify-center gap-2 bg-gradient-gold text-accent-foreground font-body font-semibold text-sm tracking-wider uppercase rounded-full py-4 shadow-gold transition-transform hover:scale-[1.02]"
            >
              <Send className="w-4 h-4" />
              Solicitar Cotización
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl border border-border/70 bg-white/70 backdrop-blur-sm p-6 lux-shadow glass-panel"
          >
            <p className="text-[10px] uppercase tracking-[0.4em] text-accent font-body mb-4">Atención</p>
            <h3 className="font-display text-xl text-foreground mb-4">
              Respuesta directa y personalizada
            </h3>
            <div className="space-y-4 text-sm text-foreground/80">
              <div className="flex items-start gap-3">
                <div className="bg-gold/10 p-2 rounded-lg text-gold">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p>+58 416-2284715</p>
                  <p>+58 426-9143449</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-gold/10 p-2 rounded-lg text-gold">
                  <Mail className="w-4 h-4" />
                </div>
                <p>contacto@beritolam.com</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-gold/10 p-2 rounded-lg text-gold">
                  <MapPin className="w-4 h-4" />
                </div>
                <p>Venezuela y Latinoamérica</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
