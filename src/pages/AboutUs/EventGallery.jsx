import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Loader from "../Loader/Loader"

const galleryCategories = [
	{
		name: "Office & People",
		images: [
			{ src: "/images/Gallery_pics/Office & People/office1.webp", alt: "Office & People 1" },
			{ src: "/images/Gallery_pics/Office & People/office2.webp", alt: "Office & People 2" },
			{ src: "/images/Gallery_pics/Office & People/office3.webp", alt: "Office & People 3" },
		],
	},
	{
		name: "Equipment",
		images: [
			{ src: "/images/Gallery_pics/Equipment/Equipment1.jpg", alt: "Equipment 1" },
			{ src: "/images/Gallery_pics/Equipment/Equipment2.webp", alt: "Equipment 2" },
			{ src: "/images/Gallery_pics/Equipment/Equipment3.webp", alt: "Equipment 3" },
			{ src: "/images/Gallery_pics/Equipment/Equipment4.jpg", alt: "Equipment 4" },
			{ src: "/images/Gallery_pics/Equipment/Equipment5.webp", alt: "Equipment 5" },
		],
	},
	{
		name: "Fabrication and Construction",
		images: [
			{ src: "/images/Gallery_pics/Fabrication Construction/Fabrication1.webp", alt: "Fabrication 1" },
			{ src: "/images/Gallery_pics/Fabrication Construction/Fabrication2.webp", alt: "Fabrication 2" },
			{ src: "/images/Gallery_pics/Fabrication Construction/Fabrication3.jpg", alt: "Fabrication 3" },
			{ src: "/images/Gallery_pics/Fabrication Construction/Fabrication4.jpg", alt: "Fabrication 4" },
			{ src: "/images/Gallery_pics/Fabrication Construction/Fabrication5.jpg", alt: "Fabrication 5" },
			{ src: "/images/Gallery_pics/Fabrication Construction/Fabrication6.jpg", alt: "Fabrication 6" },
		],
	},
	{
		name: "Design and Frameworks",
		images: [
			{ src: "/images/Gallery_pics/DesignFrameworks/design1.jpg", alt: "Design 1" },
			{ src: "/images/Gallery_pics/DesignFrameworks/design2.jpg", alt: "Design 2" },
			{ src: "/images/Gallery_pics/DesignFrameworks/design3.jpg", alt: "Design 3" },
			{ src: "/images/Gallery_pics/DesignFrameworks/design4.jpg", alt: "Design 4" },
		],
	},
	{
		name: "Fields & Operations",
		images: [
			{ src: "/images/Gallery_pics/Fields & Operations/Field1.webp", alt: "Field 1" },
			{ src: "/images/Gallery_pics/Fields & Operations/Field2.jpg", alt: "Field 2" },
			{ src: "/images/Gallery_pics/Fields & Operations/Field3.jpg", alt: "Field 3" },
			{ src: "/images/Gallery_pics/Fields & Operations/Field4.webp", alt: "Field 4" },
			{ src: "/images/Gallery_pics/Fields & Operations/Field5.webp", alt: "Field 5" },
			{ src: "/images/Gallery_pics/Fields & Operations/Field6.webp", alt: "Field 6" },
			{ src: "/images/Gallery_pics/Fields & Operations/Field7.jpg", alt: "Field 7" },
			{ src: "/images/Gallery_pics/Fields & Operations/Field8.webp", alt: "Field 8" },
			{ src: "/images/Gallery_pics/Fields & Operations/Field9.webp", alt: "Field 9" },
			{ src: "/images/Gallery_pics/Fields & Operations/Field10.webp", alt: "Field 10" },
			{ src: "/images/Gallery_pics/Fields & Operations/Field11.webp", alt: "Field 11" },
			{ src: "/images/Gallery_pics/Fields & Operations/Field12.jpg", alt: "Field 12" },
			{ src: "/images/Gallery_pics/Fields & Operations/Field13.jpg", alt: "Field 13" },
			{ src: "/images/Gallery_pics/Fields & Operations/Field14.jpg", alt: "Field 14" },
		],
	},
	{
		name: "Equiqments and Fittings",
		images: [
			{ src: "/images/Gallery_pics/Equiqments and Fittings/Fittings1.webp", alt: "Fittings 1" },
			{ src: "/images/Gallery_pics/Equiqments and Fittings/Fittings2.webp", alt: "Fittings 2" },
			{ src: "/images/Gallery_pics/Equiqments and Fittings/Fittings3.webp", alt: "Fittings 3" },
			{ src: "/images/Gallery_pics/Equiqments and Fittings/Fittings4.jpg", alt: "Fittings 4" },
			{ src: "/images/Gallery_pics/Equiqments and Fittings/Fittings5.webp", alt: "Fittings 5" },
			{ src: "/images/Gallery_pics/Equiqments and Fittings/Fittings6.webp", alt: "Fittings 6" },
		],
	},
	{
		name: "Inspections and Testing",
		images: [
			{ src: "/images/Gallery_pics/InspectionsTesting/Inspection1.jpg", alt: "Inspection 1" },
			{ src: "/images/Gallery_pics/InspectionsTesting/Inspection2.webp", alt: "Inspection 2" },
			{ src: "/images/Gallery_pics/InspectionsTesting/Inspection3.webp", alt: "Inspection 3" },
			{ src: "/images/Gallery_pics/InspectionsTesting/Inspection4.webp", alt: "Inspection 4" },
			{ src: "/images/Gallery_pics/InspectionsTesting/Inspection5.jpg", alt: "Inspection 5" },
		],
	},
	{
		name: "Instrumentation",
		images: [
			{ src: "/images/Gallery_pics/Instrumentation/instrument1.png", alt: "Instrumentation 1" },
		],
	},
]

const EventGallery = () => {
	const [selectedImage, setSelectedImage] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [loadedImages, setLoadedImages] = useState(0)

	useEffect(() => {
		// Collect all gallery image URLs only (exclude hero)
		const allImageUrls = galleryCategories.flatMap(category => category.images.map(image => image.src));

		let loadedCount = 0;
		let isMounted = true;
		const handleImageLoad = () => {
			loadedCount += 1;
			if (isMounted && loadedCount === allImageUrls.length) {
				setIsLoading(false);
			}
			setLoadedImages(loadedCount);
		};

		// Preload all gallery images
		allImageUrls.forEach(url => {
			const img = new window.Image();
			img.src = url;
			img.onload = handleImageLoad;
			img.onerror = handleImageLoad;
		});

		return () => {
			isMounted = false;
			setIsLoading(true);
			setLoadedImages(0);
		};
	}, []);

	if (isLoading) {
		return <Loader />
	}

	return (
		<div className="pt-48 bg-gradient-to-b from-gray-50 to-white">
			<div className="container mx-auto px-4 md:px-6 py-8">
				<div className="space-y-12">
					{/* Enhanced Hero Section */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className="relative bg-gradient-to-r from-blue-800 to-blue-900 text-white py-8 md:py-12 rounded-2xl overflow-hidden mt-8"
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
								className="text-xl text-white max-w-3xl leading-relaxed"
							>
								Explore our collection of images showcasing our projects,
								infrastructure, and commitment to energy innovation.
							</motion.p>
						</div>
					</motion.div>

					{/* Gallery Grid by Category */}
					{galleryCategories.map((category, catIdx) => (
						<div key={category.name} className="mb-12">
							<h3 className="text-2xl font-bold mb-4 text-blue-900">{category.name}</h3>
							<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
								{category.images.map((image, index) => (
									<motion.div
										key={image.src}
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
									</motion.div>
								))}
							</div>
						</div>
					))}

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
