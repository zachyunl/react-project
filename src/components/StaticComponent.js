import './StaticComponent.css';

const StaticComponent = ({ imagePath, text }) => {
  return (
    <div className="StaticComponent">
      <img src={imagePath} alt="Obrázek sportu" />
      <p>{text}</p>
    </div>
  );
};

export default StaticComponent;