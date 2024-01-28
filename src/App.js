import React from 'react';
import { Drivers } from './components/Drivers';
import { Assignments } from './components/Assignments';
import { Reset } from './components/Reset';
import './App.css';

function App() {

  return (
    <div className='App container'>
      <Reset></Reset>
      <div className="row">
        <div className="col-lg-4">
          <Drivers></Drivers>
        </div>
        <div className="col-lg-8">
          <Assignments></Assignments>
        </div>
      </div>
    </div>
  )
}

export default App
