import { motion } from "framer-motion"
import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { MapPin, Clock, Users, GraduationCap, Heart, Award, ChevronRight, X } from "lucide-react"
import { useState, useEffect } from "react"
import Loader from "./Loader/Loader"
import { Link } from "react-router-dom"

const jobOpenings = [
  {
    id: 1,
    title: "Manual Machinist (API Experience Required)",
    location: "Port-Harcourt, Lagos & Warri",
    type: "Full-time",
    experience: "2–3 years",
    description: "Operate lathes, milling machines, and drill presses. Requires OND/HND in Mechanical or Production Engineering, knowledge of API Spec 7-1, 5CT, 5B, DS-1, ability to read technical drawings and use precision tools. Experience with machining premium connections is a plus.",
    applyLink: "https://forms.gle/t4gXTPteBNFy12We9"
  },
  {
    id: 2,
    title: "Machine Shop Supervisor",
    location: "Port-Harcourt, Lagos & Warri",
    type: "Full-time",
    experience: "5–7+ years",
    description: "Supervise machinists, CNC operators, and shop staff. Plan and manage production schedules. Enforce quality and safety standards. Requires HND/BSc in Mechanical or Production Engineering, strong CNC and machining background, leadership experience, and knowledge of threads in Oil & Gas industry.",
    applyLink: "https://forms.gle/11MzjtD96kvNvRMr6"
  },
  {
    id: 3,
    title: "Assistant Depot Operations Supervisor",
    location: "Port-Harcourt, Lagos & Warri",
    type: "Full-time",
    experience: "2–5 years",
    description: "Support daily fuel depot operations, supervise personnel, ensure HSSE compliance, maintain records. Requires HND/BSc in Engineering, Logistics, or related field, depot/terminal operations experience, HSE certifications (advantage), strong communication and leadership skills.",
    applyLink: "https://forms.gle/JZzdeHKxcegXiBus6"
  },
  {
    id: 4,
    title: "Depot Laboratory Analyst",
    location: "Port-Harcourt, Lagos & Warri",
    type: "Full-time",
    experience: "2+ years",
    description: "Perform routine testing and quality assurance on petroleum products (PMS, AGO, DPK, ATK). Requires BSc in Chemistry or related field, experience in petroleum lab testing, familiarity with NMDPRA and ISO standards, ability to conduct and interpret tests.",
    applyLink: "https://forms.gle/LLVpbifZFFnTUCFJA"
  },
  {
    id: 5,
    title: "CNC Operator (FANUC-Controlled Machines)",
    location: "Port-Harcourt, Lagos & Warri",
    type: "Full-time",
    experience: "2+ years",
    description: "Operate and set up FANUC-controlled CNC lathes to produce high-precision components, including API and Premium connections. Requires OND or equivalent, 2+ years CNC machining experience, and strong skills in threading, inspection, and interpreting engineering drawings.",
    applyLink: "https://forms.gle/hhtxE91tKQyLj5vi9"
  }
]

const benefits = [
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description: "Continuous training opportunities and professional development programs",
  },
  {
    icon: Award,
    title: "Performance Recognition",
    description: "Merit-based promotions and performance bonuses",
  },
  {
    icon: Users,
    title: "Team Environment",
    description: "Collaborative and inclusive work environment with diverse teams",
  },
]

const Career = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [loadedImages, setLoadedImages] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  useEffect(() => {
    const handleImageLoad = () => {
      setLoadedImages(prev => {
        const newCount = prev + 1
        if (newCount === 1) { 
          setIsLoading(false)
        }
        return newCount
      })
    }

    // Preload hero image
    const heroImg = new Image()
    heroImg.src = "/images/webp/pic_2.webp"
    heroImg.onload = handleImageLoad

    return () => {
      setIsLoading(true)
      setLoadedImages(0)
    }
  }, [])

  if (isLoading) {
    return <Loader />
  }

  const handleModalClose = () => {
    setShowModal(false)
    setFormSubmitted(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-[220px]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/webp/pic_2.webp"
            alt="Career"
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
            <p className="text-sm font-medium">Career</p>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Join our <span className="text-orange-400">Digital Energy</span> Team
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-blue-100 max-w-3xl leading-relaxed"
          >
            Join our dynamic team and be part of a company that's shaping the future of energy solutions.
            We offer exciting opportunities for growth, innovation, and professional development.
          </motion.p>
        </div>

        {/* Floating elements */}
        <motion.div 
          className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-orange-500/20 blur-xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </section>

     

      {/* Why Work With Us - Enhanced */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full mb-4 font-medium">
              Why Choose Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Grow With Digital Energy
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We invest in our people as much as we invest in technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-sm group overflow-hidden">
                  <CardContent className="p-6 relative">
                    <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-100 transition-opacity">
                      <div className={`w-16 h-16 rounded-full ${benefit.color?.replace('bg-', 'bg-')} blur-xl`} />
                    </div>
                    
                    <div className={`w-14 h-14 rounded-xl ${benefit.color} flex items-center justify-center mb-6 relative z-10`}>
                      <benefit.icon className="h-6 w-6" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{benefit.title}</h3>
                    <p className="text-gray-600 relative z-10">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Current Openings</h2>
            {jobOpenings.length === 0 ? (
              <div className="mt-8 p-8 bg-gray-50 rounded-lg">
                <p className="text-xl text-gray-600 mb-4">No positions available at the moment</p>
                <p className="text-gray-500">We're not currently hiring, but we're always looking for talented individuals to join our team. Please check back later or submit your resume for future opportunities.</p>
              </div>
            ) : (
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore exciting career opportunities across various departments
              </p>
            )}
          </motion.div>

          {jobOpenings.length > 0 && (
            <div className="grid gap-6">
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <h3 className="text-xl font-bold text-gray-900 mr-4">{job.title}</h3>
                          </div>
                          <p className="text-gray-600 mb-4">{job.description}</p>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-2">
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1 text-primary-500" />
                              {job.location}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1 text-primary-500" />
                              {job.type}
                            </div>
                            <div className="flex items-center">
                              <GraduationCap className="h-4 w-4 mr-1 text-primary-500" />
                              {job.experience}
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 lg:mt-0 lg:ml-6 flex items-end justify-end">
                          <a
                            href={job.applyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-sm transition-all duration-300 text-base"
                          >
                            Apply
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full mb-6">
              <p className="text-sm font-medium">Future Opportunities</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Power Your Career?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 leading-relaxed max-w-2xl mx-auto">
              Can't find the right position for you? We're always excited to connect with talented professionals. Reach out to us for future opportunities or to learn more about careers at Digital Energy.
            </p>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg flex flex-col items-center">
              <span className="text-lg text-white font-medium mb-2">For enquiries, contact</span>
              <a
                href="mailto:hrmofficeltd@gmail.com"
                className="text-2xl font-semibold text-orange-200 bg-white/20 px-4 py-2 rounded-lg select-all break-all hover:underline"
                style={{textDecoration: 'none'}}
              >
                hrmofficeltd@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Career