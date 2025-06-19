import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react"
import { Wrench, ShoppingCart, Building, CheckCircle, Settings, Users, HardHat } from "lucide-react"
import { Button } from "@/components/ui/button"
import StatsSection from "@/components/StatsSection"
import { Link } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import Loader from "./Loader/Loader"
import { useSearch } from "@/context/SearchContext"
import { useTranslation } from "react-i18next"

function HighlightedText({ text }) {
  const { searchTerm } = useSearch();
  if (!searchTerm) return <>{text}</>;
  const regex = new RegExp(`(${searchTerm})`, "gi");
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === searchTerm.toLowerCase() ? (
          <mark key={i} className="bg-yellow-300 text-black">{part}</mark>
        ) : (
          part
        )
      )}
    </>
  );
}

const Home = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [loadedImages, setLoadedImages] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderInterval = useRef(null);
  const { t } = useTranslation();

  const slides = [
    {
      id: 1,
      title: t("home.slider1_title"),
      subtitle: t("home.slider1_subtitle"),
      description: t("home.slider1_desc"),
      image: "/images/webp/pic_2.webp"
    },
    {
      id: 2,
      title: t("home.slider2_title"),
      subtitle: t("home.slider2_subtitle"),
      description: t("home.slider2_desc"),
      image: "/images/webp/pic_14.webp"
    },
    {
      id: 3,
      title: t("home.slider3_title"),
      subtitle: t("home.slider3_subtitle"),
      description: t("home.slider3_desc"),
      image: "/images/webp/p2.webp"
    },
    {
      id: 4,
      title: t("home.slider4_title"),
      subtitle: t("home.slider4_subtitle"),
      description: t("home.slider4_desc"),
      image: "/images/webp/pic_12.webp"
    },
    {
      id: 5,
      title: t("home.slider5_title"),
      subtitle: t("home.slider5_subtitle"),
      description: t("home.slider5_desc"),
      image: "/images/webp/cli.webp"
    }
  ];

  const services = [
    {
      id: "engineering",
      icon: Wrench,
      title: t("home.engineering_title"),
      description: t("home.engineering_desc"),
      color: "bg-gradient-to-br from-blue-600 to-blue-800",
      image: "/images/webp/engineering.webp",
      path: "/services/engineering"
    },
    {
      id: "procurement",
      icon: ShoppingCart,
      title: t("home.procurement_title"),
      description: t("home.procurement_desc"),
      color: "bg-gradient-to-br from-orange-500 to-orange-700",
      image: "/images/webp/procurement3.webp",
      path: "/services/procurement"
    },
    {
      id: "fabrication",
      icon: HardHat,
      title: t("home.fabrication_title"),
      description: t("home.fabrication_desc"),
      color: "bg-gradient-to-br from-blue-600 to-blue-800",
      image: "/images/webp/fabrication.webp",
      path: "/services/fabrication"
    },
    {
      id: "commissioning",
      icon: CheckCircle,
      title: t("home.commissioning_title"),
      description: t("home.commissioning_desc"),
      color: "bg-gradient-to-br from-orange-500 to-orange-700",
      image: "/images/webp/commisioning.webp",
      path: "/services/commissioning"
    },
    {
      id: "operations",
      icon: Settings,
      title: t("home.operations_title"),
      description: t("home.operations_desc"),
      color: "bg-gradient-to-br from-blue-600 to-blue-800",
      image: "/images/webp/operation.webp",
      path: "/services/operations"
    },
    {
      id: "manpower",
      icon: Users,
      title: t("home.manpower_title"),
      description: t("home.manpower_desc"),
      color: "bg-gradient-to-br from-orange-500 to-orange-700",
      image: "/images/webp/p8.webp",
      path: "/services/manpower"
    },
  ];

  useEffect(() => {
    const handleImageLoad = () => {
      setLoadedImages(prev => {
        const newCount = prev + 1
        if (newCount === 2) {
          setIsLoading(false)
        }
        return newCount
      })
    }

    // Preload hero image
    const heroImg = new Image()
    heroImg.src = "/images/webp/pic_2.webp"
    heroImg.onload = handleImageLoad

    const aboutImg = new Image()
    aboutImg.src = "/images/webp/pic_14.webp"
    aboutImg.onload = handleImageLoad

    // Load service images in the background
    services.forEach(service => {
      const img = new Image()
      img.src = service.image
    })

    // Auto slide change
    sliderInterval.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 6000);

    return () => {
      setIsLoading(true)
      setLoadedImages(0)
      clearInterval(sliderInterval.current);
    }
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
      className="overflow-hidden"
    >
      {/* Hero Section with Slider */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-950 text-white overflow-hidden min-h-[90vh] flex items-center">
        {/* Slider */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-800/60 to-blue-900/70" />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="container mx-auto px-4 pt-32 pb-16 md:pt-44 md:pb-24 relative z-20">
          <div className="max-w-4xl mx-auto lg:text-left flex flex-col items-center lg:items-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${currentSlide}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white text-center lg:text-left">
                  <span className="block mt-14 sm:mt-2"><HighlightedText text={slides[currentSlide].title} /></span>
                  <span className="block text-orange-400 mt-2">
                    <HighlightedText text={slides[currentSlide].subtitle} />
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl text-center lg:text-left">
                  <HighlightedText text={slides[currentSlide].description} />
                </p>
              </motion.div>
            </AnimatePresence>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto"
            >
              <button
                className="relative group inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-orange-400 to-orange-600 rounded-xl shadow-lg overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center">
                  {t('home.get_started')}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform hidden sm:block" />
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform rotate-90 sm:hidden" />
                </span>
              </button>
              <button
                className="relative group inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-white/10 backdrop-blur-sm border-2 border-orange-500 rounded-xl hover:bg-orange-500/20 transition-colors"
              >
                <Link to="/contact" className="relative flex items-center">
                  {t('home.contact_us')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </button>
            </motion.div>
          </div>
        </div>
        {/* Slider Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? 'bg-orange-400 scale-125' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
        {/* Left/Right Arrow Controls */}
        <button
          onClick={() => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-orange-500/80 text-white hover:text-white rounded-full p-2 shadow-lg transition-colors"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-7 h-7" />
        </button>
        <button
          onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-orange-500/80 text-white hover:text-white rounded-full p-2 shadow-lg transition-colors"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-7 h-7" />
        </button>
        {/* Floating elements */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <div className="animate-bounce flex flex-col items-center">
            <span className="text-sm text-blue-200 mb-2">Scroll to explore</span>
            <div className="w-8 h-12 rounded-full border-2 border-orange-400 flex justify-center p-1">
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-2 h-2 bg-orange-400 rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="order-2 lg:order-1"
            >
              <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                {t('home.our_story')}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t('home.transforming_solutions_title')}</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {t('home.transforming_solutions_desc')}
              </p>
              <Button asChild className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-4">
                <Link to="/about/who-we-are">{t('header.learnMore')}</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/webp/pic_14.webp"
                  alt="About Digital Energy"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                
                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl z-10 shadow-xl" />
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl z-10 shadow-xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-8 sm:mb-12"
          >
            <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-1 rounded-full text-sm font-medium mb-3 sm:mb-4">
              {t('home.our_services')}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">{t('home.comprehensive_solutions_title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('home.comprehensive_solutions_desc')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="h-full"
              >
                <Link to={service.path} className="h-full block">
                  <div className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-200 bg-white rounded-xl overflow-hidden flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div
                        className={`absolute top-4 left-4 ${service.color} rounded-xl p-3 shadow-md`}
                      >
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="p-6 flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                        <HighlightedText text={service.title} />
                      </h3>
                      <p className="text-gray-600">
                        <HighlightedText text={service.description} />
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button asChild className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-4">
              <Link to="/services">{t('home.view_all_services')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* CTA Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/webp/pic_2.webp')] bg-cover bg-center opacity-5" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              {t('home.ready_title')}
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              {t('home.ready_desc')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild className="relative group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 text-lg shadow-lg">
                <Link to="/contact/quote">
                  <span className="relative flex items-center">
                    {t('home.request_quote')}
                  </span>
                </Link>
              </Button>

              <Button asChild
                className="bg-gradient-to-r from-blue-700 to-blue-800 text-white px-8 py-4 text-lg shadow-lg hover:from-blue-800 hover:to-blue-900"
              >
                <Link to="/contact">
                  {t('home.contact_us')}
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Home