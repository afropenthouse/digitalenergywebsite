import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const galleryImages = [
	{
		id: 1,
		src: "/images/Gallery_pics_webp/gallery_1.webp",
		alt: "Power Generation",
		width: 800,
		height: 600,
	},
	{
		id: 2,
		src: "/images/Gallery_pics_webp/gallery_2.webp",
		alt: "Energy Systems",
		width: 800,
		height: 600,
	},
	{
		id: 3,
		src: "/images/Gallery_pics_webp/gallery_3.webp",
		alt: "Solar Power Installation",
		width: 800,
		height: 600,
	},
	{
		id: 4,
		src: "/images/Gallery_pics_webp/gallery_4.webp",
		alt: "Power Distribution",
		width: 800,
		height: 600,
	},
	{
		id: 5,
		src: "/images/Gallery_pics_webp/gallery_5.webp",
		alt: "Customer Service",
		width: 800,
		height: 600,
	},
	{
		id: 6,
		src: "/images/Gallery_pics_webp/gallery_6.webp",
		alt: "Energy Management",
		width: 800,
		height: 600,
	},
	{
		id: 7,
		src: "/images/Gallery_pics_webp/gallery_7.webp",
		alt: "Smart Grid Technology",
		width: 800,
		height: 600,
	},
	{
		id: 8,
		src: "/images/Gallery_pics_webp/gallery_8.webp",
		alt: "Power Systems",
		width: 800,
		height: 600,
	},
	{
		id: 9,
		src: "/images/Gallery_pics_webp/gallery_9.webp",
		alt: "Energy Distribution",
		width: 800,
		height: 600,
	},
	{
		id: 10,
		src: "/images/Gallery_pics_webp/gallery_10.webp",
		alt: "Smart Grid Operations",
		width: 800,
		height: 600,
	},
	{
		id: 11,
		src: "/images/Gallery_pics_webp/gallery_11.webp",
		alt: "Power Plant",
		width: 800,
		height: 600,
	},
	{
		id: 12,
		src: "/images/Gallery_pics_webp/gallery_12.webp",
		alt: "Energy Solutions",
		width: 800,
		height: 600,
	},
	{
		id: 13,
		src: "/images/Gallery_pics_webp/gallery_13.webp",
		alt: "Energy Storage",
		width: 800,
		height: 600,
	},
	{
		id: 14,
		src: "/images/Gallery_pics_webp/gallery_14.webp",
		alt: "Power Generation",
		width: 800,
		height: 600,
	},
	{
		id: 15,
		src: "/images/Gallery_pics_webp/gallery_15.webp",
		alt: "Smart Metering",
		width: 800,
		height: 600,
	},
	{
		id: 16,
		src: "/images/Gallery_pics_webp/gallery_16.webp",
		alt: "Energy Infrastructure",
		width: 800,
		height: 600,
	},
	{
		id: 17,
		src: "/images/Gallery_pics_webp/gallery_17.webp",
		alt: "Grid Modernization",
		width: 800,
		height: 600,
	},
	{
		id: 18,
		src: "/images/Gallery_pics_webp/gallery_18.webp",
		alt: "Control Systems",
		width: 800,
		height: 600,
	},
	{
		id: 19,
		src: "/images/Gallery_pics_webp/gallery_19.webp",
		alt: "Smart Grid Operations",
		width: 800,
		height: 600,
	},
	{
		id: 20,
		src: "/images/Gallery_pics_webp/gallery_20.webp",
		alt: "Power Distribution",
		width: 800,
		height: 600,
	},
	{
		id: 21,
		src: "/images/Gallery_pics_webp/gallery_21.webp",
		alt: "Renewable Energy Plant",
		width: 800,
		height: 600,
	},
	{
		id: 22,
		src: "/images/Gallery_pics_webp/gallery_22.webp",
		alt: "Modern Office Space",
		width: 800,
		height: 600,
	},
	{
		id: 23,
		src: "/images/Gallery_pics_webp/gallery_23.webp",
		alt: "Energy Distribution Network",
		width: 800,
		height: 600,
	},
	{
		id: 24,
		src: "/images/Gallery_pics_webp/gallery_24.webp",
		alt: "Modern Office Space",
		width: 800,
		height: 600,
	},
	{
		id: 25,
		src: "/images/Gallery_pics_webp/gallery_25.webp",
		alt: "Power Systems",
		width: 800,
		height: 600,
	},
	{
		id: 26,
		src: "/images/Gallery_pics_webp/gallery_26.webp",
		alt: "Industrial Facility",
		width: 800,
		height: 600,
	},
	{
		id: 27,
		src: "/images/Gallery_pics_webp/gallery_27.webp",
		alt: "Modern Office Space",
		width: 800,
		height: 600,
	},
	{
		id: 28,
		src: "/images/Gallery_pics_webp/gallery_28.webp",
		alt: "Energy Control Center",
		width: 800,
		height: 600,
	},
	{
		id: 29,
		src: "/images/Gallery_pics_webp/gallery_29.webp",
		alt: "Power Distribution",
		width: 800,
		height: 600,
	},
	{
		id: 30,
		src: "/images/Gallery_pics_webp/gallery_30.webp",
		alt: "Power Distribution",
		width: 800,
		height: 600,
	},
	{
		id: 31,
		src: "/images/Gallery_pics_webp/gallery_31.webp",
		alt: "Energy Management",
		width: 800,
		height: 600,
	},
	{
		id: 32,
		src: "/images/Gallery_pics_webp/gallery_32.webp",
		alt: "Energy Management",
		width: 800,
		height: 600,
	},
	{
		id: 33,
		src: "/images/Gallery_pics_webp/gallery_33.webp",
		alt: "Power Systems",
		width: 800,
		height: 600,
	},
	{
		id: 34,
		src: "/images/Gallery_pics_webp/gallery_34.webp",
		alt: "Power Systems",
		width: 800,
		height: 600,
	},
	{
		id: 35,
		src: "/images/Gallery_pics_webp/gallery_35.webp",
		alt: "Power Systems",
		width: 800,
		height: 600,
	},
	{
		id: 36,
		src: "/images/Gallery_pics_webp/gallery_36.webp",
		alt: "Energy Infrastructure",
		width: 800,
		height: 600,
	},
	{
		id: 37,
		src: "/images/Gallery_pics_webp/gallery_37.webp",
		alt: "Energy Infrastructure",
		width: 800,
		height: 600,
	},
	{
		id: 38,
		src: "/images/Gallery_pics_webp/gallery_38.webp",
		alt: "Energy Control Systems",
		width: 800,
		height: 600,
	},
	{
		id: 39,
		src: "/images/Gallery_pics_webp/gallery_39.webp",
		alt: "Power Distribution Network",
		width: 800,
		height: 600,
	},
	{
		id: 40,
		src: "/images/Gallery_pics_webp/gallery_40.webp",
		alt: "Energy Management Systems",
		width: 800,
		height: 600,
	},
]

