import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const galleryImages = [
	{
		id: 1,
		src: "/images/p88.png",
		alt: "Power Generation",
		category: "Infrastructure",
	},
	{
		id: 2,
		src: "/images/pic_1.png",
		alt: "Energy Infrastructure",
		category: "Infrastructure",
	},
	{
		id: 3,
		src: "/images/new1.jpg",
		alt: "Energy Systems",
		category: "Technology",
	},
	{
		id: 4,
		src: "/images/pic_2.png",
		alt: "Solar Power Installation",
		category: "Renewable Energy",
	},
	{
		id: 5,
		src: "/images/new4.jpg",
		alt: "Power Distribution",
		category: "Infrastructure",
	},
	{
		id: 6,
		src: "/images/pic_3.png",
		alt: "Customer Service",
		category: "Technology",
	},
	{
		id: 7,
		src: "/images/new7.jpg",
		alt: "Energy Management",
		category: "Technology",
	},
	{
		id: 8,
		src: "/images/pic_4.jpg",
		alt: "Smart Grid Technology",
		category: "Technology",
	},
	{
		id: 9,
		src: "/images/new11.jpg",
		alt: "Power Systems",
		category: "Infrastructure",
	},
	{
		id: 10,
		src: "/images/pic_5.jpg",
		alt: "Energy Distribution",
		category: "Infrastructure",
	},
	{
		id: 11,
		src: "/images/new21.jpg",
		alt: "Smart Grid Operations",
		category: "Technology",
	},
	{
		id: 12,
		src: "/images/pic_6.png",
		alt: "Power Plant",
		category: "Infrastructure",
	},
	{
		id: 13,
		src: "/images/new22.jpg",
		alt: "Energy Solutions",
		category: "Technology",
	},
	{
		id: 14,
		src: "/images/pic_8.png",
		alt: "Energy Storage",
		category: "Technology",
	},
	{
		id: 15,
		src: "/images/new23.jpg",
		alt: "Power Generation",
		category: "Infrastructure",
	},
	{
		id: 16,
		src: "/images/pic_9.png",
		alt: "Smart Metering",
		category: "Technology",
	},
	{
		id: 17,
		src: "/images/new25.jpg",
		alt: "Energy Infrastructure",
		category: "Infrastructure",
	},
	{
		id: 18,
		src: "/images/pic_10.jpg",
		alt: "Grid Modernization",
		category: "Infrastructure",
	},
	{
		id: 19,
		src: "/images/new26.jpg",
		alt: "Control Systems",
		category: "Technology",
	},
	{
		id: 20,
		src: "/images/pic_11.png",
		alt: "Smart Grid Operations",
		category: "Technology",
	},
	{
		id: 21,
		src: "/images/new27.jpg",
		alt: "Power Distribution",
		category: "Infrastructure",
	},
	{
		id: 22,
		src: "/images/pic_12.jpg",
		alt: "Renewable Energy Plant",
		category: "Renewable Energy",
	},
	{
		id: 23,
		src: "/images/new28.jpg",
		alt: "Modern Office Space",
		category: "Technology",
	},
	{
		id: 24,
		src: "/images/pic_14.png",
		alt: "Energy Distribution Network",
		category: "Infrastructure",
	},
	{
		id: 25,
		src: "/images/new29.jpg",
		alt: "Modern Office Space",
		category: "Technology",
	},
	{
		id: 26,
		src: "/images/new30.jpg",
		alt: "Power Systems",
		category: "Infrastructure",
	},
	{
		id: 27,
		src: "/images/p1.jpg",
		alt: "Industrial Facility",
		category: "Infrastructure",
	},
	{
		id: 28,
		src: "/images/new31.jpg",
		alt: "Modern Office Space",
		category: "Technology",
	},
	{
		id: 29,
		src: "/images/p2.jpg",
		alt: "Energy Control Center",
		category: "Technology",
	},
	{
		id: 30,
		src: "/images/new32.jpg",
		alt: "Power Distribution",
		category: "Infrastructure",
	},
	{
		id: 31,
		src: "/images/p3.png",
		alt: "Power Distribution",
		category: "Infrastructure",
	},
	{
		id: 32,
		src: "/images/new33.jpg",
		alt: "Energy Management",
		category: "Technology",
	},
	{
		id: 33,
		src: "/images/p4.jpg",
		alt: "Energy Management",
		category: "Technology",
	},
	{
		id: 34,
		src: "/images/new34.jpg",
		alt: "Power Systems",
		category: "Infrastructure",
	},
	{
		id: 35,
		src: "/images/p5.jpg",
		alt: "Power Systems",
		category: "Infrastructure",
	},
	{
		id: 36,
		src: "/images/new35.jpg",
		alt: "Power Systems",
		category: "Technology",
	},
	{
		id: 38,
		src: "/images/new44.jpg",
		alt: "Energy Infrastructure",
		category: "Infrastructure",
	},
	{
		id: 39,
		src: "/images/p7.jpg",
		alt: "Energy Infrastructure",
		category: "Infrastructure",
	},
	{
		id: 41,
		src: "/images/p9.jpg",
		alt: "Energy Control Systems",
		category: "Technology",
	},
	{
		id: 42,
		src: "/images/p10.jpg",
		alt: "Power Distribution Network",
		category: "Infrastructure",
	},
	{
		id: 43,
		src: "/images/p77.jpg",
		alt: "Energy Management Systems",
		category: "Technology",
	},
	{
		id: 44,
		src: "/images/u3.jpg",
		alt: "Energy Solutions",
		category: "Technology",
	},
	{
		id: 45,
		src: "/images/pic_14.jpg",
		alt: "Energy Network",
		category: "Infrastructure",
	},
	{
		id: 47,
		src: "/images/pic_2.jpg",
		alt: "Renewable Energy",
		category: "Renewable Energy",
	},
]

