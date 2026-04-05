import './App.css'

import { useState } from 'react'

import About from './Components/About'
import Hero from './Components/Hero'

function App() 
{
  const [spot, setSpot] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => 
  {
      const { clientX, clientY, currentTarget } = e
      const rect = currentTarget.getBoundingClientRect()

      setSpot({x: clientX - rect.left, y: clientY - rect.top, })
  }

  return (
    <>
      <Hero handleMouseMove={handleMouseMove} spot={spot} />
      <About handleMouseMove={handleMouseMove} spot={spot} />
    </>
  )
}

export default App
