import { ReactNode } from 'react'

interface Reason {
  icon: ReactNode
  title: string
  desc: string
}

interface Stat {
  number: string
  label: string
}

const reasons: Reason[] = [
  {
    icon: (
      <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    title: 'Flores siempre frescas',
    desc: 'Recibimos flores directamente de los mejores viveros de la región, garantizando frescura y duración en cada arreglo.',
  },
  {
    icon: (
      <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
    title: 'Entrega el mismo día',
    desc: 'Pedidos antes de las 2 pm se entregan el mismo día en toda la CDMX. Porque las flores no pueden esperar.',
  },
  {
    icon: (
      <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: 'Hecho con amor',
    desc: 'Cada arreglo lo diseñamos pensando en la persona que lo va a recibir. No somos una fábrica, somos artesanos florales.',
  },
  {
    icon: (
      <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    title: 'Más de 10 años de experiencia',
    desc: 'Desde 2014 llevamos alegría, color y vida a hogares, eventos y celebraciones en la Ciudad de México.',
  },
]

const stats: Stat[] = [
  { number: '10+', label: 'Años de experiencia' },
  { number: '5,000+', label: 'Arreglos creados' },
  { number: '500+', label: 'Bodas y eventos' },
  { number: '98%', label: 'Clientes satisfechos' },
]

export default function Nosotros() {
  return (
    <section
      id="nosotros"
      aria-labelledby="about-heading"
      className="py-20 md:py-28"
      style={{ backgroundColor: '#fff' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-20">

          {/* Left: text */}
          <div>
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
              style={{ backgroundColor: '#ffe4e6', color: '#be185d' }}
            >
              Nuestra historia
            </span>
            <h2
              id="about-heading"
              className="text-3xl md:text-4xl font-bold mb-5"
              style={{ color: '#1c1917' }}
            >
              Más de una década regalando belleza
            </h2>
            <p className="text-base leading-relaxed mb-5" style={{ color: '#78716c' }}>
              Somos una florería familiar ubicada en el corazón de la CDMX. Valentina,
              nuestra fundadora, comenzó con un pequeño puesto en el mercado de Jamaica
              y hoy tenemos nuestra propia boutique floral.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: '#78716c' }}>
              Creemos que las flores tienen el poder de decir lo que las palabras
              no pueden. Por eso ponemos todo nuestro corazón en cada arreglo,
              grande o pequeño.
            </p>

            {/* Signature-style detail */}
            <div
              className="flex items-center gap-4 p-5 rounded-2xl"
              style={{ backgroundColor: '#fff1f2', border: '1px solid #fecdd3' }}
            >
              {/* Reemplaza la URL con la foto de Valentina */}
              <img
                src="https://images.pexels.com/photos/7564333/pexels-photo-7564333.jpeg?w=120&q=80"
                alt="Valentina Rosas"
                className="w-14 h-14 rounded-full shrink-0 object-cover object-top"
                style={{ border: '2px solid #fecdd3' }}
              />
              <div>
                <p className="font-bold text-sm" style={{ color: '#1c1917', fontFamily: "'Playfair Display', Georgia, serif" }}>
                  Valentina Rosas
                </p>
                <p className="text-xs" style={{ color: '#57534e' }}>Fundadora & Diseñadora Floral</p>
                <p className="text-xs mt-1 italic" style={{ color: '#be185d' }}>
                  "Una flor bien colocada puede cambiar una habitación entera."
                </p>
              </div>
            </div>
          </div>

          {/* Right: photo — reemplaza la URL con tu imagen */}
          <div className="rounded-3xl overflow-hidden" style={{ border: '1.5px solid #fecdd3', height: '420px' }}>
            <img
              src="https://images.pexels.com/photos/16278083/pexels-photo-16278083.jpeg?w=800&q=80"
              alt="Nuestra florería"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Stats */}
        <ul
          className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-20"
          role="list"
          aria-label="Estadísticas de la florería"
        >
          {stats.map((s) => (
            <li
              key={s.label}
              className="flex flex-col items-center text-center p-6 rounded-2xl"
              style={{ backgroundColor: '#fff1f2', border: '1px solid #fecdd3' }}
            >
              <span
                className="text-3xl font-bold mb-1"
                style={{ color: '#be185d', fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {s.number}
              </span>
              <span className="text-sm" style={{ color: '#57534e' }}>{s.label}</span>
            </li>
          ))}
        </ul>

        {/* Why us */}
        <div className="text-center mb-10">
          <h3
            className="text-2xl md:text-3xl font-bold mb-3"
            style={{ color: '#1c1917' }}
          >
            ¿Por qué elegir Florería Valentina?
          </h3>
          <p className="text-sm" style={{ color: '#78716c' }}>
            No somos una florería más. Somos tu aliado para los momentos que importan.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6" role="list">
          {reasons.map((r) => (
            <li
              key={r.title}
              className="flex gap-4 p-6 rounded-2xl"
              style={{ backgroundColor: '#fdf8f5', border: '1px solid #fecdd3' }}
            >
              <div
                className="w-12 h-12 shrink-0 flex items-center justify-center rounded-xl"
                style={{ backgroundColor: '#ffe4e6', color: '#be185d' }}
              >
                {r.icon}
              </div>
              <div>
                <h4
                  className="font-bold text-base mb-1"
                  style={{ color: '#1c1917', fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {r.title}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: '#78716c' }}>
                  {r.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
