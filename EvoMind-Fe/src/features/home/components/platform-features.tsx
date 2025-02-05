"use client";

import { FadeInWhenVisible, StaggerChildren } from "@/components/animation";
import { SparklesCore } from "@/components/sparkles";
import { motion } from "framer-motion";
import { MessageSquare, BotIcon as Robot, Shield, Users } from "lucide-react";

const PlatformFeatures = () => {
	const platformFeatures = [
		{
			title: "Feature 1",
			description:
				"Create Your Agent AI: Customize your Agent AI's characteristics, skills, and personality",
			icon: Robot,
		},
		{
			title: "Feature 2",
			description:
				"Chat in Real-Time: Connect and communicate with your Agent AI via a direct messaging interface",
			icon: MessageSquare,
		},
		{
			title: "Feature 3",
			description:
				"Blockchain-Powered: Secure, transparent, and fast with Solana",
			icon: Shield,
		},
		{
			title: "Feature 4",
			description:
				"Community-Driven: Collaborate with the community to develop new ideas and applications for Agent AI",
			icon: Users,
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
					<h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-white">
						Platform Features
					</h2>
					<p className="text-xl text-center text-secondary-100 mb-16">
						Empower Your Creativity with Agent AI
					</p>
				</FadeInWhenVisible>

				<StaggerChildren>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{platformFeatures.map((feature, index) => (
							<motion.div
								key={feature.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="bg-[#1A1A1A] hover:bg-[#222222] p-6 rounded-lg"
							>
								<div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mb-4">
									<feature.icon className="w-6 h-6 text-white" />
								</div>
								<h3 className="text-xl font-semibold mb-2 text-white">
									{feature.title}
								</h3>
								<p className="text-secondary-100">{feature.description}</p>
							</motion.div>
						))}
					</div>
				</StaggerChildren>
			</div>
		</section>
	);
};

export default PlatformFeatures;
