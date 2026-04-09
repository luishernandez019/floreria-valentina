
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

      </div>
    </section>
  )
}
