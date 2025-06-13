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
                  src="/images/logofooter.png" 
                  alt="Digital Energy Logo" 
                  className="h-12 transition-transform hover:scale-105"
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
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-center md:text-left">Quick Links</h3>
            <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
              <Link to="/" className="text-blue-100 hover:text-white flex items-center group">
                <span className="bg-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 text-xs group-hover:bg-orange-500 transition-colors">→</span>
                <span className="group-hover:translate-x-1 transition-transform">Home</span>
              </Link>
              <Link to="/about" className="text-blue-100 hover:text-white flex items-center group">
                <span className="bg-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 text-xs group-hover:bg-orange-500 transition-colors">→</span>
                <span className="group-hover:translate-x-1 transition-transform">About Us</span>
              </Link>
              <Link to="/services" className="text-blue-100 hover:text-white flex items-center group">
                <span className="bg-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 text-xs group-hover:bg-orange-500 transition-colors">→</span>
                <span className="group-hover:translate-x-1 transition-transform">Services</span>
              </Link>
              <Link to="/projects" className="text-blue-100 hover:text-white flex items-center group">
                <span className="bg-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 text-xs group-hover:bg-orange-500 transition-colors">→</span>
                <span className="group-hover:translate-x-1 transition-transform">Projects</span>
              </Link>
              <Link to="/oem" className="text-blue-100 hover:text-white flex items-center group">
                <span className="bg-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 text-xs group-hover:bg-orange-500 transition-colors">→</span>
                <span className="group-hover:translate-x-1 transition-transform">OEM</span>
              </Link>
              <Link to="/careers" className="text-blue-100 hover:text-white flex items-center group">
                <span className="bg-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 text-xs group-hover:bg-orange-500 transition-colors">→</span>
                <span className="group-hover:translate-x-1 transition-transform">Careers</span>
              </Link>
              <Link to="/contact" className="text-blue-100 hover:text-white flex items-center group">
                <span className="bg-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 text-xs group-hover:bg-orange-500 transition-colors">→</span>
                <span className="group-hover:translate-x-1 transition-transform">Contact</span>
              </Link>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-center md:text-left">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start">
                <MapPin className="h-5 w-5 text-orange-400 mr-3" />
                <span className="text-blue-100">Tapa House, 3/5, Imam Dauda Street, Off Eric Moore Road, Surulere, Lagos, Nigeria</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Phone className="h-5 w-5 text-orange-400 mr-3" />
                <span className="text-blue-100">+234 (0) 201 453 6157</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Mail className="h-5 w-5 text-orange-400 mr-3" />
                <span className="text-blue-100">info@digitalenergyng.com</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-800 mt-12 pt-8">
          <div className="container mx-auto px-4">
            <div className="text-xs text-blue-200 text-center">
              © {new Date().getFullYear()} Digital Energy & Integrated Services Limited. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}