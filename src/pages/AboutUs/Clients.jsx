import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Building2, Users, Globe, Award, ChevronRight, Handshake } from "lucide-react"
import { Link } from "react-router-dom"

const clientCategories = [
  {
    title: "Our Clients",
    clients: [
      {
        id: 1,
        name: "NNPC",
        logo: "/images/nnpc.jpeg",
      },
      {
        id: 2,
        name: "Chevron",
        logo: "/images/chevron.png",
      },
      {
        id: 3,
        name: "Shell",
        logo: "/images/shell.png",
      },
      {
        id: 4,
        name: "Total Energy",
        logo: "/images/Total.jpeg",
      },
      {
        id: 5,
        name: "SEEPCO",
        logo: "/images/seepco.jpeg",
      },
      {
        id: 6,
        name: "SEPLAT",
        logo: "/images/seplat.jpg",
      },
      {
        id: 7,
        name: "Saipem",
        logo: "/images/Saipem.png",
      },
      {
        id: 8,
        name: "Addax",
        logo: "/images/Addax.jpg",
      },
      {
        id: 9,
        name: "First Hydrocarbon",
        logo: "/images/Hydrocarbon.jpeg",
      },
      {
        id: 10,
        name: "Exxon Mobil",
        logo: "/images/ExxonMobil.png",
      },
      {
        id: 11,
        name: "Eroton",
        logo: "/images/eroton.png",
      },
      {
        id: 12,
        name: "EWT Energy Works",
        logo: "/images/ewt.png",
      },
      {
        id: 13,
        name: "Dangote",
        logo: "/images/Dangote.png",
      },
      {
        id: 14,
        name: "General Electric",
        logo: "/images/General_Electric.png",
      },
      {
        id: 15,
        name: "Neconde Energy",
        logo: "/images/Neconde.png",
      },
      {
        id: 16,
        name: "Conoil",
        logo: "/images/conoil.png",
      },
      {
        id: 17,
        name: "Mid Western",
        logo: "/images/Midwestern.png",
      },
      {
        id: 18,
        name: "SUPANOVA ENERGY SERVICES LTD",
        logo: "/images/supanova.png",
      },
    ]
  }
]

const Clients = () => {
  return (
    <div className="pt-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="space-y-16">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative bg-gradient-to-r from-blue-800 to-blue-900 text-white py-16 md:py-24 rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0">
              <img
                src="/images/p77.jpg"
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
                className="text-xl text-blue-100 max-w-3xl leading-relaxed"
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
                          className="w-full h-full object-contain p-8 transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-4 text-center border-t border-gray-100">
                        <h4 className="text-sm font-medium text-gray-900">{client.name}</h4>
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
