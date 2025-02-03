import { BellIcon, DiscIcon as DiscordIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";

export function Footer() {
	return (
		<footer className="bg-[#111111] pt-20 pb-8 px-4">
			<div className="container mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
					{/* Logo and Description */}
					<div>
						<div className="flex items-center gap-2 mb-6">
							{/* <Logo /> */}
							<span className="text-2xl font-bold">EvoMind</span>
						</div>
						<p className="text-gray-400 mb-6">
							Transform trending news into profitable meme opportunities. Join
							the community where journalism meets crypto culture.
						</p>
						<div className="flex gap-4">
							<Link
								href="#"
								className="text-gray-400 hover:text-primary transition-colors"
							>
								<TwitterIcon className="w-6 h-6" />
							</Link>
							<Link
								href="#"
								className="text-gray-400 hover:text-primary transition-colors"
							>
								<DiscordIcon className="w-6 h-6" />
							</Link>
						</div>
					</div>

					{/* Navigation */}
					<div>
						<h3 className="text-lg font-bold mb-6">NAVIGATION</h3>
						<ul className="space-y-4">
							{["Features", "Airdrop", "How it Works", "Contract Flow"].map(
								(item) => (
									<li key={item}>
										<Link
											href="#"
											className="text-gray-400 hover:text-primary transition-colors"
										>
											{item}
										</Link>
									</li>
								)
							)}
						</ul>
					</div>

					{/* Join Community */}
					<div>
						<h3 className="text-lg font-bold mb-6">JOIN OUR COMMUNITY</h3>
						<p className="text-gray-400 mb-6">
							Get early access and be part of our journey
						</p>
						<button className="w-full bg-[#1A1A1A] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#222222] transition-colors inline-flex items-center justify-center gap-2">
							<BellIcon className="w-5 h-5" />
							Get Launch Alert
						</button>
						<p className="text-gray-500 text-sm mt-4">
							By joining, you agree to receive updates about EvoMind. You can
							unsubscribe at any time.
						</p>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
					<div className="text-gray-500 text-sm">
						© 2024 EvoMind - All rights reserved.
					</div>
					<div className="flex gap-6">
						<Link
							href="#"
							className="text-gray-500 hover:text-primary text-sm transition-colors"
						>
							Testnet Terms
						</Link>
						<Link
							href="#"
							className="text-gray-500 hover:text-primary text-sm transition-colors"
						>
							Guidelines
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
