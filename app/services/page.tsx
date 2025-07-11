"use client"

import { motion } from "framer-motion"
import { Camera, Heart, Users, Palette, Clock, Star } from "lucide-react"

const services = [
  {
    icon: Heart,
    title: "Wedding Photography",
    description: "Complete wedding day coverage from getting ready to reception",
    features: ["8-10 hours coverage", "Engagement session included", "500+ edited photos", "Online gallery"],
    price: "Starting at $2,500",
  },
  {
    icon: Users,
    title: "Portrait Sessions",
    description: "Professional portraits for individuals, couples, and families",
    features: ["1-2 hour session", "Multiple outfit changes", "50+ edited photos", "Print release included"],
    price: "Starting at $350",
  },
  {
    icon: Camera,
    title: "Event Photography",
    description: "Corporate events, parties, and special celebrations",
    features: ["Full event coverage", "Candid and posed shots", "200+ edited photos", "48-hour delivery"],
    price: "Starting at $800",
  },
  {
    icon: Palette,
    title: "Commercial Photography",
    description: "Product photography and brand imagery for businesses",
    features: ["Studio or on-location", "Multiple angles/setups", "High-res files", "Usage rights included"],
    price: "Starting at $500",
  },
  {
    icon: Clock,
    title: "Photo Editing",
    description: "Professional photo editing and retouching services",
    features: ["Color correction", "Skin retouching", "Background removal", "Quick turnaround"],
    price: "Starting at $25/photo",
  },
  {
    icon: Star,
    title: "Photography Workshops",
    description: "Learn photography techniques in hands-on workshops",
    features: ["Small group sessions", "All skill levels", "Equipment provided", "Certificate included"],
    price: "Starting at $150",
  },
]

const process = [
  {
    step: "01",
    title: "Initial Consultation",
    description: "We discuss your vision, requirements, and preferences to ensure we're the perfect fit.",
  },
  {
    step: "02",
    title: "Planning & Preparation",
    description: "Detailed planning of the shoot including location scouting, timeline, and shot list.",
  },
  {
    step: "03",
    title: "The Photo Session",
    description: "Professional photography session with attention to every detail and moment.",
  },
  {
    step: "04",
    title: "Post-Production",
    description: "Careful editing and retouching to bring out the best in every image.",
  },
  {
    step: "05",
    title: "Delivery",
    description: "High-quality images delivered through a beautiful online gallery for easy sharing.",
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">Services</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional photography services tailored to capture your most important moments
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-gray-900" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t pt-6">
                    <div className="text-2xl font-bold text-gray-900 mb-4">{service.price}</div>
                    <motion.button
                      className="w-full btn-primary"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Learn More
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">My Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A seamless experience from initial consultation to final delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-gray-900">{step.step}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Book Your Session?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your photography needs and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a href="/contact" className="btn-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Get a Quote
              </motion.a>
              <motion.a
                href="/portfolio"
                className="btn-secondary border-white text-white hover:bg-white hover:text-gray-900"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Portfolio
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
