import { useParams } from "react-router-dom"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { CheckCircle, ArrowRight } from "lucide-react"
import { Wrench, ShoppingCart, Building, CheckIcon, Settings, Users, Monitor, GraduationCap, Fuel } from "lucide-react"

const services = [
  {
    id: "engineering",
    icon: Wrench,
    title: "Engineering Services",
    description:
      "Comprehensive engineering solutions from conceptual design to detailed engineering across all disciplines.",
    features: [
      "Conceptual Design and Feasibility Studies",
      "Front-End Engineering Design (FEED)",
      "Detail Engineering Design",
      "Process and Facilities Engineering",
      "Electrical, Instrumentation & Control Design",
      "Structural and Civil Engineering",
    ],
    benefits: [
      "Optimized designs that reduce costs and improve efficiency",
      "Compliance with international standards and local regulations",
      "Integrated approach that considers the entire project lifecycle",
      "Innovative solutions to complex engineering challenges",
    ],
    image: "/src/assets/pic_2.jpg",
    color: "bg-primary-500",
  },
  {
    id: "procurement",
    icon: ShoppingCart,
    title: "Procurement Services",
    description: "Strategic sourcing and supply chain management with global reach and local expertise.",
    features: [
      "Vendor Selection & Qualification",
      "Specification Compliance",
      "Quality Assurance & Testing",
      "Logistics & Transportation",
      "Site Delivery Tracking",
      "Cost Optimization",
    ],
    benefits: [
      "Cost savings through strategic sourcing and bulk purchasing",
      "Quality assurance through rigorous vendor qualification",
      "Efficient logistics and timely delivery",
      "Transparent procurement processes",
    ],
    image: "/src/assets/pic_4.jpg",
    color: "bg-secondary-500",
  },
  {
    id: "construction",
    icon: Building,
    title: "Construction & Installation",
    description: "Full-scale construction services for onshore and offshore energy projects.",
    features: [
      "Civil, Structural & Mechanical Installation",
      "Pipeline Construction",
      "Tank Farm Construction",
      "Electrical & Instrumentation Works",
      "Modular Systems Installation",
      "Facility Upgrades",
    ],
    benefits: [
      "Experienced construction teams with specialized skills",
      "Strict adherence to safety standards and protocols",
      "Quality workmanship and attention to detail",
      "Efficient project management to minimize disruptions",
    ],
    image: "/src/assets/pic_5.jpg",
    color: "bg-primary-500",
  },
  {
    id: "commissioning",
    icon: CheckIcon,
    title: "Commissioning & Start-up",
    description: "Ensuring systems are tested, verified, and fully operational according to specifications.",
    features: [
      "Pre-commissioning Activities",
      "Mechanical Completion",
      "Functional Testing",
      "System Integration",
      "Performance Validation",
      "Handover Documentation",
    ],
    benefits: [
      "Smooth transition from construction to operations",
      "Thorough testing to identify and resolve issues",
      "Comprehensive documentation for future reference",
      "Training for operations personnel",
    ],
    image: "/src/assets/pic_6.png",
    color: "bg-secondary-500",
  },
  {
    id: "operations",
    icon: Settings,
    title: "Operations & Maintenance",
    description: "Comprehensive O&M services to ensure optimal asset performance and reliability.",
    features: [
      "Preventive & Corrective Maintenance",
      "Asset Integrity Management",
      "Emergency Response",
      "Equipment Upgrades",
      "Performance Optimization",
      "24/7 Support Services",
    ],
    benefits: [
      "Maximized asset uptime and reliability",
      "Extended equipment lifecycle",
      "Reduced operational costs",
      "Improved safety and environmental performance",
    ],
    image: "/src/assets/pic_8.png",
    color: "bg-primary-500",
  },
  {
    id: "manpower",
    icon: Users,
    title: "Technical Manpower Supply",
    description: "Certified professionals for short and long-term assignments across all technical disciplines.",
    features: [
      "Electrical & Instrumentation Engineers",
      "Mechanical & Piping Engineers",
      "QA/QC Inspectors & Technicians",
      "IRATA-Certified Technicians",
      "Project Engineers",
      "HSE Officers & Supervisors",
    ],
    benefits: [
      "Access to specialized skills and expertise",
      "Flexible staffing solutions for project requirements",
      "Reduced recruitment and training costs",
      "Certified and experienced professionals",
    ],
    image: "/placeholder.svg?height=600&width=800",
    color: "bg-secondary-500",
  },
  {
    id: "digital",
    icon: Monitor,
    title: "Digital Solutions & Automation",
    description: "Advanced automation and digital transformation solutions for intelligent operations.",
    features: [
      "PLC, SCADA & Control Systems",
      "Industrial Software Solutions",
      "IIOT Integration",
      "Remote Monitoring Systems",
      "Predictive Analytics",
      "Cybersecurity Implementation",
    ],
    benefits: [
      "Improved operational efficiency and decision-making",
      "Real-time monitoring and control",
      "Data-driven insights for optimization",
      "Enhanced safety through automated systems",
    ],
    image: "/placeholder.svg?height=600&width=800",
    color: "bg-primary-500",
  },
  {
    id: "training",
    icon: GraduationCap,
    title: "Training & Consultancy",
    description: "Capacity building and performance enhancement through structured training programs.",
    features: [
      "Technical & Safety Training",
      "Competency Development",
      "Management Systems Advisory",
      "ISO Standards Implementation",
      "Skills Assessment",
      "Leadership Development",
    ],
    benefits: [
      "Enhanced workforce capabilities and performance",
      "Improved compliance with standards and regulations",
      "Knowledge transfer and skill development",
      "Customized training solutions for specific needs",
    ],
    image: "/placeholder.svg?height=600&width=800",
    color: "bg-secondary-500",
  },
  {
    id: "trading",
    icon: Fuel,
    title: "Petroleum Products Trading",
    description: "Reliable supply and trading of petroleum products across Nigeria and West Africa.",
    features: [
      "Premium Motor Spirit (PMS)",
      "Automotive Gas Oil (AGO)",
      "Aviation Turbine Kerosene",
      "Supply Chain Management",
      "Quality Assurance",
      "Strategic Partnerships",
    ],
    benefits: [
      "Reliable supply of quality petroleum products",
      "Competitive pricing through strategic sourcing",
      "Efficient logistics and delivery",
      "Compliance with regulatory requirements",
    ],
    image: "/placeholder.svg?height=600&width=800",
    color: "bg-primary-500",
  },
]

