import './Footer.css';
import facebookIcon from '../assets/Icons/facebook.png';
import instagramIcon from '../assets/Icons/instagram.png';
import youtubeIcon from '../assets/Icons/youtube.png';
import emailIcon from '../assets/Icons/email.png';
import telephoneIcon from '../assets/Icons/telephone.png';
import locationIcon from '../assets/Icons/Location.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          
          {/* Seção Principal */}
          <div className="footer-section footer-main">
            <h3 className="footer-title">CAF_Compomente de Apoio a Familia</h3>
            <p className="footer-description">
              A CAF - Componente de Apoio à Família - é o conjunto de atividades destinadas a assegurar o acompanhamento dos alunos, antes e/ou depois das componentes do currículo, bem como durante os períodos de interrupção letiva. Funciona como um apoio aos pais e encarregados de educação, para que os alunos possam permanecer na escola para além do período das atividades letivas.
            </p>
          </div>

          {/* Contactos */}
          <div className="footer-section">
            <h4 className="footer-section-title">Contactos</h4>
            <div className="footer-contact">
              <div className="contact-item">
                <img src={emailIcon} alt="Email" className="contact-icon-img" />
                <span className="contact-text">caf.grandesabio@gmail.com</span>
              </div>
              <div className="contact-item">
                <img src={telephoneIcon} alt="Telephone" className="contact-icon-img" />
                <span className="contact-text">+351 928 112 861</span>
              </div>
              <div className="contact-item">
                <img src={locationIcon} alt="Location" className="contact-icon-img" />
                <span className="contact-text">Rua 1 da Urbanização da Lavoura, 106
4535-329 Paços de Brandão</span>
              </div>
            </div>
          </div>

        </div>

        {/* Linha de separação */}
        <div className="footer-divider"></div>

        {/* Rodapé inferior */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {new Date().getFullYear()} CAF_Compomente de Apoio a Familia. Todos os direitos reservados.
            </p>
            <div className="footer-social">
              <span className="footer-social-text">Siga-nos:</span>
              <div className="social-links">
                <a 
                  href="https://www.facebook.com/gsabio/?locale=pt_PT" 
                  className="social-link facebook" 
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={facebookIcon} alt="Facebook" className="social-icon" />
                </a>
                <a 
                  href="https://www.instagram.com/caf.grandesabio/" 
                  className="social-link instagram" 
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instagramIcon} alt="Instagram" className="social-icon" />
                </a>
                <a 
                  href="https://www.youtube.com/channel/UCH894G8P8oXAPmwJmdto1qQ" 
                  className="social-link youtube" 
                  aria-label="YouTube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={youtubeIcon} alt="YouTube" className="social-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
