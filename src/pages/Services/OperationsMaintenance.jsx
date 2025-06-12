import React from 'react'
import { motion } from 'framer-motion'
import { Wrench, Settings, Shield, FileText, Users, BarChart, Building2, Zap, Clock } from 'lucide-react'
import ServicesNav from './ServicesNav'

const OperationsMaintenance = () => {
  const services = [
    {
      id: 1,
      title: 'Preventive and Corrective Maintenance',
      description: 'Scheduled and emergency maintenance to ensure uninterrupted operations and mitigate equipment failures.',
      icon: Wrench
    },
    {
      id: 2,
      title: 'Asset Integrity Management',
      description: 'Ongoing inspection, monitoring, and servicing to maintain asset reliability, safety, and regulatory compliance.',
      icon: Shield
    },
    {
      id: 3,
      title: 'Tanks Fabrication, Repairs & Upgrades',
      description: 'Structural restoration and modification of storage tanks, including civil/structural works and foundation stabilization.',
      icon: Building2
    },
    {
      id: 4,
      title: 'Instrumentation and Electrical Maintenance',
      description: 'Calibration, testing, troubleshooting, and repair of E&I systems, panels, sensors, and control units.',
      icon: Settings
    },
    {
      id: 5,
      title: 'Mechanical and Rotating Equipment Maintenance',
      description: 'Comprehensive servicing of pumps, compressors, turbines, valves, and pressure systems.',
      icon: Wrench
    },
    {
      id: 6,
      title: 'Pipeline Maintenance',
      description: 'Leak detection, repair, pigging, re-coating, and corrosion control for onshore and offshore pipelines.',
      icon: BarChart
    },
    {
      id: 7,
      title: 'Utility Systems Support',
      description: 'Operation and maintenance of HVAC, lighting, water treatment, fire protection, and power distribution systems.',
      icon: Zap
    },
    {
      id: 8,
      title: '24/7 Operational Support and Emergency Response',
      description: 'Rapid deployment teams and continuous support to handle critical outages and operational disruptions.',
      icon: Clock
    }
  ]

  const whyChooseUs = [
    'Integrated Service Delivery across mechanical, electrical, instrumentation, and civil disciplines',
    'Highly skilled multidisciplinary workforce with OEM and field experience',
    'Commitment to HSE excellence and environmental compliance',
    'Digital reporting and asset tracking tools for performance transparency and real-time analytics',
    'Strong local partnerships to support Nigerian Content Development'
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
                src="/images/operations.jpg"
                alt="Operations & Maintenance Services"
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
                Operations & <span className="text-orange-400">Maintenance</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-blue-100 max-w-3xl leading-relaxed"
              >
                End-to-end O&M services ensuring optimal asset performance and extended infrastructure life cycle.
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Operations & Maintenance (O&M) Services</h3>
                <div className="space-y-6 text-gray-700">
                  <p className="leading-relaxed">
                    Digital Energy & Integrated Services Limited (DEISL) offers end-to-end Operations and Maintenance (O&M) services that ensure optimal asset performance, reduce downtime, and extend the life cycle of infrastructure across the energy value chain.
                  </p>
                  <p className="leading-relaxed">
                    Our O&M services are designed to deliver sustainable value by combining technical expertise, advanced maintenance strategies, and strict compliance with industry standards. We support a wide range of facilities, including oil & gas production installations, tank farms, pipelines, terminals, substations, and other energy infrastructure.
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
                    src="/images/operations-detail.jpg"
                    alt="Operations & Maintenance"
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our O&M Capabilities Include:</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {services.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                    >
                      <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                        <service.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h4>
                      <p className="text-gray-600">{service.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Why Choose Us Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Digital Energy for O&M?</h3>
                <div className="space-y-4">
                  {whyChooseUs.map((item, index) => (
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

export default OperationsMaintenance 