"use client";

import { FadeInWhenVisible, StaggerChildren } from "@/components/animation";
import Badge from "@/components/badge";
import { SparklesCore } from "@/components/sparkles";
import { motion } from "framer-motion";
import { ArrowRight, Coins, Gift, Users, Vote } from "lucide-react";

const AIRDROP_CARDS = [
	{
		icon: Vote,
		title: "Vote on Memes",
		description:
			"Participate in community voting to shape the platform's future",
		points: 10,
		showArrow: true,
	},
	{
		icon: Users,
		title: "Community Voting",
		description: "Take part in community governance decisions",
		points: 15,
		showArrow: true,
	},
	{
		icon: Coins,
		title: "Contribute",
		description: "Contribute SOL to support your favorite memes",
		points: 50,
		showArrow: true,
	},
	{
		icon: Gift,
		title: "Claim Tokens",
		description: "Claim tokens from your successful meme investments",
		points: 70,
		showArrow: false,
	},
];

const AirdropCard = ({
	icon: Icon,
	title,
	description,
	points,
	showArrow,
	index,
}: {
	icon: React.ElementType;
	title: string;
	description: string;
	points: number;
	showArrow: boolean;
	index: number;
}) => (
	<motion.div
		key={title}
		initial={{ opacity: 0, y: 20 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true }}
		transition={{ delay: index * 0.1 }}
		className="bg-card p-6 !rounded-lg relative"
	>
		<div className="bg-primary-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
			<Icon className="w-6 h-6 text-primary-400" />
		</div>
		<h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
		<p className="text-gray-400 mb-4">{description}</p>
		<p className="text-primary-400 font-semibold">+{points} points</p>
		{showArrow && (
			<div className="hidden lg:block absolute top-1/2 -right-5 transform -translate-y-1/2">
				<ArrowRight className="w-6 h-6 text-primary-400" />
			</div>
		)}
	</motion.div>
);

const AirdropProgram = () => {
	return (
		<section className="py-20 px-4 bg-black/[0.96] relative h-screen">
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
					<div className="flex items-center justify-center mb-8">
						<Badge icon={Gift}>Airdrop Program</Badge>
					</div>
				</FadeInWhenVisible>

				<FadeInWhenVisible>
					<h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
						Earn Points, Get Rewarded
					</h2>
					<p className="text-gray-400 text-lg mb-16 max-w-3xl mx-auto">
						Join our airdrop program by participating in the EvoMind ecosystem.
						Earn points through various activities and secure your share of the
						token distribution.
					</p>
				</FadeInWhenVisible>

				<StaggerChildren>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
						<div className="hidden lg:block absolute top-1/2 left-[20%] right-[20%] h-[2px] bg-primary/20 -translate-y-1/2 z-0" />

						{AIRDROP_CARDS.map((card, index) => (
							<AirdropCard
								key={`${card.title}-${index}`}
								{...card}
								index={index}
							/>
						))}
					</div>
				</StaggerChildren>

				<div className="mt-16 text-center">
					<p className="text-gray-500 flex items-center justify-center gap-2 mb-4">
						<Coins className="w-4 h-4" />
						Maximum airdrop points: 1,000,000
					</p>
					<p className="text-gray-500 text-sm">
						Points are calculated based on your participation across all
						activities. The more you engage, the more tokens you`&lsquo;`ll
						receive.
					</p>
				</div>
			</div>
		</section>
	);
};

export default AirdropProgram;
