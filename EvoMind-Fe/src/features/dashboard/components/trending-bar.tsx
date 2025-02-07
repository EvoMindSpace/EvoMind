"use client";

import { StaggerChildren } from "@/components/animation";
import { motion } from "framer-motion";

export function TrendingBar() {
	const trendingTokens = [
		{ id: 1, name: "SOLPAY", icon: "💰" },
		{ id: 2, name: "DOGEX", icon: "🐕" },
		{ id: 3, name: "MOCHI", icon: "🍡" },
		{ id: 4, name: "SOLWIF", icon: "🌊" },
		{ id: 5, name: "DOGEX", icon: "🐕" },
		{ id: 6, name: "GOLDEN NU", icon: "✨" },
		{ id: 7, name: "BOOBIZ", icon: "🎯" },
		{ id: 8, name: "ZENA", icon: "⚔️" },
		{ id: 9, name: "AI TRADEX", icon: "🤖" },
		{ id: 10, name: "MOCHI", icon: "🍡" },
	];

	return (
		<div className="py-4">
			<StaggerChildren>
				<div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
					<motion.div
						className="flex items-center gap-2 text-purple-500"
						variants={{
							hidden: { opacity: 0, x: -20 },
							visible: { opacity: 1, x: 0 },
						}}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
							<polyline points="17 6 23 6 23 12" />
						</svg>
						<span>Trending</span>
					</motion.div>
					{trendingTokens.map((token) => (
						<motion.div
							key={token.id}
							className="flex items-center gap-1 whitespace-nowrap overflow-hidden rounded-full border border-purple-500 hover:bg-purple-500/20 px-5 py-3 text-sm cursor-pointer"
							variants={{
								hidden: { opacity: 0, x: 20 },
								visible: { opacity: 1, x: 0 },
							}}
						>
							<motion.p
								className="space-x-1 h-full w-full"
								whileHover={{ scale: 1.05 }}
							>
								<span>#{token.id}</span>
								<span>{token.name}</span>
								<span>{token.icon}</span>
							</motion.p>
						</motion.div>
					))}
				</div>
			</StaggerChildren>
		</div>
	);
}
