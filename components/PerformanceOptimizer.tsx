"use client"

import { useEffect } from "react"

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalImages = [
        "/images/hero-1.jpg",
        "/images/hero-2.jpg",
        "/images/hero-3.jpg",
        "/images/elena-portrait.jpg",
      ]

      criticalImages.forEach((src) => {
        const link = document.createElement("link")
        link.rel = "preload"
        link.as = "image"
        link.href = src
        document.head.appendChild(link)
      })
    }

    // Lazy load non-critical resources
    const lazyLoadResources = () => {
      if ("requestIdleCallback" in window) {
        requestIdleCallback(() => {
          // Load non-critical scripts
          const scripts = ["https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"]

          scripts.forEach((src) => {
            const script = document.createElement("script")
            script.src = src
            script.async = true
            document.head.appendChild(script)
          })
        })
      }
    }

    // Optimize images with intersection observer
    const optimizeImages = () => {
      const images = document.querySelectorAll("img[data-src]")
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            img.src = img.dataset.src!
            img.classList.remove("lazy")
            imageObserver.unobserve(img)
          }
        })
      })

      images.forEach((img) => imageObserver.observe(img))
    }

    // Service Worker registration
    const registerServiceWorker = () => {
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            console.log("SW registered: ", registration)
          })
          .catch((registrationError) => {
            console.log("SW registration failed: ", registrationError)
          })
      }
    }

    preloadCriticalResources()
    lazyLoadResources()
    optimizeImages()
    registerServiceWorker()

    // Cleanup
    return () => {
      // Remove any event listeners if needed
    }
  }, [])

  return null
}
