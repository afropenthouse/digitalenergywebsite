import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Building2, Users, Globe, Award, ChevronRight, Handshake } from "lucide-react"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import Loader from "../Loader/Loader"

const clientCategories = [
  {
    title: "Our Clients",
    clients: [
      {
        id: 1,
        name: "NNPC",
        logo: "/images/Clients_webp/nnpc.webp",
      },
      {
        id: 2,
        name: "Chevron",
        logo: "/images/Clients_webp/chevron.webp",
      },
      {
        id: 3,
        name: "Total Energies",
        logo: "/images/Clients_webp/Total.webp",
      },
      {
        id: 4,
        name: "SEEPCO",
        logo: "/images/Clients_webp/seepco.webp",
      },
      {
        id: 5,
        name: "SEPLAT",
        logo: "/images/Clients_webp/seplat.webp",
      },
      {
        id: 6,
        name: "Saipem",
        logo: "/images/Clients_webp/saipem.webp",
      },
      {
        id: 7,
        name: "Addax",
        logo: "/images/Clients_webp/Addax.webp",
      },
      {
        id: 8,
        name: "First Hydrocarbon",
        logo: "/images/Clients_webp/Hydrocarbon.webp",
      },
      {
        id: 9,
        name: "NNPC 18",
        logo: "/images/Clients_webp/nnpc-18.webp",
      },
      {
        id: 10,
        name: "EWT Energy Works",
        logo: "/images/Clients_webp/ewt.webp",
      },
      {
        id: 11,
        name: "Neconde Energy",
        logo: "/images/Clients_webp/Neconde.webp",
      },
      {
        id: 12,
        name: "Conoil",
        logo: "/images/Clients_webp/conoil.webp",
      },
      {
        id: 13,
        name: "Mid Western",
        logo: "/images/Clients_webp/Midwestern.webp",
      },
      {
        id: 14,
        name: "SUPANOVA ENERGY SERVICES LTD",
        logo: "/images/Clients_webp/supanova.webp",
      },
      {
        id: 15,
        name: "First Bank",
        logo: "/images/Clients_webp/firstbank.webp",
      },
      {
        id: 16,
        name: "Stanbic IBTC Bank",
        logo: "/images/Clients_webp/Stanbic ibtc.webp",
      },
      {
        id: 17,
        name: "Fidelity Bank",
        logo: "/images/Clients_webp/fidelity.webp",
      },
      {
        id: 18,
        name: "Agrited Nigeria Limited",
        logo: "/images/Clients_webp/Agrited.webp",
      },
      {
        id: 19,
        name: "Christ Embassy",
        logo: "/images/Clients_webp/Christ Embassey.webp",
      },
      {
        id: 20,
        name: "JohnsCreek",
        logo: "/images/Clients_webp/John Creek.webp",
      },
      {
        id: 21,
        name: "Hydron Carbon Limited",
        logo: "/images/Clients_webp/Hydron-Energy.webp",
      },
    ]
  }
]

const Clients = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [loadedImages, setLoadedImages] = useState(0)

  useEffect(() => {
    const totalImages = clientCategories[0].clients.length + 1 // +1 for the hero image
    const handleImageLoad = () => {
      setLoadedImages(prev => {
        const newCount = prev + 1
        if (newCount === totalImages) {
          setIsLoading(false)
        }
        return newCount
      })
    }

    // Preload all client logos
    clientCategories[0].clients.forEach(client => {
      const img = new Image()
      img.src = client.logo
      img.onload = handleImageLoad
    })

    // Preload hero image
    const heroImg = new Image()
    heroImg.src = "/images/webp/cli.webp"
    heroImg.onload = handleImageLoad

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
        <div className="space-y-16">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative bg-gradient-to-r from-blue-800 to-blue-900 text-white py-8 md:py-12 rounded-2xl overflow-hidden mt-8"
          >
            <div className="absolute inset-0">
              <img
                src="/images/webp/cli.webp"
                alt="Our Clients"
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
                <p className="text-sm font-medium">Our Partners</p>
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Trusted by <span className="text-orange-400">Industry Leaders</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-white max-w-3xl leading-relaxed"
              >
                We're proud to partner with leading organizations in the energy sector,
                delivering innovative solutions that drive success.
              </motion.p>
            </div>
          </motion.div>

          {/* Client Categories */}
          <div className="space-y-16">
            {clientCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-8">{category.title}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {category.clients.map((client, index) => (
                    <motion.div
                      key={client.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5,
                        delay: index * 0.1,
                        ease: "easeOut"
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group border border-gray-100"
                    >
                      <div className="aspect-[4/3] relative overflow-hidden bg-gray-50/50">
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                        <img
                          src={client.logo}
                          alt={client.name}
                          className="w-full h-full object-contain p-4 sm:p-6 md:p-8 transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-3 sm:p-4 text-center border-t border-gray-100">
                        <h4 className="text-sm sm:text-base font-medium text-gray-900">{client.name}</h4>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Partnership Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                <Handshake className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Our Partnership Approach</h4>
                <p className="text-gray-600 leading-relaxed">
                  We believe in building long-term partnerships with our clients, focusing on
                  understanding their unique needs and delivering tailored solutions. Our
                  collaborative approach ensures that we not only meet but exceed expectations,
                  driving mutual success in the energy sector.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Clients
