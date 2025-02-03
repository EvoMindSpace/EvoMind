"use client";

import { FadeInWhenVisible, StaggerChildren } from "@/components/animation";

import { motion } from "framer-motion";

const ContractFlow = () => {
	return (
		<section className="py-20 px-4 bg-[#111111]">
			<div className="container mx-auto max-w-4xl text-center">
				<FadeInWhenVisible>
					<h2 className="text-4xl md:text-5xl font-bold mb-6">Contract Flow</h2>
					<p className="text-gray-400 text-lg mb-16 max-w-3xl mx-auto">
						Technical implementation of the Meme Fund Solana Program
					</p>
				</FadeInWhenVisible>

				<div className="space-y-6">
					<StaggerChildren>
						{/* Step 1 */}
						<motion.div
							className="relative bg-[#1A1A1A] rounded-xl p-8 text-left"
							variants={{
								hidden: { opacity: 0, y: 20 },
								visible: { opacity: 1, y: 0 },
							}}
						>
							<div className="absolute -top-3 -left-3 w-10 h-10 rounded-xl bg-[#1E2718] flex items-center justify-center text-primary font-bold">
								1
							</div>
							<h3 className="text-xl font-bold mb-4 pl-8">
								1. Create Meme Fund
							</h3>
							<p className="text-gray-400 mb-4">
								Creates PDAs with Meme ID: meme_fund (for data) and
								meme_fund_vault (for SOL)
							</p>
							<div className="bg-[#141414] rounded-lg p-4">
								<span className="text-primary font-medium">Note: </span>
								<span className="text-gray-400">
									PDAs (Program Derived Addresses) are special accounts
									controlled only by this program, ensuring secure management of
									funds and data.
								</span>
							</div>
						</motion.div>

						{/* Arrow Indicator */}
						<motion.div
							className="flex justify-center py-2"
							variants={{
								hidden: { opacity: 0 },
								visible: { opacity: 1 },
							}}
						>
							<div className="text-primary">↓</div>
						</motion.div>

						{/* Step 2 */}
						<motion.div
							className="relative bg-[#1A1A1A] rounded-xl p-8 text-left"
							variants={{
								hidden: { opacity: 0, y: 20 },
								visible: { opacity: 1, y: 0 },
							}}
						>
							<div className="absolute -top-3 -left-3 w-10 h-10 rounded-xl bg-[#1E2718] flex items-center justify-center text-primary font-bold">
								2
							</div>
							<h3 className="text-xl font-bold mb-4 pl-8">2. Contribute</h3>
							<p className="text-gray-400 mb-4">
								Users invest in meme_fund_vault (min/max limits and time
								restriction apply)
							</p>
							<div className="bg-[#141414] rounded-lg p-4">
								<span className="text-primary font-medium">Note: </span>
								<span className="text-gray-400">
									A 5% fee is taken from each contribution. This percentage can
									be adjusted if needed.
								</span>
							</div>
						</motion.div>

						{/* Arrow Indicator */}
						<motion.div
							className="flex justify-center py-2"
							variants={{
								hidden: { opacity: 0 },
								visible: { opacity: 1 },
							}}
						>
							<div className="text-primary">↓</div>
						</motion.div>

						{/* Step 3 */}
						<motion.div
							className="relative bg-[#1A1A1A] rounded-xl p-8 text-left"
							variants={{
								hidden: { opacity: 0, y: 20 },
								visible: { opacity: 1, y: 0 },
							}}
						>
							<div className="absolute -top-3 -left-3 w-10 h-10 rounded-xl bg-[#1E2718] flex items-center justify-center text-primary font-bold">
								3
							</div>
							<h3 className="text-xl font-bold mb-4 pl-8">3. Start Meme</h3>
							<p className="text-gray-400 mb-4">
								Creates token on Pum.fun and buys it using meme_fund_vault
							</p>
							<div className="bg-[#141414] rounded-lg p-4">
								<span className="text-primary font-medium">Note: </span>
								<span className="text-gray-400">
									A purchase is made using the total contribution in the PDA
									wallet. Tokens are then distributed in the Claim method based
									on contribution ratios.
								</span>
							</div>
						</motion.div>

						{/* Arrow Indicator */}
						<motion.div
							className="flex justify-center py-2"
							variants={{
								hidden: { opacity: 0 },
								visible: { opacity: 1 },
							}}
						>
							<div className="text-primary">↓</div>
						</motion.div>

						{/* Step 4 */}
						<motion.div
							className="relative bg-[#1A1A1A] rounded-xl p-8 text-left"
							variants={{
								hidden: { opacity: 0, y: 20 },
								visible: { opacity: 1, y: 0 },
							}}
						>
							<div className="absolute -top-3 -left-3 w-10 h-10 rounded-xl bg-[#1E2718] flex items-center justify-center text-primary font-bold">
								4
							</div>
							<h3 className="text-xl font-bold mb-4 pl-8">4. Claim Token</h3>
							<p className="text-gray-400 mb-4">
								Users can claim tokens based on their investment (time
								restriction applies)
							</p>
						</motion.div>

						{/* Example Values */}
						<motion.div
							className="bg-[#1A1A1A] rounded-xl p-8 text-left mt-8"
							variants={{
								hidden: { opacity: 0, y: 20 },
								visible: { opacity: 1, y: 0 },
							}}
						>
							<h3 className="text-primary font-bold mb-6">
								Example Values (Adjustable)
							</h3>
							<ul className="space-y-4 text-gray-400">
								<li>• Total investment limit: 10 SOL</li>
								<li>• Investment period: 5 minutes</li>
								<li>• Token claim period: 30 minutes after Start Meme</li>
								<li>• Contribution fee: 5% (adjustable)</li>
							</ul>
						</motion.div>
					</StaggerChildren>
				</div>
			</div>
		</section>
	);
};

export default ContractFlow;
