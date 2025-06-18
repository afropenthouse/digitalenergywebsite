import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Loader from "../Loader/Loader"

const galleryImages = [
	{
		id: 1,
		src: "/images/Gallery_pics_webp/gallery_1.webp",
		alt: "Digital Energy Gallery",
	},
	{
		id: 2,
		src: "/images/Gallery_pics_webp/gallery_2.webp",
		alt: "Digital Energy Gallery",
	},
	{
		id: 3,
		src: "/images/Gallery_pics_webp/gallery_3.webp",
		alt: "Digital Energy Gallery",
	},
	{
		id: 4,
		src: "/images/Gallery_pics_webp/gallery_4.webp",
		alt: "Digital Energy Gallery",
	},
	{
		id: 5,
		src: "/images/Gallery_pics_webp/gallery_5.webp",
		alt: "Digital Energy Gallery",
	},
	{
		id: 6,
		src: "/images/Gallery_pics_webp/gallery_6.webp",
		alt: "Digital Energy Gallery",
	},
	{
		id: 7,
		src: "/images/Gallery_pics_webp/gallery_7.webp",
		alt: "Digital Energy Gallery",
	},
	{
		id: 8,
		src: "/images/Gallery_pics_webp/gallery_8.webp",
		alt: "Digital Energy Gallery",
	},
	{
		id: 9,
		src: "/images/Gallery_pics_webp/gallery_9.webp",
		alt: "Digital Energy Gallery",
	},
	{
		id: 10,
		src: "/images/Gallery_pics_webp/gallery_10.webp",
		alt: "Digital Energy Gallery",
	},
	{
		id: 11,
		src: "/images/Gallery_pics_webp/gallery_11.webp",
		alt: "Digital Energy Gallery",
	},
	{
		id: 12,
		src: "/images/Gallery_pics_webp/gallery_12.webp",
		alt: "Digital Energy Gallery",
	},
	{
		id: 13,
		src: "/images/Gallery_pics_webp/gallery_13.webp",
		alt: "Digital Energy Gallery",
	},
	{
		id: 14,
		src: "/images/Gallery_pics_webp/gallery_14.webp",
		alt: "Digital Energy Gallery",
	},
	{
		id: 15,
		src: "/images/Gallery_pics_webp/gallery_15.webp",
		alt: "Digital Energy Gallery",
	},
	{
		id: 16,
		src: "/images/Gallery_pics_webp/gallery_16.webp",
		alt: "Digital Energy Gallery",
	},
	{
		id: 17,
		src: "/images/Gallery_pics_webp/gallery_17.webp",
		alt: "Digital Energy Gallery",
	},
	{
		id: 18,
		src: "/images/Gallery_pics_webp/gallery_18.webp",
		alt: "Digital Energy Gallery",
	},
	{
		id: 19,
		src: "/images/Gallery_pics_webp/gallery_19.webp",
		alt: "Digital Energy Gallery",
	},
	{
		id: 20,
		src: "/images/Gallery_pics_webp/gallery_20.webp",
		alt: "Digital Energy Gallery",
	},
	{
		id: 21,
		src: "/images/Gallery_pics_webp/gallery_21.webp",
		alt: "Digital Energy Gallery",
	},
	{
		id: 22,
		src: "/images/Gallery_pics_webp/gallery_22.webp",
		alt: "Digital Energy Gallery",
	},
	{
		id: 23,
		src: "/images/Gallery_pics_webp/gallery_23.webp",
		alt: "Digital Energy Gallery",
	},
	{
		id: 24,
		src: "/images/Gallery_pics_webp/gallery_24.webp",
		alt: "Digital Energy Gallery",
	},
	{
		id: 25,
		src: "/images/Gallery_pics_webp/gallery_25.webp",
		alt: "Digital Energy Gallery",
	},
	{
		id: 26,
		src: "/images/Gallery_pics_webp/gallery_26.webp",
		alt: "Digital Energy Gallery",
	},
	{
		id: 27,
		src: "/images/Gallery_pics_webp/gallery_27.webp",
		alt: "Digital Energy Gallery",
	},
	{
		id: 28,
		src: "/images/Gallery_pics_webp/gallery_28.webp",
		alt: "Digital Energy Gallery",
	},
	{
		id: 29,
		src: "/images/Gallery_pics_webp/gallery_29.webp",
		alt: "Digital Energy Gallery",
	},
	{
		id: 30,
		src: "/images/Gallery_pics_webp/gallery_30.webp",
		alt: "Digital Energy Gallery",
	},
	{
		id: 31,
		src: "/images/Gallery_pics_webp/gallery_31.webp",
		alt: "Digital Energy Gallery",
	},
	{
		id: 32,
		src: "/images/Gallery_pics_webp/gallery_32.webp",
		alt: "Digital Energy Gallery",
	},
	{
		id: 33,
		src: "/images/Gallery_pics_webp/gallery_33.webp",
		alt: "Digital Energy Gallery",
	},
	{
		id: 34,
		src: "/images/Gallery_pics_webp/gallery_34.webp",
		alt: "Digital Energy Gallery",
	},
	{
		id: 35,
		src: "/images/Gallery_pics_webp/gallery_35.webp",
		alt: "Digital Energy Gallery",
	},
	{
		id: 36,
		src: "/images/Gallery_pics_webp/gallery_36.webp",
		alt: "Digital Energy Gallery",
	},
	{
		id: 37,
		src: "/images/Gallery_pics_webp/gallery_37.webp",
		alt: "Digital Energy Gallery",
	},
	{
		id: 38,
		src: "/images/Gallery_pics_webp/gallery_38.webp",
		alt: "Digital Energy Gallery",
	},
	{
		id: 39,
		src: "/images/Gallery_pics_webp/gallery_39.webp",
		alt: "Digital Energy Gallery",
	},
	{
		id: 40,
		src: "/images/Gallery_pics_webp/gallery_40.webp",
		alt: "Digital Energy Gallery",
	},
]

const EventGallery = () => {
	const [selectedImage, setSelectedImage] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [loadedImages, setLoadedImages] = useState(0)

	useEffect(() => {
		const totalImages = galleryImages.length + 1 // +1 for the hero image
		const handleImageLoad = () => {
			setLoadedImages(prev => {
				const newCount = prev + 1
				if (newCount === totalImages) {
					setIsLoading(false)
				}
				return newCount
			})
		}

		// Preload all images
		galleryImages.forEach(image => {
			const img = new Image()
			img.src = image.src
			img.onload = handleImageLoad
		})

		// Preload hero image
		const heroImg = new Image()
		heroImg.src = "/images/webp/energy.webp"
		heroImg.onload = handleImageLoad

		return () => {
			setIsLoading(true)
			setLoadedImages(0)
		}
	}, [])

	if (isLoading) {
		return <Loader />
	}

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
								src="/images/webp/energy.webp"
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
