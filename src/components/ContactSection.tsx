import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ nombre: "", telefono: "", evento: "", mensaje: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola Berit Olam! 🌸\n\nNombre: ${form.nombre}\nTeléfono: ${form.telefono}\nEvento: ${form.evento}\nMensaje: ${form.mensaje}`;
    window.open(`https://wa.me/584162284715?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="contacto" className="py-24 bg-gradient-rose relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-accent font-body text-xs tracking-[0.3em] uppercase mb-4">Contacto</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Hagamos Realidad Tu <span className="text-gradient-gold">Sueño</span>
          </h2>
          <div className="golden-line w-24 mx-auto mt-6" />
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-card/80 backdrop-blur-sm rounded-xl border border-border p-8 shadow-gold"
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
                className="w-full bg-background border border-border focus:border-accent rounded-lg px-4 py-3 font-body text-sm text-foreground outline-none transition-colors"
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
              className="w-full bg-background border border-border focus:border-accent rounded-lg px-4 py-3 font-body text-sm text-foreground outline-none transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="shimmer w-full flex items-center justify-center gap-2 bg-gradient-gold text-accent-foreground font-body font-semibold text-sm tracking-wider uppercase rounded-full py-4 shadow-gold transition-transform hover:scale-[1.02]"
          >
            <Send className="w-4 h-4" />
            ✨ Solicitar Cotización
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
