import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import apiService from '../services/apiService';
import './UserAccess.css';

const UserAccess = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    contribuinte: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [utilizadorLogado, setUtilizadorLogado] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Verificar se há utilizador logado
    const userData = localStorage.getItem('cafUser');
    if (userData) {
      try {
        const user = JSON.parse(userData);
        setUtilizadorLogado(user);
      } catch (error) {
        localStorage.removeItem('cafUser');
      }
    }
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setMessage(''); // Limpar mensagens ao abrir/fechar
  };

  const handleLogout = () => {
    localStorage.removeItem('cafUser');
    setUtilizadorLogado(null);
    setIsDropdownOpen(false);
    navigate('/');
  };

  const goToAreaPessoal = () => {
    navigate('/area-pessoal');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    // Validação básica
    if (!formData.email || !formData.contribuinte) {
      setMessage('Por favor, preencha todos os campos');
      setIsLoading(false);
      return;
    }

    // Validação do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setMessage('Por favor, introduza um email válido');
      setIsLoading(false);
      return;
    }

    // Validação do número de contribuinte português (9 dígitos)
    const contribuinteRegex = /^\d{9}$/;
    if (!contribuinteRegex.test(formData.contribuinte)) {
      setMessage('Número de contribuinte deve ter 9 dígitos');
      setIsLoading(false);
      return;
    }

    try {
      // Chamar API para verificar credenciais
      const resultado = await apiService.loginUtilizador(formData.email, formData.contribuinte);
      
      if (resultado.success) {
        setMessage(`Bem-vindo, ${resultado.utilizador.nome}! Redirecionando...`);
        
        // Guardar dados do utilizador no localStorage
        localStorage.setItem('cafUser', JSON.stringify(resultado.utilizador));
        
        // Redirecionar para área pessoal
        setTimeout(() => {
          setFormData({ email: '', contribuinte: '' });
          setIsDropdownOpen(false);
          setMessage('');
          setUtilizadorLogado(resultado.utilizador);
          navigate('/area-pessoal');
        }, 1500);
      }

    } catch (error) {
      console.error('❌ Erro de autenticação:', error);
      
      // Tratamento específico de diferentes tipos de erro
      if (error.message.includes('conexão') || error.message.includes('fetch')) {
        setMessage('❌ Erro de conexão. Verifique se o servidor está funcionando.');
      } else if (error.message.includes('401') || error.message.includes('Credenciais inválidas')) {
        setMessage('❌ Email ou número de contribuinte incorretos');
      } else if (error.message.includes('400') || error.message.includes('inválido')) {
        setMessage('❌ Dados inválidos. Verifique o formato');
      } else if (error.message.includes('500')) {
        setMessage('❌ Erro no servidor. Tente novamente mais tarde');
      } else if (error.message.includes('TypeError')) {
        setMessage('❌ Problema de rede. Verifique sua conexão');
      } else {
        setMessage(`❌ Erro: ${error.message}`);
      }
    }

    setIsLoading(false);
  };

  return (
    <div className="user-access">
      {utilizadorLogado ? (
        // Utilizador logado - mostrar menu de utilizador
        <>
          <button 
            className="user-access-button logged-in"
            onClick={toggleDropdown}
            aria-label="Menu do utilizador"
          >
            <span className="user-icon">👤</span>
            <span className="user-text">{utilizadorLogado.nome}</span>
            <span className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}>▼</span>
          </button>

          {isDropdownOpen && (
            <div className="user-dropdown logged-in-dropdown">
              <div className="dropdown-header">
                <h3>Olá, {utilizadorLogado.nome}!</h3>
                <p>{utilizadorLogado.email}</p>
              </div>

              <div className="user-menu">
                <button 
                  className="menu-item" 
                  onClick={goToAreaPessoal}
                >
                  <span className="menu-icon">🏠</span>
                  <span>Área Pessoal</span>
                </button>

                <button 
                  className="menu-item logout" 
                  onClick={handleLogout}
                >
                  <span className="menu-icon">🚪</span>
                  <span>Terminar Sessão</span>
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        // Utilizador não logado - mostrar formulário de login
        <>
          <button 
            className="user-access-button"
            onClick={toggleDropdown}
            aria-label="Acesso de utilizador"
          >
            <span className="user-icon">👤</span>
            <span className="user-text">Área Pessoal</span>
            <span className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}>▼</span>
          </button>

          {isDropdownOpen && (
            <div className="user-dropdown">
              <div className="dropdown-header">
                <h3>Acesso à Área Pessoal</h3>
                <p>Introduza os seus dados para aceder</p>
              </div>

              <form className="user-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu.email@exemplo.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contribuinte">Nº Contribuinte:</label>
                  <input
                    type="text"
                    id="contribuinte"
                    name="contribuinte"
                    value={formData.contribuinte}
                    onChange={handleInputChange}
                    placeholder="123456789"
                    maxLength="9"
                    pattern="\d{9}"
                    required
                  />
                </div>

                {message && (
                  <div className={`message ${message.includes('Erro') || message.includes('preencha') || message.includes('válido') || message.includes('dígitos') ? 'error' : 'success'}`}>
                    {message}
                  </div>
                )}

                <button 
                  type="submit" 
                  className="submit-button"
                  disabled={isLoading}
                >
                  {isLoading ? 'A verificar...' : 'Aceder'}
                </button>
              </form>

              <div className="dropdown-footer">
                <p>
                  <small>
                    Não tem acesso? <br/>
                    <a href="/contactos">Contacte-nos para mais informações</a>
                  </small>
                </p>
              </div>
            </div>
          )}
        </>
      )}

      {/* Overlay para fechar dropdown */}
      {isDropdownOpen && (
        <div 
          className="dropdown-overlay"
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </div>
  );
};

export default UserAccess;
