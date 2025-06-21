import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, Phone, Mail, Globe, Search, ShoppingCart, User, Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"
import { useSearch } from "@/context/SearchContext"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)
  const mobileMenuRef = useRef(null)
  const location = useLocation()
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const navigate = useNavigate()
  const { t, i18n } = useTranslation();
  const { setSearchTerm } = useSearch();

  // Navigation links
  const aboutLinks = [
    { name: t("header.about_who_we_are"), href: "/about/who-we-are" },
    { name: t("header.management"), href: "/about/management" },
    { name: t("header.our_history"), href: "/about/history" },
    { name: t("header.our_certifications"), href: "/about/certifications" },
    { name: t("header.event_gallery"), href: "/about/gallery" },
    { name: t("header.clients"), href: "/about/clients" },
  ];
  
  const contactLinks = [
    { name: t("header.contact_us"), href: "/contact" },
    { name: t("header.request_quote"), href: "/contact/quote" },
    { name: t("header.vendor_registration"), href: "/contact/vendor" },
    { name: t("header.become_partner"), href: "/contact/partner" },
  ];

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
    { key: "home", name: t("header.home"), href: "/" },
    { key: "about", name: t("header.about"), href: "/about", dropdown: aboutLinks },
    { key: "services", name: t("header.services"), href: "/services" },
    { key: "projects", name: t("header.projects"), href: "/projects" },
    { key: "oem", name: t("header.oem"), href: "/oem" },
    { key: "careers", name: t("header.careers"), href: "/careers" },
    { key: "contact", name: t("header.contact"), href: "/contact", dropdown: contactLinks },
  ]

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchTerm(searchQuery.trim());
      setSearchQuery("");
      navigate("/search");
    }
  }

  return (
    <header className="fixed left-0 right-0 top-0 w-full z-50">
      {/* Top Bar: Contact Info, Language, Google Logo & Request Quote */}
      <div className="bg-[#002147] text-white text-sm py-2">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
          {/* Top section: Language + Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6">
            {/* Google logo + Language dropdown */}
            <div className="flex items-center mr-0 sm:mr-4">
              <img src="/images/webp/Google.webp" alt="Google logo" className="h-6 w-auto mr-2" />
              <div className="relative">
                <select
                  className="appearance-none bg-white text-[#002147] border border-gray-200 rounded px-3 py-1 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm font-medium min-w-[90px]"
                  value={i18n.language}
                  onChange={e => i18n.changeLanguage(e.target.value)}
                >
                  <option value="en">English</option>
                  <option value="fr">Français</option>
                  <option value="es">Español</option>
                </select>
                {/* Dropdown arrow */}
                <span className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 text-[#002147]">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2 text-white" />
              <span>+234 810 125 9849</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2 text-white" />
              <span>info@digitalenergyng.com</span>
            </div>
          </div>
          {/* Request Quote Button */}
          <div className="flex items-center justify-center">
            <Button asChild className="flex items-center bg-[#002147] hover:bg-[#193a6b] text-white px-4 py-1 text-xs md:text-sm rounded-md font-semibold">
              <Link to="/contact/quote" className="flex items-center">
                <span className="flex items-center justify-center bg-white rounded-full h-6 w-6 mr-2">
                  <Phone className="h-4 w-4 text-[#002147]" />
                </span>
                <span className="font-semibold">Request Quote</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
      {/* Main Header Bar */}
      <div 
        className="bg-gray-100 transition-all duration-300 py-2"
      >
        <div className="max-w-6xl mx-auto px-4">
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
            <div className="hidden md:flex items-center ml-8">
              <img src="/images/Bms1.jpg" alt="ISO Certification" className="h-24 w-28 opacity-80 hover:opacity-100 transition-opacity" />
              <img src="/images/Bms2.jpg" alt="ISO Certification" className="h-24 w-28 opacity-80 hover:opacity-100 transition-opacity -ml-4" />
            </div>
            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              {/* Desktop Search */}
              <div className="hidden md:flex items-center">
                <form onSubmit={handleSearch} className="flex items-center">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="h-10 pl-4 pr-4 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent w-48 text-black bg-white placeholder-gray-400"
                  />
                  <button
                    type="submit"
                    className="h-10 px-5 rounded-r-lg bg-blue-800 text-white font-semibold hover:bg-orange-500 transition-colors border-l border-gray-300"
                  >
                    Search
                  </button>
                </form>
              </div>
              {/* Mobile Menu Button */}
              <div className="flex items-center md:hidden">
                <button
                  className="text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  onClick={() => setSearchOpen(!searchOpen)}
                >
                  <Search className="h-6 w-6" />
                </button>
                <button
                  className="text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors ml-2"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Navigation Bar */}
      <div className="bg-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="hidden md:flex items-center justify-between">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.key} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => {
                      if (link.key === "about") {
                        setIsAboutDropdownOpen(!isAboutDropdownOpen)
                        setIsContactDropdownOpen(false)
                      } else if (link.key === "contact") {
                        setIsContactDropdownOpen(!isContactDropdownOpen)
                        setIsAboutDropdownOpen(false)
                      }
                    }}
                    className={`flex items-center space-x-1 px-4 py-3 font-medium transition-colors duration-200 ${
                      (link.key === "about" && aboutLinks.some(l => location.pathname === l.href)) ||
                      (link.key === "contact" && contactLinks.some(l => location.pathname === l.href))
                        ? "bg-blue-800 text-white" 
                        : "hover:bg-blue-800 hover:text-white text-white"
                    }`}
                  >
                    <span>{link.name}</span>
                    <motion.span
                      animate={{ 
                        rotate: (link.key === "about" && isAboutDropdownOpen) || 
                               (link.key === "contact" && isContactDropdownOpen) ? 180 : 0 
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {((link.key === "about" && isAboutDropdownOpen) || 
                      (link.key === "contact" && isContactDropdownOpen)) && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-1 bg-white rounded-lg shadow-lg py-2 border border-gray-100 min-w-[220px] z-10"
                      >
                        <div className="flex flex-col">
                          {link.dropdown.map((l) => (
                            <Link
                              key={l.name}
                              to={l.href}
                              className={`px-4 py-2.5 text-sm whitespace-nowrap rounded-lg mx-2 transition-colors ${
                                location.pathname === l.href
                                  ? "bg-blue-800 text-white"
                                  : "hover:bg-blue-800 hover:text-white text-gray-700"
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
                  key={link.key}
                  to={link.href}
                  className={`relative font-medium px-4 py-3 transition-colors duration-200 ${
                    location.pathname === link.href 
                      ? "bg-blue-800 text-white" 
                      : "hover:bg-blue-800 hover:text-white text-white"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
            <Link
              to="/about/who-we-are"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-blue-800 rounded-lg hover:bg-blue-800 hover:text-white transition-colors shadow-sm ml-4"
            >
              {t("header.learnMore")}
            </Link>
          </nav>
        </div>
      </div>
      {/* Mobile Search Bar */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="container mx-auto px-4 py-3">
              <form 
                onSubmit={handleSearch}
                className="flex items-center"
              >
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-10 flex-1 px-4 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent text-black bg-white placeholder-gray-400"
                />
                <button 
                  type="submit"
                  className="h-10 px-5 rounded-r-lg bg-blue-800 text-white font-semibold hover:bg-orange-500 transition-colors border-l border-gray-300"
                >
                  Search
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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
                {navLinks.map((link) =>
                  link.dropdown ? (
                    <div key={link.key}>
                      <button 
                        className={`flex items-center justify-between w-full px-4 py-3 font-medium transition-colors duration-200 ${
                          (link.key === "about" && isAboutDropdownOpen) ||
                          (link.key === "contact" && isContactDropdownOpen)
                            ? "bg-blue-800 text-white"
                            : "hover:bg-blue-800 hover:text-white text-gray-700"
                        }`}
                        onClick={() => {
                          if (link.key === "about") {
                            setIsAboutDropdownOpen(!isAboutDropdownOpen)
                            setIsContactDropdownOpen(false)
                          } else if (link.key === "contact") {
                            setIsContactDropdownOpen(!isContactDropdownOpen)
                            setIsAboutDropdownOpen(false)
                          }
                        }}
                      >
                        <span>{link.name}</span>
                        <motion.span
                          animate={{ 
                            rotate: (link.key === "about" && isAboutDropdownOpen) || 
                                   (link.key === "contact" && isContactDropdownOpen) ? 180 : 0 
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="h-4 w-4" />
                        </motion.span>
                      </button>
                      
                      <AnimatePresence>
                        {((link.key === "about" && isAboutDropdownOpen) || 
                          (link.key === "contact" && isContactDropdownOpen)) && (
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
                                  className={`block px-4 py-2.5 text-sm rounded-lg transition-colors ${
                                    location.pathname === l.href
                                      ? "bg-blue-800 text-white"
                                      : "hover:bg-blue-800 hover:text-white text-gray-700"
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
                      key={link.key}
                      to={link.href}
                      className={`px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${
                        location.pathname === link.href ? "bg-blue-800 text-white" : "hover:bg-blue-800 hover:text-white text-gray-700"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )
                )}
                <div className="flex space-x-4 mt-4">
                  <Button
                    className="flex-1 bg-gray-900 hover:bg-gray-800"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <User className="h-4 w-4 mr-2" />
                    {t("header.account")}
                  </Button>
                  <Button
                    className="flex-1 bg-blue-800 hover:bg-blue-800"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {t("header.cart")}
                  </Button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}