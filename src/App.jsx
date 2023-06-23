import { useState } from 'react'

import './App.css'
import Logos from './components/Logos'
import Card from './components/Card'
import Boxes from './components/Boxes'
import HeadBlock from './components/HeadBlock'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeadBlock />
      <Boxes />


      <div className="iframeContainer">
        <iframe className="iframeStyle" src="https://my.spline.design/3dconcreteshapecopy-3885051708e0eace51b98a1f9fca836a/" frameborder="0" width="600px" height="450px"></iframe>
      </div>


      <footer>
        <div class="footer-content">
          <p>Author: Ayman Boulad</p>
          <p><a href="mailto:aymanboulad06@gmail.com">aymanboulad06@gmail.com</a></p>
          <p>Phone: 123-456-7890</p>
          <p>Address: 123 Main Street, City, Country</p>
        </div>
      </footer>
    </>
  )
}

export default App
