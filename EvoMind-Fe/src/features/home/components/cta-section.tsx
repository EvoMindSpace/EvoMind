"use client";

import { FadeInWhenVisible } from "@/components/animation";
import Badge from "@/components/badge";
import { SparklesCore } from "@/components/sparkles";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLinkIcon, RocketIcon } from "lucide-react";

export function CTASection() {
	return (
		<section className="py-20 px-4 bg-black/[0.96] rounded-2xl relative">
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
			<div className="container mx-auto max-w-4xl text-center">
				<FadeInWhenVisible>
					<div className="flex items-center justify-center mb-8">
						<Badge icon={RocketIcon}>Get Started Now</Badge>
					</div>
				</FadeInWhenVisible>

				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.1 }}
					className="text-4xl md:text-5xl font-bold mb-6 text-white"
				>
					Be Part of the{" "}
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
						Future of Meme Finance
					</span>
				</motion.h2>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.2 }}
					className="text-gray-400 text-lg mb-16 max-w-3xl mx-auto"
				>
					Join our community early and help shape the future of news-driven meme
					investments. Try our platform on Solana Devnet or wait for the
					upcoming mainnet launch.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.3 }}
					className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
				>
					{[
						{ value: "5min*", label: "Current Voting Period" },
						{ value: "1 SOL*", label: "Current Max Investment" },
						{ value: "1hr*", label: "Current Hold Time" },
						{ value: "10 SOL*", label: "Current Session Cap" },
					].map((stat) => (
						<div key={stat.value} className="text-center">
							<div className="text-primary text-2xl font-bold mb-2">
								{stat.value}
							</div>
							<div className="text-gray-400 text-sm">{stat.label}</div>
						</div>
					))}
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.4 }}
					className="flex flex-col md:flex-row items-center justify-center gap-4"
				>
					<Button className="w-full !cursor-pointer md:w-auto bg-gradient-to-r from-purple-400 to-pink-600 hover:bg-purple text-black px-8 py-3 rounded-full font-medium transition-colors">
						Coming soon on Mainnet →
					</Button>

					<Button
						className="text-white border-purple-500 hover:bg-purple-500/20 rounded-full w-full md:w-auto px-8 py-3 !cursor-pointer"
						variant="outline"
					>
						Try on Devnet
						<ExternalLinkIcon className="w-4 h-4" />
					</Button>
				</motion.div>
			</div>
		</section>
	);
}
