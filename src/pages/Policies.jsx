import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, FileCheck } from "lucide-react"
import { Link } from "react-router-dom"

const Policies = () => {
  const policies = [
    {
      title: "HSE Policy",
      description: "Health, Safety & Environment policy outlining our commitment to maintaining safe and sustainable operations across all our service offerings.",
      icon: Shield,
      href: "/hsc-policy",
      gradient: "from-blue-700 to-blue-900",
    },
    {
      title: "Quality Management (QMS)",
      description: "Quality Management System demonstrating our dedication to consistent quality standards and continuous improvement in all processes.",
      icon: FileCheck,
      href: "/qms",
      gradient: "from-orange-500 to-orange-700",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/Home/pic_2.webp"
            alt="Policies"
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
            <p className="text-sm font-medium">Policies</p>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our <span className="text-orange-400">Policies</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-blue-100 max-w-3xl leading-relaxed"
          >
            Transparent governance and unwavering standards form the backbone of our commitment to excellence.
          </motion.p>
        </div>
      </section>

      {/* Policies Cards Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {policies.map((policy, index) => (
              <motion.div
                key={policy.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <Link to={policy.href} className="block h-full">
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-md group cursor-pointer hover:-translate-y-1">
                    <CardContent className="p-8 h-full flex flex-col relative overflow-hidden">
                      <div className={`absolute top-0 left-0 w-full h-24 bg-gradient-to-r ${policy.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
                      
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${policy.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                        <policy.icon className="h-8 w-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">
                        {policy.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed flex-1 relative z-10 mb-6">
                        {policy.description}
                      </p>
                      
                      <span className={`inline-flex items-center font-medium text-sm ${policy.href === "/hsc-policy" ? "text-blue-800" : "text-orange-600"} group-hover:translate-x-1 transition-transform`}>
                        Read Policy
                        <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Policies
