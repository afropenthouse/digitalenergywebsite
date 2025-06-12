import React from 'react'
import { motion } from 'framer-motion'
import { HardHat, Building2, Wrench, Factory, Cpu, Ruler, Shield, Users, Globe, Settings } from 'lucide-react'
import ServicesNav from './ServicesNav'

const FabricationConstruction = () => {
  const constructionServices = [
    {
      title: "Site Development & Pile Foundations",
      icon: Building2
    },
    {
      title: "Civil, Structural, Mechanical, and E&I Installation",
      icon: HardHat
    },
    {
      title: "Plant & Non-Plant Facilities Construction",
      icon: Factory
    },
    {
      title: "Piping & Mechanical Erection",
      icon: Wrench
    },
    {
      title: "Electrical & Instrumentation Works",
      icon: Cpu
    },
    {
      title: "Storage Tank Construction",
      icon: Ruler
    },
    {
      title: "Cross-Country & Infield Pipeline Laying",
      icon: Settings
    }
  ]

  const fabricationServices = [
    {
      title: "Shop Fabrication – Piping and Structures",
      icon: Factory
    },
    {
      title: "Pressure Tanks & Vessels",
      icon: Building2
    },
    {
      title: "Pipe Fabrication (2\" diameter and above)",
      icon: Settings
    },
    {
      title: "Electrical & Pipe Steel Supports",
      icon: Wrench
    },
    {
      title: "Steel Structures (Platforms, Ladders, Stairs)",
      icon: Building2
    },
    {
      title: "Pipe Spools and Skids for Pumps/Compressors",
      icon: Factory
    },
    {
      title: "Specialized Mechanical & Electrical Components",
      icon: Cpu
    }
  ]

  const facilities = [
    "Coded Welding to ASME IX, BS 4870 & BS EN 288",
    "In-house Metal Forming and Assembly",
    "Hydro and Functional Test Areas",
    "CNC Machining Linked to 3D CAD for Precision Manufacturing",
    "On-site Fabrication and Mobilization for Remote Projects"
  ]

  const valueProps = [
    "End-to-end construction and fabrication capabilities",
    "Rapid mobilization and execution of time-critical projects",
    "ISO-certified quality and HSE management systems",
    "Experienced workforce and certified technical personnel",
    "Focus on local content development and community engagement"
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
                src="/images/fabrication.jpg"
                alt="Fabrication & Construction Services"
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
                Fabrication & <span className="text-orange-400">Construction</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-blue-100 max-w-3xl leading-relaxed"
              >
                Integrated fabrication and construction solutions for energy projects.
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Fabrication & Construction Services</h3>
                <div className="space-y-6 text-gray-700">
                  <p className="leading-relaxed">
                    Digital Energy & Integrated Services Limited (DEISL) provides a fully integrated suite of Fabrication and Construction services, delivering innovative and cost-effective solutions for both onshore and offshore energy projects. Our capabilities span Civil, Mechanical, Electrical, and Instrumentation construction, as well as advanced fabrication of structures and components critical to the Oil & Gas, Petrochemical, and Infrastructure sectors.
                  </p>
                  <p className="leading-relaxed">
                    We leverage cutting-edge technology, a modern fabrication yard, and highly skilled multidisciplinary teams to execute complex projects to the highest industry standards.
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
                    src="/images/fabrication-detail.jpg"
                    alt="Fabrication & Construction"
                    className="w-full h-[250px] object-cover"
                  />
                </div>
              </motion.div>

              {/* Construction Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg mb-8 border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Construction Services</h3>
                <p className="text-gray-700 mb-6">
                  We offer turnkey construction services across a wide range of disciplines, ensuring timely project delivery and strict adherence to safety and quality standards. Our construction teams have decades of combined experience executing projects across Nigeria and internationally.
                </p>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Scope of Construction Work:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {constructionServices.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="text-gray-700">{service.title}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Fabrication Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg mb-8 border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Fabrication Services</h3>
                <p className="text-gray-700 mb-6">
                  DEISL delivers comprehensive fabrication services to support construction and engineering projects from concept to completion. Our Port Harcourt-based fabrication yard covers over 150,000 m² and is equipped with modern machinery, pressure testing setups, and a CNC-enabled machine shop integrated with 3D CAD systems.
                </p>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Scope of Fabrication Work:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {fabricationServices.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="text-gray-700">{service.title}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Facilities & Capabilities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg mb-8 border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Facilities & Capabilities</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {facilities.map((facility, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      <span className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></span>
                      <span className="text-gray-700">{facility}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Value Proposition */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Value Proposition</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {valueProps.map((prop, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      <span className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></span>
                      <span className="text-gray-700">{prop}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-gray-700 mt-6">
                  Digital Energy ensures that every structure, system, or facility we build meets the highest levels of functionality, safety, and durability, supporting our clients through the full project lifecycle — from engineering and fabrication to construction and commissioning.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FabricationConstruction 