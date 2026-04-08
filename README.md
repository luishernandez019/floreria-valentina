# Florería Valentina — Sitio Web

Landing page para florería, construida con React + TypeScript + Vite + Tailwind CSS.

## Secciones

| Sección | Componente | Descripción |
|---|---|---|
| Navbar | `Navbar.tsx` | Barra fija con scroll, menú móvil |
| Hero | `Hero.tsx` | Encabezado principal con CTA |
| Servicios | `Includes.tsx` | Tarjetas de servicios ofrecidos |
| Galería | `HowItWorks.tsx` | Grid de arreglos con imágenes por URL |
| Nosotros | `PricingCard.tsx` | Historia, stats, razones y foto del equipo |
| Contacto | `ContactForm.tsx` | Formulario de contacto |
| Footer | `Footer.tsx` | Pie de página |
| WhatsApp | `WhatsAppFloat.tsx` | Botón flotante de WhatsApp |

## Personalización rápida

### Imágenes de la galería

Edita el array `galleryItems` en `src/components/HowItWorks.tsx`. Cada item tiene:

```ts
{
  id: 1,
  name: 'Nombre del arreglo',
  occasion: 'Bodas',
  imageUrl: 'https://tu-url/imagen.jpg', // ← cambia esto
  main: '#fda4af',   // color del badge y borde
  accent: '#be185d', // color del texto y link
}
```

### Imagen principal (sección Nosotros)

En `src/components/PricingCard.tsx`, busca el comentario `{/* Right: photo */}` y cambia el `src` del `<img>`.

### Foto de Valentina

En el mismo archivo, busca el comentario `{/* Reemplaza la URL con la foto de Valentina */}` y cambia el `src`.

### Nombre, textos y datos de contacto

Todos los textos están escritos directamente en cada componente. Busca y reemplaza según el archivo correspondiente.

### Colores principales

| Variable | Valor | Uso |
|---|---|---|
| Rosa principal | `#be185d` | Botones, acentos, links |
| Rosa claro | `#fda4af` | Fondos suaves |
| Rosa fondo | `#fff1f2` | Fondo de secciones |
| Stone oscuro | `#1c1917` | Textos principales |
| Stone medio | `#78716c` | Textos secundarios |

## Desarrollo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

El resultado queda en `dist/`.
