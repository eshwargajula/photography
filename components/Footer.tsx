"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Camera, Instagram, Facebook, Twitter, Mail, Phone, MapPin, Heart, ArrowRight } from "lucide-react"

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram", handle: "@elena_photography" },
  { icon: Facebook, href: "#", label: "Facebook", handle: "Elena Rodriguez Photography" },
  { icon: Twitter, href: "#", label: "Twitter", handle: "@elena_photo" },
]

const quickLinks = [
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
]

const services = [
  { name: "Wedding Photography", href: "/services#wedding" },
  { name: "Portrait Sessions", href: "/services#portrait" },
  { name: "Event Photography", href: "/services#event" },
  { name: "Commercial Work", href: "/services#commercial" },
]

export default function Footer() {
  return (
    <footer className="section-gradient-dark text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container-custom py-12 sm:py-16 lg:py-20 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <div className="relative">
                <Camera className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-400" />
                <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400 rounded-full animate-pulse" />
              </div>
              <div>
                <div className="text-lg sm:text-2xl font-serif font-semibold">Elena Rodriguez</div>
                <div className="text-xs sm:text-sm uppercase tracking-wider text-white/70 -mt-1">Photography</div>
              </div>
            </div>
            <p className="text-white/80 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Capturing lifes most precious moments with artistic vision, emotional depth, and timeless elegance that
              tells your unique story.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 sm:w-12 sm:h-12 glass-dark rounded-2xl flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  title={social.handle}
                >
                  <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg sm:text-xl font-serif font-semibold mb-4 sm:mb-6 text-yellow-400">Quick Links</h3>
            <ul className="space-y-3 sm:space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-yellow-400 transition-colors duration-200 text-sm sm:text-base flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg sm:text-xl font-serif font-semibold mb-4 sm:mb-6 text-yellow-400">Services</h3>
            <ul className="space-y-3 sm:space-y-4">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-white/80 hover:text-yellow-400 transition-colors duration-200 text-sm sm:text-base flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg sm:text-xl font-serif font-semibold mb-4 sm:mb-6 text-yellow-400">Get In Touch</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href="mailto:elena@photography.com"
                    className="text-white/80 hover:text-yellow-400 transition-colors duration-200 text-sm sm:text-base break-all"
                  >
                    elena@photography.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href="tel:+14155551234"
                    className="text-white/80 hover:text-yellow-400 transition-colors duration-200 text-sm sm:text-base"
                  >
                    +1 (415) 555-1234
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-white/80 text-sm sm:text-base">San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6 sm:mt-8">
              <h4 className="text-sm font-semibold mb-3 sm:mb-4 uppercase tracking-wider text-yellow-400">
                Stay Updated
              </h4>
              <p className="text-white/70 mb-3 sm:mb-4 text-xs sm:text-sm">
                Subscribe for photography tips and latest work updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 sm:px-4 sm:py-3 glass-dark border border-white/20 rounded-xl text-sm focus:outline-none focus:border-yellow-400 text-white placeholder-white/50"
                />
                <button className="px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-xl hover:from-yellow-500 hover:to-yellow-600 transition-all duration-200 text-sm font-semibold whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        {/* Bottom Bar */}
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6, delay: 0.4 }}
  viewport={{ once: true }}
  className="border-t border-white/20 mt-12 sm:mt-16 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
>
  <div className="flex flex-col md:flex-row items-center gap-2 text-center md:text-left">
    <p className="text-white/70 text-xs sm:text-sm">
      &copy; {new Date().getFullYear()} Elena Rodriguez Photography. All rights reserved.
    </p>
    <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-400" />
  </div>

  <p className="text-white/60 text-xs sm:text-sm text-center md:text-left">
    Developed by{" "}
    <a
      href="https://www.bespokesoftware.in"
      target="_blank"
      rel="noopener noreferrer"
      className="text-yellow-400 hover:underline"
    >
      Bespoke Software Solutions
    </a>
  </p>

  <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
    <Link href="/privacy" className="text-white/70 hover:text-yellow-400 transition-colors duration-200">
      Privacy Policy
    </Link>
    <Link href="/terms" className="text-white/70 hover:text-yellow-400 transition-colors duration-200">
      Terms of Service
    </Link>
  </div>
</motion.div>

        
      </div>
      
    </footer>
  )
}
