import React from 'react';
import Caroussel from './components/Caroussel/Caroussel';
import CarousselSlides from './components/Caroussel/CarousselSlides'


const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Informations Importantes</h1>
      <Caroussel slides={CarousselSlides} interval={3000} />
    </div>
  );
};

export default App;