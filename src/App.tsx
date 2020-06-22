import React from 'react';
import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideStepper from './SideStepper/SideStepper';

const App: React.FC = () => {
  return (
    <div>
      <SideStepper steps={['Land Details', 'Building Details', 'Confirmation', 'Schedule a meeting']}>
        <p>Item 1</p>
        <p>Item 2</p>
        <p>Item 3</p>
        <p>Item 4</p>
      </SideStepper>
    </div>
  );
}

export default App;
