"use client"

import { motion } from "framer-motion"
import { ArrowRight, FileText, Clock, CheckCircle } from "lucide-react"

const services = [
  "Engineering Services",
  "Procurement Services",
  "Construction & Installation",
  "Operations & Maintenance",
  "Technical Manpower Supply",
  "Digital Solutions",
]

export default function RequestQuote() {
  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white relative overflow-hidden rounded-2xl mx-4 md:mx-6 lg:mx-8">
        <div className="absolute inset-0">
          <img
            src="/images/p88.png"
            alt="Request Quote"
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
            <p className="text-sm font-medium">Request a Quote</p>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Excellence Through <span className="text-orange-400">Service</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-blue-100 max-w-3xl leading-relaxed"
          >
            Share your project details and we'll prepare a customized solution.
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Simplified Quote Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="border border-gray-200 bg-white rounded-xl shadow-lg p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Details</h2>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                      <input
                        type="text"
                        placeholder="Your first name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                      <input
                        type="text"
                        placeholder="Your last name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                      <input
                        type="tel"
                        placeholder="+234 (0) 123 456 7890"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company *</label>
                    <input
                      type="text"
                      placeholder="Company name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Needed *</label>
                    <select
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service.toLowerCase().replace(/\s+/g, "-")}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Brief *</label>
                    <textarea
                      placeholder="Describe your project requirements"
                      rows={4}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="terms" 
                      required 
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" 
                    />
                    <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                      I agree to the terms and privacy policy
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-700 hover:bg-blue-800 text-white px-6 py-4 rounded-lg flex items-center justify-center transition-all shadow-lg hover:shadow-blue-700/20"
                  >
                    Submit Request
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Enhanced Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="border border-gray-200 bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">How It Works</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <FileText className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Submit Request</h4>
                      <p className="text-sm text-gray-600">Fill our simple form with your project details</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Quick Review</h4>
                      <p className="text-sm text-gray-600">Our experts analyze your requirements</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Get Your Quote</h4>
                      <p className="text-sm text-gray-600">Receive a detailed proposal within 24-48 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-blue-100 bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Need Assistance?</h3>
                <p className="text-gray-600 mb-4">
                  Our team is ready to help you with your project requirements.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-blue-700 font-medium w-20">Email:</span>
                    <span className="text-gray-600">info@digitalenergyng.com</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-700 font-medium w-20">Phone:</span>
                    <span className="text-gray-600">+234 201 453 6157</span>
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