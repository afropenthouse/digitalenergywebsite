import React from 'react'
import { motion } from 'framer-motion'
import { Users, GraduationCap, Briefcase, FileText, Shield, Settings, Zap, Wrench, ClipboardCheck, Ruler } from 'lucide-react'
import ServicesNav from './ServicesNav'

const TechnicalManpower = () => {
  const manpowerServices = [
    {
      title: "Electrical & Instrumentation",
      icon: Zap,
      items: [
        "Electrical Engineers",
        "Instrumentation Engineers",
        "E&I Technicians",
        "Control Systems Specialists"
      ]
    },
    {
      title: "Mechanical & Piping",
      icon: Wrench,
      items: [
        "Mechanical Engineers",
        "Piping Engineers",
        "Mechanical Technicians",
        "Pipe Fitters"
      ]
    },
    {
      title: "Quality & Safety",
      icon: Shield,
      items: [
        "QA/QC Inspectors",
        "NDT Technicians",
        "Welding Inspectors",
        "HSE Officers & Supervisors"
      ]
    },
    {
      title: "Project Management",
      icon: Briefcase,
      items: [
        "Project Engineers",
        "Construction Supervisors",
        "Planning Engineers",
        "Document Controllers"
      ]
    },
    {
      title: "Specialized Services",
      icon: Settings,
      items: [
        "IRATA-Certified Technicians",
        "Subsea Inspection Specialists",
        "ROV Pilots",
        "Commissioning Personnel"
      ]
    },
    {
      title: "Operations & Maintenance",
      icon: ClipboardCheck,
      items: [
        "O&M Technicians",
        "Maintenance Engineers",
        "Operations Supervisors",
        "Field Service Engineers"
      ]
    }
  ]

  const keyFeatures = [
    "Certified Personnel: All personnel possess relevant industry certifications such as COREN, IRATA, ASNT, BOSIET, OPITO, ISO, AWS, and OSHA, ensuring compliance with international standards.",
    "Flexible Staffing Models: DEISL supports project-based hiring, rotational assignments, short-term mobilization, and long-term deployment to meet dynamic project needs.",
    "Specialized Roles: We supply niche professionals for complex scopes including ROV inspections, rope access NDT, automation & control integration, and commissioning/start-up operations.",
    "Rapid Mobilization: Our database of vetted professionals and structured recruitment process ensures swift deployment without compromising quality.",
    "Local & Expat Personnel: We support local content development by providing a strong pool of indigenous professionals, and also supply expatriates where specialized expertise is required."
  ]

  const managementSupport = [
    "Pre-screening and competency evaluation",
    "Medicals, certifications, and insurance coordination",
    "Travel logistics and accommodation support",
    "Timesheet and payroll management",
    "Site induction and safety training",
    "Personnel performance tracking and feedback reporting"
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
                src="/images/manpower.jpg"
                alt="Technical Manpower Supply"
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
                Technical <span className="text-orange-400">Manpower Supply</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-blue-100 max-w-3xl leading-relaxed"
              >
                Certified Personnel | Project Staffing | IRATA Technicians | Specialized Roles
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Manpower Supply</h3>
                <div className="space-y-6 text-gray-700">
                  <p className="leading-relaxed">
                    Digital Energy & Integrated Services Limited (DEISL) offers reliable, scalable, and efficient Technical Manpower Supply solutions to support client operations across upstream, midstream, and downstream oil & gas projects, as well as in the energy, infrastructure, and industrial sectors.
                  </p>
                  <p className="leading-relaxed">
                    Our strength lies in our ability to mobilize highly qualified and certified professionals for both short- and long-term assignments, ensuring that projects are executed safely, on time, and within budget.
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
                    src="/images/manpower-detail.jpg"
                    alt="Technical Manpower Supply"
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Scope of Technical Manpower Services</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {manpowerServices.map((service, index) => (
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features of Our Manpower Solutions</h3>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Manpower Management & Support</h3>
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

export default TechnicalManpower 