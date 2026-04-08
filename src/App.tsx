import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Servicios from './components/Includes'
import Galeria from './components/HowItWorks'
import Nosotros from './components/PricingCard'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  return (
    <>
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:rounded-lg focus:shadow-lg focus:font-semibold"
        style={{ color: '#be185d' }}
      >
        Ir al contenido principal
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Servicios />
        <Galeria />
        <Nosotros />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
