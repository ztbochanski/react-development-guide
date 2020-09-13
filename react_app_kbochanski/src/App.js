import React from 'react';
import './App.css';

import Composition from './Composition/Composition'
import State from './State/State'
import Playground from './Playground/Playground'

function App() {
  return (
    <div className="App">
    <Composition/>
    <State/>
    <Playground/>
    </div>
  );
}

export default App;
