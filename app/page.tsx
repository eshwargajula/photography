"use client"

import Hero from "@/components/Hero"
import FeaturedWork from "@/components/FeaturedWork"
import { motion } from "framer-motion"
import Image from "next/image"
import { Camera, Award, Users, Star, Heart, Sparkles, ArrowRight, Quote } from "lucide-react"

const stats = [
  { icon: Camera, value: "2000+", label: "Photos Captured", color: "text-blue-500" },
  { icon: Award, value: "50+", label: "Awards Won", color: "text-yellow-500" },
  { icon: Users, value: "500+", label: "Happy Clients", color: "text-green-500" },
  { icon: Star, value: "5.0", label: "Average Rating", color: "text-purple-500" },
]

const testimonials = [
  {
    name: "Sarah & Michael",
    role: "Wedding Clients",
    content:
      "Elena captured our wedding day with such artistry and emotion. Every photo tells our love story perfectly.",
    image: "/images/testimonials/sarah.webp",
    rating: 5,
  },
  {
    name: "Amanda Rodriguez",
    role: "Portrait Client",
    content:
      "The portrait session was incredible. Elena made me feel so comfortable and the photos are absolutely stunning.",
    image: "/images/testimonials/amanda.webp",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Corporate Client",
    content: "Professional, creative, and delivered exactly what we needed for our brand. Highly recommended!",
    image: "/images/testimonials/david.webp",
    rating: 5,
  },
]

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Enhanced Stats Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-16 h-16 sm:w-32 sm:h-32 bg-yellow-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-20 h-20 sm:w-40 sm:h-40 bg-purple-400 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-purple-100 text-purple-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              Proven Excellence
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif mb-4">
              Numbers That <span className="text-gradient">Speak Volumes</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="card-elegant p-3 sm:p-6 card-hover">
                  <div
                    className={`inline-flex items-center justify-center w-10 h-10 sm:w-16 sm:h-16 rounded-2xl mb-2 sm:mb-4 ${stat.color} bg-gradient-to-br from-current/10 to-current/5 group-hover:scale-110 transition-transform duration-500`}
                  >
                    <stat.icon className="w-5 h-5 sm:w-8 sm:h-8" />
                  </div>
                  <div className="text-lg sm:text-2xl md:text-3xl font-serif font-bold text-primary mb-1 sm:mb-2 group-hover:text-yellow-600 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider font-semibold">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FeaturedWork />

      {/* Enhanced About Preview */}
      <section className="section-padding section-gradient-dark text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container-custom relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4">
                <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-400" />
                Meet the Artist
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif mb-4">
                About <span className="text-gradient-gold italic">Elena</span>
              </h2>

              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base lg:text-lg leading-relaxed">
                <p className="text-white/90">
                  With over 10 years of experience, I specialize in capturing authentic emotions and creating timeless
                  memories that tell your unique story with artistic vision and emotional depth.
                </p>
                <p className="text-white/80">
                  Based in San Francisco, I travel worldwide to document love stories, family moments, and life's most
                  precious celebrations. Every photograph is crafted with passion and precision.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-3 mt-4 sm:mt-6">
                <div className="glass-dark px-2 sm:px-3 py-1 rounded-full">
                  <span className="text-yellow-400 font-semibold text-xs sm:text-sm">10+ Years</span>
                </div>
                <div className="glass-dark px-2 sm:px-3 py-1 rounded-full">
                  <span className="text-yellow-400 font-semibold text-xs sm:text-sm">Worldwide</span>
                </div>
                <div className="glass-dark px-2 sm:px-3 py-1 rounded-full">
                  <span className="text-yellow-400 font-semibold text-xs sm:text-sm">Award Winner</span>
                </div>
              </div>

              <motion.a
                href="/about"
                className="btn-gold mt-4 sm:mt-6 group inline-flex"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2 text-sm sm:text-base">
                  Learn More About Me
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-12 h-12 sm:w-20 sm:h-20 bg-yellow-400/20 rounded-full blur-2xl animate-pulse" />
                <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-purple-400/20 rounded-full blur-2xl animate-pulse" />

                <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-4xl max-w-sm mx-auto lg:max-w-none">
                  <Image
                    src="/images/elina.webp"
                    alt="Elena Rodriguez - Photographer"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Overlay Badge */}
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4 glass-dark px-2 sm:px-3 py-1 rounded-full">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-white text-xs sm:text-sm font-semibold">Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4">
              <Quote className="w-3 h-3 sm:w-4 sm:h-4" />
              Client Love
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif mb-4">
              What Clients <span className="text-gradient italic">Say</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="card-elegant p-4 sm:p-6 card-hover"
              >
                <div className="flex items-center gap-1 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-muted-foreground mb-3 sm:mb-4 leading-relaxed italic text-xs sm:text-sm">
                  {testimonial.content}
                </blockquote>

                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="relative">
                    <Image
                      src={testimonial.image || "/placeholder.webp"}
                      alt={testimonial.name}
                      width={32}
                      height={32}
                      className="rounded-full sm:w-10 sm:h-10"
                    />
                    <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full border border-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary text-xs sm:text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="section-padding bg-gradient-to-br from-yellow-50 via-white to-purple-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-200/20 to-purple-200/20" />
        </div>

        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-purple-100 text-purple-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              Ready to Begin?
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-serif mb-3 sm:mb-4 text-balance">
              Ready to Create Something <span className="text-gradient">Extraordinary</span>?
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto px-4">
              Let's work together to capture your most precious moments with artistry, emotion, and timeless elegance.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <motion.a
                href="/contact"
                className="btn-primary group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2 text-sm sm:text-base">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                  Book Your Session
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>

              <motion.a
                href="/portfolio"
                className="btn-secondary group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2 text-sm sm:text-base">
                  <Camera className="w-4 h-4 sm:w-5 sm:h-5" />
                  View Full Portfolio
                </span>
              </motion.a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Award className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
                <span className="text-xs sm:text-sm font-medium">Award Winning</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                <span className="text-xs sm:text-sm font-medium">500+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-purple-500" />
                <span className="text-xs sm:text-sm font-medium">5.0 Rating</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
