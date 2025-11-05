import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Greeting from './Greeting';
import Passing from './passing_multiple_props';
import Die from './default_props';

import ColorLiset from './Passing_array';

import ColorList from './ColorList';

import Rendering from './Rendering_array';

import DoubleDice from './DoubleDice';
import Button from './Button';

import Example from './non_click_event';

import Form from './form';


function App() {
  let colorArray = ["Red", "Green", "Blue", "Pink"];
  let colorObject = { r: "Red", g: "Green", b: "Blue", p: "Pink" };
  let options = [<li>"blue</li>, <li>"red</li>];


  return (
    <div>
      <h1>Component 1</h1>

      <Greeting person="alison" />

      <Passing person="tima" from="elon" />

      <Die num={20} />

      <Die />


      <ColorLiset colors={colorArray} colors2={colorObject.r} />




      <Rendering features={options} />



      <h1>🎲 Dice Game</h1>
      <DoubleDice />

      <Button/>

      <Example/>

      <Form/>

   
    </div>
  );
}

export default App;
