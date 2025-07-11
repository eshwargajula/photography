"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, Heart, Eye, Filter, Grid, List, Search, Play, Video, Camera } from "lucide-react"

const categories = ["All", "Weddings", "Portraits", "Street", "Travel", "Events", "Videos"]

const portfolioItems = [
  {
    id: 1,
    src: "/images/portfolio/garden-wedding.webp",
    category: "Weddings",
    title: "Garden Wedding Ceremony",
    likes: 234,
    views: 1200,
    description: "Romantic outdoor ceremony in Napa Valley",
    type: "image",
  },
  {
    id: 2,
    src: "/images/portfolio/wedding-highlights.webp",
    videoSrc: "/images/portfolio/cinematic-wedding.mp4",
    category: "Videos",
    title: "Wedding Highlight Reel",
    likes: 456,
    views: 2800,
    description: "Cinematic wedding day highlights",
    type: "video",
    duration: "2:30",
  },
  {
    id: 3,
    src: "/images/portfolio/intimate-couple.webp",
    category: "Portraits",
    title: "Golden Hour Portrait",
    likes: 189,
    views: 890,
    description: "Intimate couple portraits at sunset",
    type: "image",
  },
  {
    id: 4,
    src: "/images/portfolio/creative-portrait.webp",
    category: "Videos",
    title: "Portrait Session Behind the Scenes",
    likes: 298,
    views: 1650,
    description: "Creative process of portrait photography",
    type: "image",
  },
  {
    id: 5,
    src: "/images/portfolio/candit-street.webp",
    category: "Street",
    title: "Urban Life Moments",
    likes: 156,
    views: 750,
    description: "Candid street photography in downtown SF",
    type: "image",
  },
  {
    id: 6,
    src: "/images/portfolio/mountains.webp",
    category: "Travel",
    title: "Mountain Landscape",
    likes: 198,
    views: 920,
    description: "Breathtaking mountain vista at dawn",
    type: "image",
  },
  {
    id: 7,
    src: "/images/portfolio/journey-through.webp",
    videoSrc: "/images/portfolio/journey-through.mp4",
    category: "Videos",
    title: "Travel Documentary",
    likes: 387,
    views: 2100,
    description: "Journey through European landscapes",
    type: "video",
    duration: "3:15",
  },
  {
    id: 8,
    src: "/images/portfolio/beach-wedding.webp",
    category: "Weddings",
    title: "Beach Wedding Reception",
    likes: 312,
    views: 1450,
    description: "Seaside celebration in Malibu",
    type: "image",
  },
  {
    id: 9,
    src: "/images/portfolio/family-portraits.webp",
    category: "Portraits",
    title: "Family Portrait Session",
    likes: 145,
    views: 680,
    description: "Multi-generational family portraits",
    type: "image",
  },
  {
    id: 10,
    src: "/images/portfolio/corporate-event.webp",
    videoSrc: "/images/portfolio/corporate-event.mp4",
    category: "Videos",
    title: "Corporate Event Coverage",
    likes: 167,
    views: 890,
    description: "Professional event documentation",
    type: "video",
    duration: "2:00",
  },
  {
    id: 11,
    src: "/images/portfolio/city-street.webp",
    category: "Street",
    title: "City Street Photography",
    likes: 167,
    views: 820,
    description: "Urban energy and movement",
    type: "image",
  },
  {
    id: 12,
    src: "/images/portfolio/architecture.webp",
    category: "Travel",
    title: "Architectural Beauty",
    likes: 203,
    views: 1100,
    description: "Historic architecture in Europe",
    type: "image",
  },
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedItem, setSelectedItem] = useState<(typeof portfolioItems)[0] | null>(null)
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("masonry")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredItems = portfolioItems.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="pt-16 sm:pt-20">
      {/* Header */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4">
              <Filter className="w-3 h-3 sm:w-4 sm:h-4" />
              Portfolio Collection
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-3 sm:mb-4 text-balance">
              My <span className="text-gradient italic">Portfolio</span>
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              A comprehensive collection of photography and videography showcasing different styles, emotions, and
              unforgettable moments
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Controls */}
      <section className="px-4 sm:px-6 lg:px-8 pb-6 bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-md"
            >
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                placeholder="Search photos & videos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm sm:text-base"
              />
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-2 sm:gap-3"
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl font-semibold transition-all duration-500 text-xs sm:text-sm flex items-center gap-1 ${
                    activeCategory === category
                      ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-xl scale-105"
                      : "card-elegant text-foreground hover:shadow-lg hover:scale-105"
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  {category === "Videos" && <Video className="w-3 h-3" />}
                  {category !== "Videos" && category !== "All" && <Camera className="w-3 h-3" />}
                  {category}
                </motion.button>
              ))}
            </motion.div>

            {/* View Mode Toggle */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-2 card-elegant p-1.5 sm:p-2 rounded-2xl"
            >
              <button
                onClick={() => setViewMode("grid")}
                className={`p-1.5 sm:p-2 rounded-xl transition-all duration-300 ${
                  viewMode === "grid" ? "bg-yellow-400 text-white" : "text-muted-foreground hover:text-primary"
                }`}
              >
                <Grid className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
              <button
                onClick={() => setViewMode("masonry")}
                className={`p-1.5 sm:p-2 rounded-xl transition-all duration-300 ${
                  viewMode === "masonry" ? "bg-yellow-400 text-white" : "text-muted-foreground hover:text-primary"
                }`}
              >
                <List className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </motion.div>
          </div>

          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-4 text-sm text-muted-foreground"
          >
            Showing {filteredItems.length} of {portfolioItems.length} items
            {searchTerm && ` for "${searchTerm}"`}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 section-gradient">
        <div className="container-custom">
          <motion.div
            layout
            className={`grid gap-3 sm:gap-4 ${
              viewMode === "grid"
                ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -50 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-2xl shadow-lg card-hover cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`relative ${viewMode === "grid" ? "aspect-square" : "aspect-[4/5]"}`}>
                    <Image
                      src={item.src || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
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

                    {/* Type Badge */}
                    <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-white/90 backdrop-blur-sm text-primary px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      {item.type === "video" ? <Video className="w-3 h-3" /> : <Camera className="w-3 h-3" />}
                      {item.type === "video" ? "Video" : "Photo"}
                    </div>

                    {/* Enhanced Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                    {/* Stats Overlay */}
                    <div className="absolute bottom-12 sm:bottom-16 right-2 sm:right-3 flex gap-1 sm:gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
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
                        <p className="text-white/80 text-xs mb-1 sm:mb-2 line-clamp-2">{item.description}</p>
                        <span className="bg-yellow-400 text-black px-2 py-0.5 sm:py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* No Results */}
          {filteredItems.length === 0 && (
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="text-center py-12">
              <div className="text-6xl mb-4">📸</div>
              <h3 className="text-xl font-serif mb-2">No content found</h3>
              <p className="text-muted-foreground mb-4">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchTerm("")
                  setActiveCategory("All")
                }}
                className="btn-primary"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox/Video Player */}
      <AnimatePresence>
        {selectedItem && (
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
                {selectedItem.type === "video" ? (
                  <video
                    src={selectedItem.videoSrc}
                    poster={selectedItem.src}
                    controls
                    autoPlay
                    className="max-w-full max-h-[90vh] object-contain rounded-2xl"
                    onError={(e) => console.error("Video error:", e)}
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <Image
                    src={selectedItem.src || "/placeholder.svg"}
                    alt={selectedItem.title}
                    width={1000}
                    height={1250}
                    className="max-w-full max-h-[90vh] object-contain rounded-2xl"
                  />
                )}

                {/* Media Info */}
                <div className="absolute bottom-0 left-0 right-0 glass-dark p-3 sm:p-4 rounded-b-2xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center gap-1 bg-white/20 px-2 py-1 rounded-full">
                          {selectedItem.type === "video" ? (
                            <Video className="w-3 h-3 text-white" />
                          ) : (
                            <Camera className="w-3 h-3 text-white" />
                          )}
                          <span className="text-white text-xs font-medium">
                            {selectedItem.type === "video" ? "Video" : "Photo"}
                          </span>
                        </div>
                        {selectedItem.duration && (
                          <span className="text-white/80 text-xs">{selectedItem.duration}</span>
                        )}
                      </div>
                      <h3 className="text-white text-base sm:text-lg font-serif mb-1">{selectedItem.title}</h3>
                      <p className="text-white/80 text-sm mb-2">{selectedItem.description}</p>
                      <span className="bg-yellow-400 text-black px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wide">
                        {selectedItem.category}
                      </span>
                    </div>
                    <div className="flex gap-3 sm:gap-4">
                      <div className="flex items-center gap-1 text-white">
                        <Heart className="w-4 h-4 text-red-400" />
                        <span className="text-sm">{selectedItem.likes}</span>
                      </div>
                      <div className="flex items-center gap-1 text-white">
                        <Eye className="w-4 h-4 text-blue-400" />
                        <span className="text-sm">{selectedItem.views}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
