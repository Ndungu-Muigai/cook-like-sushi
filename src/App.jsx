import './App.css'

import { useState, useEffect } from 'react'

import About from './Components/About'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Testimonial from './Components/Testimonial'
import Contact from './Components/Contact'

function App()
{
  const [spot, setSpot] = useState({ x: 0, y: 0 })
  const [showNavbar, setShowNavbar] = useState(false)

  const handleMouseMove = (e) =>
  {
      const { clientX, clientY, currentTarget } = e
      const rect = currentTarget.getBoundingClientRect()

      setSpot({x: clientX - rect.left, y: clientY - rect.top, })
  }

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('home')
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight
        // Show navbar when scrolled past 30% of hero section or 200px minimum
        setShowNavbar(window.scrollY > Math.min(heroHeight * 0.3, 200))
      } else {
        // Fallback: show navbar after scrolling 200px if hero section not found
        setShowNavbar(window.scrollY > 200)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Navbar isVisible={showNavbar} />
      <Hero handleMouseMove={handleMouseMove} spot={spot} />
      <About handleMouseMove={handleMouseMove} spot={spot} />
      <Testimonial handleMouseMove={handleMouseMove} spot={spot} />
      <Contact handleMouseMove={handleMouseMove} spot={spot} />
    </>
  )
}

export default App
