import { motion } from "framer-motion"
import { Card, CardContent } from "../components/ui/card"
import { CheckCircle } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Loader from "./Loader/Loader"

const galleryItems = [
  { title: "Aerial View of Our Facility", images: ["/images/Workshop/facility.jpeg"] },
  { title: "CNCs & Lathes Machines", subtitle: "Machine shop", images: ["/images/Workshop/mac1.jpeg", "/images/Workshop/mac2.jpeg", "/images/Workshop/mac3.jpeg", "/images/Workshop/mac4.jpeg", "/images/Workshop/mac5.jpeg", "/images/Workshop/mac6.jpeg", "/images/Workshop/mac7.jpeg", "/images/Workshop/mac8.jpeg"], cols: 4 },
  { title: "Forklift", images: ["/images/Workshop/fork1.jpeg", "/images/Workshop/fork2.jpeg"], cols: 1 },
  { title: "Fabrication Shop", images: ["/images/Workshop/fab11.jpeg", "/images/Workshop/fab22.jpeg", "/images/Workshop/fab33.jpeg", "/images/Workshop/fab44.jpeg", "/images/Workshop/fab1.webp", "/images/Workshop/fab4.webp"], cols: 3 },
  { title: "Blasting Pot", images: ["/images/Workshop/pot.jpeg"] },
  { title: "Blasting & Painting Shop with 10T Overhead crane", images: ["/images/Workshop/work1.jpeg", "/images/Workshop/work2.jpeg", "/images/Workshop/work3.jpeg", "/images/Workshop/blasting2.jpeg", "/images/Workshop/blasting3.jpeg", "/images/Workshop/blasting4.jpeg"], cols: 3 },
  { title: "Radial Drilling Machines", images: ["/images/Workshop/drilling.jpeg", "/images/Workshop/drill1.jpeg", "/images/Workshop/drill2.jpeg"], cols: 1 },
  { title: "Drilling Casing Pipes (OCTG)", images: ["/images/Workshop/pipes.jpg", "/images/Workshop/dilling1.jpeg", "/images/Workshop/dilling2.jpeg"], cols: 1 },
  { title: "Bucking machine", images: ["/images/Workshop/buk3.jpeg", "/images/Workshop/buk1.jpeg", "/images/Workshop/buk2.jpeg", "/images/Workshop/buk4.jpeg"], cols: 2, tight: true },
  { title: "Band saw", images: ["/images/Workshop/band.jpeg"] },
  { title: "Air compressor", images: ["/images/Workshop/air2.jpeg", "/images/Workshop/air1.jpeg", "/images/Workshop/air.jpeg"], cols: 2 },
  { title: "Air tank", images: ["/images/Workshop/tank.jpeg"] },
  { title: "Phosphate Chemical Analysis", images: ["/images/Workshop/phos.jpeg"] },
  { title: "Manganese Phosphate Bath", images: ["/images/Workshop/bath.jpeg"] },
  { title: "SPINDLE BORE SIZE 2-3/8'' TO 11''", subtitle: "MANUAL LATHE MACHINE", images: ["/images/Workshop/manual1.jpg"] },
  { title: "SPINDLE BORE SIZE: 2-3/8'' TO 15''", subtitle: "MANUAL LATHE MACHINE", images: ["/images/Workshop/lathe.jpg"] },
  { title: "SPINDLE BORE SIZE: 2-3/8'' TO 11''", subtitle: "FANUC CONTROL CNC MACHINE", images: ["/images/Workshop/fanuc.jpg"] },
  { title: "SPINDLE BORE SIZE: 2-3/8'' TO 15''", subtitle: "FANUC CONTROL CNC MACHINE", images: ["/images/Workshop/control.jpg"] },
]