export default function ServiceDetail() {
  const { serviceId } = useParams()
  const service = services.find((s) => s.id === serviceId) || services[0]

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className={`py-20 ${service.color} text-white`}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl text-white/80 leading-relaxed">{service.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Service Overview</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Digital Energy, we provide comprehensive {service.title.toLowerCase()} that meet the highest
                standards of quality and efficiency. Our experienced team works closely with clients to understand their
                specific requirements and deliver tailored solutions.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With a focus on innovation and excellence, our {service.title.toLowerCase()} are designed to optimize
                performance, reduce costs, and ensure compliance with industry standards and regulations.
              </p>

              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-bold text-gray-900">Key Features:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link to="/contact/quote">
                <Button className="bg-primary-500 hover:bg-primary-600 text-white">Request a Quote</Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Benefits</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how our {service.title.toLowerCase()} can add value to your operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <CheckCircle className="h-5 w-5 text-primary-500" />
                      </div>
                      <div>
                        <p className="text-lg text-gray-700">{benefit}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Related Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore other services that complement {service.title.toLowerCase()}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services
              .filter((s) => s.id !== service.id)
              .slice(0, 3)
              .map((relatedService, index) => (
                <motion.div
                  key={relatedService.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link to={`/services/${relatedService.id}`}>
                    <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer border-0 shadow-lg">
                      <CardContent className="p-6">
                        <div
                          className={`w-16 h-16 ${relatedService.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <relatedService.icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-500 transition-colors flex items-center">
                          {relatedService.title}
                          <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </h3>
                        <p className="text-gray-600 line-clamp-2">{relatedService.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button
                variant="outline"
                className="border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white"
              >
                View All Services
              </Button>
            </Link>
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
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to discuss your {service.title.toLowerCase()} requirements and discover how we can
              deliver value to your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact/quote">
                <Button className="bg-primary-500 hover:bg-primary-600 text-white">Request a Quote</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
