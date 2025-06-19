import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, Phone, Mail, Globe, Search } from "lucide-react"
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
    }
  }

  return (
    <header className="fixed w-full z-50">
      {/* Top Contact Bar (desktop only) */}
      <div className="hidden md:block bg-gray-900 text-gray-300 text-sm py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-2 md:mb-0">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-orange-400" />
                <span>{t("header.phone")}</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-orange-400" />
                <span>{t("header.email")}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Globe className="h-4 w-4 mr-2 text-orange-400" />
                <select
                  className="bg-transparent border-0 text-gray-300 focus:ring-0 focus:outline-none"
                  value={i18n.language}
                  onChange={e => i18n.changeLanguage(e.target.value)}
                >
                  <option value="en">English</option>
                  <option value="fr">Français</option>
                  <option value="es">Español</option>
                </select>
              </div>
              <Button asChild className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-4 py-1 text-xs md:text-sm">
                <Link to="/contact/quote">{t("header.requestQuote")}</Link>
              </Button>
              {/* Desktop Search Bar (moved here) */}
              <div className="hidden md:flex items-center ml-4">
                <form 
                  onSubmit={handleSearch}
                  className="relative"
                >
                  <input
                    type="text"
                    placeholder={t("header.searchPlaceholder")}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent w-48 text-black"
                  />
                  <button 
                    type="submit"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-orange-500"
                  >
                    <Search className="h-5 w-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main Header Bar */}
      <div 
        className={`bg-white transition-all duration-300 ${
          isScrolled 
            ? "shadow-md py-0" 
            : "py-2"
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
            <div className="hidden md:flex items-center ml-8">
              <img src="/images/Bms1.jpg" alt="ISO Certification" className="h-24 w-28 opacity-80 hover:opacity-100 transition-opacity" />
              <img src="/images/Bms2.jpg" alt="ISO Certification" className="h-24 w-28 opacity-80 hover:opacity-100 transition-opacity -ml-4" />
            </div>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
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
                      className={`flex items-center space-x-1 px-4 py-2.5 font-medium rounded-lg transition-all duration-200 ${
                        (link.key === "about" && aboutLinks.some(l => location.pathname === l.href)) ||
                        (link.key === "contact" && contactLinks.some(l => location.pathname === l.href))
                          ? "bg-gray-100 text-gray-900" 
                          : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
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
                    key={link.key}
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
                {t("header.learnMore")}
              </Link>
            </nav>
            {/* Mobile Menu Button */}
            <div className="flex items-center">
              <button
                className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setSearchOpen(!searchOpen)}
              >
                <Search className="h-6 w-6" />
              </button>
              <button
                className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors ml-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
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
                  placeholder={t("header.searchPlaceholder")}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent text-black"
                />
                <button 
                  type="submit"
                  className="bg-orange-500 text-white p-2 rounded-r-lg hover:bg-orange-600"
                >
                  <Search className="h-5 w-5" />
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
                {navLinks.map((link) => (
                  link.dropdown ? (
                    <div key={link.key}>
                      <button 
                        className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
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
                      key={link.key}
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
                  {t("header.requestQuote")}
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}