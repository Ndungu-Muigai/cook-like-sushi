import { useEffect, useState } from "react"
import { motion } from "motion/react"
import Logo from "../assets/Logo.png"

const titles = [
  "Nutrition guide & Meal Plans",
  "Daily Meal Prep Services",
  "In-home cooking experience"
]

const Hero = ({handleMouseMove, spot}) => 
{
    const [typed, setTyped] = useState("")
    const [titleIndex, setTitleIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)   

    useEffect(() => 
    {
        const full = titles[titleIndex % titles.length]
        const speed = isDeleting ? 40 : 90
        const pauseAtEnd = 1200

        const timer = setTimeout(() => 
        {
            if (!isDeleting) 
            {
                const next = full.slice(0, typed.length + 1)
                setTyped(next)

                if (next === full) 
                {
                    setTimeout(() => setIsDeleting(true), pauseAtEnd)
                }
            } 
            else 
            {
                const next = full.slice(0, typed.length - 1)
                setTyped(next)

                if (next.length === 0) 
                {
                    setIsDeleting(false)
                    setTitleIndex((i) => (i + 1) % titles.length)
                }
            }
        }, speed)

        return () => clearTimeout(timer)
    }, [typed, isDeleting, titleIndex])

    return (
        <section className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-green-100 via-emerald-200 to-green-300 text-green-900 overflow-hidden px-4 sm:px-6" onMouseMove={handleMouseMove}>
            {/* Noise */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')",}}/>

            {/* Stronger green vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.15),transparent_70%)] pointer-events-none" />

            {/* GREEN Spotlight (stronger) */}
            <div className="absolute inset-0 pointer-events-none" style={{background: `radial-gradient(600px at ${spot.x}px ${spot.y}px, rgba(16,185,129,0.35), transparent 45%)`, transition: "background 200ms ease-out",}} />

            {/* Floating blobs (richer greens) */}
            <motion.div animate={{ y: [0, -30, 0], x: [0, 20, 0] }} transition={{ duration: 8, repeat: Infinity }} className="absolute w-80 h-80 bg-green-500/30 blur-[140px] rounded-full top-10 left-10" />

            <motion.div animate={{ y: [0, 30, 0], x: [0, -20, 0] }} transition={{ duration: 10, repeat: Infinity }} className="absolute w-96 h-96 bg-emerald-500/30 blur-[140px] rounded-full bottom-20 right-10" />

            {/* CONTENT */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative z-10 max-w-6xl w-full">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    {/* TEXT */}
                    <div className="text-center md:text-left order-2 md:order-1">
                        {/* BRAND */}
                        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4">
                            <span className="bg-linear-to-r from-green-700 via-emerald-600 to-green-500 bg-clip-text text-transparent">Cook Like Sushi</span>
                            <span className="block text-base sm:text-lg md:text-xl text-green-800 mt-3 font-medium">Eat well. Live well. Love every bite.</span>
                        </motion.h1>

                        {/* TYPEWRITER */}
                        <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-base sm:text-xl md:text-2xl text-green-800 mb-6 font-medium h-10 flex items-center justify-center md:justify-start gap-2">
                            <span className="text-green-900 font-semibold">{typed}</span>
                            <span className="w-2 h-5 bg-green-900 animate-pulse rounded-sm" />
                        </motion.p>

                        {/* CTA */}
                        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#" className="btn bg-green-700 hover:bg-green-800 text-white border-none px-8 shadow-xl shadow-green-700/40"> Get Started</motion.a>
                        </motion.div>
                    </div>

                    {/* LOGO */}
                    <motion.div whileHover={{ rotateX: 6, rotateY: -6 }} className="relative flex justify-center order-1 md:order-2">
                        {/* Strong glow */}
                        <div className="absolute -inset-10 bg-green-500/40 blur-3xl rounded-full" />
                        {/* Card */}
                        <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-3xl bg-white/80 backdrop-blur-xl shadow-2xl border border-green-200 flex items-center justify-center p-6">
                            <img src={Logo} className="w-full h-full object-contain" alt="Cook Like Sushi"/>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default Hero