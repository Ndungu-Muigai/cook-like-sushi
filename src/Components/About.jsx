/* eslint-disable no-unused-vars */
import { motion } from "motion/react"
import Logo from "../assets/Logo.png"

const About = ({handleMouseMove, spot}) => 
{
    return (
        <section id="about" className="relative min-h-screen flex items-center justify-between bg-linear-to-br from-green-100 via-emerald-200 to-green-300 text-green-900 overflow-hidden px-2 sm:px-6 pt-14" onMouseMove={handleMouseMove}>
            {/* Noise */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')"}}/>

            {/* Stronger green vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.15),transparent_70%)] pointer-events-none" />

            {/* GREEN Spotlight (stronger) */}
            <div className="absolute inset-0 pointer-events-none" style={{background: `radial-gradient(600px at ${spot.x}px ${spot.y}px, rgba(16,185,129,0.35), transparent 45%)`, transition: "background 200ms ease-out",}} />

            {/* Floating blobs (richer greens) */}
            <motion.div animate={{ y: [0, -30, 0], x: [0, 20, 0] }} transition={{ duration: 8, repeat: Infinity }} className="absolute w-80 h-80 bg-green-500/30 blur-[140px] rounded-full top-10 left-10" />

            <motion.div animate={{ y: [0, 30, 0], x: [0, -20, 0] }} transition={{ duration: 10, repeat: Infinity }} className="absolute w-96 h-96 bg-emerald-500/30 blur-[140px] rounded-full bottom-20 right-10" />

            {/* CONTENT */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: false }} className="relative z-10 w-full">
                <div className="grid md:grid-cols-2 gap-2 items-center">
                    {/* LOGO */}
                    <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: false }} whileHover={{ rotateX: 6, rotateY: -6 }} className="relative flex justify-center order-1 md:order-1">
                        {/* Strong glow */}
                        <div className="absolute -inset-10 bg-green-500/40 blur-3xl rounded-full" />
                        {/* Card */}
                        <div className="relative sm:w-80 sm:h-80 rounded-3xl bg-white/80 backdrop-blur-xl shadow-2xl border border-green-200 flex items-center justify-center">
                            <img src={Logo} className="w-full h-full object-contain" alt="Cook Like Sushi"/>
                        </div>
                    </motion.div>

                    {/* TEXT */}
                    <div className="text-center md:text-left order-2 md:order-2">
                        <motion.h1 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: false }} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-2">
                            <span className="bg-linear-to-r from-green-700 via-emerald-600 to-green-500 bg-clip-text text-transparent">About <span className="text-green-600">Us</span></span>
                        </motion.h1>

                        <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} viewport={{ once: false }} className="text-base sm:text-lg md:text-xl text-green-800 leading-relaxed mb-2">
                            Welcome to <strong>Cook Like Sushi</strong>, where we believe that healthy eating should be as enjoyable as it is nourishing. Our mission is to make nutritious cooking accessible, fun, and delicious for everyone.
                        </motion.p>

                        <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }} viewport={{ once: false }} className="text-base sm:text-lg md:text-xl text-green-800 leading-relaxed mb-3">
                            Founded by passionate food enthusiasts and nutrition experts, we provide comprehensive nutrition guides, personalized meal plans, and in-home cooking experiences that transform the way you approach food.
                        </motion.p>

                        <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }} viewport={{ once: false }} className="text-base sm:text-lg md:text-xl text-green-800 leading-relaxed mb-3">
                            Whether you're looking to improve your daily meal prep, discover new healthy recipes, or learn hands-on cooking techniques, we're here to guide you every step of the way. Eat well, live well, and love every bite with Cook Like Sushi.
                        </motion.p>

                        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.9 }} viewport={{ once: false }} className="grid grid-cols-2 gap-3 sm:gap-4 mb-4">
                            <div className="bg-white/80 backdrop-blur-sm border border-green-200 rounded-xl p-3 sm:p-4">
                                <span className="text-2xl sm:text-3xl font-bold text-green-600">{new Date().getFullYear() - 2026}+</span>
                                <p className="text-green-700 text-xs sm:text-sm">Years of Service</p>
                            </div>
                            <div className="bg-white/80 backdrop-blur-sm border border-green-200 rounded-xl p-3 sm:p-4">
                                <span className="text-2xl sm:text-3xl font-bold text-green-600">10+</span>
                                <p className="text-green-700 text-xs sm:text-sm">Happy Customers</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default About