import { useState } from 'react'
import {
  Heart,
  MessageCircle,
  Recycle,
  Users,
  CheckCircle2,
  Truck,
  Sparkles,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  PackageCheck
} from 'lucide-react'

export default function Tienda({ navigateTo }) {
  const WHATSAPP_PHONE = '51923221762'
  const WHATSAPP_DISPLAY = '+51 923 221 762'

  // Categorías de filtro
  const [activeCategory, setActiveCategory] = useState('todos')

  // Catálogo oficial de productos artesanales del Programa Warmi
  const products = [
    {
      id: 1,
      name: 'Bolsa Ecológica Warmi (Tote Bag Upcycling)',
      category: 'reciclado',
      categoryLabel: 'Telas Recicladas & Upcycling',
      price: 28,
      artisan: 'Mamitas de Mollebaya',
      material: 'Algodón recuperado y retazos de mezclilla reutilizada',
      description:
        'Bolsa resistente de gran capacidad con asas reforzadas, elaborada a mano a partir de mermas textiles seleccionadas y serigrafía artesanal con flora de Mollebaya.',
      impact: 'Financia 1 semana de almuerzos nutritivos para un niño del comedor infantil.',
      image:
        'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      name: 'Muñeca Andina de Trapo "Wawita"',
      category: 'reciclado',
      categoryLabel: 'Artesanía Upcycling',
      price: 35,
      artisan: 'Mamitas de Mollebaya',
      material: '100% retazos textiles reciclados y relleno hipoalergénico recuperado',
      description:
        'Muñeca tradicional vestida con traje andino típico arequipeño, cosida punto por punto con telas recicladas. Una pieza tierna, única y llena de identidad cultural.',
      impact: 'Cubre el paquete completo de útiles escolares y cuentos para una niña de Yachay.',
      image:
        'https://images.unsplash.com/photo-1558877385-81a1c7e67d72?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      name: 'Estuche / Neceser Textil Upcycling',
      category: 'reciclado',
      categoryLabel: 'Telas Recicladas & Upcycling',
      price: 22,
      artisan: 'Mamitas de Mollebaya',
      material: 'Retazos de lona y jeans reciclados con forro interior impermeable',
      description:
        'Cartuchera multiusos con cierre reforzado, perfecta para lápices, maquillaje o accesorios. Confeccionada con mezclilla recuperada de alto gramaje.',
      impact: 'Aporta insumos didácticos y témperas para los talleres de arte en la ludoteca.',
      image:
        'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      name: 'Chullo Tradicional Andino Tejido',
      category: 'tejidos',
      categoryLabel: 'Tejido a Mano',
      price: 45,
      artisan: 'Mamitas de Mollebaya',
      material: 'Fibra andina térmica suave con orejeras tradicionales',
      description:
        'Gorro andino tradicional con orejeras y pompón, tejido a mano a palitos por las madres artesanas de Mollebaya. Extra abrigador para el frío andino.',
      impact: 'Financia 1 mes de meriendas saludables y frutas frescas para un estudiante.',
      image:
        'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 5,
      name: 'Pack de Posavasos Textiles Upcycling (x4)',
      category: 'hogar',
      categoryLabel: 'Hogar & Decoración',
      price: 20,
      artisan: 'Mamitas de Mollebaya',
      material: 'Mermas textiles de algodón y lino combinadas con telar andino',
      description:
        'Set de 4 posavasos circulares acolchados, elaborados con retazos geométricos y costuras decorativas. Aportan calidez artesanal a tu mesa.',
      impact: 'Cubre el tratamiento dental preventivo y cepillo de dientes para 2 niños.',
      image:
        'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 6,
      name: 'Cojín Artesanal con Bordado Mollebaya',
      category: 'hogar',
      categoryLabel: 'Hogar & Decoración',
      price: 50,
      artisan: 'Mamitas de Mollebaya',
      material: 'Funda de lona reciclada con apliques textiles y bordado a mano',
      description:
        'Funda decorativa de 40x40 cm con bordado floral andino y texturas recuperadas. Cada pieza lleva la firma creativa de la madre artesana que lo confeccionó.',
      impact: 'Financia 2 semanas de tutoría y acompañamiento pedagógico integral.',
      image:
        'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 7,
      name: 'Pulseras Andinas Artesanales (Pack x3)',
      category: 'tejidos',
      categoryLabel: 'Tejido a Mano',
      price: 18,
      artisan: 'Mamitas de Mollebaya',
      material: 'Hilos mercerizados reciclados con técnicas de macramé andino',
      description:
        'Tres pulseras ajustables con patrones andinos tradicionales de Mollebaya, alegres y resistentes al agua. Un detalle solidario perfecto para regalar.',
      impact: 'Aporta a la caja comunal de salud y emergencia de las madres de Warmi.',
      image:
        'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 8,
      name: 'Monedero Textil con Cierre y Asa',
      category: 'reciclado',
      categoryLabel: 'Telas Recicladas & Upcycling',
      price: 15,
      artisan: 'Mamitas de Mollebaya',
      material: 'Retazos textiles recuperados y forro interior reforzado',
      description:
        'Práctico monedero compacto para monedas, llaves o tarjetas, con forro resistente y tirador trenzado artesanalmente. Cero desperdicio textil.',
      impact: 'Financia 3 raciones de almuerzo caliente en el comedor comunal.',
      image:
        'https://images.unsplash.com/photo-1563903530908-afdd155d057a?auto=format&fit=crop&w=800&q=80',
    },
  ]

  const filteredProducts =
    activeCategory === 'todos'
      ? products
      : products.filter((p) => p.category === activeCategory)

  // Generador de enlace directo api.whatsapp.com
  const getWhatsAppOrderUrl = (product) => {
    const text = `¡Hola equipo Intiwawa! Me gustaría pedir el siguiente producto artesanal de la Tienda Solidaria (Programa Warmi):

• Producto: "${product.name}"
• Precio: S/. ${product.price}.00
• Elaborado por: ${product.artisan} (Materiales reciclados)

¿Podrían confirmarme la disponibilidad para coordinar la entrega en Arequipa o envío nacional? ¡Muchas gracias!`

    return `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(text)}`
  }

  return (
    <div className="py-12 lg:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* ============================================================ */}
        {/* 1. CABECERA CLARA: TIENDA SOLIDARIA & MATERIALES RECICLADOS  */}
        {/* ============================================================ */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#FFB800]/25 text-amber-950 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-amber-300/40">
            <Recycle className="w-3.5 h-3.5 text-amber-700" />
            <span>Programa Warmi · Moda Sostenible & Upcycling</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Tienda Solidaria: <span className="text-[#FFB800] underline decoration-[#FFB800]/50 decoration-wavy underline-offset-8">Arte con Propósito</span>
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed font-normal">
            Cada producto de esta tienda es una pieza única elaborada por las talentosas madres artesanas de Mollebaya utilizando <strong>materiales textiles reciclados</strong> y fibras naturales. Transformamos mermas industriales en arte textil sostenible, brindando autonomía financiera a sus hogares.
          </p>
        </div>

        {/* ============================================================ */}
        {/* 2. CIFRAS CLAVE DE IMPACTO HUMANO (20 MAMITAS, 100% DIRECTO) */}
        {/* ============================================================ */}
        <div id="impacto-compra" className="scroll-mt-24 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
              Economía Circular Comunitaria
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Impacto Humano de tu Compra
            </h2>
            <p className="text-sm text-slate-600">
              Comprar en nuestra tienda no es un gasto comercial: es un motor de cambio familiar en Mollebaya.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Métrica 1: 20 mamitas */}
            <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-6 text-center space-y-2">
              <div className="w-12 h-12 rounded-xl bg-[#FFB800] text-slate-950 flex items-center justify-center mx-auto shadow-xs">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-black text-slate-900">20 Mamitas</div>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">
                Madres de familia capacitadas en corte, costura y diseño en el taller productivo Warmi.
              </p>
            </div>

            {/* Métrica 2: 100% financiamiento directo */}
            <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-6 text-center space-y-2">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-xs">
                <Heart className="w-6 h-6 fill-white" />
              </div>
              <div className="text-3xl sm:text-4xl font-black text-emerald-950">100% Directo</div>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">
                El valor de cada compra se transfiere directamente al sustento de sus familias e hijos.
              </p>
            </div>

            {/* Métrica 3: Upcycling textil */}
            <div className="bg-blue-50/70 border border-blue-200/80 rounded-2xl p-6 text-center space-y-2">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mx-auto shadow-xs">
                <Recycle className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-black text-blue-950">Zero Waste</div>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">
                Reutilizamos mermas textiles y retazos limpios, reduciendo el impacto ambiental.
              </p>
            </div>

            {/* Métrica 4: Cero intermediarios */}
            <div className="bg-purple-50/70 border border-purple-200/80 rounded-2xl p-6 text-center space-y-2">
              <div className="w-12 h-12 rounded-xl bg-purple-600 text-white flex items-center justify-center mx-auto shadow-xs">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-black text-purple-950">Comercio Justo</div>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">
                Trato humano y directo sin comisiones ni intermediarios abusivos.
              </p>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 3. GUÍA RÁPIDA EN 3 PASOS DE CÓMO COMPRAR Y COORDINAR ENTREGA */}
        {/* ============================================================ */}
        <div id="como-comprar" className="scroll-mt-24 bg-gradient-to-br from-amber-50 via-white to-amber-50/40 rounded-3xl p-8 sm:p-10 border border-amber-200 shadow-sm space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
              Sencillo · Rápido · Seguro
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
              ¿Cómo comprar en la Tienda Solidaria?
            </h2>
            <p className="text-sm text-slate-600">
              Sin pasarelas de pago engorrosas: todo el proceso es coordinado de forma humana y cercana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Paso 1 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs relative flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#FFB800] text-slate-950 font-black text-lg flex items-center justify-center shadow-xs">
                  1
                </div>
                <h3 className="font-extrabold text-slate-900 text-lg">
                  Elige tu Producto
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Explora el catálogo del Programa Warmi. Cada prenda y accesorio incluye su precio transparente en Soles (S/.) y su impacto social concreto.
                </p>
              </div>
              <div className="pt-2 text-[11px] font-semibold text-amber-800 flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Modelos únicos y artesanales</span>
              </div>
            </div>

            {/* Paso 2 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs relative flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white font-black text-lg flex items-center justify-center shadow-xs">
                  2
                </div>
                <h3 className="font-extrabold text-slate-900 text-lg">
                  Pide por WhatsApp
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Haz clic en el botón verde <strong>Pedir por WhatsApp</strong>. Se abrirá un chat directo con nuestro equipo para confirmar detalles, colores y disponibilidad.
                </p>
              </div>
              <div className="pt-2 text-[11px] font-semibold text-emerald-800 flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Atención personalizada al {WHATSAPP_DISPLAY}</span>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs relative flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white font-black text-lg flex items-center justify-center shadow-xs">
                  3
                </div>
                <h3 className="font-extrabold text-slate-900 text-lg">
                  Coordina Entrega y Pago
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Paga fácilmente mediante transferencia o depósito bancario. Coordinamos recojo en Arequipa o despacho a todo el Perú por Shalom / Olva Courier.
                </p>
              </div>
              <div className="pt-2 text-[11px] font-semibold text-blue-800 flex items-center gap-1">
                <Truck className="w-4 h-4 text-blue-600" />
                <span>Envíos a todo el territorio nacional</span>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 4. CUADRÍCULA MODERNA DE PRODUCTOS DEL PROGRAMA WARMI        */}
        {/* ============================================================ */}
        <div id="catalogo" className="scroll-mt-24 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                Colección Exclusiva Hecha a Mano
              </span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-1">
                Catálogo Solidario de Mollebaya
              </h2>
            </div>

            {/* Pestañas de filtrado */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: 'todos', label: 'Todos los Productos' },
                { id: 'reciclado', label: 'Telas Recicladas & Upcycling' },
                { id: 'tejidos', label: 'Tejido a Mano' },
                { id: 'hogar', label: 'Hogar & Decoración' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    activeCategory === cat.id
                      ? 'bg-[#FFB800] text-slate-950 shadow-sm ring-2 ring-[#FFB800]/50'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid de Productos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 hover:border-amber-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Imagen nítida */}
                  <div className="relative h-60 overflow-hidden bg-slate-100">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Precio en Soles destacado */}
                    <div className="absolute top-3 right-3 bg-white font-black text-slate-950 px-3.5 py-1.5 rounded-xl shadow-md text-sm border border-slate-100">
                      S/. {prod.price}.00
                    </div>

                    {/* Badge de material reciclado */}
                    <div className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-xs text-[#FFB800] font-bold text-[11px] px-2.5 py-1 rounded-lg flex items-center gap-1.5">
                      <Recycle className="w-3.5 h-3.5" />
                      <span>{prod.categoryLabel}</span>
                    </div>
                  </div>

                  {/* Información del producto */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-extrabold text-amber-800 bg-amber-50 px-2 py-0.5 rounded">
                        {prod.artisan}
                      </span>
                      <span className="text-slate-400 font-medium">Hecho en Mollebaya</span>
                    </div>

                    <h3 className="text-base font-extrabold text-slate-900 group-hover:text-amber-700 transition leading-snug">
                      {prod.name}
                    </h3>

                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
                      {prod.description}
                    </p>

                    {/* Detalle del material reciclado */}
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1 text-[11px] text-slate-600">
                      <strong className="text-slate-800 font-semibold block">Materiales:</strong>
                      <p className="line-clamp-2">{prod.material}</p>
                    </div>

                    {/* Impacto social */}
                    <div className="p-2.5 rounded-xl bg-amber-50/70 border border-amber-200/60 flex items-start gap-1.5 text-[11px] text-amber-950">
                      <Sparkles className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                      <span><strong>Impacto:</strong> {prod.impact}</span>
                    </div>
                  </div>
                </div>

                {/* BOTÓN VERDE DIRECTO: PEDIR POR WHATSAPP (api.whatsapp.com) */}
                <div className="p-5 pt-0">
                  <a
                    href={getWhatsAppOrderUrl(prod)}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3.5 px-4 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition active:scale-98 text-sm"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                    <span>Pedir por WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================ */}
        {/* 5. BLOQUE DE PEDIDOS PERSONALIZADOS & CONTACTO CORPORATIVO    */}
        {/* ============================================================ */}
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 bg-amber-400/20 text-[#FFB800] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-amber-400/30">
                <PackageCheck className="w-4 h-4" />
                <span>Pedidos Institucionales y Souvenirs</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                ¿Buscas regalos corporativos o pedidos en cantidad?
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
                Las madres artesanas de Warmi confeccionan bolsas ecológicas personalizadas, estuches con bordado institucional y regalos corporativos solidarios para empresas, congresos e instituciones aliadas.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href={`https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(
                  '¡Hola equipo Intiwawa! Quisiera consultar sobre pedidos personalizados / corporativos de la Tienda Solidaria de Warmi.'
                )}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 px-6 rounded-2xl bg-[#FFB800] hover:bg-[#e5a500] text-slate-950 font-black text-sm text-center shadow-md transition flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Cotizar Pedido Corporativo</span>
              </a>

              <p className="text-[11px] text-slate-400 text-center">
                Atención directa con la coordinación del Programa Warmi
              </p>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 6. NAVEGACIÓN Y CIERRE COMPLEMENTARIO                        */}
        {/* ============================================================ */}
        <div className="text-center pt-4 pb-2 border-t border-slate-200">
          <p className="text-sm text-slate-600">
            ¿Deseas apoyar a Intiwawa además de tu compra?{' '}
            <button
              onClick={() => navigateTo('donar')}
              className="font-bold text-amber-800 hover:text-amber-950 underline underline-offset-4 transition inline-flex items-center gap-1"
            >
              <span>Conoce nuestros canales de donación oficial</span>
              <ArrowRight className="w-3.5 h-3.5 inline" />
            </button>
          </p>
        </div>

      </div>

      {/* Botón flotante directo de WhatsApp */}
      <a
        href={`https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(
          '¡Hola Intiwawa! Deseo consultar sobre el catálogo y hacer un pedido de la Tienda Solidaria (Programa Warmi).'
        )}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 sm:p-4 rounded-full shadow-2xl shadow-emerald-950/40 flex items-center gap-3 group transition-all duration-300 hover:scale-105 hover:pr-5 border-2 border-white cursor-pointer"
        aria-label="Atención y compras por WhatsApp"
      >
        <div className="relative flex items-center justify-center">
          <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-300 rounded-full animate-ping"></span>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-300 rounded-full"></span>
        </div>
        <span className="font-bold text-sm max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300">
          Atención Tienda WhatsApp
        </span>
      </a>
    </div>
  )
}
