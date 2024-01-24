import './StaticComponent.css';

const StaticComponent = ({ imagePath, text }) => {
    return (
      <div>
        <img src={imagePath} alt="Static Image" style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }} />
        <p>{text}</p>
      </div>
    );
  };
  
  export default StaticComponent;
