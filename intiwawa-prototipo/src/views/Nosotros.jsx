import {
  Sun,
  Award,
  MapPin,
  CheckCircle2,
  Heart,
  Users,
  Compass,
  ArrowRight
} from 'lucide-react'

export default function Nosotros({ navigateTo }) {
  const values = [
    {
      title: 'Solidaridad Viva',
      desc: 'Acción genuina enfocada en acompañar y apoyar de persona a persona con respeto mutuo.'
    },
    {
      title: 'Transparencia Total',
      desc: 'Cada sol donado tiene trazabilidad clara y se traduce en impacto tangible para los niños.'
    },
    {
      title: 'Amor y Respeto',
      desc: 'Trato digno, empático y afectivo con cada niña, niño y familia de la comunidad de Mollebaya.'
    },
    {
      title: 'Sostenibilidad',
      desc: 'Empoderar a la comunidad para que sean ellos los dueños y líderes de su propia transformación.'
    }
  ]

  const milestones = [
    {
      year: '2008',
      title: 'Primeros pasos en Mollebaya',
      desc: 'Un grupo de voluntarios locales e internacionales inició reforzamiento escolar al aire libre en Mollebaya.'
    },
    {
      year: '2012',
      title: 'Apertura del Centro Comunitario',
      desc: 'Construcción y habilitación del espacio comunal con biblioteca infantil y cocina equipada.'
    },
    {
      year: '2018',
      title: 'Programa Comedor Wawa Munay',
      desc: 'Lanzamiento del programa de nutrición integral contra la anemia infantil con supervisión médica.'
    },
    {
      year: 'Presente',
      title: 'Impacto Integral y Red de Aliados',
      desc: 'Más de 150 niños atendidos semanalmente y 18 instituciones aliadas fortaleciendo el valle.'
    }
  ]

  return (
    <div className="py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="bg-[#FFB800]/30 text-amber-950 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            Nuestra Historia e Identidad
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            ¿Quiénes somos en Intiwawa?
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            "<strong>Inti</strong>" significa <em>Sol</em> y "<strong>Wawa</strong>" significa <em>Niño o Niña</em> en lengua quechua.
            Somos la calidez, la luz y la esperanza que acompaña el crecimiento de la infancia en Mollebaya, Arequipa.
          </p>
        </div>

        {/* Misión y Visión */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-[#FFB800] flex items-center justify-center shadow-sm">
              <Sun className="w-6 h-6 text-slate-950" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Nuestra Misión</h3>
            <p className="text-slate-600 leading-relaxed">
              Potenciar el desarrollo integral de niños, niñas y adolescentes en situación de vulnerabilidad
              en el distrito de Mollebaya mediante programas comunitarios educativos, de salud preventiva,
              nutrición balanceada y desarrollo socioemocional, involucrando activamente a sus familias.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-slate-900 text-[#FFB800] flex items-center justify-center shadow-sm">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Nuestra Visión</h3>
            <p className="text-slate-600 leading-relaxed">
              Ser un referente de desarrollo comunitario en la región Arequipa y el sur peruano, donde cada
              niño crezca en un entorno con igualdad de oportunidades educativas, salud plena y las herramientas
              necesarias para forjar su propio destino con dignidad.
            </p>
          </div>
        </div>

        {/* ¿Por qué Mollebaya? */}
        <div className="bg-amber-50/70 rounded-3xl p-8 sm:p-12 border border-amber-200/80 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                Arraigo Territorial
              </span>
              <h3 className="text-3xl font-extrabold text-slate-900">
                ¿Por qué nuestro corazón late en Mollebaya?
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Mollebaya es un distrito tradicional y campestre ubicado al suroriente de la ciudad de Arequipa.
                A pesar de su riqueza paisajística y agrícola, sus asentamientos periurbanos albergan a familias
                migrantes que afrontan escasez de agua potable continua, escaso acceso a internet educativo
                y altos índices de anemia infantil.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Desde hace más de una década, Intiwawa se instaló en el corazón de esta comunidad para crear
                un refugio de aprendizaje seguro, afectuoso y constante, donde ningún niño se quede rezagado.
              </p>
              <div className="flex items-center gap-2 pt-2 font-semibold text-amber-900">
                <MapPin className="w-5 h-5 text-amber-700 shrink-0" />
                <span>Distrito de Mollebaya, Provincia de Arequipa, Región Arequipa, Perú</span>
              </div>
            </div>
            <div className="lg:col-span-5">
              <img
                src="https://images.unsplash.com/photo-1592417817098-8f3d6910985c?auto=format&fit=crop&w=800&q=80"
                alt="Campiña y comunidad de Mollebaya Arequipa"
                className="rounded-2xl shadow-lg w-full h-72 object-cover border-2 border-white"
              />
            </div>
          </div>
        </div>

        {/* Línea de Tiempo / Trayectoria */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <Compass className="w-8 h-8 text-[#FFB800] mx-auto" />
            <h3 className="text-3xl font-extrabold text-slate-900">Nuestra Trayectoria</h3>
            <p className="text-sm text-slate-600">Un camino construido junto a las familias mollebayinas</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2 relative">
                <div className="text-2xl font-black text-amber-600">{item.year}</div>
                <h4 className="font-bold text-slate-900 text-base">{item.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Valores */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <Heart className="w-8 h-8 text-rose-500 fill-rose-500 mx-auto" />
            <h3 className="text-3xl font-extrabold text-slate-900">Nuestros Valores Fundamentales</h3>
            <p className="text-sm text-slate-600">Principios innegociables que guían cada acción y programa</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-[#FFB800] hover:shadow-md transition duration-200"
              >
                <CheckCircle2 className="w-6 h-6 text-[#FFB800] mb-3" />
                <h4 className="font-bold text-slate-900 text-lg mb-1">{val.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-2xl font-bold">¿Quieres ser parte de nuestra historia?</h4>
            <p className="text-slate-300 text-sm max-w-lg">
              Únete a nuestro equipo multidisciplinario de voluntarios o colabora como donante individual o corporativo.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => navigateTo('involucrarse')}
              className="px-6 py-3.5 rounded-xl font-bold bg-[#FFB800] hover:bg-[#e5a500] text-slate-950 transition flex items-center gap-2"
            >
              <Users className="w-4 h-4" />
              <span>Ser Voluntario</span>
            </button>
            <button
              onClick={() => navigateTo('donar')}
              className="px-6 py-3.5 rounded-xl font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition flex items-center gap-2"
            >
              <span>Donar por Yape</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
