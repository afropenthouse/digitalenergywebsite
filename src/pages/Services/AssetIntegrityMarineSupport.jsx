import React from 'react'
import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'
import ServicesNav from './ServicesNav'
import Loader from '../Loader/Loader'
import { useState, useEffect } from 'react'

const AssetIntegrityMarineSupport = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [loadedImages, setLoadedImages] = useState(0)

  useEffect(() => {
    const handleImageLoad = () => {
      setLoadedImages(prev => {
        const newCount = prev + 1
        if (newCount === 2) {
          setIsLoading(false)
        }
        return newCount
      })
    }

    const images = [
      '/images/Services/OperationsMaintenance/om1.jpeg',
      '/images/Services/OperationsMaintenance/om1.jpeg'
    ]

    images.forEach(src => {
      const img = new Image()
      img.src = src
      img.onload = handleImageLoad
    })

    return () => {
      setIsLoading(true)
      setLoadedImages(0)
    }
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="pt-48 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="space-y-8">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative bg-gradient-to-r from-blue-800 to-blue-900 text-white py-12 md:py-20 rounded-2xl overflow-hidden mt-8"
          >
            <div className="absolute inset-0">
              <img
                src="/images/Services/OperationsMaintenance/om1.jpeg"
                alt="Asset Integrity & Marine Support"
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
                <p className="text-sm font-medium">Our Services</p>
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Asset Integrity & <span className="text-orange-400">Marine Support</span>
              </motion.h2>
            </div>
          </motion.div>

          {/* Navigation and Content Section */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Navigation Sidebar */}
            <div className="w-full md:w-56 flex-shrink-0">
              <ServicesNav />
            </div>

            {/* Content Area */}
            <div className="flex-1">
              {/* Overview Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg mb-8 border border-gray-100"
              >
                <div className="space-y-6 text-gray-700">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Marine Support, Tank & Vessel Cleaning Services</h3>
                  <p className="leading-relaxed">
                    DEISL has developed a range of technologies and methods for safe and efficient tank and vessel cleaning. We use automated and semi-automated tank cleaning heads, vacuum transfer systems, and high-capacity pumping solutions to clean tanks and vessels remotely or with minimum personnel entry.
                  </p>
                  <p className="leading-relaxed">
                    Safety is paramount. All tank and vessel entries are potentially hazardous. Where practical, we use remote cleaning and flushing techniques. When confined space entry is required, our personnel operate under strict, task-specific safety and emergency escape procedures, using certified breathing apparatus and continuous atmospheric monitoring.
                  </p>
                  <p className="leading-relaxed">
                    We maintain an extensive inventory of the latest specification breathing apparatus, gas detection, and communication systems. Combined with specialist equipment, highly trained operatives, and proven safe work procedures, we deliver consistent, high-performance results.
                  </p>
                </div>
              </motion.div>

              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <div className="relative rounded-lg overflow-hidden shadow-md">
                  <img
                    src="/images/Services/OperationsMaintenance/om1.jpeg"
                    alt="Asset Integrity & Marine Support"
                    className="w-full h-[250px] object-cover"
                  />
                </div>
              </motion.div>

              {/* Industrial Cleaning Capability */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Industrial Cleaning Capability</h3>
                <div className="space-y-6 text-gray-700">
                  <p className="leading-relaxed">
                    High-specification vacuum and transfer equipment with airflow up to 7,650 m³/hr (4,500 CFM) and material removal rates of up to 12 m³/hr, depending on specific gravity and material composition.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AssetIntegrityMarineSupport