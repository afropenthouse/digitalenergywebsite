import React from 'react'
import { motion } from 'framer-motion'
import { Fuel, Truck, Ship, Building2, Handshake, ShieldCheck, Clock, DollarSign, UserCheck } from 'lucide-react'
import ServicesNav from './ServicesNav'

const TradingServices = () => {
  const tradingServices = [
    {
      title: "Petroleum Products Trading",
      icon: Fuel,
      items: [
        "Premium Motor Spirit (PMS)",
        "Automotive Gas Oil (AGO/Diesel)",
        "Dual Purpose Kerosene (DPK)",
        "Aviation Turbine Kerosene (ATK)",
        "Low Pour Fuel Oil (LPFO)",
        "Base Oils & Lubricants"
      ]
    },
    {
      title: "Supply Chain & Distribution",
      icon: Truck,
      items: [
        "Bulk road tankers",
        "Vessel bunkering and marine supply",
        "Depot-to-site deliveries",
        "Strategic stock management and storage facilities"
      ]
    },
    {
      title: "Industrial & Upstream Support",
      icon: Building2,
      items: [
        "Fuel management systems",
        "On-site fueling services for rigs, FPSOs, and remote locations",
        "Long-term supply contracts and call-off arrangements",
        "Quality assurance in line with DPR and international standards"
      ]
    },
    {
      title: "Strategic Partnerships",
      icon: Handshake,
      items: [
        "Accredited depots",
        "Refineries",
        "Shipping partners",
        "Consistent pricing and quality"
      ]
    }
  ]

  const keyFeatures = [
    "Timely Delivery: We prioritize client operations and deploy resources to avoid downtime.",
    "Quality Assurance: Products meet regulatory and client specifications.",
    "Competitive Pricing: Our market knowledge ensures the best value.",
    "Safety & Compliance: We adhere strictly to HSE standards and regulatory requirements.",
    "Customer-Centric Approach: Customized solutions and responsive support."
  ]

  const managementSupport = [
    "End-to-end logistics management",
    "Quality control and testing",
    "Inventory management",
    "Documentation and compliance",
    "Emergency response support",
    "24/7 customer service"
  ]

  return (
    <div className="pt-20 bg-gradient-to-b from-gray-50 to-white">
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
                src="/images/pic_2.png"
                alt="Petroleum Products Trading"
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-800/70" />
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
                Marketing, Supply & <span className="text-orange-400">Trading</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-blue-100 max-w-3xl leading-relaxed"
              >
                Petroleum Products Trading | Supply Chain & Distribution | Industrial & Upstream Support
              </motion.p>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Marketing, Supply & Trading of Petroleum Products</h3>
                <div className="space-y-6 text-gray-700">
                  <p className="leading-relaxed">
                    Digital Energy & Integrated Services Limited (DEISL) is a trusted and efficient player in the marketing, supply, and trading of petroleum products across Nigeria and the West African sub-region. We provide reliable, safe, and cost-effective solutions that meet the needs of industrial, commercial, and upstream clients.
                  </p>
                  <p className="leading-relaxed">
                    Leveraging our extensive industry network, strong logistics capabilities, and market intelligence, we ensure timely and seamless delivery of high-quality petroleum products that support operational continuity for our clients.
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
                    src="/images/pic_2.png"
                    alt="Petroleum Products Trading"
                    className="w-full h-[250px] object-cover"
                  />
                </div>
              </motion.div>

              {/* Services Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg mb-8 border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Core Offerings</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {tradingServices.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                    >
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                          <service.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900">{service.title}</h4>
                      </div>
                      <div className="space-y-2">
                        {service.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start space-x-3">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Key Features Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg mb-8 border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose DEISL?</h3>
                <div className="space-y-4">
                  {keyFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Management Support Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Comprehensive Support Services</h3>
                <div className="space-y-4">
                  {managementSupport.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700">{item}</span>
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

export default TradingServices 