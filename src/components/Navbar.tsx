import { useState, useEffect } from 'react'

const LogoIcon = () => (
  <svg aria-hidden="true" width="34" height="34" viewBox="0 0 64 64" fill="none">
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

interface NavLink {
  href: string
  label: string
}

const navLinks: NavLink[] = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#galeria', label: 'Galería' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav
        role="navigation"
        aria-label="Navegación principal"
        className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16"
      >
        {/* Logo */}
        <a
          href="#inicio"
          className="flex items-center gap-2"
          aria-label="Florería Valentina — Inicio"
        >
          <LogoIcon />
          <span
            className="text-lg font-semibold tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#be185d' }}
          >
            Florería <span style={{ color: '#1c1917' }}>Valentina</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7 list-none m-0 p-0">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm font-medium transition-colors duration-200 hover:text-rose-700"
                style={{ color: '#44403c', textDecoration: 'none' }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <a
          href="#contacto"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-px"
          style={{ backgroundColor: '#be185d' }}
        >
          Hacer un pedido
        </a>

        {/* Hamburger mobile */}
        <button
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-5 h-0.5 transition-transform duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} style={{ backgroundColor: '#44403c' }} />
          <span className={`block w-5 h-0.5 transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} style={{ backgroundColor: '#44403c' }} />
          <span className={`block w-5 h-0.5 transition-transform duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{ backgroundColor: '#44403c' }} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-stone-100 ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
        inert={!menuOpen || undefined}
      >
        <ul className="flex flex-col px-4 py-3 gap-1 list-none m-0 p-4">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={closeMenu}
                className="block py-2.5 text-sm font-medium hover:text-rose-700 transition-colors"
                style={{ color: '#44403c', textDecoration: 'none' }}
              >
                {label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contacto"
              onClick={closeMenu}
              className="block text-center py-2.5 px-4 rounded-full text-sm font-semibold text-white"
              style={{ backgroundColor: '#be185d', textDecoration: 'none' }}
            >
              Hacer un pedido
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
