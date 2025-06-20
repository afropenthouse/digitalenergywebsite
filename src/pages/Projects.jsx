import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Users, Shield, DollarSign, FileText } from "lucide-react"
import { useState, useEffect } from "react"
import Loader from "./Loader/Loader"

const projects = []

const projectList = [
  {
    title: "Maintenance & Inspection Services",
    client: "NPDC",
    description: "Provision of maintaining and inspection, supply of PUP joints and cross over services for NPDC Operated Land and Swamp Assets on a call Basis",
    image: "/images/Projects/Maintenance.png",
    logo: "/images/webp/Npdc.webp"
  },
  {
    title: "Machining & Fabrication Services",
    client: "Seplat",
    description: "Provision of machining and fabrication services for eastern assets",
    image: "/images/Projects/Machining Services.jpg",
    logo: "/images/webp/seplat.webp"
  },
  {
    title: "Tank Farm Upgrade & Maintenance",
    client: "Pivot Integrated Energy",
    description: "Upgrade and maintenance of 40 million liters Tank farm depot in Calabar EPZ",
    image: "/images/Projects/Tank_Farm.jpg",
    logo: "/images/webp/pivot.webp"
  },
  {
    title: "Lagos (Apapa) Tank Farm Maintenance",
    client: "Pivot Integrated Energy",
    description: "Upgrade and maintenance of 30 million Litres Tank Farm depot in Apapa, Lagos",
    image: "/images/Projects/Tank_Farm2.jpg",
    logo: "/images/webp/pivot.webp"
  },
  {
    title: "Modular Refinery Upgrade",
    client: "Fuel Direct LTD",
    description: "Upgrade and maintenance of Duport Midstream 2500B/D Modular Refinery in Ebokpa, Edo State",
    image: "/images/Projects/modular-refinery.jpg",
    logo: "/images/webp/fuel.webp"
  },
  {
    title: "Booster Compressor Tie-in",
    client: "Seplat",
    description: "Booster compressor phase 2 tie-in project",
    image: "/images/Projects/BoosterCompressor.jpg.jpg",
    logo: "/images/webp/seplat.webp"
  },
  {
    title: "Machining Services",
    client: "Litewell Completions Services",
    description: "Provision of Machining services and cutting of BTC PIN X PIN 20 casting pipes - 56 jts - 122 thread connections",
    image: "/images/Projects/Machining Services.jpg",
    logo: "/images/webp/lite.webp"
  },
  {
    title: "Gas Equipment Procurement",
    client: "MidWestern",
    description: "Procurement of Gas pressure regulator 25bar & cartridge Gas & Supply of FLO Choke Valve",
    image: "/images/Projects/Gas.PNG",
    logo: "/images/webp/Midwestern.webp"
  },
  {
    title: "Fabrication & Supply",
    client: "Weatherford",
    description: "Fabrication and Supply of X-overs & 1-Gauge lumpsum service on multi wells pads",
    image: "/images/Projects/FabricationSupply.webp",
    logo: "/images/webp/weatherford.webp"
  },
  {
    title: "Cathodic Transformer Rectifier Maintenance",
    client: "ENAGEED RESOURCES LTD",
    description: "Maintenance and the repair of faulty cathodic transformer rectifier at ENAGEED RESOURCES LTD, April 2025",
    image: "/images/Projects/CathodicTransformer.jpg",
    logo: "/images/webp/Npdc.webp"
  }
]

const projectCategories = [
  { name: "All", count: 10 },
  { name: "Infrastructure", count: 2 },
  { name: "Energy", count: 2 },
  { name: "Manufacturing", count: 2 },
  { name: "Procurement", count: 2 },
  { name: "Maintenance", count: 1 },
  { name: "Fabrication", count: 1 }
]

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [isLoading, setIsLoading] = useState(true)
  const [loadedImages, setLoadedImages] = useState(0)

  useEffect(() => {
    const handleImageLoad = () => {
      setLoadedImages(prev => {
        const newCount = prev + 1
        // Count hero image + project images + project logos
        if (newCount === 1 + (projectList.length * 2)) {
          setIsLoading(false)
        }
        return newCount
      })
    }

    // Preload hero image
    const heroImg = new Image()
    heroImg.src = "/images/webp/Capture.webp"
    heroImg.onload = handleImageLoad

    // Preload project images and logos
    projectList.forEach(project => {
      // Preload project image
      const img = new Image()
      img.src = project.image
      img.onload = handleImageLoad

      // Preload project logo
      const logo = new Image()
      logo.src = project.logo
      logo.onload = handleImageLoad
    })

    return () => {
      setIsLoading(true)
      setLoadedImages(0)
    }
  }, [])

  if (isLoading) {
    return <Loader />
  }

  const filteredProjects = selectedCategory === "All" 
    ? projectList 
    : projectList.filter(project => project.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-[160px]">
      {/* Hero Section */}
			<section className="relative bg-gradient-to-r from-blue-800 to-blue-800 text-white py-20 overflow-hidden">
				<div className="absolute inset-0">
					<img
						src="/images/webp/Capture.webp"
						alt="Projects"
						className="w-full h-full object-cover opacity-40"
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-blue-800/70 to-blue-800/70" />
					<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/45-degree-fabric-light.png')] opacity-10" />
				</div>
				<div className="relative z-10 container mx-auto px-6 max-w-5xl">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1 }}
						className="inline-block bg-blue-800/30 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6"
					>
						<p className="text-sm font-medium">Projects</p>
					</motion.div>
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="text-4xl md:text-5xl font-bold mb-6"
					>
						Premium <span className="text-orange-400">Projects</span>
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}
						className="text-xl text-white max-w-3xl leading-relaxed"
					>
						Strategic alliances with industry leaders for cutting-edge solutions
					</motion.p>
				</div>
			</section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
         
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectList.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <img 
                      src={project.logo} 
                      alt={`${project.client} logo`}
                      className="w-20 h-20 object-contain"
                    />
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
                      <p className="text-sm text-blue-600 font-medium">{project.client}</p>
                    </div>
                  </div>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </div>
  )
}

export default Projects