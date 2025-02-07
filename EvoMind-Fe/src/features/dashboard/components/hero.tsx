"use client";

import { FadeInWhenVisible } from "@/components/animation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
	return (
		<FadeInWhenVisible>
			<div className="my-16 text-center">
				<motion.h1
					className="mb-8 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					Discover The Next Trending Token
					<br />
					Before{" "}
					<motion.span
						className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.5 }}
					>
						Everyone Else!
					</motion.span>
				</motion.h1>
				<motion.div
					className="flex flex-wrap items-center justify-center gap-4"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.7 }}
				>
					<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
						<Button className="bg-purple-600 hover:bg-purple-700">
							Launch your token
						</Button>
					</motion.div>
					<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
						<Button
							variant="outline"
							className="text-white border-purple-500 hover:bg-purple-500/20"
						>
							How does it work?
						</Button>
					</motion.div>
				</motion.div>
			</div>
		</FadeInWhenVisible>
	);
}
