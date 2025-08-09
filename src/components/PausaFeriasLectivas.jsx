import { useNavigate } from 'react-router-dom';
import ReusableCard from './ReusableCard';
import './PausaFeriasLectivas.css';

const PausaFeriasLectivas = () => {
  const navigate = useNavigate();

  const handleInscrever = (periodo) => {
    console.log(`Inscrição para ${periodo} solicitada!`);
    navigate('/contactos');
  };

  return (
    <section className="pausa-ferias-section">
      <div className="pausa-ferias-container">
        <h2 className="pausa-ferias-title">Pausas e Férias Lectivas</h2>
        <p className="pausa-ferias-subtitle">
          Oferecemos apoio durante todos os períodos de interrupção letiva, 
          garantindo um ambiente seguro e educativo para as crianças.
        </p>
        
        <div className="pausa-ferias-grid">
          
          <ReusableCard
            image="https://images.unsplash.com/photo-1482686115713-0fbcaced6e28?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            title="Férias de Natal"
            description="Atividades especiais temáticas natalinas, oficinas criativas e momentos de convívio durante as férias de dezembro e janeiro."
            button1Text="Inscrever"
            onButton1Click={() => handleInscrever('Férias de Natal')}
          />

          <ReusableCard
            image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            title="Interrupção Carnaval"
            description="Diversão garantida com atividades lúdicas, jogos tradicionais e celebração do Carnaval de forma educativa e criativa."
            button1Text="Inscrever"
            onButton1Click={() => handleInscrever('Interrupção Carnaval')}
          />

          <ReusableCard
            image="https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
            title="Férias da Páscoa"
            description="Celebração da Páscoa com atividades ao ar livre, caça aos ovos, oficinas de primavera e exploração da natureza."
            button1Text="Inscrever"
            onButton1Click={() => handleInscrever('Férias da Páscoa')}
          />

          <ReusableCard
            image="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            title="Férias de Verão"
            description="O nosso programa mais completo! Atividades aquáticas, desportos, artes, ciência e muita diversão durante julho e agosto."
            button1Text="Inscrever"
            onButton1Click={() => handleInscrever('Férias de Verão')}
          />

          <ReusableCard
            image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
            title="Férias de Agosto"
            description="Continuação das atividades de verão com programas especiais de preparação para o regresso às aulas e atividades refrescantes."
            button1Text="Inscrever"
            onButton1Click={() => handleInscrever('Férias de Agosto')}
          />

          <ReusableCard
            image="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2041&q=80"
            title="Férias de Setembro"
            description="Início do novo ano letivo com atividades de adaptação, jogos educativos e preparação para os desafios escolares."
            button1Text="Inscrever"
            onButton1Click={() => handleInscrever('Férias de Setembro')}
          />

        </div>
      </div>
    </section>
  );
};

export default PausaFeriasLectivas;
