import './SecondPage.css';

import AthleteInfoForm from '../components/AthleteInfoForm';


const SecondPage = () => {

    return (
    <div className='container-second-page'>
      <h1>Informace o sportovci</h1>
      <div className='container-form'>
      <AthleteInfoForm />
      </div>  
    </div>
  );
};

export default SecondPage;