"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Bot, Menu } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
	return (
		<motion.nav
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			className="flex items-center justify-between px-6 py-4 backdrop-blur-sm border-b border-white/10"
		>
			<Link href="/" className="flex items-center space-x-2">
				<Bot className="w-8 h-8 text-purple-500" />
				{/* <span className="text-white font-medium text-xl">ResearchAI</span> */}
				<span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
					EvoMind
				</span>
			</Link>

			<div className="hidden md:flex items-center space-x-4">
				<Button
					variant="ghost"
					className="text-white hover:text-purple-400 rounded-sm"
				>
					Sign In
				</Button>
				<Button className="bg-purple-600 hover:bg-purple-700 text-white !rounded-sm">
					Try Now
				</Button>
			</div>

			<Button variant="ghost" size="icon" className="md:hidden text-white">
				<Menu className="w-6 h-6" />
			</Button>
		</motion.nav>
	);
}
