import { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nomeAluno: '',
    numeroContribuinte: '',
    escola: '',
    anoEscolaridade: '',
    contactoMovel: '',
    email: '',
    mensagem: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validação básica
    if (!formData.nomeAluno || !formData.numeroContribuinte || !formData.escola || !formData.anoEscolaridade || !formData.contactoMovel || !formData.email) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      setIsSubmitting(false);
      return;
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Por favor, insira um endereço de email válido.');
      setIsSubmitting(false);
      return;
    }

    // Validação de contacto móvel
    const phoneRegex = /^[0-9]{9}$/;
    if (!phoneRegex.test(formData.contactoMovel)) {
      alert('Por favor, insira um número de contacto móvel válido (9 dígitos).');
      setIsSubmitting(false);
      return;
    }

    try {
      // Simular envio de email
      // Em produção, você integraria com um serviço como EmailJS, Formspree, ou backend
      console.log('Dados do formulário:', formData);
      console.log('Email enviado para: caf.grandesabio@gmail.com');

      // Simular delay de envio
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Mostrar sucesso
      alert('A sua mensagem foi enviada com sucesso! Entraremos em contacto em breve.');

      // Limpar formulário
      setFormData({
        nomeAluno: '',
        numeroContribuinte: '',
        escola: '',
        anoEscolaridade: '',
        contactoMovel: '',
        email: '',
        mensagem: ''
      });

    } catch (error) {
      console.error('Erro ao enviar:', error);
      alert('Erro ao enviar mensagem. Tente novamente mais tarde.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-container">
      <div className="contact-form-card">
        <h2 className="contact-form-title">Contacte-nos</h2>

        <form onSubmit={handleSubmit} className="contact-form">
          
          {/* Grid Layout: Dados Pessoais à esquerda, Mensagem à direita */}
          <div className="form-grid">
            
            {/* Coluna Esquerda - Dados Pessoais */}
            <div className="form-column-left">
              
              <div className="form-group">
                <label htmlFor="nomeAluno" className="form-label">
                  Nome do Aluno <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="nomeAluno"
                  name="nomeAluno"
                  value={formData.nomeAluno}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Digite o nome completo do aluno"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="numeroContribuinte" className="form-label">
                  Número de Contribuinte <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="numeroContribuinte"
                  name="numeroContribuinte"
                  value={formData.numeroContribuinte}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Digite o número de contribuinte"
                  pattern="[0-9]{9}"
                  maxLength="9"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="escola" className="form-label">
                  Escola <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="escola"
                  name="escola"
                  value={formData.escola}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Digite o nome da escola"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="anoEscolaridade" className="form-label">
                  Ano de Escolaridade <span className="required">*</span>
                </label>
                <select
                  id="anoEscolaridade"
                  name="anoEscolaridade"
                  value={formData.anoEscolaridade}
                  onChange={handleChange}
                  className="form-select"
                  required
                >
                  <option value="">Selecione o ano de escolaridade</option>
                  <option value="1º ano">1º ano</option>
                  <option value="2º ano">2º ano</option>
                  <option value="3º ano">3º ano</option>
                  <option value="4º ano">4º ano</option>
                  <option value="5º ano">5º ano</option>
                  <option value="6º ano">6º ano</option>
                  <option value="7º ano">7º ano</option>
                  <option value="8º ano">8º ano</option>
                  <option value="9º ano">9º ano</option>
                  <option value="10º ano">10º ano</option>
                  <option value="11º ano">11º ano</option>
                  <option value="12º ano">12º ano</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="contactoMovel" className="form-label">
                  Contacto Móvel <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  id="contactoMovel"
                  name="contactoMovel"
                  value={formData.contactoMovel}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Digite o número de contacto móvel (ex: 912345678)"
                  pattern="[0-9]{9}"
                  maxLength="9"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Digite o seu endereço de email"
                  required
                />
              </div>
            </div>

            {/* Coluna Direita - Mensagem */}
            <div className="form-column-right">
              
              <div className="form-group form-group-full-height">
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  className="form-textarea form-textarea-full"
                  placeholder="Digite aqui qualquer informação adicional ou dúvidas sobre as atividades, horários, necessidades especiais do aluno, ou outras questões..."
                  rows="12"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Botão Enviar em baixo */}
          <div className="form-submit-section">
            <button
              type="submit"
              className={`form-submit-btn ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
          </div>
        </form>

        <div className="contact-info">
          <p className="contact-email">
            📧 Email: <strong>caf.grandesabio@gmail.com</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
