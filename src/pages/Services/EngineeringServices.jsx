import React from 'react'
import { motion } from 'framer-motion'
import { Wrench, Settings, FileText, Users, Shield, BarChart, Layout, Cpu, Factory, Gauge, Calculator, Building2, Ruler, Scale, ClipboardCheck, Eye, Waves, Anchor } from 'lucide-react'
import ServicesNav from './ServicesNav'

const EngineeringServices = () => {
  const solutions = [
    "Conceptual Design and Feasibility Studies",
    "Front-End Engineering Design (FEED)",
    "Integrated field development planning – feasibility, concept, pre-FEED",
    "Basic Engineering Design",
    "Detail Engineering Design",
    "Pipeline engineering",
    "Piping engineering (stress analysis and materials)",
    "Piping layout design",
    "Process and facilities engineering design",
    "Electrical, instrumentation, automation and control (control systems, field instruments, metering) engineering design",
    "Flow assurance and dynamic process simulation - Dynamic simulation and transient analysis",
    "Engineering Cost and schedule estimation",
    "Risk, safety, and environmental engineering – HAZOP, HAZIND etc",
    "Plant Layout design",
    "Rotating machinery engineering design",
    "Structural engineering Design",
    "Civil engineering Design",
    "Weight and cost estimating",
    "Construction and Fabrication Engineering",
    "Late life asset management – production enhancement, concept studies, structural and marine assurance, cost estimating",
    "As-built drawings",
    "Engineering consultancy services – Owners Engineer",
    "Third party design verification",
    "Vibration analysis and acoustic engineering",
    "Complex offshore structural analysis and fatigue / life extension assessment"
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
                src="/images/p4.jpg"
                alt="Engineering Services"
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
                Engineering <span className="text-orange-400">Services</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-blue-100 max-w-3xl leading-relaxed"
              >
                Professional engineering solutions for your business needs.
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Engineering Solutions</h3>
                <div className="space-y-6 text-gray-700">
                  <p className="leading-relaxed">
                    'Fit to Purpose' engineering solutions with a technology focus and specialized design & engineering expertise.
                  </p>
                  <p className="leading-relaxed">
                    Digital Energy offers clients a one-stop-shop for major projects by combining project management, survey, design, detailed engineering, fabrication, installation and maintenance engineering capabilities. Our Engineering and Procurement team work closely with each other to ensure early sourcing of major and long-lead equipment and to ensure compliance with the technical requirements and customer specifications. Quality engineering in projects is the essence of success.
                  </p>
                  <p className="leading-relaxed">
                    DEISL's Professional group of engineers, designers and draftsmen provide conceptual designs from the proposal stage of a project all the way to detailed construction drawings and as-built drawings at the construction stage. The group utilizes state of the art engineering software with computer aided design (CAD) systems for all its two- and three-dimensional designs, modelling, simulations and calculations. The Group is supported by its home offices in Lagos, Port Harcourt, Calabar and Abuja Nigeria.
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
                    src="/images/p4.jpg"
                    alt="Engineering Services"
                    className="w-full h-[250px] object-cover"
                  />
                </div>
              </motion.div>

              {/* Solutions List */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Engineering Tailored Solutions Include:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {solutions.map((solution, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700">{solution}</span>
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

export default EngineeringServices 