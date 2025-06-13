import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Users, Shield, DollarSign, FileText } from "lucide-react"

const projects = []

const projectFunctions = [
	{
		icon: Calendar,
		title: "Planning and Scheduling",
		description: "Comprehensive project planning and scheduling to ensure timely delivery of all project milestones.",
	},
	{
		icon: Shield,
		title: "Quality & Safety Control",
		description: "Rigorous quality and safety protocols to maintain world-class HSE standards throughout project execution.",
	},
	{
		icon: DollarSign,
		title: "Budget/Cost Control",
		description: "Strategic cost management and budget control to ensure project financial objectives are met.",
	},
	{
		icon: FileText,
		title: "Contract Administration",
		description: "Efficient contract management and administration to ensure compliance and smooth project execution.",
	},
]

const projectImages = [
	{
		src: "/images/pic_2.png",
		alt: "Project Execution - Site Work",
		title: "Site Construction",
		description: "Large-scale EPCIC project execution with focus on safety and quality",
	},
	{
		src: "/images/p77.jpg",
		alt: "Project Execution - Equipment Installation",
		title: "Equipment Installation",
		description: "Precision installation of critical equipment with quality control",
	},
	{
		src: "/images/pic_12.jpg",
		alt: "Project Execution - Team Coordination",
		title: "Team Coordination",
		description: "Efficient project team coordination and management",
	},
]

export default function Projects() {
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

			{/* Project Management Section */}
			<section className="py-12 bg-gradient-to-b from-gray-50 to-white">
				<div className="container mx-auto px-4 md:px-6 py-8">
					<div className="space-y-16">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
						>
							<h3 className="text-2xl font-bold text-gray-900 mb-6">Project Management</h3>
							<p className="text-gray-700 leading-relaxed">
								Project Management teams deliver large and complex EPCIC projects meeting world-class HSE, quality and schedule requirements. Procurement teams ensure certainty and cost competitiveness of supplies through world-wide network of suppliers, efficient expediting and detailed planning.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
						>
							<h3 className="text-2xl font-bold text-gray-900 mb-6">Project Execution Functions</h3>
							<div className="grid md:grid-cols-2 gap-8">
								{projectFunctions.map((func, index) => (
									<motion.div
										key={index}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: index * 0.1 }}
										className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
									>
										<div className="flex items-center space-x-3 mb-4">
											<div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
												<func.icon className="w-6 h-6 text-blue-600" />
											</div>
											<h4 className="text-lg font-semibold text-gray-900">{func.title}</h4>
										</div>
										<p className="text-gray-700">{func.description}</p>
									</motion.div>
								))}
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
						>
							<h3 className="text-2xl font-bold text-gray-900 mb-6">Project Execution Highlights</h3>
							<div className="grid md:grid-cols-3 gap-8">
								{projectImages.map((image, index) => (
									<motion.div
										key={index}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: index * 0.1 }}
										className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
									>
										<div className="relative h-48">
											<img
												src={image.src}
												alt={image.alt}
												className="w-full h-full object-cover"
											/>
										</div>
										<div className="p-4">
											<h4 className="text-lg font-semibold text-gray-900 mb-2">{image.title}</h4>
											<p className="text-gray-700">{image.description}</p>
										</div>
									</motion.div>
								))}
							</div>
						</motion.div>
					</div>
				</div>
			</section>
		</div>
	)
}