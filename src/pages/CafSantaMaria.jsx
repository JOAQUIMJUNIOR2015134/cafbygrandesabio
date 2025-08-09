import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ReusableCard from '../components/ReusableCard';
import PausaFeriasLectivas from '../components/PausaFeriasLectivas';
import EscolasServico from '../components/EscolasServico';
import ContactForm from '../components/ContactForm';

const CafSantaMaria = () => {
  const navigate = useNavigate();

  const handleInscrever = () => {
    navigate('/contactos');
  };

  const handleSaberMais = () => {
    navigate('/');
  };

  return (
    <div className="page-container">
      <HeroSection 
        image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2022&q=80"
        onInscrever={handleInscrever}
        onSaberMais={handleSaberMais}
      />

      {/* Seção dos Cartões */}
      <section style={{ padding: '60px 20px' }}>
        <h2 style={{ 
          textAlign: 'center', 
          marginBottom: '40px', 
          color: '#2c3e50', 
          fontSize: '2.5rem' 
        }}>
          CAF Santa Maria da Feira
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '20px', 
          maxWidth: '1200px', 
          margin: '0 auto' 
        }}>
          
          <ReusableCard
            title="📅 Nossa Experiência"
            description="Há mais de 15 anos a servir o município de Santa Maria da Feira com dedicação e excelência no apoio às famílias e desenvolvimento integral das crianças."
          />

          <ReusableCard
            title="👥 Nossos Alunos"
            description="Atualmente servimos mais de 150 alunos no nosso CAF, proporcionando um ambiente educativo e acolhedor para crianças dos 6 aos 12 anos."
          />

          <ReusableCard
            title="� Faixa Etária"
            description="Especializamo-nos no acompanhamento de alunos do 1º Ciclo do Ensino Básico (1º ao 4º ano), proporcionando atividades adequadas às suas necessidades educativas."
          />

          <ReusableCard
            title="👨‍🏫 Nossa Equipa"
            description="Contamos com uma equipa de 12 profissionais qualificados, incluindo educadores, animadores e técnicos especializados no desenvolvimento infantil."
          />

        </div>
        
        {/* CSS responsivo inline para tablets e mobile */}
        <style jsx>{`
          @media (max-width: 1024px) {
            .services-grid {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 20px !important;
              padding: 0 15px !important;
            }
          }
          
          @media (max-width: 768px) {
            .services-grid {
              grid-template-columns: 1fr !important;
              gap: 15px !important;
              padding: 0 10px !important;
            }
          }
        `}</style>
      </section>

      {/* Componente Pausa e Férias Lectivas */}
      <PausaFeriasLectivas />

      {/* Componente Escolas Serviço */}
      <EscolasServico />

      {/* Componente Formulário de Contacto */}
      <ContactForm />
    </div>
  );
};

export default CafSantaMaria;
