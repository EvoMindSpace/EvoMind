"use client";

import { motion } from "framer-motion";
import { ExternalLinkIcon, RocketIcon } from "lucide-react";

export function CTASection() {
	return (
		<section className="py-20 px-4 bg-[#1A1A1A] rounded-2xl">
			<div className="container mx-auto max-w-4xl text-center">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="inline-flex items-center gap-2 bg-[#1E2718] text-primary px-6 py-2.5 rounded-full text-sm font-medium mb-8"
				>
					<RocketIcon className="w-4 h-4" />
					Get Started Now
				</motion.div>

				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.1 }}
					className="text-4xl md:text-5xl font-bold mb-6"
				>
					Be Part of the{" "}
					<span className="text-primary">Future of Meme Finance</span>
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
					<button className="w-full md:w-auto bg-primary text-black px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors">
						Coming soon on Mainnet →
					</button>
					<button className="w-full md:w-auto border border-primary text-primary px-8 py-3 rounded-full font-medium hover:bg-primary/10 transition-colors inline-flex items-center gap-2">
						Try on Devnet
						<ExternalLinkIcon className="w-4 h-4" />
					</button>
				</motion.div>
			</div>
		</section>
	);
}
