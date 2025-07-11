"use client"

import { useEffect, useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { X, Heart, Eye, ArrowRight, Camera, Video, Play } from "lucide-react"

const categories = ["All", "Weddings", "Portraits", "Lifestyle", "Events"]

const portfolioItems = [
  {
    id: 1,
    category: "Weddings",
    title: "Romantic Garden Wedding",
    image: "/images/elegant-wedding.webp",
    description: "A beautiful outdoor ceremony in Napa Valley",
    likes: 234,
    views: 1200,
    type: "image",
  },
  {
    id: 2,
    category: "Portraits",
    title: "Golden Hour Session",
    image: "/images/intimate-portrait.webp",
    description: "Intimate couple portraits at sunset",
    likes: 189,
    views: 890,
    type: "image",
  },
  {
    id: 3,
    category: "Lifestyle",
    title: "Chilling Weekend",
    image: "/images/life-style.webp",
    description: "chilling weekend",
    likes: 156,
    views: 750,
    type: "image",
  },
  {
    id: 4,
    category: "Events",
    title: "Corporate Gala",
    image: "/images/corporate.webp",
    description: "Professional event photography",
    likes: 98,
    views: 520,
    type: "image",
  },
  {
    id: 5,
    category: "Weddings",
    title: "Beach Ceremony",
    image: "/images/destination-wedding.webp",
    videoSrc: "/",
    description: "Destination wedding in Malibu",
    likes: 312,
    views: 1450,
    type: "video",
    duration: "2:30",
  },
  {
    id: 6,
    category: "Portraits",
    title: "Professional Headshots",
    image: "/images/editorial-fashion.webp",
    description: "Intimate portrait session",
    likes: 145,
    views: 680,
    type: "image",
  },
]

export default function FeaturedWork() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedItem, setSelectedItem] = useState<number | null>(null)
  const [displayCount, setDisplayCount] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      setDisplayCount(window.innerWidth < 768 ? 3 : 3)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const filteredItems = useMemo(
    () => activeCategory === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory),
    [activeCategory])

  const displayItems = filteredItems.slice(0, displayCount)

  return (
    <section className="section-padding section-gradient">
      <div className="container-custom">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4"
          >
            <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
            Featured Collection
          </motion.div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif mb-3 sm:mb-4 text-balance">
            My Latest <span className="text-gradient italic">Masterpieces</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            A curated selection of recent photography and videography showcasing different styles, emotions, and
            unforgettable moments
          </p>
        </motion.div>

        {/* Enhanced Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 sm:px-6 py-2 sm:py-3 rounded-2xl font-semibold transition-all duration-500 text-xs sm:text-sm ${
                activeCategory === category
                  ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-2xl scale-105"
                  : "card-elegant text-foreground hover:shadow-xl hover:scale-105"
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Portfolio Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <AnimatePresence>
            {displayItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                viewport={{ once: true }}
                exit={{ opacity: 0, scale: 0.8, y: -50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedItem(index)}
              >
                <div className="card-elegant p-2 sm:p-3 card-hover">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-3">
                    <Image
                      src={item.image || "/placeholder.webp"}
                      alt={item.title}
                      fill
                      loading="lazy"
                      className="object-cover transition-all duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Video Play Button */}
                    {item.type === "video" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" />
                        </div>
                      </div>
                    )}

                    {/* Video Duration Badge */}
                    {item.type === "video" && item.duration && (
                      <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium">
                        {item.duration}
                      </div>
                    )}

                    {/* Enhanced Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                    {/* Stats Overlay */}
                    <div className="absolute top-2 sm:top-3 right-2 sm:right-3 flex gap-1 sm:gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="glass-dark px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full flex items-center gap-1">
                        <Heart className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-red-400" />
                        <span className="text-white text-xs">{item.likes}</span>
                      </div>
                      <div className="glass-dark px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full flex items-center gap-1">
                        <Eye className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-400" />
                        <span className="text-white text-xs">{item.views}</span>
                      </div>
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <div className="glass-dark p-2 sm:p-3 rounded-xl">
                        <h3 className="text-white text-xs sm:text-sm font-serif mb-1">{item.title}</h3>
                        <p className="text-white/80 text-xs mb-1 sm:mb-2">{item.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="bg-yellow-400 text-black px-2 py-0.5 sm:py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                            {item.category}
                          </span>
                          <div className="flex items-center gap-1">
                            {item.type === "video" ? (
                              <Video className="w-3 h-3 text-white" />
                            ) : (
                              <Camera className="w-3 h-3 text-white" />
                            )}
                            <ArrowRight className="w-3 h-3 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-1 sm:p-2">
                    <h3 className="text-xs sm:text-sm font-serif font-semibold mb-1 group-hover:text-yellow-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-xs line-clamp-2">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More / CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-8 sm:mt-12"
        >
          <div className="card-elegant p-4 sm:p-6 max-w-md mx-auto">
            <h3 className="text-base sm:text-xl font-serif mb-2 sm:mb-3">Love What You See?</h3>
            <p className="text-muted-foreground mb-3 sm:mb-4 text-xs sm:text-sm">
              Explore my complete portfolio for more inspiration
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <Link href="/portfolio" className="btn-primary group flex-1">
                <span className="flex items-center justify-center gap-2 text-xs sm:text-sm">
                  View Complete Portfolio
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link href="/contact" className="btn-secondary group flex-1">
                <span className="flex items-center justify-center gap-2 text-xs sm:text-sm">
                  Book Session
                  <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox for selected item */}
      <AnimatePresence>
        {selectedItem !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 sm:top-6 right-4 sm:right-6 glass-dark p-2 sm:p-3 rounded-full text-white hover:text-yellow-400 transition-colors z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl max-h-full w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-4xl">
                {displayItems[selectedItem].type === "video" ? (
                  <video
                    src={displayItems[selectedItem].videoSrc}
                    poster={displayItems[selectedItem].image}
                    controls
                    autoPlay
                    className="max-w-full max-h-[90vh] object-contain rounded-2xl"
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <Image
                    src={displayItems[selectedItem].image || "/images/"}
                    alt={displayItems[selectedItem].title}
                    width={1000}
                    height={1250}
                     loading="lazy"
                    className="max-w-full max-h-[90vh] object-contain"
                  />
                )}

                {/* Lightbox Info */}
                <div className="absolute bottom-0 left-0 right-0 glass-dark p-3 sm:p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white text-base sm:text-lg font-serif mb-1">
                        {displayItems[selectedItem].title}
                      </h3>
                      <span className="bg-yellow-400 text-black px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wide">
                        {displayItems[selectedItem].category}
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex items-center gap-1 text-white">
                        <Heart className="w-4 h-4 text-red-400" />
                        <span className="text-sm">{displayItems[selectedItem].likes}</span>
                      </div>
                      <div className="flex items-center gap-1 text-white">
                        <Eye className="w-4 h-4 text-blue-400" />
                        <span className="text-sm">{displayItems[selectedItem].views}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
