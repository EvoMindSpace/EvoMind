"use client";

import { FadeInWhenVisible, StaggerChildren } from "@/components/animation";
import { SparklesCore } from "@/components/sparkles";
import { motion } from "framer-motion";
const HowItWork = () => {
	const items = [
		{
			number: 1,
			title: "Daily Governance",
			description:
				"Participate in daily community votes to set investment caps, holding periods, and other platform parameters.",
			icon: "📊",
		},
		{
			number: 2,
			title: "Choose or Create",
			description:
				"Select from AI-generated news memes or submit your own creative meme proposals during active sessions.",
			icon: "🎨",
		},
		{
			number: 3,
			title: "Vote & Invest",
			description:
				"Participate in community-set voting periods and invest within current session limits.",
			icon: "📈",
		},
		{
			number: 4,
			title: "Hold & Earn",
			description:
				"Hold your tokens through the community-determined minimum period with protection mechanisms.",
			icon: "💎",
		},
	];

	return (
		<section className="py-20 px-4 bg-black/[0.96] relative">
			<div className="h-full w-full absolute inset-0 z-0">
				<SparklesCore
					id="tsparticlesfullpage"
					background="transparent"
					minSize={0.6}
					maxSize={1.4}
					particleDensity={100}
					className="w-full min-h-screen"
					particleColor="#FFFFFF"
				/>
			</div>

			<div className="container mx-auto max-w-7xl text-center">
				<FadeInWhenVisible>
					<h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
						How It Works
					</h2>
					<p className="text-gray-400 text-lg mb-16 max-w-3xl mx-auto">
						Simple steps to participate in the future of meme-based investments
					</p>
				</FadeInWhenVisible>

				<div className="relative">
					{/* Connecting Lines - Desktop */}
					<div className="hidden lg:block absolute left-[25%] right-[25%] top-[25%] h-[2px] bg-primary" />
					<div className="hidden lg:block absolute left-[25%] right-[25%] top-[75%] h-[2px] bg-primary" />
					<div className="hidden lg:block absolute left-1/2 top-[25%] bottom-[25%] w-[2px] bg-primary" />

					<StaggerChildren>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
							{items.map((item, index) => (
								<motion.div
									key={item.title}
									className="relative p-8 rounded-xl border bg-card border-primary-200/20 hover:border-primary/20 transition-colors"
									variants={{
										hidden: { opacity: 0, y: 20 },
										visible: { opacity: 1, y: 0 },
									}}
								>
									<div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-primary text-black font-bold text-sm flex items-center justify-center">
										{item.number}
									</div>
									<div className="bg-primary-400 w-12 h-12 rounded-xl flex items-center justify-center mb-6 mx-auto">
										<span className="text-2xl text-primary-400">
											{item.icon}
										</span>
									</div>
									<h3 className="text-xl font-semibold mb-3">{item.title}</h3>
									<p className="text-gray-400">{item.description}</p>
								</motion.div>
							))}
						</div>

						{/* Final Step - Centered */}
						<motion.div
							className="mt-6 md:mt-8 max-w-lg mx-auto relative bg-card p-8 rounded-xl border border-primary-200/20 hover:border-primary/20 transition-colors"
							variants={{
								hidden: { opacity: 0, y: 20 },
								visible: { opacity: 1, y: 0 },
							}}
						>
							<div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-primary text-black font-bold text-sm flex items-center justify-center">
								5
							</div>
							<div className="bg-primary-400 w-12 h-12 rounded-xl flex items-center justify-center mb-6 mx-auto">
								<span className="text-2xl text-primary-400">💰</span>
							</div>
							<h3 className="text-xl font-semibold mb-3">Trade & Profit</h3>
							<p className="text-gray-400">
								Trade your tokens exclusively on Pump.fun once the holding
								period ends.
							</p>
						</motion.div>
					</StaggerChildren>
				</div>
			</div>
		</section>
	);
};

export default HowItWork;
