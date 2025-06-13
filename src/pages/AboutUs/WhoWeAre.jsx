import { motion } from "framer-motion"
import { Users, Award, Clock, Building2, Target, Lightbulb, Heart, Shield, Leaf, Handshake, Trophy, Star, Zap, UserCheck } from "lucide-react"

const stats = [
  { id: 1, number: 15, suffix: '+', label: 'Years Experience' },
  { id: 2, number: 500, suffix: '+', label: 'Projects Completed' },
  { id: 3, number: 100, suffix: '%', label: 'Client Satisfaction' },
  { id: 4, number: 50, suffix: '+', label: 'Team Members' }
]

const values = [
  {
    id: 1,
    title: 'Safety',
    description: 'We prioritize the health and safety of our people, clients, and communities in everything we do.',
    icon: Shield
  },
  {
    id: 2,
    title: 'Integrity',
    description: 'We operate with honesty, transparency, and ethical standards in all our business dealings.',
    icon: Handshake
  },
  {
    id: 3,
    title: 'Customer Focus',
    description: 'We are dedicated to understanding and exceeding our customers\' needs and expectations.',
    icon: UserCheck
  },
  {
    id: 4,
    title: 'Teamwork',
    description: 'We believe in collaboration and empowering our people to achieve shared goals together.',
    icon: Users
  },
  {
    id: 5,
    title: 'Innovation',
    description: 'We embrace technology and creative solutions to drive progress and stay ahead.',
    icon: Lightbulb
  },
  {
    id: 6,
    title: 'Excellence',
    description: 'We are committed to superior quality and continuous improvement in all aspects.',
    icon: Star
  },
  {
    id: 7,
    title: 'Respect',
    description: 'We value diversity and treat everyone with dignity, fairness, and consideration.',
    icon: Heart
  },
  {
    id: 8,
    title: 'Efficiency',
    description: 'We optimize our resources and processes to deliver maximum value and productivity.',
    icon: Zap
  }
]

const WhoWeAre = () => {
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
                src="/images/pic_2.png"
                alt="About Us"
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
                <p className="text-sm font-medium">Who we are</p>
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Pioneering the Future of <span className="text-orange-400">Sustainable Energy</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-blue-100 max-w-3xl leading-relaxed"
              >
                Through innovation and technology, we're transforming the energy landscape
                to create a sustainable future for generations to come.
              </motion.p>
            </div>
          </motion.div>

          {/* Company Overview Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 ml-4">Our Company Overview</h3>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  <span className="font-bold text-blue-800">DIGITAL ENERGY & INTEGRATED SERVICES LIMITED (DEISL)</span> is a leading indigenous, multi-faceted energy solutions company, delivering end-to-end services across the entire energy value chain—upstream, midstream, and downstream.
                </p>
                <p>
                  We offer integrated EPCOM contracting, petroleum product trading, marine logistics, project management, and ICT services, all tailored to meet the evolving needs of the Nigerian industry. Through the digitalization of the energy lifecycle, we ensure greater efficiency, transparency, and value delivery.
                </p>

                <p>
                  Over the years, we have developed the skills, resources, and strategic partnerships required to successfully execute complex projects to the satisfaction of our clients. Our capabilities span across key sectors including Oil & Gas, Power, Petrochemicals, Refining, and General Infrastructure.
                </p>

                <p>
                  Our service offerings cover the complete project lifecycle—from conceptual design and engineering to commissioning and long-term asset support. Backed by a management team with extensive combined experience across upstream, midstream, and downstream operations, DEISL is well-positioned to deliver consistent value.
                </p>

                <p>
                  At Digital Energy, we are committed to customer satisfaction, operational excellence, and responsiveness in all our engagements.
                </p>

              </div>
            </div>
          </motion.div>

          {/* Enhanced Mission & Vision Section */}
          <div className="relative py-16 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white z-0" />
            <div className="relative z-10">
              <div className="max-w-5xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Mission Card */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100 relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-orange-400 to-amber-300" />
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center">
                        <Target className="w-6 h-6 text-orange-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 ml-4">Our Mission</h3>
                    </div>
                    <p className="text-gray-700 text-lg">
                      To be a global leader and trusted partner of choice for delivering innovative, quality, safe, and sustainable solutions that exceed customer expectations.
                    </p>
                  </motion.div>

                  {/* Vision Card */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100 relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 to-blue-400" />
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                        <Lightbulb className="w-6 h-6 text-blue-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 ml-4">Our Vision</h3>
                    </div>
                    <p className="text-gray-700 text-lg">
                      To exceed customer expectations, drive sustainable growth, and deliver value through innovative solutions, exceptional quality services, and an unwavering commitment to safety, social responsibility, and environmental stewardship.
                    </p>
              </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values Section */}
          <div>
            <div className="text-center mb-12">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-gray-900 mb-4"
              >
                Our Core Values
              </motion.h3>
            </div>
            
            {/* Info Image Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <img
                src="/images/info.png"
                alt="Core Values Information"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhoWeAre