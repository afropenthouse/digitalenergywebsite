import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock, ChevronRight, ArrowRight } from "lucide-react"
import Loader from "../Loader/Loader"

const offices = [
  {
    id: "headoffice",
    name: "Head Office",
    address: "Tapa House, 3/5, Imam Dauda Street, Off Eric Moore Road, Surulere, Lagos, Nigeria",
    phone: "+234 (0) 201 453 6157, +234 (0) 913 161 6700, +234 (0) 810 125 9849",
    email: "info@digitalenergyng.com",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.277500498059!2d3.3524532731171313!3d6.486500223596092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c0bedc75ef5%3A0x45bf9811da30ea66!2sDigital%20Energy!5e0!3m2!1sen!2sng!4v1755083451316!5m2!1sen!2sng",
    directionsUrl: "https://maps.app.goo.gl/bZjh7PQzzVDYdKXi9"
  },
  {
    id: "portharcourt",
    name: "Port Harcourt Terminal Office",
    address: "Digital Energy Close, Off Igboeche road, by Eleme Junction, Port Harcourt, Nigeria",
    phone: "+234 (0) 703 468 8358, +234 (0) 8033242344",
    email: "info@digitalenergyng.com",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.962371287539!2d7.007092715264468!3d4.815081096509545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069d26a7b1e1f4d%3A0x4d9e0f1c3d3d3d3d!2sEleme%20Junction%2C%20Port%20Harcourt!5e0!3m2!1sen!2sng!4v1648226912495!5m2!1sen!2sng",
    directionsUrl: "https://maps.app.goo.gl/ZmNvaNozUm2CV3iD7"
  },
  {
    id: "chevron",
    name: "Chevron Office",
    address: "House 8, Dr. Chimezie Street, Chevy View Estate, along Chevron drive, off Lekki-Epe expressway, Lagos",
    phone: "+234 (0) 907 069 5062, +234 (0) 811 671 1091, +234 (0) 810 125 9849",
    email: "info@digitalenergyng.com",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5857968337845!2d3.523592415231038!3d6.441822595339119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4c9ae5c0e1d%3A0xceb1b726f6a4e2e!2sLekki-Epe%20Expressway%2C%20Lagos!5e0!3m2!1sen!2sng!4v1648226741251!5m2!1sen!2sng",
    directionsUrl: "https://maps.app.goo.gl/fnkN9uYG9aiFyaKG8"
  }
]

const officeHours = [
  { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "9:00 AM - 2:00 PM" },
  { day: "Sunday", hours: "Closed" }
]

