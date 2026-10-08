import { useState } from 'react'
import {
  Heart,
  ShoppingBag,
  MessageCircle,
  ShieldCheck,
  HandHeart,
  Play,
  ChevronLeft,
  ChevronRight,
  X,
  Check,
  Sparkles,
  PackageCheck
} from 'lucide-react'

export default function Tienda() {
  const WHATSAPP_NUMBER = '51923221762'
  const WHATSAPP_DISPLAY = '+51 923 221 762'

  // Estado del catálogo
  const [storeFilter, setStoreFilter] = useState('todos')
  const [selectedProduct, setSelectedProduct] = useState(null) // Para el modal
  const [modalColor, setModalColor] = useState('')
  const [modalQuantity, setModalQuantity] = useState(1)

  // Estado del Carrusel de Videos
  const [currentVideoIdx, setCurrentVideoIdx] = useState(0)
  const [isPlayingVideo, setIsPlayingVideo] = useState(false)

  const videos = [
    {
      id: 1,
      title: 'Madres Tejedoras de Mollebaya: El arte del telar andino',
      desc: 'Conoce cómo las madres de familia de Mollebaya rescatan técnicas ancestrales de tejido en alpaca y algodón para generar ingresos dignos para sus hogares.',
      duration: '2:14 min',
      author: 'Taller Productivo Intiwawa',
      poster: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
    },
    {
      id: 2,
      title: 'Taller de Cerámica y Arte Creativo con los Wawas',
      desc: 'Nuestros niños plasman los paisajes, animales y volcanes de Arequipa en tazas y piezas de arcilla elaboradas en la ludoteca comunitaria.',
      duration: '1:45 min',
      author: 'Ludoteca Mollebaya',
      poster: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
    },
    {
      id: 3,
      title: 'De la Tienda al Comedor: El impacto real de tu compra',
      desc: 'Cada producto artesanal adquirido se transforma en platos de comida nutritiva, útiles escolares y salud médica preventiva en Mollebaya.',
      duration: '2:30 min',
      author: 'Comedor Wawa Munay',
      poster: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4'
    }
  ]

  const nextVideo = () => {
    setIsPlayingVideo(false)
    setCurrentVideoIdx((prev) => (prev + 1) % videos.length)
  }

  const prevVideo = () => {
    setIsPlayingVideo(false)
    setCurrentVideoIdx((prev) => (prev - 1 + videos.length) % videos.length)
  }

  // Catálogo artesanal de productos
  const products = [
    {
      id: 1,
      name: 'Bolsa Ecológica "Sol de Mollebaya"',
      category: 'accesorios',
      categoryName: 'Accesorios Ecológicos',
      price: 25,
      stock: 18,
      colors: [
        { name: 'Crudo Natural', hex: '#F5F5DC' },
        { name: 'Mostaza Inti', hex: '#FFB800' },
        { name: 'Terracota Valle', hex: '#C2593F' }
      ],
      desc: 'Tote bag 100% de algodón orgánico con asas reforzadas, serigrafiada a mano con motivos de la flora campestre de Mollebaya.',
      impact: 'Financia 3 días de desayunos nutritivos completos para un preescolar.',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 2,
      name: 'Chullo Tradicional de Alpaca Baby',
      category: 'artesania',
      categoryName: 'Artesanías Textiles',
      price: 55,
      stock: 8,
      colors: [
        { name: 'Tierra Andina', hex: '#8B5A2B' },
        { name: 'Gris Ceniza Misti', hex: '#708090' },
        { name: 'Rojo Carmín', hex: '#991B1B' }
      ],
      desc: 'Tejido térmico tradicional de altísima suavidad, elaborado con palitos por madres artesanas de la comunidad de Mollebaya.',
      impact: 'Financia materiales didácticos y libros para el taller de lectura.',
      image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 3,
      name: 'Pulseras Andinas Tejidas a Mano (Pack x3)',
      category: 'artesania',
      categoryName: 'Artesanías Textiles',
      price: 20,
      stock: 25,
      colors: [
        { name: 'Multicolor Andino', hex: '#E11D48' },
        { name: 'Tonos Cálidos Sol', hex: '#D97706' },
        { name: 'Azul Campiña', hex: '#2563EB' }
      ],
      desc: 'Elaboradas con hilos de algodón mercerizado en técnicas de macramé y nudo andino por el taller de madres emprendedoras.',
      impact: 'Apoya el ingreso económico directo y autónomo de las familias locales.',
      image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 4,
      name: 'Polo Solidario Intiwawa Oficial',
      category: 'ropa',
      categoryName: 'Ropa Oficial',
      price: 45,
      stock: 14,
      colors: [
        { name: 'Blanco Sillar', hex: '#FFFFFF' },
        { name: 'Negro Carbón', hex: '#1E293B' },
        { name: 'Amarillo Inti', hex: '#FFB800' }
      ],
      desc: 'Polo unisex confeccionado en algodón pima peruano de fibra larga, suave, fresco y con el emblema de Intiwawa bordado en el pecho.',
      impact: 'Cubre el paquete escolar bimestral completo de una niña o niño.',
      image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 5,
      name: 'Taza Cerámica "Wawa Sonrisas"',
      category: 'accesorios',
      categoryName: 'Cerámica y Vajilla',
      price: 30,
      stock: 12,
      colors: [
        { name: 'Blanco Esmaltado', hex: '#F8FAFC' },
        { name: 'Barro Natural', hex: '#A2583E' }
      ],
      desc: 'Taza esmaltada horneada a alta temperatura con ilustraciones originales inspiradas en los dibujos de los niños del taller de arte.',
      impact: 'Financia insumos de pintura, témperas y pinceles para 3 niños.',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 6,
      name: 'Cuaderno Ecológico y Lapicero de Semilla',
      category: 'accesorios',
      categoryName: 'Papelería Sostenible',
      price: 22,
      stock: 30,
      colors: [
        { name: 'Kraft Reciclado', hex: '#C4A482' }
      ],
      desc: 'Libreta de 100 hojas de caña de azúcar con espiral biodegradable y lapicero con cápsula de semillas andinas para plantar al terminar.',
      impact: 'Aporta abono e insumos orgánicos para el huerto pedagógico.',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 7,
      name: 'Chalina Andina de Alpaca Fina',
      category: 'artesania',
      categoryName: 'Artesanías Textiles',
      price: 65,
      stock: 6,
      colors: [
        { name: 'Vicuña Natural', hex: '#B87333' },
        { name: 'Azul Añil', hex: '#1E3A8A' },
        { name: 'Perla Andina', hex: '#E5E7EB' }
      ],
      desc: 'Bufanda artesanal tejida en telar tradicional con acabado de flecos a mano, suave, abrigadora y de gran elegancia.',
      impact: 'Financia 1 semana de refuerzo escolar y meriendas para un estudiante.',
      image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 8,
      name: 'Muñeco de Trapo Tradicional "Wawita"',
      category: 'artesania',
      categoryName: 'Artesanías Textiles',
      price: 35,
      stock: 10,
      colors: [
        { name: 'Traje Típico Mollebaya', hex: '#DC2626' },
        { name: 'Traje Festivo Arequipa', hex: '#2563EB' }
      ],
      desc: 'Muñecos artesanales rellenos de fibra suave con trajes típicos cosidos y bordados con paciencia y cariño por las madres de la comunidad.',
      impact: 'Financia una consulta pediátrica y kit de flúor para el cuidado dental.',
      image: 'https://images.unsplash.com/photo-1558877385-81a1c7e67d72?auto=format&fit=crop&w=600&q=80',
    }
  ]

  const filteredProducts = storeFilter === 'todos'
    ? products
    : products.filter(p => p.category === storeFilter)

  // Abrir modal con producto pre-seleccionado
  const handleOpenModal = (product) => {
    setSelectedProduct(product)
    setModalColor(product.colors[0]?.name || 'Estándar')
    setModalQuantity(1)
  }

  const handleCloseModal = () => {
    setSelectedProduct(null)
  }

  // Generar link de WhatsApp dinámico para el modal
  const generateWhatsAppOrderLink = () => {
    if (!selectedProduct) return '#'
    const totalPrice = selectedProduct.price * modalQuantity
    const message = `¡Hola Intiwawa! Deseo adquirir en la Tienda Solidaria:
- Producto: "${selectedProduct.name}"
- Color: ${modalColor}
- Cantidad: ${modalQuantity} unidad(es)
- Total a pagar: S/ ${totalPrice}.00

¿Cómo podemos coordinar el pago por Yape y la entrega o envío en Arequipa / a nivel nacional? ¡Muchas gracias!`

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
  }

  return (
    <div className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Encabezado Principal */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="bg-[#FFB800]/30 text-amber-950 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            Compras con Sentido Social
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Tienda Solidaria Intiwawa
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Cada artesanía, prenda y accesorio es elaborado por madres de familia y talleres comunitarios en Mollebaya.
            <strong> El 100% de los beneficios</strong> financia directamente el comedor infantil y las clases de refuerzo.
          </p>
        </div>

        {/* CARRUSEL DE VIDEO: HISTORIAS DE NUESTRAS ARTESANAS */}
        <section className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-400/20 text-white">
          <div className="p-6 sm:p-8 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></span>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                Historias Detrás de Cada Creación
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={prevVideo}
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition"
                aria-label="Video anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-xs font-semibold text-slate-400 px-2">
                {currentVideoIdx + 1} / {videos.length}
              </span>
              <button
                onClick={nextVideo}
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition"
                aria-label="Siguiente video"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
            {/* Reproductor / Visor del video */}
            <div className="lg:col-span-7 relative bg-black aspect-video flex items-center justify-center overflow-hidden">
              {isPlayingVideo ? (
                <video
                  src={videos[currentVideoIdx].videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                >
                  Tu navegador no soporta videos HTML5.
                </video>
              ) : (
                <div className="relative w-full h-full group cursor-pointer" onClick={() => setIsPlayingVideo(true)}>
                  <img
                    src={videos[currentVideoIdx].poster}
                    alt={videos[currentVideoIdx].title}
                    className="w-full h-full object-cover opacity-75 group-hover:opacity-90 group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-center justify-center">
                    <button
                      className="w-20 h-20 rounded-full bg-[#FFB800] text-slate-950 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300"
                      aria-label="Reproducir video"
                    >
                      <Play className="w-8 h-8 fill-slate-950 ml-1" />
                    </button>
                  </div>
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20">
                    Duración: {videos[currentVideoIdx].duration}
                  </div>
                </div>
              )}
            </div>

            {/* Ficha descriptiva del video actual */}
            <div className="lg:col-span-5 p-8 sm:p-10 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                {videos[currentVideoIdx].author}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold leading-snug">
                {videos[currentVideoIdx].title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {videos[currentVideoIdx].desc}
              </p>

              {/* Selector interactivo de miniaturas */}
              <div className="pt-4 border-t border-slate-800 space-y-2">
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block">
                  Otros episodios del taller:
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {videos.map((vid, i) => (
                    <button
                      key={vid.id}
                      onClick={() => {
                        setIsPlayingVideo(false)
                        setCurrentVideoIdx(i)
                      }}
                      className={`text-left p-2 rounded-xl text-[11px] font-medium border transition-all truncate ${
                        currentVideoIdx === i
                          ? 'border-[#FFB800] bg-amber-400/20 text-[#FFB800]'
                          : 'border-slate-800 bg-slate-800/60 text-slate-400 hover:text-white'
                      }`}
                    >
                      Episodio {i + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CATÁLOGO ARTESANAL */}
        <section className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
                Catálogo Hecho a Mano
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-1">
                Productos Artesanales de Mollebaya
              </h2>
            </div>

            {/* Filtros de la tienda */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: 'todos', label: 'Todos' },
                { id: 'artesania', label: 'Artesanías y Alpaca' },
                { id: 'ropa', label: 'Ropa Oficial' },
                { id: 'accesorios', label: 'Accesorios y Cerámica' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setStoreFilter(cat.id)}
                  className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                    storeFilter === cat.id
                      ? 'bg-[#FFB800] text-slate-950 shadow-sm'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid de Productos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-56 overflow-hidden bg-slate-100">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-white font-extrabold text-slate-900 px-3 py-1.5 rounded-xl shadow-md text-sm border border-slate-100">
                      S/ {prod.price}.00
                    </div>
                    <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-sm text-amber-300 font-semibold text-[11px] px-2.5 py-1 rounded-lg">
                      Stock: {prod.stock} unids.
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                      {prod.categoryName}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-600 transition line-clamp-1">
                      {prod.name}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
                      {prod.desc}
                    </p>

                    {/* Variantes de color en tarjeta */}
                    <div className="flex items-center gap-1.5 pt-1">
                      <span className="text-[11px] text-slate-400 font-medium mr-1">Colores:</span>
                      {prod.colors.map((c, i) => (
                        <span
                          key={i}
                          title={c.name}
                          className="w-3.5 h-3.5 rounded-full border border-slate-300 shadow-xs inline-block"
                          style={{ backgroundColor: c.hex }}
                        />
                      ))}
                    </div>

                    {/* Impacto */}
                    <div className="p-2.5 rounded-xl bg-amber-50/70 border border-amber-200/60 flex items-start gap-1.5 text-[11px] text-amber-950">
                      <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 shrink-0 mt-0.5" />
                      <span className="line-clamp-2"><strong>Impacto:</strong> {prod.impact}</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => handleOpenModal(prod)}
                    className="w-full py-3 px-4 rounded-xl bg-[#FFB800] hover:bg-[#e5a500] text-slate-950 font-bold flex items-center justify-center gap-2 shadow-sm hover:shadow transition text-sm"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Ver y Comprar (WhatsApp)</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MODAL DE STOCK / COLOR / WHATSAPP */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 relative max-h-[90vh] flex flex-col">
              {/* Botón de Cierre */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-slate-100 text-slate-600 hover:text-slate-900 shadow-md transition"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                  <div className="sm:col-span-5 relative rounded-2xl overflow-hidden aspect-square bg-slate-100 border border-slate-200">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-[#FFB800] text-slate-950 text-xs font-black px-2.5 py-1 rounded-lg shadow">
                      S/ {selectedProduct.price}.00
                    </div>
                  </div>

                  <div className="sm:col-span-7 space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md">
                      {selectedProduct.categoryName}
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 leading-tight">
                      {selectedProduct.name}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {selectedProduct.desc}
                    </p>

                    {/* Badge de Stock en tiempo real */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-bold">
                      <PackageCheck className="w-4 h-4 text-emerald-600" />
                      <span>¡En stock: {selectedProduct.stock} unidades en taller Mollebaya!</span>
                    </div>
                  </div>
                </div>

                {/* SELECTOR DE COLOR */}
                <div className="space-y-3 pt-4 border-t border-slate-200">
                  <div className="flex items-center justify-between text-xs">
                    <label className="font-bold uppercase tracking-wider text-slate-700">
                      Selecciona un Color o Variante:
                    </label>
                    <span className="text-amber-800 font-bold">{modalColor}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {selectedProduct.colors.map((color, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setModalColor(color.name)}
                        className={`p-3 rounded-xl border flex items-center gap-2.5 text-xs font-bold transition-all ${
                          modalColor === color.name
                            ? 'border-[#FFB800] bg-[#FFB800]/15 text-slate-950 ring-2 ring-[#FFB800]'
                            : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <span
                          className="w-4 h-4 rounded-full border border-slate-400 shrink-0"
                          style={{ backgroundColor: color.hex }}
                        />
                        <span className="truncate">{color.name}</span>
                        {modalColor === color.name && (
                          <Check className="w-3.5 h-3.5 text-amber-700 ml-auto shrink-0" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* SELECTOR DE CANTIDAD Y TOTAL */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center pt-4 border-t border-slate-200">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Cantidad deseada:
                    </label>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setModalQuantity((q) => Math.max(1, q - 1))}
                        disabled={modalQuantity <= 1}
                        className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold flex items-center justify-center disabled:opacity-40"
                      >
                        -
                      </button>
                      <span className="text-lg font-black text-slate-900 w-8 text-center">
                        {modalQuantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => setModalQuantity((q) => Math.min(selectedProduct.stock, q + 1))}
                        disabled={modalQuantity >= selectedProduct.stock}
                        className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold flex items-center justify-center disabled:opacity-40"
                      >
                        +
                      </button>
                      <span className="text-xs text-slate-500">
                        (Máx. {selectedProduct.stock})
                      </span>
                    </div>
                  </div>

                  <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200/80 text-right">
                    <span className="text-xs text-amber-900 font-semibold block">Total a pagar:</span>
                    <span className="text-2xl font-black text-slate-900">
                      S/ {selectedProduct.price * modalQuantity}.00
                    </span>
                  </div>
                </div>

                {/* IMPACTO SOCIAL DE LA COMPRA */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs text-slate-700">
                  <Sparkles className="w-5 h-5 text-[#FFB800] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Impacto Social Directo: </strong>
                    {selectedProduct.impact} Tu compra apoya de forma directa a las artesanas de Mollebaya.
                  </div>
                </div>

                {/* BOTÓN DIRECTO DE WHATSAPP */}
                <div className="pt-2">
                  <a
                    href={generateWhatsAppOrderLink()}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold flex items-center justify-center gap-3 shadow-lg shadow-emerald-600/30 hover:shadow-xl transition text-base"
                  >
                    <MessageCircle className="w-6 h-6" />
                    <span>Confirmar Pedido por WhatsApp ({WHATSAPP_DISPLAY})</span>
                  </a>
                  <p className="text-center text-xs text-slate-500 mt-2">
                    Te atenderemos personalmente para acordar el recojo en Arequipa o el envío a domicilio por courier.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Garantías y envíos */}
        <div className="bg-slate-100 rounded-3xl p-8 border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="space-y-2">
            <ShieldCheck className="w-8 h-8 text-amber-600 mx-auto" />
            <h4 className="font-bold text-slate-900">Entrega en Arequipa</h4>
            <p className="text-xs text-slate-600">Entregas en puntos céntricos de la ciudad o recojo directo en nuestra sede en Mollebaya.</p>
          </div>
          <div className="space-y-2">
            <ShoppingBag className="w-8 h-8 text-amber-600 mx-auto" />
            <h4 className="font-bold text-slate-900">Envíos a Todo el Perú</h4>
            <p className="text-xs text-slate-600">Coordinamos despachos seguros por Olva Courier o Shalom con número de seguimiento.</p>
          </div>
          <div className="space-y-2">
            <HandHeart className="w-8 h-8 text-amber-600 mx-auto" />
            <h4 className="font-bold text-slate-900">Impacto 100% Social</h4>
            <p className="text-xs text-slate-600">Cada sol recaudado se reinvierte en la nutrición y educación de los niños de Mollebaya.</p>
          </div>
        </div>
      </div>

      {/* Botón flotante exclusivo de WhatsApp en Tienda */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
          '¡Hola Intiwawa! Deseo consultar sobre el catálogo y hacer un pedido de la Tienda Solidaria.'
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
