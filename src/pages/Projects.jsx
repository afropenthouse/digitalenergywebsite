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
		src: "/images/project1.jpg",
		alt: "Project Execution - Site Work",
		title: "Site Construction",
		description: "Large-scale EPCIC project execution with focus on safety and quality",
	},
	{
		src: "/images/project2.jpg",
		alt: "Project Execution - Equipment Installation",
		title: "Equipment Installation",
		description: "Precision installation of critical equipment with quality control",
	},
	{
		src: "/images/project3.jpg",
		alt: "Project Execution - Team Coordination",
		title: "Team Coordination",
		description: "Efficient project team coordination and management",
	},
]

export default function Projects() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
			{/* Hero Section */}
			<section className="relative bg-gradient-to-r from-blue-800 to-blue-900 text-white py-20 overflow-hidden">
				<div className="absolute inset-0">
					<img
						src="/images/pic_2.png"
						alt="Services"
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
						<p className="text-sm font-medium">Our Projects</p>
					</motion.div>
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="text-4xl md:text-5xl font-bold mb-6"
					>
						Featured <span className="text-orange-400">Projects</span>
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}
						className="text-xl text-blue-100 max-w-3xl leading-relaxed"
					>
						Showcasing our expertise through successful project deliveries across Nigeria's energy sector
					</motion.p>
				</div>
			</section>

			{/* Projects Grid */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
						{projects.map((project, index) => (
							<motion.div
								key={project.id}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="h-full"
							>
								<Card className="h-full overflow-hidden group hover:shadow-xl transition-all duration-300 border border-gray-200">
									<div className="relative h-60 overflow-hidden">
										<img
											src={project.image || "/placeholder.svg"}
											alt={project.title}
											className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
										/>
										<div className="absolute top-4 left-4">
											<span className="px-3 py-1 bg-blue-700 text-white text-sm rounded-full">
												{project.category}
											</span>
										</div>
										<div className="absolute top-4 right-4">
											<span
												className={`px-3 py-1 text-white text-sm rounded-full ${
													project.status === "Completed" ? "bg-green-600" : "bg-blue-500"
												}`}
											>
												{project.status}
											</span>
										</div>
										<div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
											<h3 className="text-xl font-bold text-white">{project.title}</h3>
										</div>
									</div>

									<CardContent className="p-6">
										<p className="text-gray-600 mb-4">{project.description}</p>

										<div className="space-y-3 border-t border-gray-100 pt-4">
											<div className="flex items-center text-gray-600">
												<MapPin className="h-4 w-4 mr-2 text-blue-600" />
												<span>{project.location}</span>
											</div>
											<div className="flex items-center text-gray-600">
												<Calendar className="h-4 w-4 mr-2 text-blue-600" />
												<span>{project.duration}</span>
											</div>
											<div className="flex items-center text-gray-600">
												<Users className="h-4 w-4 mr-2 text-blue-600" />
												<span>{project.team}</span>
											</div>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Project Management Section */}
			<section className="py-12 bg-gradient-to-b from-gray-50 to-white -mt-44">
				<div className="container mx-auto px-4 md:px-6 py-8">
					<div className="space-y-16">
						{/* Overview Section */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="bg-white rounded-2xl p-8 shadow-lg mb-8 border border-gray-100"
						>
							<h3 className="text-2xl font-bold text-gray-900 mb-6">Project Management</h3>
							<div className="space-y-6 text-gray-700">
								<p className="leading-relaxed">
									Project Management teams deliver large and complex EPCIC projects meeting world-class HSE, quality and schedule requirements. Procurement teams ensure certainty and cost competitiveness of supplies through world-wide network of suppliers, efficient expediting and detailed planning.
								</p>
							</div>
						</motion.div>

						{/* Project Functions Grid */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="bg-white rounded-2xl p-8 shadow-lg mb-8 border border-gray-100"
						>
							<h3 className="text-2xl font-bold text-gray-900 mb-6">Project Execution Functions</h3>
							<div className="grid md:grid-cols-2 gap-8">
								{projectFunctions.map((func, index) => (
									<motion.div
										key={index}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
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

						{/* Project Images Section */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
						>
							<h3 className="text-2xl font-bold text-gray-900 mb-6">Project Execution Highlights</h3>
							<div className="grid md:grid-cols-3 gap-8">
								{projectImages.map((image, index) => (
									<motion.div
										key={index}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
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

			{/* Ready to Start Your Project Section */}
			<section className="py-20 bg-gradient-to-r from-blue-50 to-white">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="text-center max-w-3xl mx-auto"
					>
						<h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Start Your Project?</h2>
						<p className="text-gray-600 mb-8 max-w-xl mx-auto">
							Let us bring our expertise to your next energy project
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button
								asChild
								className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-blue-700/20 transition-all"
							>
								<a href="/contact/quote">Request a Quote</a>
							</Button>
							<Button
								asChild
								variant="outline"
								className="border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-8 py-4 rounded-lg transition-colors bg-white/50 backdrop-blur-sm"
							>
								<a href="/contact">Contact Us</a>
							</Button>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	)
}