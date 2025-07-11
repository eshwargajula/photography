"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Award, Camera, Heart, Users, Star, Sparkles } from "lucide-react"

const timeline = [
  {
    year: "2014",
    event: "Photography Journey Begins",
    description: "Picked up my first camera and discovered my passion for capturing life's beautiful moments",
  },
  {
    year: "2016",
    event: "First Wedding Photography",
    description: "Shot my first wedding and realized my calling in documenting love stories",
  },
  {
    year: "2018",
    event: "Photography Studio Launch",
    description: "Opened my professional studio in San Francisco, expanding my creative possibilities",
  },
  {
    year: "2020",
    event: "International Recognition",
    description: "Won multiple international photography awards and gained global recognition",
  },
  {
    year: "2022",
    event: "Featured in Publications",
    description: "Work featured in top photography and wedding magazines worldwide",
  },
  {
    year: "2024",
    event: "Milestone Achievement",
    description: "Celebrated 500+ happy clients and 10 years of professional excellence",
  },
]

const achievements = [
  { icon: Award, title: "Wedding Photographer of the Year", year: "2023", color: "text-yellow-500" },
  { icon: Camera, title: "Best Portrait Series", year: "2022", color: "text-blue-500" },
  { icon: Heart, title: "Couples Choice Award", year: "2021-2024", color: "text-red-500" },
  { icon: Users, title: "Top 10 SF Photographers", year: "2023", color: "text-green-500" },
]

const skills = [
  { name: "Wedding Photography", level: 98 },
  { name: "Portrait Photography", level: 95 },
  { name: "Photo Editing", level: 92 },
  { name: "Creative Direction", level: 90 },
]

export default function AboutPage() {
  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-4 order-2 lg:order-1"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4">
                <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
                Meet the Artist
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-4 text-balance">
                About <span className="text-gradient italic">Elena</span>
              </h1>

              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base lg:text-lg leading-relaxed">
                <p className="text-muted-foreground">
                  Photography is not just about capturing what you see, but about revealing what you feel and the
                  stories that unfold in every moment.
                </p>
                <p className="text-muted-foreground">
                  With over 10 years of experience in photography, I specialize in capturing lifes most precious
                  moments with artistic vision and emotional depth. My journey began with a simple love for storytelling
                  through images, and has evolved into a passion for creating timeless memories.
                </p>
                <p className="text-muted-foreground">
                  Based in San Francisco, I travel worldwide to document love stories, capture authentic portraits, and
                  freeze moments that will be treasured for generations to come.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6">
                <div className="card-elegant p-3 sm:p-4 text-center">
                  <div className="text-xl sm:text-2xl font-serif font-bold text-primary mb-1">500+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">Happy Clients</div>
                </div>
                <div className="card-elegant p-3 sm:p-4 text-center">
                  <div className="text-xl sm:text-2xl font-serif font-bold text-primary mb-1">10+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">
                    Years Experience
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2 order-1 lg:order-2 flex justify-center lg:justify-end"
            >
              <div className="relative w-48 sm:w-56 md:w-64 lg:w-full max-w-xs">
                {/* Decorative Elements */}
                <div className="absolute -top-2 -left-2 w-12 h-12 sm:w-16 sm:h-16 bg-yellow-400/20 rounded-full blur-2xl animate-pulse" />
                <div className="absolute -bottom-2 -right-2 w-16 h-16 sm:w-20 sm:h-20 bg-purple-400/20 rounded-full blur-2xl animate-pulse" />

                <div className="aspect-[3/4] relative rounded-2xl overflow-hidden shadow-4xl">
                  <Image
                    src="/images/elina.webp"
                    alt="Elena Rodriguez - Professional Photographer"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, (max-width: 1024px) 256px, 320px"
                  />

                  {/* Overlay Badge */}
                  <div className="absolute top-2 right-2 glass-dark px-2 py-1 rounded-full">
                    <div className="flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-yellow-400" />
                      <span className="text-white text-xs font-semibold">Award Winner</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding section-gradient">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif mb-3 sm:mb-4">
              My <span className="text-gradient italic">Expertise</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Years of dedication have honed my skills across various photography disciplines
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-elegant p-4 sm:p-6"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-primary text-sm sm:text-base">{skill.name}</h3>
                  <span className="text-xs sm:text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
                  <motion.div
                    className="h-2 sm:h-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-800 px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
                <Camera className="w-3 h-3 sm:w-4 sm:h-4" />
                My Philosophy
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif mb-4 sm:mb-6">
                Creating <span className="text-gradient italic">Timeless Art</span>
              </h2>

              <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground italic leading-relaxed mb-6 sm:mb-8 px-4">
                Every photograph tells a story. My role is to capture not just how things looked, but how they felt. I
                believe in the power of authentic moments and genuine emotions that create lasting memories.
              </blockquote>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2 text-sm sm:text-base">Authentic Emotions</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Capturing genuine feelings and real moments
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Star className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2 text-sm sm:text-base">Artistic Vision</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Creating beautiful compositions with creative flair
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2 text-sm sm:text-base">Personal Connection</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Building trust and comfort with every client
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding section-gradient-dark text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif mb-3 sm:mb-4 text-balance">
              My <span className="text-gradient-gold italic">Journey</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mx-auto px-4">
              From picking up my first camera to becoming an award-winning photographer
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line - Hidden on mobile */}
            <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-400 to-yellow-500"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col sm:flex-row items-center mb-8 sm:mb-12 ${
                  index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                <div
                  className={`w-full sm:w-1/2 ${
                    index % 2 === 0 ? "sm:pr-8 sm:text-right" : "sm:pl-8 sm:text-left"
                  } text-center sm:text-inherit`}
                >
                  <div className="glass-dark p-4 rounded-2xl">
                    <div className="text-yellow-400 font-bold text-base sm:text-lg mb-2">{item.year}</div>
                    <h3 className="text-base sm:text-lg font-serif font-semibold text-white mb-2">{item.event}</h3>
                    <p className="text-white/80 text-xs sm:text-sm">{item.description}</p>
                  </div>
                </div>
                {/* Timeline dot - Hidden on mobile */}
                <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-400 rounded-full border-4 border-white shadow-lg">
                  <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-800 px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4">
              <Award className="w-3 h-3 sm:w-4 sm:h-4" />
              Recognition
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif mb-3 sm:mb-4">
              Awards & <span className="text-gradient italic">Recognition</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground px-4">
              Honored to be recognized by industry peers and clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-elegant p-4 sm:p-6 text-center card-hover"
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl mb-3 sm:mb-4 ${achievement.color} bg-current/10`}
                >
                  <achievement.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-sm sm:text-base lg:text-lg font-serif font-semibold mb-2 text-primary">
                  {achievement.title}
                </h3>
                <p className="text-yellow-600 font-medium text-xs sm:text-sm">{achievement.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding section-gradient">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif mb-3 sm:mb-4 text-balance">
                Lets Create Something <span className="text-gradient">Beautiful Together</span>
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto px-4">
                Ready to capture your special moments? Id love to hear your story and bring your vision to life.
              </p>
              <motion.a
                href="/contact"
                className="btn-primary group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                  Get In Touch
                </span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
