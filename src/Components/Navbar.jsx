import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import Logo from '../assets/Logo.png'

const Navbar = ({ isVisible }) => {
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Testimonial', href: '#testimonial' },
    { name: 'Contact', href: '#contact' }
  ]

  const scrollToSection = (href) => {
    if (href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'testimonial', 'contact']
      const scrollPosition = window.scrollY + 100

      // If we're near the top, set to 'home' but use '/' in URL
      if (scrollPosition < 200) {
        setActiveSection('home')
        window.history.replaceState(null, null, '/')
        return
      }

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            // Update URL without triggering scroll
            window.history.replaceState(null, null, `#${section}`)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-green-200 shadow-lg"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={Logo} alt="Cook Like Sushi" className="w-48 h-12" />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  (activeSection === 'home' && item.name === 'Home') || (activeSection === item.href.slice(1) && item.name !== 'Home')
                    ? 'text-green-600 bg-green-100'
                    : 'text-green-700 hover:text-green-600 hover:bg-green-50'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-green-700 hover:text-green-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar