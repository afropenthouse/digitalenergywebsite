"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { MapPin, Clock, Users, GraduationCap, Heart, Award } from "lucide-react"
import { Link } from "react-router-dom"

const jobOpenings = [
  {
    id: 1,
    title: "Senior Mechanical Engineer",
    department: "Engineering",
    location: "Lagos, Nigeria",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead mechanical engineering projects for oil & gas facilities",
  },
  {
    id: 2,
    title: "Project Manager",
    department: "Project Management",
    location: "Port Harcourt, Rivers State",
    type: "Full-time",
    experience: "7+ years",
    description: "Manage large-scale energy infrastructure projects",
  },
  {
    id: 3,
    title: "Electrical Engineer",
    department: "Engineering",
    location: "Abuja, FCT",
    type: "Full-time",
    experience: "3+ years",
    description: "Design and implement electrical systems for energy projects",
  },
  {
    id: 4,
    title: "QA/QC Inspector",
    department: "Quality Assurance",
    location: "Warri, Delta State",
    type: "Full-time",
    experience: "4+ years",
    description: "Ensure quality standards and compliance in construction projects",
  },
  {
    id: 5,
    title: "HSE Officer",
    department: "Health, Safety & Environment",
    location: "Lagos, Nigeria",
    type: "Full-time",
    experience: "3+ years",
    description: "Implement and monitor health, safety, and environmental protocols",
  },
  {
    id: 6,
    title: "Procurement Specialist",
    department: "Procurement",
    location: "Lagos, Nigeria",
    type: "Full-time",
    experience: "4+ years",
    description: "Manage procurement processes and vendor relationships",
  },
]

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs for you and your family",
  },
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

export default function Career() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/src/assets/pic_2.png"
            alt="Careers"
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
            Join our <span className="text-orange-400">Digital Energy</span>{" "}Team
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
      </section>

      {/* Why Work With Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Digital Energy</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join a dynamic team that values innovation, excellence, and professional growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-8 w-8 text-primary-500" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
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
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore exciting career opportunities across various departments
            </p>
          </motion.div>

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
                          <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full">
                            {job.department}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4">{job.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
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
                      <div className="mt-4 lg:mt-0 lg:ml-6">
                        <Button className="bg-primary-500 hover:bg-primary-600 text-white">Apply Now</Button>
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
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Don't See Your Role?</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in
              mind for future opportunities.
            </p>
            <Link to="/contact">
              <Button className="bg-primary-500 hover:bg-primary-600 text-white">Submit Your Resume</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
