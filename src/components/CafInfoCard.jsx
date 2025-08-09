import './CafInfoCard.css';

const CafInfoCard = ({ image, title = "CAF_Santa Maria da Feira" }) => {
  return (
    <section className="caf-info-section">
      <div className="caf-card">
        <div className="caf-image-container">
          <img 
            src={image} 
            alt="Centro de Actividades de Férias" 
            className="caf-image"
          />
        </div>
        <div className="caf-content">
          <h2 className="caf-title">{title}</h2>
          <div className="caf-description">
            <p>
              A <strong>Componente de Apoio à Família (CAF)</strong> é um espaço dedicado ao 
              desenvolvimento integral das crianças durante os períodos de férias escolares, 
              proporcionando experiências educativas, lúdicas e enriquecedoras.
            </p>
            <br></br>
            <p>
              No nosso CAF, as crianças têm a oportunidade de participar em diversas atividades 
              que estimulam a criatividade, promovem o convívio social e desenvolvem competências 
              físicas, cognitivas e emocionais através de:
            </p>
            <p>
              Com uma equipa qualificada e experiente, garantimos um ambiente seguro, 
              estimulante e divertido, onde cada criança pode explorar os seus interesses 
              e desenvolver novas competências, criando memórias inesquecíveis durante 
              as suas férias.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CafInfoCard;
