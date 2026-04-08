interface Service {
  emoji: string
  title: string
  desc: string
  tag: string
  tagColor: string
  tagText: string
}

const services: Service[] = [
  {
    emoji: '💐',
    title: 'Ramos de Novia',
    desc: 'Diseños únicos y personalizados para el día más especial de tu vida. Trabajamos con las flores que más te representen.',
    tag: 'Bodas',
    tagColor: '#fce7f3',
    tagText: '#9d174d',
  },
  {
    emoji: '🌹',
    title: 'Arreglos Románticos',
    desc: 'Rosas, tulipanes y flores de temporada para sorprender en aniversarios, San Valentín o simplemente porque sí.',
    tag: 'Regalos',
    tagColor: '#ffe4e6',
    tagText: '#be185d',
  },
  {
    emoji: '🌿',
    title: 'Centros de Mesa',
    desc: 'Composiciones elegantes para eventos, cenas y celebraciones que dejan a tus invitados con la boca abierta.',
    tag: 'Eventos',
    tagColor: '#dcfce7',
    tagText: '#15803d',
  },
  {
    emoji: '🌸',
    title: 'Flores de Temporada',
    desc: 'Las flores más frescas y hermosas según la época del año. Girasoles, claveles, peonías, lavanda y mucho más.',
    tag: 'Siempre frescas',
    tagColor: '#fef9c3',
    tagText: '#92400e',
  },
  {
    emoji: '🏢',
    title: 'Arreglos Corporativos',
    desc: 'Espacios de trabajo y recepción que inspiran. Suscripciones semanales o mensuales para tu empresa u oficina.',
    tag: 'Empresas',
    tagColor: '#e0f2fe',
    tagText: '#0369a1',
  },
  {
    emoji: '🎁',
    title: 'Canastas y Regalos',
    desc: 'Combinaciones de flores, chocolates, vinos y detalles especiales en hermosas canastas listas para regalar.',
    tag: 'Ocasiones',
    tagColor: '#f3e8ff',
    tagText: '#7e22ce',
  },
]

export default function Servicios() {
  return (
    <section
      id="servicios"
      aria-labelledby="services-heading"
      className="py-20 md:py-28"
      style={{ backgroundColor: '#fff' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
            style={{ backgroundColor: '#ffe4e6', color: '#be185d' }}
          >
            Lo que hacemos
          </span>
          <h2
            id="services-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: '#1c1917' }}
          >
            Arreglos para cada momento
          </h2>
          <p className="text-base leading-relaxed" style={{ color: '#78716c' }}>
            Desde bodas íntimas hasta grandes eventos corporativos, creamos arreglos florales
            que capturan la emoción de cada ocasión especial.
          </p>
        </div>

        {/* Grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {services.map((svc) => (
            <li
              key={svc.title}
              className="group flex flex-col gap-4 p-6 rounded-2xl border transition-all duration-200 hover:-translate-y-1 hover:shadow-md cursor-default"
              style={{ borderColor: '#fecdd3', backgroundColor: '#fff' }}
            >
              {/* Emoji icon */}
              <div
                className="w-14 h-14 flex items-center justify-center rounded-2xl text-2xl"
                style={{ backgroundColor: '#fff1f2' }}
                aria-hidden="true"
              >
                {svc.emoji}
              </div>

              <div className="flex items-start justify-between gap-2">
                <h3
                  className="text-lg font-bold"
                  style={{ color: '#1c1917', fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {svc.title}
                </h3>
                <span
                  className="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: svc.tagColor, color: svc.tagText }}
                >
                  {svc.tag}
                </span>
              </div>

              <p className="text-sm leading-relaxed" style={{ color: '#78716c' }}>
                {svc.desc}
              </p>

              <a
                href="#contacto"
                className="mt-auto text-sm font-semibold flex items-center gap-1 transition-colors hover:gap-2"
                style={{ color: '#be185d', textDecoration: 'none' }}
              >
                Solicitar
                <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </li>
          ))}
        </ul>

        {/* CTA banner */}
        <div
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-5 px-7 py-6 rounded-2xl"
          style={{ background: 'linear-gradient(135deg, #fff1f2 0%, #f0fdf4 100%)', border: '1px solid #fecdd3' }}
        >
          <div>
            <p className="font-bold text-base mb-1" style={{ color: '#1c1917', fontFamily: "'Playfair Display', Georgia, serif" }}>
              ¿No encuentras lo que buscas?
            </p>
            <p className="text-sm" style={{ color: '#78716c' }}>
              Creamos arreglos personalizados según tu visión, presupuesto y ocasión.
            </p>
          </div>
          <a
            href="#contacto"
            className="shrink-0 px-6 py-3 rounded-full font-semibold text-sm text-white transition-all hover:opacity-90 hover:-translate-y-0.5"
            style={{ backgroundColor: '#be185d', textDecoration: 'none' }}
          >
            Diseño personalizado
          </a>
        </div>
      </div>
    </section>
  )
}
