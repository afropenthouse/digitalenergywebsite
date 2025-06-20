import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react"
import { Wrench, ShoppingCart, Building, CheckCircle, Settings, Users, HardHat } from "lucide-react"
import { Button } from "@/components/ui/button"
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
      className="overflow-hidden pt-32"
    >
      {/* Hero Section with Slider */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-950 text-white overflow-hidden min-h-[90vh] flex items-center pt-[112px]">
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
        <div className="w-full flex justify-center items-center pb-16 md:pb-24 relative z-20">
          <div className="max-w-4xl w-full text-center flex flex-col items-center justify-center px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${currentSlide}`}
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 60 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white text-center lg:text-left">
                  <span className="block mt-14 sm:mt-2"><HighlightedText text={slides[currentSlide].title} /></span>
                  <span className="block text-orange-400 mt-2">
                    <HighlightedText text={slides[currentSlide].subtitle} />
                  </span>
                </h1>
                <motion.p
                  className="text-lg md:text-xl text-white mb-8 max-w-2xl text-center lg:text-left"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
                  key={`desc-${currentSlide}`}
                >
                  <HighlightedText text={slides[currentSlide].description} />
                </motion.p>
              </motion.div>
            </AnimatePresence>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full mt-4"
            >
              <Link
                to="/services"
                className="relative group inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-orange-400 to-orange-600 rounded-xl shadow-lg overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center">
                  Services
                </span>
              </Link>
              <Link
                to="/about/who-we-are"
                className="relative group inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-white/10 backdrop-blur-sm border-2 border-orange-500 rounded-xl hover:bg-orange-500/20 transition-colors"
              >
                <span className="relative flex items-center">
                  About us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </Link>
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
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="w-full">
           <div className="flex flex-col lg:flex-row justify-center items-center w-4/5 mx-auto min-h-[200px]">
            {/* Left: Welcome heading only */}
            <div className="flex-1 flex flex-col justify-center items-center text-center py-4">
              <h2 className="text-5xl font-light text-gray-900 leading-tight">
                Welcome to<br/>
                <span className="font-normal text-orange-600">Digital energy</span>
              </h2>
            </div>
            {/* Divider */}
            <div className="hidden lg:block h-32 border-l-2 border-blue-800 mx-8" style={{ minHeight: '120px' }}></div>
            {/* Right: Company intro and About Us content */}
            <div className="flex-1 flex flex-col justify-center items-center text-center py-4">
              <p className="text-xl text-gray-400 mb-2 font-normal">
              We are a forward-thinking energy services company delivering end-to-end engineering, procurement, construction, and commissioning solutions to Nigeria's oil and gas industry. 
              </p>
              <p className="text-xl text-blue-900 font-semibold">
              From project conception to completion, we bring innovation, local expertise, and global standards to every challenge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Service Overview</h2>
            <p className="text-lg text-gray-600 max-w-2xl mb-2">
              We deliver a comprehensive suite of engineering, procurement, construction, commissioning, and manpower solutions tailored for the evolving needs of the energy sector.
            </p>
            <div className="w-16 h-1 bg-orange-500 rounded mt-2" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Engineering Services",
                description: "Front-end engineering design (FEED), detailed engineering, and constructability studies across civil, mechanical, electrical, and process disciplines.",
                image: "/images/webp/engineering.webp",
                path: "/services/engineering"
              },
              {
                title: "Procurement Services",
                description: "Global and local sourcing of materials, equipment, and services with a focus on cost, quality, and local content compliance.",
                image: "/images/webp/procurement3.webp",
                path: "/services/procurement"
              },
              {
                title: "Fabrication & Construction",
                description: "Civil works, Steel structural Fabrication and erection, mechanical installation, piping, E&I, and facility upgrades.",
                image: "/images/webp/fabrication.webp",
                path: "/services/fabrication"
              },
              {
                title: "Commissioning & Start-up",
                description: "Pre-commissioning, commissioning, and start-up support services to ensure systems operate as designed.",
                image: "/images/webp/commisioning.webp",
                path: "/services/commissioning"
              },
              {
                title: "Operations & Maintenance",
                description: "End-to-end O&M services ensuring optimal asset performance, reduced downtime, and extended infrastructure life cycle.",
                image: "/images/webp/operation.webp",
                path: "/services/operations"
              },
              {
                title: "Technical Manpower Supply",
                description: "Certified Personnel | Project Staffing | IRATA Technicians | Specialized Roles",
                image: "/images/webp/p8.webp",
                path: "/services/manpower"
              },
            ].map((service, idx) => (
              <div key={service.title} className="bg-white border border-gray-200 rounded-xl flex flex-col md:flex-row items-center h-auto md:h-40 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex-shrink-0 w-full md:w-40 h-40 md:h-full overflow-hidden rounded-t-xl md:rounded-t-none md:rounded-l-xl">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 pl-0 md:pl-6 pr-0 md:pr-4 flex flex-col justify-center h-auto md:h-full p-4 md:p-0">
                  <h3 className="text-2xl font-normal text-gray-900 mb-1 leading-snug">{service.title}</h3>
                  <p className="text-base text-gray-700 mb-2 leading-snug">{service.description}</p>
                  <a href={service.path} className="text-orange-500 font-medium flex items-center group hover:underline text-lg">
                    <span className="mr-1">&rarr; Read More</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      {/* Latest Projects Section */}
      <section className="py-16 bg-blue-900">
        <div className="w-4/5 mx-auto">
          <h2 className="text-4xl font-light text-white mb-2 text-left">Latest Projects</h2>
          <div className="w-20 h-1 bg-orange-500 rounded mb-10 text-left"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
            {/* Project 1 */}
            <Link to="/projects" className="relative w-full h-64 block group rounded shadow-lg overflow-hidden">
              <img src="/images/Projects/Maintenance.png" alt="Maintenance & Inspection Services" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                <h3 className="text-lg font-bold text-white mb-1">Maintenance & Inspection Services</h3>
                <p className="italic text-white text-sm mb-1">NPDC</p>
                <p className="text-white text-xs">Provision of maintaining and inspection, supply of PUP joints and cross over services for NPDC Operated Land and Swamp Assets on a call Basis</p>
              </div>
            </Link>
            {/* Project 2 */}
            <Link to="/projects" className="relative w-full h-64 block group rounded shadow-lg overflow-hidden">
              <img src="/images/Projects/Machining Services.jpg" alt="Machining & Fabrication Services" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                <h3 className="text-lg font-bold text-white mb-1">Machining & Fabrication Services</h3>
                <p className="italic text-white text-sm mb-1">Seplat</p>
                <p className="text-white text-xs">Provision of machining and fabrication services for eastern assets</p>
              </div>
            </Link>
            {/* Project 3 */}
            <Link to="/projects" className="relative w-full h-64 block group rounded shadow-lg overflow-hidden">
              <img src="/images/Projects/Tank_Farm.jpg" alt="Tank Farm Upgrade & Maintenance" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                <h3 className="text-lg font-bold text-white mb-1">Tank Farm Upgrade & Maintenance</h3>
                <p className="italic text-white text-sm mb-1">Pivot Integrated Energy</p>
                <p className="text-white text-xs">Upgrade and maintenance of 40 million liters Tank farm depot in Calabar EPZ</p>
              </div>
            </Link>
            {/* Project 4 */}
            <Link to="/projects" className="relative w-full h-64 block group rounded shadow-lg overflow-hidden">
              <img src="/images/Projects/Tank_Farm2.jpg" alt="Lagos (Apapa) Tank Farm Maintenance" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                <h3 className="text-lg font-bold text-white mb-1">Lagos (Apapa) Tank Farm Maintenance</h3>
                <p className="italic text-white text-sm mb-1">Pivot Integrated Energy</p>
                <p className="text-white text-xs">Upgrade and maintenance of 30 million Litres Tank Farm depot in Apapa, Lagos</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Clients Scroller Section */}
      <section className="py-8 bg-white">
        <div className="w-4/5 mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Our Clients</h2>
          <div className="overflow-x-hidden scrollbar-hide whitespace-nowrap py-2">
            <div className="relative w-full" style={{ overflow: 'hidden' }}>
              <div className="flex animate-scroll-x space-x-8 items-center" style={{ width: 'max-content' }}>
                {/* Logos duplicated for seamless loop */}
                <img src="/images/Clients_webp/nnpc.webp" alt="NNPC" className="h-16 w-auto object-contain" />
                <img src="/images/Clients_webp/chevron.webp" alt="Chevron" className="h-16 w-auto object-contain" />
                <img src="/images/Clients_webp/Total.webp" alt="Total Energies" className="h-16 w-auto object-contain" />
                <img src="/images/Clients_webp/seepco.webp" alt="SEEPCO" className="h-16 w-auto object-contain" />
                <img src="/images/Clients_webp/seplat.webp" alt="SEPLAT" className="h-16 w-auto object-contain" />
                <img src="/images/Clients_webp/saipem.webp" alt="Saipem" className="h-16 w-auto object-contain" />
                <img src="/images/Clients_webp/Addax.webp" alt="Addax" className="h-16 w-auto object-contain" />
                <img src="/images/Clients_webp/Hydrocarbon.webp" alt="First Hydrocarbon" className="h-16 w-auto object-contain" />
                <img src="/images/Clients_webp/nnpc-18.webp" alt="NNPC 18" className="h-16 w-auto object-contain" />
                <img src="/images/Clients_webp/ewt.webp" alt="EWT Energy Works" className="h-16 w-auto object-contain" />
                {/* Duplicate for infinite scroll */}
                <img src="/images/Clients_webp/nnpc.webp" alt="NNPC" className="h-16 w-auto object-contain" />
                <img src="/images/Clients_webp/chevron.webp" alt="Chevron" className="h-16 w-auto object-contain" />
                <img src="/images/Clients_webp/Total.webp" alt="Total Energies" className="h-16 w-auto object-contain" />
                <img src="/images/Clients_webp/seepco.webp" alt="SEEPCO" className="h-16 w-auto object-contain" />
                <img src="/images/Clients_webp/seplat.webp" alt="SEPLAT" className="h-16 w-auto object-contain" />
                <img src="/images/Clients_webp/saipem.webp" alt="Saipem" className="h-16 w-auto object-contain" />
                <img src="/images/Clients_webp/Addax.webp" alt="Addax" className="h-16 w-auto object-contain" />
                <img src="/images/Clients_webp/Hydrocarbon.webp" alt="First Hydrocarbon" className="h-16 w-auto object-contain" />
                <img src="/images/Clients_webp/nnpc-18.webp" alt="NNPC 18" className="h-16 w-auto object-contain" />
                <img src="/images/Clients_webp/ewt.webp" alt="EWT Energy Works" className="h-16 w-auto object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Home