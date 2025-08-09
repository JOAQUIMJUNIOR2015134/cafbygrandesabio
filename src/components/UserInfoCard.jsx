import './UserInfoCard.css';

const UserInfoCard = ({ 
  foto,
  nomeCompleto,
  email,
  moradaCompleta,
  escolaAssociada,
  municipio
}) => {
  return (
    <div className="user-info-card">
      <div className="user-info-grid">
        {/* Card de Informações Pessoais com Foto */}
        <div className="info-card personal-info">
          <div className="user-photo-container">
            {foto ? (
              <img 
                src={foto} 
                alt={`Foto de ${nomeCompleto}`} 
                className="user-photo"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
            ) : null}
            <div className="user-photo-placeholder" style={{display: foto ? 'none' : 'flex'}}>
              <span className="photo-icon">👤</span>
              <span className="photo-text">Sem foto</span>
            </div>
          </div>
          
          <div className="user-info-content">
            <div className="info-items">
              <div className="info-item">
                <span className="info-label">Nome Completo:</span>
                <span className="info-value">{nomeCompleto}</span>
              </div>
              
              <div className="info-item">
                <span className="info-label">Email:</span>
                <span className="info-value">{email}</span>
              </div>
              
              <div className="info-item">
                <span className="info-label">Morada:</span>
                <span className="info-value">{moradaCompleta || 'Não definida'}</span>
              </div>
              
              <div className="info-item">
                <span className="info-label">Escola:</span>
                <span className="info-value">{escolaAssociada || 'Não definida'}</span>
              </div>
              
              <div className="info-item">
                <span className="info-label">Município:</span>
                <span className="info-value">{municipio || 'Não definido'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoCard;