function FabricationYard() {
  const [isLoading, setIsLoading] = useState(true)
  const timeoutRef = useRef()

  useEffect(() => {
    const heroImg = new Image()
    let heroLoaded = false

    const onHeroLoad = () => {
      heroLoaded = true
      clearTimeout(timeoutRef.current)
      setIsLoading(false)
    }

    heroImg.src = "/images/Workshop/fab.jpeg"
    heroImg.onload = onHeroLoad
    heroImg.onerror = () => {
      clearTimeout(timeoutRef.current)
      setIsLoading(false)
    }

    timeoutRef.current = setTimeout(() => {
      if (!heroLoaded) setIsLoading(false)
    }, 900)

    return () => clearTimeout(timeoutRef.current)
  }, [])

  if (isLoading) return <Loader />

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-[220px]">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-blue-800 to-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/Workshop/fab.jpeg" alt="Fabrication Yard" className="w-full h-full object-contain opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-800/70" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/45-degree-fabric-light.png')] opacity-10" />
        </div>
        <div className="relative z-10 container mx-auto px-6 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="inline-block bg-blue-700/30 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6">
            <p className="text-sm font-medium">Workshop</p>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-4xl md:text-5xl font-bold mb-6">
             Workshop & Fabrication Yard
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-xl text-blue-100 max-w-3xl leading-relaxed">
            State-of-the-art yard supporting EPCIC, precision, efficiency, safety across onshore and offshore fabrication.
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 px-4 bg-gradient-to-b from-gray-50 to-white">
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="container mx-auto max-w-5xl space-y-6 text-gray-800">
          <motion.p variants={fadeUp} className="text-lg">
            At Digital Energy, our state-of-the-art Fabrication Yard and Workshop serve as the backbone of our Engineering, Procurement, Construction, Installation and Commissioning (EPCIC) capabilities. Strategically located and equipped to handle a wide range of onshore and offshore fabrication projects, our facility is designed for precision, efficiency, and safety.
          </motion.p>
          <motion.p variants={fadeUp} className="text-lg">
            Our workshop is equipped with modern tools, cranes, and handling systems that allow us to execute complex structural, piping, and mechanical fabrications with exceptional quality control. From pressure vessels and process skids to structural steel works and well-test packages, we deliver fabrication solutions that meet ASME, API, and ISO standards.
          </motion.p>
        </motion.div>
      </section>

      {/* Highlights */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.h3 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="text-3xl font-bold text-gray-900 mb-6 text-center">Key Highlights</motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
            {[
              "High-capacity fabrication bays with overhead cranes and heavy-duty lifting equipment",
              "Certified welders and QA/QC professionals trained to international standards",
              "Dedicated blasting and painting areas for corrosion protection and coating works",
              "Integrated testing and inspection zone for NDT, hydrotesting, and dimensional checks",
              "Strict adherence to QHSE and Nigerian Content regulations",
            ].map((item, idx) => (
              <motion.div key={idx} variants={listItem} custom={idx} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="aspect-square bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold mb-3">
                  {idx + 1}
                </div>
                <p className="text-gray-700 text-xs sm:text-sm">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-6 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="text-gray-700 text-base">
            Every structure fabricated at our yard reflects our commitment to innovation, workmanship, and safety excellence. The accompanying images showcase our facility, equipment, and team in action - bringing engineering designs to life.
          </motion.p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-10 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-7xl">
          <motion.h3 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="text-3xl font-bold text-gray-900 mb-8 text-center">Facility Gallery</motion.h3>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {galleryItems.map((item, index) => (
               <motion.div key={index} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }} className={(item.cols === 4 || item.cols === 3) ? "md:col-span-2 lg:col-span-2" : ""}>
                   <Card className="h-full border-0 rounded-2xl overflow-hidden shadow-lg bg-white flex flex-col">
                     <CardContent className="p-0 flex flex-col h-full">
                       <div className="px-5 pt-5 text-center flex-shrink-0">
                         {item.subtitle ? (<><h4 className="font-bold text-gray-900 text-xl mb-1">{item.subtitle}</h4><p className="text-sm text-gray-500">{item.title}</p></>) :                       <h4 className="font-bold text-gray-900 text-lg">{item.title}</h4>}
                       </div>
                        <div className={`${item.tight ? "p-0" : "p-5"} flex-1 ${item.images.length > 1 ? (item.cols === 4 ? "grid grid-cols-4 gap-3" : item.cols === 3 ? "grid grid-cols-3 gap-3" : item.cols === 2 && item.tight ? "grid grid-cols-3 gap-2" : item.cols === 2 ? "grid grid-cols-2 gap-2" : "grid grid-cols-1 gap-1") : ""}`}>
                          {item.images.map((src, i) => (
                            item.tight && i === 0 ? (
                              <motion.img key={i} src={src} alt={`${item.title} ${i + 1}`} loading="lazy" decoding="async" whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }} className="col-span-3 w-full h-auto object-contain rounded-none" />
                            ) : item.cols === 2 && i >= 1 && item.tight ? (
                              <motion.img key={i} src={src} alt={`${item.title} ${i + 1}`} loading="lazy" decoding="async" whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }} className="w-full h-40 object-cover rounded-none" />
                            ) : (
                              <motion.img key={i} src={src} alt={`${item.title} ${i + 1}`} loading="lazy" decoding="async" whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }} className={item.images.length > 1 ? "w-full h-40 object-cover rounded-lg" : "w-full h-full object-cover rounded-xl"} />
                            )
                          ))}
                      </div>
                    </CardContent>
                  </Card>
               </motion.div>
             ))}
           </div>
        </div>
      </section>
    </div>
  )
}

export default FabricationYard

// subtle animation variants (kept gentle)
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }
const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1 } }
const listItem = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.4 } })
}