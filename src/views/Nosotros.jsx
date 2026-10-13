import {
  Sun,
  Heart,
  MapPin,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Target,
  Users,
  Sparkles,
  Globe,
} from 'lucide-react'

export default function Nosotros({ navigateTo }) {
  const WHATSAPP_NUMBER = '51923221762'

  // Los 4 Valores Institucionales aprobados por Intiwawa
  const institutionalValues = [
    {
      title: 'Solidaridad',
      icon: Heart,
      accent: 'rose',
      desc: 'Acción fraterna y cercana de persona a persona. Acompañamos a las familias de Mollebaya con respeto mutuo, caminando juntos como una sola comunidad unida.',
    },
    {
      title: 'Transparencia',
      icon: ShieldCheck,
      accent: 'amber',
      desc: 'Gestión ética e impecable. Cada sol donado tiene trazabilidad absoluta y se traduce de forma directa y visible en alimentación, salud y útiles escolares.',
    },
    {
      title: 'Compromiso',
      icon: Target,
      accent: 'purple',
      desc: 'Presencia constante y perseverancia en terreno. Más de 15 años abriendo las puertas de nuestro centro cada tarde, asegurando continuidad y apego seguro.',
    },
    {
      title: 'Empatía',
      icon: Users,
      accent: 'emerald',
      desc: 'Escucha activa, calidez y ternura. Comprendemos la realidad de cada niña, niño y madre de Mollebaya para brindar apoyo humano libre de prejuicios.',
    },
  ]

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen">
      {/* ======================================================== */}
      {/* 1. CABECERA VISUAL CON FOTO COMUNITARIA AMPLIA           */}
      {/* ======================================================== */}
      <section className="relative overflow-hidden bg-slate-950 text-white py-16 lg:py-24">
        {/* Foto Comunitaria Amplia con Contraste de Fondo */}
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=80"
          alt="Niños y comunidad de Mollebaya con Intiwawa"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/60" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#FFB800] text-xs font-bold uppercase tracking-wider border border-white/15 backdrop-blur-md mx-auto">
            <Sun className="w-4 h-4 fill-[#FFB800] text-[#FFB800]" />
            <span>Identidad &amp; Propósito · Mollebaya, Arequipa</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] max-w-4xl mx-auto">
            Conoce a Intiwawa: <span className="text-[#FFB800]">Nuestra Historia</span> y Propósito
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            "<strong>Inti</strong>" (Sol) y "<strong>Wawa</strong>" (Niño o Niña) en lengua quechua. Somos la calidez y la oportunidad que impulsa a la infancia y las madres del valle de Mollebaya a construir su propio destino con dignidad.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs font-bold text-slate-300">
            <span className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-xl border border-white/10">
              <MapPin className="w-4 h-4 text-[#FFB800]" />
              Mollebaya, Arequipa, Perú
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-xl border border-white/10">
              <Users className="w-4 h-4 text-emerald-400" />
              +150 Wawas Atendidos Semanalmente
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-xl border border-white/10">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Más de 15 Años en Terreno
            </span>
          </div>
        </div>
      </section>

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-20">
        {/* ======================================================== */}
        {/* 2. SECCIÓN: HISTORIA DE INTIWAWA Y CENTRO COMUNITARIO    */}
        {/* ======================================================== */}
        <section id="nuestra-historia" className="scroll-mt-28 space-y-8">
          <div id="comunidad-mollebaya" className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Imagen Grande del Centro Comunitario */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
                <img
                  src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1200&q=80"
                  alt="Centro comunitario Intiwawa en Mollebaya, Arequipa"
                  className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md text-slate-900 space-y-1 shadow-lg">
                  <span className="text-[11px] font-black uppercase tracking-wider text-amber-800 block">
                    Centro Comunitario Intiwawa
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-slate-700">
                    Sede propia en Mollebaya, Arequipa: un refugio de puertas abiertas donde los niños aprenden, se nutren y sonríen cada tarde.
                  </p>
                </div>
              </div>
            </div>

            {/* Narrativa de Origen y Fundación en Mollebaya */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-950 text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-amber-700" />
                <span>Origen y Fundación</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Historia de Intiwawa: Raíces en Mollebaya
              </h2>

              <p className="text-base text-slate-700 leading-relaxed">
                En el año 2008, un grupo comprometido de voluntarios locales e internacionales llegó a <strong>Mollebaya</strong>, un distrito tradicional y agrícola en el suroriente de Arequipa. Detrás de sus hermosos paisajes andinos, descubrieron una realidad urgente: asentamientos periurbanos con familias migrantes, escasez de agua potable, elevados índices de anemia infantil y falta de acompañamiento escolar tras la jornada académica.
              </p>

              <p className="text-base text-slate-700 leading-relaxed">
                Frente a esta brecha, decidieron crear un espacio permanente. Así nació <strong>Intiwawa</strong>, levantando primero aulas de refuerzo al aire libre y consolidando después nuestro <strong>Centro Comunitario propio</strong> con biblioteca viva, comedor nutricional y talleres productivos.
              </p>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                  <Sun className="w-4 h-4 text-[#FFB800] fill-[#FFB800]" />
                  <span>El significado de nuestro nombre</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  En lengua quechua, <strong>Inti</strong> simboliza el Sol y la calidez que da vida; <strong>Wawa</strong> representa a la niña o niño. Representamos la luz y el cuidado que todo wawa merece para florecer sin límites.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => navigateTo('proyectos')}
                  className="px-5 py-2.5 rounded-xl font-bold bg-[#FFB800] hover:bg-[#e5a500] text-slate-950 text-xs sm:text-sm flex items-center gap-2 shadow-sm transition"
                >
                  <span>Conoce Nuestros Proyectos</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </button>
                <button
                  onClick={() => navigateTo('involucrarse')}
                  className="px-5 py-2.5 rounded-xl font-bold bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 text-xs sm:text-sm transition"
                >
                  <span>Súmate como Voluntario</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 3. BLOQUE MODULAR SIMÉTRICO: MISIÓN Y VISIÓN              */}
        {/* ======================================================== */}
        <section id="mision-vision" className="scroll-mt-28 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FFB800] block">
              Propósito y Horizonte
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Nuestra Misión y Visión
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Dos pilares estratégicos que definen la dirección y el impacto de nuestras acciones cotidianas en Mollebaya:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Tarjeta Modular: Misión */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                {/* Foto de apoyo Misión */}
                <div className="relative h-64 overflow-hidden bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80"
                    alt="Niños en actividades educativas de Intiwawa"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-black text-slate-900 shadow-sm flex items-center gap-1.5">
                    <Sun className="w-3.5 h-3.5 text-[#FFB800] fill-[#FFB800]" />
                    <span>Nuestra Misión</span>
                  </div>
                </div>

                <div className="p-7 sm:p-8 space-y-4">
                  <h3 className="text-2xl font-black text-slate-900 leading-snug">
                    Romper el ciclo de la pobreza desde la infancia
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    Potenciar el desarrollo integral de las niñas, niños y adolescentes en situación de vulnerabilidad en el distrito de Mollebaya mediante programas educativos de calidad, nutrición balanceada y empoderamiento familiar que forjen su autonomía.
                  </p>

                  <div className="pt-2 border-t border-slate-100 space-y-2">
                    <div className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Refuerzo escolar diario, robótica lúdica y biblioteca infantil activa.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Alimentación rica en hierro y lucha contra la anemia en Wawa Munay.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Talleres de tejido en alpaca y crianza positiva para madres.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-7 sm:p-8 pt-0">
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                  <span className="text-amber-800 bg-amber-50 px-2.5 py-1 rounded-lg">
                    Acción en terreno diaria
                  </span>
                  <span className="text-slate-500">Mollebaya, Arequipa</span>
                </div>
              </div>
            </div>

            {/* Tarjeta Modular: Visión */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                {/* Foto de apoyo Visión */}
                <div className="relative h-64 overflow-hidden bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=800&q=80"
                    alt="Esperanza y futuro para la niñez en Mollebaya"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-black text-slate-900 shadow-sm flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-purple-600" />
                    <span>Nuestra Visión</span>
                  </div>
                </div>

                <div className="p-7 sm:p-8 space-y-4">
                  <h3 className="text-2xl font-black text-slate-900 leading-snug">
                    Un Perú donde el origen no determine el destino
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    Ser el referente de desarrollo comunitario en Arequipa y el sur peruano, donde cada niña y niño crezca con salud plena, educación de excelencia y las herramientas necesarias para construir su propio proyecto de vida con libertad y dignidad.
                  </p>

                  <div className="pt-2 border-t border-slate-100 space-y-2">
                    <div className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Erradicación de las brechas educativas territoriales en el sur andino.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Comunidades organizadas que lideran su propio progreso económico.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Espacios seguros donde cada wawa es escuchado, amado y protegido.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-7 sm:p-8 pt-0">
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                  <span className="text-purple-800 bg-purple-50 px-2.5 py-1 rounded-lg">
                    Horizonte de cambio social
                  </span>
                  <span className="text-slate-500">Transformación sostenible</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 4. CUADRÍCULA VISUAL CON LOS 4 VALORES INSTITUCIONALES   */}
        {/* ======================================================== */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FFB800] block">
              Principios que nos Guían
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Valores Institucionales
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Cuatro pilares éticos innegociables que orientan cada decisión, programa y vínculo en Mollebaya:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {institutionalValues.map((val, idx) => {
              const Icon = val.icon
              return (
                <div
                  key={idx}
                  className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm hover:border-amber-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#FFB800]/20 flex items-center justify-center text-slate-950 group-hover:bg-[#FFB800] transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-black text-slate-900 group-hover:text-amber-800 transition-colors">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {val.desc}
                    </p>
                  </div>

                  <div className="pt-2">
                    <span className="text-[11px] font-bold text-slate-400 group-hover:text-amber-800 transition-colors flex items-center gap-1">
                      <span>Pilar 0{idx + 1}</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ======================================================== */}
        {/* 5. CIERRE CON BANNER DE LLAMADO A LA ACCIÓN              */}
        {/* ======================================================== */}
        <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-amber-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-[#FFB800] text-slate-950 font-black px-3.5 py-1 rounded-full text-xs">
                <Heart className="w-3.5 h-3.5 fill-slate-950" />
                <span>Sé Parte de Nuestra Historia</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                ¿Quieres sumarte al cambio que vivimos en Mollebaya?
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Únete como practicante o voluntario profesional internacional, o impulsa nuestros programas con una donación directa por Yape. Cada aporte llega íntegramente a las wawas.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
              <button
                onClick={() => navigateTo('involucrarse')}
                className="px-6 py-3.5 rounded-xl font-bold bg-[#FFB800] hover:bg-[#e5a500] text-slate-950 text-center text-sm shadow-md transition flex items-center justify-center gap-2"
              >
                <Users className="w-4 h-4" />
                <span>Ser Voluntario</span>
              </button>
              <button
                onClick={() => navigateTo('donar')}
                className="px-6 py-3.5 rounded-xl font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 text-center text-sm transition flex items-center justify-center gap-2"
              >
                <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                <span>Donar por Yape</span>
              </button>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-3.5 rounded-xl font-bold bg-white/5 hover:bg-white/15 text-white border border-white/15 text-center text-sm transition flex items-center justify-center"
              >
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
