import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import CafInfoCard from '../components/CafInfoCard';
import ReusableCard from '../components/ReusableCard';
import ContactForm from '../components/ContactForm';
import '../styles/ResponsiveGrid.css';

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
        image="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        onInscrever={handleInscrever}
        onSaberMais={handleSaberMais}
      />

      <CafInfoCard 
        image="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
        title="CAF_Santa Maria da Feira"
      />

      {/* 4 Cards em Grid Horizontal */}
      <section style={{ padding: '60px 20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px', color: '#2c3e50', fontSize: '2.5rem' }}>
          Nossos Serviços
        </h2>
        <div className="services-grid">
          <ReusableCard
            image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2022&q=80"
            title="CAF_Santa Maria da Feira"
            description="Desenvolvemos atividades físicas e desportivas adequadas a todas as idades, promovendo o bem-estar e a socialização."
            button1Text="Saber Mais"
            button2Text="Inscrever"
            onButton1Click={() => handleCardButton1('CAF_Santa Maria da Feira')}
            onButton2Click={() => handleCardButton2('CAF_Santa Maria da Feira')}
          />

          <ReusableCard
            image="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            title="CAF_Ovar"
            description="Oficinas de artes plásticas, música e expressão criativa para estimular a imaginação e desenvolver talentos."
            button1Text="Saber Mais"
            button2Text="Inscrever"
            onButton1Click={() => handleCardButton1('CAF_Ovar')}
            onButton2Click={() => handleCardButton2('CAF_Ovar')}
          />

          <ReusableCard
            image="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            title="CAF_Esmoriz"
            description="Passeios e atividades ao ar livre para conectar as crianças com a natureza e promover a consciência ambiental."
            button1Text="Saber Mais"
            button2Text="Inscrever"
            onButton1Click={() => handleCardButton1('CAF_Esmoriz')}
            onButton2Click={() => handleCardButton2('CAF_Esmoriz')}
          />

          <ReusableCard
            image="https://images.unsplash.com/photo-1587691592099-24045742c181?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80"
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
