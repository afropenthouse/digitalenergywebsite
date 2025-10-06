"use client"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin } from "lucide-react"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white w-full">
      {/* Top Orange Bar */}
      <div className="w-full bg-orange-500 px-4 md:px-8 py-3">
        <div className="max-w-6xl mx-auto">
          <p className="text-base md:text-lg font-medium text-white text-center md:text-left">
            Empowering your success with dependable and prompt energy solutions.
          </p>
        </div>
      </div>

      {/* Centered Contact Info Row */}
      <div className="flex justify-center w-full">
        <div className="bg-[#1a1d20] w-full max-w-6xl flex flex-col md:flex-row justify-between items-center py-4 px-6 md:px-8 shadow-lg">
          {/* Phone */}
          <div className="flex items-center space-x-2 py-2 md:py-0 md:pr-8">
            <Phone className="h-5 w-5 text-orange-500" />
            <span className="text-white font-medium">Phone:</span>
            <span className="text-gray-300">+234 (0) 201 453 6157</span>
          </div>
          
          {/* Email */}
          <div className="flex items-center space-x-2 py-2 md:py-0 md:px-8">
            <Mail className="h-5 w-5 text-orange-500" />
            <span className="text-white font-medium">Email:</span>
            <span className="text-gray-300">info@digitalenergyng.com</span>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 pt-10 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-start">
            <img 
              src="/images/logofooter.png" 
              alt="Digital Energy Logo" 
              className="h-12 mb-4"
            />
            <p className="text-blue-100 text-sm mb-4">
              Leading indigenous multi-diverse energy solutions company providing comprehensive services across the entire energy value chain.
            </p>
            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/company/digital-energy-and-interated-services-limited/posts/?feedView=all" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center space-x-2 bg-blue-800 hover:bg-orange-500 p-2 rounded-full transition-colors duration-300"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>

          {/* Quick Links - 2 Columns */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">QUICK LINKS</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              <Link to="/" className="text-blue-100 hover:text-orange-400 text-sm flex items-center transition-colors">
                <span className="mr-1 text-orange-500">→</span>Home
              </Link>
              <Link to="/about/who-we-are" className="text-blue-100 hover:text-orange-400 text-sm flex items-center transition-colors">
                <span className="mr-1 text-orange-500">→</span>About Us
              </Link>
              <Link to="/services" className="text-blue-100 hover:text-orange-400 text-sm flex items-center transition-colors">
                <span className="mr-1 text-orange-500">→</span>Services
              </Link>
              <Link to="/projects" className="text-blue-100 hover:text-orange-400 text-sm flex items-center transition-colors">
                <span className="mr-1 text-orange-500">→</span>Projects
              </Link>
              <Link to="/fabrication-yard" className="text-blue-100 hover:text-orange-400 text-sm flex items-center transition-colors">
                <span className="mr-1 text-orange-500">→</span>Fabrication Yard
              </Link>
              <Link to="/careers" className="text-blue-100 hover:text-orange-400 text-sm flex items-center transition-colors">
                <span className="mr-1 text-orange-500">→</span>Careers
              </Link>
              <Link to="/contact" className="text-blue-100 hover:text-orange-400 text-sm flex items-center transition-colors">
                <span className="mr-1 text-orange-500">→</span>Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">CONTACT INFO</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-blue-100 text-sm">
                  Tapa House, 3/5, Imam Dauda Street, Off Eric Moore Road, Surulere, Lagos, Nigeria
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-orange-500 mr-3" />
                <span className="text-blue-100 text-sm">+234 (0) 201 453 6157</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-orange-500 mr-3" />
                <span className="text-blue-100 text-sm">info@digitalenergyng.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright - Reduced height */}
        <div className="border-t border-blue-800 mt-6 pt-4">
          <p className="text-xs text-blue-300 text-center">
            &copy; {new Date().getFullYear()} Digital Energy & Integrated Services Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}