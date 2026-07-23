import areaSocial from "@/assets/area-social-quinta-1.jpeg";
import techoPatio from "@/assets/techo-patio-2.jpeg";
import techoAlberca from "@/assets/techo-alberca-3.jpeg";
import cocinaExterior from "@/assets/cocina-exterior-techo-4.jpeg";
import gimnasio from "@/assets/gimnasio-5.jpeg";
import remodelacionAlberca from "@/assets/remodelacion-alberca-6.jpeg";

const projects = [
  {
    image: areaSocial,
    title: "Adecuación de área social en quinta residencial",
    category: "Remodelación",
    location: "San Pedro Garza García",
    alt: "Rehabilitación completa del área social con nuevos acabados, estructura y mejoras funcionales.",
  },
  {
    image: techoPatio,
    title: "Construcción de techo para patio",
    category: "Residencial",
    location: "Apodaca",
    alt: "Complejo de condominios con áreas verdes, alberca y balcones modernos",
  },
  {
    image: techoAlberca,
    title: "Rehabilitación de techumbre para alberca",
    category: "Rehabilitación",
    location: "Monterrey",
    alt: "Instalación de estructura y cubierta para proteger el área de alberca y mejorar su funcionalidad.",
  },
  {
    image: cocinaExterior,
    title: "Construcción de cocina exterior con asador",
    category: "Exterior",
    location: "Monterrey",
    alt: "Diseño e instalación de cocina para exteriores con cubierta y acabados de alta durabilidad.",
  
  },
  {
    image: gimnasio,
    title: "Adecuación de gimnasio residencial",
    category: "Remodelación",
    location: "Escobedo",
    alt: "Integración de área de gimnasio en residencia.",
  },
  {
    image: remodelacionAlberca,
    title: "Remodelación integral de alberca",
    category: "Residencial",
    location: "San Nicolás de los Garza",
    alt: "Instalación de cubierta para alberca: techo.",
  },
];

export function ProjectsGallery() {
  return (
    <section id="proyectos" className="py-20 md:py-28 bg-cloud">
      <div className="container-wide section-padding">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-sm font-bold text-teal uppercase tracking-wider">Proyectos realizados</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-black text-navy">Trabajos que respaldan nuestra experiencia</h2>
          <p className="mt-4 text-lg text-navy/70">
            Cada proyecto es una prueba de nuestro compromiso con la calidad, la innovación y la satisfacción de nuestros clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-xl bg-pure shadow-sm transition-all hover:shadow-xl"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="inline-block rounded-full bg-sky/30 px-3 py-1 text-xs font-bold text-navy mb-3">
                  {project.category}
                </span>
                <h3 className="text-lg font-bold text-navy">{project.title}</h3>
                <p className="mt-1 text-sm text-navy/60">{project.location}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
