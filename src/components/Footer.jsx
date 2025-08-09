import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          
          {/* Seção Principal */}
          <div className="footer-section footer-main">
            <h3 className="footer-title">CAFBYGRANDESABIO</h3>
            <p className="footer-description">
              Centro de Actividades de Férias dedicado ao desenvolvimento integral 
              das crianças, proporcionando experiências educativas e enriquecedoras.
            </p>
          </div>

          {/* Contactos */}
          <div className="footer-section">
            <h4 className="footer-section-title">Contactos</h4>
            <div className="footer-contact">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span className="contact-text">caf.grandesabio@gmail.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <span className="contact-text">+351 xxx xxx xxx</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span className="contact-text">Portugal</span>
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
              © {new Date().getFullYear()} CAFBYGRANDESABIO. Todos os direitos reservados.
            </p>
            <div className="footer-social">
              <span className="footer-social-text">Siga-nos:</span>
              <div className="social-links">
                <a 
                  href="https://www.facebook.com/cafbygrandesabio" 
                  className="social-link facebook" 
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  f
                </a>
                <a 
                  href="https://www.instagram.com/cafbygrandesabio" 
                  className="social-link instagram" 
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📷
                </a>
                <a 
                  href="https://www.youtube.com/channel/cafbygrandesabio" 
                  className="social-link youtube" 
                  aria-label="YouTube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ▶
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
