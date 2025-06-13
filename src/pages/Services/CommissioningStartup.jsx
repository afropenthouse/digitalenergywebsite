import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Wrench, Settings, Users, FileText, Shield } from 'lucide-react'
import ServicesNav from './ServicesNav'

const CommissioningStartup = () => {
  const commissioningPhases = [
    {
      title: "Pre-commissioning Activities",
      icon: Wrench,
      items: [
        "Cleaning, flushing, blowing, and drying of pipelines and equipment",
        "Leak testing and pressure testing (hydrotest/pneumatic test)",
        "Cable meggering and loop checks",
        "Instrument calibration and verification",
        "Inspection of rotating equipment and static assets",
        "Energization checks and electrical system verifications"
      ]
    },
    {
      title: "Mechanical Completion",
      icon: CheckCircle,
      items: [
        "Punch list management and closure",
        "Verification of installation against approved drawings and datasheets",
        "System handover from construction to commissioning team",
        "Documentation of certificates and checklists"
      ]
    },
    {
      title: "Functional Testing & Commissioning",
      icon: Settings,
      items: [
        "Control system validation (DCS/PLC/SIS)",
        "Emergency shutdown system testing",
        "Simulation of operational scenarios",
        "Rotating equipment run-in and performance checks",
        "Integration and interlock testing",
        "Cold and hot commissioning"
      ]
    },
    {
      title: "Start-up Assistance",
      icon: Users,
      items: [
        "System tuning and optimization",
        "Operator support and training",
        "Interface management with operations team",
        "Start-up reporting and log tracking"
      ]
    },
    {
      title: "Handover Documentation",
      icon: FileText,
      items: [
        "As-built drawings",
        "Red-line mark-ups",
        "Test reports and checklists",
        "Equipment data sheets and calibration certificates",
        "Final Mechanical Completion and Commissioning Dossiers",
        "System Handover Certificates"
      ]
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
                src="/images/pic_5.jpg"
                alt="Commissioning & Start-up Services"
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
                Commissioning & <span className="text-orange-400">Start-up</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-blue-100 max-w-3xl leading-relaxed"
              >
                Pre-commissioning | Mechanical Completion | Functional Testing | Handover Documentation
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Commissioning & Start-up Services</h3>
                <div className="space-y-6 text-gray-700">
                  <p className="leading-relaxed">
                    At Digital Energy & Integrated Services Limited (DEISL), we provide comprehensive Commissioning and Start-up services designed to ensure that systems and facilities are tested, verified, and fully operational in accordance with design specifications, industry codes, and client expectations.
                  </p>
                  <p className="leading-relaxed">
                    Our services are aligned with best practices and industry standards to ensure a seamless transition from construction to operational readiness. We apply a structured and integrated approach that reduces start-up delays, optimizes asset performance, and ensures safe and reliable operation from day one.
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
                    src="/images/pic_5.jpg"
                    alt="Commissioning & Start-up"
                    className="w-full h-[250px] object-cover"
                  />
                </div>
              </motion.div>

              {/* Commissioning Phases */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Commissioning Scope Includes:</h3>
                <div className="space-y-8">
                  {commissioningPhases.map((phase, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                          <phase.icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900">{phase.title}</h4>
                      </div>
                      <div className="pl-13 space-y-2">
                        {phase.items.map((item, itemIndex) => (
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommissioningStartup 