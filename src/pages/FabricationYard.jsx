import { motion } from "framer-motion"
import { Card, CardContent } from "../components/ui/card"
import { CheckCircle } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Loader from "./Loader/Loader"

const galleryItems = [
  { title: "CNCs & Lathes Machines", images: ["/Fabrication_images/machine.webp"] },
  { title: "Blasting & Painting Shop with 10T Overhead crane", images: ["/Fabrication_images/blasting.jpg"] },
  { title: "Fabrication Shop", images: ["/Fabrication_images/fab1.webp", "/Fabrication_images/fab2.webp", "/Fabrication_images/fab3.webp", "/Fabrication_images/fab4.webp"] },
  { title: "Forklift", images: ["/Fabrication_images/forklift.jpg"] },
  { title: "Lathe Machines", images: ["/Fabrication_images/lathe1.jpg", "/Fabrication_images/lathe2.jpg", "/Fabrication_images/lathe3.jpg", "/Fabrication_images/lathe4.jpg"] },
  { title: "Machine Shop", images: ["/Fabrication_images/shop1.jpg", "/Fabrication_images/shop2.jpg", "/Fabrication_images/shop4.jpg", "/Fabrication_images/shop5.jpg"] },
  { title: "Redial Drilling Machines", images: ["/Fabrication_images/drilling.jpeg"] },
  { title: "Dilling Casing Pipes (OCTG)", images: ["/Fabrication_images/pipes.jpg"] },
  { title: "Bucking machine", images: ["/Fabrication_images/Bucking.jpg"] },
  { title: "Band saw", images: ["/Fabrication_images/Band.jpg"] },
  { title: "Workshop with 20T overhead Crane", images: ["/Fabrication_images/crane.jpg"] },
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

    heroImg.src = "/Fabrication_images/cap.webp"
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
          <img src="/Fabrication_images/cap.webp" alt="Fabrication Yard" className="w-full h-full object-cover opacity-40" />
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "High-capacity fabrication bays with overhead cranes and heavy-duty lifting equipment",
              "Certified welders and QA/QC professionals trained to international standards",
              "Dedicated blasting and painting areas for corrosion protection and coating works",
              "Integrated testing and inspection zone for NDT, hydrotesting, and dimensional checks",
              "Strict adherence to QHSE and Nigerian Content regulations",
            ].map((item, idx) => (
              <motion.div key={idx} variants={listItem} custom={idx} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="flex items-start space-x-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="mt-1 w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                </div>
                <p className="text-gray-700 text-sm md:text-base">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-6 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="text-gray-700 text-base">
            Every structure fabricated at our yard reflects our commitment to innovation, workmanship, and safety excellence. The accompanying images showcase our facility, equipment, and team in action — bringing engineering designs to life.
          </motion.p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-10 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-7xl">
          <motion.h3 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="text-3xl font-bold text-gray-900 mb-8 text-center">Facility Gallery</motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <motion.div key={index} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
                <Card className="h-full border-0 rounded-2xl overflow-hidden shadow-lg bg-white">
                  <CardContent className="p-0">
                    <div className="px-5 pt-5">
                      <h4 className="font-semibold text-gray-900 text-lg">{item.title}</h4>
                    </div>
                    <div className={`p-5 ${item.images.length > 1 ? "grid grid-cols-2 gap-3" : ""}`}>
                      {item.images.map((src, i) => (
                        <motion.img key={i} src={src} alt={`${item.title} ${i + 1}`} loading="lazy" decoding="async" whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }} className={item.images.length > 1 ? "w-full h-40 object-cover rounded-lg" : "w-full h-64 object-cover rounded-xl"} />
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