import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { Ship, Wrench, Building2, Factory } from 'lucide-react'
import ServicesNav from './ServicesNav'
import Loader from '../Loader/Loader'
import { getServiceFromHash, formatHeroTitle } from '@/components/ServiceDetailFromHash'

const MarineSupport = () => {
  const location = useLocation();
  const serviceData = getServiceFromHash(location.pathname, location.hash);
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
      '/images/Services/Marine/marine1.png',
      '/images/Services/Marine/marine2.png'
    ]

    images.forEach(src => {
      const img = new Image()
      img.src = src
      img.onload = handleImageLoad
      img.onerror = handleImageLoad
    })

    const timer = setTimeout(() => setIsLoading(false), 3000)

    return () => {
      setIsLoading(true)
      setLoadedImages(0)
      clearTimeout(timer)
    }
  }, [])

  if (isLoading) {
    return <Loader />
  }

  const marineServices = [
    {
      title: "Offshore Support Vessels",
      icon: Ship,
      intro: "Ships operating on open water for oilfield or coastal logistics.",
      details: [
        "We provide Offshore Support Vessels,",
        "Offshore Security Escort Services",
        "and Marine Support Services",
      ]
    },
    {
      title: "Shipyard & Maintenance",
      icon: Wrench,
      intro: "Engineers inspecting engines, dry docks, and vessel components.",
      details: null,
    },
    {
      title: "Port Operations",
      icon: Building2,
      intro: "Large cranes, cargo containers, and marine terminals loading goods.",
      details: null,
    },
    {
      title: "Engineering & Fabrication",
      icon: Factory,
      intro: "Steel piping, structural welding, and offshore platform construction.",
      details: null,
    },
  ]

  return (
    <div className="pt-48 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative bg-gradient-to-r from-blue-800 to-blue-900 text-white py-12 md:py-20 rounded-2xl overflow-hidden mt-8"
          >
            <div className="absolute inset-0">
              <img
                src="/images/Services/Marine/marine1.png"
                alt="Offshore & Marine Support"
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
                <p className="text-sm font-medium">{serviceData ? "Service Details" : "Our Services"}</p>
              </motion.div>
              {serviceData ? (
                <>
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-5xl font-bold mb-6"
                  >
                    {formatHeroTitle(serviceData.title)}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl text-blue-100 max-w-3xl leading-relaxed"
                  >
                    {serviceData.subtitle}
                  </motion.p>
                </>
              ) : (
                <>
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-5xl font-bold mb-6"
                  >
                    Offshore & <span className="text-orange-400">Marine Support</span>
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl text-blue-100 max-w-3xl leading-relaxed"
                  >
                    Vessel Chartering | Offshore Logistics | Subsea Inspection | Environmental Pollution Control
                  </motion.p>
                </>
              )}
            </div>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-56 flex-shrink-0">
              <ServicesNav />
            </div>

            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg mb-8 border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Offshore & Marine Support</h3>
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    Our Marine support services include vessel chartering, offshore logistics, subsea inspection, and environmental pollution control tailored for the oil, gas, and maritime industries.
                  </p>
                  <p className="leading-relaxed">
                    We provide Offshore Support Vessels, Offshore Security Escort Services and Marine Support Services.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative rounded-lg overflow-hidden shadow-md">
                    <img
                      src="/images/Services/Marine/marine1.png"
                      alt="Offshore Support Vessel Operations"
                      className="w-full h-[250px] object-cover"
                    />
                  </div>
                  <div className="relative rounded-lg overflow-hidden shadow-md">
                    <img
                      src="/images/Services/Marine/marine2.png"
                      alt="Marine Logistics & Port Operations"
                      className="w-full h-[250px] object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Marine Capabilities</h3>
                <div className="space-y-8">
                  {marineServices.map((section, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="space-y-4"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <section.icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-gray-900">{section.title}</h4>
                          <p className="text-base text-gray-600 mt-1">{section.intro}</p>
                        </div>
                      </div>
                      {section.details && (
                        <div className="pl-13 space-y-1">
                          {section.details.map((item, itemIndex) => (
                            <p key={itemIndex} className="text-gray-700 leading-relaxed">{item}</p>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MarineSupport
