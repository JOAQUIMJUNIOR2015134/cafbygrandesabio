import './ReusableCard.css';

const ReusableCard = ({ 
  image, 
  title, 
  description, 
  button1Text, 
  button2Text, 
  onButton1Click, 
  onButton2Click,
  className = '' 
}) => {
  return (
    <div className={`reusable-card ${className}`}>
      {image && (
        <div className="reusable-card-image-container">
          <img 
            src={image} 
            alt={title || 'Card Image'} 
            className="reusable-card-image"
          />
        </div>
      )}
      
      <div className="reusable-card-content">
        {title && (
          <h3 className="reusable-card-title">{title}</h3>
        )}
        
        {description && (
          <p className="reusable-card-description">{description}</p>
        )}
        
        {(button1Text || button2Text) && (
          <div className="reusable-card-buttons">
            {button1Text && (
              <button 
                className="reusable-card-btn reusable-card-btn-primary"
                onClick={onButton1Click}
              >
                {button1Text}
              </button>
            )}
            {button2Text && (
              <button 
                className="reusable-card-btn reusable-card-btn-secondary"
                onClick={onButton2Click}
              >
                {button2Text}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReusableCard;
