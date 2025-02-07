"use client";

import { ScaleIn } from "@/components/animation";
import { Button } from "@/components/ui/button";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import {
	ArrowUp,
	CheckCircle,
	Flame,
	Sparkles,
	TrendingUp,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const tokens = [
	{
		id: 1,
		name: "SHIRA SHOOTOUT",
		symbol: "SHIRASHOOT",
		description:
			"Solcasino is Top 1 crypto casino on Solana network. Payable directly to your Web3...",
		volume: "45k",
		transactions: 187,
		price: "$45k",
		image:
			"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NBwa6jXGJ7l7c2d7Z0V6nGK29KBUE1.png",
	},
	{
		id: 2,
		name: "Sam Altman Ai Token",
		symbol: "SALTTAI",
		description:
			"Solcasino is Top 1 crypto casino on Solana network. Payable directly to your Web3...",
		volume: "70.26K",
		transactions: 187,
		price: "$45k",
		image:
			"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NBwa6jXGJ7l7c2d7Z0V6nGK29KBUE1.png",
	},
	{
		id: 3,
		name: "Angelscoin",
		symbol: "$Angels",
		description:
			"Solcasino is Top 1 crypto casino on Solana network. Payable directly to your Web3...",
		volume: "45.26K",
		transactions: 187,
		price: "$45k",
		image:
			"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NBwa6jXGJ7l7c2d7Z0V6nGK29KBUE1.png",
	},
	{
		id: 4,
		name: "SHIRA SHOOTOUT",
		symbol: "SHIRASHOOT",
		description:
			"Solcasino is Top 1 crypto casino on Solana network. Payable directly to your Web3...",
		volume: "45k",
		transactions: 187,
		price: "$45k",
		image:
			"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NBwa6jXGJ7l7c2d7Z0V6nGK29KBUE1.png",
	},
	{
		id: 5,
		name: "Sam Altman Ai Token",
		symbol: "SALTTAI",
		description:
			"Solcasino is Top 1 crypto casino on Solana network. Payable directly to your Web3...",
		volume: "70.26K",
		transactions: 187,
		price: "$45k",
		image:
			"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NBwa6jXGJ7l7c2d7Z0V6nGK29KBUE1.png",
	},
	{
		id: 6,
		name: "Angelscoin",
		symbol: "$Angels",
		description:
			"Solcasino is Top 1 crypto casino on Solana network. Payable directly to your Web3...",
		volume: "45.26K",
		transactions: 187,
		price: "$45k",
		image:
			"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NBwa6jXGJ7l7c2d7Z0V6nGK29KBUE1.png",
	},
	{
		id: 7,
		name: "SHIRA SHOOTOUT",
		symbol: "SHIRASHOOT",
		description:
			"Solcasino is Top 1 crypto casino on Solana network. Payable directly to your Web3...",
		volume: "45k",
		transactions: 187,
		price: "$45k",
		image:
			"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NBwa6jXGJ7l7c2d7Z0V6nGK29KBUE1.png",
	},
	// {
	// 	id: 8,
	// 	name: "Sam Altman Ai Token",
	// 	symbol: "SALTTAI",
	// 	description:
	// 		"Solcasino is Top 1 crypto casino on Solana network. Payable directly to your Web3...",
	// 	volume: "70.26K",
	// 	transactions: 187,
	// 	price: "$45k",
	// 	image:
	// 		"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NBwa6jXGJ7l7c2d7Z0V6nGK29KBUE1.png",
	// },
	// {
	// 	id: 9,
	// 	name: "Angelscoin",
	// 	symbol: "$Angels",
	// 	description:
	// 		"Solcasino is Top 1 crypto casino on Solana network. Payable directly to your Web3...",
	// 	volume: "45.26K",
	// 	transactions: 187,
	// 	price: "$45k",
	// 	image:
	// 		"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NBwa6jXGJ7l7c2d7Z0V6nGK29KBUE1.png",
	// },
];

const tabs = [
	{ id: "trending", label: "Trending", icon: Flame },
	{ id: "top", label: "Top", icon: ArrowUp },
	{ id: "rising", label: "Rising", icon: TrendingUp },
	{ id: "new", label: "New", icon: Sparkles },
	{ id: "finalized", label: "Finalized", icon: CheckCircle },
];

export function TokenGrid() {
	const [activeTab, setActiveTab] = useState("trending");

	return (
		<div className="pb-16">
			<motion.div
				className="mb-6 flex gap-2 overflow-x-auto scrollbar-hide py-2"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				{tabs.map((tab) => (
					<motion.div
						key={tab.id}
						whileHover={{ scale: activeTab === tab.id ? 1 : 1.1 }}
						whileTap={{ scale: 0.95 }}
					>
						<Button
							variant={activeTab === tab.id ? "default" : "ghost"}
							onClick={() => setActiveTab(tab.id)}
							className={cn(
								"text-white border border-transparent hover:bg-transparent",
								{
									"border-purple-500 bg-purple-500/20 hover:!bg-purple-500/20":
										activeTab === tab.id,
								}
							)}
						>
							<tab.icon size={16} />
							{tab.label}
						</Button>
					</motion.div>
				))}
			</motion.div>

			<AnimatePresence mode="wait">
				<motion.div
					key={activeTab}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -20 }}
					transition={{ duration: 0.3 }}
					className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
				>
					{tokens.map((token) => (
						<ScaleIn key={token.id}>
							<motion.div
								className="rounded-lg border border-gray-800 bg-gray-900/50 p-4 cursor-pointer space-y-4 hover:bg-gray-900/70 transition-all duration-300"
								whileHover={{
									scale: 1.02,
									transition: { duration: 0.2 },
								}}
							>
								<div className="mb-4 flex items-start justify-between">
									<div className="flex items-center gap-3">
										<motion.div className="h-12 w-12 overflow-hidden rounded-full">
											<Image
												src={token.image || "/placeholder.svg"}
												alt={token.name}
												className="h-full w-full object-cover rounded-full"
												height={48}
												width={48}
											/>
										</motion.div>
										<div>
											<h3 className="font-medium text-gray-200">
												{token.symbol}
											</h3>
											<p className="text-sm text-gray-400">{token.name}</p>
										</div>
									</div>
									<div className="flex gap-2">
										<Button variant="ghost" size="icon" className="h-8 w-8">
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
												className="text-gray-400"
											>
												<circle cx="12" cy="12" r="10" />
												<line x1="2" y1="12" x2="22" y2="12" />
												<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
											</svg>
										</Button>
										<Button variant="ghost" size="icon" className="h-8 w-8">
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
												className="text-gray-400"
											>
												<path d="m22 2-7 20-4-9-9-4Z" />
												<path d="M22 2 11 13" />
											</svg>
										</Button>
									</div>
								</div>
								<p className="mb-4 text-sm text-gray-400">
									{token.description}
								</p>

								<div className="flex justify-between text-xs text-muted-foreground">
									<span>Market Cap: 1000</span>
									<span>Launch Time: 2 days ago</span>
								</div>
								<div className="mt-2 h-2 bg-primary/20 rounded-full">
									<div
										className="h-full bg-primary rounded-full"
										style={{ width: "60%" }}
									></div>
								</div>

								<div className="flex items-center justify-between text-sm">
									<div className="flex items-center gap-2">
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
											className="text-gray-400"
										>
											<polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
											<polyline points="17 6 23 6 23 12" />
										</svg>
										<span className="text-gray-400">{token.volume}</span>
									</div>
									<div className="flex items-center gap-2">
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
											className="text-gray-400"
										>
											<path d="M12 20v-6" />
											<path d="M12 8V2" />
											<path d="m4.93 4.93 4.24 4.24" />
											<path d="m14.83 14.83 4.24 4.24" />
											<path d="M14.83 9.17l4.24-4.24" />
											<path d="M4.93 19.07l4.24-4.24" />
										</svg>
										<span className="text-gray-400">
											{token.transactions} txns
										</span>
									</div>
									<div className="flex items-center gap-2">
										<span className="text-gray-400">vol {token.price}</span>
									</div>
								</div>
							</motion.div>
						</ScaleIn>
					))}
				</motion.div>
			</AnimatePresence>

			{/* Pagination */}
			<div className="mt-8 flex items-center justify-center gap-2">
				<Pagination>
					<PaginationContent>
						<PaginationItem>
							<PaginationPrevious href="#" />
						</PaginationItem>
						<PaginationItem>
							<PaginationLink href="#">1</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink
								href="#"
								isActive
								className={cn(
									"border-purple-500 bg-purple-500/20 hover:!bg-purple-500/20 border"
								)}
							>
								2
							</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink href="#">3</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationEllipsis />
						</PaginationItem>
						<PaginationItem>
							<PaginationNext href="#" />
						</PaginationItem>
					</PaginationContent>
				</Pagination>
			</div>
		</div>
	);
}
