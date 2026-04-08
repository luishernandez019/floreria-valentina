const PetalLeft = () => (
  <svg
    aria-hidden="true"
    className="animate-float"
    style={{ animationDelay: '0s' }}
    viewBox="0 0 160 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Stem */}
    <path d="M80 195 Q78 140 80 80" stroke="#86efac" strokeWidth="3" strokeLinecap="round"/>
    {/* Leaves */}
    <path d="M80 140 Q50 120 40 100 Q65 110 80 130" fill="#86efac" opacity="0.7"/>
    <path d="M80 115 Q110 95 118 75 Q95 88 80 108" fill="#86efac" opacity="0.5"/>
    {/* Big bloom */}
    <ellipse cx="80" cy="55" rx="14" ry="24" fill="#fda4af" opacity="0.85" transform="rotate(0 80 55)"/>
    <ellipse cx="80" cy="55" rx="14" ry="24" fill="#fda4af" opacity="0.85" transform="rotate(60 80 55)"/>
    <ellipse cx="80" cy="55" rx="14" ry="24" fill="#fda4af" opacity="0.85" transform="rotate(120 80 55)"/>
    <ellipse cx="80" cy="55" rx="12" ry="22" fill="#fb7185" opacity="0.7" transform="rotate(180 80 55)"/>
    <ellipse cx="80" cy="55" rx="12" ry="22" fill="#fb7185" opacity="0.7" transform="rotate(240 80 55)"/>
    <ellipse cx="80" cy="55" rx="12" ry="22" fill="#fb7185" opacity="0.7" transform="rotate(300 80 55)"/>
    <circle cx="80" cy="55" r="13" fill="#be185d"/>
    <circle cx="80" cy="55" r="7" fill="#fdf2f8" opacity="0.8"/>
    {/* Small bud */}
    <ellipse cx="55" cy="90" rx="7" ry="12" fill="#fda4af" opacity="0.6" transform="rotate(-20 55 90)"/>
    <circle cx="55" cy="83" r="5" fill="#be185d" opacity="0.7"/>
  </svg>
)

const PetalRight = () => (
  <svg
    aria-hidden="true"
    className="animate-float"
    style={{ animationDelay: '1.2s' }}
    viewBox="0 0 140 180"
    fill="none"
  >
    <path d="M70 175 Q68 125 72 70" stroke="#86efac" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M72 130 Q100 110 108 90 Q85 103 72 122" fill="#86efac" opacity="0.6"/>
    {/* Bloom */}
    <ellipse cx="72" cy="45" rx="12" ry="20" fill="#f9a8d4" opacity="0.9" transform="rotate(0 72 45)"/>
    <ellipse cx="72" cy="45" rx="12" ry="20" fill="#f9a8d4" opacity="0.9" transform="rotate(72 72 45)"/>
    <ellipse cx="72" cy="45" rx="12" ry="20" fill="#fda4af" opacity="0.8" transform="rotate(144 72 45)"/>
    <ellipse cx="72" cy="45" rx="12" ry="20" fill="#fda4af" opacity="0.8" transform="rotate(216 72 45)"/>
    <ellipse cx="72" cy="45" rx="12" ry="20" fill="#f9a8d4" opacity="0.9" transform="rotate(288 72 45)"/>
    <circle cx="72" cy="45" r="11" fill="#9f1239"/>
    <circle cx="72" cy="45" r="6" fill="#fdf2f8" opacity="0.7"/>
  </svg>
)

