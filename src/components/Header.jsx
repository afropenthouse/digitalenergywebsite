import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, Phone, Mail, Globe, Search } from "lucide-react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { useSearch } from "@/context/SearchContext"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const dropdownRef = useRef(null)
  const mobileMenuRef = useRef(null)
  const location = useLocation()
  const [searchQuery, setSearchQuery] = useState("")
  const navigate = useNavigate()
  const { setSearchTerm } = useSearch();

  // Navigation links
  const aboutLinks = [
    { name: "Who We Are", href: "/about/who-we-are" },
    { name: "Management", href: "/about/management" },
    { name: "Our History", href: "/about/history" },
    { name: "Our Certifications", href: "/about/certifications" },
    { name: "Picture Gallery", href: "/about/gallery" },
    { name: "Clients", href: "/about/clients" },
    { type: "header", name: "Policies" },
    { name: "HSE Policy", href: "/hsc-policy" },
    { name: "QMS Policy", href: "/qms" },
  ];
  
  const contactLinks = [
    { name: "Contact Us", href: "/contact" },
    { name: "Request Quote", href: "/contact/quote" },
    { name: "Vendor Registration", href: "/contact/vendor" },
    { name: "Become Partner", href: "/contact/partner" },
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
        setActiveDropdown(null)
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
    setActiveDropdown(null)
  }, [location.pathname])

  const navLinks = [
    { key: "home", name: "Home", href: "/" },
    { key: "about", name: "About", href: "/about", dropdown: aboutLinks },
    { key: "services", name: "Services", href: "/services" },
    { key: "projects", name: "Projects", href: "/projects" },
    { key: "csr", name: "CSR", href: "/csr" },
    { key: "fabrication-yard", name: "Workshop", href: "/fabrication-yard" },
    { key: "careers", name: "Careers", href: "/careers" },
    { key: "contact", name: "Contact", href: "/contact", dropdown: contactLinks },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchTerm(searchQuery.trim());
      setSearchQuery("");
      navigate("/search");
    }
  }

  const toggleDropdown = (key) => {
    setActiveDropdown(activeDropdown === key ? null : key)
  }

  return (
    <header className={`fixed left-0 right-0 top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "shadow-lg" : ""}`}>
      {/* Top Bar - sleek with smooth hide */}
      <div 
        className={`bg-blue-800 text-white transition-all duration-500 ease-in-out overflow-hidden ${
          isScrolled ? "h-0 opacity-0" : "h-8 opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between text-xs">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1.5">
              <Globe className="h-3.5 w-3.5 text-blue-200" />
              <span className="font-medium text-white">English</span>
            </div>
            <div className="hidden md:flex items-center space-x-3">
              <Phone className="h-3 w-3 text-blue-200" />
              <span className="hover:text-blue-100 transition-colors">+234 (0) 201 453 6157</span>
              <span className="text-blue-200">|</span>
              <Phone className="h-3 w-3 text-blue-200" />
              <span className="hover:text-blue-100 transition-colors">+234 (0) 810 125 9849</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-1.5">
              <Mail className="h-3 w-3 text-blue-200" />
              <span className="hover:text-blue-100 transition-colors">info@digitalenergyng.com</span>
            </div>
            <Link 
              to="/contact/quote" 
              className="flex items-center space-x-1 group"
            >
              <Phone className="h-3 w-3 text-blue-200 group-hover:text-white transition-colors" />
              <span className="group-hover:text-white transition-colors">Request a Quote</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header - glass effect when scrolled */}
      <div 
        className={`transition-all duration-500 ease-in-out ${
          isScrolled 
            ? "bg-white/90 backdrop-blur-md shadow-md border-b border-blue-800/20 py-1" 
            : "bg-white border-b border-blue-800 py-2 md:py-1.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/images/Misc/logofooter.webp" 
              alt="Digital Energy Logo" 
              className={`transition-all duration-300 ${isScrolled ? "h-8" : "h-11"}`} 
            />
          </Link>
          
          {/* Certifications - hidden on scroll */}
          <div className={`hidden md:flex items-center space-x-4 transition-opacity duration-500 ${isScrolled ? "opacity-0" : "opacity-100"}`}>
            <img src="/images/Misc/Bms1.webp" alt="ISO 9001:2015" className="h-12 w-auto" />
            <img src="/images/Misc/Bms2.webp" alt="ISO 45001:2018" className="h-12 w-auto" />
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Search - rounded-full style */}
            <form 
              onSubmit={handleSearch} 
              className={`hidden md:flex items-center bg-gray-50 border border-gray-200 rounded-full overflow-hidden transition-all duration-300 ${
                isScrolled ? "scale-90" : "scale-100"
              }`}
            >
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-9 pl-4 pr-2 text-sm focus:outline-none w-40 text-gray-700 bg-transparent placeholder-gray-400"
              />
              <button
                type="submit"
                className="h-9 px-3 bg-blue-800 text-white hover:bg-blue-700 flex items-center justify-center transition-colors rounded-r-full"
              >
                <Search className="h-4 w-4" />
              </button>
            </form>
            
            <button 
              className="md:hidden text-blue-800 p-1.5 rounded-lg hover:bg-blue-50 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation - sleeker with glass effect */}
      <div 
        className={`transition-all duration-500 ease-in-out ${
          isScrolled 
            ? "bg-blue-800/95 backdrop-blur-sm shadow-md" 
            : "bg-blue-800"
        }`}
      >
        <div className="w-full">
          <nav className="hidden md:flex items-center justify-center h-11">
            <div className="flex items-center w-full max-w-7xl mx-auto px-4">
              {navLinks.map((link) => (
                <div 
                  key={link.key} 
                  className="relative flex-1 text-center"
                  ref={dropdownRef}
                >
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(link.key)}
                        className={`flex items-center justify-center w-full h-11 px-1.5 space-x-1 font-medium transition-all duration-200
                          ${activeDropdown === link.key || ((link.key === "about" && aboutLinks.some(l => location.pathname === l.href)) || (link.key === "contact" && contactLinks.some(l => location.pathname === l.href)))
                            ? "bg-blue-900/40 text-white"
                            : "hover:bg-blue-900/30 text-white"
                          } relative group text-sm tracking-wide`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          activeDropdown === link.key ? "rotate-180" : ""
                        }`} />
                        <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transition-all duration-300 ${
                          activeDropdown === link.key ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                        }`}></span>
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === link.key && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute left-0 right-0 mt-0 bg-white/95 backdrop-blur-sm shadow-xl py-1.5 px-2 border border-gray-100 z-10 rounded-xl top-11"
                          >
                            <div className="flex flex-col items-end">
                              {link.dropdown.map((l) => (
                                l.type === "header" ? (
                                  <div
                                    key={l.name}
                                    className="w-full py-1.5 text-xs font-bold text-gray-500 uppercase tracking-wider border-t border-gray-200 mt-1 pt-1.5 text-center"
                                  >
                                    {l.name}
                                  </div>
                                ) : (
                                  <Link
                                    key={l.name}
                                    to={l.href}
                                    className={`block w-full py-2 text-sm whitespace-nowrap transition-colors rounded-lg text-center ${
                                      location.pathname === l.href
                                        ? "bg-blue-800 text-white"
                                        : "hover:bg-blue-800 hover:text-white text-gray-700"
                                    }`}
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    {l.name}
                                  </Link>
                                )
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={link.href}
                      className={`flex items-center justify-center w-full h-11 px-1.5 text-sm font-medium transition-colors duration-200 relative group ${
                        location.pathname === link.href
                          ? "bg-blue-900/40 text-white"
                          : "hover:bg-blue-900/30 text-white"
                      }`}
                    >
                      {link.name}
                      <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transition-all duration-300 ${
                        location.pathname === link.href ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`}></span>
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="flex-1 text-center">
                <Link
                  to="/about/who-we-are"
                  className="inline-flex items-center justify-center h-8 px-4 text-xs font-medium text-blue-800 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-sm"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu - refined */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden bg-white/95 backdrop-blur-sm shadow-xl border-t border-gray-200"
            ref={mobileMenuRef}
          >
            <div className="px-4 py-3">
              <form onSubmit={handleSearch} className="flex items-center mb-4">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 h-10 pl-4 pr-2 text-sm border border-gray-200 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-800/20 bg-gray-50"
                />
                <button
                  type="submit"
                  className="h-10 px-4 bg-blue-800 text-white rounded-r-full hover:bg-blue-700 transition-colors"
                >
                  <Search className="h-5 w-5" />
                </button>
              </form>
              
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <div key={link.key} className="border-b border-gray-100 last:border-0">
                    {link.dropdown ? (
                      <div className="py-1.5">
                        <button
                          onClick={() => toggleDropdown(link.key)}
                          className={`flex items-center justify-between w-full px-3 py-2 text-left font-medium rounded-lg transition-colors ${
                            (link.key === "about" && aboutLinks.some(l => location.pathname === l.href)) ||
                            (link.key === "contact" && contactLinks.some(l => location.pathname === l.href))
                              ? "bg-blue-800 text-white"
                              : "text-gray-700 hover:bg-blue-50"
                          }`}
                        >
                          <span>{link.name}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === link.key ? "rotate-180" : ""
                          }`} />
                        </button>
                        
                        <AnimatePresence>
                          {activeDropdown === link.key && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-4 overflow-hidden"
                            >
                              <div className="py-2 space-y-1">
                                {link.dropdown.map((l) => (
                                  l.type === "header" ? (
                                    <div
                                      key={l.name}
                                      className="px-3 py-1.5 text-xs font-bold text-gray-500 uppercase tracking-wider border-t border-gray-200 mt-1 pt-2 text-center"
                                    >
                                      {l.name}
                                    </div>
                                  ) : (
                                    <Link
                                      key={l.name}
                                      to={l.href}
                                      className={`block w-full py-2 text-sm rounded-lg text-center transition-colors ${
                                        location.pathname === l.href
                                          ? "bg-blue-800 text-white"
                                          : "hover:bg-blue-800 hover:text-white text-gray-700"
                                      }`}
                                    >
                                      {l.name}
                                    </Link>
                                  )
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={link.href}
                        className={`block px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                          location.pathname === link.href
                            ? "bg-blue-800 text-white"
                            : "text-gray-700 hover:bg-blue-50"
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
                
                <Link
                  to="/about/who-we-are"
                  className="block mt-3 px-4 py-2 text-center text-sm font-medium text-blue-800 bg-blue-50 rounded-full hover:bg-blue-100 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}