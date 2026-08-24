import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import ServicesNav from './ServicesNav'

const FabricationConstruction = () => {
  const [openSection, setOpenSection] = useState(null)

  const machineShopServices = [
    "Supply of OCTG Pipes and Joints",
    "API & Premium Threading",
    "Oilwell Swaging & End Preparation",
    "Bucking: Breakout and Make-up Operations",
    "Inspection & Repairs",
    "Drilling Jar Redressing",
    "Manufacturing of Conductors & connectors, Crossovers & pup joints, Coupling, threading, Drilling & completion accessories, Flanges to customer requirement (ANSI B16.5/BS1560 Rating 150lb to 2500lb)",
    "Carbon steel to ASTM A105N",
    "Repair works, conductor casings &",
    "Riser inspection & refurbishment",
    "Cold cutting and machining services",
    "Hard Facing and Hard-banding"
  ]

  const fabricationShopServices = [
    "Fabrication of piping spools and Structures",
    "Welding of conductor pipes, well heads, conductor housing"
  ]

  const ndtInspectionServices = [
    "Electromagnetic Inspection (EMI) of drill pipes that can detect longitudinal and transverse defects as well as wall thickness reduction.",
    "Ultrasonic inspection: Flaw detection and wall thickness check",
    "Tubular storage and inventory control",
    "Wet and dry special end area inspection",
    "Ultrasonic weld line inspection",
    "Teflon and Metal Drift Mandrels"
  ]

  const accordionSections = [
    {
      id: 'machineShop',
      title: 'Machine Shop Services:',
      items: machineShopServices
    },
    {
      id: 'fabricationShop',
      title: 'Fabrication Shop Services',
      items: fabricationShopServices
    },
    {
      id: 'ndtInspection',
      title: 'The NDT Inspection Services',
      items: ndtInspectionServices
    }
  ]

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id)
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
                src="/images/Services/FabricationConstruction/fabrication.webp"
                alt="Fabrication and Machining of OCTG Pipes and Joints"
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
                <p className="text-sm font-medium">OCTG Solutions</p>
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                 Fabrication and Machining of <span className="text-orange-400">OCTG Pipes and Joints</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-white max-w-3xl leading-relaxed"
              >
                Precision fabrication, OCTG pipe and joints machining & manufacturing
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Fabrication and Machining of OCTG Pipes and Joints</h3>
                <div className="space-y-6 text-gray-700">
                  <p className="leading-relaxed">
                    Precision Fabrication, OCTG Pipe and Joints Machining & Manufacturing
                  </p>
                  <p className="leading-relaxed">
                    Our Port Harcourt facility is a world-class, API and Premium-thread certified machine shop, one of the largest in the region. The shop is fully equipped with diverse machining capabilities and an in-house welding and fabrication shop, built to meet the highest industry standards.
                  </p>
                  <p className="leading-relaxed">
                    We provide global OCTG support to our customers through strategic partnerships with major mills and a wide supply network, we deliver tubing, casing, and line pipe in various sizes, grades, and API or premium threads. We are committed to on-time delivery and reliable service.
                  </p>
                  <p className="leading-relaxed">
                    Complex machining is our core business. To address gaps in local manufacturing, we have invested in specialized capacity and expertise to deliver high-integrity components such as wellheads, Christmas trees, and casing spools to OEM specifications.
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
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative rounded-lg overflow-hidden shadow-md">
                     <img
                       src="/images/Services/FabricationConstruction/Fabrication2.jpg"
                       alt="OCTG Pipe Machining"
                       className="w-full h-[250px] object-cover"
                     />
                  </div>
                  <div className="relative rounded-lg overflow-hidden shadow-md">
                     <img
                       src="/images/Services/FabricationConstruction/Fabrication1.webp"
                       alt="OCTG Joints Manufacturing"
                       className="w-full h-[250px] object-cover"
                     />
                  </div>
                </div>
                </motion.div>

               {/* Accordion Dropdowns */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg mb-8 border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Services</h3>
                <div className="space-y-3">
                  {accordionSections.map((section) => (
                    <div key={section.id} className="border border-gray-200 rounded-xl overflow-hidden">
                      <button
                        onClick={() => toggleSection(section.id)}
                        className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-blue-50 transition-colors text-left"
                      >
                        <span className="text-lg font-semibold text-gray-900">{section.title}</span>
                        <motion.div
                          animate={{ rotate: openSection === section.id ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-5 h-5 text-blue-600" />
                        </motion.div>
                      </button>
                      <AnimatePresence initial={false}>
                        {openSection === section.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className="p-4 bg-white">
                              <ul className="list-disc pl-6 space-y-2">
                                {section.items.map((item, index) => (
                                  <li key={index} className="leading-relaxed text-gray-700">{item}</li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
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

export default FabricationConstruction