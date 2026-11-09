
import {
  PaintRoller,
  Hammer,
  Droplets,
  Building2,
  Trees,
  ClipboardList,
  Workflow,
} from "lucide-react";

const services = [
  {
    icon: PaintRoller,
    title: "Remodelación y acabados",
    description:
      "Renovamos viviendas, oficinas y comercios mediante trabajos de tablaroca, plafones, pintura, albañilería menor y recubrimientos para muros y pisos.",
  },
  {
    icon: Hammer,
    title: "Herrería y cubiertas",
    description:
      "Fabricamos, instalamos y rehabilitamos barandales, canceles, puertas, portones y protecciones. También realizamos techumbres con estructura metálica, lámina y policarbonato.",
  },
  {
    icon: Droplets,
    title: "Instalaciones hidráulicas y pluviales",
    description:
      "Instalamos y reparamos tuberías, válvulas, medidores y coladeras. Atendemos fugas, distribución de agua y sistemas de desalojo pluvial.",
  },
  {
    icon: Building2,
    title: "Mantenimiento de inmuebles",
    description:
      "Conservamos y reparamos luminarias, herrajes, rejillas y aislamiento de tuberías. Realizamos sellado de filtraciones y rehabilitación de acabados afectados por humedad.",
  },
  {
    icon: Trees,
    title: "Áreas comunes y equipamiento",
    description:
      "Adecuamos áreas sociales, estacionamientos y espacios para mascotas. Instalamos señalización, protecciones y equipamiento para mejorar su uso y funcionalidad.",
  },
  {
    icon: ClipboardList,
    title: "Gestión y supervisión de proyectos",
    description:
      "Realizamos levantamientos, presupuestos, definición de alcances y programación de actividades. Supervisamos los trabajos y documentamos avances y entregas.",
  },
  {
    icon: Workflow,
    title: "Procesos y documentación",
    description:
      "Elaboramos procedimientos, formatos, controles e indicadores para estandarizar actividades, organizar la operación y facilitar el seguimiento de tu empresa.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-20 md:py-28 bg-pure">
      <div className="container-wide section-padding">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-sm font-bold text-teal uppercase tracking-wider">
            Nuestros servicios
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-black text-navy">
            Soluciones para espacios, proyectos y procesos
          </h2>

          <p className="mt-4 text-lg text-navy/70">
            Acompañamos a nuestros clientes con soluciones de remodelación,
            mantenimiento, adecuación y gestión para mejorar sus espacios y
            operaciones.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {services.map((service) => (
            <div
  key={service.title}
  className={`group rounded-xl border border-cloud bg-pure p-6 transition-all hover:border-teal hover:shadow-lg hover:-translate-y-1 ${
    services.length === 7 && service.title === "Procesos y documentación"
      ? "lg:col-span-6"
: "lg:col-span-2"
  }`}
>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-cloud text-navy transition-colors group-hover:bg-teal group-hover:text-pure">
                <service.icon className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-bold text-navy mb-2">
                {service.title}
              </h3>

              <p className="text-sm leading-relaxed text-navy/70">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
