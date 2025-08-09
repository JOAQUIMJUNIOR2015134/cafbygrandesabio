import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserInfoCard from '../components/UserInfoCard';
import './AreaPessoal.css';

const AreaPessoal = () => {
  const [utilizador, setUtilizador] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Verificar se o utilizador está logado
    const userData = localStorage.getItem('cafUser');
    
    if (!userData) {
      // Se não estiver logado, redirecionar para home
      navigate('/');
      return;
    }

    try {
      const user = JSON.parse(userData);
      setUtilizador(user);
    } catch (error) {
      console.error('Erro ao carregar dados do utilizador:', error);
      localStorage.removeItem('cafUser');
      navigate('/');
    }

    setIsLoading(false);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('cafUser');
    navigate('/');
  };

  if (isLoading) {
    return (
      <div className="area-pessoal-loading">
        <div className="loading-spinner"></div>
        <p>A carregar área pessoal...</p>
      </div>
    );
  }

  if (!utilizador) {
    return null;
  }

  return (
    <div className="area-pessoal">
      <div className="container">
        <div className="area-pessoal-content">
          {/* Informações do Utilizador */}
          <UserInfoCard 
            foto={utilizador.foto}
            nomeCompleto={utilizador.nome}
            email={utilizador.email}
            moradaCompleta={utilizador.morada}
            escolaAssociada={utilizador.escola_associada}
            municipio={utilizador.municipio || 'Santa Maria da Feira'}
          />

          {/* Menu de Funcionalidades */}
          <section className="features-section">
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h3>Dashboard Pessoal</h3>
                <button className="feature-button" disabled>
                  Em breve
                </button>
              </div>

              <div className="feature-card">
                <div className="feature-icon">💰</div>
                <h3>Pagamentos</h3>
                <button className="feature-button" disabled>
                  Em breve
                </button>
              </div>

              <div className="feature-card">
                <div className="feature-icon">📅</div>
                <h3>Horários</h3>
                <button className="feature-button" disabled>
                  Em breve
                </button>
              </div>

              <div className="feature-card">
                <div className="feature-icon">📋</div>
                <h3>Requisição de Material</h3>
                <button className="feature-button" disabled>
                  Em breve
                </button>
              </div>

              <div className="feature-card">
                <div className="feature-icon">📖</div>
                <h3>Regulamento de Monitor</h3>
                <button className="feature-button" disabled>
                  Em breve
                </button>
              </div>

              <div className="feature-card">
                <div className="feature-icon">🎁</div>
                <h3>Ofertas</h3>
                <button className="feature-button" disabled>
                  Em breve
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AreaPessoal;
