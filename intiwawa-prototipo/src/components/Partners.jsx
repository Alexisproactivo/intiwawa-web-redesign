export default function Partners() {
  const partners = [
    {
      id: 1,
      name: 'Kinder in Peru e.V.',
      category: 'Cooperación Internacional',
      svg: (
        <svg viewBox="0 0 100 48" className="h-12 max-w-[100px] object-contain grayscale hover:grayscale-0 transition-all duration-300">
          <rect width="100" height="48" rx="8" fill="#F8FAFC" />
          <circle cx="22" cy="24" r="14" fill="#E11D48" />
          <path d="M16 25 Q22 31 28 25" stroke="#FFF" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <circle cx="18" cy="21" r="2" fill="#FFF" />
          <circle cx="26" cy="21" r="2" fill="#FFF" />
          <text x="42" y="22" fontFamily="sans-serif" fontSize="9" fontWeight="800" fill="#0F172A">KINDER</text>
          <text x="42" y="32" fontFamily="sans-serif" fontSize="7.5" fontWeight="600" fill="#E11D48">in Peru e.V.</text>
        </svg>
      )
    },
    {
      id: 2,
      name: 'UNSA Arequipa',
      category: 'Universidad Pública',
      svg: (
        <svg viewBox="0 0 100 48" className="h-12 max-w-[100px] object-contain grayscale hover:grayscale-0 transition-all duration-300">
          <rect width="100" height="48" rx="8" fill="#F8FAFC" />
          <polygon points="22,10 32,28 12,28" fill="#7C2D12" />
          <circle cx="22" cy="22" r="5" fill="#FFB800" />
          <text x="40" y="24" fontFamily="sans-serif" fontSize="13" fontWeight="900" fill="#7C2D12">UNSA</text>
          <text x="40" y="34" fontFamily="sans-serif" fontSize="6.5" fontWeight="700" fill="#64748B">AREQUIPA</text>
        </svg>
      )
    },
    {
      id: 3,
      name: 'Muni. Mollebaya',
      category: 'Gobierno Local',
      svg: (
        <svg viewBox="0 0 100 48" className="h-12 max-w-[100px] object-contain grayscale hover:grayscale-0 transition-all duration-300">
          <rect width="100" height="48" rx="8" fill="#F8FAFC" />
          <path d="M12 28 C16 16, 26 16, 30 28 Z" fill="#047857" />
          <circle cx="21" cy="16" r="4" fill="#FFB800" />
          <text x="36" y="21" fontFamily="sans-serif" fontSize="8" fontWeight="800" fill="#047857">MUNICIPIO</text>
          <text x="36" y="32" fontFamily="sans-serif" fontSize="7.5" fontWeight="700" fill="#1E293B">MOLLEBAYA</text>
        </svg>
      )
    },
    {
      id: 4,
      name: 'UCSM Arequipa',
      category: 'Universidad',
      svg: (
        <svg viewBox="0 0 100 48" className="h-12 max-w-[100px] object-contain grayscale hover:grayscale-0 transition-all duration-300">
          <rect width="100" height="48" rx="8" fill="#F8FAFC" />
          <rect x="12" y="14" width="20" height="20" rx="4" fill="#1E3A8A" />
          <path d="M17 24 L27 24 M22 19 L22 29" stroke="#FFB800" strokeWidth="2.5" />
          <text x="38" y="24" fontFamily="sans-serif" fontSize="12" fontWeight="900" fill="#1E3A8A">UCSM</text>
          <text x="38" y="34" fontFamily="sans-serif" fontSize="6.5" fontWeight="600" fill="#64748B">CATÓLICA</text>
        </svg>
      )
    },
    {
      id: 5,
      name: 'GIZ Cooperación',
      category: 'Cooperación Alemana',
      svg: (
        <svg viewBox="0 0 100 48" className="h-12 max-w-[100px] object-contain grayscale hover:grayscale-0 transition-all duration-300">
          <rect width="100" height="48" rx="8" fill="#F8FAFC" />
          <rect x="12" y="16" width="18" height="16" rx="2" fill="#DC2626" />
          <text x="14" y="28" fontFamily="sans-serif" fontSize="11" fontWeight="900" fill="#FFF">giz</text>
          <text x="36" y="22" fontFamily="sans-serif" fontSize="7.5" fontWeight="800" fill="#DC2626">DEUTSCHE</text>
          <text x="36" y="32" fontFamily="sans-serif" fontSize="6.5" fontWeight="700" fill="#334155">ZUSAMMENARBEIT</text>
        </svg>
      )
    },
    {
      id: 6,
      name: 'Banco de Alimentos',
      category: 'Seguridad Alimentaria',
      svg: (
        <svg viewBox="0 0 100 48" className="h-12 max-w-[100px] object-contain grayscale hover:grayscale-0 transition-all duration-300">
          <rect width="100" height="48" rx="8" fill="#F8FAFC" />
          <path d="M14 28 C14 18, 28 18, 28 28 Z" fill="#F97316" />
          <path d="M21 16 L21 28" stroke="#FFF" strokeWidth="2" />
          <text x="34" y="21" fontFamily="sans-serif" fontSize="8" fontWeight="800" fill="#EA580C">BANCO DE</text>
          <text x="34" y="32" fontFamily="sans-serif" fontSize="7.5" fontWeight="700" fill="#1E293B">ALIMENTOS</text>
        </svg>
      )
    },
    {
      id: 7,
      name: 'Fundación Telefónica',
      category: 'Tecnología Social',
      svg: (
        <svg viewBox="0 0 100 48" className="h-12 max-w-[100px] object-contain grayscale hover:grayscale-0 transition-all duration-300">
          <rect width="100" height="48" rx="8" fill="#F8FAFC" />
          <circle cx="21" cy="24" r="10" fill="#0284C7" />
          <circle cx="21" cy="24" r="5" fill="#FFF" />
          <text x="38" y="21" fontFamily="sans-serif" fontSize="8" fontWeight="800" fill="#0369A1">Fundación</text>
          <text x="38" y="32" fontFamily="sans-serif" fontSize="8" fontWeight="700" fill="#0F172A">Telefónica</text>
        </svg>
      )
    },
    {
      id: 8,
      name: 'Rotary Club',
      category: 'Servicio Comunitario',
      svg: (
        <svg viewBox="0 0 100 48" className="h-12 max-w-[100px] object-contain grayscale hover:grayscale-0 transition-all duration-300">
          <rect width="100" height="48" rx="8" fill="#F8FAFC" />
          <circle cx="22" cy="24" r="12" fill="#D97706" />
          <circle cx="22" cy="24" r="5" fill="#FFF" />
          <text x="40" y="24" fontFamily="sans-serif" fontSize="10" fontWeight="900" fill="#1E3A8A">ROTARY</text>
          <text x="40" y="34" fontFamily="sans-serif" fontSize="6.5" fontWeight="700" fill="#D97706">AREQUIPA</text>
        </svg>
      )
    },
    {
      id: 9,
      name: 'Cruz Roja Peruana',
      category: 'Salud y Emergencia',
      svg: (
        <svg viewBox="0 0 100 48" className="h-12 max-w-[100px] object-contain grayscale hover:grayscale-0 transition-all duration-300">
          <rect width="100" height="48" rx="8" fill="#F8FAFC" />
          <rect x="19" y="16" width="6" height="16" fill="#EF4444" />
          <rect x="14" y="21" width="16" height="6" fill="#EF4444" />
          <text x="36" y="22" fontFamily="sans-serif" fontSize="8" fontWeight="800" fill="#B91C1C">CRUZ ROJA</text>
          <text x="36" y="32" fontFamily="sans-serif" fontSize="7" fontWeight="700" fill="#334155">PERUANA</text>
        </svg>
      )
    },
    {
      id: 10,
      name: 'Alianza Francesa',
      category: 'Cultura y Lengua',
      svg: (
        <svg viewBox="0 0 100 48" className="h-12 max-w-[100px] object-contain grayscale hover:grayscale-0 transition-all duration-300">
          <rect width="100" height="48" rx="8" fill="#F8FAFC" />
          <path d="M14 16 L22 32 L30 16" fill="none" stroke="#2563EB" strokeWidth="3" />
          <line x1="16" y1="26" x2="28" y2="26" stroke="#EF4444" strokeWidth="2.5" />
          <text x="36" y="22" fontFamily="sans-serif" fontSize="8" fontWeight="800" fill="#1E40AF">ALIANZA</text>
          <text x="36" y="32" fontFamily="sans-serif" fontSize="7" fontWeight="700" fill="#475569">FRANCESA</text>
        </svg>
      )
    },
    {
      id: 11,
      name: 'AIESEC Perú',
      category: 'Liderazgo Juvenil',
      svg: (
        <svg viewBox="0 0 100 48" className="h-12 max-w-[100px] object-contain grayscale hover:grayscale-0 transition-all duration-300">
          <rect width="100" height="48" rx="8" fill="#F8FAFC" />
          <circle cx="21" cy="24" r="10" fill="#0284C7" />
          <path d="M16 26 L21 19 L26 26" fill="none" stroke="#FFF" strokeWidth="2.5" />
          <text x="38" y="24" fontFamily="sans-serif" fontSize="11" fontWeight="900" fill="#0284C7">AIESEC</text>
          <text x="38" y="33" fontFamily="sans-serif" fontSize="6.5" fontWeight="600" fill="#64748B">PERÚ</text>
        </svg>
      )
    },
    {
      id: 12,
      name: 'Solaris Perú',
      category: 'Desarrollo Social',
      svg: (
        <svg viewBox="0 0 100 48" className="h-12 max-w-[100px] object-contain grayscale hover:grayscale-0 transition-all duration-300">
          <rect width="100" height="48" rx="8" fill="#F8FAFC" />
          <circle cx="20" cy="24" r="8" fill="#EAB308" />
          <path d="M12 24 L28 24 M20 16 L20 32" stroke="#CA8A04" strokeWidth="2" />
          <text x="36" y="23" fontFamily="sans-serif" fontSize="10" fontWeight="900" fill="#B45309">SOLARIS</text>
          <text x="36" y="33" fontFamily="sans-serif" fontSize="6.5" fontWeight="700" fill="#047857">PERÚ ONG</text>
        </svg>
      )
    },
    {
      id: 13,
      name: 'World Vision',
      category: 'Protección Infantil',
      svg: (
        <svg viewBox="0 0 100 48" className="h-12 max-w-[100px] object-contain grayscale hover:grayscale-0 transition-all duration-300">
          <rect width="100" height="48" rx="8" fill="#F8FAFC" />
          <path d="M14 18 L21 30 L28 18" stroke="#EA580C" strokeWidth="3" fill="none" />
          <circle cx="21" cy="15" r="3" fill="#EA580C" />
          <text x="36" y="22" fontFamily="sans-serif" fontSize="8" fontWeight="900" fill="#EA580C">World</text>
          <text x="36" y="32" fontFamily="sans-serif" fontSize="8" fontWeight="800" fill="#334155">Vision</text>
        </svg>
      )
    },
    {
      id: 14,
      name: 'CCIA Arequipa',
      category: 'Cámara de Comercio',
      svg: (
        <svg viewBox="0 0 100 48" className="h-12 max-w-[100px] object-contain grayscale hover:grayscale-0 transition-all duration-300">
          <rect width="100" height="48" rx="8" fill="#F8FAFC" />
          <rect x="12" y="16" width="18" height="16" fill="#0F172A" rx="3" />
          <circle cx="21" cy="24" r="4" fill="#FFB800" />
          <text x="36" y="23" fontFamily="sans-serif" fontSize="11" fontWeight="900" fill="#0F172A">CCIA</text>
          <text x="36" y="33" fontFamily="sans-serif" fontSize="6.5" fontWeight="700" fill="#D97706">AREQUIPA</text>
        </svg>
      )
    },
    {
      id: 15,
      name: 'Viva Arequipa',
      category: 'Red Solidaria',
      svg: (
        <svg viewBox="0 0 100 48" className="h-12 max-w-[100px] object-contain grayscale hover:grayscale-0 transition-all duration-300">
          <rect width="100" height="48" rx="8" fill="#F8FAFC" />
          <circle cx="21" cy="24" r="10" fill="#10B981" />
          <path d="M17 24 L20 27 L26 21" stroke="#FFF" strokeWidth="2.5" fill="none" />
          <text x="38" y="23" fontFamily="sans-serif" fontSize="9" fontWeight="900" fill="#065F46">VIVA</text>
          <text x="38" y="33" fontFamily="sans-serif" fontSize="6.5" fontWeight="700" fill="#059669">AREQUIPA</text>
        </svg>
      )
    },
    {
      id: 16,
      name: 'Paz y Esperanza',
      category: 'Derechos Humanos',
      svg: (
        <svg viewBox="0 0 100 48" className="h-12 max-w-[100px] object-contain grayscale hover:grayscale-0 transition-all duration-300">
          <rect width="100" height="48" rx="8" fill="#F8FAFC" />
          <path d="M14 26 C16 18, 26 18, 28 26 Z" fill="#6366F1" />
          <circle cx="21" cy="18" r="4" fill="#818CF8" />
          <text x="36" y="21" fontFamily="sans-serif" fontSize="7.5" fontWeight="800" fill="#4338CA">PAZ Y</text>
          <text x="36" y="32" fontFamily="sans-serif" fontSize="7" fontWeight="700" fill="#334155">ESPERANZA</text>
        </svg>
      )
    },
    {
      id: 17,
      name: 'Cáritas Arequipa',
      category: 'Acción Pastoral',
      svg: (
        <svg viewBox="0 0 100 48" className="h-12 max-w-[100px] object-contain grayscale hover:grayscale-0 transition-all duration-300">
          <rect width="100" height="48" rx="8" fill="#F8FAFC" />
          <circle cx="21" cy="24" r="11" fill="#DC2626" />
          <path d="M18 20 C20 18, 24 18, 24 22 C24 25, 21 27, 21 29" stroke="#FFF" strokeWidth="2" fill="none" />
          <text x="38" y="23" fontFamily="sans-serif" fontSize="9" fontWeight="900" fill="#991B1B">CÁRITAS</text>
          <text x="38" y="33" fontFamily="sans-serif" fontSize="6.5" fontWeight="700" fill="#64748B">AREQUIPA</text>
        </svg>
      )
    },
    {
      id: 18,
      name: 'Kallpa Asociación',
      category: 'Educación y Comunidad',
      svg: (
        <svg viewBox="0 0 100 48" className="h-12 max-w-[100px] object-contain grayscale hover:grayscale-0 transition-all duration-300">
          <rect width="100" height="48" rx="8" fill="#F8FAFC" />
          <path d="M13 28 L21 14 L29 28 Z" fill="#D97706" />
          <circle cx="21" cy="22" r="3" fill="#FFF" />
          <text x="36" y="23" fontFamily="sans-serif" fontSize="10" fontWeight="900" fill="#B45309">KALLPA</text>
          <text x="36" y="33" fontFamily="sans-serif" fontSize="6.5" fontWeight="700" fill="#475569">PERÚ</text>
        </svg>
      )
    }
  ]

  return (
    <section className="py-16 bg-slate-50/80 border-t border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/80 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <span>Red de Cooperación y Confianza</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Nuestros Aliados Estratégicos
          </h2>
          <p className="text-sm text-slate-600">
            Trabajamos de la mano con 18 organizaciones, universidades e instituciones comprometidas con el bienestar de la niñez en Mollebaya.
          </p>
        </div>

        {/* Grid de 18 aliados con logos uniformes h-12 max-w-[100px] grayscale hover:grayscale-0 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6 items-center justify-items-center">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="w-full flex flex-col items-center justify-center p-3 rounded-2xl bg-white border border-slate-200/90 hover:border-amber-300 hover:shadow-md transition-all duration-300 group cursor-pointer"
              title={`${partner.name} - ${partner.category}`}
            >
              <div className="flex items-center justify-center w-full">
                {partner.svg}
              </div>
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-900 text-center mt-1.5 truncate max-w-[110px] transition-colors">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
