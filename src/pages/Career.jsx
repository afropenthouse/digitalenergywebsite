import { motion } from "framer-motion"
import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { MapPin, Clock, Users, GraduationCap, Heart, Award, ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"

const jobOpenings = [
  {
    id: 1,
    title: "Senior Mechanical Engineer",
    location: "Lagos, Nigeria",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead mechanical engineering projects for oil & gas facilities",
  },
  {
    id: 2,
    title: "Project Manager",
    location: "Port Harcourt, Rivers State",
    type: "Full-time",
    experience: "7+ years",
    description: "Manage large-scale energy infrastructure projects",
  },
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

export default function Career() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/pic_2.png"
            alt="Career"
            className="w-full h-full object-cover"
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

        {/* Floating elements */}
        <motion.div 
          className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-orange-500/20 blur-xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: "200+", label: "Professionals" },
              { value: "5+", label: "Countries" },
              { value: "50+", label: "Projects" },
              { value: "10+", label: "Years" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
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
              Even if you don't see your perfect role today, join our talent community for future opportunities at Digital Energy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-base font-medium flex items-center">
                  Submit Your Resume
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
