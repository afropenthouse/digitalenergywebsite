import React from 'react'
import { motion } from 'framer-motion'
import ServicesNav from './ServicesNav'

const FabricationConstructionServices = () => {
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
                alt="Fabrication & Construction Services"
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
                Fabrication & <span className="text-orange-400">Construction Services</span>
              </motion.h2>
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg mb-8 border border-gray-100"
              >
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

               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="bg-white rounded-2xl p-8 shadow-lg mb-8 border border-gray-100"
               >
                 <h3 className="text-2xl font-bold text-gray-900 mb-6">Construction Services</h3>
                 <div className="space-y-6 text-gray-700">
                   <p className="leading-relaxed">
                     We offer turnkey construction services across a wide range of disciplines, ensuring timely project delivery and strict adherence to safety and quality standards. Our construction teams have decades of combined experience executing projects across Nigeria and internationally.
                   </p>
                 </div>
                 <h4 className="text-xl font-semibold text-gray-900 mt-8 mb-2">Work scope</h4>
                 <ul className="list-disc pl-6 space-y-1">
                   <li className="leading-relaxed">Site Development & Pile Foundations</li>
                   <li className="leading-relaxed">Civil, Structural, Mechanical, and E&I Installation</li>
                   <li className="leading-relaxed">Plant & Non-Plant Facility Construction</li>
                   <li className="leading-relaxed">Pipeline Construction, Piping & Mechanical Erection</li>
                   <li className="leading-relaxed">Electrical & Instrumentation Works</li>
                   <li className="leading-relaxed">Storage Tank/ Pressure Vessels Construction</li>
                   <li className="leading-relaxed">Concept, Design Engineering to Completion and Commissioning</li>
                 </ul>
               </motion.div>
             </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default FabricationConstructionServices