"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowRight, Camera, Heart } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "10 Tips for Perfect Wedding Photography",
    excerpt:
      "Essential techniques and insights for capturing unforgettable wedding moments that couples will treasure forever.",
    image: "/placeholder.svg?height=400&width=600",
    author: "Elena Rodriguez",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Wedding Tips",
    slug: "wedding-photography-tips",
  },
  {
    id: 2,
    title: "The Art of Golden Hour Portraits",
    excerpt:
      "Discover how to harness the magic of golden hour lighting to create stunning, ethereal portrait photography.",
    image: "/placeholder.svg?height=400&width=600",
    author: "Elena Rodriguez",
    date: "2024-01-10",
    readTime: "7 min read",
    category: "Portrait Tips",
    slug: "golden-hour-portraits",
  },
  {
    id: 3,
    title: "Behind the Scenes: A Day in My Life",
    excerpt: "Take a peek behind the camera and see what a typical day looks like for a professional photographer.",
    image: "/placeholder.svg?height=400&width=600",
    author: "Elena Rodriguez",
    date: "2024-01-05",
    readTime: "4 min read",
    category: "Personal",
    slug: "day-in-my-life",
  },
  {
    id: 4,
    title: "Choosing the Perfect Wedding Venue",
    excerpt: "A comprehensive guide to selecting the ideal venue that complements your photography style and vision.",
    image: "/placeholder.svg?height=400&width=600",
    author: "Elena Rodriguez",
    date: "2023-12-28",
    readTime: "6 min read",
    category: "Wedding Planning",
    slug: "choosing-wedding-venue",
  },
  {
    id: 5,
    title: "Street Photography Adventures in San Francisco",
    excerpt: "Exploring the vibrant streets of San Francisco and capturing the essence of urban life through my lens.",
    image: "/placeholder.svg?height=400&width=600",
    author: "Elena Rodriguez",
    date: "2023-12-20",
    readTime: "8 min read",
    category: "Street Photography",
    slug: "sf-street-photography",
  },
  {
    id: 6,
    title: "The Importance of Engagement Sessions",
    excerpt:
      "Why engagement sessions are crucial for building rapport with couples and creating better wedding photos.",
    image: "/placeholder.svg?height=400&width=600",
    author: "Elena Rodriguez",
    date: "2023-12-15",
    readTime: "5 min read",
    category: "Engagement",
    slug: "importance-engagement-sessions",
  },
]

const categories = [
  "All",
  "Wedding Tips",
  "Portrait Tips",
  "Personal",
  "Wedding Planning",
  "Street Photography",
  "Engagement",
]

export default function BlogPage() {
  return (
    <div className="pt-16 sm:pt-20">
      {/* Header */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Camera className="w-4 h-4" />
              Photography Blog
            </div>
            <h1 className="text-responsive-3xl font-serif mb-4 text-balance">
              Stories & <span className="text-gradient italic">Insights</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Photography tips, behind-the-scenes stories, and insights from my journey as a professional photographer
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="card-elegant overflow-hidden card-hover"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative aspect-[4/3] lg:aspect-auto">
                <Image
                  src={blogPosts[0].image || "/placeholder.svg"}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(blogPosts[0].date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {blogPosts[0].readTime}
                  </div>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-4 text-primary">{blogPosts[0].title}</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>
                <Link href={`/blog/${blogPosts[0].slug}`} className="btn-primary group w-fit">
                  <span className="flex items-center gap-2">
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding section-gradient">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-elegant overflow-hidden card-hover group"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-lg font-serif font-semibold mb-3 text-primary group-hover:text-yellow-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-primary hover:text-yellow-600 font-medium text-sm flex items-center gap-2 group/link"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card-elegant p-8"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Heart className="w-4 h-4" />
                Stay Connected
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-4 text-primary">Never Miss a Story</h2>
              <p className="text-muted-foreground mb-6">
                Subscribe to get the latest photography tips, behind-the-scenes content, and exclusive insights
                delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
                <button className="btn-primary whitespace-nowrap">Subscribe</button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
