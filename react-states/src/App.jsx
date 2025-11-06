import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Counter from './Counter'
import Counter2 from './Use_state'
import LikeButton from './LikeButton'

import ToggleCounter from './multipleUseState'
import MultiState2 from './multipleState2'

function App() {
  

return (
    <div>
      <Counter />
      <Counter2/>
      <LikeButton/>
<ToggleCounter/>
<MultiState2/>
      

    </div>
  );


}

export default App
