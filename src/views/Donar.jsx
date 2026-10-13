import { useState } from 'react'
import {
  Heart,
  Copy,
  Check,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  Landmark,
  Globe,
  Calendar,
  MessageCircle,
  Mail,
  ArrowRight,
  CheckCircle2,
  Gift,
  Building2,
  FileCheck
} from 'lucide-react'

export default function Donar({ navigateTo }) {
  const [activePlatform, setActivePlatform] = useState('betterplace')
  const [selectedAmount, setSelectedAmount] = useState(50)
  const [customAmount, setCustomAmount] = useState('')
  const [copiedKey, setCopiedKey] = useState(null)

  const WHATSAPP_NUMBER = '51923221762'
  const WHATSAPP_DISPLAY = '+51 923 221 762'
  const OFFICIAL_EMAIL = 'info@intiwawa.com'

  // Datos Bancarios Formales Institucionales (Asociación IWA en Acción - Intiwawa)
  const BANK_DETAILS = {
    titular: 'Asociación IWA en Acción - Intiwawa',
    banco: 'Banco de Crédito del Perú (BCP)',
    ruc: '20601423891',
    tipoCuenta: 'Cuenta Corriente Institucional',
    soles: {
      numero: '215-2651478-0-92',
      cci: '002-215-002651478092-14',
    },
    dolares: {
      numero: '215-2651499-1-18',
      cci: '002-215-002651499118-19',
    },
    swift: 'BCPLPEPL',
  }

  // Plataformas oficiales internacionales
  const platforms = {
    betterplace: {
      id: 'betterplace',
      name: 'Betterplace.org',
      region: 'Europa y Global (EUR €)',
      tag: 'Recomendado para Europa',
      badge: 'Deducción fiscal en Alemania / Europa',
      currency: '€',
      url: 'https://www.betterplace.org/en/organisations/17799-intiwawa',
      description:
        'Canal oficial para donantes en Europa y cualquier parte del mundo en Euros (€). Gestionado a través de nuestra entidad registrada Intiwawa e.V. con certificado de donación deducible en Alemania.',
      presets: [15, 30, 50, 100, 200],
      impacts: {
        15: 'Financia 1 semana completa de almuerzos nutritivos balanceados para 5 niños en el comedor de Mollebaya.',
        30: 'Cubre el paquete bimestral completo de útiles escolares, textos y cuentos ilustrados para 1 estudiante.',
        50: 'Asegura 1 mes de tutoría pedagógica personalizada, ludoteca y refuerzo de lectura y matemáticas para 2 niños.',
        100: 'Financia chequeos médicos pediátricos integrales, descarte de anemia y tratamiento odontológico para 5 niños.',
        200: 'Provee insumos textiles y capacitación productiva para el taller de madres artesanas Warmi hacia su autonomía económica.',
      },
    },
    omprakash: {
      id: 'omprakash',
      name: 'Omprakash Global Giving',
      region: 'Estados Unidos y Global (USD $)',
      tag: 'Recomendado para EE.UU. y Canadá',
      badge: '501(c)(3) Tax-Deductible (USA)',
      currency: '$',
      url: 'https://www.omprakash.org/global-giving/partner/intiwawa',
      description:
        'Canal oficial para contribuyentes en Estados Unidos y donaciones en Dólares (USD). Cada aporte es 100% deducible de impuestos bajo el estatus 501(c)(3) a través de Omprakash.',
      presets: [20, 35, 60, 120, 250],
      impacts: {
        20: 'Provides 1 week of warm, balanced daily lunches for 5 children in our Mollebaya community dining room.',
        35: 'Funds complete school supplies, reading books, and workbook sets for 1 elementary school student.',
        60: 'Guarantees 1 full month of after-school academic reinforcement, English classes, and socio-emotional support for 2 children.',
        120: 'Covers comprehensive pediatric health checkups, anemia treatments, and preventive dental care for 5 children.',
        250: 'Sponsors vocational sewing and knitting materials, empowering local artisan mothers toward economic independence.',
      },
    },
  }

  const currentPlatform = platforms[activePlatform]
  const currentVal = customAmount ? Number(customAmount) : selectedAmount

  const getImpactText = () => {
    const impacts = currentPlatform.impacts
    if (impacts[currentVal]) return impacts[currentVal]
    if (currentVal < 25) return impacts[currentPlatform.presets[0]]
    if (currentVal < 45) return impacts[currentPlatform.presets[1]]
    if (currentVal < 80) return impacts[currentPlatform.presets[2]]
    if (currentVal < 180) return impacts[currentPlatform.presets[3]]
    return impacts[currentPlatform.presets[4]]
  }

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text)
    setCopiedKey(key)
    setTimeout(() => setCopiedKey(null), 2500)
  }

  return (
    <div className="py-12 lg:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* ============================================================ */}
        {/* 1. CABECERA CLARA Y TRANSPARENTE: IMPACTO EN MOLLEBAYA      */}
        {/* ============================================================ */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 bg-[#FFB800]/25 text-amber-950 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-amber-300/40">
            <Heart className="w-3.5 h-3.5 text-amber-700 fill-amber-700" />
            <span>Donaciones Transparentes · Mollebaya, Arequipa</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Tu Aporte Transforma Vidas en <span className="text-[#FFB800] underline decoration-[#FFB800]/50 decoration-wavy underline-offset-8">Mollebaya</span>
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed font-normal">
            En Intiwawa cada recurso se traduce directamente en educación de calidad, nutrición balanceada y empoderamiento para las familias de nuestra comunidad andina. Elige tu canal oficial de donación con total seguridad y trazabilidad.
          </p>

          {/* Sellos rápidos de confianza */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-slate-700">
            <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              100% de fondos en programas directos
            </span>
            <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-amber-600" />
              Asociación civil debidamente registrada
            </span>
            <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-xs">
              <FileCheck className="w-4 h-4 text-blue-600" />
              Rendición anual transparente
            </span>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 2. SELECTOR DE PLATAFORMAS OFICIALES: BETTERPLACE & OMPRAKASH */}
        {/* ============================================================ */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
          {/* Barra de pestañas de plataformas */}
          <div className="bg-slate-100/80 p-2 sm:p-3 border-b border-slate-200 flex flex-col sm:flex-row gap-2">
            <button
              onClick={() => {
                setActivePlatform('betterplace')
                setSelectedAmount(50)
                setCustomAmount('')
              }}
              className={`flex-1 py-3.5 px-4 rounded-2xl font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2.5 ${
                activePlatform === 'betterplace'
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200 ring-2 ring-[#FFB800]/50'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <Globe className="w-5 h-5 text-amber-600" />
              <div className="text-left">
                <div className="font-extrabold text-sm sm:text-base leading-tight">Betterplace.org</div>
                <div className="text-[11px] font-normal text-slate-500">Europa y Global (EUR €)</div>
              </div>
            </button>

            <button
              onClick={() => {
                setActivePlatform('omprakash')
                setSelectedAmount(60)
                setCustomAmount('')
              }}
              className={`flex-1 py-3.5 px-4 rounded-2xl font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2.5 ${
                activePlatform === 'omprakash'
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200 ring-2 ring-[#FFB800]/50'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <Landmark className="w-5 h-5 text-indigo-600" />
              <div className="text-left">
                <div className="font-extrabold text-sm sm:text-base leading-tight">Omprakash Global Giving</div>
                <div className="text-[11px] font-normal text-slate-500">EE.UU. y Deducible 501(c)(3) (USD $)</div>
              </div>
            </button>
          </div>

          {/* Contenido interactivo de la plataforma seleccionada */}
          <div className="p-6 sm:p-10 space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 px-3 py-1 rounded-full">
                    {currentPlatform.tag}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    {currentPlatform.badge}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Dona a través de {currentPlatform.name}
                </h2>
                <p className="text-slate-600 text-sm max-w-2xl leading-relaxed">
                  {currentPlatform.description}
                </p>
              </div>

              {/* Botón directo a la plataforma */}
              <a
                href={currentPlatform.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#FFB800] hover:bg-[#e5a500] text-slate-950 font-extrabold text-sm shadow-md hover:shadow-lg transition shrink-0"
              >
                <span>Ir a {currentPlatform.name}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Selector de montos referenciales */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Elige un monto de aporte referencial:
                </label>
                <span className="text-xs text-slate-500">
                  Moneda: <strong>{currentPlatform.currency} ({activePlatform === 'betterplace' ? 'Euros' : 'Dólares'})</strong>
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4">
                {currentPlatform.presets.map((amt) => {
                  const isSelected = selectedAmount === amt && !customAmount
                  return (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => {
                        setSelectedAmount(amt)
                        setCustomAmount('')
                      }}
                      className={`py-4 px-3 rounded-2xl font-black text-lg sm:text-xl border-2 transition-all flex flex-col items-center justify-center ${
                        isSelected
                          ? 'border-[#FFB800] bg-[#FFB800]/15 text-slate-950 shadow-md ring-2 ring-[#FFB800]/30 scale-102'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-slate-50/50'
                      }`}
                    >
                      <span>
                        {currentPlatform.currency} {amt}
                      </span>
                      <span className="text-[10px] font-medium text-slate-500 uppercase mt-0.5">
                        {activePlatform === 'betterplace' ? 'EUR' : 'USD'}
                      </span>
                    </button>
                  )
                })}
              </div>

              {/* Opción de monto libre */}
              <div className="max-w-xs mx-auto pt-2">
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold text-sm">
                    {currentPlatform.currency}
                  </span>
                  <input
                    type="number"
                    min="5"
                    placeholder="Otro monto"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value)
                      setSelectedAmount(0)
                    }}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#FFB800] focus:ring-2 focus:ring-[#FFB800]/30 outline-none font-bold text-slate-900 text-sm text-center bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Tarjeta de impacto tangible del monto */}
            <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <div className="w-14 h-14 rounded-2xl bg-[#FFB800] flex items-center justify-center shrink-0 shadow-sm text-slate-950">
                <Sparkles className="w-7 h-7" />
              </div>
              <div className="space-y-1 flex-1">
                <div className="text-xs uppercase font-extrabold text-amber-900 tracking-wider">
                  Impacto Directo Estimado · {currentPlatform.currency} {currentVal || currentPlatform.presets[2]}
                </div>
                <p className="text-sm font-semibold text-slate-800 leading-relaxed">
                  {getImpactText()}
                </p>
              </div>
            </div>

            {/* Botón de acción principal hacia la plataforma con el monto */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Transacción segura y encriptada gestionada por {currentPlatform.name}</span>
              </div>

              <a
                href={currentPlatform.url}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#FFB800] hover:bg-[#e5a500] text-slate-950 font-extrabold text-base shadow-lg transition active:scale-98"
              >
                <span>Donar {currentPlatform.currency} {currentVal || currentPlatform.presets[2]} en {currentPlatform.name}</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 3. BLOQUE DESTACADO: MEMBRESÍA Y DONACIÓN CONTINUA           */}
        {/* ============================================================ */}
        <div className="bg-gradient-to-br from-amber-500 via-[#FFB800] to-amber-400 rounded-3xl p-8 sm:p-12 text-slate-950 shadow-xl relative overflow-hidden border-2 border-amber-400">
          <div className="absolute -right-12 -top-12 w-64 h-64 bg-white/20 rounded-full blur-2xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-slate-950 text-white px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                <Calendar className="w-3.5 h-3.5 text-[#FFB800]" />
                <span>Apoyo Sostenible a Largo Plazo</span>
              </div>

              {/* Pregunta oficial requerida */}
              <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight leading-tight">
                ¿Te interesa apoyarnos de manera continua o ser miembro?
              </h2>

              <p className="text-base text-slate-900 leading-relaxed font-medium">
                Las donaciones mensuales recurrentes y membresías solidarias son el corazón que sostiene la continuidad de nuestros programas. Permiten asegurar los almuerzos diarios de los niños, los sueldos del equipo docente en Mollebaya y la compra de materiales pedagógicos sin interrupciones.
              </p>

              {/* Beneficios de la membresía */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-white/70 backdrop-blur-xs p-3.5 rounded-xl border border-white/60 space-y-1">
                  <div className="font-extrabold text-xs text-slate-900 uppercase">Impacto Predecible</div>
                  <p className="text-[12px] text-slate-800 leading-snug">Garantiza la educación de un niño mes a mes.</p>
                </div>
                <div className="bg-white/70 backdrop-blur-xs p-3.5 rounded-xl border border-white/60 space-y-1">
                  <div className="font-extrabold text-xs text-slate-900 uppercase">Informes Exclusivos</div>
                  <p className="text-[12px] text-slate-800 leading-snug">Boletines de transparencia y avances semestrales.</p>
                </div>
                <div className="bg-white/70 backdrop-blur-xs p-3.5 rounded-xl border border-white/60 space-y-1">
                  <div className="font-extrabold text-xs text-slate-900 uppercase">Comunidad Cercana</div>
                  <p className="text-[12px] text-slate-800 leading-snug">Certificado de membresía y contacto con el equipo.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href={currentPlatform.url}
                target="_blank"
                rel="noreferrer"
                className="w-full text-center py-4 px-6 rounded-2xl bg-slate-950 hover:bg-slate-900 text-white font-extrabold text-sm shadow-md transition flex items-center justify-center gap-2"
              >
                <span>Activar Aporte Mensual Online</span>
                <ExternalLink className="w-4 h-4 text-[#FFB800]" />
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  '¡Hola equipo Intiwawa! Me interesa conocer más sobre cómo ser miembro o hacer una donación continua para apoyar a los niños de Mollebaya.'
                )}`}
                target="_blank"
                rel="noreferrer"
                className="w-full text-center py-3.5 px-6 rounded-2xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-sm shadow-sm transition flex items-center justify-center gap-2 border border-slate-300"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Conversar sobre Membresía por WhatsApp</span>
              </a>

              <p className="text-[11px] text-slate-800 text-center font-medium">
                También puedes escribirnos a <strong className="underline">{OFFICIAL_EMAIL}</strong>
              </p>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 4. DATOS BANCARIOS FORMALES (BCP / CCI / SWIFT - ASOCIACIÓN) */}
        {/* ============================================================ */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-950 flex items-center justify-center shrink-0">
                <Building2 className="w-7 h-7 text-amber-800" />
              </div>
              <div className="space-y-0.5">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                  Canal Bancario Institucional Oficial
                </span>
                <h3 className="text-2xl font-black text-slate-900">
                  Transferencia Bancaria Formal (BCP / CCI / SWIFT)
                </h3>
                <p className="text-xs text-slate-500">
                  Ideal para empresas, transferencias interbancarias en Perú o giros bancarios internacionales.
                </p>
              </div>
            </div>

            <span className="self-start sm:self-auto bg-slate-100 text-slate-700 text-xs font-bold px-3 py-1.5 rounded-full border border-slate-200">
              RUC: {BANK_DETAILS.ruc}
            </span>
          </div>

          {/* Ficha institucional de la cuenta */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4 border-b border-slate-200/80">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                  Titular Oficial de la Cuenta:
                </span>
                <span className="text-base font-black text-slate-900 block mt-0.5">
                  {BANK_DETAILS.titular}
                </span>
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                  Entidad Financiera:
                </span>
                <span className="text-base font-extrabold text-slate-900 block mt-0.5">
                  {BANK_DETAILS.banco} ({BANK_DETAILS.tipoCuenta})
                </span>
              </div>
            </div>

            {/* Cuentas Soles, Dólares y SWIFT */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Soles */}
              <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">
                    Soles (PEN S/)
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">Uso nacional</span>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Número de Cuenta BCP:</span>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono font-extrabold text-sm text-slate-900">
                      {BANK_DETAILS.soles.numero}
                    </span>
                    <button
                      onClick={() => handleCopy(BANK_DETAILS.soles.numero, 'soles-num')}
                      className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-600 transition"
                      title="Copiar número"
                    >
                      {copiedKey === 'soles-num' ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="space-y-1 pt-1 border-t border-slate-100">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">CCI Interbancario:</span>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs font-bold text-slate-800">
                      {BANK_DETAILS.soles.cci}
                    </span>
                    <button
                      onClick={() => handleCopy(BANK_DETAILS.soles.cci, 'soles-cci')}
                      className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-600 transition"
                      title="Copiar CCI"
                    >
                      {copiedKey === 'soles-cci' ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Dólares */}
              <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-blue-800 bg-blue-50 px-2.5 py-1 rounded-md">
                    Dólares (USD $)
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">Depósitos USD</span>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Número de Cuenta BCP:</span>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono font-extrabold text-sm text-slate-900">
                      {BANK_DETAILS.dolares.numero}
                    </span>
                    <button
                      onClick={() => handleCopy(BANK_DETAILS.dolares.numero, 'usd-num')}
                      className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-600 transition"
                      title="Copiar número"
                    >
                      {copiedKey === 'usd-num' ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="space-y-1 pt-1 border-t border-slate-100">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">CCI Interbancario:</span>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs font-bold text-slate-800">
                      {BANK_DETAILS.dolares.cci}
                    </span>
                    <button
                      onClick={() => handleCopy(BANK_DETAILS.dolares.cci, 'usd-cci')}
                      className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-600 transition"
                      title="Copiar CCI"
                    >
                      {copiedKey === 'usd-cci' ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* SWIFT Internacional */}
              <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-purple-800 bg-purple-50 px-2.5 py-1 rounded-md">
                    Código SWIFT / BIC
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">Internacional</span>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Código SWIFT BCP:</span>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono font-black text-base text-slate-900 tracking-wider">
                      {BANK_DETAILS.swift}
                    </span>
                    <button
                      onClick={() => handleCopy(BANK_DETAILS.swift, 'swift')}
                      className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-600 transition"
                      title="Copiar SWIFT"
                    >
                      {copiedKey === 'swift' ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                <p className="text-[11px] text-slate-500 pt-1 leading-snug">
                  Requerido para transferencias bancarias internacionales directas a través de la red bancaria global.
                </p>
              </div>
            </div>
          </div>

          {/* Notificación y constancia formal */}
          <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-extrabold text-sm text-slate-900">
                ¿Realizaste una transferencia bancaria?
              </h4>
              <p className="text-xs text-slate-600">
                Envíanos tu constancia al WhatsApp <strong>{WHATSAPP_DISPLAY}</strong> o correo <strong>{OFFICIAL_EMAIL}</strong> para registrar tu aporte en nuestro libro contable de transparencia y remitirte el Certificado de Donación correspondiente.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5 shrink-0">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  '¡Hola equipo Intiwawa! Acabo de realizar una transferencia bancaria formal a nombre de Asociación IWA en Acción - Intiwawa. Adjunto mi constancia de pago para el registro contable:'
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enviar por WhatsApp</span>
              </a>

              <a
                href={`mailto:${OFFICIAL_EMAIL}?subject=Constancia%20de%20Donación%20Bancaria%20Intiwawa`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-sm transition"
              >
                <Mail className="w-4 h-4" />
                <span>Enviar por Correo</span>
              </a>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 5. DONACIONES EN ESPECIE Y COMPROMISO DE TRANSPARENCIA      */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Donaciones en especie */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-950 flex items-center justify-center">
              <Gift className="w-6 h-6 text-amber-800" />
            </div>
            <h3 className="text-xl font-black text-slate-900">Donaciones en Especie</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Recibimos donaciones materiales directamente en nuestro Centro Comunitario en Mollebaya o coordinamos recojo en la ciudad de Arequipa:
            </p>
            <ul className="text-xs text-slate-700 space-y-2 list-disc list-inside bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <li>Libros infantiles, diccionarios y material de lectura ilustrado</li>
              <li>Alimentos no perecibles (quinua, avena, menestras, leche, cereales)</li>
              <li>Materiales escolares y de arte (hojas bond, plumones, témperas, pinceles)</li>
              <li>Equipamiento de cómputo, laptops o tabletas en buen estado operativo</li>
              <li>Telas, lanas e insumos de costura para el taller productivo Warmi</li>
            </ul>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                '¡Hola Intiwawa! Tengo una donación en especie para coordinar con el equipo de Mollebaya:'
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-amber-800 hover:text-amber-900 hover:underline pt-1"
            >
              <span>Coordinar entrega de donación material</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Sellos de transparencia y legitimidad institucional */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-5">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-950 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-emerald-800" />
            </div>
            <h3 className="text-xl font-black text-slate-900">Compromiso y Sellos de Transparencia</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Trabajamos bajo los más rigurosos estándares de rendición de cuentas, gobernanza y ética profesional tanto en Perú como a nivel internacional:
            </p>

            <div className="space-y-3 text-xs text-slate-700">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">Asociación IWA en Acción (Perú):</strong> Registrada en SUNARP y SUNAT como entidad receptora legal sin fines de lucro.
                </div>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">Intiwawa e.V. (Alemania):</strong> Asociación inscrita (eingetragener Verein) con certificado de utilidad pública (Gemeinnützigkeit) para deducciones fiscales en Europa.
                </div>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">Alianza Omprakash (EE.UU.):</strong> Certificada bajo la figura 501(c)(3) para donaciones exentas de impuestos en Estados Unidos.
                </div>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-slate-500">
              Si requieres informes financieros o balances anuales de gestión, contáctanos a <strong className="text-slate-700">{OFFICIAL_EMAIL}</strong>.
            </div>
          </div>
        </div>

        {/* Exploración de programas financiados */}
        <div className="text-center pt-6 pb-2 border-t border-slate-200">
          <p className="text-sm text-slate-600">
            ¿Deseas conocer en detalle los programas donde se invierte tu donación?{' '}
            <button
              onClick={() => navigateTo('proyectos')}
              className="font-bold text-amber-800 hover:text-amber-950 underline underline-offset-4 transition inline-flex items-center gap-1"
            >
              <span>Explora nuestros proyectos en Mollebaya</span>
              <ArrowRight className="w-3.5 h-3.5 inline" />
            </button>
          </p>
        </div>

      </div>
    </div>
  )
}
