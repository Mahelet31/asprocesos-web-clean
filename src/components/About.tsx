import aboutImage from "@/assets/Dibujo-digital-techo-alberca.jpeg";
import { CheckCircle } from "lucide-react";

const highlights = [
  "Levantamiento técnico y diagnóstico del proyecto",
  "Cotizaciones con alcance detallado (Scope of Work)",
  "Planeación y seguimiento mediante programa de trabajo",
  "Entrega formal con documentación y trazabilidad",
];

export function About() {
  return (
    <section id="nosotros" className="py-20 md:py-28 bg-pure">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-sm font-bold text-teal uppercase tracking-wider">Nosotros</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-black text-navy text-balance">
              Planeamos cada proyecto para ejecutarlo con certeza.
            </h2>
            <p className="mt-5 text-lg text-navy/70 leading-relaxed">
              En <strong>ASProcesos</strong> Desarrollamos proyectos de remodelación, rehabilitación y adecuación de espacios residenciales, comerciales y corporativos en Nuevo León. Nuestro compromiso es transformar cada espacio mediante soluciones funcionales, seguras y de alta calidad.
            </p>
            <p className="mt-4 text-lg text-navy/70 leading-relaxed">
              Más que ejecutar trabajos, planificamos cada proyecto desde el inicio.
              Realizamos levantamientos técnicos, definimos el alcance de los trabajos,
              elaboramos programas de ejecución y damos seguimiento durante cada etapa para
              garantizar resultados organizados, cumplimiento en tiempos y una entrega
              profesional.
            </p>

            <ul className="mt-8 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-navy">
                  <CheckCircle className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                  <span className="font-bold">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutImage}
                alt="Dibujo de proyecto antes de ser realizado"
                loading="lazy"
                width={1200}
                height={800}
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/90 to-transparent p-6 md:p-8">
                <p className="text-pure text-lg md:text-xl font-black">Planeación • Ejecución • Control • Entrega</p>
                <p className="text-cloud text-sm mt-1">Cada proyecto respaldado por documentación y seguimiento.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
