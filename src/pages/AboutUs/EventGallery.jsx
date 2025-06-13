import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const galleryImages = [
	{
		id: 1,
		src: "/images/p88.png",
		alt: "Power Generation",
	},
	{
		id: 2,
		src: "/images/new1.jpg",
		alt: "Energy Systems",
	},
	{
		id: 3,
		src: "/images/pic_2.png",
		alt: "Solar Power Installation",
	},
	{
		id: 4,
		src: "/images/new4.jpg",
		alt: "Power Distribution",
	},
	{
		id: 5,
		src: "/images/pic_3.png",
		alt: "Customer Service",
	},
	{
		id: 6,
		src: "/images/new7.jpg",
		alt: "Energy Management",
	},
	{
		id: 7,
		src: "/images/pic_4.jpg",
		alt: "Smart Grid Technology",
	},
	{
		id: 8,
		src: "/images/new11.jpg",
		alt: "Power Systems",
	},
	{
		id: 9,
		src: "/images/pic_5.jpg",
		alt: "Energy Distribution",
	},
	{
		id: 10,
		src: "/images/new21.jpg",
		alt: "Smart Grid Operations",
	},
	{
		id: 11,
		src: "/images/pic_6.png",
		alt: "Power Plant",
	},
	{
		id: 12,
		src: "/images/new22.jpg",
		alt: "Energy Solutions",
	},
	{
		id: 13,
		src: "/images/pic_8.png",
		alt: "Energy Storage",
	},
	{
		id: 14,
		src: "/images/new23.jpg",
		alt: "Power Generation",
	},
	{
		id: 15,
		src: "/images/pic_9.png",
		alt: "Smart Metering",
	},
	{
		id: 16,
		src: "/images/new25.jpg",
		alt: "Energy Infrastructure",
	},
	{
		id: 17,
		src: "/images/pic_10.jpg",
		alt: "Grid Modernization",
	},
	{
		id: 18,
		src: "/images/new26.jpg",
		alt: "Control Systems",
	},
	{
		id: 19,
		src: "/images/pic_11.png",
		alt: "Smart Grid Operations",
	},
	{
		id: 20,
		src: "/images/new27.jpg",
		alt: "Power Distribution",
	},
	{
		id: 21,
		src: "/images/pic_12.jpg",
		alt: "Renewable Energy Plant",
	},
	{
		id: 22,
		src: "/images/new28.jpg",
		alt: "Modern Office Space",
	},
	{
		id: 23,
		src: "/images/pic_14.png",
		alt: "Energy Distribution Network",
	},
	{
		id: 24,
		src: "/images/new29.jpg",
		alt: "Modern Office Space",
	},
	{
		id: 25,
		src: "/images/new30.jpg",
		alt: "Power Systems",
	},
	{
		id: 26,
		src: "/images/p1.jpg",
		alt: "Industrial Facility",
	},
	{
		id: 27,
		src: "/images/new31.jpg",
		alt: "Modern Office Space",
	},
	{
		id: 28,
		src: "/images/p2.jpg",
		alt: "Energy Control Center",
	},
	{
		id: 29,
		src: "/images/new32.jpg",
		alt: "Power Distribution",
	},
	{
		id: 30,
		src: "/images/p3.png",
		alt: "Power Distribution",
	},
	{
		id: 31,
		src: "/images/new33.jpg",
		alt: "Energy Management",
	},
	{
		id: 32,
		src: "/images/p4.jpg",
		alt: "Energy Management",
	},
	{
		id: 33,
		src: "/images/new34.jpg",
		alt: "Power Systems",
	},
	{
		id: 34,
		src: "/images/p5.jpg",
		alt: "Power Systems",
	},
	{
		id: 35,
		src: "/images/new35.jpg",
		alt: "Power Systems",
	},
	{
		id: 36,
		src: "/images/new44.jpg",
		alt: "Energy Infrastructure",
	},
	{
		id: 37,
		src: "/images/p7.jpg",
		alt: "Energy Infrastructure",
	},
	{
		id: 38,
		src: "/images/p9.jpg",
		alt: "Energy Control Systems",
	},
	{
		id: 39,
		src: "/images/p10.jpg",
		alt: "Power Distribution Network",
	},
	{
		id: 40,
		src: "/images/p77.jpg",
		alt: "Energy Management Systems",
	},
	{
		id: 41,
		src: "/images/u3.jpg",
		alt: "Energy Solutions",
	},
	{
		id: 42,
		src: "/images/pic_14.jpg",
		alt: "Energy Network",
	},
	{
		id: 43,
		src: "/images/pic_2.jpg",
		alt: "Renewable Energy",
	},
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
