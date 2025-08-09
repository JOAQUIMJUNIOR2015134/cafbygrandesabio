import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ReusableCard from '../components/ReusableCard';
import ContactForm from '../components/ContactForm';
import GoogleMapsStreetView from '../components/GoogleMapsStreetView';

const OndeEstamos = () => {
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
        image="https://images.unsplash.com/photo-1581092335878-09d9dd6c2fff?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        onInscrever={handleInscrever}
        onSaberMais={handleSaberMais}
      />

      {/* Seção Principal */}
      <section style={{ padding: '80px 20px', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '20px', 
            color: '#2c3e50', 
            fontSize: '2.5rem',
            fontWeight: 'bold'
          }}>
            Onde Estamos
          </h2>
          <p style={{ 
            textAlign: 'center', 
            marginBottom: '60px', 
            color: '#5a6c7d', 
            fontSize: '1.2rem',
            maxWidth: '800px',
            margin: '0 auto 60px auto',
            lineHeight: '1.6'
          }}>
            A GRANDESABIO está presente em várias localidades da região, 
            oferecendo serviços CAF de qualidade e proximidade às famílias.
          </p>

          {/* Grid de Localidades */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '30px',
            marginBottom: '60px'
          }}>
            
            <ReusableCard
              image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2022&q=80"
              title="CAF Santa Maria da Feira"
              description="O nosso centro principal, localizado no coração de Santa Maria da Feira. Servimos mais de 150 alunos com uma equipa de 12 profissionais qualificados."
              buttonText="Saber Mais"
              onButtonClick={() => navigate('/caf-santa-maria')}
            />

            <ReusableCard
              image="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=2046&q=80"
              title="CAF Ovar"
              description="Centro em Ovar com foco em atividades aquáticas e desportivas. Aproveitamos a proximidade da costa para oferecer experiências únicas às crianças."
              buttonText="Em Breve"
            />

            <ReusableCard
              image="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=2086&q=80"
              title="CAF Esmoriz"
              description="Localização estratégica em Esmoriz, oferecendo atividades de praia e ambiente natural. Programa especial de educação ambiental."
              buttonText="Em Breve"
            />

            <ReusableCard
              image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              title="CAF GPS (Em Planeamento)"
              description="Novo centro em fase de planeamento, com tecnologias educativas avançadas e programa inovador de STEM para crianças."
              buttonText="Informações"
            />

          </div>

          {/* Informação de Contacto Geral */}
          <div style={{ 
            backgroundColor: '#fff',
            padding: '40px',
            borderRadius: '15px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            textAlign: 'center'
          }}>
            <h3 style={{ 
              color: '#2c3e50', 
              marginBottom: '20px',
              fontSize: '1.8rem'
            }}>
              Informações Gerais
            </h3>
            <p style={{ 
              color: '#5a6c7d', 
              fontSize: '1.1rem',
              lineHeight: '1.6',
              marginBottom: '30px'
            }}>
              Para mais informações sobre qualquer uma das nossas localidades, 
              entre em contacto connosco. Estamos sempre disponíveis para esclarecer 
              dúvidas e ajudar na escolha do melhor CAF para o seu filho.
            </p>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '20px',
              flexWrap: 'wrap'
            }}>
              <div style={{ 
                backgroundColor: '#3498db',
                color: 'white',
                padding: '15px 25px',
                borderRadius: '8px',
                fontSize: '1rem'
              }}>
                📞 +351 256 123 456
              </div>
              <div style={{ 
                backgroundColor: '#27ae60',
                color: 'white',
                padding: '15px 25px',
                borderRadius: '8px',
                fontSize: '1rem'
              }}>
                ✉️ info@grandesabio.pt
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Componente Google Maps com Street View */}
      <GoogleMapsStreetView 
        location={{ lat: 40.9267, lng: -8.5434 }}
        title="Localização Principal CAF GRANDESABIO"
      />

      {/* Formulário de Contacto */}
      <ContactForm />
    </div>
  );
};

export default OndeEstamos;