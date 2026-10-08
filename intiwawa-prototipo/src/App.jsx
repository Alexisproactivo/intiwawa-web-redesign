import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './views/Home'
import Nosotros from './views/Nosotros'
import Proyectos from './views/Proyectos'
import Involucrarse from './views/Involucrarse'
import Tienda from './views/Tienda'
import Donar from './views/Donar'

export default function App() {
  const [activeTab, setActiveTab] = useState('home')

  const navigateTo = (tab) => {
    setActiveTab(tab)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Asegura el desplazamiento suave arriba cuando cambia la pestaña activa
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [activeTab])

  // Orquestador principal de vistas
  const renderView = () => {
    switch (activeTab) {
      case 'home':
        return <Home navigateTo={navigateTo} />
      case 'nosotros':
        return <Nosotros navigateTo={navigateTo} />
      case 'proyectos':
        return <Proyectos navigateTo={navigateTo} />
      case 'involucrarse':
        return <Involucrarse navigateTo={navigateTo} />
      case 'tienda':
        return <Tienda navigateTo={navigateTo} />
      case 'donar':
        return <Donar navigateTo={navigateTo} />
      default:
        return <Home navigateTo={navigateTo} />
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans">
      {/* Barra de navegación global */}
      <Navbar activeTab={activeTab} navigateTo={navigateTo} />

      {/* Contenedor dinámico de la vista activa */}
      <main className="flex-1">
        {renderView()}
      </main>

      {/* Pie de página oficial con datos de Mollebaya */}
      <Footer navigateTo={navigateTo} />
    </div>
  )
}
