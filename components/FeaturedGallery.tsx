"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const featuredImages = [
  {
    src: "",
    alt: "Elegant Wedding Photography",
    category: "Wedding",
    title: "Romantic Garden Ceremony",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Intimate Portrait Session",
    category: "Portrait",
    title: "Golden Hour Portraits",
  },
  {
    src: "/placeholder.svg?height=800&width=600",
    alt: "Lifestyle Photography",
    category: "Lifestyle",
    title: "Family Moments",
  },
  {
    src: "/placeholder.svg?height=600&width=600",
    alt: "Editorial Fashion",
    category: "Editorial",
    title: "Fashion Editorial",
  },
  {
    src: "/placeholder.svg?height=800&width=600",
    alt: "Destination Wedding",
    category: "Wedding",
    title: "Destination Romance",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Corporate Headshots",
    category: "Corporate",
    title: "Professional Headshots",
  },
]

export default function FeaturedGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % featuredImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? featuredImages.length - 1 : selectedImage - 1)
    }
  }

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 text-balance">
            Featured <span className="text-gradient italic">Work</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A curated selection of recent photography showcasing different styles and emotions
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg shadow-lg card-hover cursor-pointer"
              onClick={() => setSelectedImage(index)}
              whileHover={{ scale: 1.02 }}
            >
              <div className="aspect-[4/5] relative">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="image-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <div className="text-white">
                    <h3 className="text-lg font-serif font-semibold mb-2">{image.title}</h3>
                    <span className="inline-block bg-gold text-gold-foreground px-3 py-1 rounded-full text-sm font-medium uppercase tracking-wide">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/portfolio" className="btn-primary">
            View Complete Portfolio
          </Link>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white hover:text-gold transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                prevImage()
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-gold transition-colors z-10"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                nextImage()
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-gold transition-colors z-10"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={featuredImages[selectedImage].src || "/placeholder.svg"}
                alt={featuredImages[selectedImage].alt}
                width={800}
                height={1000}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-white text-xl font-serif font-semibold mb-2">
                  {featuredImages[selectedImage].title}
                </h3>
                <span className="inline-block bg-gold text-gold-foreground px-3 py-1 rounded-full text-sm font-medium uppercase tracking-wide">
                  {featuredImages[selectedImage].category}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
