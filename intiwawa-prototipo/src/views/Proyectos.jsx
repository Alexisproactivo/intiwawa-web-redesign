import { useState } from 'react'
import {
  BookOpen,
  Apple,
  Sparkles,
  Sun,
  Heart,
  Users,
  ChevronRight,
  Target,
  Clock,
  CheckCircle2
} from 'lucide-react'

export default function Proyectos({ navigateTo }) {
  const [filter, setFilter] = useState('todos')

  const projectsList = [
    {
      id: 1,
      title: 'Refuerzo Escolar y Ludoteca Creativa',
      category: 'Educación',
      categoryKey: 'educacion',
      icon: BookOpen,
      desc: 'Acompañamiento personalizado en tareas escolares, comprensión lectora, razonamiento lógico y biblioteca viva para más de 120 niñas y niños de Mollebaya en edad escolar primaria y secundaria.',
      metric: '+120 estudiantes activos',
      frequency: 'Lunes a Viernes (3:00 pm - 6:00 pm)',
      impacts: [
        '92% de mejora en rendimiento escolar y lectura',
        'Talleres semanales de cómputo básico e inglés lúdico',
        'Espacio seguro libre de violencia para estudiar'
      ],
      img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'Comedor Nutricional "Wawa Munay"',
      category: 'Salud y Nutrición',
      categoryKey: 'salud',
      icon: Apple,
      desc: 'Alimentación balanceada supervisada por especialistas en nutrición para combatir la anemia y desnutrición crónica infantil, complementada con controles bimestrales de hemoglobina y peso.',
      metric: '350 raciones saludables/semana',
      frequency: 'Lunes a Viernes a mediodía',
      impacts: [
        'Reducción del 75% en casos de anemia leve y moderada',
        'Menús basados en quinua, kiwicha, sangrecita y verduras locales',
        'Educación nutricional y hábitos de higiene bucal para madres'
      ],
      img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'Talleres Productivos para Madres de Familia',
      category: 'Desarrollo Comunitario',
      categoryKey: 'comunidad',
      icon: Sparkles,
      desc: 'Capacitación técnica en tejido artesanal en alpaca, corte y confección de tote bags, biohuertos caseros y finanzas comunitarias para dotar a las mujeres de herramientas de autonomía económica.',
      metric: '45 familias beneficiadas',
      frequency: 'Sábados por la mañana',
      impacts: [
        'Generación de ingresos directos comercializados en la Tienda Solidaria',
        'Talleres de autoestima, liderazgo femenino y prevención de violencia',
        'Fondo rotatorio de ahorro comunitario'
      ],
      img: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      title: 'Huerto Agroecológico Comunitario',
      category: 'Sostenibilidad',
      categoryKey: 'sostenibilidad',
      icon: Sun,
      desc: 'Espacio de aprendizaje vivo donde niños y adultos cultivan hortalizas orgánicas, aprenden sobre compostaje, siembra responsable y el ciclo hídrico en las laderas agrícolas de Mollebaya.',
      metric: '8 variedades de hortalizas',
      frequency: 'Miércoles y Sábados',
      impacts: [
        'Abastecimiento de verduras frescas para el comedor infantil',
        'Educación ambiental y respeto por la Madre Tierra (Pachamama)',
        'Técnicas de riego por goteo para ahorro de agua'
      ],
      img: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 5,
      title: 'Salud Integral y Soporte Psicoemocional',
      category: 'Salud y Nutrición',
      categoryKey: 'salud',
      icon: Heart,
      desc: 'Campañas médicas gratuitas, odontología preventiva, despistajes pediátricos y acompañamiento psicológico continuo para los niños y sus familias a través de profesionales voluntarios.',
      metric: '4 campañas médicas anuales',
      frequency: 'Campañas trimestrales y consultas semanales',
      impacts: [
        'Atención odontológica preventiva con flúor y profilaxis',
        'Soporte psicológico individual y talleres de inteligencia emocional',
        'Escuela de padres para crianza positiva y sin violencia'
      ],
      img: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 6,
      title: 'Artes, Música y Cultura Originaria',
      category: 'Desarrollo Comunitario',
      categoryKey: 'comunidad',
      icon: Users,
      desc: 'Talleres creativos de danza folclórica arequipeña, teatro, pintura y ejecución de instrumentos andinos (zampoña, charango y percusión) para revitalizar la identidad cultural y afianzar la autoestima.',
      metric: '60 talentos floreciendo',
      frequency: 'Sábados por la tarde',
      impacts: [
        'Presentaciones culturales en festivales de Arequipa y Mollebaya',
        'Desarrollo de habilidades socioafectivas y confianza personal',
        'Preservación de leyendas y tradiciones orales arequipeñas'
      ],
      img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    },
  ]

  const filteredProjects = filter === 'todos'
    ? projectsList
    : projectsList.filter(p => p.categoryKey === filter)

  return (
    <div className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="bg-[#FFB800]/30 text-amber-950 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            Nuestras Acciones en el Terreno
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Programas y Proyectos Comunitarios
          </h1>
          <p className="text-lg text-slate-600">
            Conoce cómo intervenimos directamente en la calidad de vida de las niñas, niños y familias del distrito de Mollebaya.
          </p>
        </div>

        {/* Filtros de proyectos */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {[
            { id: 'todos', label: 'Todos los proyectos' },
            { id: 'educacion', label: 'Educación' },
            { id: 'salud', label: 'Salud y Nutrición' },
            { id: 'comunidad', label: 'Desarrollo Comunitario' },
            { id: 'sostenibilidad', label: 'Sostenibilidad' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                filter === cat.id
                  ? 'bg-[#FFB800] text-slate-950 shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col group justify-between"
              >
                <div>
                  <div className="relative h-52 overflow-hidden bg-slate-100">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800 flex items-center gap-1.5 shadow-sm">
                      <Icon className="w-3.5 h-3.5 text-[#FFB800]" />
                      <span>{item.category}</span>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="space-y-1.5 pt-2 border-t border-slate-100">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Resultados e impacto:
                      </p>
                      <ul className="space-y-1">
                        {item.impacts.map((imp, idx) => (
                          <li key={idx} className="flex items-start gap-1.5 text-xs text-slate-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{imp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
                      <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>{item.frequency}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                    <span className="text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg">
                      {item.metric}
                    </span>
                    <button
                      onClick={() => navigateTo('involucrarse')}
                      className="text-slate-700 hover:text-slate-950 font-bold flex items-center gap-1 group-hover:underline"
                    >
                      <span>Colaborar</span>
                      <ChevronRight className="w-4 h-4 text-[#FFB800]" />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Llamado a la acción colaborativa */}
        <div className="bg-[#FFB800]/20 rounded-3xl p-8 sm:p-10 border border-[#FFB800]/40 text-center space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-[#FFB800] mx-auto flex items-center justify-center">
            <Target className="w-6 h-6 text-slate-950" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">
            ¿Quieres proponer un proyecto o colaborar como tallerista?
          </h3>
          <p className="text-slate-700 max-w-xl mx-auto text-sm leading-relaxed">
            Aceptamos iniciativas de profesionales, universitarios, colectivos y empresas que deseen brindar talleres de arte, ciencia, robótica o salud en nuestra sede comunitaria de Mollebaya.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigateTo('involucrarse')}
              className="px-6 py-3 rounded-xl font-bold bg-slate-900 text-white hover:bg-slate-800 transition"
            >
              Postular un Taller o Voluntariado
            </button>
            <button
              onClick={() => navigateTo('donar')}
              className="px-6 py-3 rounded-xl font-bold bg-white text-slate-800 border border-slate-300 hover:bg-slate-50 transition"
            >
              Financiar un Proyecto (Yape)
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
