import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Greeting from './Greeting';
import Passing from './passing_multiple_props';

function App() {
  return (
    <div>
      <h1>Component 1</h1>
    
        <Greeting person="alison" />

        <Passing  person="tima" from="elon"/>

    </div>
  );
}

export default App;
