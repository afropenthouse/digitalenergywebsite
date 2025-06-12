import React from 'react'
import { motion } from 'framer-motion'
import { HardHat, Wrench, Ruler, ClipboardCheck, Users, Shield } from 'lucide-react'
import ServicesNav from './ServicesNav'

const ConstructionInstallation = () => {
  const services = [
    {
      id: 1,
      title: 'Project Management',
      description: 'Comprehensive project management ensuring timely and efficient execution.',
      icon: HardHat
    },
    {
      id: 2,
      title: 'Equipment Installation',
      description: 'Professional installation of all types of industrial equipment.',
      icon: Wrench
    },
    {
      id: 3,
      title: 'Site Planning',
      description: 'Detailed site planning and layout optimization for maximum efficiency.',
      icon: Ruler
    },
    {
      id: 4,
      title: 'Quality Control',
      description: 'Rigorous quality control and inspection processes throughout construction.',
      icon: ClipboardCheck
    },
    {
      id: 5,
      title: 'Team Management',
      description: 'Expert management of construction and installation teams.',
      icon: Users
    },
    {
      id: 6,
      title: 'Safety Compliance',
      description: 'Strict adherence to safety standards and regulations.',
      icon: Shield
    }
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
                src="/images/construction.jpg"
                alt="Construction & Installation"
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
                Construction & <span className="text-orange-400">Installation</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-blue-100 max-w-3xl leading-relaxed"
              >
                Professional construction and installation services delivered with precision and expertise.
              </motion.p>
            </div>
          </motion.div>

          {/* Navigation and Content Section */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Navigation Sidebar */}
            <div className="w-56 flex-shrink-0">
              <ServicesNav />
            </div>

            {/* Content Area */}
            <div className="flex-1">
              {/* Services Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                      <service.icon className="w-7 h-7 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Additional Content Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our Construction & Installation Services?</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      Our team of experienced professionals ensures high-quality construction and installation services.
                    </p>
                    <p className="text-gray-700">
                      We use state-of-the-art equipment and follow industry best practices for all projects.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      Our comprehensive project management approach ensures timely completion and cost-effectiveness.
                    </p>
                    <p className="text-gray-700">
                      We maintain strict safety standards and comply with all relevant regulations throughout the process.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConstructionInstallation 