"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"

const aboutLinks = [
  { name: "Who We Are", href: "/about/who-we-are" },
  { name: "Management", href: "/about/management" },
  { name: "Our History", href: "/about/history" },
  { name: "Our Certifications", href: "/about/certifications" },
  { name: "Event Gallery", href: "/about/gallery" },
  { name: "Clients", href: "/about/clients" },
]

const contactLinks = [
  { name: "Contact Us", href: "/contact" },
  { name: "Request Quote", href: "/contact/quote" },
  { name: "Vendor Registration", href: "/contact/vendor" },
  { name: "Become Partner", href: "/contact/partner" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)
  const mobileMenuRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsAboutDropdownOpen(false)
        setIsContactDropdownOpen(false)
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsAboutDropdownOpen(false)
    setIsContactDropdownOpen(false)
  }, [location.pathname])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about", dropdown: aboutLinks },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "OEM", href: "/oem" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact", dropdown: contactLinks },
  ]

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white shadow-md py-0" 
          : "bg-white py-2"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/images/logo1.jpg" 
              alt="Digital Energy Logo" 
              className={`transition-all duration-300 ${
                isScrolled ? "h-12" : "h-14"
              }`} 
            />
          </Link>

          {/* Certification Logos */}
          <div className="hidden md:flex items-center space-x-4 ml-8">
            <img src="/images/isocer.png" alt="ISO Certification" className="h-12 opacity-80 hover:opacity-100 transition-opacity" />
          </div>
          <div className="hidden md:flex items-center space-x-4 ml-8">
            <img src="/images/iso4500.png" alt="ISO Certification" className="h-12 opacity-80 hover:opacity-100 transition-opacity" />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              link.dropdown ? (
                <div key={link.name} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => {
                      if (link.name === "About") {
                        setIsAboutDropdownOpen(!isAboutDropdownOpen)
                        setIsContactDropdownOpen(false)
                      } else if (link.name === "Contact") {
                        setIsContactDropdownOpen(!isContactDropdownOpen)
                        setIsAboutDropdownOpen(false)
                      }
                    }}
                    className={`flex items-center space-x-1 px-4 py-2.5 font-medium rounded-lg transition-all duration-200 ${
                      (link.name === "About" && aboutLinks.some(l => location.pathname === l.href)) ||
                      (link.name === "Contact" && contactLinks.some(l => location.pathname === l.href))
                        ? "bg-gray-100 text-gray-900" 
                        : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    }`}
                  >
                    <span>{link.name}</span>
                    <motion.span
                      animate={{ 
                        rotate: (link.name === "About" && isAboutDropdownOpen) || 
                               (link.name === "Contact" && isContactDropdownOpen) ? 180 : 0 
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {((link.name === "About" && isAboutDropdownOpen) || 
                      (link.name === "Contact" && isContactDropdownOpen)) && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 bg-white rounded-lg shadow-lg py-2 border border-gray-100 min-w-[220px]"
                      >
                        <div className="flex flex-col">
                          {link.dropdown.map((l) => (
                            <Link
                              key={l.name}
                              to={l.href}
                              className={`px-4 py-2.5 text-sm whitespace-nowrap rounded-lg mx-2 ${
                                location.pathname === l.href
                                  ? "text-orange-500 bg-orange-50"
                                  : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                              }`}
                              onClick={() => {
                                setIsAboutDropdownOpen(false)
                                setIsContactDropdownOpen(false)
                              }}
                            >
                              {l.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link 
                  key={link.name}
                  to={link.href}
                  className={`relative font-medium px-4 py-2.5 rounded-lg transition-all duration-200 ${
                    location.pathname === link.href 
                      ? "bg-gray-100 text-gray-900" 
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
            
            <Link
              to="/about/who-we-are"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition-colors shadow-sm ml-4"
            >
              Learn More
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-100"
            ref={mobileMenuRef}
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  link.dropdown ? (
                    <div key={link.name}>
                      <button 
                        className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                        onClick={() => {
                          if (link.name === "About") {
                            setIsAboutDropdownOpen(!isAboutDropdownOpen)
                            setIsContactDropdownOpen(false)
                          } else if (link.name === "Contact") {
                            setIsContactDropdownOpen(!isContactDropdownOpen)
                            setIsAboutDropdownOpen(false)
                          }
                        }}
                      >
                        <span>{link.name}</span>
                        <motion.span
                          animate={{ 
                            rotate: (link.name === "About" && isAboutDropdownOpen) || 
                                   (link.name === "Contact" && isContactDropdownOpen) ? 180 : 0 
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="h-4 w-4" />
                        </motion.span>
                      </button>
                      
                      <AnimatePresence>
                        {((link.name === "About" && isAboutDropdownOpen) || 
                          (link.name === "Contact" && isContactDropdownOpen)) && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 space-y-1">
                              {link.dropdown.map((l) => (
                                <Link
                                  key={l.name}
                                  to={l.href}
                                  className={`block px-4 py-2.5 text-sm rounded-lg ${
                                    location.pathname === l.href
                                      ? "text-orange-500 bg-orange-50"
                                      : "text-gray-700 hover:text-orange-500 hover:bg-gray-50"
                                  }`}
                                  onClick={() => {
                                    setIsAboutDropdownOpen(false)
                                    setIsContactDropdownOpen(false)
                                    setIsMobileMenuOpen(false)
                                  }}
                                >
                                  {l.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={link.name}
                      to={link.href}
                      className={`px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors ${
                        location.pathname === link.href ? "bg-orange-50 text-orange-500" : ""
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )
                ))}
                
                <Link
                  to="/contact/quote"
                  className="mt-4 inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition-colors shadow-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Request Quote
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}