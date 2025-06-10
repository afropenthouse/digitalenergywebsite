"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Award, Shield, FileCheck, Star, BadgeCheck } from "lucide-react"

const certifications = [
  {
    name: "ILSHIN VALVE CO./ LTD",
    category: "Valve Manufacturing",
    description: "Certified partner since 1982, specializing in high-quality valve manufacturing and distribution.",
    icon: CheckCircle,
    image: "/src/assets/c1.png",
    year: "1982",
    validity: "Long-term Partnership"
  },
  {
    name: "Ultraspin",
    category: "Technical Solutions",
    description: "Authorized partner for advanced technical solutions and equipment.",
    icon: Shield,
    image: "/src/assets/c2.png",
    year: "2023",
    validity: "Active Partnership"
  },
  {
    name: "Triol",
    category: "Industrial Solutions",
    description: "Certified partner for industrial automation and control systems.",
    icon: Award,
    image: "/src/assets/c3.png",
    year: "2023",
    validity: "Active Partnership"
  }
]

const achievements = [
  {
    id: 1,
    year: "2023",
    title: "Excellence in Innovation",
    description: "Recognized for pioneering digital energy solutions"
  },
  {
    id: 2,
    year: "2022",
    title: "Best Energy Company",
    description: "Awarded for outstanding service delivery"
  },
  {
    id: 3,
    year: "2021",
    title: "Sustainability Champion",
    description: "Recognized for environmental initiatives"
  }
]

const OurCertifications = () => {
  return (
    <div className="pt-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="space-y-16">
          {/* Enhanced Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative bg-gradient-to-r from-blue-800 to-blue-900 text-white py-16 md:py-24 rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0">
              <img
                src="/src/assets/p88.png"
                alt="Certifications"
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
                <p className="text-sm font-medium">Our Certifications</p>
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Excellence Through <span className="text-orange-400">Certification</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-blue-100 max-w-3xl leading-relaxed"
              >
                Our commitment to quality, safety, and environmental responsibility is validated
                through internationally recognized certifications and standards.
              </motion.p>
            </div>
          </motion.div>

          {/* Certifications Grid */}
          <div>
            <div className="text-center mb-12">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-gray-900 mb-4"
              >
                Our Certifications
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gray-600 text-lg max-w-3xl mx-auto"
              >
                Strategic partnerships with industry leaders
              </motion.p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-7 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="aspect-video mb-4 rounded-lg overflow-hidden">
                    <img 
                      src={cert.image} 
                      alt={cert.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{cert.name}</h4>
                  <p className="text-gray-600 mb-2">{cert.description}</p>
                  <div className="text-sm text-blue-600 font-medium">
                    {cert.year} - {cert.validity}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quality Commitment */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                <FileCheck className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Our Commitment to Excellence</h4>
                <p className="text-gray-600 leading-relaxed">
                  We maintain rigorous quality control processes and continuously improve our systems
                  to ensure the highest standards in all our operations. Our certifications are not
                  just badges of honor but a testament to our unwavering commitment to excellence
                  and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurCertifications
