"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock, ChevronRight, ArrowRight } from "lucide-react"

const offices = [
  {
    id: "lagos",
    name: "Lagos Head Office",
    address: "123 Energy Avenue, Victoria Island, Lagos, Nigeria",
    phone: "+234 (0) 123 456 7890",
    email: "lagos@digitalenergy.ng",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5857968337845!2d3.423592415231038!3d6.441822595339119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4c9ae5c0e1d%3A0xceb1b726f6a4e2e!2sVictoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1648226741251!5m2!1sen!2sng",
    coordinates: { lat: 6.4418, lng: 3.4236 }
  },
  {
    id: "abuja",
    name: "Abuja Office",
    address: "789 Energy Plaza, Central Business District, Abuja, Nigeria",
    phone: "+234 (0) 987 654 3210",
    email: "abuja@digitalenergy.ng",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.924758070397!2d7.489268615287964!3d9.002788293573688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e877a4c3f5d91%3A0x4e9c2e5d1a3a6d7e!2sCentral%20Business%20District%2C%20Abuja!5e0!3m2!1sen!2sng!4v1648226860215!5m2!1sen!2sng",
    coordinates: { lat: 9.0028, lng: 7.4893 }
  },
  {
    id: "portharcourt",
    name: "Port Harcourt Office",
    address: "456 Oil & Gas Street, GRA Phase II, Port Harcourt, Nigeria",
    phone: "+234 (0) 456 789 0123",
    email: "portharcourt@digitalenergy.ng",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.962371287539!2d7.007092715264468!3d4.815081096509545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069d26a7b1e1f4d%3A0x4d9e0f1c3d3d3d3d!2sGRA%20Phase%20II%2C%20Port%20Harcourt!5e0!3m2!1sen!2sng!4v1648226912495!5m2!1sen!2sng",
    coordinates: { lat: 4.8151, lng: 7.0071 }
  }
]

const officeHours = [
  { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "9:00 AM - 2:00 PM" },
  { day: "Sunday", hours: "Closed" }
]

export default function ContactForm() {
  const [activeOffice, setActiveOffice] = useState(offices[0])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-orange-600 z-0" />
        <div className="absolute inset-0 bg-[url('/src/assets/pattern.svg')] opacity-10 z-10" />
        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
            >
              Get in <span className="text-orange-300">Touch</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto"
            >
              We'd love to hear from you. Reach out to our team through any of our regional offices.
            </motion.p>
          </motion.div>
        </div>
      </section>

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
                              office.id === "lagos" ? "bg-orange-500" :
                              office.id === "abuja" ? "bg-blue-600" : "bg-green-500"
                            }`}></div>
                            <h3 className="text-xl font-bold text-gray-900">{office.name}</h3>
                          </div>
                          <div className="pl-6 space-y-3">
                            <div className="flex items-start">
                              <MapPin className="h-5 w-5 text-gray-500 mt-0.5 mr-3 flex-shrink-0" />
                              <p className="text-gray-600">{office.address}</p>
                            </div>
                            <div className="flex items-center">
                              <Phone className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0" />
                              <p className="text-gray-600">{office.phone}</p>
                            </div>
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
                    After-Hours Support
                  </h3>
                  <p className="text-blue-700">
                    For urgent technical support outside office hours, call our 24/7 emergency line: 
                    <span className="font-bold"> +234 (0) 800 123 4567</span>
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
                      activeOffice.id === "lagos" ? "bg-orange-500" :
                      activeOffice.id === "abuja" ? "bg-blue-600" : "bg-green-500"
                    }`}></div>
                    <h2 className="text-2xl font-bold text-gray-900">{activeOffice.name}</h2>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Address</h3>
                      <p className="text-gray-700 flex items-start">
                        <MapPin className="h-5 w-5 text-gray-500 mt-0.5 mr-2 flex-shrink-0" />
                        {activeOffice.address}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Contact</h3>
                      <p className="text-gray-700 mb-2 flex items-center">
                        <Phone className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0" />
                        {activeOffice.phone}
                      </p>
                      <p className="text-gray-700 flex items-center">
                        <Mail className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0" />
                        {activeOffice.email}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex gap-3">
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                      <a 
                        href={`https://www.google.com/maps/dir/?api=1&destination=${activeOffice.coordinates.lat},${activeOffice.coordinates.lng}`}
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

              <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl shadow-xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">Global Headquarters</h2>
                <p className="text-blue-200 mb-6">
                  Our main corporate office where our executive leadership and strategic teams are located.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-orange-300 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Digital Energy Headquarters</h3>
                      <p className="text-blue-200">
                        789 Corporate Plaza, Victoria Island
                        <br />
                        Lagos, Nigeria
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-orange-300 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Main Switchboard</h3>
                      <p className="text-blue-200">+234 (0) 800 555 1234</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-orange-300 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Corporate Inquiries</h3>
                      <p className="text-blue-200">corporate@digitalenergy.ng</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}