const EventGallery = () => {
	const [selectedImage, setSelectedImage] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [loadedImages, setLoadedImages] = useState(0)

	useEffect(() => {
		// Preload images
		galleryImages.forEach((image) => {
			const img = new Image()
			img.src = image.src
			img.onload = () => {
				setLoadedImages((prev) => prev + 1)
			}
		})
	}, [])

	useEffect(() => {
		if (loadedImages === galleryImages.length) {
			setIsLoading(false)
		}
	}, [loadedImages])

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
							<LazyLoadImage
								src="/images/energy.png"
								alt="Photo Gallery"
								className="w-full h-full object-cover opacity-40"
								effect="blur"
								width="100%"
								height="100%"
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
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
						{galleryImages.map((image) => (
							<motion.div
								key={image.id}
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.3 }}
								className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
								onClick={() => setSelectedImage(image)}
							>
								<LazyLoadImage
									src={image.src}
									alt={image.alt}
									effect="blur"
									className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
									width={image.width}
									height={image.height}
									placeholderSrc={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E`}
								/>
								<div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
									<p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
										{image.alt}
									</p>
								</div>
							</motion.div>
						))}
					</div>

					{/* Image Modal */}
					<AnimatePresence>
						{selectedImage && (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
								onClick={() => setSelectedImage(null)}
							>
								<motion.div
									initial={{ scale: 0.9 }}
									animate={{ scale: 1 }}
									exit={{ scale: 0.9 }}
									className="relative max-w-4xl w-full"
									onClick={(e) => e.stopPropagation()}
								>
									<LazyLoadImage
										src={selectedImage.src}
										alt={selectedImage.alt}
										effect="blur"
										className="w-full h-auto rounded-lg shadow-2xl"
										width={selectedImage.width}
										height={selectedImage.height}
									/>
									<button
										className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-opacity"
										onClick={() => setSelectedImage(null)}
									>
										<svg
											className="w-6 h-6"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M6 18L18 6M6 6l12 12"
											/>
										</svg>
									</button>
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
