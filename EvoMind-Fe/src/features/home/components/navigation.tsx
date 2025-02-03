"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "/public/image.png";

const Navigation = () => {
	return (
		<motion.nav
			className="fixed top-0 left-0 right-0 z-50 bg-secondary-400/80 backdrop-blur-sm"
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<div className="container mx-auto px-4 py-4 flex justify-between items-center">
				<Image
					src={Logo}
					alt="EvoMind Logo"
					width={40}
					height={40}
					className="bg-primary rounded-lg !h-10 !w-10 object-cover"
				/>
				{/* <div className="h-10 w-10 rounded-lg bg-primary">Logo</div> */}
				<button className="px-6 py-2 rounded-full border border-primary-300 text-primary-300 hover:bg-primary-300 hover:text-secondary-400 transition-colors duration-300">
					Connect Wallet
				</button>
			</div>
		</motion.nav>
	);
};

export default Navigation;