export default function ContactForm() {
  const [activeOffice, setActiveOffice] = useState(offices[0])
  const [isLoading, setIsLoading] = useState(true)
  const [loadedImages, setLoadedImages] = useState(0)

  useEffect(() => {
    const handleImageLoad = () => {
      setLoadedImages(prev => {
        const newCount = prev + 1
        if (newCount === 1) { // Only one image (hero image)
          setIsLoading(false)
        }
        return newCount
      })
    }

    // Preload hero image
    const heroImg = new Image()
    heroImg.src = "/images/webp/p88.webp" // Updated to WebP format
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
                src="/images/p88.png"
                alt="Contact Us"
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
                <p className="text-sm font-medium">Contact Us</p>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Get in <span className="text-orange-400">Touch</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-blue-100 max-w-3xl leading-relaxed"
              >
                We're here to help. Reach out to us for any inquiries, support, or to learn more about our services.
              </motion.p>
            </div>
          </motion.div>

          {/* Contact Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div className="space-y-12">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Offices</h2>
                    
                    <div className="space-y-6">
                      {offices.map((office) => (
                        <motion.div
                          key={office.id}
                          whileHover={{ scale: 1.02 }}
                          className={`cursor-pointer p-6 rounded-xl border-2 transition-all ${
                            activeOffice.id === office.id
                              ? "border-orange-500 bg-orange-50"
                              : "border-gray-100 hover:border-orange-300"
                          }`}
                          onClick={() => setActiveOffice(office)}
                        >
                          <div className="flex items-start">
                            <div className="flex-1">
                              <div className="flex items-center mb-2">
                                <div className={`w-3 h-3 rounded-full mr-3 ${
                                  office.id === "headoffice" ? "bg-orange-500" :
                                  office.id === "portharcourt" ? "bg-green-500" : "bg-purple-500"
                                }`}></div>
                                <h3 className="text-xl font-bold text-gray-900">{office.name}</h3>
                              </div>
                              <div className="pl-6 space-y-3">
                                <div className="flex items-start">
                                  <MapPin className="h-5 w-5 text-gray-500 mt-0.5 mr-3 flex-shrink-0" />
                                  <p className="text-gray-600">{office.address}</p>
                                </div>
                                {office.phone && (
                                <div className="text-gray-700 mb-2 flex items-center">
                                  <Phone className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0" />
                                  <div className="flex flex-col">
                                    {office.phone.split(',').map((num, idx) => (
                                      <span key={idx}>{num.trim()}</span>
                                    ))}
                                  </div>
                                </div>
                                )}
                                <div className="flex items-center">
                                  <Mail className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0" />
                                  <p className="text-gray-600">{office.email}</p>
                                </div>
                              </div>
                            </div>
                            <ChevronRight className="h-5 w-5 text-gray-400" />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Office Hours</h2>
                    
                    <div className="space-y-4">
                      {officeHours.map((item, index) => (
                        <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100">
                          <div className="flex items-center">
                            <Clock className="h-5 w-5 text-gray-500 mr-3" />
                            <span className="text-gray-700 font-medium">{item.day}</span>
                          </div>
                          <span className="text-gray-900 font-medium">{item.hours}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-100">
                      <h3 className="font-bold text-blue-800 mb-2 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        Need Help?
                      </h3>
                      <p className="text-blue-700">
                        Our team is here to assist you. Feel free to reach out through any of our office locations or send us an email.
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Map Section */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-8"
                >
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                    <div className="h-96 w-full">
                      <iframe
                        src={activeOffice.mapUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-t-2xl"
                      ></iframe>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className={`w-4 h-4 rounded-full mr-2 ${
                          activeOffice.id === "headoffice" ? "bg-orange-500" :
                          activeOffice.id === "portharcourt" ? "bg-green-500" : "bg-purple-500"
                        }`}></div>
                        <h2 className="text-2xl font-bold text-gray-900">{activeOffice.name}</h2>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Address</h3>
                          <div className="text-gray-700 flex items-start">
                            <MapPin className="h-5 w-5 text-gray-500 mt-0.5 mr-2 flex-shrink-0" />
                            {activeOffice.address}
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Contact</h3>
                          {activeOffice.phone && (
                          <div className="text-gray-700 mb-2 flex items-center">
                            <Phone className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0" />
                            <div className="flex flex-col">
                              {activeOffice.phone.split(',').map((num, idx) => (
                                <span key={idx} className="text-gray-800">{num.trim()}</span>
                              ))}
                            </div>
                          </div>
                          )}
                          <div className="text-gray-700 flex items-center">
                            <Mail className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0" />
                            {activeOffice.email}
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 flex gap-3">
                        <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                          <a 
                            href={activeOffice.directionsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center"
                          >
                            Get Directions
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                        <Button variant="outline" className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50">
                          <a href={`mailto:${activeOffice.email}`} className="flex items-center">
                            Send Email
                            <Mail className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl shadow-xl p-8 text-white flex flex-col items-center justify-center">
                    <h2 className="text-3xl font-bold mb-4">Get in touch</h2>
                    <p className="text-blue-200 mb-6 text-center max-w-md">
                      Have a question or need assistance? Start a WhatsApp chat with us for fast and friendly support.
                    </p>
                    <a
                      href="https://wa.me/2348073776875"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-200 mb-2"
                    >
                      <img src="/images/webp/whatsapp.webp" alt="WhatsApp" className="w-7 h-7" />
                      Chat on WhatsApp
                    </a>
                    <span className="text-blue-100 text-sm mt-2">Our team is online and ready to assist you during business hours.</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}