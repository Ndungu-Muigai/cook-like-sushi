import { motion } from "motion/react"

const Testimonial = ({ handleMouseMove, spot }) => 
{
    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Home Chef",
            quote: "Cook Like Sushi transformed my approach to healthy eating. Their meal plans are delicious and easy to follow!"
        },
        {
            name: "Mike Chen",
            role: "Fitness Enthusiast",
            quote: "The in-home cooking experience was incredible. I learned so much about nutrition and meal prep!"
        },
        {
            name: "Emily Davis",
            role: "Busy Professional",
            quote: "I never thought healthy cooking could be this convenient. Cook Like Sushi's services have been a game-changer for my lifestyle!"
        },
        {
            name: "David Lee",
            role: "Food Blogger",
            quote: "As a food blogger, I'm always looking for new recipes. Cook Like Sushi's nutrition guides have inspired some of my best content!"
        }
    ]
    return (
        <section id="testimonial"className="relative min-h-screen flex items-center justify-between bg-linear-to-br from-green-100 via-emerald-200 to-green-300 text-green-900 overflow-hidden px-2 sm:px-6 pt-14" onMouseMove={handleMouseMove}>
            {/* Noise */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')"}}/>

            {/* Stronger green vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.15),transparent_70%)] pointer-events-none" />

            {/* GREEN Spotlight (stronger) */}
            <div className="absolute inset-0 pointer-events-none" style={{background: `radial-gradient(600px at ${spot.x}px ${spot.y}px, rgba(16,185,129,0.35), transparent 45%)`, transition: "background 200ms ease-out",}} />

            {/* Floating blobs (richer greens) */}
            <motion.div animate={{ y: [0, -30, 0], x: [0, 20, 0] }} transition={{ duration: 8, repeat: Infinity }} className="absolute w-80 h-80 bg-green-500/30 blur-[140px] rounded-full top-6 left-10" />

            <motion.div animate={{ y: [0, 30, 0], x: [0, -20, 0] }} transition={{ duration: 10, repeat: Infinity }} className="absolute w-96 h-96 bg-emerald-500/30 blur-[140px] rounded-full bottom-12 right-10" />

            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false }} className="relative z-10 text-center">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3">
                    <span className="bg-linear-to-r from-green-700 via-emerald-600 to-green-500 bg-clip-text text-transparent">Customer Testimonials</span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                            viewport={{ once: false }}
                            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-green-200 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300"
                        >
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-linear-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div className="ml-4">
                                    <h3 className="font-semibold text-green-900">{testimonial.name}</h3>
                                    <p className="text-green-700 text-sm">{testimonial.role}</p>
                                </div>
                            </div>
                            <p className="text-green-800 italic">
                                "{testimonial.quote}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default Testimonial