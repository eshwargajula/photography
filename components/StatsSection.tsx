"use client"

import { motion } from "framer-motion"
import { Camera, Award, Users, Heart, Star, Globe } from "lucide-react"

const stats = [
  {
    icon: Camera,
    label: "Photos Captured",
    value: "50,000+",
    description: "Precious moments preserved",
  },
  {
    icon: Heart,
    label: "Happy Couples",
    value: "500+",
    description: "Love stories documented",
  },
  {
    icon: Award,
    label: "Awards Won",
    value: "25",
    description: "Industry recognitions",
  },
  {
    icon: Star,
    label: "5-Star Reviews",
    value: "1,200+",
    description: "Client testimonials",
  },
  {
    icon: Users,
    label: "Years Experience",
    value: "10+",
    description: "Professional expertise",
  },
  {
    icon: Globe,
    label: "Countries Visited",
    value: "35",
    description: "Destination weddings",
  },
]

export default function StatsSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 text-balance">
            A Decade of <span className="text-gradient">Excellence</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Numbers that reflect our commitment to capturing lifes most precious moments
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group text-center p-6 bg-card rounded-lg shadow-sm card-hover"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-sm font-medium text-foreground mb-1 uppercase tracking-wide">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
