import React from 'react'
import { motion } from 'framer-motion'
import ServicesNav from './ServicesNav'

// Operations & Maintenance (O&M) Services
const OperationsMaintenance = () => {
  const services = [
    {
      title: 'Integrated Maintenance Management',
      items: [
        'Global/Integrated Maintenance Contracts (GMC/IMSC)',
        'Computerized Preventive, Predictive & Corrective Maintenance',
        'Planned, Routine & Emergency Maintenance',
        '24/7 Maintenance Call-Out Teams',
        'OEM-based Preventive Maintenance Programs',
        'Equipment Health Condition Monitoring',
        'Maintenance Planning & Reliability Improvement'
      ]
    },
    {
      title: 'Plant Turnaround & Shutdown Services',
      items: [
        'Plant Turnaround & Shutdown Maintenance',
        'Facility Revamps, Upgrades & Brownfield Modifications',
        'Shutdown Planning, Execution & Commissioning Support',
        'Critical Equipment Replacement',
        'Start-up & Restart Support'
      ]
    },
    {
      title: 'Mechanical Equipment Maintenance',
      items: [
        'Static Equipment Maintenance',
        'Rotating Equipment Maintenance',
        'Pumps, Compressors & Turbines',
        'Pressure Vessels, Columns & Drums',
        'Heat Exchangers & Furnaces',
        'Mechanical Repairs & Refurbishment',
        'Precision Alignment & Equipment Overhaul'
      ]
    },
    {
      title: 'Electrical, Instrumentation & Control (E&I)',
      items: [
        'Electrical Equipment Maintenance',
        'Instrumentation Maintenance',
        'Calibration & Functional Testing',
        'Recalibration & Recertification of Instruments',
        'Control Systems Maintenance',
        'HVAC Electrical & Control Systems',
        'Panel, Sensor & Control Unit Maintenance'
      ]
    },
    {
      title: 'Valve, Metering & Process Systems',
      items: [
        'Valve Servicing & Refurbishment',
        'PSV/PVSV Testing, Certification & Recalibration',
        'Custody Transfer Metering Maintenance',
        'Meter Inspection & Recertification',
        'Prover Loop Certification',
        'Ultrasonic Flow Meter Maintenance',
        'Tank Gauging System Maintenance'
      ]
    },
    {
      title: 'Pipeline, Process & Production Support',
      items: [
        'Pipeline Maintenance',
        'Pigging Operations',
        'Flushing & Chemical Cleaning',
        'Nitrogen Purging',
        'Vessel Cleaning',
        'Tank Cleaning & Desanding',
        'Leak Detection & Repair',
        'Flange Management',
        'Process Safety Support'
      ]
    },
    {
      title: 'Asset Integrity & Corrosion Management',
      items: [
        'Asset Integrity Management',
        'Fabric Maintenance',
        'Corrosion Monitoring & Control',
        'Risk-Based Coating Services',
        'Cathodic Protection Inspection & Maintenance',
        'Corrosion Under Insulation (CUI) Inspection & Repair',
        'Protective Coating Maintenance'
      ]
    },
    {
      title: 'Storage Tanks & Structural Maintenance',
      items: [
        'Tank Fabrication',
        'Tank Repairs & Upgrades',
        'Tank Rehabilitation',
        'Foundation Stabilization',
        'Structural Repairs',
        'Civil & Structural Maintenance'
      ]
    },
    {
      title: 'Utility & Facility Maintenance',
      items: [
        'HVAC Maintenance',
        'Living Quarters Maintenance & Refurbishment',
        'Utility Systems Maintenance',
        'Water Treatment Systems',
        'Lighting Systems',
        'Power Distribution Systems',
        'Building & Facility Maintenance'
      ]
    },
    {
      title: 'Marine, Navigation & Communication Systems',
      items: [
        'Radar System Maintenance',
        'Navigational Aids Maintenance',
        'Marine Radio Equipment Maintenance',
        'GMDSS Maintenance & Subscription Renewal',
        'Calm Buoy Inspection & Repair'
      ]
    },
    {
      title: 'Fire, Safety & Lifting Systems',
      items: [
        'Fire Protection Systems Maintenance',
        'Fire Fighting Equipment Inspection & Servicing',
        'Safety Equipment Maintenance',
        'Elevator Inspection, Repair & Maintenance',
        'Safety Compliance Inspections'
      ]
    },
    {
      title: 'Specialist Field Services',
      items: [
        'Bolting, Torquing & Tensioning',
        'Hot Bolting Services',
        'Scaffold Erection & Dismantling',
        'Inspection Support Services',
        'Specialist Field Maintenance Crews',
        'Supply of Competent Maintenance Personnel',
        'Workshop, Fabrication & Machine Shop Support'
      ]
    }
  ]

  const whyChooseUs = [
    'Integrated preventive, predictive, corrective and shutdown maintenance solutions',
    'Multi-disciplinary mechanical, electrical, instrumentation and civil capabilities',
    'Asset integrity and reliability-focused maintenance programs',
    'Experienced OEM-trained technical personnel',
    'Rapid-response maintenance teams available 24/7',
    'Fully equipped fabrication, machining and refurbishment facilities',
    'Compliance with international standards, OEM requirements and industry best practices',
    'Proven capability supporting upstream, midstream and downstream oil & gas assets'
  ]

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
                src="/images/Services/OperationsMaintenance/operation.webp"
                alt="Operations & Maintenance Services"
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
                <p className="text-sm font-medium">Our Services</p>
              </motion.div>
               <motion.h2 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.2 }}
                 className="text-4xl md:text-5xl font-bold mb-6"
               >
                 Operations & Maintenance <span className="text-orange-400">(O&M)</span>
               </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-blue-100 max-w-3xl leading-relaxed"
              >
                 End-to-end O&M solutions maximizing asset performance and operational reliability.
               </motion.p>
            </div>
          </motion.div>

          {/* Navigation and Content Section */}
          <div className="flex flex-col md:flex-row gap-8">
             {/* Navigation Sidebar */}
             <div className="w-full md:w-56 flex-shrink-0 md:sticky md:top-24">
              <ServicesNav />
            </div>

            {/* Content Area */}
            <div className="flex-1">
              {/* Overview Section */}
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="bg-white rounded-2xl p-8 shadow-lg mb-4 border border-gray-100"
               >
                 <h3 className="text-2xl font-bold text-gray-900 mb-6">Operations & Maintenance (O&M) Services</h3>
                 <div className="space-y-6 text-gray-700">
                   <p className="leading-relaxed">
                     Digital Energy & Integrated Services Limited provides comprehensive Operations & Maintenance (O&M) solutions that maximize asset performance, improve equipment reliability, enhance safety, and extend the operational life of critical facilities. Our integrated maintenance approach combines preventive, predictive, corrective, and shutdown maintenance with asset integrity and specialist engineering services across upstream, midstream, and downstream operations.
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
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                   <div className="relative rounded-lg overflow-hidden shadow-md">
                     <img
                       src="/images/Services/OperationsMaintenance/om1.jpeg"
                       alt="Operations and Maintenance 1"
                       className="w-full h-[250px] object-cover"
                     />
                   </div>
                   <div className="relative rounded-lg overflow-hidden shadow-md">
                     <img
                       src="/images/Services/OperationsMaintenance/om2.jpeg"
                       alt="Operations and Maintenance 2"
                       className="w-full h-[250px] object-cover"
                     />
                   </div>
                   <div className="relative rounded-lg overflow-hidden shadow-md">
                     <img
                       src="/images/Services/OperationsMaintenance/om4.jpeg"
                       alt="Operations and Maintenance 3"
                       className="w-full h-[250px] object-cover"
                     />
                   </div>
                 </div>
               </motion.div>
             </div>
           </div>

           {/* Services Grid - Full Width */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="bg-white rounded-2xl p-8 shadow-lg mb-8 border border-gray-100"
           >
             <h3 className="text-2xl font-bold text-gray-900 mb-6">Operations & Maintenance (O&M) Capabilities</h3>
             <div className="grid md:grid-cols-4 gap-4">
               {services.map((service, index) => (
                 <motion.div
                   key={index}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: index * 0.1 }}
                       className="bg-white rounded-2xl p-3 shadow-md hover:shadow-lg transition-all duration-300 border border-blue-200"
                 >
                       <h4 className="text-base font-semibold text-gray-900 mb-1">{service.title}</h4>
                       <div className="space-y-0">
                         {service.items.map((item, idx) => (
                           <motion.div
                             key={idx}
                             initial={{ opacity: 0, x: -20 }}
                             whileInView={{ opacity: 1, x: 0 }}
                             viewport={{ once: true }}
                             transition={{ delay: index * 0.1 + idx * 0.05 }}
                             className="flex items-start space-x-2 py-0.5"
                           >
                             <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-1.5"></span>
                             <span className="text-gray-700 text-xs">{item}</span>
                           </motion.div>
                         ))}
                       </div>
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
             <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Clients Choose Digital Energy</h3>
             <div className="space-y-1">
               {whyChooseUs.map((item, index) => (
                 <motion.div
                   key={index}
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: index * 0.1 }}
                   className="flex items-start space-x-2 py-1"
                 >
                   <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></span>
                   <span className="text-gray-700 text-sm">{item}</span>
                 </motion.div>
               ))}
             </div>
           </motion.div>
         </div>
       </div>
    </div>
  )
}

export default OperationsMaintenance 