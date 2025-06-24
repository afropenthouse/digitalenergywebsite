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
			{ src: "/images/Gallery_pics/Office & People/office4.webp", alt: "Office & People 4" },
		],
	},
	{
		name: "Equipments",
		images: [
			{ src: "/images/Gallery_pics/Equipment/Equipment1.webp", alt: "Equipment 1" },
			{ src: "/images/Gallery_pics/Equipment/Equipmen2.webp", alt: "Equipment 2" },
			{ src: "/images/Gallery_pics/Equipment/Equipmen3.webp", alt: "Equipment 3" },
			{ src: "/images/Gallery_pics/Equipment/Equipment4.webp", alt: "Equipment 4" },
			{ src: "/images/Gallery_pics/Equipment/Equipment5.webp", alt: "Equipment 5" },
			{ src: "/images/Gallery_pics/Equipment/Equipment6.webp", alt: "Equipment 6" },
			{ src: "/images/Gallery_pics/Equipment/Equipment7.jpg", alt: "Equipment 7" },
			{ src: "/images/Gallery_pics/Equipment/Equipment8.webp", alt: "Equipment 8" },
			{ src: "/images/Gallery_pics/Equipment/Equipment9.webp", alt: "Equipment 9" },
			{ src: "/images/Gallery_pics/Equipment/Equipment10.webp", alt: "Equipment 10" },
		],
	},
	{
		name: "Fabrication/Construction",
		images: [
			{ src: "/images/Gallery_pics/Fabrication Construction/Fabrication1.webp", alt: "Fabrication 1" },
			{ src: "/images/Gallery_pics/Fabrication Construction/Fabrication2.jpg", alt: "Fabrication 2" },
			{ src: "/images/Gallery_pics/Fabrication Construction/Fabrication3.webp", alt: "Fabrication 3" },
			{ src: "/images/Gallery_pics/Fabrication Construction/Fabrication4.webp", alt: "Fabrication 4" },
			{ src: "/images/Gallery_pics/Fabrication Construction/Fabrication5.webp", alt: "Fabrication 5" },
			{ src: "/images/Gallery_pics/Fabrication Construction/Fabrication6.jpg", alt: "Fabrication 6" },
			{ src: "/images/Gallery_pics/Fabrication Construction/Fabrication8.jpg", alt: "Fabrication 8" },
			{ src: "/images/Gallery_pics/Fabrication Construction/Fabrication9.jpg", alt: "Fabrication 9" },
			{ src: "/images/Gallery_pics/Fabrication Construction/Fabrication10.jpg", alt: "Fabrication 10" },
		],
	},
	{
		name: "Design/Frameworks",
		images: [
			{ src: "/images/Gallery_pics/DesignFrameworks/Design1.png", alt: "Design Frameworks 1" },
		],
	},
	{
		name: "Inspections and Testing",
		images: [
			{ src: "/images/Gallery_pics/InspectionsTesting/Inspection1.webp", alt: "Inspection 1" },
			{ src: "/images/Gallery_pics/InspectionsTesting/Inspection2.jpg", alt: "Inspection 2" },
			{ src: "/images/Gallery_pics/InspectionsTesting/Inspection3.jpg", alt: "Inspection 3" },
			{ src: "/images/Gallery_pics/InspectionsTesting/Inspection4.webp", alt: "Inspection 4" },
			{ src: "/images/Gallery_pics/InspectionsTesting/Inspection5.webp", alt: "Inspection 5" },
			{ src: "/images/Gallery_pics/InspectionsTesting/Inspection6.webp", alt: "Inspection 6" },
		],
	},
	{
		name: "Instrumentation",
		images: [
			{ src: "/images/Gallery_pics/Instrumentation/inspection1.webp", alt: "Instrumentation 1" },
			{ src: "/images/Gallery_pics/Instrumentation/inspection2.webp", alt: "Instrumentation 2" },
			{ src: "/images/Gallery_pics/Instrumentation/inspection3.jpg", alt: "Instrumentation 3" },
			{ src: "/images/Gallery_pics/Instrumentation/inspection4.webp", alt: "Instrumentation 4" },
			{ src: "/images/Gallery_pics/Instrumentation/inspection5.webp", alt: "Instrumentation 5" },
		],
	},
	{
		name: "Vessels",
		images: [
			{ src: "/images/Gallery_pics/Vessels/Vessel1.webp", alt: "Vessel 1" },
			{ src: "/images/Gallery_pics/Vessels/Vessel2.jpg", alt: "Vessel 2" },
			{ src: "/images/Gallery_pics/Vessels/Vessel3.jpg", alt: "Vessel 3" },
			{ src: "/images/Gallery_pics/Vessels/Vessel4.webp", alt: "Vessel 4" },
			{ src: "/images/Gallery_pics/Vessels/Vessel5.jpg", alt: "Vessel 5" },
			{ src: "/images/Gallery_pics/Vessels/Vessel6.webp", alt: "Vessel 6" },
			{ src: "/images/Gallery_pics/Vessels/Vessel7.webp", alt: "Vessel 7" },
			{ src: "/images/Gallery_pics/Vessels/Vessel8.webp", alt: "Vessel 8" },
			{ src: "/images/Gallery_pics/Vessels/Vessel9.webp", alt: "Vessel 9" },
			{ src: "/images/Gallery_pics/Vessels/Vessel10.jpg", alt: "Vessel 10" },
			{ src: "/images/Gallery_pics/Vessels/Vessel11.webp", alt: "Vessel 11" },
			{ src: "/images/Gallery_pics/Vessels/Vessel12.jpg", alt: "Vessel 12" },
			{ src: "/images/Gallery_pics/Vessels/Vessel13.webp", alt: "Vessel 13" },
			{ src: "/images/Gallery_pics/Vessels/Vessel14.webp", alt: "Vessel 14" },
			{ src: "/images/Gallery_pics/Vessels/Vessel15.webp", alt: "Vessel 15" },
		],
	},
	{
		name: "Corrosion",
		images: [
			{ src: "/images/Gallery_pics/Corrosion/Corrosion1.webp", alt: "Corrosion 1" },
			{ src: "/images/Gallery_pics/Corrosion/Corrosion2.webp", alt: "Corrosion 2" },
			{ src: "/images/Gallery_pics/Corrosion/Corrosion3.jpg", alt: "Corrosion 3" },
			{ src: "/images/Gallery_pics/Corrosion/Corrosion4.webp", alt: "Corrosion 4" },
			{ src: "/images/Gallery_pics/Corrosion/Corrosion5.jpg", alt: "Corrosion 5" },
		],
	},
]

const EventGallery = () => {
	const [selectedImage, setSelectedImage] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [loadedImages, setLoadedImages] = useState(0)

	useEffect(() => {
		// Collect all image URLs (gallery + hero)
		const allImageUrls = [
			"/images/webp/energy.webp",
			...galleryCategories.flatMap(category => category.images.map(image => image.src)),
		];

		let loadedCount = 0;
		let isMounted = true;
		const handleImageLoad = () => {
			loadedCount += 1;
			if (isMounted && loadedCount === allImageUrls.length) {
				setIsLoading(false);
			}
			setLoadedImages(loadedCount);
		};

		// Preload all images
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
