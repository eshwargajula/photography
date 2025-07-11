"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronDown, Star, Play, Sparkles } from "lucide-react"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "/images/love-stories.webp",
      title: "Capturing Love Stories",
      subtitle: "Wedding Photography",
      description: "Timeless moments that tell your unique love story",
    },
    {
      image: "/images/authentic-portrait.webp",
      title: "Authentic Portraits",
      subtitle: "Portrait Sessions",
      description: "Revealing the beauty and essence of who you are",
    },
    {
      image: "/images/treking.webp",
      title: "Timeless Moments",
      subtitle: "Lifestyle Photography",
      description: "Life's precious moments captured with artistic vision",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-[70vh] md:h-[80vh] lg:h-[85vh] overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: index === currentSlide ? 1 : 0,
              scale: index === currentSlide ? 1 : 1.1,
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <Image
              src={slide.image || "/placeholder.svg?height=800&width=1920"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
          </motion.div>
        ))}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 hero-gradient" />

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -25, 0],
                opacity: [0.2, 0.7, 0.2],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="inline-flex items-center gap-2 glass-dark px-4 py-2 rounded-full mb-4 glow-effect"
            >
              <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
              <span className="text-sm font-semibold text-white">Award-Winning Photographer</span>
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            </motion.div>

            {/* Main Content */}
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-white space-y-4"
            >
              <div className="space-y-3">
                <motion.h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <span className="block">{slides[currentSlide].title.split(" ")[0]}</span>
                  <span className="text-gradient-gold italic block">
                    {slides[currentSlide].title.split(" ").slice(1).join(" ")}
                  </span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="flex items-center justify-center gap-3"
                >
                  <div className="w-12 h-px bg-gradient-to-r from-yellow-400 to-transparent" />
                  <span className="text-base tracking-wider uppercase font-medium">
                    {slides[currentSlide].subtitle}
                  </span>
                  <div className="w-12 h-px bg-gradient-to-l from-yellow-400 to-transparent" />
                </motion.div>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-base md:text-lg text-white/90 max-w-xl mx-auto leading-relaxed font-light"
              >
                {slides[currentSlide].description}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-3 justify-center pt-3"
              >
                <motion.a
                  href="/portfolio"
                  className="btn-gold group relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Play className="w-4 h-4" />
                    View Portfolio
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>

                <motion.a
                  href="/contact"
                  className="btn-secondary group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Book Session
                  </span>
                </motion.a>
              </motion.div>

              {/* Social Proof */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
              >
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.2 + i * 0.1 }}
                    >
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </div>
                <div className="text-white/90 text-center sm:text-left">
                  <div className="text-base font-semibold">500+ Happy Clients</div>
                  <div className="text-sm text-white/70">Worldwide Excellence</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`relative overflow-hidden rounded-full transition-all duration-500 ${
              index === currentSlide ? "w-8 h-3 bg-white" : "w-3 h-3 bg-white/40 hover:bg-white/60"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            {index === currentSlide && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full"
                layoutId="activeSlide"
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 right-4 text-white z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-1 glass-dark px-2 py-2 rounded-full">
          <span className="text-xs uppercase tracking-wider font-medium">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </motion.div>
    </section>
  )
}
