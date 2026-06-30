import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Loader from "./Loader/Loader"
import { X } from "lucide-react"

const csrImages = [
	{ src: "/images/CSR/luth1.jpeg", alt: "Medical Outreach in LUTH - 1" },
	{ src: "/images/CSR/luth2.jpeg", alt: "Medical Outreach in LUTH - 2" },
	{ src: "/images/CSR/luth3.jpeg", alt: "Medical Outreach in LUTH - 3" },
	{ src: "/images/CSR/luth4.jpeg", alt: "Medical Outreach in LUTH - 4" },
	{ src: "/images/CSR/luth5.jpeg", alt: "Medical Outreach in LUTH - 5" },
]

const CSR = () => {
	const [selectedImage, setSelectedImage] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [loadedImages, setLoadedImages] = useState(0)

	useEffect(() => {
		const handleImageLoad = () => {
			setLoadedImages(prev => {
				const newCount = prev + 1
				if (newCount === csrImages.length) {
					setIsLoading(false)
				}
				return newCount
			})
		}

		const handleImageError = () => {
			handleImageLoad()
		}

		csrImages.forEach(image => {
			const img = new Image()
			img.src = image.src
			img.onload = handleImageLoad
			img.onerror = handleImageError
		})

		return () => {
			setIsLoading(true)
			setLoadedImages(0)
		}
	}, [])

	if (isLoading) {
		return <Loader />
	}

	return (
		<div className="pt-48 bg-gradient-to-b from-gray-50 to-white min-h-screen">
			<div className="container mx-auto px-4 md:px-6 py-8">
				<div className="space-y-12">
					{/* Hero Section */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className="relative bg-gradient-to-r from-blue-800 to-blue-900 text-white py-8 md:py-12 rounded-2xl overflow-hidden mt-8"
					>
						<div className="absolute inset-0">
							<img
								src="/images/Home/pic_2.webp"
								alt="CSR"
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
								<p className="text-sm font-medium">Corporate Social Responsibility</p>
							</motion.div>
							<motion.h2
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.2 }}
								className="text-4xl md:text-5xl font-bold mb-6"
							>
								Driving <span className="text-orange-400">Positive Change</span>
							</motion.h2>
							<motion.p
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.3 }}
								className="text-xl text-white max-w-3xl leading-relaxed"
							>
								We are committed to making a meaningful impact in our communities through sustainable initiatives, environmental stewardship, and social development programs.
							</motion.p>
						</div>
					</motion.div>

					{/* CSR Write-up */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="max-w-3xl text-left"
					>
						<p className="text-base md:text-lg text-gray-700 leading-relaxed">
							Communities thrive when businesses choose to give back. We are proud to have participated in different meaningful CSR activities that reinforces our commitment to responsible corporate citizenship. Together, we can build stronger communities for tomorrow.
						</p>
					</motion.div>

					{/* PDF Download */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
					>
						<h3 className="text-2xl font-bold text-gray-900 mb-2">LUTH Medical Outreach</h3>
						
						<a
							href="/images/CSR/LUTH%20LETTER_001.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-md transition-colors duration-200"
						>
							LUTH Outreach Letter (PDF)
						</a>
					</motion.div>

					{/* CSR Gallery */}
					<div className="max-w-6xl mx-auto">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="text-center mb-10"
						>
							<h3 className="text-3xl font-bold text-gray-900 mb-2">Medical Outreach in LUTH</h3>
						</motion.div>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5 }}
							className="grid grid-cols-2 md:grid-cols-3 gap-4"
						>
							{csrImages.map((image, index) => (
								<motion.div
									key={image.src}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1 }}
									className="group relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
									onClick={() => setSelectedImage(image)}
								>
									<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
									<img
										src={image.src}
										alt={image.alt}
										className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
									/>
								</motion.div>
							))}
						</motion.div>
					</div>

					{/* Lightbox */}
					<AnimatePresence>
						{selectedImage && (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
								onClick={() => setSelectedImage(null)}
							>
								<motion.div
									initial={{ scale: 0.9, opacity: 0 }}
									animate={{ scale: 1, opacity: 1 }}
									exit={{ scale: 0.9, opacity: 0 }}
									className="relative max-w-[90vw] max-h-[90vh] w-auto h-auto"
									onClick={(e) => e.stopPropagation()}
								>
									<button
										className="absolute -top-12 right-0 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white z-50"
										onClick={() => setSelectedImage(null)}
									>
										<X className="w-8 h-8" />
									</button>

									<img
										src={selectedImage.src}
										alt={selectedImage.alt}
										className="w-auto h-auto max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
									/>
								</motion.div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</div>
	)
}

export default CSR
