const LogoIcon = () => (
  <svg aria-hidden="true" width="28" height="28" viewBox="0 0 64 64" fill="none">
    <ellipse cx="32" cy="18" rx="6" ry="10" fill="#f9a8d4" transform="rotate(0 32 32)"/>
    <ellipse cx="32" cy="18" rx="6" ry="10" fill="#f9a8d4" transform="rotate(60 32 32)"/>
    <ellipse cx="32" cy="18" rx="6" ry="10" fill="#fda4af" transform="rotate(120 32 32)"/>
    <ellipse cx="32" cy="18" rx="6" ry="10" fill="#fda4af" transform="rotate(180 32 32)"/>
    <ellipse cx="32" cy="18" rx="6" ry="10" fill="#fda4af" transform="rotate(240 32 32)"/>
    <ellipse cx="32" cy="18" rx="6" ry="10" fill="#f9a8d4" transform="rotate(300 32 32)"/>
    <circle cx="32" cy="32" r="9" fill="#be185d"/>
    <circle cx="32" cy="32" r="5" fill="#fdf2f8"/>
  </svg>
)

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer role="contentinfo" className="py-12" style={{ backgroundColor: '#1c1917', color: '#d6d3d1' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <a
              href="#inicio"
              className="flex items-center gap-2 mb-4"
              style={{ textDecoration: 'none' }}
              aria-label="Florería Valentina — Inicio"
            >
              <LogoIcon />
              <span
                className="text-lg font-semibold"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#fda4af' }}
              >
                Florería <span style={{ color: '#fff' }}>Valentina</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed mb-5" style={{ color: '#a8a29e' }}>
              Arreglos florales artesanales para bodas, eventos y momentos especiales.
              Con amor desde 2014 en la Ciudad de México.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram de Florería Valentina"
                className="w-9 h-9 flex items-center justify-center rounded-full transition-all hover:scale-110"
                style={{ backgroundColor: '#44403c' }}
              >
                <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fda4af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook de Florería Valentina"
                className="w-9 h-9 flex items-center justify-center rounded-full transition-all hover:scale-110"
                style={{ backgroundColor: '#44403c' }}
              >
                <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fda4af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/5215512345678"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp de Florería Valentina"
                className="w-9 h-9 flex items-center justify-center rounded-full transition-all hover:scale-110"
                style={{ backgroundColor: '#44403c' }}
              >
                <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="#86efac">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Nav links */}
          <nav aria-label="Navegación del pie de página">
            <p className="text-sm font-semibold mb-4" style={{ color: '#fff' }}>Navegación</p>
            <ul className="flex flex-col gap-2.5 list-none m-0 p-0">
              {[
                { href: '#inicio', label: 'Inicio' },
                { href: '#servicios', label: 'Servicios' },
                { href: '#galeria', label: 'Galería' },
{ href: '#contacto', label: 'Contacto' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: '#a8a29e', textDecoration: 'none' }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact info */}
          <div>
            <p className="text-sm font-semibold mb-4" style={{ color: '#fff' }}>Contacto</p>
            <ul className="flex flex-col gap-3 list-none m-0 p-0">
              <li>
                <a
                  href="https://wa.me/5215512345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm transition-colors hover:text-white"
                  style={{ color: '#a8a29e', textDecoration: 'none' }}
                  aria-label="WhatsApp: 55 1234 5678"
                >
                  <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="#a8a29e">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                  </svg>
                  +52 55 1234 5678
                </a>
              </li>
              <li>
                <a
                  href="mailto:pedidos@floreriavalentina.mx"
                  className="flex items-center gap-2 text-sm transition-colors hover:text-white"
                  style={{ color: '#a8a29e', textDecoration: 'none' }}
                >
                  <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#a8a29e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                  pedidos@floreriavalentina.mx
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: '#a8a29e' }}>
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#a8a29e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
                Lunes a Sábado<br/>8:00 am – 7:00 pm
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + bottom */}
        <div
          className="border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{ borderColor: '#44403c', color: '#a8a29e' }}
        >
          <p>© {currentYear} Florería Valentina. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <a href="#aviso" className="hover:text-white transition-colors" style={{ color: '#a8a29e', textDecoration: 'none' }}>
              Aviso de Privacidad
            </a>
            <span aria-hidden="true">·</span>
            <span>Hecho con 🌸 en Ciudad de México</span>
          </div>
        </div>
      </div>

      {/* Privacy notice anchor */}
      <div id="aviso" aria-hidden="true" />
    </footer>
  )
}
