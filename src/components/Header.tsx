import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo-asprocesos.png";

export function Header() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-pure/95 backdrop-blur-sm border-b border-cloud">
      <div className="container-wide section-padding">
        <div className="flex h-16 items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2 text-navy font-bold text-lg">
            <img src={logo} alt="AS PROCESOS" className="h-9 w-auto"  translate="no" />
            <span translate="no">AS PROCESOS</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-bold text-navy/80 hover:text-teal transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+528129474909"
              className="flex items-center gap-2 text-sm font-bold text-navy hover:text-teal transition-colors"
            >
              <Phone className="h-4 w-4" />
              +52 81 4347 1100
            </a>
            <a
              href="#contacto"
              className="rounded-md bg-navy px-4 py-2 text-sm font-bold text-pure transition-colors hover:bg-teal"
            >
              Cotizar proyecto
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-navy hover:bg-cloud"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-cloud bg-pure">
          <nav className="container-wide section-padding flex flex-col gap-2 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-bold text-navy hover:bg-cloud"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-navy px-4 py-3 text-center text-sm font-bold text-pure transition-colors hover:bg-teal"
            >
              Cotizar proyecto
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
