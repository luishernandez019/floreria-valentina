import { useState } from 'react'

const occasions = [
  'Boda',
  'Cumpleaños',
  'Aniversario',
  'San Valentín',
  'Evento corporativo',
  'Condolencias',
  'Decoración del hogar',
  'Otro',
]

interface FormState {
  name: string
  phone: string
  email: string
  occasion: string
  date: string
  message: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

const initialState: FormState = {
  name: '',
  phone: '',
  email: '',
  occasion: '',
  date: '',
  message: '',
}

interface FieldProps {
  id: string
  name: string
  label: string
  type: string
  placeholder?: string
  value: string
  error?: string
  autoComplete?: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = (): FormErrors => {
    const next: FormErrors = {}
    if (!form.name.trim()) next.name = 'Tu nombre es requerido'
    if (!form.phone.trim()) next.phone = 'Tu teléfono es requerido'
    if (!form.email.trim()) {
      next.email = 'Tu correo es requerido'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Ingresa un correo válido'
    }
    if (!form.message.trim()) next.message = 'Cuéntanos qué necesitas'
    return next
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const next = validate()
    if (Object.keys(next).length > 0) {
      setErrors(next)
      return
    }
    const msg = encodeURIComponent(
      `Hola Florería Valentina, me gustaría hacer un pedido.\n\n` +
      `Nombre: ${form.name}\n` +
      `Teléfono: ${form.phone}\n` +
      `Correo: ${form.email}\n` +
      (form.occasion ? `Ocasión: ${form.occasion}\n` : '') +
      (form.date ? `Fecha de entrega: ${form.date}\n` : '') +
      `\nDetalles: ${form.message}`
    )
    window.open(`https://wa.me/5215512345678?text=${msg}`, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
    setForm(initialState)
  }

  return (
    <section
      id="contacto"
      aria-labelledby="contact-heading"
      className="py-20 md:py-28"
      style={{ background: 'linear-gradient(180deg, #fff1f2 0%, #fdf8f5 100%)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left: info */}
          <div>
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
              style={{ backgroundColor: '#ffe4e6', color: '#be185d' }}
            >
              Contáctanos
            </span>
            <h2
              id="contact-heading"
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: '#1c1917' }}
            >
              ¿Lista para tu arreglo especial?
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: '#78716c' }}>
              Cuéntanos la ocasión, la fecha y tus flores favoritas. Nos encargamos
              del resto para que el momento sea perfecto.
            </p>

            {/* Info cards */}
            <ul className="flex flex-col gap-4 mb-8" role="list">
              <li
                className="flex items-start gap-4 p-4 rounded-xl"
                style={{ backgroundColor: '#fff', border: '1px solid #fecdd3' }}
              >
                <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl" style={{ backgroundColor: '#dcfce7' }}>
                  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#15803d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.1 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-0.5" style={{ color: '#1c1917' }}>WhatsApp y llamadas</p>
                  <a href="https://wa.me/5215512345678" target="_blank" rel="noopener noreferrer" className="text-sm" style={{ color: '#15803d', textDecoration: 'none' }}>
                    +52 55 1234 5678
                  </a>
                  <p className="text-xs mt-0.5" style={{ color: '#78716c' }}>Lun–Sáb 8:00 am – 7:00 pm</p>
                </div>
              </li>
              <li
                className="flex items-start gap-4 p-4 rounded-xl"
                style={{ backgroundColor: '#fff', border: '1px solid #fecdd3' }}
              >
                <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl" style={{ backgroundColor: '#ffe4e6' }}>
                  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#be185d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-0.5" style={{ color: '#1c1917' }}>Correo electrónico</p>
                  <a href="mailto:pedidos@floreriavalentina.mx" className="text-sm" style={{ color: '#be185d', textDecoration: 'none' }}>
                    pedidos@floreriavalentina.mx
                  </a>
                  <p className="text-xs mt-0.5" style={{ color: '#78716c' }}>Respondemos en menos de 2 horas</p>
                </div>
              </li>
              <li
                className="flex items-start gap-4 p-4 rounded-xl"
                style={{ backgroundColor: '#fff', border: '1px solid #fecdd3' }}
              >
                <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl" style={{ backgroundColor: '#fef9c3' }}>
                  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#92400e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-0.5" style={{ color: '#1c1917' }}>Horario de entrega</p>
                  <p className="text-sm" style={{ color: '#44403c' }}>Pedidos antes de las 2 pm → entrega el mismo día</p>
                  <p className="text-xs mt-0.5" style={{ color: '#78716c' }}>Aplica en toda la CDMX</p>
                </div>
              </li>
            </ul>

