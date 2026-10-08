import {
  Sun,
  Heart,
  MapPin,
  Clock,
  Users,
  Phone,
  MessageCircle,
  Mail
} from 'lucide-react'

export default function Footer({ navigateTo }) {
  const WHATSAPP_NUMBER = '51923221762'
  const WHATSAPP_DISPLAY = '+51 923 221 762'
  const YAPE_HOLDER = 'Luis Armando Sotomayor Zambrano'
  const YAPE_PHONE = '923 221 762'

  return (
    <footer className="bg-[#F6F1E3] border-t border-[#EAE3D2] text-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Columna 1: Identidad y Misión */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FFB800] flex items-center justify-center shadow-sm">
                <Sun className="w-6 h-6 text-slate-900 fill-slate-900" />
              </div>
              <span className="text-xl font-black tracking-tight text-slate-900">
                INTI<span className="text-amber-600">WAWA</span>
              </span>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              Organización no gubernamental sin fines de lucro dedicada a potenciar la educación, nutrición y felicidad de los niños y familias de Mollebaya, Arequipa.
            </p>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 bg-white/70 rounded-lg text-xs font-semibold text-slate-700 border border-amber-200">
                RUC Registrado · ONG Peruana Oficial
              </span>
            </div>
          </div>

          {/* Columna 2: Ubicación Oficial Mollebaya */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-slate-900 text-sm uppercase tracking-wider">
              Centro Comunitario Mollebaya
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span>
                  Comunidad de San Isidro / Mollebaya, Provincia de Arequipa, Región Arequipa, Perú
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-700 shrink-0" />
                <span>Atención y talleres: Lun - Sáb (9:00 am - 5:00 pm)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Users className="w-4 h-4 text-amber-700 shrink-0" />
                <span>Sede territorial: Mollebaya Rural</span>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto y Donaciones */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-slate-900 text-sm uppercase tracking-wider">
              Contacto Directo
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-700">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-700 shrink-0" />
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="hover:text-amber-800 transition font-medium"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-amber-700 shrink-0" />
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-800 transition font-medium"
                >
                  WhatsApp: {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-700 shrink-0" />
                <a
                  href="mailto:contacto@intiwawa.org"
                  className="hover:text-amber-800 transition font-medium"
                >
                  contacto@intiwawa.org
                </a>
              </li>
              <li className="pt-1 text-xs text-slate-600">
                <strong>Yape oficial:</strong> {YAPE_HOLDER} ({YAPE_PHONE})
              </li>
            </ul>
          </div>

          {/* Columna 4: Navegación Rápida */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-slate-900 text-sm uppercase tracking-wider">
              Secciones
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-slate-700">
              <button
                onClick={() => navigateTo('home')}
                className="text-left hover:text-amber-800 transition"
              >
                &bull; Inicio
              </button>
              <button
                onClick={() => navigateTo('nosotros')}
                className="text-left hover:text-amber-800 transition"
              >
                &bull; Nosotros
              </button>
              <button
                onClick={() => navigateTo('proyectos')}
                className="text-left hover:text-amber-800 transition"
              >
                &bull; Proyectos
              </button>
              <button
                onClick={() => navigateTo('involucrarse')}
                className="text-left hover:text-amber-800 transition"
              >
                &bull; Involucrarse
              </button>
              <button
                onClick={() => navigateTo('tienda')}
                className="text-left hover:text-amber-800 transition font-medium"
              >
                &bull; Tienda
              </button>
              <button
                onClick={() => navigateTo('donar')}
                className="text-left text-amber-800 font-bold hover:underline"
              >
                &bull; Donar Yape
              </button>
            </div>
          </div>
        </div>

        {/* Línea inferior de copyright y agradecimiento */}
        <div className="pt-8 border-t border-[#E5DEC9] flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 gap-4">
          <p>
            &copy; 2026 <strong>Asociación Intiwawa</strong>. Todos los derechos reservados. Mollebaya, Arequipa, Perú.
          </p>
          <p className="flex items-center gap-1 text-slate-700">
            Hecho con <Heart className="w-3.5 h-3.5 text-rose-600 fill-rose-600" /> para los niños y familias de Mollebaya
          </p>
        </div>
      </div>
    </footer>
  )
}
