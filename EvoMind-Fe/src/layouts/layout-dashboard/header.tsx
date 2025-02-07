import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Bot, Wallet } from "lucide-react";
import Link from "next/link";

export default function Header() {
	return (
		<header className="flex justify-between items-center p-4 bg-card border-b border-secondary-300 h-[72px] sticky top-0 z-10">
			<div className="flex items-center">
				<Link href="/" className="flex items-center space-x-2">
					<Bot className="w-8 h-8 text-purple-500" />

					{/* <span className="text-white font-medium text-xl">ResearchAI</span> */}
					<span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
						EvoMind
					</span>
				</Link>
			</div>
			<div className="flex items-center space-x-4">
				<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
					<Button
						variant="outline"
						className="text-white border-purple-500 hover:bg-purple-500/20"
					>
						<Wallet className="mr-2 h-5 w-5" />
						Connect Wallet
					</Button>
				</motion.div>

				<div className="w-8 h-8 bg-secondary-200 rounded-full"></div>
			</div>
		</header>
	);
}
