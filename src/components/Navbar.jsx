import { useState, useEffect, useRef } from 'react'
import {
  Sun,
  Heart,
  MessageCircle,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ArrowRight
} from 'lucide-react'

export default function Navbar({ activeTab, navigateTo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState(null)

  const navContainerRef = useRef(null)
  const timeoutRef = useRef(null)

  const WHATSAPP_NUMBER = '51923221762'
  const WHATSAPP_DISPLAY = '+51 923 221 762'

  // Configuración oficial de enlaces acordada con Intiwawa
  const navLinks = [
    {
      id: 'home',
      label: 'Inicio',
      hasDropdown: true,
      subHeader: 'Secciones de Portada',
      subItems: [
        {
          label: 'Quiénes somos',
          sectionId: 'quienes-somos',
          desc: 'Nuestra presencia y labor comunitaria en Mollebaya',
        },
        {
          label: 'Cómo lo hacemos',
          sectionId: 'como-lo-hacemos',
          desc: 'Nuestros 3 pilares: Yachay, Kusikallpa y Warmi',
        },
        {
          label: 'Nuestros aliados',
          sectionId: 'nuestros-aliados',
          desc: 'Organizaciones que impulsan nuestra causa',
        },
      ],
    },
    {
      id: 'nosotros',
      label: 'Sobre nosotros',
      hasDropdown: true,
      subHeader: 'Nuestra Organización',
      subItems: [
        {
          label: 'Nuestra Historia',
          sectionId: 'nuestra-historia',
          desc: 'Trayectoria y vocación comunitaria en Mollebaya',
        },
        {
          label: 'Misión y Visión',
          sectionId: 'mision-vision',
          desc: 'Propósito integral y horizonte de cambio',
        },
        {
          label: 'Comunidad Mollebaya',
          sectionId: 'comunidad-mollebaya',
          desc: 'Arraigo territorial y realidad en terreno',
        },
      ],
    },
    {
      id: 'proyectos',
      label: 'Nuestros proyectos',
      hasDropdown: true,
      subHeader: 'Programas en Terreno',
      subItems: [
        {
          label: 'Educación - Yachay',
          sectionId: 'proyectos-yachay',
          desc: 'Refuerzo escolar y ludoteca activa',
        },
        {
          label: 'Talleres Productivos - Warmi',
          sectionId: 'proyectos-warmi',
          desc: 'Tejido artesanal y autonomía de madres',
        },
        {
          label: 'Salud y Nutrición - Kusikallpa',
          sectionId: 'proyectos-kusikallpa',
          desc: 'Comedor Wawa Munay y controles médicos',
        },
        {
          label: 'Invernadero y Huerto',
          sectionId: 'proyectos-huerto',
          desc: 'Cultivo orgánico y sostenibilidad ecológica',
        },
      ],
    },
    {
      id: 'involucrarse',
      label: 'Involucrarse',
      hasDropdown: true,
      subHeader: 'Súmate a la Causa',
      subItems: [
        {
          label: 'Voluntariado Internacional',
          sectionId: 'voluntariado-internacional',
          desc: 'Presencial en Mollebaya o remoto profesional',
        },
        {
          label: 'Empresas e Instituciones',
          sectionId: 'empresas-instituciones',
          desc: 'Convenios de RSE, alianzas y donaciones',
        },
        {
          label: 'Convocatorias Abiertas',
          sectionId: 'convocatorias-abiertas',
          desc: 'Formulario de postulación de talentos',
        },
        {
          label: 'Contacto Directo',
          sectionId: 'contacto-directo',
          desc: 'Canal oficial de WhatsApp y atención directa',
        },
      ],
    },
    {
      id: 'tienda',
      label: 'Tienda',
      hasDropdown: true,
      subHeader: 'Tienda Solidaria Warmi',
      subItems: [
        {
          label: 'Impacto de tu compra',
          sectionId: 'impacto-compra',
          desc: '20 mamitas y 100% financiamiento directo a familias',
        },
        {
          label: 'Catálogo',
          sectionId: 'catalogo',
          desc: 'Artesanías textiles y productos con telas recicladas',
        },
        {
          label: 'Cómo comprar en la tienda solidaria',
          sectionId: 'como-comprar',
          desc: 'Guía simple en 3 pasos y pedidos directos por WhatsApp',
        },
      ],
    },
  ]

  // Cierre de dropdown al hacer clic fuera o presionar Escape
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navContainerRef.current && !navContainerRef.current.contains(e.target)) {
        setOpenDropdown(null)
      }
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setOpenDropdown(null)
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  // Gestión de eventos Hover en Desktop con retardo para evitar parpadeos
  const handleMouseEnter = (itemId) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpenDropdown(itemId)
  }

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 200)
  }

  // Navegación a vista principal
  const handleNavigate = (tab) => {
    navigateTo(tab)
    setOpenDropdown(null)
    setMobileMenuOpen(false)
  }

  // Clic en enlace principal: si tiene subitems y está abierto navega; si no, abre el menú
  const handleNavLinkClick = (item) => {
    if (!item.subItems || item.subItems.length === 0) {
      handleNavigate(item.id)
      return
    }
    if (openDropdown === item.id) {
      handleNavigate(item.id)
    } else {
      setOpenDropdown(item.id)
    }
  }

  // Clic directo en el Chevron: alternar dropdown
  const handleChevronClick = (itemId, e) => {
    e.stopPropagation()
    setOpenDropdown((prev) => (prev === itemId ? null : itemId))
  }

  // Navegación a subelemento: cambia pestaña y ejecuta scrollIntoView con reintentos
  const handleSubItemClick = (tabId, sectionId) => {
    navigateTo(tabId, sectionId)
    setOpenDropdown(null)
    setMobileMenuOpen(false)

    const scrollToTarget = (attempts = 0) => {
      const el = document.getElementById(sectionId)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else if (attempts < 8) {
        setTimeout(() => scrollToTarget(attempts + 1), 60)
      }
    }

    setTimeout(scrollToTarget, activeTab !== tabId ? 100 : 20)
  }

  return (
    <>
      {/* Barra superior de anuncio y contacto */}
      <div className="bg-slate-900 text-white text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#FFB800] animate-pulse"></span>
            <span className="text-slate-200">
              Transformando vidas infantiles en <strong className="text-white">Mollebaya, Arequipa</strong> desde el corazón
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-300 font-medium">
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
              className="text-[#FFB800] hover:underline font-bold flex items-center gap-1"
            >
              <Heart className="w-3.5 h-3.5 fill-[#FFB800]" />
              <span>Dona aquí</span>
            </button>
          </div>
        </div>
      </div>

      {/* Header Principal y Navegación */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logotipo Intiwawa con acento amarillo #FFB800 */}
            <div
              onClick={() => handleNavigate('home')}
              className="cursor-pointer flex items-center gap-3 group select-none"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#FFB800] flex items-center justify-center shadow-md shadow-amber-200/60 group-hover:scale-105 transition-transform">
                <Sun className="w-7 h-7 text-slate-950 fill-slate-950" />
              </div>
              <div>
                <span className="text-2xl font-black tracking-tight text-slate-900">
                  INTI<span className="text-[#FFB800]">WAWA</span>
                </span>
                <p className="text-[11px] font-bold tracking-wider text-slate-500 uppercase">
                  Mollebaya · Arequipa · ONG
                </p>
              </div>
            </div>

            {/* Menú de Escritorio con enlaces en orden acordado */}
            <nav ref={navContainerRef} className="hidden md:flex items-center gap-1">
              {navLinks.map((item) => {
                const hasDropdown = Boolean(item.hasDropdown && item.subItems?.length)
                const isOpen = openDropdown === item.id
                const isActive = activeTab === item.id

                // Enlaces directos limpios (Inicio y Tienda)
                if (!hasDropdown) {
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavigate(item.id)}
                      className={`px-3.5 py-2 rounded-xl text-sm font-bold transition-all duration-200 select-none ${
                        isActive
                          ? 'bg-[#FFB800]/25 text-slate-950 border-b-2 border-[#FFB800]'
                          : 'text-slate-700 hover:text-slate-950 hover:bg-amber-50/80'
                      }`}
                    >
                      {item.label}
                    </button>
                  )
                }

                // Menús desplegables (Sobre nosotros, Nuestros proyectos, Involucrarse)
                return (
                  <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      onClick={() => handleNavLinkClick(item)}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      className={`px-3.5 py-2 rounded-xl text-sm font-bold transition-all duration-200 flex items-center gap-1.5 group select-none ${
                        isActive
                          ? 'bg-[#FFB800]/25 text-slate-950 border-b-2 border-[#FFB800]'
                          : isOpen
                          ? 'bg-amber-50 text-slate-950'
                          : 'text-slate-700 hover:text-slate-950 hover:bg-amber-50/80'
                      }`}
                    >
                      <span>{item.label}</span>
                      <span
                        onClick={(e) => handleChevronClick(item.id, e)}
                        className="p-0.5 rounded hover:bg-amber-200/50 transition-colors"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isOpen
                              ? 'rotate-180 text-amber-800'
                              : 'text-slate-400 group-hover:text-slate-700'
                          }`}
                        />
                      </span>
                    </button>

                    {/* Menú desplegable interactivo Desktop */}
                    {isOpen && (
                      <div
                        className="absolute top-full left-0 mt-1.5 w-72 sm:w-80 bg-white rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-100 p-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                        onMouseEnter={() => handleMouseEnter(item.id)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="px-3 py-2 border-b border-slate-100 flex items-center justify-between">
                          <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-800">
                            {item.subHeader}
                          </span>
                          <button
                            onClick={() => handleNavigate(item.id)}
                            className="text-[11px] font-bold text-slate-500 hover:text-amber-800 transition flex items-center gap-0.5"
                          >
                            <span>Ver todo</span>
                            <ArrowRight className="w-3 h-3 text-[#FFB800]" />
                          </button>
                        </div>

                        <div className="pt-1 space-y-0.5">
                          {item.subItems.map((sub, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleSubItemClick(item.id, sub.sectionId)}
                              className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-amber-50/80 transition-all flex items-center justify-between group"
                            >
                              <div className="space-y-0.5 pr-2">
                                <div className="text-sm font-bold text-slate-800 group-hover:text-slate-950 flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800] opacity-90 group-hover:scale-125 transition-transform shrink-0"></span>
                                  <span>{sub.label}</span>
                                </div>
                                <p className="text-xs text-slate-500 group-hover:text-amber-950/80 transition pl-3.5">
                                  {sub.desc}
                                </p>
                              </div>
                              <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#FFB800] group-hover:translate-x-0.5 transition-all shrink-0" />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}

              {/* Botón Destacado 'Dona Aquí' */}
              <button
                onClick={() => handleNavigate('donar')}
                className={`ml-2 px-5 py-2.5 rounded-xl text-sm font-black flex items-center gap-2 shadow-sm transition-all duration-200 cursor-pointer ${
                  activeTab === 'donar'
                    ? 'bg-[#6D28D9] hover:bg-[#5B21B6] text-white ring-2 ring-[#FFB800]'
                    : 'bg-[#FFB800] hover:bg-[#e5a500] text-slate-950 hover:shadow-md'
                }`}
              >
                <Heart
                  className={`w-4 h-4 ${
                    activeTab === 'donar' ? 'fill-white text-white' : 'fill-rose-600 text-rose-600'
                  }`}
                />
                <span>Dona Aquí</span>
              </button>
            </nav>

            {/* Botón Hamburguesa Móvil */}
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

        {/* Menú desplegable Móvil Interactivo */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg max-h-[calc(100vh-6rem)] overflow-y-auto">
            {navLinks.map((item) => {
              const hasDropdown = Boolean(item.hasDropdown && item.subItems?.length)
              const isExpanded = mobileExpanded === item.id
              const isActive = activeTab === item.id

              // Enlaces directos en móvil (Inicio y Tienda)
              if (!hasDropdown) {
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavigate(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl font-bold text-base transition flex items-center justify-between border ${
                      isActive
                        ? 'bg-[#FFB800]/25 text-slate-950 border-[#FFB800]/50'
                        : 'text-slate-800 hover:bg-slate-50 border-transparent'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </button>
                )
              }

              // Menús desplegables en móvil con acordeón
              return (
                <div key={item.id} className="rounded-xl overflow-hidden border border-slate-100">
                  <div
                    className={`flex items-center justify-between px-4 py-3 cursor-pointer transition ${
                      isActive
                        ? 'bg-[#FFB800]/25 text-slate-950 font-bold'
                        : isExpanded
                        ? 'bg-slate-50 text-slate-900'
                        : 'text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    <button
                      onClick={() => handleNavigate(item.id)}
                      className="flex-1 text-left font-bold text-base text-slate-900"
                    >
                      {item.label}
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setMobileExpanded(isExpanded ? null : item.id)
                      }}
                      className="p-1 rounded-lg text-slate-500 hover:bg-slate-200/60 transition"
                      aria-label={`Desplegar opciones de ${item.label}`}
                    >
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180 text-amber-700' : ''
                        }`}
                      />
                    </button>
                  </div>

                  {/* Submenú Móvil */}
                  {isExpanded && (
                    <div className="bg-amber-50/40 px-3 py-2 space-y-1 border-t border-slate-100">
                      <div className="px-2 py-1 flex items-center justify-between text-xs text-amber-900 font-extrabold uppercase tracking-wider">
                        <span>{item.subHeader}</span>
                        <button
                          onClick={() => handleNavigate(item.id)}
                          className="font-bold underline text-amber-800"
                        >
                          Ir a sección principal &rarr;
                        </button>
                      </div>

                      {item.subItems.map((sub, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSubItemClick(item.id, sub.sectionId)}
                          className="w-full text-left px-3 py-2.5 rounded-lg bg-white/90 hover:bg-white text-slate-800 text-sm font-bold flex items-center justify-between transition shadow-2xs"
                        >
                          <div>
                            <div className="flex items-center gap-1.5 text-slate-900">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800]"></span>
                              <span>{sub.label}</span>
                            </div>
                            <span className="text-xs text-slate-500 font-normal pl-3 block mt-0.5">
                              {sub.desc}
                            </span>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}

            {/* Botón Dona Aquí en móvil */}
            <div className="pt-2">
              <button
                onClick={() => handleNavigate('donar')}
                className={`w-full text-left px-4 py-3.5 rounded-xl text-base font-black flex items-center justify-between transition shadow-sm ${
                  activeTab === 'donar'
                    ? 'bg-[#6D28D9] hover:bg-[#5B21B6] text-white ring-2 ring-[#FFB800]'
                    : 'bg-[#FFB800] text-slate-950 hover:bg-[#e5a500]'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Heart
                    className={`w-4 h-4 ${
                      activeTab === 'donar' ? 'fill-white text-white' : 'fill-rose-600 text-rose-600'
                    }`}
                  />
                  <span>Dona Aquí</span>
                </span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
