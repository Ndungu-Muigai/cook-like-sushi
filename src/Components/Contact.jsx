/* eslint-disable no-unused-vars */
import { motion } from "motion/react"
import { useState } from "react"
import emailjs from "@emailjs/browser"
import { toast } from "react-toastify"

import { FaPhoneVolume } from "react-icons/fa6"
import { HiOutlineMail } from "react-icons/hi"
import { MdLocationOn } from "react-icons/md"
import { FaInstagram } from "react-icons/fa"
import { BsTwitterX } from "react-icons/bs";


const Contact = ({ handleMouseMove, spot }) =>
{
  //State to check if the message is being sent
  const [isSending, setIsSending] = useState(false)

  const [formData, setFormData] = useState(
  {
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleSubmit = e =>
  {
    e.preventDefault()
    const newFormData =
    {
      name: formData.name,
      reply_to: formData.email,
      subject: formData.subject,
      message: formData.message
    }
    setIsSending(true)
    emailjs.send("service_g7mlrw8", "template_lppq4qz", newFormData, "YZfD8aXcQI9Qwai9L")
    .then((result) =>
    {
      console.log(result.text)
      toast.success("Message sent successfully!")
      setFormData({ name: "", email: "", subject: "", message: "" })
    },
    (error) =>
    {
      console.log(error.text)
      toast.error("Failed to send message. Please try again later.")
    })
    .finally(() => setIsSending(false))
  }

  const handleChange = e =>
  {
    setFormData({...formData, [e.target.name]: e.target.value })
  }

  const contactInfo = [
    {
      icon: (
        <FaPhoneVolume className="h-5 w-5 sm:h-6 sm:w-6"/>
      ),
      title: "Call us",
      value: "+254103895767",
      link: "tel:+254103895767"
    },
    {
      icon: (
        <HiOutlineMail className="h-5 w-5 sm:h-6 sm:w-6"/>
      ),
      title: "Email",
      value: "cooklikesushi30@gmail.com",
      link: "mailto:cooklikesushi30@gmail.com"
    },
    {
      icon: (
        <MdLocationOn className="h-5 w-5 sm:h-6 sm:w-6"/>
      ),
      title: "Location",
      value: "Nairobi, Kenya"
    },
  ]

  const socialLinks = [
    {
      name: "Twitter",
      icon: (
        <BsTwitterX className="h-4 w-4 sm:h-5 sm:w-5"/>
      ),
      link: "https://twitter.com/"
    },
    {
      name: "Instagram",
      icon: (
        <FaInstagram className="h-4 w-4 sm:h-5 sm:w-5"/>
      ),
      link: "https://instagram.com/cooklikesushi_"
    }
  ]

  return (
    <section id="contact" className="relative min-h-screen pt-18 md:pt-14 px-4 sm:px-6 bg-linear-to-br from-green-100 via-emerald-200 to-green-300 text-green-900 overflow-hidden" onMouseMove={handleMouseMove}>
      {/* Noise */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')"}}/>

      {/* Stronger green vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.15),transparent_70%)] pointer-events-none" />

      {/* GREEN Spotlight (stronger) */}
      <div className="absolute inset-0 pointer-events-none" style={{background: `radial-gradient(600px at ${spot.x}px ${spot.y}px, rgba(16,185,129,0.35), transparent 45%)`, transition: "background 200ms ease-out",}} />

      {/* Floating blobs (richer greens) */}
      <motion.div animate={{ y: [0, -30, 0], x: [0, 20, 0] }} transition={{ duration: 8, repeat: Infinity }} className="absolute w-80 h-80 bg-green-500/30 blur-[140px] rounded-full top-10 left-10" />

      <motion.div animate={{ y: [0, 30, 0], x: [0, -20, 0] }} transition={{ duration: 10, repeat: Infinity }} className="absolute w-96 h-96 bg-emerald-500/30 blur-[140px] rounded-full bottom-20 right-10" />

      <div className="mx-auto relative z-10">

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left - Contact Info */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: false }}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-900">Get In <span className="text-emerald-600">Touch</span> </h2>
            <div className="w-24 h-1 bg-linear-to-r from-green-600 to-emerald-600 rounded mb-4 sm:mb-12" />

            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              {
                contactInfo.map((info, index) => (
                  <a key={index} href={info.link} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/80 backdrop-blur-sm border border-green-200 rounded-xl hover:border-emerald-500/50 transition-all duration-300 group shadow-lg">
                    <div className="p-2 sm:p-3 bg-green-500/20 text-emerald-600 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-green-600 text-xs sm:text-sm">{info.title}</p>
                      <p className="text-green-900 font-medium text-sm sm:text-base">{info.value}</p>
                    </div>
                  </a>
                ))
              }
            </div>

            <div>
              <p className="text-green-700 mb-2 sm:mb-4 text-sm sm:text-base">Follow us on</p>
              <div className="flex gap-3 sm:gap-4">
                {
                  socialLinks.map((social, index) => (
                    <a key={index} href={social.link} className="p-2 sm:p-3 bg-white/80 border border-green-200 rounded-lg text-green-600 hover:text-emerald-600 hover:border-emerald-500/50 transition-all duration-300 shadow-md" aria-label={social.name} target="_blank">{social.icon}</a>
                  ))
                }
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: false }}>
            <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-6 bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl border border-green-200">
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-green-700 mb-2 text-sm sm:text-base font-medium">Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-green-200 rounded-xl text-green-900 placeholder-green-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all text-sm sm:text-base shadow-sm" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-green-700 mb-2 text-sm sm:text-base font-medium">Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-green-200 rounded-xl text-green-900 placeholder-green-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all text-sm sm:text-base shadow-sm" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-green-700 mb-2 text-sm sm:text-base font-medium">Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-green-200 rounded-xl text-green-900 placeholder-green-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all text-sm sm:text-base shadow-sm" placeholder="Subject" />
              </div>
              <div>
                <label htmlFor="message" className="block text-green-700 mb-2 text-sm sm:text-base font-medium">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="4 sm:6" className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-green-200 rounded-xl text-green-900 placeholder-green-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all resize-none text-sm sm:text-base shadow-sm" placeholder="Your message here..." />
              </div>

              <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={`w-full py-3 sm:py-4 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 shadow-lg ${isSending ? "cursor-not-allowed opacity-70" : ""}`} disabled={isSending}>
                {
                  isSending
                  ?
                    <div className="flex items-center justify-center gap-2">
                      <span>Sending...</span>
                      <span className="loading loading-spinner loading-sm text-white"></span>
                    </div>
                  :
                    "Send Message"
                }
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact