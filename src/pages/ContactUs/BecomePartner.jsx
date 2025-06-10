"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Handshake, Globe, TrendingUp, Shield } from "lucide-react"

const partnershipTypes = [
	{
		title: "Strategic Alliance",
		description:
			"Long-term partnership focused on mutual growth and market expansion",
		icon: Handshake,
	},
	{
		title: "Technology Partnership",
		description: "Collaboration to develop or implement innovative solutions",
		icon: Globe,
	},
	{
		title: "Distribution Partnership",
		description: "Partnership for product distribution and market reach",
		icon: TrendingUp,
	},
	{
		title: "Service Partnership",
		description: "Collaboration to provide comprehensive service offerings",
		icon: Shield,
	},
]

export default function BecomePartner() {
	return (
		<div className="min-h-screen bg-gray-50 pt-20">
			{/* Hero Section */}
			<section className="py-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white relative overflow-hidden rounded-2xl mx-4 md:mx-6 lg:mx-8">
				<div className="absolute inset-0">
					<img
						src="/src/assets/p88.png"
						alt="Become a Partner"
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
						<p className="text-sm font-medium">Become a Partner</p>
					</motion.div>
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="text-4xl md:text-5xl font-bold mb-6"
					>
						Excellence Through{" "}
						<span className="text-orange-400">Collaboration</span>
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}
						className="text-xl text-blue-100 max-w-3xl leading-relaxed"
					>
						Partner with us to drive innovation and mutual growth.
					</motion.p>
				</div>
			</section>

			{/* Partnership Types */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Partnership Opportunities
						</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							Explore different ways to collaborate with Digital Energy and grow
							together
						</p>
					</motion.div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{partnershipTypes.map((type, index) => (
							<motion.div
								key={type.title}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
							>
								<Card className="h-full hover:shadow-xl transition-shadow border-0 shadow-md">
									<CardContent className="p-6 text-center">
										<div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
											<type.icon className="h-8 w-8 text-primary-500" />
										</div>
										<h3 className="text-xl font-bold text-gray-900 mb-3">
											{type.title}
										</h3>
										<p className="text-gray-600">
											{type.description}
										</p>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Benefits */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
						>
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
								Why Partner With Us?
							</h2>
							<p className="text-lg text-gray-600 mb-6 leading-relaxed">
								At Digital Energy, we believe in the power of collaboration to
								drive innovation and create value. Our partnerships are built on
								mutual respect, shared goals, and a commitment to excellence.
							</p>
							<p className="text-lg text-gray-600 mb-8 leading-relaxed">
								By partnering with us, you gain access to our extensive network,
								technical expertise, and market knowledge, enabling both parties
								to achieve greater success together than separately.
							</p>

							<div className="space-y-4">
								<div className="flex items-start">
									<div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
										<TrendingUp className="h-5 w-5 text-primary-500" />
									</div>
									<div>
										<h4 className="font-semibold text-gray-900 mb-1">
											Expanded Market Reach
										</h4>
										<p className="text-gray-600">
											Access new markets and customer segments through our network
										</p>
									</div>
								</div>

								<div className="flex items-start">
									<div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
										<Globe className="h-5 w-5 text-primary-500" />
									</div>
									<div>
										<h4 className="font-semibold text-gray-900 mb-1">
											Technical Expertise
										</h4>
										<p className="text-gray-600">
											Leverage our industry knowledge and technical capabilities
										</p>
									</div>
								</div>

								<div className="flex items-start">
									<div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
										<Shield className="h-5 w-5 text-primary-500" />
									</div>
									<div>
										<h4 className="font-semibold text-gray-900 mb-1">
											Enhanced Credibility
										</h4>
										<p className="text-gray-600">
											Benefit from our established reputation in the energy sector
										</p>
									</div>
								</div>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
							className="relative"
						>
							<div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
								<img
									src="/src/assets/p88.png"
									alt="Partnership"
									className="w-full h-full object-cover"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Partner Form */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Start the Conversation
						</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							Tell us about your organization and how you envision partnering with
							Digital Energy
						</p>
					</motion.div>

					<div className="max-w-3xl mx-auto">
						<Card className="border-0 shadow-xl">
							<CardContent className="p-8">
								<form className="space-y-6">
									<div className="grid md:grid-cols-2 gap-4">
										<div>
											<label className="block text-sm font-medium text-gray-700 mb-2">
												Company Name *
											</label>
											<input
												type="text"
												placeholder="Your company name"
												required
												className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
											/>
										</div>
										<div>
											<label className="block text-sm font-medium text-gray-700 mb-2">
												Industry *
											</label>
											<input
												type="text"
												placeholder="Your industry"
												required
												className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
											/>
										</div>
									</div>

									<div className="grid md:grid-cols-2 gap-4">
										<div>
											<label className="block text-sm font-medium text-gray-700 mb-2">
												Contact Person *
											</label>
											<input
												type="text"
												placeholder="Full name"
												required
												className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
											/>
										</div>
										<div>
											<label className="block text-sm font-medium text-gray-700 mb-2">
												Position *
											</label>
											<input
												type="text"
												placeholder="Your position"
												required
												className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
											/>
										</div>
									</div>

									<div className="grid md:grid-cols-2 gap-4">
										<div>
											<label className="block text-sm font-medium text-gray-700 mb-2">
												Email *
											</label>
											<input
												type="email"
												placeholder="your@email.com"
												required
												className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
											/>
										</div>
										<div>
											<label className="block text-sm font-medium text-gray-700 mb-2">
												Phone *
											</label>
											<input
												type="tel"
												placeholder="+234 (0) 123 456 7890"
												required
												className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
											/>
										</div>
									</div>

									<div>
										<label className="block text-sm font-medium text-gray-700 mb-2">
											Partnership Interest *
										</label>
										<select
											required
											className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
										>
											<option value="">Select partnership type</option>
											{partnershipTypes.map((type) => (
												<option key={type.title} value={type.title}>
													{type.title}
												</option>
											))}
										</select>
									</div>

									<div>
										<label className="block text-sm font-medium text-gray-700 mb-2">
											Message *
										</label>
										<textarea
											rows={4}
											placeholder="Tell us about your partnership goals"
											required
											className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
										/>
									</div>

									<div className="flex items-center space-x-2">
										<input type="checkbox" id="terms" required className="rounded" />
										<label htmlFor="terms" className="text-sm font-medium">
											I agree to the terms and conditions
										</label>
									</div>

									<div className="mt-8">
										<Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2">
											Submit Partnership Request
											<ArrowRight className="h-5 w-5" />
										</Button>
									</div>
								</form>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>
		</div>
	)
}
