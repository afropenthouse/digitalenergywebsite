import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Users, Shield, DollarSign, FileText } from "lucide-react"

const projects = []

const projectList = [
  {
    title: "Maintenance & Inspection Services",
    client: "NPDC",
    description: "Provision of maintaining and inspection, supply of PUP joints and cross over services for NPDC Operated Land and Swamp Assets on a call Basis",
    image: "/images/p2.jpg",
    logo: "/images/Npdc.png"
  },
  {
    title: "Machining & Fabrication Services",
    client: "Seplat",
    description: "Provision of machining and fabrication services for eastern assets",
    image: "/images/pic_2.png",
    logo: "/images/seplat.jpg"
  },
  {
    title: "Tank Farm Upgrade & Maintenance",
    client: "Pivot Integrated Energy",
    description: "Upgrade and maintenance of 40 million liters tank farm depot in Calabar EPZ",
    image: "/images/pic_12.jpg",
    logo: "/images/pivot.jpeg"
  },
  {
    title: "Lagos Tank Farm Maintenance",
    client: "Pivot Integrated Energy",
    description: "Upgrade and maintenance of 30 million litres tank farm depot in Apapa, Lagos",
    image: "/images/pic_10.jpg",
    logo: "/images/pivot.jpeg"
  },
  {
    title: "Modular Refinery Upgrade",
    client: "Fuel Direct LTD",
    description: "Upgrade and maintenance of Duport Midstream 2500B/D Modular Refinery in Ebokpa, Edo State",
    image: "/images/pic_9.png",
    logo: "/images/fuel.png"
  },
  {
    title: "Booster Compressor Tie-in",
    client: "Seplat",
    description: "Booster compressor phase 2 tie-in project",
    image: "/images/pic_11.png",
    logo: "/images/seplat.jpg"
  },
  {
    title: "Machining Services",
    client: "Litewell Completions Services",
    description: "Provision of Machining services and cutting of BTC PIN X PIN 20 casting pipes - 56 jts - 122 thread connections",
    image: "/images/pic_6.png",
    logo: "/images/lite.jpeg"
  },
  {
    title: "Gas Equipment Procurement",
    client: "MidWestern",
    description: "Procurement of Gas pressure regulator 25bar & cartridge Gas & Supply of FLO Choke Valve",
    image: "/images/Capture.PNG",
    logo: "/images/Midwestern.png"
  },
  {
    title: "Fabrication & Supply",
    client: "Weatherford",
    description: "Fabrication and Supply of X-overs & 1-Gauge lumpsum service on multi wells pads",
    image: "/images/p9.jpg",
    logo: "/images/weatherford.jpg"
  },
  {
    title: "PUP Joints Procurement",
    client: "Avaiam Offshore",
    description: "Procurement of PUP Joints for offshore operations",
    image: "/images/pic_3.png",
    logo: "/images/aviam.jpeg"
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

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  
  const filteredProjects = selectedCategory === "All" 
    ? projectList 
    : projectList.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-20">
      {/* Hero Section */}
			<section className="relative bg-gradient-to-r from-blue-800 to-blue-900 text-white py-20 overflow-hidden">
				<div className="absolute inset-0">
					<img
						src="/images/Capture.PNG"
						alt="Projects"
						className="w-full h-full object-cover opacity-40"
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-800/70" />
					<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/45-degree-fabric-light.png')] opacity-10" />
				</div>
				<div className="relative z-10 container mx-auto px-6 max-w-5xl">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1 }}
						className="inline-block bg-blue-700/30 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6"
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
						className="text-xl text-blue-100 max-w-3xl leading-relaxed"
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