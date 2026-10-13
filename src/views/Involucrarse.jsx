import { useState } from 'react'
import {
  Sun,
  Globe,
  Building2,
  Briefcase,
  Mail,
  Send,
  CheckCircle2,
  Clock,
  Heart,
  MessageCircle,
  FileText,
  Sparkles,
  Calendar,
  ArrowRight,
  ShieldAlert
} from 'lucide-react'

export default function Involucrarse({ navigateTo }) {
  const WHATSAPP_NUMBER = '51923221762'
  const OFFICIAL_EMAIL = 'info@intiwawa.com'

  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    pais: '',
    telefono: '',
    tipoInteres: 'educacion',
    duracion: '3-meses',
    mensaje: ''
  })

  // Convocatorias Oficiales Abiertas
  const jobOpenings = [
    {
      id: 'educacion',
      title: 'Educación y Apoyo Escolar (Yachay)',
      category: 'Pasantía / Voluntariado Internacional',
      hours: '20-25 hrs / semana en terreno',
      duration: 'Mínimo 2 meses en Arequipa',
      desc: 'Acompañamiento presencial diario en tareas escolares, club de lectura, robótica básica y dinámicas pedagógicas con los niños de Mollebaya.',
      responsibilities: [
        'Tutoría personalizada en comprensión lectora y matemáticas lúdicas',
        'Organización de actividades recreativas y dinamización de la biblioteca',
        'Acompañamiento en la disciplina positiva y valores comunitarios',
      ],
      requirements: 'Estudiantes o graduados en educación, pedagogía, trabajo social o áreas afines. Español intermedio.',
    },
    {
      id: 'coordinacion',
      title: 'Coordinación de Proyectos y Cooperación',
      category: 'Pasantía / Voluntariado Profesional',
      hours: '25-30 hrs / semana (Mixto)',
      duration: 'Mínimo 3 meses en Arequipa',
      desc: 'Formulación y seguimiento de proyectos comunitarios, monitoreo de indicadores de impacto y vinculación con cooperantes internacionales.',
      responsibilities: [
        'Elaboración de informes de progreso para donantes y contrapartes',
        'Supervisión logística de actividades en terreno en Mollebaya',
        'Búsqueda activa de fondos, subvenciones y convocatorias globales',
      ],
      requirements: 'Carreras de relaciones internacionales, desarrollo social, gestión o afines. Excelente redacción y análisis.',
    },
    {
      id: 'comunicacion',
      title: 'Comunicación, Redes y Creación de Contenido',
      category: 'Pasantía / Voluntariado Creativo',
      hours: '20-25 hrs / semana',
      duration: 'Mínimo 2 meses en Arequipa',
      desc: 'Cobertura fotográfica y audiovisual ética, gestión de redes sociales institucionales y redacción de historias de impacto de Mollebaya.',
      responsibilities: [
        'Producción de fotografías y videos respetuosos de las actividades en el centro',
        'Diseño de piezas gráficas para campañas de donación y boletines bilingües',
        'Gestión de contenidos para redes sociales y visibilidad internacional',
      ],
      requirements: 'Experiencia en fotografía, diseño gráfico, marketing social o periodismo. Portafolio requerido.',
    },
  ]

  const handleSelectJob = (jobId) => {
    setFormData((prev) => ({ ...prev, tipoInteres: jobId }))
    const formElement = document.getElementById('contacto-directo')
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  const resetForm = () => {
    setFormSubmitted(false)
    setFormData({
      nombre: '',
      email: '',
      pais: '',
      telefono: '',
      tipoInteres: 'educacion',
      duracion: '3-meses',
      mensaje: ''
    })
  }

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen">
      {/* ======================================================== */}
      {/* 1. CABECERA CLARA: SÚMATE A NUESTRA COMUNIDAD            */}
      {/* ======================================================== */}
      <section className="relative overflow-hidden bg-white border-b border-slate-200 py-16 lg:py-20">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/90 text-amber-950 text-xs font-bold uppercase tracking-wider mx-auto">
            <Sun className="w-4 h-4 text-amber-700 fill-amber-700" />
            <span>Participación &amp; Alianzas en Mollebaya</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] max-w-4xl mx-auto">
            Súmate a Nuestra <span className="text-[#FFB800] underline decoration-[#FFB800] decoration-wavy decoration-2">Comunidad</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Forma parte de la misión de <strong>Intiwawa</strong> en Mollebaya, Arequipa. Recibimos practicantes y voluntarios profesionales internacionales, y tejemos alianzas con empresas comprometidas con la niñez del Perú.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs font-bold text-slate-700">
            <span className="flex items-center gap-1.5 bg-slate-100 px-3.5 py-2 rounded-xl border border-slate-200">
              <Globe className="w-4 h-4 text-amber-600" />
              Voluntariado Internacional
            </span>
            <span className="flex items-center gap-1.5 bg-slate-100 px-3.5 py-2 rounded-xl border border-slate-200">
              <Building2 className="w-4 h-4 text-purple-600" />
              Alianzas Corporativas
            </span>
            <span className="flex items-center gap-1.5 bg-slate-100 px-3.5 py-2 rounded-xl border border-slate-200">
              <Mail className="w-4 h-4 text-emerald-600" />
              {OFFICIAL_EMAIL}
            </span>
          </div>
        </div>
      </section>

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16">
        {/* ======================================================== */}
        {/* 2. SECCIÓN: VOLUNTARIADO INTERNACIONAL                   */}
        {/*    (ESPECIFICANDO PASANTÍAS Y VOLUNTARIADO DEL EXT.)     */}
        {/* ======================================================== */}
        <section id="voluntariado-internacional" className="scroll-mt-28 space-y-8">
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-950 text-xs font-bold uppercase tracking-wider">
              <Globe className="w-3.5 h-3.5 text-amber-700" />
              <span>Experiencia Formativa en Terreno</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Voluntariado Internacional y Pasantías
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              En Intiwawa recibimos practicantes universitarios y voluntarios profesionales del extranjero que buscan aportar sus conocimientos y vivir una inmersión comunitaria auténtica en Arequipa.
            </p>
          </div>

          {/* Nota Aclaratoria Importante: Exclusividad Internacional */}
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/90 border-2 border-amber-300/80 flex items-start gap-3.5 text-amber-950">
            <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm space-y-1 leading-relaxed">
              <p className="font-black text-amber-900">
                Política de voluntariado de Intiwawa:
              </p>
              <p>
                Por razones de continuidad pedagógica y salvaguarda del vínculo afectivo con los niños de Mollebaya, <strong>nuestros programas están diseñados exclusivamente para voluntarios profesionales y practicantes internacionales</strong> con estancias formativas continuas (mínimo de 1 a 6 meses). <em>No contamos con programas de voluntariado local de corta duración o esporádico.</em>
              </p>
            </div>
          </div>

          {/* Pilares del Programa Internacional */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-black">
                01
              </div>
              <h3 className="text-lg font-black text-slate-900">Inmersión Cultural y Humana</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Trabajarás directamente en nuestro centro en Mollebaya, conociendo las costumbres andinas, la calidez de las familias y la realidad viva del sur peruano.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-11 h-11 rounded-xl bg-purple-100 text-purple-900 flex items-center justify-center font-black">
                02
              </div>
              <h3 className="text-lg font-black text-slate-900">Validación de Pasantías Universitarias</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Emitimos certificados oficiales y convenios académicos que convalidan créditos universitarios para estudiantes de Europa, Norteamérica y Latinoamérica.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-black">
                03
              </div>
              <h3 className="text-lg font-black text-slate-900">Acompañamiento e Inducción</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Te orientamos desde tu llegada a Arequipa, brindando asesoría en alojamiento, transporte a Mollebaya y capacitaciones periódicas con nuestro equipo.
              </p>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 3. SECCIÓN: ALIANZAS Y EMPRESAS                          */}
        {/* ======================================================== */}
        <section id="empresas-instituciones" className="scroll-mt-28 space-y-8">
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5 text-purple-700" />
              <span>Responsabilidad Social &amp; RSE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Alianzas y Empresas
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Invitamos a empresas, fundaciones y universidades a sumar esfuerzos con Intiwawa para crear un impacto social tangible, medible y sostenible en la niñez de Mollebaya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#FFB800]/20 text-slate-900 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-rose-600 fill-rose-600" />
                </div>
                <h4 className="text-base font-bold text-slate-900">Patrocinio de Programas</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Financiamiento mensual de raciones en el comedor Wawa Munay o kits de útiles escolares completos para el programa Yachay.
                </p>
              </div>
              <span className="text-[11px] font-extrabold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-lg w-max">
                Impacto directo y verificable
              </span>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-900 flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900">Donaciones en Especie</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Equipos de cómputo para robótica, insumos para el biohuerto, libros infantiles o ropa de abrigo para las campañas de invierno.
                </p>
              </div>
              <span className="text-[11px] font-extrabold text-purple-800 bg-purple-50 px-2.5 py-1 rounded-lg w-max">
                Equipamiento comunitario
              </span>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900">Campañas Médicas y RSE</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Jornadas médicas voluntarias de salud odontológica, pediátrica o donación de medicamentos esenciales y suplementos de hierro.
                </p>
              </div>
              <span className="text-[11px] font-extrabold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg w-max">
                Salud preventiva integral
              </span>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-900 flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900">Convenios Académicos</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Acuerdos con universidades internacionales para el envío regular de pasantes formativos con proyectos de investigación aplicada.
                </p>
              </div>
              <span className="text-[11px] font-extrabold text-sky-800 bg-sky-50 px-2.5 py-1 rounded-lg w-max">
                Cooperación universitaria
              </span>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 4. CONVOCATORIAS Y PUESTOS ABIERTOS                     */}
        {/*    (EDUCACIÓN, COORDINACIÓN, COMUNICACIÓN)             */}
        {/* ======================================================== */}
        <section id="convocatorias-abiertas" className="scroll-mt-28 space-y-8">
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-950 text-xs font-bold uppercase tracking-wider">
              <Briefcase className="w-3.5 h-3.5 text-amber-700" />
              <span>Oportunidades Internacionales</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Convocatorias y Puestos Abiertos
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Descubre las posiciones activas para realizar tu pasantía o voluntariado profesional en Mollebaya. Puedes postular directamente a través de nuestro formulario:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-800 bg-amber-100/70 px-2.5 py-1 rounded-md inline-block mb-2">
                      {job.category}
                    </span>
                    <h3 className="text-xl font-black text-slate-900 leading-snug">
                      {job.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {job.desc}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Responsabilidades Principales:
                    </span>
                    <ul className="space-y-1.5">
                      {job.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-1 pt-2 border-t border-slate-100 text-xs text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>{job.hours}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>{job.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => handleSelectJob(job.id)}
                    className="w-full py-3 rounded-xl font-bold bg-[#FFB800] hover:bg-[#e5a500] text-slate-950 text-xs sm:text-sm flex items-center justify-center gap-1.5 transition shadow-sm cursor-pointer"
                  >
                    <span>Postular a este Puesto</span>
                    <ArrowRight className="w-4 h-4 text-slate-950" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* 5. FORMULARIO DE CONTACTO DIRECTO: ENVÍO A INFO@INTIWAWA */}
        {/* ======================================================== */}
        <section id="contacto-directo" className="scroll-mt-28">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 sm:p-12 max-w-4xl mx-auto">
            <div className="text-center space-y-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-[#FFB800] text-slate-950 flex items-center justify-center mx-auto shadow-sm">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                Formulario de Contacto y Postulación
              </h3>
              <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
                Tus datos y mensaje serán enviados directamente a nuestro equipo institucional en{' '}
                <strong className="text-slate-900 font-bold">{OFFICIAL_EMAIL}</strong>.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 sm:p-10 rounded-2xl bg-emerald-50 border-2 border-emerald-200 text-center space-y-4 animate-in fade-in duration-300">
                <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
                <h4 className="text-2xl font-black text-emerald-900">¡Mensaje Enviado con Éxito!</h4>
                <p className="text-emerald-800 text-sm max-w-md mx-auto leading-relaxed">
                  Hemos registrado tus datos correctamente con destino a <strong>{OFFICIAL_EMAIL}</strong>. Nuestro equipo de coordinación internacional se comunicará contigo a la brevedad.
                </p>
                <div className="pt-2">
                  <button
                    onClick={resetForm}
                    className="px-6 py-2.5 rounded-xl font-bold bg-slate-900 text-white text-xs hover:bg-slate-800 transition"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Tu nombre y apellido"
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#FFB800] focus:ring-2 focus:ring-[#FFB800]/40 outline-none text-sm bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="tu.correo@ejemplo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#FFB800] focus:ring-2 focus:ring-[#FFB800]/40 outline-none text-sm bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      País de Residencia / Origen *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Alemania, España, EE.UU., etc."
                      value={formData.pais}
                      onChange={(e) => setFormData({ ...formData, pais: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#FFB800] focus:ring-2 focus:ring-[#FFB800]/40 outline-none text-sm bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Teléfono / WhatsApp (con código de país)
                    </label>
                    <input
                      type="tel"
                      placeholder="Ej. +49 152 1234567 o +34 612 345 678"
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#FFB800] focus:ring-2 focus:ring-[#FFB800]/40 outline-none text-sm bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Puesto o Tipo de Interés
                    </label>
                    <select
                      value={formData.tipoInteres}
                      onChange={(e) => setFormData({ ...formData, tipoInteres: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#FFB800] focus:ring-2 focus:ring-[#FFB800]/40 outline-none text-sm bg-white font-medium"
                    >
                      <option value="educacion">Educación y Apoyo Escolar (Yachay)</option>
                      <option value="coordinacion">Coordinación de Proyectos y Fondos</option>
                      <option value="comunicacion">Comunicación, Redes y Contenido</option>
                      <option value="alianza-empresa">Alianza Empresarial / Responsabilidad Social</option>
                      <option value="consulta-general">Consulta General de Cooperación</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Disponibilidad / Duración Estimada
                    </label>
                    <select
                      value={formData.duracion}
                      onChange={(e) => setFormData({ ...formData, duracion: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#FFB800] focus:ring-2 focus:ring-[#FFB800]/40 outline-none text-sm bg-white font-medium"
                    >
                      <option value="1-a-2-meses">1 a 2 meses (Mínimo)</option>
                      <option value="3-meses">3 meses (Recomendado)</option>
                      <option value="6-meses">6 meses o más (Pasantía completa)</option>
                      <option value="a-convenir">A convenir / Consulta institucional</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Mensaje, Motivación o Consulta *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Cuéntanos sobre tu formación académica, motivación para venir a Mollebaya o propuesta de colaboración institucional..."
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#FFB800] focus:ring-2 focus:ring-[#FFB800]/40 outline-none text-sm bg-white"
                  ></textarea>
                </div>

                <div className="pt-2 space-y-3">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-black bg-[#FFB800] hover:bg-[#e5a500] text-slate-950 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition text-base cursor-pointer"
                  >
                    <Send className="w-5 h-5 text-slate-950" />
                    <span>Enviar Mensaje a {OFFICIAL_EMAIL}</span>
                  </button>

                  <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 font-semibold pt-1">
                    <a
                      href={`mailto:${OFFICIAL_EMAIL}?subject=Contacto%20Intiwawa`}
                      className="hover:text-amber-800 underline flex items-center gap-1"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Escribir directamente a {OFFICIAL_EMAIL}</span>
                    </a>
                    <span>·</span>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-amber-800 underline flex items-center gap-1 text-emerald-700"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp Oficial</span>
                    </a>
                  </div>
                </div>
              </form>
            )}
          </div>
        </section>
      </main>

      {/* Cierre Sutil de Soporte Alternativo */}
      <section className="bg-slate-900 text-white py-12 border-t border-slate-800">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white">¿Deseas apoyar directamente sin viajar a Perú?</h4>
            <p className="text-xs text-slate-400">Puedes financiar raciones y útiles escolares a través de una donación por Yape o transferencia.</p>
          </div>
          <button
            onClick={() => navigateTo('donar')}
            className="px-6 py-3 rounded-xl font-bold bg-[#FFB800] hover:bg-[#e5a500] text-slate-950 text-xs sm:text-sm flex items-center gap-2 shrink-0 transition"
          >
            <Heart className="w-4 h-4 fill-slate-950" />
            <span>Hacer una Donación</span>
          </button>
        </div>
      </section>
    </div>
  )
}