const LeafAccent = () => (
  <svg aria-hidden="true" className="animate-float" style={{ animationDelay: '2s' }} viewBox="0 0 80 110" fill="none">
    <path d="M40 105 Q38 70 40 30" stroke="#86efac" strokeWidth="2" strokeLinecap="round"/>
    <path d="M40 80 Q10 60 5 35 Q28 55 40 72" fill="#4ade80" opacity="0.5"/>
    <path d="M40 55 Q68 38 70 15 Q50 33 40 50" fill="#4ade80" opacity="0.4"/>
    <ellipse cx="40" cy="18" rx="8" ry="14" fill="#fda4af" opacity="0.8" transform="rotate(0 40 18)"/>
    <ellipse cx="40" cy="18" rx="8" ry="14" fill="#fda4af" opacity="0.8" transform="rotate(120 40 18)"/>
    <ellipse cx="40" cy="18" rx="8" ry="14" fill="#fda4af" opacity="0.8" transform="rotate(240 40 18)"/>
    <circle cx="40" cy="18" r="7" fill="#be185d"/>
  </svg>
)

export default function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{ background: 'linear-gradient(135deg, #fff1f2 0%, #fdf8f5 50%, #f0fdf4 100%)' }}
    >
      {/* Decorative flowers */}
      <div className="absolute top-12 right-2 md:right-10 w-36 md:w-52 text-rose-400">
        <PetalLeft />
      </div>
      <div className="absolute bottom-12 right-24 md:right-48 w-24 md:w-36">
        <PetalRight />
      </div>
      <div className="absolute top-1/3 left-2 md:left-6 w-20 md:w-28 hidden sm:block">
        <LeafAccent />
      </div>

      {/* Scattered petals */}
      <span aria-hidden="true" className="absolute top-32 left-1/4 w-3 h-3 rounded-full opacity-40 animate-float" style={{ backgroundColor: '#fda4af', animationDelay: '0.5s' }} />
      <span aria-hidden="true" className="absolute top-48 right-1/3 w-2 h-2 rounded-full opacity-30 animate-float" style={{ backgroundColor: '#be185d', animationDelay: '1s' }} />
      <span aria-hidden="true" className="absolute bottom-32 left-1/3 w-2.5 h-2.5 rounded-full opacity-35 animate-float" style={{ backgroundColor: '#86efac', animationDelay: '1.7s' }} />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24 w-full">
        <div className="max-w-2xl">

          {/* Tag */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6 animate-fade-in"
            style={{ backgroundColor: '#dcfce7', color: '#15803d' }}
          >
            <span aria-hidden="true">✦</span>
            Floristería artesanal · CDMX
          </div>

          {/* Headline */}
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 animate-fade-up"
            style={{ color: '#1c1917', fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Flores que{' '}
            <span style={{ color: '#be185d' }}>hablan</span>{' '}
            por ti
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl leading-relaxed mb-8 animate-fade-up delay-100"
            style={{ color: '#44403c' }}
          >
            Arreglos florales diseñados con amor para bodas, eventos, regalos y cada
            momento especial que merece ser recordado.
          </p>

          {/* Highlights */}
          <ul className="flex flex-col gap-2 mb-10 animate-fade-up delay-200" role="list">
            {[
              'Flores frescas de temporada todos los días',
              'Diseños personalizados para cada ocasión',
              'Entrega a domicilio en CDMX',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm font-medium" style={{ color: '#44403c' }}>
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="10" fill="#fecdd3"/>
                  <path d="M6 10l3 3 5-5" stroke="#be185d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {item}
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 animate-fade-up delay-300">
            <a
              href="#galeria"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 shadow-lg"
              style={{ backgroundColor: '#be185d', boxShadow: '0 4px 20px rgba(190,24,93,0.35)' }}
            >
              Ver nuestros arreglos
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold border-2 transition-all duration-200 hover:-translate-y-0.5"
              style={{ borderColor: '#be185d', color: '#be185d', backgroundColor: 'transparent' }}
            >
              Hacer un pedido
            </a>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-xs animate-bounce"
        style={{ color: '#78716c' }}
        aria-hidden="true"
      >
        <span>Descubre más</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 16.59L4.41 9 6 7.41 12 13.41 18 7.41 19.59 9z"/>
        </svg>
      </div>
    </section>
  )
}
