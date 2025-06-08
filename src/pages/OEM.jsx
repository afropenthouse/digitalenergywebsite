"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { CheckCircle, Award, Globe, Users } from "lucide-react"

const oemPartners = [
  {
    name: "Global Energy Solutions",
    logo: "/placeholder.svg?height=80&width=160",
    description: "Pipeline equipment specialists",
    products: ["Valves", "Control Systems", "Safety Gear"],
  },
  {
    name: "TechFlow Industries",
    logo: "/placeholder.svg?height=80&width=160",
    description: "Flow measurement experts",
    products: ["Flow Meters", "Sensors", "Control Valves"],
  },
  {
    name: "PowerGen Equipment",
    logo: "/placeholder.svg?height=80&width=160",
    description: "Power generation leaders",
    products: ["Generators", "Transformers", "Switchgear"],
  },
  {
    name: "Marine Solutions Ltd",
    logo: "/placeholder.svg?height=80&width=160",
    description: "Marine equipment providers",
    products: ["Marine Engines", "Nav Systems", "Safety Gear"],
  },
]

const benefits = [
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description: "Manufacturer warranties & certifications",
  },
  {
    icon: Award,
    title: "Certified Partners",
    description: "Reputable OEM manufacturers only",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Access to latest technologies",
  },
  {
    icon: Users,
    title: "Technical Support",
    description: "Expert training & support",
  },
]

export default function OEM() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/src/assets/Capture.png"
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
            Premium OEM <span className="text-orange-400">Partnerships</span>
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


      {/* OEM Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">Global OEM Excellence</h2>
                <p className="text-gray-600">
                  We partner with world-class manufacturers to deliver premium equipment with comprehensive support.
                </p>
                <ul className="space-y-3 mt-6">
                  {[
                    "Direct access to latest technologies",
                    "End-to-end project support",
                    "Competitive pricing & warranties"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-80 rounded-xl overflow-hidden shadow-2xl">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900 mb-3"
            >
              Partnership Advantages
            </motion.h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Benefits of working with our certified partners
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 bg-gradient-to-br from-gray-50 to-white shadow-sm hover:shadow-md transition-all">
                  <CardContent className="p-5 flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-4">
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
      </section>

      {/* OEM Partners */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900 mb-3"
            >
              Trusted OEM Partners
            </motion.h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Collaborating with global industry leaders
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {oemPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-sm hover:shadow-md transition-all overflow-hidden">
                  <CardContent className="p-5">
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-16 mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{partner.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{partner.description}</p>
                      <div className="w-full">
                        <h4 className="font-medium text-gray-900 mb-2 text-sm">Products:</h4>
                        <div className="flex flex-wrap justify-center gap-2">
                          {partner.products.map((product, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
                            >
                              {product}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">OEM Solutions for Your Projects</h2>
            <p className="text-blue-100 mb-8">
              Connect with us for premium equipment and technical support
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-base"
                size="lg"
              >
                Request Quote
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 px-8 py-6 text-base"
                size="lg"
              >
                Contact Experts
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}