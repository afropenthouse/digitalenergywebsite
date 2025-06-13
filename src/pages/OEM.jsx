import { motion } from "framer-motion"
import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { CheckCircle, Award, Globe, Users } from "lucide-react"

// Country flag components
const FlagIcon = ({ country }) => {
  const flagClasses = "mr-2 w-6 h-6 rounded-sm object-cover border"
  
  // Simplified flag representation using emojis
  const flags = {
    "United Kingdom": "🇬🇧",
    "Ukraine": "🇺🇦",
    "Australia": "🇦🇺",
    "Netherlands": "🇳🇱",
    "Canada": "🇨🇦",
    "China": "🇨🇳",
    "United States of America": "🇺🇸",
    "Tunisia & Houston, Texas USA": "🇹🇳🇺🇸"
  }
  
  return (
    <span className={`${flagClasses} flex items-center justify-center text-xl`}>
      {flags[country] || "🌐"}
    </span>
  )
}

const partners = [
  {
    name: "Elster",
    logo: "/images/Honeywell.jpg",
    description: "Elster manufactures energy measuring systems, ultrasonic, turbine, rotary and diaphragm meters as well as gas pressure regulators for low, medium and high pressure. Electronic station flow computers, volume correctors, innovative data read-out and evaluation systems as well as automatic remote data read-out devices are in the electronics products range. Further more turnkey gas regulating and measuring stations of every size or test rigs for calibration of custody transfer gas meters complete the range of products focused on gas.",
    country: "United Kingdom"
  },
  {
    name: "Power Electronics",
    logo: "/images/Triol.png",
    description: "Manufacturer and provider of Power Electronics and software products",
    country: "Ukraine"
  },
  {
    name: "Oily Water Systems",
    logo: "/images/ultra.png",
    description: "Specializes in the design and supply of high-performance oily water separation systems.",
    country: "Australia"
  },
  {
    name: "Dredging Equipment",
    logo: "/images/straatman.png",
    description: "Leading provider of quick-release hooks, dredging equipment and solar systems.",
    country: "Netherlands"
  },
  {
    name: "Canadian Oil Equipment",
    logo: "/images/reef.jpg",
    description: "Supplying Canadian designed and fabricated oil and gas production parts and equipment to anywhere in the world on an expedited schedule.",
    country: "Canada"
  },
  {
    name: "Hunan Standard Steel",
    logo: "/images/HSco.png",
    description: "Hunan Standard Steel Pipe Co.,Ltd is the professional manufacturer and sales of steel, seamless steel pipe production, electric resistance welded steel pipe, steel pipe submerged two-sided spiral welded steel pipe, with an annual output of various types of steel pipe 200,000 tons; at the same time also operates oil and gas pipelines, marine equipment, pipe fittings, industrial automation systems, shore drilling platforms, power station equipment, their parts and components related services.",
    country: "China"
  },
  {
    name: "MAX Industrial Tools",
    logo: "/images/Max.png",
    description: "Since 1942, MAX has been recognized, worldwide, as a leading manufacturer of high-end industrial tools and office products.",
    country: "United States of America"
  },
  {
    name: "STAUFF USA",
    logo: "/images/Stauff.png",
    description: "For over 50 Years STAUFF USA has been serving the needs of Hydraulic Distributors and Equipment Manufacturers Using decades of experience and state-of-the-art production technologies, STAUFF has the reputation of being one of the world's most respected manufacturers of pipe clamps, test points, connectors, quick release couplings, filters, valves, diagtronics, hydraulic accessories and Custom Manufactured manipulated tube assemblies.",
    country: "United States of America"
  },
  {
    name: "Integration Objects",
    logo: "/images/objects.png",
    description: "Integration Objects is a software development firm created in 2002. The company is a systems integrator and solutions provider for knowledge management, automation and plant process management and decision support applications. It develops OPC software products and knowledge management platforms for manufacturers primarily in the oil and gas, refining and petrochemicals, chemical, food and beverage, steel and pharmaceutical industries. It also provides consulting services.",
    country: "Tunisia & Houston, Texas USA"
  }
]

export default function OEM() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-20">
      {/* Hero Section - Unchanged */}
      <section className="relative bg-gradient-to-r from-blue-800 to-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/Capture.PNG"
            alt="OEM"
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
            <p className="text-sm font-medium">OEM</p>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Strategic Partnerships <span className="text-orange-400">OEM</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-blue-100 max-w-3xl leading-relaxed"
          >
            Strategic alliances with industry leaders for cutting-edge solutions
          </motion.p>
        </div>
      </section>

      {/* Strategic Partnerships Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Our Partners
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-600 max-w-xl mx-auto"
            >
              We collaborate with leading companies to deliver exceptional value
            </motion.p>
          </div>

          {/* Partnership Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="h-full"
              >
                <Card className="h-full border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                  <CardContent className="p-6 h-full flex flex-col">
                    {/* Partner Header */}
                    <div className="flex items-center mb-4 pb-3 border-b border-gray-100">
                      <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="w-20 h-20 object-contain mr-4"
                      />
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">{partner.name}</h3>
                        <div className="flex items-center mt-1">
                          <FlagIcon country={partner.country} />
                          <span className="text-sm text-gray-600">{partner.country}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <div className="flex-grow">
                      <div className="text-gray-600 text-sm leading-relaxed">
                        {partner.description}
                      </div>
                    </div>
                    
                    {/* Product/Services Label */}
                    <div className="mt-4 pt-3 border-t border-gray-100">
                      <span className="inline-block bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-1 rounded-full">
                        Products & Services
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          {/* Partnership Benefits */}
          <div className="mt-20 pt-10 border-t border-gray-200">
            <div className="text-center mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-gray-900 mb-4"
              >
                Partnership Advantages
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-gray-600 max-w-xl mx-auto"
              >
                Benefits of working with our certified partners
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: CheckCircle,
                  title: "Quality Assurance",
                  description: "Manufacturer warranties & certifications"
                },
                {
                  icon: Award,
                  title: "Certified Partners",
                  description: "Reputable OEM manufacturers only"
                },
                {
                  icon: Globe,
                  title: "Global Reach",
                  description: "Access to latest technologies"
                },
                {
                  icon: Users,
                  title: "Technical Support",
                  description: "Expert training & support"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border border-gray-200 rounded-xl overflow-hidden bg-gradient-to-br from-white to-gray-50 shadow-sm hover:shadow-md transition-all flex flex-col justify-center items-center">
                    <CardContent className="p-5 flex flex-col items-center text-center">
                      <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-4 mt-6">
                        <benefit.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}