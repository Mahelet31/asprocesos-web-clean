import { useState } from "react";
import { MapPin, Phone, Mail, Send, Clock } from "lucide-react";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const [errors, setErrors] = useState({
  name: "",
  email: "",
  phone: "",
  projectType: "",
  message: "",
});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateForm = () => {

  const newErrors = {
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  };

  let valid = true;

  // Nombre
  if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/.test(formState.name)) {
    newErrors.name = "Escribe únicamente letras.";
    valid = false;
  }

  // Correo
  if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)
  ) {
    newErrors.email = "Correo electrónico inválido.";
    valid = false;
  }

  // Teléfono
  if (!/^\d{10}$/.test(formState.phone)) {
    newErrors.phone =
      "El teléfono debe tener 10 dígitos.";
    valid = false;
  }

  // Proyecto

  if (!formState.projectType) {
    newErrors.projectType =
      "Selecciona un tipo de proyecto.";
    valid = false;
  }

  // Mensaje

  if (formState.message.length < 20) {
    newErrors.message =
      "Describe un poco más tu proyecto.";
    valid = false;
  }

  setErrors(newErrors);

  return valid;
};

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validateForm()) return;

  try {
    const response = await fetch("https://formspree.io/f/xojgllwl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formState),
    });

    if (response.ok) {
      alert("✅ Gracias por contactarnos. Hemos recibido tu solicitud y pronto nos comunicaremos contigo.");

      setFormState({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        message: "",
      });
    } else {
      alert("❌ Ocurrió un problema al enviar el formulario. Inténtalo nuevamente.");
    }
  } catch (error) {
    console.error(error);

    alert("❌ No fue posible enviar la información. Revisa tu conexión a internet.");
  }
};

  return (
    <section id="contacto" className="py-20 md:py-28 bg-navy text-pure">
      <div className="container-wide section-padding">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-sm font-bold text-sky uppercase tracking-wider">Contáctanos</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-black">Cotiza tu próximo proyecto</h2>
          <p className="mt-4 text-lg text-cloud">
            Cuéntanos sobre tu proyecto y te enviaremos una propuesta a la medida de tus necesidades.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-bold text-cloud">
                    Nombre completo
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full rounded-md border border-navy-foreground/20 bg-pure/10 px-4 py-3 text-pure placeholder:text-cloud/60 focus:border-sky focus:outline-none focus:ring-1 focus:ring-sky"
                    placeholder="Tu nombre"
                  />
                  
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.name}
                    </p>
                  )}

                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-bold text-cloud">
                    Correo electrónico
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full rounded-md border border-navy-foreground/20 bg-pure/10 px-4 py-3 text-pure placeholder:text-cloud/60 focus:border-sky focus:outline-none focus:ring-1 focus:ring-sky"
                    placeholder="tu@email.com"
                  />

                  {errors.email && (
                   <p className="mt-1 text-sm text-red-400">
                    {errors.email}
                   </p>
                )}

                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-bold text-cloud">
                    Teléfono
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    maxLength={10}
                    value={formState.phone}
                    onChange={(e) => {
                      const onlyNumbers = e.target.value.replace(/\D/g, "");

                      setFormState((prev) => ({
                        ...prev,
                        phone: onlyNumbers,
                      }));
                    }}
                    className="w-full rounded-md border border-navy-foreground/20 bg-pure/10 px-4 py-3 text-pure placeholder:text-cloud/60 focus:border-sky focus:outline-none focus:ring-1 focus:ring-sky"
                    placeholder="8112345678"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.phone}
                    </p>
                  )} 

                </div>
                <div>
                  <label htmlFor="projectType" className="mb-1.5 block text-sm font-bold text-cloud">
                    Tipo de proyecto
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formState.projectType}
                    onChange={handleChange}
                    className="w-full rounded-md border border-navy-foreground/20 bg-pure/10 px-4 py-3 text-pure focus:border-sky focus:outline-none focus:ring-1 focus:ring-sky"
                  >
                    <option value="" disabled>
                      Selecciona un servicio
                    </option>

                    <option value="remodelacion">Remodelación e interiorismo</option>

                    <option value="obra-civil">Obra civil</option>

                    <option value="estructura-metalica">Estructuras metálicas</option>

                    <option value="plafon">Plafón falso</option>

                    <option value="albanileria">Albañilería</option>

                    <option value="demolicion">Demolición</option>

                    <option value="proyecto-integral">Proyecto integral</option>

                    <option value="otro">Otro</option>
                  </select>
                    
                  {errors.projectType && (
                   <p className="mt-1 text-sm text-red-400">
                    {errors.projectType}
                   </p>
                  )}

                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-bold text-cloud">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full rounded-md border border-navy-foreground/20 bg-pure/10 px-4 py-3 text-pure placeholder:text-cloud/60 focus:border-sky focus:outline-none focus:ring-1 focus:ring-sky"
                  placeholder="Cuéntanos los detalles de tu proyecto..."
                />
                 {errors.message && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.message}
                  </p>
                )}

              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-teal px-6 py-3 text-base font-bold text-pure transition-colors hover:bg-sky hover:text-navy"
              >
                <Send className="h-4 w-4" />
                Enviar mensaje
              </button>
            </form>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-start gap-4">
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-pure/10 text-sky">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-pure">Oficina principal</h3>
                <p className="text-sm text-cloud">Monterrey, Nuevo León, México</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-pure/10 text-sky">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-pure">Teléfono</h3>
                <a href="tel:+528129474909" className="text-sm text-cloud hover:text-sky transition-colors">
                  +52 81 2947 4909
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-pure/10 text-sky">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-pure">Correo</h3>
                <a href="mailto:ayala25899@gmail.com" className="text-sm text-cloud hover:text-sky transition-colors">
                  ayala25899@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-pure/10 text-sky">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-pure">Horario</h3>
                <p className="text-sm text-cloud">Lunes a Viernes: 8:00 - 18:00</p>
                <p className="text-sm text-cloud">Sábados: 9:00 - 14:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
