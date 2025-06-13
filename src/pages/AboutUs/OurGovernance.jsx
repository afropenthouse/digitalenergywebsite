import { motion } from "framer-motion"
import { Shield, Award, Scale, FileCheck, Users, Building2, Target, Card, CardContent } from "lucide-react"
import { Mail, Phone } from "lucide-react"

const governanceValues = [
  {
    icon: Shield,
    title: "Transparency",
    description: "We maintain open and honest communication with all stakeholders",
  },
  {
    icon: Award,
    title: "Accountability",
    description: "We take responsibility for our actions and decisions",
  },
  {
    icon: Scale,
    title: "Fairness",
    description: "We treat all stakeholders with respect and without favoritism",
  },
  {
    icon: FileCheck,
    title: "Compliance",
    description: "We adhere to all applicable laws, regulations, and standards",
  },
]

const boardMembers = [
  {
    name: "Simon Chukwunweluwa Ugwuoke",
    position: "MD & CEO",
    image: "/images/simon.png",
    bio: "Simon is a serial entrepreneur and a leader per excellence with experience spanning decades. He is a graduate of the University of Nigeria Nsukka and has obtained several other certifications and trainings both locally and internationally. Simon directs the day to day affairs of the Digital Energy business"
  },
  {
    name: "Engr. Olutayo Ajayi",
    position: "ED, Technical Services",
    image: "/images/tayo.png",
    bio: "He is a seasoned mechanical engineer with a B.Sc. degree in Mechanical Engineering and over 28 years of global experience in managing complex projects in the power, oil, and gas sectors. A COREN registered Engineer and member of Nigerian Society of Engineers (MNSE), he boasts a proven track record of delivering multi-million-dollar projects."
  },
  {
    name: "Mr. Fredrick Okeagu",
    position: "ED, HR & Management Services",
    image: "/images/fred.png",
    bio: "Global Speaker, a Certified Management Consultant and HR professional with over 15 years experience. He is a doctoral student (Ph.D) in IRHRM, an MSc graduate in IHRM, and holds a PGD in Guidance & Counselling. He is Certified with CIPM, Nigeria, KPI Institute- Australia and a member of the Africa HR Confederation (AHRC)."
  }
]

const governanceStructure = [
  {
    title: "Board of Directors",
    description: "Experienced professionals providing strategic guidance"
  },
  {
    title: "Executive Management",
    description: "Skilled leaders driving operational excellence"
  },
  {
    title: "Committees",
    description: "Specialized teams ensuring compliance"
  }
]

const corporateStructure = [
  {
    title: "Board of Directors",
    description: "Provides strategic oversight and governance for the company's operations and growth",
    members: ["Board Leadership"],
  },
  {
    title: "Executive Management",
    description: "Leads the implementation of corporate strategy and day-to-day operations",
    members: ["Executive Team"],
  },
  {
    title: "Corporate Secretariat",
    description: "Ensures compliance with corporate governance requirements and regulatory standards",
    members: ["Legal & Compliance Team"],
  },
]

const directors = [
  {
    id: 1,
    name: "John Doe",
    position: "Chairman",
    company: "Digital Energy & Integrated Services Ltd",
    email: "john.doe@digitalenergy.com",
    image: "/images/team1.jpg"
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Managing Director",
    company: "Digital Energy & Integrated Services Ltd",
    email: "jane.smith@digitalenergy.com",
    image: "/images/team2.jpg"
  },
  {
    id: 3,
    name: "Michael Johnson",
    position: "Executive Director",
    company: "Digital Energy & Integrated Services Ltd",
    email: "michael.j@digitalenergy.com",
    image: "/images/team3.jpg"
  },
  {
    id: 4,
    name: "Sarah Williams",
    position: "Non-Executive Director",
    company: "Digital Energy & Integrated Services Ltd",
    email: "sarah.w@digitalenergy.com",
    image: "/images/team4.jpg"
  }
]

const OurGovernance = () => {
  return (
    <div className="pt-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="space-y-16">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative bg-gradient-to-r from-blue-800 to-blue-900 text-white py-16 md:py-24 rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0">
              <img
                src="/images/pic_2.png"
                alt="Our Governance"
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
                <p className="text-sm font-medium">Our Governance</p>
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Board of <span className="text-orange-400">Directors</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-blue-100 max-w-3xl leading-relaxed"
              >
                Meet our experienced leadership team driving innovation and excellence in the energy sector.
              </motion.p>
            </div>
          </motion.div>

          {/* Board of Directors Section */}
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {directors.map((director, index) => (
                <motion.div
                  key={director.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <div className="absolute inset-0 bg-blue-600/90 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10" />
                    <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="text-white text-center p-6">
                        <div className="flex items-center justify-center space-x-2 mb-4">
                          <Mail className="w-5 h-5" />
                          <span className="text-sm">{director.email}</span>
                        </div>
                        <p className="text-sm font-medium">{director.company}</p>
                      </div>
                    </div>
                    <img
                      src={director.image}
                      alt={director.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{director.name}</h3>
                    <p className="text-orange-500 font-medium mb-2">{director.position}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Governance Structure */}
          <div className="bg-white py-16 rounded-2xl">
            <div className="container mx-auto px-6 max-w-4xl">
              <div className="text-center mb-12">
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold text-gray-900 mb-4"
                >
                  Governance Structure
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-gray-600 text-lg max-w-3xl mx-auto"
                >
                  A robust framework ensuring effective oversight
                </motion.p>
              </div>
              
              <div className="space-y-6">
                {governanceStructure.map((structure, index) => (
                  <motion.div
                    key={structure.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-blue-50 rounded-xl p-6 hover:bg-blue-100 transition-colors duration-300"
                  >
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mr-4 mt-1">
                        <FileCheck className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-1">{structure.title}</h4>
                        <p className="text-gray-600">{structure.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default OurGovernance