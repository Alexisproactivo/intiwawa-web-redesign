import { useState } from 'react'
import {
  Sun,
  Heart,
  MapPin,
  ArrowRight,
  BookOpen,
  Apple,
  Sparkles,
  MessageCircle,
  CheckCircle2,
  Users,
  ShieldCheck
} from 'lucide-react'
import Partners from '../components/Partners'

export default function Home({ navigateTo }) {
  const WHATSAPP_NUMBER = '51923221762'
  const WHATSAPP_DISPLAY = '+51 923 221 762'

  // Estado de la tarjeta de donación mensual en soles
  const [selectedAmount, setSelectedAmount] = useState(50)
  const [customAmount, setCustomAmount] = useState('')
  const [isCustom, setIsCustom] = useState(false)

  const presetAmounts = [30, 50, 100, 200]

  const monthlyImpacts = {
    30: '🍎 Almuerzos nutritivos semanales en el comedor Wawa Munay para niños en etapa escolar.',
    50: '📚 Kit completo de útiles escolares, libros de lectura y refuerzo pedagógico para 1 estudiante.',
    100: '✏️ Un mes de refuerzo académico diario, ludoteca y alimentación balanceada continua.',
    200: '🌱 Acompañamiento integral para un wawa y capacitación textil para su madre en el taller Warmi.',
  }

  const effectiveAmount = isCustom ? Number(customAmount) || 0 : selectedAmount

  return (
    <div className="bg-white text-slate-800">
      {/* ======================================================== */}
      {/* 1. HERO LUMINOSO: FOTOGRAFÍA COMUNITARIA REAL, AMPLIA Y   */}
      {/*    LUMINOSA CON FONDOS SUAVES (#F8F9FA) Y CAJA MORADA/AMARILLA */}
      {/* ======================================================== */}
      <section className="bg-[#F8F9FA] border-b border-slate-200/80 py-12 lg:py-16">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Encabezado Principal con Alto Contraste */}
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-950 text-xs font-black uppercase tracking-wider border border-amber-300/60 shadow-2xs">
              <Sun className="w-4 h-4 fill-[#FFB800] text-amber-600" />
              <span>Comunidad de Mollebaya · Arequipa</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Un día,{' '}
              <span className="text-[#6D28D9] underline decoration-[#FFB800] decoration-wavy underline-offset-8">
                ningún niño o niña
              </span>{' '}
              del Perú verá su futuro limitado por su lugar de origen.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed">
              En <strong>Intiwawa</strong> rompemos el ciclo de la pobreza en Mollebaya brindando educación de excelencia, nutrición balanceada y empoderamiento familiar a más de 150 wawas cada semana.
            </p>
          </div>

          {/* Grid de 2 Columnas: Fotografía Real Amplia + Caja de Donación */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* COLUMNA IZQUIERDA (7 COLS): FOTOGRAFÍA COMUNITARIA REAL, LUMINOSA Y AMPLIA */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100 group min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] flex flex-col justify-end p-6 sm:p-8">
                {/* Fotografía comunitaria real y luminosa en alta definición */}
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1600&q=80"
                  alt="Niños sonrientes de la comunidad de Mollebaya en actividades educativas"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                />

                {/* Degradado luminoso sutil para proteger la legibilidad */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />

                {/* Badge superior flotante */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-900 shadow-md border border-slate-100">
                  <MapPin className="w-3.5 h-3.5 text-[#6D28D9]" />
                  <span>Sede Propia · Mollebaya Rural, Arequipa</span>
                </div>

                {/* Micro-bloque informativo inferior sobre la foto */}
                <div className="relative z-10 space-y-4">
                  <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                    <div className="bg-white/90 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl border border-white/60 shadow-xs text-center">
                      <div className="text-xl sm:text-2xl font-black text-[#6D28D9]">+150</div>
                      <div className="text-[11px] font-bold text-slate-800 leading-tight">Wawas por semana</div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl border border-white/60 shadow-xs text-center">
                      <div className="text-xl sm:text-2xl font-black text-amber-600">15+ Años</div>
                      <div className="text-[11px] font-bold text-slate-800 leading-tight">En Mollebaya</div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl border border-white/60 shadow-xs text-center">
                      <div className="text-xl sm:text-2xl font-black text-emerald-600">100%</div>
                      <div className="text-[11px] font-bold text-slate-800 leading-tight">Transparencia</div>
                    </div>
                  </div>

                  {/* Botones de acción rápida sobre o junto a la foto */}
                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <button
                      onClick={() => navigateTo('proyectos')}
                      className="px-5 py-3 rounded-xl font-black text-xs sm:text-sm bg-[#FFB800] hover:bg-[#e5a500] text-slate-950 flex items-center gap-2 shadow-md hover:shadow-lg transition cursor-pointer"
                    >
                      <span>Conoce los Programas</span>
                      <ArrowRight className="w-4 h-4 text-slate-950" />
                    </button>
                    <button
                      onClick={() => navigateTo('involucrarse')}
                      className="px-5 py-3 rounded-xl font-bold text-xs sm:text-sm bg-white/95 hover:bg-white text-slate-900 shadow-md transition flex items-center gap-2 cursor-pointer"
                    >
                      <Users className="w-4 h-4 text-[#6D28D9]" />
                      <span>Súmate como Voluntario</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* COLUMNA DERECHA (5 COLS): CAJA DE DONACIÓN CON ACENTO MORADO (#6D28D9) Y AMARILLO (#FFB800) */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="bg-white rounded-3xl p-6 sm:p-8 text-slate-900 shadow-xl border-2 border-purple-100 relative overflow-hidden">
                {/* Franja superior de acento morado y amarillo */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#6D28D9] via-purple-600 to-[#FFB800]" />

                {/* Cabecera de la tarjeta */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 pt-1">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#6D28D9] flex items-center justify-center border border-purple-100">
                      <Heart className="w-5 h-5 fill-[#6D28D9]" />
                    </div>
                    <div>
                      <h3 className="font-black text-base sm:text-lg text-slate-900 leading-tight">
                        Donación Mensual Solidaria
                      </h3>
                      <p className="text-xs font-semibold text-slate-500">
                        Aporte en Soles (S/) · Impacto Directo
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider bg-[#FFB800]/20 text-amber-950 border border-[#FFB800]/40 px-2.5 py-1 rounded-full">
                    Sostenibilidad
                  </span>
                </div>

                {/* Selector de montos predefinidos */}
                <div className="mt-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Elige tu aporte mensual:
                    </span>
                    <span className="text-[11px] font-semibold text-[#6D28D9]">
                      Cancelable en cualquier momento
                    </span>
                  </div>

                  <div className="grid grid-cols-4 gap-2">
                    {presetAmounts.map((amt) => {
                      const isSelected = !isCustom && selectedAmount === amt
                      return (
                        <button
                          key={amt}
                          type="button"
                          onClick={() => {
                            setSelectedAmount(amt)
                            setIsCustom(false)
                          }}
                          className={`py-3 rounded-2xl text-xs sm:text-sm font-black transition-all border-2 cursor-pointer flex flex-col items-center justify-center ${
                            isSelected
                              ? 'border-[#6D28D9] bg-purple-50 text-[#6D28D9] shadow-md ring-2 ring-[#FFB800]/50 scale-102'
                              : 'border-slate-200 bg-slate-50/60 text-slate-700 hover:border-purple-300 hover:bg-purple-50/30'
                          }`}
                        >
                          <span>S/ {amt}</span>
                          <span className="text-[9px] font-normal text-slate-500 uppercase mt-0.5">al mes</span>
                        </button>
                      )
                    })}
                  </div>

                  {/* Opción para otro monto */}
                  {!isCustom ? (
                    <button
                      type="button"
                      onClick={() => setIsCustom(true)}
                      className="w-full py-2.5 px-3 rounded-xl border border-dashed border-purple-300 text-xs font-bold text-[#6D28D9] hover:bg-purple-50 transition text-center cursor-pointer"
                    >
                      + Ingresar otro monto en Soles (S/)
                    </button>
                  ) : (
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-black text-slate-500 text-xs">
                        S/
                      </span>
                      <input
                        type="number"
                        min="5"
                        step="5"
                        autoFocus
                        placeholder="Monto personalizado"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        className="w-full pl-9 pr-16 py-2.5 rounded-xl border-2 border-[#6D28D9] bg-white font-black text-sm text-slate-900 focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => setIsCustom(false)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-500 hover:text-slate-800 underline cursor-pointer"
                      >
                        Cerrar
                      </button>
                    </div>
                  )}
                </div>

                {/* Tarjeta de impacto dinámico */}
                <div className="mt-4 p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200/90 text-xs text-amber-950 font-medium leading-relaxed flex items-start gap-2.5">
                  <span className="text-base shrink-0 mt-0.5">💛</span>
                  <div className="flex-1">
                    {isCustom ? (
                      effectiveAmount > 0 ? (
                        <span>Tu aporte de <strong>S/ {effectiveAmount} al mes</strong> impulsa educación, nutrición y talleres continuos en Mollebaya.</span>
                      ) : (
                        <span>Ingresa un monto para conocer el impacto tangible en los niños.</span>
                      )
                    ) : (
                      <span>{monthlyImpacts[selectedAmount]}</span>
                    )}
                  </div>
                </div>

                {/* Botón Principal con Acento Morado Elegante (#6D28D9) y Amarillo (#FFB800) */}
                <div className="mt-5 space-y-3">
                  <button
                    type="button"
                    onClick={() => navigateTo('donar')}
                    className="w-full py-4 rounded-2xl font-black text-sm sm:text-base bg-[#6D28D9] hover:bg-[#5B21B6] text-white shadow-lg shadow-purple-900/20 hover:shadow-xl transition-all flex items-center justify-center gap-2.5 cursor-pointer active:scale-98"
                  >
                    <Heart className="w-4 h-4 fill-[#FFB800] text-[#FFB800]" />
                    <span>Donar S/ {effectiveAmount > 0 ? effectiveAmount : 50} al mes</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>

                  <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] text-slate-500 font-semibold pt-1">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      BCP Institucional
                    </span>
                    <span>·</span>
                    <span>Betterplace (Europa)</span>
                    <span>·</span>
                    <span>Omprakash 501(c)(3)</span>
                  </div>

                  <div className="text-center pt-1">
                    <button
                      onClick={() => navigateTo('donar')}
                      className="text-xs font-bold text-[#6D28D9] hover:underline"
                    >
                      Ver todos los canales oficiales de donación &rarr;
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. BLOQUE BREVE: QUIÉNES SOMOS Y DÓNDE TRABAJAMOS        */}
      {/*    DESTACANDO NUESTRA LABOR EN MOLLEBAYA, AREQUIPA       */}
      {/* ======================================================== */}
      <section id="quienes-somos" className="scroll-mt-24 py-16 lg:py-20 bg-white border-b border-slate-200/80">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Foto de Mollebaya y la comunidad */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-[#F8F9FA] bg-slate-100 group">
                <img
                  src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80"
                  alt="Niños y paisajes de Mollebaya, Arequipa"
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-semibold flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#FFB800] shrink-0" />
                  <span>Sede Comunitaria · Mollebaya, Arequipa</span>
                </div>
              </div>
            </div>

            {/* Contenido Narrativo Conciso */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
                <Sun className="w-3.5 h-3.5 text-amber-700" />
                <span>Arraigo Territorial &amp; Vocación</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Quiénes Somos y Dónde Trabajamos
              </h2>

              <p className="text-base text-slate-600 leading-relaxed">
                <strong>Intiwawa</strong> es una organización sin fines de lucro nacida en el distrito tradicional de <strong>Mollebaya</strong>, en las afueras de la ciudad de Arequipa. En este valle andino trabajamos hombro a hombro con las familias locales para construir un refugio seguro de aprendizaje, nutrición y afecto.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#F8F9FA] border border-slate-200/90 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                    <MapPin className="w-4 h-4 text-[#FFB800]" />
                    <span>Mollebaya</span>
                  </div>
                  <p className="text-xs text-slate-600">Presencia permanente y activa en las laderas del valle.</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F8F9FA] border border-slate-200/90 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>+150 Wawas</span>
                  </div>
                  <p className="text-xs text-slate-600">Atención semanal de lunes a sábado en refuerzo y salud.</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F8F9FA] border border-slate-200/90 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                    <Sun className="w-4 h-4 text-amber-600" />
                    <span>15+ Años</span>
                  </div>
                  <p className="text-xs text-slate-600">Trayectoria de confianza tejida junto a la comunidad.</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => navigateTo('nosotros')}
                  className="px-5 py-2.5 rounded-xl font-bold bg-[#6D28D9] hover:bg-[#5B21B6] text-white text-xs sm:text-sm flex items-center gap-2 shadow-sm transition"
                >
                  <span>Conoce Nuestra Historia y Equipo</span>
                  <ArrowRight className="w-4 h-4 text-[#FFB800]" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. CÓMO LO HACEMOS: ÚNICAMENTE 3 PROGRAMAS CENTRALES     */}
      {/*    YACHAY (Educación), KUSIKALLPA (Salud), WARMI (Madres) */}
      {/* ======================================================== */}
      <section id="como-lo-hacemos" className="scroll-mt-24 py-16 lg:py-24 bg-[#F8F9FA] border-b border-slate-200/80">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100 px-3.5 py-1 rounded-full inline-block">
              Pilares de Transformación
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-1">
              Cómo lo Hacemos
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Tres pilares de acción directa e integral diseñados para transformar el presente de las familias en Mollebaya:
            </p>
          </div>

          {/* ÚNICAMENTE las 3 tarjetas de programas centrales presentadas de forma limpia */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* 1. Yachay */}
            <div className="bg-white rounded-3xl p-7 border border-slate-200 hover:border-amber-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FFB800] flex items-center justify-center text-slate-950 shadow-xs group-hover:scale-105 transition-transform">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 block">
                    Educación &amp; Refuerzo
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 mt-0.5">
                    Yachay
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Acompañamiento escolar diario, biblioteca activa, robótica básica y animación a la lectura para nivelar a los niños y asegurar que comprendan lo que leen.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-amber-900 bg-amber-100/80 px-2.5 py-1 rounded-lg">
                  +120 estudiantes activos
                </span>
                <button
                  onClick={() => navigateTo('proyectos', 'proyectos-yachay')}
                  className="text-xs font-bold text-slate-900 group-hover:text-amber-800 flex items-center gap-1 transition"
                >
                  <span>Ver Yachay</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FFB800]" />
                </button>
              </div>
            </div>

            {/* 2. Kusikallpa */}
            <div className="bg-white rounded-3xl p-7 border border-slate-200 hover:border-emerald-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
                  <Apple className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block">
                    Nutrición y Salud Preventiva
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 mt-0.5">
                    Kusikallpa
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Comedor Wawa Munay con más de 350 raciones semanales ricas en hierro (sangrecita y quinua), campañas médicas y lucha frontal contra la anemia infantil.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-900 bg-emerald-100/80 px-2.5 py-1 rounded-lg">
                  350 raciones / semana
                </span>
                <button
                  onClick={() => navigateTo('proyectos', 'proyectos-kusikallpa')}
                  className="text-xs font-bold text-slate-900 group-hover:text-emerald-800 flex items-center gap-1 transition"
                >
                  <span>Ver Kusikallpa</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-500" />
                </button>
              </div>
            </div>

            {/* 3. Warmi */}
            <div className="bg-white rounded-3xl p-7 border border-slate-200 hover:border-purple-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#6D28D9] flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#6D28D9] block">
                    Empoderamiento Femenino
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 mt-0.5">
                    Warmi
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Capacitación técnica en tejido artesanal y upcycling textil reciclado, educación financiera y crianza positiva para dotar a las madres de autonomía económica.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-purple-900 bg-purple-100/80 px-2.5 py-1 rounded-lg">
                  20 mamitas activas
                </span>
                <button
                  onClick={() => navigateTo('proyectos', 'proyectos-warmi')}
                  className="text-xs font-bold text-slate-900 group-hover:text-[#6D28D9] flex items-center gap-1 transition"
                >
                  <span>Ver Warmi</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#6D28D9]" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. FRANJA VISUAL: NUESTRA MISIÓN Y VISIÓN CON FOTOS       */}
      {/*    AMPLIAS, LUMINOSAS Y FONDOS SUAVES                     */}
      {/* ======================================================== */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#6D28D9] bg-purple-100 px-3.5 py-1 rounded-full inline-block">
              Propósito &amp; Horizonte
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-1">
              Nuestra Misión y Visión
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Tarjeta Visual: Misión */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl min-h-[380px] sm:min-h-[420px] flex flex-col justify-end p-7 sm:p-9 group border border-slate-200 bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=80"
                alt="Nuestra Misión Intiwawa"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent" />

              <div className="relative z-10 space-y-3">
                <span className="inline-block px-3 py-1 rounded-full bg-[#FFB800] text-slate-950 text-xs font-black uppercase tracking-wider">
                  Nuestra Misión
                </span>
                <p className="text-xl sm:text-2xl font-black text-white leading-snug">
                  Romper el ciclo de la pobreza en Mollebaya brindando educación de calidad, nutrición balanceada y empoderamiento a cada wawa.
                </p>
                <button
                  onClick={() => navigateTo('nosotros', 'mision-vision')}
                  className="pt-2 text-xs font-bold text-amber-300 hover:text-white flex items-center gap-1.5 transition"
                >
                  <span>Conoce más sobre nuestra misión</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Tarjeta Visual: Visión */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl min-h-[380px] sm:min-h-[420px] flex flex-col justify-end p-7 sm:p-9 group border border-slate-200 bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1000&q=80"
                alt="Nuestra Visión Intiwawa"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent" />

              <div className="relative z-10 space-y-3">
                <span className="inline-block px-3 py-1 rounded-full bg-[#6D28D9] text-white text-xs font-black uppercase tracking-wider">
                  Nuestra Visión
                </span>
                <p className="text-xl sm:text-2xl font-black text-white leading-snug">
                  Un país donde el lugar donde naces no determine tu futuro, y cada niña y niño crezca con dignidad, salud y oportunidades para soñar.
                </p>
                <button
                  onClick={() => navigateTo('nosotros', 'mision-vision')}
                  className="pt-2 text-xs font-bold text-purple-200 hover:text-white flex items-center gap-1.5 transition"
                >
                  <span>Conoce nuestros valores institucionales</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. CIERRE CON EL CARRUSEL DE ALIADOS SOBRE FONDO BLANCO  */}
      {/* ======================================================== */}
      <div id="nuestros-aliados" className="scroll-mt-24 bg-white">
        <Partners />
      </div>

      {/* Franja Final de Llamado a la Acción Rápida con Morado y Amarillo */}
      <section className="bg-gradient-to-r from-purple-950 via-[#6D28D9] to-indigo-950 text-white py-12 border-t border-purple-900">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Transparencia y Vocación en Arequipa</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                ¿Listo para transformar vidas en Mollebaya?
              </h3>
              <p className="text-xs sm:text-sm text-purple-200">
                Tu donación o voluntariado llega directamente a los niños y madres del valle.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => navigateTo('donar')}
                className="px-6 py-3 rounded-xl font-black bg-[#FFB800] hover:bg-[#e5a500] text-slate-950 text-xs sm:text-sm flex items-center gap-2 shadow-sm transition cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-slate-950" />
                <span>Dona Aquí</span>
              </button>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-xl font-bold bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm flex items-center gap-2 border border-white/20 transition"
              >
                <MessageCircle className="w-4 h-4 text-[#FFB800]" />
                <span>WhatsApp ({WHATSAPP_DISPLAY})</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}