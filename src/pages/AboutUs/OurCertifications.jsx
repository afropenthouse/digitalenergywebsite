import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Award, Shield, FileCheck, Star, BadgeCheck } from "lucide-react"

const certifications = [
  {
    name: "ISO 9001:2015",
    category: "Quality Management",
    description: "Represents our commitment to delivering consistent quality in products and services, ensuring customer satisfaction, and fostering continuous improvement.",
    icon: BadgeCheck,
    image: "/images/ISO_1.jpg",
    year: "2022",
    validity: "Valid until October 16, 2025",
  },
  {
    name: "ISO 45001:2018",
    category: "Occupational Health and Safety Management system",
    description: "Highlights our dedication to maintaining a safe and healthy workplace by implementing effective occupational health and safety management practices.",
    icon: Shield,
    image: "/images/ISO_2.jpg",
    year: "2022",
	issue: "Issued in 2022",
    validity: "Valid until October 16, 2025",
  },
  {
    name: "COREN Biennial Practising Licence",
    category: "Engineering Practice",
    description: "Licensed by the Council for the Regulation of Engineering in Nigeria (COREN) to practice engineering in Nigeria, meeting all requirements contained in the COREN Act. Registration Number: ECF1051",
    icon: Star,
    image: "/images/Coren.jpg",
    year: "2023",
    validity: "Valid until December 31, 2025",
  },
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
					src="/images/p88.png"
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
				Excellence Through{" "}
				<span className="text-orange-400">Certification</span>
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3 }}
					className="text-xl text-blue-100 max-w-3xl leading-relaxed"
				>
				Our commitment to quality, safety, and environmental responsibility is
				validated through internationally recognized certifications and
				standards.
				</motion.p>
			</div>
				</motion.div>


          {/* Revamped Certifications Grid */}
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-10"
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="relative"
                >
                  <div className="absolute -top-3 -right-3 z-10">
                    <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      {cert.year}
                    </div>
                  </div>
                  
                  <Card className="h-full overflow-hidden border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all">
                    <CardContent className="p-0 flex flex-col h-full">
                      {/* Ribbon Header */}
                      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-5">
                        <div className="flex items-center gap-3">
                          <cert.icon className="w-8 h-8 text-yellow-300" />
                          <div>
                            <h3 className="text-xl font-bold">{cert.name}</h3>
                            <p className="text-blue-100 text-sm">{cert.category}</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Certificate Image */}
                      <div className="flex-1 p-5 bg-gray-50">
                        <div className="aspect-[4/3] bg-white border border-gray-200 rounded-lg flex items-center justify-center p-4">
                          <img 
                            src={cert.image} 
                            alt={cert.name} 
                            className="h-auto w-auto object-cover"
                          />
                        </div>
                      </div>
                      
                      {/* Details */}
                      <div className="p-5 border-t border-gray-100">
                        <p className="text-gray-600 mb-4">{cert.description}</p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center text-sm text-green-600 font-medium">
                            <CheckCircle className="w-4 h-4 mr-1" />
                            <span>{cert.validity}</span>
                          </div>
                          <div className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-500">
                            ISO Standard
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Quality Commitment */}
			<div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
				<div className="flex items-start gap-6">
					<div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
						<FileCheck className="w-6 h-6 text-blue-600" />
					</div>
				<div>
				<h4 className="text-xl font-bold text-gray-900 mb-4">
					Our Commitment to Excellence
				</h4>
				<p className="text-gray-600 leading-relaxed">
					We maintain rigorous quality control processes and continuously
					improve our systems to ensure the highest standards in all our
					operations. Our certifications are not just badges of honor but a
					testament to our unwavering commitment to excellence and customer
					satisfaction.
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