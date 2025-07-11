"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Camera, Phone } from "lucide-react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Always show background on non-home pages
  const showBackground = !isHomePage || scrolled

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          showBackground ? "glass shadow-2xl" : "bg-transparent"
        }`}
      >
        <div className="container-custom">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
              <div className="relative">
                <Camera
                  className={`w-6 h-6 sm:w-8 sm:h-8 transition-colors duration-300 ${showBackground ? "text-primary" : "text-white"}`}
                />
                <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full animate-pulse" />
              </div>
              <div>
                <div
                  className={`text-base sm:text-xl font-serif font-semibold transition-colors duration-300 ${
                    showBackground ? "text-primary" : "text-white"
                  }`}
                >
                  Elena Rodriguez
                </div>
                <div
                  className={`text-xs uppercase tracking-wider transition-colors duration-300 ${
                    showBackground ? "text-muted-foreground" : "text-white/70"
                  }`}
                >
                  Photography
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative text-sm font-medium transition-colors duration-300 ${
                    pathname === item.href
                      ? showBackground
                        ? "text-primary"
                        : "text-white"
                      : showBackground
                        ? "text-foreground hover:text-primary"
                        : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.name}
                  {pathname === item.href && (
                    <motion.div
                      layoutId="activeTab"
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${
                        showBackground ? "bg-primary" : "bg-white"
                      }`}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Enhanced CTA Button */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className={`btn group relative overflow-hidden transition-all duration-300 ${
                  showBackground
                    ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-500 hover:to-yellow-600 shadow-lg hover:shadow-xl"
                    : "glass-dark text-white hover:bg-white/20 border border-white/30"
                } h-10 sm:h-12 px-4 sm:px-6 rounded-2xl text-sm`}
              >
                <span className="relative z-10 flex items-center gap-2 font-semibold">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">Book Session</span>
                  <span className="sm:hidden">Book</span>
                </span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-xl transition-colors ${
                showBackground ? "text-primary hover:bg-primary/10" : "text-white hover:bg-white/10"
              }`}
            >
              {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="absolute right-0 top-0 h-full w-72 max-w-[85vw] glass"
            >
              <div className="flex flex-col h-full pt-20 sm:pt-24 pb-6 px-4 sm:px-6">
                <nav className="space-y-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-2xl transition-all duration-300 ${
                        pathname === item.href
                          ? "text-white bg-gradient-to-r from-yellow-400 to-yellow-500"
                          : "text-foreground hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                <div className="mt-6 sm:mt-8">
                  <Link
                    href="/contact"
                    className="btn-primary w-full justify-center text-sm sm:text-base"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="flex items-center gap-2">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                      Book Session
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
