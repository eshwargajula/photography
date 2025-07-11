"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah & Michael Johnson",
    role: "Wedding Clients",
    content:
      "Alexander captured our wedding day with such artistry and emotion. Every photo tells our love story perfectly. His attention to detail and ability to capture candid moments is unmatched.",
    rating: 5,
    image: "/images/testimonials/sarah.webp",
  },
  {
    name: "Amanda Rodriguez",
    role: "Portrait Client",
    content:
      "The portrait session with Alexander was incredible. He made me feel so comfortable and confident. The photos are absolutely stunning and I treasure them forever.",
    rating: 5,
    image: "/images/testimonials/amanda.webp",
  },
  {
    name: "David & Lisa Chen",
    role: "Engagement Clients",
    content:
      "Alexander's creativity and professionalism exceeded all our expectations. He captured the essence of our relationship beautifully. We can't wait to work with him for our wedding!",
    rating: 5,
    image: "/image/testimonials/david.webp",
  },
  {
    name: "Jennifer Martinez",
    role: "Corporate Client",
    content:
      "Working with Alexander for our company headshots was fantastic. He brought out the best in everyone and delivered professional, high-quality images that represent our brand perfectly.",
    rating: 5,
    image: "/images/testimonials/jennifer.webp",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    setIsAutoPlaying(false)
  }

  return (
    <section className="section-padding bg-primary text-primary-foreground overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 text-balance">
            What Clients <span className="text-gold italic">Say</span>
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Testimonials from couples and clients who trusted us with their most precious moments
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white hover:text-gold transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white hover:text-gold transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonials */}
          <div className="relative h-96 md:h-80">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col justify-center text-center px-8"
              >
                <Quote className="w-12 h-12 text-gold mx-auto mb-6" />

                <blockquote className="text-lg md:text-xl lg:text-2xl font-serif leading-relaxed mb-8 text-primary-foreground/90">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                <div className="flex items-center justify-center gap-2 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-current" />
                  ))}
                </div>

                <div className="flex items-center justify-center gap-4">
                  <Image
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div className="text-left">
                    <div className="text-lg font-serif font-semibold text-gold mb-1">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-sm text-primary-foreground/70 uppercase tracking-wider">
                      {testimonials[currentIndex].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsAutoPlaying(false)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-gold scale-125" : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
