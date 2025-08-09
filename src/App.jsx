import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import QuemSomos from './pages/QuemSomos'
import OndeEstamos from './pages/OndeEstamos'
import Precarios from './pages/Precarios'
import Contactos from './pages/Contactos'
import CafSantaMaria from './pages/CafSantaMaria'
import AreaPessoal from './pages/AreaPessoal'
import TestConnection from './components/TestConnection'
import LogotipoImage from './assets/Logotipo.png'
import './App.css'

function App() {
  // Logotipo oficial do CAFBYGRANDESABIO
  const logoUrl = LogotipoImage;

  return (
    <Router basename="/cafbygrandesabio">
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
            <Route path="/area-pessoal" element={<AreaPessoal />} />
            <Route path="/test" element={<TestConnection />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
