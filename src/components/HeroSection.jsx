import './HeroSection.css';

const HeroSection = ({ image, onInscrever, onSaberMais }) => {
  return (
    <section className="hero-section">
      <div className="hero-image-container">
        <img 
          src={image} 
          alt="Hero Image" 
          className="hero-image"
        />
        <div className="hero-overlay">
          <div className="hero-buttons">
            <button 
              className="hero-btn hero-btn-primary"
              onClick={onInscrever}
            >
              Inscrever
            </button>
            <button 
              className="hero-btn hero-btn-secondary"
              onClick={onSaberMais}
            >
              Saber Mais
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