            {/* Social links */}
            <div className="flex items-center gap-3">
              <p className="text-sm font-medium" style={{ color: '#78716c' }}>Síguenos:</p>
              <a
                href="#"
                aria-label="Síguenos en Instagram"
                className="w-9 h-9 flex items-center justify-center rounded-full transition-all hover:scale-110"
                style={{ backgroundColor: '#ffe4e6' }}
              >
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#be185d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Síguenos en Facebook"
                className="w-9 h-9 flex items-center justify-center rounded-full transition-all hover:scale-110"
                style={{ backgroundColor: '#ffe4e6' }}
              >
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#be185d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div>
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center gap-4 py-16 px-8 rounded-3xl text-center"
                style={{ backgroundColor: '#f0fdf4', border: '2px solid #bbf7d0' }}
                role="alert"
                aria-live="polite"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full" style={{ backgroundColor: '#dcfce7' }}>
                  <svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold" style={{ color: '#166534' }}>¡Pedido enviado!</h3>
                <p className="text-sm" style={{ color: '#15803d' }}>
                  Te contactaremos en breve para confirmar los detalles de tu arreglo.
                  También puedes continuar la conversación por WhatsApp.
                </p>
                <button onClick={() => setSubmitted(false)} className="mt-2 text-sm font-medium underline" style={{ color: '#16a34a' }}>
                  Hacer otro pedido
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Formulario de pedido de flores"
                className="rounded-3xl p-8 shadow-lg flex flex-col gap-5"
                style={{ backgroundColor: '#fff', border: '1px solid #fecdd3' }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field id="f-name" name="name" label="Tu nombre *" type="text" placeholder="María García" value={form.name} error={errors.name} autoComplete="given-name" onChange={handleChange} />
                  <Field id="f-phone" name="phone" label="WhatsApp / teléfono *" type="tel" placeholder="+52 55 0000 0000" value={form.phone} error={errors.phone} autoComplete="tel" onChange={handleChange} />
                </div>

                <Field id="f-email" name="email" label="Correo electrónico *" type="email" placeholder="tu@correo.com" value={form.email} error={errors.email} autoComplete="email" onChange={handleChange} />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Occasion select */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="f-occasion" className="text-sm font-medium" style={{ color: '#44403c' }}>
                      Ocasión
                    </label>
                    <select
                      id="f-occasion"
                      name="occasion"
                      value={form.occasion}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-sm appearance-none"
                      style={{ border: '1.5px solid #fecdd3', color: form.occasion ? '#1c1917' : '#78716c', outline: 'none', backgroundColor: '#fff' }}
                    >
                      <option value="">Selecciona una</option>
                      {occasions.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>

                  {/* Date */}
                  <Field id="f-date" name="date" label="Fecha de entrega" type="date" value={form.date} autoComplete="off" onChange={handleChange} />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="f-message" className="text-sm font-medium" style={{ color: '#44403c' }}>
                    Cuéntanos qué necesitas *
                  </label>
                  <textarea
                    id="f-message"
                    name="message"
                    rows={4}
                    placeholder="Ej: Ramo de rosas rojas para boda, aprox. 20 rosas, quiero algo elegante..."
                    value={form.message}
                    onChange={(e) => handleChange(e as unknown as React.ChangeEvent<HTMLInputElement>)}
                    aria-describedby={errors.message ? 'msg-error' : undefined}
                    aria-invalid={!!errors.message}
                    className="w-full px-4 py-3 rounded-xl text-sm resize-none"
                    style={{ border: `1.5px solid ${errors.message ? '#e11d48' : '#fecdd3'}`, color: '#1c1917', outline: 'none', backgroundColor: '#fff' }}
                    onFocus={(e) => (e.target.style.borderColor = '#be185d')}
                    onBlur={(e) => (e.target.style.borderColor = errors.message ? '#e11d48' : '#fecdd3')}
                  />
                  {errors.message && (
                    <span id="msg-error" className="text-xs" style={{ color: '#e11d48' }} role="alert">{errors.message}</span>
                  )}
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-semibold text-white text-base transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 cursor-pointer"
                  style={{ backgroundColor: '#be185d', boxShadow: '0 4px 16px rgba(190,24,93,0.3)' }}
                >
                  Enviar pedido por WhatsApp
                  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                  </svg>
                </button>
                <p className="text-xs text-center" style={{ color: '#78716c' }}>
                  Serás redirigido a WhatsApp con tu pedido listo para enviar
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ id, name, label, type, placeholder, value, error, autoComplete, onChange }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium" style={{ color: '#44403c' }}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        autoComplete={autoComplete}
        aria-describedby={error ? `${id}-error` : undefined}
        aria-invalid={!!error}
        onChange={onChange}
        className="w-full px-4 py-3 rounded-xl text-sm"
        style={{ border: `1.5px solid ${error ? '#e11d48' : '#fecdd3'}`, color: '#1c1917', outline: 'none', backgroundColor: '#fff' }}
        onFocus={(e) => (e.target.style.borderColor = '#be185d')}
        onBlur={(e) => (e.target.style.borderColor = error ? '#e11d48' : '#fecdd3')}
      />
      {error && (
        <span id={`${id}-error`} className="text-xs" style={{ color: '#e11d48' }} role="alert">{error}</span>
      )}
    </div>
  )
}
