import './SecondPage.css';

import AthleteInfoForm from '../components/AthleteInfoForm';


const SecondPage = () => {

    return (
    <div className='container-second-page'>
      <h1>Informace o sportovci</h1>
      <AthleteInfoForm />
      
    </div>
  );
};

export default SecondPage;