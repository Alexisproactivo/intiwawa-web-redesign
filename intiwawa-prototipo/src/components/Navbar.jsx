import { useState } from 'react'
import {
  Sun,
  Heart,
  MessageCircle,
  Menu,
  X,
  ChevronRight
} from 'lucide-react'

export default function Navbar({ activeTab, navigateTo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const WHATSAPP_NUMBER = '51923221762'
  const WHATSAPP_DISPLAY = '+51 923 221 762'

  const navLinks = [
    { id: 'home', label: 'Inicio' },
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'involucrarse', label: 'Involucrarse' },
    { id: 'tienda', label: 'Tienda Solidaria' },
  ]

  const handleNavigate = (tab) => {
    navigateTo(tab)
    setMobileMenuOpen(false)
  }

  return (
    <>
      {/* Barra superior de anuncio y contacto */}
      <div className="bg-slate-900 text-white text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#FFB800] animate-pulse"></span>
            <span>
              Transformando vidas infantiles en <strong>Mollebaya, Arequipa</strong> desde el corazón
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#FFB800] transition flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#FFB800]" />
              <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
            </a>
            <button
              onClick={() => handleNavigate('donar')}
              className="text-[#FFB800] hover:underline font-semibold flex items-center gap-1"
            >
              <Heart className="w-3.5 h-3.5 fill-[#FFB800]" />
              <span>Yapear ahora</span>
            </button>
          </div>
        </div>
      </div>

      {/* Header Principal y Navegación */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logotipo Intiwawa */}
            <div
              onClick={() => handleNavigate('home')}
              className="cursor-pointer flex items-center gap-3 group select-none"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#FFB800] flex items-center justify-center shadow-md shadow-amber-200 group-hover:scale-105 transition-transform">
                <Sun className="w-7 h-7 text-slate-900 fill-slate-900" />
              </div>
              <div>
                <span className="text-2xl font-black tracking-tight text-slate-900">
                  INTI<span className="text-[#FFB800]">WAWA</span>
                </span>
                <p className="text-[11px] font-semibold tracking-wider text-slate-500 uppercase">
                  Mollebaya · Arequipa · ONG
                </p>
              </div>
            </div>

            {/* Menú de Escritorio */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    activeTab === item.id
                      ? 'bg-[#FFB800]/20 text-slate-900 font-bold border-b-2 border-[#FFB800]'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              {/* Botón Dona Aquí */}
              <button
                onClick={() => handleNavigate('donar')}
                className={`ml-2 px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 shadow-sm transition-all duration-200 ${
                  activeTab === 'donar'
                    ? 'bg-slate-900 text-white ring-2 ring-[#FFB800]'
                    : 'bg-[#FFB800] hover:bg-[#e5a500] text-slate-950 hover:shadow-md'
                }`}
              >
                <Heart className="w-4 h-4 fill-current text-rose-600" />
                <span>Dona Aquí</span>
              </button>
            </nav>

            {/* Botón Móvil */}
            <div className="flex md:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
                aria-label="Abrir menú"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Menú desplegable Móvil */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between ${
                  activeTab === item.id
                    ? 'bg-[#FFB800] text-slate-950 font-bold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 opacity-70" />
              </button>
            ))}

            {/* Botón Dona Aquí en móvil */}
            <button
              onClick={() => handleNavigate('donar')}
              className={`w-full text-left px-4 py-3 rounded-xl text-base font-bold flex items-center justify-between transition ${
                activeTab === 'donar'
                  ? 'bg-slate-900 text-[#FFB800]'
                  : 'bg-[#FFB800] text-slate-950'
              }`}
            >
              <span className="flex items-center gap-2">
                <Heart className="w-4 h-4 fill-current text-rose-600" />
                Dona Aquí (Yape)
              </span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </header>
    </>
  )
}
