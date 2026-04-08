interface GalleryItem {
  id: number
  name: string
  occasion: string
  imageUrl: string
  main: string
  accent: string
}

// Reemplaza los valores de imageUrl con las URLs de tus imágenes
const galleryItems: GalleryItem[] = [
  {
    id: 1,
    name: 'Ramo de Peonías',
    occasion: 'Bodas',
    imageUrl: 'https://images.pexels.com/photos/4499921/pexels-photo-4499921.jpeg?w=600&q=80',
    main: '#fda4af',
    accent: '#be185d',
  },
  {
    id: 2,
    name: 'Centro de Mesa Tropical',
    occasion: 'Eventos',
    imageUrl: 'https://images.pexels.com/photos/27892759/pexels-photo-27892759.jpeg?w=600&q=80',
    main: '#86efac',
    accent: '#15803d',
  },
  {
    id: 3,
    name: 'Bouquet Romántico',
    occasion: 'San Valentín',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1677005708723-c0dabb815e4b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=600&q=80',
    main: '#fb7185',
    accent: '#9f1239',
  },
  {
    id: 4,
    name: 'Canasta Primaveral',
    occasion: 'Cumpleaños',
    imageUrl: 'https://images.pexels.com/photos/28500033/pexels-photo-28500033.jpeg?w=600&q=80',
    main: '#fde68a',
    accent: '#92400e',
  },
  {
    id: 5,
    name: 'Arreglo Elegante',
    occasion: 'Condolencias',
    imageUrl: 'https://images.pexels.com/photos/5695716/pexels-photo-5695716.jpeg?w=600&q=80',
    main: '#c4b5fd',
    accent: '#6d28d9',
  },
  {
    id: 6,
    name: 'Girasoles Silvestres',
    occasion: 'Decoración',
    imageUrl: 'https://images.pexels.com/photos/10728465/pexels-photo-10728465.jpeg?w=600&q=80',
    main: '#fcd34d',
    accent: '#92400e',
  },
]

function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <li
      className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      style={{ border: `1.5px solid ${item.main}55` }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: '220px' }}>
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Occasion badge */}
        <span
          className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm"
          style={{ backgroundColor: `${item.main}cc`, color: item.accent }}
        >
          {item.occasion}
        </span>
      </div>

      {/* Card info */}
      <div className="px-4 py-4 bg-white">
        <p
          className="font-semibold text-sm mb-3"
          style={{ color: '#1c1917', fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {item.name}
        </p>
        <a
          href="#contacto"
          className="text-xs font-semibold flex items-center gap-1 transition-all hover:gap-2"
          style={{ color: item.accent, textDecoration: 'none' }}
        >
          Consultar precio
          <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </li>
  )
}

export default function Galeria() {
  return (
    <section
      id="galeria"
      aria-labelledby="gallery-heading"
      className="py-20 md:py-28"
      style={{ background: 'linear-gradient(180deg, #fff1f2 0%, #fdf8f5 60%, #fff 100%)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-green-100 text-green-700">
            Nuestra galería
          </span>
          <h2
            id="gallery-heading"
            className="text-3xl md:text-4xl font-bold mb-4 text-stone-900"
          >
            Arreglos que enamoran
          </h2>
          <p className="text-base leading-relaxed text-stone-500">
            Cada arreglo es una pieza única. Aquí una muestra de lo que creamos
            con dedicación, creatividad y flores de la mejor calidad.
          </p>
        </div>

        {/* Grid */}
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Galería de arreglos florales"
        >
          {galleryItems.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm mb-4 text-stone-500">
            ¿Te gustó algo? Podemos recrearlo o diseñar algo exclusivo para ti.
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white transition-all hover:opacity-90 hover:-translate-y-0.5 shadow-lg"
            style={{ backgroundColor: '#be185d', boxShadow: '0 4px 18px rgba(190,24,93,0.3)', textDecoration: 'none' }}
          >
            Pedir un arreglo personalizado
          </a>
        </div>
      </div>
    </section>
  )
}
