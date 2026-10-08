import { useState } from 'react'
import {
  Heart,
  QrCode,
  Copy,
  Check,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  Building
} from 'lucide-react'

export default function Donar() {
  const [selectedDonation, setSelectedDonation] = useState(50)
  const [customDonation, setCustomDonation] = useState('')
  const [copiedYape, setCopiedYape] = useState(false)
  const [copiedBcp, setCopiedBcp] = useState(false)

  // Datos oficiales de pago
  const YAPE_HOLDER = 'Luis Armando Sotomayor Zambrano'
  const YAPE_PHONE = '923 221 762'
  const YAPE_RAW_PHONE = '923221762'
  const WHATSAPP_NUMBER = '51923221762'
  const WHATSAPP_DISPLAY = '+51 923 221 762'

  const currentAmount = customDonation ? Number(customDonation) : selectedDonation

  const handleCopyYape = () => {
    navigator.clipboard.writeText(YAPE_RAW_PHONE)
    setCopiedYape(true)
    setTimeout(() => setCopiedYape(false), 2500)
  }

  const handleCopyBcp = () => {
    navigator.clipboard.writeText('215-98765432-0-88')
    setCopiedBcp(true)
    setTimeout(() => setCopiedBcp(false), 2500)
  }

  const getImpactDescription = (amount) => {
    if (amount <= 25) {
      return 'Financia 4 raciones de almuerzos nutritivos balanceados para niños en el comedor comunal.'
    }
    if (amount <= 60) {
      return 'Cubre el paquete bimestral completo de útiles escolares, cuadernos y cuentos para 1 estudiante.'
    }
    if (amount <= 120) {
      return 'Financia 1 mes completo de tutoría académica, ludoteca y refuerzo de matemáticas y lectura.'
    }
    if (amount <= 250) {
      return 'Asegura chequeo médico pediátrico, descarte de anemia y tratamiento odontológico para 3 niños.'
    }
    return 'Financia insumos textiles y capacitación productiva para que 2 madres de Mollebaya alcancen autonomía económica.'
  }

  return (
    <div className="py-12 lg:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="bg-[#FFB800]/30 text-amber-950 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            Canales Oficiales de Donación
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Dona y Transforma la Vida de un Niño en Mollebaya
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Gracias a tu aporte solidario, mantenemos activo el comedor infantil, la biblioteca comunitaria y los talleres para madres de familia.
          </p>
        </div>

        {/* SELECTOR EN SOLES (S/) CON IMPACTO DINÁMICO */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
              Paso 1: Elige tu Donación Solidaria
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              ¿Cuánto deseas aportar hoy?
            </h2>
            <p className="text-slate-600 text-sm">
              Selecciona un monto predefinido en soles (S/) o ingresa la cantidad que desees:
            </p>
          </div>

          {/* Botones de montos predefinidos */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4">
            {[20, 50, 100, 200, 500].map((amount) => (
              <button
                key={amount}
                onClick={() => {
                  setSelectedDonation(amount)
                  setCustomDonation('')
                }}
                className={`py-4 px-3 rounded-2xl font-black text-lg border-2 transition-all flex flex-col items-center justify-center ${
                  selectedDonation === amount && !customDonation
                    ? 'border-[#FFB800] bg-[#FFB800]/15 text-slate-950 shadow-md ring-2 ring-[#FFB800]/30 scale-105'
                    : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-slate-50/50'
                }`}
              >
                <span>S/ {amount}</span>
                <span className="text-[10px] font-normal text-slate-500 uppercase">PEN</span>
              </button>
            ))}
          </div>

          {/* Monto personalizado */}
          <div className="max-w-md mx-auto">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 text-center">
              O ingresa otro monto en Soles (S/):
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold text-base">
                S/
              </span>
              <input
                type="number"
                min="5"
                placeholder="Ejemplo: 75"
                value={customDonation}
                onChange={(e) => {
                  setCustomDonation(e.target.value)
                  setSelectedDonation(0)
                }}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl border-2 border-slate-300 focus:border-[#FFB800] focus:ring-2 focus:ring-[#FFB800]/30 outline-none font-bold text-slate-900 text-lg text-center"
              />
            </div>
          </div>

          {/* Tarjeta de impacto del monto seleccionado */}
          <div className="p-6 rounded-2xl bg-amber-50/80 border border-amber-200/90 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-[#FFB800] flex items-center justify-center shrink-0 shadow-sm">
              <Heart className="w-7 h-7 text-slate-950 fill-slate-950" />
            </div>
            <div className="space-y-1">
              <h3 className="font-extrabold text-slate-900 text-base">
                Tu aporte solidario de S/ {currentAmount || 50}.00 generará:
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                {getImpactDescription(currentAmount || 50)}
              </p>
            </div>
          </div>
        </div>

        {/* BLOQUE YAPE DESTACADO A NOMBRE DE LUIS ARMANDO SOTOMAYOR ZAMBRANO */}
        <div className="bg-gradient-to-br from-purple-900 via-indigo-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden border-4 border-purple-400/30">
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-purple-600/60 text-purple-200 px-3.5 py-1.5 rounded-full text-xs font-bold border border-purple-400/30">
                <QrCode className="w-4 h-4 text-[#FFB800]" />
                <span>Método Recomendado: Inmediato y sin comisiones</span>
              </div>

              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                  Dona directamente a través de <span className="text-[#FFB800]">Yape</span>
                </h2>
                <p className="text-sm text-purple-200">
                  Transfiere desde tu celular en segundos escaneando el código QR o copiando el número registrado.
                </p>
              </div>

              {/* Ficha oficial de Yape */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 space-y-4">
                <div>
                  <span className="text-xs uppercase tracking-wider text-purple-300 font-bold block">
                    Titular Oficial de la Cuenta Yape:
                  </span>
                  <p className="text-xl sm:text-2xl font-black text-white tracking-wide mt-1">
                    {YAPE_HOLDER}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-purple-300 font-bold block">
                      Número de Celular Yape:
                    </span>
                    <p className="text-2xl sm:text-3xl font-mono font-extrabold text-[#FFB800] tracking-wider">
                      {YAPE_PHONE}
                    </p>
                  </div>
                  <button
                    onClick={handleCopyYape}
                    className="px-5 py-3 rounded-xl bg-[#FFB800] hover:bg-[#e5a500] text-slate-950 font-bold flex items-center gap-2 shadow-md transition active:scale-95"
                  >
                    {copiedYape ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>¡Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copiar número</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-purple-950/60 border border-purple-500/30 text-xs text-purple-200 leading-relaxed space-y-1">
                <p>
                  * <strong>Importante:</strong> Tras realizar tu donación por Yape, envíanos la captura de pantalla por WhatsApp al <strong>{WHATSAPP_DISPLAY}</strong> para registrar tu aporte en nuestro libro contable de transparencia y hacerte llegar tu certificado de agradecimiento.
                </p>
              </div>

              {/* Botón de notificación por WhatsApp con monto */}
              <div>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    `¡Hola Luis y equipo Intiwawa! Acabo de hacer una donación por Yape de S/ ${
                      currentAmount || 50
                    }.00 a nombre de ${YAPE_HOLDER} para apoyar a los niños de Mollebaya. Adjunto mi constancia:`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold shadow-lg transition"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Notificar Yape de S/ {currentAmount || 50}.00 por WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Código QR estilizado de Yape */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="bg-white p-6 rounded-3xl shadow-2xl text-center text-slate-900 w-full max-w-xs space-y-4 border-4 border-[#FFB800]">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-purple-700 text-white font-black flex items-center justify-center text-base shadow">
                    Y
                  </div>
                  <span className="text-2xl font-black text-purple-900 tracking-tight">yape</span>
                </div>

                <div className="bg-slate-50 border-2 border-dashed border-purple-200 rounded-2xl p-4 flex flex-col items-center justify-center shadow-inner">
                  {/* QR SVG limpio y estilizado */}
                  <svg className="w-44 h-44 text-slate-900" viewBox="0 0 100 100" fill="currentColor">
                    {/* Marcos de esquina */}
                    <rect x="5" y="5" width="26" height="26" rx="4" />
                    <rect x="9" y="9" width="18" height="18" rx="2" fill="#FFF" />
                    <rect x="13" y="13" width="10" height="10" rx="1" />

                    <rect x="69" y="5" width="26" height="26" rx="4" />
                    <rect x="73" y="9" width="18" height="18" rx="2" fill="#FFF" />
                    <rect x="77" y="13" width="10" height="10" rx="1" />

                    <rect x="5" y="69" width="26" height="26" rx="4" />
                    <rect x="9" y="73" width="18" height="18" rx="2" fill="#FFF" />
                    <rect x="13" y="77" width="10" height="10" rx="1" />

                    {/* Patrón de datos simulado */}
                    <rect x="36" y="8" width="6" height="6" />
                    <rect x="46" y="8" width="6" height="6" />
                    <rect x="56" y="8" width="6" height="6" />
                    <rect x="36" y="22" width="6" height="6" />
                    <rect x="46" y="16" width="6" height="6" />
                    <rect x="56" y="24" width="6" height="6" />

                    <rect x="8" y="38" width="6" height="6" />
                    <rect x="18" y="44" width="6" height="6" />
                    <rect x="8" y="52" width="6" height="6" />
                    <rect x="24" y="56" width="6" height="6" />

                    <rect x="36" y="36" width="28" height="28" rx="4" fill="#7E22CE" />
                    <circle cx="50" cy="50" r="8" fill="#FFF" />
                    <circle cx="50" cy="50" r="4" fill="#FFB800" />

                    <rect x="70" y="38" width="6" height="6" />
                    <rect x="82" y="44" width="6" height="6" />
                    <rect x="74" y="52" width="6" height="6" />
                    <rect x="86" y="56" width="6" height="6" />

                    <rect x="36" y="70" width="6" height="6" />
                    <rect x="46" y="76" width="6" height="6" />
                    <rect x="56" y="84" width="6" height="6" />
                    <rect x="70" y="70" width="6" height="6" />
                    <rect x="80" y="78" width="6" height="6" />
                    <rect x="88" y="88" width="6" height="6" />
                  </svg>
                  <span className="text-[11px] text-purple-700 font-bold mt-2">
                    Escanea desde tu app Yape
                  </span>
                </div>

                <div className="text-xs space-y-1">
                  <p className="font-extrabold text-slate-900 text-sm">{YAPE_HOLDER}</p>
                  <p className="font-mono text-purple-700 font-bold text-base">{YAPE_PHONE}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CANALES BANCARIOS ALTERNATIVOS Y DONACIONES EN ESPECIE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center">
              <Building className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Transferencia Bancaria BCP / CCI</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Para aportes de empresas o donantes que requieran transferencia directa interbancaria:
            </p>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
              <p><strong>Banco:</strong> BCP (Banco de Crédito del Perú)</p>
              <p><strong>Titular:</strong> {YAPE_HOLDER} (Cta. Autorizada Intiwawa)</p>
              <p className="flex items-center justify-between">
                <span><strong>Cta. Soles:</strong> 215-98765432-0-88</span>
                <button
                  onClick={handleCopyBcp}
                  className="text-amber-700 hover:underline font-bold"
                >
                  {copiedBcp ? 'Copiado' : 'Copiar'}
                </button>
              </p>
              <p><strong>CCI:</strong> 002-215-009876543208-88</p>
            </div>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Intiwawa,%20deseo%20solicitar%20datos%20bancarios%20institucionales%20o%20facturación`}
              target="_blank"
              rel="noreferrer"
              className="text-amber-800 text-xs font-bold hover:underline flex items-center gap-1"
            >
              <span>Consultar otras entidades bancarias por WhatsApp</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-900 flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Donaciones en Especie</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Recibimos insumos en nuestra sede de Mollebaya o coordinamos el recojo en Arequipa:
            </p>
            <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
              <li>Libros de literatura infantil y cuentos ilustrados</li>
              <li>Alimentos no perecibles (quinua, avena, menestras, leche)</li>
              <li>Útiles escolares (cuadernos, lápices de colores, mochilas)</li>
              <li>Computadoras, laptops y tabletas en buen estado</li>
            </ul>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Intiwawa,%20tengo%20una%20donación%20en%20especie%20para%20los%20niños%20de%20Mollebaya`}
              target="_blank"
              rel="noreferrer"
              className="text-emerald-800 text-xs font-bold hover:underline flex items-center gap-1 pt-1"
            >
              <span>Coordinar entrega de donación en especie</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* COMPROMISO DE TRANSPARENCIA */}
        <div className="bg-slate-100 rounded-3xl p-8 border border-slate-200 flex flex-col sm:flex-row items-center gap-6">
          <ShieldCheck className="w-14 h-14 text-amber-600 shrink-0" />
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-bold text-slate-900 text-base">Compromiso 100% de Transparencia</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              La Asociación Intiwawa rinde cuentas anualmente a sus donantes y a las autoridades peruanas. Cada sol donado es destinado rigurosamente a la ejecución directa de programas en beneficio de las niñas, niños y madres de Mollebaya.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
