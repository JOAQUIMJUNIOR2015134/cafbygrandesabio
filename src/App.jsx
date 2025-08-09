import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import QuemSomos from './pages/QuemSomos'
import OndeEstamos from './pages/OndeEstamos'
import Precarios from './pages/Precarios'
import Contactos from './pages/Contactos'
import CafSantaMaria from './pages/CafSantaMaria'
import './App.css'

function App() {
  // Você pode substituir este logo pelo seu próprio logo
  const logoUrl = "/vite.svg"; // Substitua pelo caminho do seu logo

  return (
    <Router>
      <div className="App">
        <Navbar logo={logoUrl} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quem-somos" element={<QuemSomos />} />
            <Route path="/onde-estamos" element={<OndeEstamos />} />
            <Route path="/precarios" element={<Precarios />} />
            <Route path="/contactos" element={<Contactos />} />
            <Route path="/caf-santa-maria" element={<CafSantaMaria />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
