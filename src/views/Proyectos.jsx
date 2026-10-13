import { useState, useEffect } from 'react'
import {
  BookOpen,
  Apple,
  Sparkles,
  Palette,
  Sun,
  Heart,
  Users,
  CheckCircle2,
  Clock,
  ArrowRight,
  MapPin,
  Globe,
  Target
} from 'lucide-react'

export default function Proyectos({ navigateTo }) {
  // Pestaña activa por defecto: Educación - Yachay
  const [activeTab, setActiveTab] = useState('yachay')

  const WHATSAPP_NUMBER = '51923221762'

  // Sincronizar pestaña si se navega con hash o ancla específica
  useEffect(() => {
    const handleCheckHash = () => {
      const hash = window.location.hash.toLowerCase()
      if (hash.includes('warmi')) setActiveTab('warmi')
      else if (hash.includes('kusikallpa')) setActiveTab('kusikallpa')
      else if (hash.includes('arte')) setActiveTab('arte')
      else if (hash.includes('yachay') || hash.includes('huerto') || hash.includes('educacion')) {
        setActiveTab('yachay')
      }
    }
    handleCheckHash()
    window.addEventListener('hashchange', handleCheckHash)
    return () => window.removeEventListener('hashchange', handleCheckHash)
  }, [])

  // 4 Categorías Oficiales Aprobadas por Intiwawa
  const categories = [
    {
      id: 'yachay',
      label: 'Educación - Yachay',
      icon: BookOpen,
      tagline: 'Acompañamiento escolar, biblioteca activa y agroecología viva',
      color: 'amber',
    },
    {
      id: 'warmi',
      label: 'Talleres Productivos - Warmi',
      icon: Sparkles,
      tagline: 'Tejido artesanal, autonomía financiera y empoderamiento de madres',
      color: 'purple',
    },
    {
      id: 'kusikallpa',
      label: 'Salud y Nutrición - Kusikallpa',
      icon: Apple,
      tagline: 'Comedor Wawa Munay, controles médicos y erradicación de anemia',
      color: 'emerald',
    },
    {
      id: 'arte',
      label: 'Arte y Cultura',
      icon: Palette,
      tagline: 'Música andina, danzas tradicionales e identidad arequipeña',
      color: 'rose',
    },
  ]

  // Datos estructurados de proyectos por categoría
  const projectsData = {
    yachay: {
      categoryTitle: 'Educación - Yachay',
      description:
        'Acompañamos el aprendizaje integral de más de 120 niñas y niños de Mollebaya. Combinamos refuerzo académico diario, pensamiento STEAM y educación ambiental a través de nuestro huerto vivo.',
      anchorId: 'proyectos-yachay',
      projects: [
        {
          id: 'refuerzo-escolar',
          anchor: 'proyectos-yachay',
          title: 'Refuerzo Escolar y Ludoteca Creativa',
          category: 'Educación Formal & Apoyo',
          desc: 'Acompañamiento personalizado en tareas escolares, comprensión lectora, razonamiento lógico y biblioteca viva para superar el rezago educativo.',
          metric: '+120 estudiantes activos',
          frequency: 'Lunes a Viernes (3:00 pm - 6:00 pm)',
          img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80',
          subinitiatives: [
            'Nivelación personalizada en lectoescritura y matemáticas',
            'Biblioteca infantil con más de 800 títulos clasificados',
            'Espacio seguro, afectuoso y libre de violencia para estudiar',
          ],
        },
        {
          id: 'huerto-agroecologico',
          anchor: 'proyectos-huerto',
          title: 'Invernadero y Huerto Agroecológico Comunitario',
          category: 'Educación Ambiental & Ciencia',
          desc: 'Espacio de aprendizaje vivo donde los estudiantes aprenden botánica, compostaje orgánico, ciclo hídrico y cuidado del medio ambiente.',
          metric: '8 variedades de hortalizas orgánicas',
          frequency: 'Miércoles y Sábados por la tarde',
          img: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80',
          subinitiatives: [
            'Aula viva de botánica andina y respeto a la Pachamama',
            'Sistema de riego tecnificado por goteo para ahorro de agua',
            'Cosecha de verduras frescas que abastecen al comedor Wawa Munay',
          ],
        },
        {
          id: 'robotica-steam',
          anchor: 'proyectos-steam',
          title: 'Robótica Educativa y Pensamiento STEAM',
          category: 'Innovación Tecnológica',
          desc: 'Talleres prácticos de resolución de problemas con kits de robótica, programación visual básica e inglés lúdico para cerrar la brecha digital.',
          metric: '40 niños en módulos STEAM',
          frequency: 'Sábados por la mañana',
          img: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80',
          subinitiatives: [
            'Programación con bloques lúdicos para despertar el ingenio',
            'Manejo responsable de herramientas digitales e internet',
            'Talleres de experimentos científicos y física divertida',
          ],
        },
      ],
    },
    warmi: {
      categoryTitle: 'Talleres Productivos - Warmi',
      description:
        'Impulsamos la autonomía económica y el liderazgo de las madres de Mollebaya mediante el perfeccionamiento del tejido artesanal en alpaca, educación financiera y crianza con ternura.',
      anchorId: 'proyectos-warmi',
      projects: [
        {
          id: 'tejido-alpaca',
          anchor: 'proyectos-warmi',
          title: 'Taller Textil y Tejido Tradicional en Alpaca',
          category: 'Artesanía Solidaria',
          desc: 'Capacitación técnica en tejido a palillo y telar con fibra de alpaca 100% peruana para la confección de prendas comercializadas en la Tienda Solidaria.',
          metric: '45 artesanas capacitadas',
          frequency: 'Sábados (9:00 am - 1:00 pm)',
          img: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=800&q=80',
          subinitiatives: [
            'Confección de gorros, mitones, chalinas y peluches de alpaca',
            'Ingresos directos y justos que fortalecen la canasta familiar',
            'Rescate de patrones y técnicas textiles ancestrales andinas',
          ],
        },
        {
          id: 'educacion-financiera',
          anchor: 'proyectos-finanzas',
          title: 'Educación Financiera y Fondo Rotatorio',
          category: 'Autonomía Económica',
          desc: 'Talleres prácticos de presupuesto familiar, fijación de precios, ahorro comunitario y microemprendimiento para la independencia de las mujeres.',
          metric: '100% autogestión de ahorros',
          frequency: 'Reuniones quincenales',
          img: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
          subinitiatives: [
            'Capacitación en control de gastos y ahorro de emergencia',
            'Fondo de crédito rotatorio solidario entre las asociadas',
            'Desarrollo de planes de negocio caseros y ventas locales',
          ],
        },
        {
          id: 'crianza-positiva',
          anchor: 'proyectos-crianza',
          title: 'Escuela de Madres y Crianza con Ternura',
          category: 'Desarrollo Humano',
          desc: 'Espacio mensual de diálogo, prevención de violencia intrafamiliar y herramientas de psicología para criar hijos seguros, respetados y felices.',
          metric: '35 madres participando',
          frequency: 'Talleres mensuales con psicólogos',
          img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
          subinitiatives: [
            'Círculos de apoyo emocional y prevención del desgaste materno',
            'Estrategias de comunicación asertiva y resolución de conflictos',
            'Fortalecimiento de la autoestima y liderazgo comunitario',
          ],
        },
      ],
    },
    kusikallpa: {
      categoryTitle: 'Salud y Nutrición - Kusikallpa',
      description:
        'Erradicamos la anemia y la desnutrición infantil mediante alimentación balanceada con insumos andinos, controles médicos continuos y odontología preventiva.',
      anchorId: 'proyectos-kusikallpa',
      projects: [
        {
          id: 'comedor-wawa-munay',
          anchor: 'proyectos-kusikallpa',
          title: 'Comedor Nutricional Infantil "Wawa Munay"',
          category: 'Seguridad Alimentaria',
          desc: 'Almuerzos nutritivos supervisados por especialistas para asegurar la ingesta diaria de hierro y micronutrientes esenciales para el cerebro infantil.',
          metric: '350 raciones saludables / semana',
          frequency: 'Lunes a Viernes a mediodía',
          img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80',
          subinitiatives: [
            'Menús con sangrecita, quinua, kiwicha y verduras del huerto',
            'Reducción comprobada del 75% en casos de anemia leve y moderada',
            'Talleres de cocina andina nutritiva y económica para madres',
          ],
        },
        {
          id: 'campanas-medicas',
          anchor: 'proyectos-campanas-medicas',
          title: 'Campañas Médicas y Odontología Pediátrica',
          category: 'Salud Preventiva',
          desc: 'Atención médica integral periódica con profesionales voluntarios: despistaje de anemia, control de crecimiento y salud bucal preventiva.',
          metric: '4 campañas masivas al año',
          frequency: 'Campañas trimestrales',
          img: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80',
          subinitiatives: [
            'Dosaje periódico de hemoglobina y seguimiento nutricional',
            'Fluorización y profilaxis dental pediátrica sin costo',
            'Entrega de kits de cepillado y antiparasitarios supervisados',
          ],
        },
        {
          id: 'salud-emocional',
          anchor: 'proyectos-salud-mental',
          title: 'Acompañamiento Psicológico y Salud Emocional',
          category: 'Bienestar Integral',
          desc: 'Consultas individuales y talleres grupales orientados al desarrollo de la resiliencia, gestión de emociones y salud mental infantil.',
          metric: '60 atenciones mensuales',
          frequency: 'Atención continua semanal',
          img: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=800&q=80',
          subinitiatives: [
            'Evaluación y orientación de problemas de aprendizaje',
            'Espacio confidencial de desahogo y escucha empática',
            'Talleres de habilidades sociales y empatía para adolescentes',
          ],
        },
      ],
    },
    arte: {
      categoryTitle: 'Arte y Cultura',
      description:
        'Fortalecemos la identidad andina y arequipeña a través de la música tradicional, la danza folclórica y las artes plásticas, despertando la sensibilidad y orgullo cultural.',
      anchorId: 'proyectos-arte',
      projects: [
        {
          id: 'musica-andina',
          anchor: 'proyectos-arte',
          title: 'Música Andina y Escuela de Instrumentos',
          category: 'Música Tradicional',
          desc: 'Enseñanza formativa en instrumentos tradicionales andinos para desarrollar la disciplina, oído musical y la identidad cultural en los jóvenes.',
          metric: '40 músicos en formación',
          frequency: 'Sábados por la tarde',
          img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
          subinitiatives: [
            'Talleres de ejecución de zampoña, quena, charango y bombo',
            'Conformación de la banda comunitaria infantil de Mollebaya',
            'Desarrollo de la concentración y trabajo armónico en equipo',
          ],
        },
        {
          id: 'danza-folclorica',
          anchor: 'proyectos-danza',
          title: 'Danza Folclórica y Elenco Juvenil',
          category: 'Expresión Corporal',
          desc: 'Práctica de danzas tradicionales de la región Arequipa y el sur peruano para fomentar el respeto por las costumbres ancestrales.',
          metric: '50 bailarines en elenco',
          frequency: 'Viernes y Sábados por la tarde',
          img: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
          subinitiatives: [
            'Montaje de danzas regionales (Wititi, Marinera Arequipeña, Pampeña)',
            'Presentaciones en festivales distritales y eventos culturales',
            'Afianzamiento de la expresión corporal y seguridad escénica',
          ],
        },
        {
          id: 'artes-plasticas',
          anchor: 'proyectos-artes-plasticas',
          title: 'Artes Plásticas, Pintura y Muralismo Comunitario',
          category: 'Creatividad Visual',
          desc: 'Talleres libres de pintura, acuarela, dibujo y muralismo donde los niños plasman las leyendas, paisajes y vivencias de Mollebaya.',
          metric: '80 obras y murales anuales',
          frequency: 'Sábados por la mañana',
          img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80',
          subinitiatives: [
            'Pintura de murales comunitarios con temáticas de naturaleza y paz',
            'Narración oral y rescate de leyendas de los abuelos de Mollebaya',
            'Exposiciones abiertas para que los padres valoren sus creaciones',
          ],
        },
      ],
    },
  }

  const currentCategory = projectsData[activeTab] || projectsData.yachay

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen">
      {/* ======================================================== */}
      {/* 1. CABECERA VISUAL CON TÍTULO OFICIAL E IMAGEN AMPLIA    */}
      {/* ======================================================== */}
      <section className="relative overflow-hidden bg-slate-950 text-white py-16 lg:py-24">
        {/* Imagen Amplia en Mollebaya con Contraste Suave */}
        <img
          src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1920&q=80"
          alt="Comunidad y valle de Mollebaya, Arequipa"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/60" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#FFB800] text-xs font-bold uppercase tracking-wider border border-white/15 backdrop-blur-md mx-auto">
            <Sun className="w-4 h-4 fill-[#FFB800] text-[#FFB800]" />
            <span>Programas en Terreno · Mollebaya, Arequipa</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] max-w-4xl mx-auto">
            Nuestros Proyectos: <span className="text-[#FFB800]">Desarrollo Integral</span> Comunitario
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Intervenimos de manera directa y sostenible en el distrito de Mollebaya a través de 4 programas articulados que conectan la educación, la nutrición, la autonomía familiar y el arte.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs font-bold text-slate-300">
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl border border-white/10">
              <MapPin className="w-4 h-4 text-[#FFB800]" />
              Sede Mollebaya, Arequipa
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl border border-white/10">
              <Users className="w-4 h-4 text-emerald-400" />
              +150 Wawas Atendidos
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl border border-white/10">
              <Globe className="w-4 h-4 text-sky-400" />
              Voluntariado Internacional
            </span>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. BARRA DE PESTAÑAS INTERACTIVA CON LAS 4 CATEGORÍAS   */}
      {/* ======================================================== */}
      <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs py-3.5">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto no-scrollbar py-1">
            {categories.map((cat) => {
              const Icon = cat.icon
              const isSelected = activeTab === cat.id

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 shrink-0 transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#FFB800] text-slate-950 shadow-md shadow-amber-200/80 ring-2 ring-amber-400'
                      : 'bg-slate-100 text-slate-700 hover:text-slate-950 hover:bg-amber-50/70 border border-slate-200/80'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-slate-950' : 'text-slate-500'}`} />
                  <span>{cat.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. CONTENIDO MODULAR POR CATEGORÍA CON FOTOS Y MÉTRICAS   */}
      {/* ======================================================== */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-10">
        {/* Encabezado descriptivo de la categoría activa */}
        <div id={currentCategory.anchorId} className="scroll-mt-36 space-y-2 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/90 text-amber-950 text-xs font-bold uppercase tracking-wider">
            <span>Pilar Estratégico</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {currentCategory.categoryTitle}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            {currentCategory.description}
          </p>
        </div>

        {/* Tarjetas modulares de subiniciativas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {currentCategory.projects.map((item) => (
            <div
              key={item.id}
              id={item.anchor}
              className="scroll-mt-36 bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Foto nítida de Unsplash */}
                <div className="relative h-56 overflow-hidden bg-slate-900">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-extrabold text-slate-900 shadow-sm">
                    {item.category}
                  </div>
                </div>

                {/* Contenido Editorial */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-black text-slate-900 group-hover:text-amber-800 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Subiniciativas / Resultados Clave */}
                  <div className="pt-2 border-t border-slate-100 space-y-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block">
                      Acciones y Metodología:
                    </span>
                    <ul className="space-y-1.5">
                      {item.subinitiatives.map((sub, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Horario y frecuencia */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
                    <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>{item.frequency}</span>
                  </div>
                </div>
              </div>

              {/* Pie de la tarjeta: Métrica y Llamado a Colaborar */}
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-900 bg-emerald-50 px-2.5 py-1 rounded-lg">
                    {item.metric}
                  </span>
                  <button
                    onClick={() => navigateTo('involucrarse')}
                    className="text-xs font-black text-slate-900 hover:text-amber-800 flex items-center gap-1 transition group-hover:translate-x-0.5"
                  >
                    <span>Sumarse</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FFB800]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Anclas ocultas para compatibilidad total con enlaces directos del Navbar */}
        <div className="sr-only">
          <div id="proyectos-yachay" />
          <div id="proyectos-warmi" />
          <div id="proyectos-kusikallpa" />
          <div id="proyectos-huerto" />
          <div id="proyectos-arte" />
        </div>
      </main>

      {/* ======================================================== */}
      {/* 4. BANNER DE LLAMADO A LA ACCIÓN: APOYAR O SER           */}
      {/*    VOLUNTARIO INTERNACIONAL                              */}
      {/* ======================================================== */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-amber-950 rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 border border-white/10">
            <div className="space-y-3 max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-[#FFB800] text-slate-950 font-black px-3.5 py-1 rounded-full text-xs">
                <Target className="w-3.5 h-3.5" />
                <span>Impacto Directo en Terreno</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                ¿Quieres impulsar estos proyectos o ser voluntario internacional?
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Recibimos voluntarios locales e internacionales para compartir sus conocimientos en pedagogía, nutrición, salud, robótica y arte en nuestro centro de Mollebaya. También puedes financiar directamente raciones y útiles escolares.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
              <button
                onClick={() => navigateTo('involucrarse', 'voluntariado-internacional')}
                className="px-6 py-3.5 rounded-xl font-bold bg-[#FFB800] hover:bg-[#e5a500] text-slate-950 text-center text-sm shadow-md transition flex items-center justify-center gap-2"
              >
                <Globe className="w-4 h-4" />
                <span>Voluntariado Internacional</span>
              </button>
              <button
                onClick={() => navigateTo('donar')}
                className="px-6 py-3.5 rounded-xl font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 text-center text-sm transition flex items-center justify-center gap-2"
              >
                <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                <span>Financiar un Proyecto (Yape)</span>
              </button>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Intiwawa,%20deseo%20conocer%20más%20sobre%20sus%20proyectos%20en%20Mollebaya`}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-3.5 rounded-xl font-bold bg-white/5 hover:bg-white/15 text-white border border-white/15 text-center text-sm transition flex items-center justify-center"
                title="Escribir al WhatsApp Oficial"
              >
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
