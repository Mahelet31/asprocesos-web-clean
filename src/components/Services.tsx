import { Ruler, Truck, HardHat, Hammer } from "lucide-react";

const services = [
  {
    icon: Ruler,
    title: "Remodelación e Interiorismo",
    description:
      "Adecuación de oficinas, departamentos, áreas sociales y espacios comerciales mediante plafones, acabados, restauración de muros y soluciones de interiorismo funcional.",
  },
  {
    icon: Truck,
    title: "Rehabilitación Estructural",
    description:
      "Rehabilitación de barandales, cubiertas, estructuras metálicas, techos y trabajos de herrería para prolongar la vida útil de los inmuebles.",
  },
  {
    icon: HardHat,
    title: "Albañilería y Remodelaciones",
    description:
      "Reparamos, renovamos y adaptamos espacios existentes. Trabajos de albañilería, resanes, reparación de muros y pisos, demoliciones menores y adecuaciones para mejorar la funcionalidad y apariencia de tus instalaciones.",
  },
  {
    icon: Hammer,
    title: "Ingeniería y Gestión del Proyecto",
    description:
      "Cada proyecto incluye levantamiento técnico, alcances definidos, programa de trabajo y seguimiento documental para asegurar control y cumplimiento.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-20 md:py-28 bg-pure">
      <div className="container-wide section-padding">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-sm font-bold text-teal uppercase tracking-wider">Nuestros servicios</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-black text-navy">
            Soluciones constructivas de principio a fin
          </h2>
          <p className="mt-4 text-lg text-navy/70">
            Acompañamos cada etapa de tu proyecto para garantizar calidad, puntualidad y resultados que superen expectativas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl border border-cloud bg-pure p-6 transition-all hover:border-teal hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-cloud text-navy transition-colors group-hover:bg-teal group-hover:text-pure">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">{service.title}</h3>
              <p className="text-sm leading-relaxed text-navy/70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
