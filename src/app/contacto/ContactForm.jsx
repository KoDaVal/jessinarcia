"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export default function ContactForm() {
  const [formState, setFormState] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState("submitting");

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const message = formData.get("message");

    const waMessage = `Hola Jessi, mi nombre es ${name} (${email}), teléfono: ${phone}. Me interesa: ${message}`;
    const url = `https://wa.me/${CONTACT.phone}?text=${encodeURIComponent(waMessage)}`;

    setTimeout(() => {
      window.open(url, "_blank");
      setFormState("success");
    }, 800);
  };

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen flex items-center">
      <div className="container mx-auto max-w-5xl">
        <div className="glass rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">
          {/* Info Side */}
          <div className="bg-remax-navy text-white p-8 md:p-16 md:w-2/5 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-remax-red rounded-full mix-blend-screen filter blur-[80px] opacity-20 transform translate-x-1/2 -translate-y-1/2" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-serif mb-6">
                Hablemos de tu proyecto.
              </h2>
              <p className="text-white/70 font-light text-sm leading-relaxed mb-12">
                Ya sea que busques el hogar de tus sueños, el espacio ideal para
                tu negocio, o desees vender tu propiedad con los mejores
                resultados.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-widest mb-1">
                      Teléfono / WhatsApp
                    </p>
                    <p className="font-medium text-lg">
                      {CONTACT.displayPhone}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="w-full overflow-hidden">
                    <p className="text-xs text-white/50 uppercase tracking-widest mb-1">
                      Correo Electrónico
                    </p>
                    <p className="font-medium break-all">{CONTACT.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-widest mb-1">
                      Ubicación
                    </p>
                    <p className="font-medium">{CONTACT.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-8 md:p-16 md:w-3/5 bg-white/80 backdrop-blur-xl">
            {formState === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-slide-up">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6 text-[#25D366]">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-serif text-remax-navy mb-4">
                  ¡Conectando vía WhatsApp!
                </h3>
                <p className="text-gray-500 font-light mb-8 max-w-sm">
                  Gracias por tu interés. En un momento te atenderé
                  personalmente.
                </p>
                <button
                  onClick={() => setFormState("idle")}
                  className="text-sm font-medium text-remax-red hover:underline transition-all"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form className="space-y-10" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-transparent border-b border-gray-300 py-2 text-remax-navy focus:border-remax-red transition-colors outline-none peer placeholder-transparent"
                      placeholder="Nombre Completo"
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-0 -top-4 text-[10px] text-gray-400 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-remax-red uppercase tracking-widest font-medium cursor-text"
                    >
                      Nombre Completo
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full bg-transparent border-b border-gray-300 py-2 text-remax-navy focus:border-remax-red transition-colors outline-none peer placeholder-transparent"
                      placeholder="Teléfono"
                    />
                    <label
                      htmlFor="phone"
                      className="absolute left-0 -top-4 text-[10px] text-gray-400 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-remax-red uppercase tracking-widest font-medium cursor-text"
                    >
                      Teléfono
                    </label>
                  </div>
                </div>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-transparent border-b border-gray-300 py-2 text-remax-navy focus:border-remax-red transition-colors outline-none peer placeholder-transparent"
                    placeholder="Correo Electrónico"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-4 text-[10px] text-gray-400 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-remax-red uppercase tracking-widest font-medium cursor-text"
                  >
                    Correo Electrónico
                  </label>
                </div>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="w-full bg-transparent border-b border-gray-300 py-2 text-remax-navy focus:border-remax-red transition-colors outline-none peer placeholder-transparent resize-none"
                    placeholder="¿En qué puedo ayudarte?"
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-0 -top-4 text-[10px] text-gray-400 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-remax-red uppercase tracking-widest font-medium cursor-text"
                  >
                    ¿En qué puedo ayudarte?
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="w-full bg-remax-navy text-white py-4 rounded-full font-medium tracking-widest uppercase text-xs hover:bg-remax-red transition-colors shadow-xl hover:shadow-2xl hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-wait mt-8"
                >
                  {formState === "submitting"
                    ? "Procesando..."
                    : "Enviar Mensaje"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
