import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo-asprocesos.png";

export function Footer() {
  return (
    <footer className="bg-pure border-t border-cloud py-12">
      <div className="container-wide section-padding">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Logo */}
          <div>
            <a
              href="#inicio"
              className="flex items-center gap-3 text-navy font-bold text-lg"
            >
              <img
                src={logo}
                alt="AS PROCESOS"
                className="h-10 w-auto"
              />
              <span translate="no">AS PROCESOS</span>
            </a>

            <p className="mt-4 text-sm text-navy/70 max-w-xs">
              Especialistas en remodelación, obra civil, estructuras metálicas e
              ingeniería para espacios residenciales, comerciales y corporativos
              en Nuevo León.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="font-bold text-navy mb-4">
              Navegación
            </h3>

            <nav className="flex flex-col gap-2">
              <a href="#inicio">Inicio</a>
              <a href="#servicios">Servicios</a>
              <a href="#proyectos">Proyectos</a>
              <a href="#nosotros">Nosotros</a>
              <a href="#contacto">Contacto</a>
            </nav>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-bold text-navy mb-4">
              Contacto
            </h3>

            <div className="space-y-3 text-sm">

              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-teal" />
                <a href="tel:+528143471100">
                  +52 81 4347 1100
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-teal" />
                <a href="mailto:ayala25899@gmail.com">
                  ayala25899@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-teal" />
                <span>Monterrey, Nuevo León</span>
              </div>

            </div>

          </div>

        </div>

        {/* CTA */}
        <div className="mt-12 rounded-xl bg-cloud p-8 text-center">

          <h3 className="text-2xl font-black text-navy">
            ¿Tienes un proyecto en mente?
          </h3>

          <p className="mt-3 text-navy/70">
            Cuéntanos tu idea y recibe una cotización personalizada.
          </p>

          <a
            href="#contacto"
            className="mt-6 inline-block rounded-md bg-teal px-8 py-3 font-bold text-pure hover:bg-navy transition-colors"
          >
            Solicitar cotización
          </a>

        </div>

        <div className="mt-10 border-t border-cloud pt-6 text-center">

          <p className="text-sm text-navy/60">
            © {new Date().getFullYear()} AS PROCESOS. Todos los derechos reservados.
          </p>

        </div>

      </div>
    </footer>
  );
}