"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import {
  Wrench,
  ShoppingCart,
  Building,
  CheckCircle,
  Settings,
  Users,
  Monitor,
  GraduationCap,
  Fuel,
} from "lucide-react"

const services = [
  {
    id: "engineering",
    icon: Wrench,
    title: "Engineering Services",
    description:
      "Comprehensive engineering solutions from conceptual design to detailed engineering across all disciplines.",
    features: [
      "Conceptual Design and Feasibility Studies",
      "Front-End Engineering Design (FEED)",
      "Detail Engineering Design",
      "Process and Facilities Engineering",
      "Electrical, Instrumentation & Control Design",
      "Structural and Civil Engineering",
    ],
    color: "bg-gradient-to-br from-orange-500 to-orange-700",
  },
  {
    id: "procurement",
    icon: ShoppingCart,
    title: "Procurement Services",
    description: "Strategic sourcing and supply chain management with global reach and local expertise.",
    features: [
      "Vendor Selection & Qualification",
      "Specification Compliance",
      "Quality Assurance & Testing",
      "Logistics & Transportation",
      "Site Delivery Tracking",
      "Cost Optimization",
    ],
    color: "bg-gradient-to-br from-blue-700 to-blue-900",
  },
  {
    id: "construction",
    icon: Building,
    title: "Construction & Installation",
    description: "Full-scale construction services for onshore and offshore energy projects.",
    features: [
      "Civil, Structural & Mechanical Installation",
      "Pipeline Construction",
      "Tank Farm Construction",
      "Electrical & Instrumentation Works",
      "Modular Systems Installation",
      "Facility Upgrades",
    ],
    color: "bg-gradient-to-br from-orange-500 to-orange-700",
  },
  {
    id: "commissioning",
    icon: CheckCircle,
    title: "Commissioning & Start-up",
    description: "Ensuring systems are tested, verified, and fully operational according to specifications.",
    features: [
      "Pre-commissioning Activities",
      "Mechanical Completion",
      "Functional Testing",
      "System Integration",
      "Performance Validation",
      "Handover Documentation",
    ],
    color: "bg-gradient-to-br from-blue-700 to-blue-900",
  },
  {
    id: "operations",
    icon: Settings,
    title: "Operations & Maintenance",
    description: "Comprehensive O&M services to ensure optimal asset performance and reliability.",
    features: [
      "Preventive & Corrective Maintenance",
      "Asset Integrity Management",
      "Emergency Response",
      "Equipment Upgrades",
      "Performance Optimization",
      "24/7 Support Services",
    ],
    color: "bg-gradient-to-br from-orange-500 to-orange-700",
  },
  {
    id: "manpower",
    icon: Users,
    title: "Technical Manpower Supply",
    description: "Certified professionals for short and long-term assignments across all technical disciplines.",
    features: [
      "Electrical & Instrumentation Engineers",
      "Mechanical & Piping Engineers",
      "QA/QC Inspectors & Technicians",
      "IRATA-Certified Technicians",
      "Project Engineers",
      "HSE Officers & Supervisors",
    ],
    color: "bg-gradient-to-br from-blue-700 to-blue-900",
  },
  {
    id: "digital",
    icon: Monitor,
    title: "Digital Solutions & Automation",
    description: "Advanced automation and digital transformation solutions for intelligent operations.",
    features: [
      "PLC, SCADA & Control Systems",
      "Industrial Software Solutions",
      "IIOT Integration",
      "Remote Monitoring Systems",
      "Predictive Analytics",
      "Cybersecurity Implementation",
    ],
    color: "bg-gradient-to-br from-orange-500 to-orange-700",
  },
  {
    id: "training",
    icon: GraduationCap,
    title: "Training & Consultancy",
    description: "Capacity building and performance enhancement through structured training programs.",
    features: [
      "Technical & Safety Training",
      "Competency Development",
      "Management Systems Advisory",
      "ISO Standards Implementation",
      "Skills Assessment",
      "Leadership Development",
    ],
    color: "bg-gradient-to-br from-blue-700 to-blue-900",
  },
  {
    id: "trading",
    icon: Fuel,
    title: "Petroleum Products Trading",
    description: "Reliable supply and trading of petroleum products across Nigeria and West Africa.",
    features: [
      "Premium Motor Spirit (PMS)",
      "Automotive Gas Oil (AGO)",
      "Aviation Turbine Kerosene",
      "Supply Chain Management",
      "Quality Assurance",
      "Strategic Partnerships",
    ],
    color: "bg-gradient-to-br from-orange-500 to-orange-700",
  },
]

const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true, margin: "-50px" }}
    className="h-full"
  >
    <div className="h-full group bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
      <div className="p-6 flex flex-col flex-grow">
        <div className={`${service.color} w-12 h-12 rounded-xl p-3 mb-5 flex items-center justify-center`}>
          <service.icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
          {service.title}
        </h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        
        <div className="mt-auto pt-4 border-t border-gray-100">
          <ul className="space-y-2">
            {service.features.slice(0, 3).map((feature, i) => (
              <li key={i} className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                </div>
                <span className="ml-3 text-sm text-gray-600">{feature}</span>
              </li>
            ))}
            {service.features.length > 3 && (
              <li className="text-sm text-blue-600 font-medium">
                +{service.features.length - 3} more services
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="px-6 pb-6">
        <Link 
          to={`/services/${service.id}`}
          className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
        >
          Learn more
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  </motion.div>
)

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/pic_2.png"
            alt="Services"
            className="w-full h-full object-cover"
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
            <p className="text-sm font-medium">Our Services</p>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Comprehensive <span className="text-orange-400">Energy Solutions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-blue-100 max-w-3xl leading-relaxed"
          >
            Comprehensive energy solutions across the entire value chain, delivering innovation, quality, and
            excellence in every project we undertake.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-gradient-to-br from-blue-800/50 to-blue-900/30 rounded-xl border border-blue-700/30"
            >
              <div className="text-5xl font-bold mb-2 text-orange-400">200+</div>
              <div className="text-xl font-medium">Projects Completed</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-gradient-to-br from-blue-800/50 to-blue-900/30 rounded-xl border border-blue-700/30"
            >
              <div className="text-5xl font-bold mb-2 text-orange-400">15+</div>
              <div className="text-xl font-medium">Years of Experience</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-gradient-to-br from-blue-800/50 to-blue-900/30 rounded-xl border border-blue-700/30"
            >
              <div className="text-5xl font-bold mb-2 text-orange-400">50+</div>
              <div className="text-xl font-medium">Industry Partners</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-orange-50 z-0"></div>
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white to-transparent z-10"></div>
        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Power Your Next Project?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Partner with us for innovative, reliable, and sustainable energy solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact/quote">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-8 py-4 rounded-xl font-medium shadow-lg shadow-orange-500/20"
                >
                  Request a Quote
                </motion.button>
              </Link>
              
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white border-2 border-blue-800 text-blue-800 hover:bg-blue-50 px-8 py-4 rounded-xl font-medium shadow-lg shadow-blue-500/10"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}