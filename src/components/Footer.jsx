"use client"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex justify-center md:justify-start">
              <div className="p-3 rounded-xl">
                <img 
                  src="/src/assets/logo.png" 
                  alt="Digital Energy Logo" 
                  className="h-12 w-auto transition-transform hover:scale-105"
                />
              </div>
            </div>
            <p className="text-blue-100 text-center md:text-left max-w-md text-sm">
              Leading indigenous multi-diverse energy solutions company providing comprehensive services across the entire energy value chain.
            </p>
            
            {/* Social Media */}
            <div className="flex justify-center md:justify-start space-x-4 pt-2">
              <motion.a 
                href="#" 
                className="bg-blue-800 p-2 rounded-full hover:bg-orange-500 transition-colors"
                aria-label="Facebook"
                whileHover={{ scale: 1.1 }}
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="bg-blue-800 p-2 rounded-full hover:bg-orange-500 transition-colors"
                aria-label="Twitter"
                whileHover={{ scale: 1.1 }}
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="bg-blue-800 p-2 rounded-full hover:bg-orange-500 transition-colors"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.1 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="bg-blue-800 p-2 rounded-full hover:bg-orange-500 transition-colors"
                aria-label="Instagram"
                whileHover={{ scale: 1.1 }}
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-bold text-center md:text-left pb-2 border-b border-blue-700">
              Quick Links
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-3">
                <Link 
                  to="/" 
                  className="text-blue-100 hover:text-orange-500 transition-colors text-sm font-medium flex items-center group"
                >
                  <span className="bg-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 text-xs group-hover:bg-orange-500 transition-colors">→</span>
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className="text-blue-100 hover:text-orange-500 transition-colors text-sm font-medium flex items-center group"
                >
                  <span className="bg-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 text-xs group-hover:bg-orange-500 transition-colors">→</span>
                  About Us
                </Link>
                <Link 
                  to="/services" 
                  className="text-blue-100 hover:text-orange-500 transition-colors text-sm font-medium flex items-center group"
                >
                  <span className="bg-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 text-xs group-hover:bg-orange-500 transition-colors">→</span>
                  Services
                </Link>
              </div>
              <div className="space-y-3">
                <Link 
                  to="/projects" 
                  className="text-blue-100 hover:text-orange-500 transition-colors text-sm font-medium flex items-center group"
                >
                  <span className="bg-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 text-xs group-hover:bg-orange-500 transition-colors">→</span>
                  Projects
                </Link>
                <Link 
                  to="/oem" 
                  className="text-blue-100 hover:text-orange-500 transition-colors text-sm font-medium flex items-center group"
                >
                  <span className="bg-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 text-xs group-hover:bg-orange-500 transition-colors">→</span>
                  OEM
                </Link>
                <Link 
                  to="/contact" 
                  className="text-blue-100 hover:text-orange-500 transition-colors text-sm font-medium flex items-center group"
                >
                  <span className="bg-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 text-xs group-hover:bg-orange-500 transition-colors">→</span>
                  Contact
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-bold text-center md:text-left pb-2 border-b border-blue-700">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-orange-500 p-2 rounded-lg mr-3 flex-shrink-0">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-sm">Office Address</h4>
                  <p className="text-blue-100 text-xs mt-1">
                    123 Energy Street, Lagos, Nigeria
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-orange-500 p-2 rounded-lg mr-3 flex-shrink-0">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-sm">Phone</h4>
                  <p className="text-blue-100 text-xs mt-1">+234 123 456 7890</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-orange-500 p-2 rounded-lg mr-3 flex-shrink-0">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-sm">Email</h4>
                  <p className="text-blue-100 text-xs mt-1">info@digitalenergy.com</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-blue-800 py-3">
        <div className="container mx-auto px-4">
          <div className="text-xs text-blue-200 text-center">
            © {new Date().getFullYear()} Digital Energy & Integrated Services Limited. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}