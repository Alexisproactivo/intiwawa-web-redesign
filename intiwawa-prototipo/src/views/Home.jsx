import {
  Sun,
  Heart,
  Users,
  GraduationCap,
  Apple,
  MapPin,
  ArrowRight,
  QrCode,
  MessageCircle,
  Quote
} from 'lucide-react'
import Partners from '../components/Partners'

export default function Home({ navigateTo }) {
  const WHATSAPP_NUMBER = '51923221762'
  const YAPE_HOLDER = 'Luis Armando Sotomayor Zambrano'

  const testimonials = [
    {
      name: 'María Huamán',
      role: 'Madre del taller productivo en Mollebaya',
      quote: 'Gracias a los talleres de tejido de Intiwawa, ahora puedo generar ingresos propios desde mi hogar y mis hijos reciben almuerzo y apoyo escolar cada tarde.',
      img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'Diego Valdivia',
      role: 'Voluntario de Refuerzo Académico',
      quote: 'Ver el brillo en los ojos de los wawas cuando comprenden un problema de matemáticas o terminan su primer libro es la experiencia más gratificante.',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'Sra. Carmen Quispe',
      role: 'Vecina de San Isidro, Mollebaya',
      quote: 'Intiwawa es la casa de todos nosotros. Los niños están seguros, aprenden con alegría y crecen con valores que transforman a toda la comunidad.',
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50/70 via-white to-slate-50 py-16 lg:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFB800]/25 text-amber-950 text-xs sm:text-sm font-bold border border-[#FFB800]/40">
                <Sun className="w-4 h-4 text-amber-700" />
                <span>Comunidad de Mollebaya · Arequipa</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                Educación, nutrición y sonrisas para cada <span className="underline decoration-[#FFB800] decoration-wavy">wawa</span>.
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
                En <strong>Intiwawa</strong> rompemos el ciclo de la pobreza brindando apoyo escolar integral,
                alimentación balanceada y empoderamiento familiar a los niños y madres de Mollebaya en el sur del Perú.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => navigateTo('donar')}
                  className="px-7 py-3.5 rounded-xl font-bold bg-[#FFB800] hover:bg-[#e5a500] text-slate-950 flex items-center gap-2 shadow-lg shadow-amber-200/50 hover:shadow-xl transition-all"
                >
                  <Heart className="w-5 h-5 fill-slate-950" />
                  <span>Apoyar con Donación</span>
                </button>
                <button
                  onClick={() => navigateTo('proyectos')}
                  className="px-6 py-3.5 rounded-xl font-bold bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 flex items-center gap-2 shadow-sm transition-all"
                >
                  <span>Conoce los Proyectos</span>
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                </button>
              </div>

              {/* Medidores de impacto */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/80">
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">+150</p>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium">Niños atendidos semanalmente</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">100%</p>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium">Transparencia y dedicación</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">+15</p>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium">Años de labor en Mollebaya</p>
                </div>
              </div>
            </div>

            {/* Tarjeta Visual Destacada */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
                  alt="Niños felices de Mollebaya"
                  className="w-full h-[400px] object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="bg-[#FFB800] text-slate-950 text-xs font-bold px-3 py-1 rounded-full w-max mb-2">
                    Mollebaya en Acción
                  </span>
                  <h3 className="text-xl font-bold">Un refugio seguro para aprender y crecer</h3>
                  <p className="text-sm text-slate-200 mt-1">
                    Cada tarde, nuestro centro abre sus puertas para brindar tutoría, almuerzos nutritivos y cariño.
                  </p>
                  <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-xs text-amber-200">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> Mollebaya, Arequipa
                    </span>
                    <button
                      onClick={() => navigateTo('involucrarse')}
                      className="font-bold underline text-white hover:text-[#FFB800]"
                    >
                      Sé Voluntario &rarr;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pilares de Intiwawa */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2">
              Nuestros Tres Ejes Fundamentales
            </h2>
            <h3 className="text-3xl font-extrabold text-slate-900">
              ¿Cómo generamos un impacto real y sostenible?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-amber-50/50 border border-amber-100 hover:shadow-lg transition-all space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#FFB800] flex items-center justify-center shadow-md">
                <GraduationCap className="w-7 h-7 text-slate-950" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Educación de Calidad</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Nivelación escolar, biblioteca activa, talleres de inglés, computación básica y robótica para estimular el ingenio y la curiosidad desde temprana edad.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-emerald-50/50 border border-emerald-100 hover:shadow-lg transition-all space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-md">
                <Apple className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Nutrición y Salud Integral</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Lucha activa contra la anemia mediante menús balanceados con insumos andinos y campañas continuas de desparasitación y odontología pediátrica.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-sky-50/50 border border-sky-100 hover:shadow-lg transition-all space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-sky-500 text-white flex items-center justify-center shadow-md">
                <Users className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Empoderamiento Familiar</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Talleres de crianza positiva para padres y proyectos de microemprendimiento artesanal para que las madres de Mollebaya alcancen independencia financiera.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Aliados Estratégicos (18 aliados) */}
      <Partners />

      {/* Testimonios de la Comunidad */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
              Voces de Mollebaya
            </span>
            <h3 className="text-3xl font-extrabold text-slate-900 mt-1">
              Historias reales que nos inspiran cada día
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <Quote className="w-8 h-8 text-[#FFB800] opacity-80" />
                  <p className="text-slate-700 text-sm italic leading-relaxed">
                    "{item.quote}"
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#FFB800]"
                  />
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm">{item.name}</h5>
                    <p className="text-xs text-slate-500">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner de Donación Rápida con Yape */}
      <section className="bg-gradient-to-r from-slate-900 to-amber-950 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-800/80 rounded-3xl p-8 sm:p-10 border border-amber-500/20 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-2 bg-[#FFB800] text-slate-950 font-bold px-3 py-1 rounded-full text-xs">
                <QrCode className="w-3.5 h-3.5" />
                <span>Yape disponible al instante</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black">
                Haz la diferencia en Mollebaya hoy mismo
              </h3>
              <p className="text-slate-300 text-sm">
                Tu contribución va directamente a raciones alimenticias y útiles de los niños.
                Aceptamos Yape a nombre de <strong>{YAPE_HOLDER}</strong>.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <button
                onClick={() => navigateTo('donar')}
                className="px-8 py-4 rounded-xl font-bold bg-[#FFB800] hover:bg-[#e5a500] text-slate-950 text-center shadow-lg transition"
              >
                Ir a Donaciones (Yape)
              </button>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Intiwawa,%20deseo%20hacer%20una%20donación%20o%20conocer%20más%20sobre%20su%20labor`}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-4 rounded-xl font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 text-center flex items-center justify-center gap-2 transition"
              >
                <MessageCircle className="w-5 h-5 text-[#FFB800]" />
                <span>WhatsApp Oficial</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
