import { Bot } from "lucide-react";
import Link from "next/link";

export default function Header() {
	return (
		<header className="flex justify-between items-center p-4 bg-card border-b border-secondary-300">
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
				<button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-600 transition-colors">
					CONNECT
				</button>
				<div className="bg-primary-light text-primary rounded-full px-2 py-1">
					0.0
				</div>
				<div className="w-8 h-8 bg-secondary-200 rounded-full"></div>
			</div>
		</header>
	);
}
