"use client"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin } from "lucide-react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-blue-900 text-white w-full">
      {/* Top Orange Bar */}
      <div className="w-full bg-orange-500 px-4 md:px-8 py-4">
        <div className="max-w-6xl mx-auto">
          <span className="block text-base md:text-lg lg:text-xl font-medium text-white text-left">
            Delivering reliable and timely solutions for our valued clients.
          </span>
        </div>
      </div>

      {/* Centered Contact Info Row */}
      <div className="flex justify-center w-full mt-0">
        <div className="bg-[#23272b] rounded-none w-[80vw] max-w-6xl flex flex-row justify-between items-center py-6 px-8 shadow-lg divide-x divide-gray-700">
          {/* Phone */}
          <div className="flex items-center space-x-2 pr-8">
            <Phone className="h-6 w-6 text-orange-500" />
            <span className="text-white font-semibold">Phone:</span>
            <span className="text-gray-300">+234 (0) 201 453 6157</span>
          </div>
          {/* Email */}
          <div className="flex items-center space-x-2 px-8">
            <Mail className="h-6 w-6 text-orange-500" />
            <span className="text-white font-semibold">Email:</span>
            <span className="text-gray-300">info@digitalenergyng.com</span>
          </div>
        </div>
      </div>

      {/* Main Footer Content - 3 Columns */}
      <div className="container mx-auto px-4 pt-10 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-start">
            <img src="/images/logofooter.png" alt="Digital Energy Logo" className="h-14 mb-4" />
            <p className="text-blue-100 text-base max-w-lg mb-6">
              Leading indigenous multi-diverse energy solutions company providing comprehensive services across the entire energy value chain.
            </p>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/company/digital-energy-and-interated-services-limited/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-blue-800 p-2 rounded-full hover:bg-orange-500 transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">QUICK LINKS</h3>
            <ul className="text-blue-100 text-base space-y-2">
              <li><Link to="/" className="flex items-center group"><span className="mr-2 text-orange-500">→</span>Home</Link></li>
              <li><Link to="/about/who-we-are" className="flex items-center group"><span className="mr-2 text-orange-500">→</span>About Us</Link></li>
              <li><Link to="/services" className="flex items-center group"><span className="mr-2 text-orange-500">→</span>Services</Link></li>
              <li><Link to="/projects" className="flex items-center group"><span className="mr-2 text-orange-500">→</span>Projects</Link></li>
              <li><Link to="/oem" className="flex items-center group"><span className="mr-2 text-orange-500">→</span>OEM</Link></li>
              <li><Link to="/careers" className="flex items-center group"><span className="mr-2 text-orange-500">→</span>Careers</Link></li>
              <li><Link to="/contact" className="flex items-center group"><span className="mr-2 text-orange-500">→</span>Contact</Link></li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-orange-400 mr-3 mt-1" />
                <span className="text-blue-100">Tapa House, 3/5, Imam Dauda Street, Off Eric Moore Road, Surulere, Lagos, Nigeria</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-orange-400 mr-3" />
                <span className="text-blue-100">+234 (0) 201 453 6157</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-orange-400 mr-3" />
                <span className="text-blue-100">info@digitalenergyng.com</span>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="border-t border-blue-800 mt-12 pt-8">
          <div className="container mx-auto px-4">
            <div className="text-xs text-blue-200 text-center">
              &copy; 2025 Digital Energy & Integrated Services Limited. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}