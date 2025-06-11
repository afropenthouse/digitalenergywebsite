"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock, ChevronRight, ArrowRight } from "lucide-react"

const offices = [
  {
    id: "headoffice",
    name: "Head Office",
    address: "Tapa House, 3/5, Imam Dauda Street, Off Eric Moore Road, Surulere, Lagos, Nigeria",
    phone: "+234 201 453 6157, +234 903 990 3519, +234 810 125 9849",
    email: "info@digitalenergy.ng",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.4843897!2d3.3506531!3d6.484395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c097389e891%3A0xbf38477be5143794!2sThe%20SMAT%20Place%2C%20Tapa%20House%2C%20Imam%20Dauda!5e0!3m2!1sen!2sng!4v1709565342570!5m2!1sen!2sng",
    directionsUrl: "https://maps.app.goo.gl/bZjh7PQzzVDYdKXi9"
  },
  {
    id: "portharcourt",
    name: "Port Harcourt Terminal Office",
    address: "Digital Energy Close, Off Igboeche road, by Eleme Junction, Port Harcourt, Nigeria",
    email: "portharcourt@digitalenergy.ng",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.962371287539!2d7.007092715264468!3d4.815081096509545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069d26a7b1e1f4d%3A0x4d9e0f1c3d3d3d3d!2sEleme%20Junction%2C%20Port%20Harcourt!5e0!3m2!1sen!2sng!4v1648226912495!5m2!1sen!2sng",
    directionsUrl: "https://maps.app.goo.gl/ZmNvaNozUm2CV3iD7"
  },
  {
    id: "chevron",
    name: "Chevron Office",
    address: "House 8, Dr. Chimezie Street, Chevy View Estate, along Chevron drive, off Lekki-Epe expressway, Lagos",
    phone: "+234 708 607 8838, +234 707 752 5861, +234 810 125 9849",
    email: "chevron@digitalenergy.ng",
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white relative overflow-hidden rounded-2xl mx-4 md:mx-6 lg:mx-8">
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
      Excellence Through <span className="text-orange-400">Communication</span>
    </motion.h2>
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="text-xl text-blue-100 max-w-3xl leading-relaxed"
    >
      Reach out to us for any inquiries or support.
    </motion.p>
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
                            <div className="flex items-center">
                              <Phone className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0" />
                              <p className="text-gray-600">{office.phone}</p>
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
                      <p className="text-gray-700 flex items-start">
                        <MapPin className="h-5 w-5 text-gray-500 mt-0.5 mr-2 flex-shrink-0" />
                        {activeOffice.address}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Contact</h3>
                      {activeOffice.phone && (
                      <p className="text-gray-700 mb-2 flex items-center">
                        <Phone className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0" />
                        {activeOffice.phone}
                      </p>
                      )}
                      <p className="text-gray-700 flex items-center">
                        <Mail className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0" />
                        {activeOffice.email}
                      </p>
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

              <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl shadow-xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">Head Office</h2>
                <p className="text-blue-200 mb-6">
                  Our main corporate office where our executive leadership and strategic teams are located.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-orange-300 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Digital Energy Head Office</h3>
                      <p className="text-blue-200">
                        Tapa House, 3/5, Imam Dauda Street
                        <br />
                        Off Eric Moore Road, Surulere, Lagos, Nigeria
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-orange-300 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Contact Numbers</h3>
                      <p className="text-blue-200">
                        +234 201 453 6157
                        <br />
                        +234 903 990 3519
                        <br />
                        +234 810 125 9849
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-orange-300 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-blue-200">info@digitalenergy.ng</p>
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