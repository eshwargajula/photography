"use client"

import { motion } from "framer-motion"
import { Camera } from "lucide-react"

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="text-center">
        <motion.div
          className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-full mb-4"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            scale: { duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
        >
          <Camera className="w-8 h-8 text-white" />
        </motion.div>
        <motion.p
          className="text-lg font-serif text-primary"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          Loading...
        </motion.p>
      </div>
    </div>
  )
}
