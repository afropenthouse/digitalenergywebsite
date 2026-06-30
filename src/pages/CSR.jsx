import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Loader from "./Loader/Loader"

const CSR = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [loadedImages, setLoadedImages] = useState(0)

  useEffect(() => {
    const totalImages = 1
    const handleImageLoad = () => {
      setLoadedImages(prev => {
        const newCount = prev + 1
        if (newCount === totalImages) {
          setIsLoading(false)
        }
        return newCount
      })
    }

    const handleImageError = () => {
      handleImageLoad()
    }

    const heroImg = new Image()
    heroImg.src = "/images/Home/pic_2.webp"
    heroImg.onload = handleImageLoad
    heroImg.onerror = handleImageError

    return () => {
      setIsLoading(true)
      setLoadedImages(0)
    }
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-[220px]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/Home/pic_2.webp"
            alt="CSR"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-800/70" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/45-degree-fabric-light.png')] opacity-10" />
        </div>
        <div className="relative z-10 container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-block bg-blue-700/30 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6"
          >
            <p className="text-sm font-medium">Corporate Social Responsibility</p>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Driving <span className="text-orange-400">Positive Change</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-blue-100 max-w-3xl leading-relaxed"
          >
            We are committed to making a meaningful impact in our communities through sustainable initiatives, environmental stewardship, and social development programs.
          </motion.p>
        </div>
      </section>

      {/* Placeholder Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our CSR Events & Initiatives</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Discover how Digital Energy is giving back to communities and supporting sustainable development across Nigeria.
            </p>
            <div className="bg-gray-50 rounded-lg p-8 inline-block">
              <p className="text-gray-500">Events and gallery coming soon.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default CSR
