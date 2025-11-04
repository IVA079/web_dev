import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Greeting from './Greeting';
import Passing from './passing_multiple_props';
import Die from './default_props';

import ColorLiset from './Passing_array';

import ColorList from './ColorList';


function App() {
   let colorArray = ["Red", "Green", "Blue", "Pink"];
   let colorObject={r:"Red", g:"Green", b:"Blue", p:"Pink"};
  return (
    <div>
      <h1>Component 1</h1>
    
        <Greeting person="alison" />

        <Passing person="tima" from="elon"/>

        <Die  num={20}   />

        <Die/>


     <ColorLiset colors={colorArray} colors2={colorObject}/>

   


     <ColorList colors={colorArray}/>

    </div>
  );
}

export default App;
