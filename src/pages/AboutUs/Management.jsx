import { motion } from "framer-motion"
import { Shield, Award, Scale, FileCheck, Users, Building2, Target } from "lucide-react"
import { useState, useEffect } from "react"
import Loader from "../Loader/Loader"

const styles = {
  perspective1000: {
    perspective: '1000px'
  },
  transformStyle3d: {
    transformStyle: 'preserve-3d'
  },
  backfaceHidden: {
    backfaceVisibility: 'hidden'
  },
  rotateY180: {
    transform: 'rotateY(180deg)'
  }
}

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
    name: "Simon Chukwunweluwa Ugwoke",
    position: "MD & CEO",
    image: "/images/webp/simon.webp",
    bio: "Simon is a serial entrepreneur and a leader per excellence with experience spanning decades. He is a graduate of the University of Nigeria Nsukka and has obtained several other certifications and trainings both locally and internationally. Simon directs the day to day affairs of the Digital Energy business"
  },
  {
    name: "Engr. Olutayo Ajayi",
    position: "ED, Technical Services",
    image: "/images/webp/tayo.webp",
    bio: "He is a seasoned mechanical engineer with a B.Sc. degree in Mechanical Engineering and over 28 years of global experience in managing complex projects in the power, oil, and gas sectors. A COREN registered Engineer and member of Nigerian Society of Engineers (MNSE), he boasts a proven track record of delivering multi-million-dollar projects."
  },
  {
    name: "Mr. Fredrick Okeagu",
    position: "ED, HR & Management Services",
    image: "/images/webp/fred.webp",
    bio: "Global Speaker, a Certified Management Consultant and HR professional with over 15 years experience. He is a doctoral student (Ph.D) in IRHRM, an MSc graduate in IHRM, and holds a PGD in Guidance & Counselling. He is Certified with CIPM, Nigeria, KPI Institute- Australia and a member of the Africa HR Confederation (AHRC)."
  },
  {
    name: "Ibeako Amarachi",
    position: "Group Head Information Tech",
    image: "/images/webp/amara.webp",
    bio: "A highly ambitious and self-driven IT professional with 15+ years experience in security management systems, business continuity, and network planning. A Certified Information Security Manager (CISM) with extensive experience in overseeing and safeguarding an organization's computer security infrastructure."
  },
  {
    name: "Victor Amadi-Emina",
    position: "Head, Trading & Shipping Operations",
    image: "/images/webp/victor.webp",
    bio: "He is a trading and shipping operations professional in the downstream oil and gas. An expert with over 20 years in the industry having worked in many downstream oil and gas companies in Nigeria, trading different grades of refined petroleum products and crude oils. He has also worked in Europe where he handled physical and paper trading of various crude grades to major refineries in the USA, China, India and Japan."
  },
  {
    name: "Chidinma Obi",
    position: "Head of Accounts",
    image: "/images/webp/obi.webp",
    bio: "Chidinma is a highly detailed and ethical Accountant with over 13 years of experience in internal audit, finance, bookkeeping, and analytics. She holds a degree in Accounting from Ahmadu Bello University, Zaria, and is a member of The Institute of Chartered Accountants of Nigeria (ICAN) and the Nigerian Institute of Management (NIM). She also has extensive experience in the Real Estate, Shipping, and Logistics sectors."
  },
  {
    name: "Kiki N.C. Ejiaku",
    position: "Business Development Manager",
    image: "/images/webp/kike2.webp",
    bio: "She is a Seasoned Business Development Manager with 22 years of dedicated experience, committed to driving strategic growth and fostering long-term partnerships. Thrives on turning ideas into opportunities. She is a graduate of the University of Calabar and has obtained several other certifications and training in the same field."
  },
  {
    name: "Anthony Chukwuemeka Uche",
    position: "Head, Depot Operations",
    image: "/images/webp/Anthony.webp",
    bio: "Proven with 19 years experience in the Pharmaceutical and Oil & Gas industries. He specialized in fields of Sales & Marketing, Business Development, and Operations. He holds BSc (Hons) in Marine Biology from University of Lagos and MBA in (Business Administration) from Enugu State University of Technology, Enugu (ESUT)."
  },
  {
    name: "Ezechi Ajibo",
    position: "Company Secretary",
    image: "/images/webp/eze.webp",
    bio: "Seasoned lawyer with 15+ years of experience in international joint ventures, contract negotiations, debt recoveries, and real estate law. Proven track record of advising multinational companies, including Sanofi Aventis, Doehler Group, and Merck. Recently appointed as Legal Adviser and Company Secretary to Digital Energy Group of companies (2023)."
  }
]

const governanceStructure = [
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

const Management = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [loadedImages, setLoadedImages] = useState(0)

  useEffect(() => {
    const totalImages = boardMembers.length + 1 // +1 for the hero image
    const handleImageLoad = () => {
      setLoadedImages(prev => {
        const newCount = prev + 1
        if (newCount === totalImages) {
          setIsLoading(false)
        }
        return newCount
      })
    }

    // Preload all board member images
    boardMembers.forEach(member => {
      const img = new Image()
      img.src = member.image
      img.onload = handleImageLoad
    })

    // Preload hero image
    const heroImg = new Image()
    heroImg.src = "/images/webp/cli.webp"
    heroImg.onload = handleImageLoad

    return () => {
      setIsLoading(true)
      setLoadedImages(0)
    }
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="pt-48 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="space-y-16">

          {/* Enhanced Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative bg-gradient-to-r from-blue-800 to-blue-900 text-white py-8 md:py-12 rounded-2xl overflow-hidden mt-8"
          >
            <div className="absolute inset-0">
              <img
                src="/images/webp/cli.webp"
                alt="Our Management"
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
                <p className="text-sm font-medium">Our Management</p>
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Excellence in <span className="text-orange-400">Leadership</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-white max-w-3xl leading-relaxed"
              >
                At Digital Energy, we maintain the highest standards of corporate governance, ensuring transparency, 
                accountability, and ethical business practices.
              </motion.p>
            </div>
          </motion.div>

          {/* Board of Directors Section */}
          <div>
            <div className="text-center mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-gray-900 mb-4"
              >
                Meet Our Team
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gray-600 text-lg max-w-3xl mx-auto"
              >
                Experienced leaders guiding our strategic vision
              </motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {boardMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group relative"
                  style={styles.perspective1000}
                >
                  <div className="aspect-[4/5] relative overflow-hidden">
                    {/* Flip container */}
                    <div 
                      className="relative w-full h-full transition-transform duration-700 group-hover:rotate-y-180"
                      style={styles.transformStyle3d}
                    >
                      {/* Front of card */}
                      <div 
                        className="absolute w-full h-full"
                        style={styles.backfaceHidden}
                      >
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      </div>
                      
                      {/* Back of card (flipped) */}
                      <div 
                        className="absolute w-full h-full bg-gradient-to-br from-blue-900 to-orange-600 p-6 flex flex-col justify-center items-center text-white"
                        style={{...styles.backfaceHidden, ...styles.rotateY180}}
                      >
                        <div className="text-center transform transition-transform duration-500 group-hover:scale-110">
                          <h3 className="text-2xl font-bold mb-3">{member.name}</h3>
                          <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
                            {member.position}
                          </div>
                          <p className="text-sm text-white/90 line-clamp-4">{member.bio}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 relative">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <div className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                      {member.position}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
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
                  Management Structure
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

export default Management 