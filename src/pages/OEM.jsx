"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { CheckCircle, Award, Globe, Users } from "lucide-react"

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
                <img
                  src="/src/assets/Capture.png"
                  alt="Global OEM Excellence"
                  className="w-full h-full object-cover"
                />
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
    </div>
  )
}