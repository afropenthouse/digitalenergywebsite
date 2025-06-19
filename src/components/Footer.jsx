"use client"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin } from "lucide-react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

export default function Footer() {
  const { t } = useTranslation();

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
              {t('footer.leading_indigenous_multi_diverse_energy_solutions_company_providing_comprehensive_services_across_the_entire_energy_value_chain')}
            </p>
            
            {/* Social Media */}
            <div className="flex justify-center md:justify-start space-x-4 pt-2">
              {/* <motion.a 
                href="#" 
                className="bg-blue-800 p-2 rounded-full hover:bg-orange-500 transition-colors"
                aria-label="Facebook"
                whileHover={{ scale: 1.1 }}
              >
                <Facebook className="h-5 w-5" />
              </motion.a> */}
              {/* <motion.a 
                href="#" 
                className="bg-blue-800 p-2 rounded-full hover:bg-orange-500 transition-colors"
                aria-label="Twitter"
                whileHover={{ scale: 1.1 }}
              >
                <Twitter className="h-5 w-5" />
              </motion.a> */}
              <motion.a 
                href="https://www.linkedin.com/company/digital-energy-and-interated-services-limited/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800 p-2 rounded-full hover:bg-orange-500 transition-colors"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.1 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              {/* <motion.a 
                href="#" 
                className="bg-blue-800 p-2 rounded-full hover:bg-orange-500 transition-colors"
                aria-label="Instagram"
                whileHover={{ scale: 1.1 }}
              >
                <Instagram className="h-5 w-5" />
              </motion.a> */}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-center md:text-left">{t('footer.quick_links')}</h3>
            <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
              <Link to="/" className="text-blue-100 hover:text-white flex items-center group">
                <span className="bg-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 text-xs group-hover:bg-orange-500 transition-colors">→</span>
                <span className="group-hover:translate-x-1 transition-transform">{t('footer.home')}</span>
              </Link>
              <Link to="/about/who-we-are" className="text-blue-100 hover:text-white flex items-center group">
                <span className="bg-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 text-xs group-hover:bg-orange-500 transition-colors">→</span>
                <span className="group-hover:translate-x-1 transition-transform">{t('footer.about')}</span>
              </Link>
              <Link to="/services" className="text-blue-100 hover:text-white flex items-center group">
                <span className="bg-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 text-xs group-hover:bg-orange-500 transition-colors">→</span>
                <span className="group-hover:translate-x-1 transition-transform">{t('footer.services')}</span>
              </Link>
              <Link to="/projects" className="text-blue-100 hover:text-white flex items-center group">
                <span className="bg-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 text-xs group-hover:bg-orange-500 transition-colors">→</span>
                <span className="group-hover:translate-x-1 transition-transform">{t('footer.projects')}</span>
              </Link>
              <Link to="/oem" className="text-blue-100 hover:text-white flex items-center group">
                <span className="bg-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 text-xs group-hover:bg-orange-500 transition-colors">→</span>
                <span className="group-hover:translate-x-1 transition-transform">{t('footer.oem')}</span>
              </Link>
              <Link to="/careers" className="text-blue-100 hover:text-white flex items-center group">
                <span className="bg-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 text-xs group-hover:bg-orange-500 transition-colors">→</span>
                <span className="group-hover:translate-x-1 transition-transform">{t('footer.careers')}</span>
              </Link>
              <Link to="/contact" className="text-blue-100 hover:text-white flex items-center group">
                <span className="bg-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 text-xs group-hover:bg-orange-500 transition-colors">→</span>
                <span className="group-hover:translate-x-1 transition-transform">{t('footer.contact')}</span>
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
            <h3 className="text-lg font-semibold text-center md:text-left">{t('footer.contact_info')}</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start">
                <MapPin className="h-5 w-5 text-orange-400 mr-3" />
                <span className="text-blue-100">{t('footer.address')}</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Phone className="h-5 w-5 text-orange-400 mr-3" />
                <span className="text-blue-100">{t('footer.phone')}</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Mail className="h-5 w-5 text-orange-400 mr-3" />
                <span className="text-blue-100">{t('footer.email')}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-800 mt-12 pt-8">
          <div className="container mx-auto px-4">
            <div className="text-xs text-blue-200 text-center">
              {t('footer.copyright', { year: new Date().getFullYear() })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}