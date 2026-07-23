import heroImage from "@/assets/techo-alberca-3.jpeg";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Proyecto de remodelación y adecuación de piscina ejecutado por ASProcesos en Nuevo León."
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/40" />
      </div>

      <div className="relative z-10 container-wide section-padding text-center md:text-left">
        <div className="max-w-3xl">
          <span className="inline-block rounded-full bg-sky/20 px-4 py-1.5 text-sm font-bold text-sky backdrop-blur-sm mb-6">
            Remodelación para espacios corporativos y comerciales
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-pure leading-tight text-balance">
            Transformamos espacios con remodelación, obra civil e ingeniería.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-cloud max-w-2xl leading-relaxed">
            Desarrollamos proyectos para oficinas, edificios, plazas comerciales, residencias y áreas comunes, cuidando cada etapa desde la planeación hasta la entrega.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#proyectos"
              className="rounded-md bg-teal px-6 py-3 text-base font-bold text-pure transition-all hover:bg-sky hover:text-navy"
            >
              Explorar proyectos
            </a>
            <a
              href="#contacto"
              className="rounded-md border-2 border-pure px-6 py-3 text-base font-bold text-pure transition-all hover:bg-pure hover:text-navy"
            >
              Solicitar cotización
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