const categories = [
	{ id: "all", name: "All" },
	{ id: "infrastructure", name: "Infrastructure" },
	{ id: "renewable", name: "Renewable Energy" },
	{ id: "technology", name: "Technology" },
]

const EventGallery = () => {
	const [selectedImage, setSelectedImage] = useState(null)

	
	return (
		<div className="pt-20 bg-gradient-to-b from-gray-50 to-white">
			<div className="container mx-auto px-4 md:px-6 py-8">
				<div className="space-y-12">
					{/* Enhanced Hero Section */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className="relative bg-gradient-to-r from-blue-800 to-blue-900 text-white py-16 md:py-24 rounded-2xl overflow-hidden"
					>
						<div className="absolute inset-0">
							<img
								src="/images/pic_14.png"
								alt="Photo Gallery"
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
								<p className="text-sm font-medium">Our Gallery</p>
							</motion.div>
							<motion.h2
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.2 }}
								className="text-4xl md:text-5xl font-bold mb-6"
							>
								Capturing{" "}
								<span className="text-orange-400">Energy Excellence</span>
							</motion.h2>
							<motion.p
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.3 }}
								className="text-xl text-blue-100 max-w-3xl leading-relaxed"
							>
								Explore our collection of images showcasing our projects,
								infrastructure, and commitment to energy innovation.
							</motion.p>
						</div>
					</motion.div>

					{/* Category Filter */}
					<div className="flex flex-wrap justify-center gap-4">
						{categories.map((category) => (
							<motion.button
								key={category.id}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="px-6 py-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 text-gray-700 hover:text-blue-600"
							>
								{category.name}
							</motion.button>
						))}
					</div>

					{/* Gallery Grid */}
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
						{galleryImages.map((image, index) => (
							<motion.div
								key={image.id}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="group relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
							>
								<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
								<img
									src={image.src}
									alt={image.alt}
									className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
									onClick={() => setSelectedImage(image)}
								/>
								<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
									
								</div>
								<div className="absolute bottom-0 left-0 right-0 p-3 z-20">
									<h3 className="text-white text-sm font-medium truncate">
										{image.alt}
									</h3>
								</div>
							</motion.div>
						))}
					</div>

					{/* Enhanced Lightbox */}
					<AnimatePresence>
						{selectedImage && (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
							>
								<motion.div
									initial={{ scale: 0.9, opacity: 0 }}
									animate={{ scale: 1, opacity: 1 }}
									exit={{ scale: 0.9, opacity: 0 }}
									className="relative max-w-[90vw] max-h-[90vh] w-auto h-auto"
									onClick={(e) => e.stopPropagation()}
								>
									{/* Close button */}
									<button
										className="absolute -top-12 right-0 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white z-50"
										>
										<X className="w-8 h-8" />
									</button>

									<img
										src={selectedImage.src}
										alt={selectedImage.alt}
										className="w-auto h-auto max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
									/>
									<div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm p-4 rounded-lg">
										<h3 className="text-white font-medium">
											{selectedImage.alt}
										</h3>
									</div>
								</motion.div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</div>
	)
}

export default EventGallery
