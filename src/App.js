import React from 'react';
import Gallary from './components/Gallary';
import './App.css';

const App = () => {
  return (
    <div className='container mt-5 '>
      <Gallary lat={27.1751} lon={78.0421} />
    </div>
  );
};

export default App;
