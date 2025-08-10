import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import CafInfoCard from '../components/CafInfoCard';
import ReusableCard from '../components/ReusableCard';
import ContactForm from '../components/ContactForm';
import '../styles/ResponsiveGrid.css';
import heroImage from '../assets/HeroSection/8.png';
import cafInfoImage from '../assets/CAF_INFO.png';
import cafSantaMariaImage from '../assets/CAF_Pages/CAF_Santa Maria da Feira.jpg';
import cafOvarImage from '../assets/CAF_Pages/CAF_OVAR.jpg';
import cafEsmorizImage from '../assets/CAF_Pages/CAF_Esmoriz.jpg';
import gpsImage from '../assets/CAF_Pages/CAF_GPS.jpeg';

const Home = () => {
  const navigate = useNavigate();

  // Função para o botão Inscrever
  const handleInscrever = () => {
    console.log('Botão Inscrever clicado!');
    navigate('/contactos');
  };

  // Função para o botão Saber Mais
  const handleSaberMais = () => {
    console.log('Botão Saber Mais clicado!');
    navigate('/quem-somos');
  };

  // Funções para os cards reutilizáveis
  const handleCardButton1 = (cardName) => {
    console.log(`Botão 1 do card ${cardName} clicado!`);
    
    // Redirecionar especificamente para CAF Santa Maria da Feira
    if (cardName === 'CAF_Santa Maria da Feira') {
      navigate('/caf-santa-maria');
    } else {
      alert(`Página de ${cardName} em desenvolvimento!`);
    }
  };

  const handleCardButton2 = (cardName) => {
    console.log(`Botão 2 do card ${cardName} clicado!`);
    navigate('/contactos');
  };

  return (
    <div className="page-container">
      
      <HeroSection 
        image={heroImage}
        onInscrever={handleInscrever}
        onSaberMais={handleSaberMais}
      />

      <CafInfoCard 
        image={cafInfoImage}
        title="CAF_Santa Maria da Feira"
      />

      {/* 4 Cards em Grid Horizontal */}
      <section style={{ padding: '60px 20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px', color: '#2c3e50', fontSize: '2.5rem' }}>
          Nossos Serviços
        </h2>
        <div className="services-grid">
          <ReusableCard
            image={cafSantaMariaImage}
            title="CAF_Santa Maria da Feira"
            description="Desenvolvemos atividades físicas e desportivas adequadas a todas as idades, promovendo o bem-estar e a socialização."
            button1Text="Saber Mais"
            button2Text="Inscrever"
            onButton1Click={() => handleCardButton1('CAF_Santa Maria da Feira')}
            onButton2Click={() => handleCardButton2('CAF_Santa Maria da Feira')}
          />

          <ReusableCard
            image={cafOvarImage}
            title="CAF_Ovar"
            description="Oficinas de artes plásticas, música e expressão criativa para estimular a imaginação e desenvolver talentos."
            button1Text="Saber Mais"
            button2Text="Inscrever"
            onButton1Click={() => handleCardButton1('CAF_Ovar')}
            onButton2Click={() => handleCardButton2('CAF_Ovar')}
          />

          <ReusableCard
            image={cafEsmorizImage}
            title="CAF_Esmoriz"
            description="Passeios e atividades ao ar livre para conectar as crianças com a natureza e promover a consciência ambiental."
            button1Text="Saber Mais"
            button2Text="Inscrever"
            onButton1Click={() => handleCardButton1('CAF_Esmoriz')}
            onButton2Click={() => handleCardButton2('CAF_Esmoriz')}
          />

          <ReusableCard
            image={gpsImage}
            title="GPS_Gosto pelo Saber"
            description="Dinâmicas de grupo e jogos educativos que estimulam o raciocínio lógico e promovem o trabalho em equipa."
            button1Text="Saber Mais"
            button2Text="Inscrever"
            onButton1Click={() => handleCardButton1('GPS_Gosto pelo Saber')}
            onButton2Click={() => handleCardButton2('GPS_Gosto pelo Saber')}
          />
        </div>
      </section>

      {/* Formulário de Contacto */}
      <ContactForm />
    </div>
  );
};

export default Home;
