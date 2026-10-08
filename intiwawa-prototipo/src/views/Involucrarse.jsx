import { useState } from 'react'
import {
  Users,
  Sparkles,
  HandHeart,
  Send,
  CheckCircle2,
  MapPin,
  Clock,
  Award,
  HelpCircle
} from 'lucide-react'

export default function Involucrarse({ navigateTo }) {
  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false)
  const [volunteerForm, setVolunteerForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    area: 'educacion',
    modalidad: 'presencial',
    disponibilidad: 'fines-de-semana',
    mensaje: ''
  })

  const handleVolunteerSubmit = (e) => {
    e.preventDefault()
    setVolunteerSubmitted(true)
    setTimeout(() => {
      setVolunteerSubmitted(false)
      setVolunteerForm({
        nombre: '',
        email: '',
        telefono: '',
        area: 'educacion',
        modalidad: 'presencial',
        disponibilidad: 'fines-de-semana',
        mensaje: ''
      })
    }, 5000)
  }

  const faqs = [
    {
      q: '¿Cómo llego al centro de Intiwawa en Mollebaya?',
      a: 'Desde el centro de Arequipa (Terminal o Cercado) existen líneas de transporte público directo hacia Mollebaya (combis y buses tradicionales, aprox. 45 min de recorrido). Brindamos guía y acompañamiento para tu primera visita.'
    },
    {
      q: '¿Se entrega constancia o certificado de voluntariado?',
      a: 'Sí. Como ONG formalmente registrada en el Perú, emitimos constancias oficiales y certificados de voluntariado avalando tus horas lectivas y aporte comunitario.'
    },
    {
      q: '¿Puedo colaborar si tengo poco tiempo disponible?',
      a: '¡Por supuesto! Tenemos programas de fin de semana (sábados de talleres), así como roles de apoyo virtual en diseño, redes sociales, traducción y recaudación de fondos.'
    }
  ]

  return (
    <div className="py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="bg-[#FFB800]/30 text-amber-950 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            Súmate a la Causa
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Sé Parte del Cambio en Mollebaya
          </h1>
          <p className="text-lg text-slate-600">
            Tu tiempo, tus talentos y tu energía pueden transformar el presente y futuro de los niños. Descubre las modalidades de voluntariado y alianzas.
          </p>
        </div>

        {/* Modalidades de Colaboración */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4 text-center hover:shadow-md transition">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center">
              <Users className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Voluntariado Presencial</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Acompáñanos en Mollebaya para brindar apoyo en tareas escolares, biblioteca, cocina nutritiva, huerto y talleres lúdicos los fines de semana o entre semana.
            </p>
            <div className="pt-2 text-xs font-semibold text-amber-800 flex items-center justify-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>Sede Mollebaya, Arequipa</span>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4 text-center hover:shadow-md transition">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-100 text-emerald-900 flex items-center justify-center">
              <Sparkles className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Voluntariado Profesional</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Aporta desde tu especialidad: psicología infantil, odontología, pedagogía, medicina, diseño gráfico, marketing digital o captación de fondos.
            </p>
            <div className="pt-2 text-xs font-semibold text-emerald-800 flex items-center justify-center gap-1">
              <Award className="w-3.5 h-3.5" />
              <span>Presencial o Remoto</span>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4 text-center hover:shadow-md transition">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-sky-100 text-sky-900 flex items-center justify-center">
              <HandHeart className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Empresas e Instituciones</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Programas de Responsabilidad Social Empresarial (RSE), jornadas de voluntariado corporativo, donaciones de equipos informáticos y alimentos.
            </p>
            <div className="pt-2 text-xs font-semibold text-sky-800 flex items-center justify-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>Campañas y Convenios</span>
            </div>
          </div>
        </div>

        {/* Formulario Interactivo de Registro */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 sm:p-12 max-w-3xl mx-auto">
          <div className="text-center space-y-2 mb-8">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
              Formulario de Postulación de Voluntarios
            </h3>
            <p className="text-slate-600 text-sm">
              Déjanos tus datos y nos pondremos en contacto contigo por WhatsApp o correo electrónico para coordinar tu inducción.
            </p>
          </div>

          {volunteerSubmitted ? (
            <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-fade-in">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="text-xl font-bold text-emerald-900">¡Muchas gracias por tu postulación!</h4>
              <p className="text-emerald-800 text-sm">
                Hemos recibido tus datos con éxito. Nuestro equipo de coordinación comunitaria en Mollebaya te escribirá en breve por WhatsApp.
              </p>
            </div>
          ) : (
            <form onSubmit={handleVolunteerSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Tu nombre y apellidos"
                    value={volunteerForm.nombre}
                    onChange={(e) => setVolunteerForm({ ...volunteerForm, nombre: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#FFB800] focus:ring-2 focus:ring-[#FFB800]/40 outline-none text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="tu.correo@ejemplo.com"
                    value={volunteerForm.email}
                    onChange={(e) => setVolunteerForm({ ...volunteerForm, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#FFB800] focus:ring-2 focus:ring-[#FFB800]/40 outline-none text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    WhatsApp o Celular *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ej. 987 654 321"
                    value={volunteerForm.telefono}
                    onChange={(e) => setVolunteerForm({ ...volunteerForm, telefono: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#FFB800] focus:ring-2 focus:ring-[#FFB800]/40 outline-none text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Área de Interés
                  </label>
                  <select
                    value={volunteerForm.area}
                    onChange={(e) => setVolunteerForm({ ...volunteerForm, area: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#FFB800] focus:ring-2 focus:ring-[#FFB800]/40 outline-none text-sm bg-white"
                  >
                    <option value="educacion">Refuerzo Escolar y Lectura</option>
                    <option value="nutricion">Comedor Infantil y Nutrición</option>
                    <option value="salud">Salud / Psicología / Odontología</option>
                    <option value="arte">Talleres de Arte, Danza y Música</option>
                    <option value="agro">Huerto Agroecológico Comunitario</option>
                    <option value="comunicacion">Fotografía, Redes y Diseño</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Modalidad Preferida
                  </label>
                  <select
                    value={volunteerForm.modalidad}
                    onChange={(e) => setVolunteerForm({ ...volunteerForm, modalidad: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#FFB800] focus:ring-2 focus:ring-[#FFB800]/40 outline-none text-sm bg-white"
                  >
                    <option value="presencial">Presencial en Mollebaya</option>
                    <option value="remoto">Remoto / Virtual</option>
                    <option value="mixto">Mixto (Visitas puntuales)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Disponibilidad
                  </label>
                  <select
                    value={volunteerForm.disponibilidad}
                    onChange={(e) => setVolunteerForm({ ...volunteerForm, disponibilidad: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#FFB800] focus:ring-2 focus:ring-[#FFB800]/40 outline-none text-sm bg-white"
                  >
                    <option value="fines-de-semana">Sábados (Talleres y huerto)</option>
                    <option value="entre-semana">Tardes entre semana (Refuerzo escolar)</option>
                    <option value="medio-tiempo">Medio tiempo continuado</option>
                    <option value="eventual">Eventual para campañas médicas / eventos</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  ¿Cómo te gustaría colaborar? (Breve mensaje o experiencia previa)
                </label>
                <textarea
                  rows={3}
                  placeholder="Cuéntanos sobre tu motivación para acompañar a los niños de Mollebaya..."
                  value={volunteerForm.mensaje}
                  onChange={(e) => setVolunteerForm({ ...volunteerForm, mensaje: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#FFB800] focus:ring-2 focus:ring-[#FFB800]/40 outline-none text-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl font-bold bg-[#FFB800] hover:bg-[#e5a500] text-slate-950 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition text-base"
              >
                <Send className="w-5 h-5" />
                <span>Enviar Postulación de Voluntariado</span>
              </button>
            </form>
          )}
        </div>

        {/* Preguntas Frecuentes sobre el Voluntariado */}
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="flex items-center gap-2 justify-center text-slate-900 font-bold text-2xl">
            <HelpCircle className="w-6 h-6 text-[#FFB800]" />
            <h3>Preguntas Frecuentes</h3>
          </div>

          <div className="space-y-4">
            {faqs.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-base">{item.q}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="text-center pt-6">
            <p className="text-sm text-slate-600">
              ¿No puedes hacer voluntariado en este momento pero deseas apoyar?
            </p>
            <button
              onClick={() => navigateTo('donar')}
              className="mt-2 text-sm font-bold text-amber-800 hover:text-amber-900 underline"
            >
              Realiza una donación directa por Yape &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
