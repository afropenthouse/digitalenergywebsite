import React from 'react'
import { motion } from 'framer-motion'
import { ShoppingCart, CheckCircle, FileCheck, Truck, ClipboardList, Package, Globe, Shield, Users, DollarSign } from 'lucide-react'
import ServicesNav from './ServicesNav'

const ProcurementServices = () => {
  const phases = [
    {
      title: "Vendor Selection & Qualification",
      description: "Sourcing from a pre-qualified global and local vendor base to ensure competitiveness and compliance with project requirements.",
      icon: Globe
    },
    {
      title: "Specification Compliance",
      description: "Verifying that all procured materials and equipment meet specified technical and operational standards.",
      icon: CheckCircle
    },
    {
      title: "Expediting",
      description: "Monitoring and following up on production and delivery schedules to avoid delays.",
      icon: FileCheck
    },
    {
      title: "Quality Assurance & Testing",
      description: "Coordinating third-party inspections and material testing to validate quality prior to shipment or site delivery.",
      icon: Shield
    },
    {
      title: "Logistics & Transportation",
      description: "Managing shipping, customs clearance, and last-mile delivery to ensure materials arrive safely and on time.",
      icon: Truck
    },
    {
      title: "Site Delivery Tracking",
      description: "Real-time tracking of shipments and confirmation of receipt at project sites.",
      icon: Package
    }
  ]

  const strengths = [
    "Global and local vendor network",
    "Compliance with client and regulatory procurement requirements",
    "Strong coordination with project management and engineering teams",
    "Emphasis on cost optimization without compromising quality",
    "Reliable logistics partnerships for safe and timely delivery"
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
                src="/images/procurement.jpg"
                alt="Procurement Services"
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
                Procurement <span className="text-orange-400">Services</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-blue-100 max-w-3xl leading-relaxed"
              >
                Supply Chain Management with global sourcing expertise.
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Procurement & Supply Chain Management</h3>
                <div className="space-y-6 text-gray-700">
                  <p className="leading-relaxed">
                    Digital Energy & Integrated Services Limited (DEISL) offers robust Procurement and Supply Chain Management solutions with global sourcing capabilities to support diverse energy and infrastructure projects. Our procurement operations are executed in strict adherence to company policies and internationally recognized ISO-certified procedures, ensuring cost-effectiveness, quality assurance, and timely delivery.
                  </p>
                  <p className="leading-relaxed">
                    We apply a structured and transparent approach to procurement, designed to minimize risks and deliver optimal value across all project phases.
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
                    src="/images/procurement-detail.jpg"
                    alt="Procurement Services"
                    className="w-full h-[250px] object-cover"
                  />
                </div>
              </motion.div>

              {/* Procurement Phases */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg mb-8 border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Procurement Process Covers the Following Phases:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {phases.map((phase, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-4 p-4 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <phase.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">{phase.title}</h4>
                        <p className="text-gray-600 text-sm">{phase.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Technology Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg mb-8 border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Technology-Driven Procurement Oversight</h3>
                <p className="text-gray-700 mb-6">
                  To enhance control and transparency, DEISL utilizes integrated procurement management systems that capture and report on each phase of the procurement lifecycle. This ensures effective monitoring, auditing, and accountability throughout the supply chain.
                </p>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Strengths:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {strengths.map((strength, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      <span className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></span>
                      <span className="text-gray-700">{strength}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Conclusion */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <p className="text-gray-700 leading-relaxed">
                  Through our proactive procurement strategy, Digital Energy guarantees the seamless availability of equipment, materials, and services necessary to meet project deadlines and maintain operational efficiency.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProcurementServices 