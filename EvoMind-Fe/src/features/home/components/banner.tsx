import { FadeInWhenVisible, ScaleIn } from "@/components/animation";
import Badge from "@/components/badge";
import { Newspaper } from "lucide-react";

const Banner = () => {
	return (
		<section className="pt-32 pb-20 px-4 relative">
			<div className="container mx-auto max-w-6xl text-center relative z-10">
				<FadeInWhenVisible>
					<div className="flex items-center justify-center mb-8">
						<Badge icon={Newspaper}>The Future of Agent AI</Badge>
					</div>
				</FadeInWhenVisible>

				<FadeInWhenVisible>
					<h1 className="text-center text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight -tracking-tighter">
						<span className="text-gray-300">
							Revolutionizing Memecoins with
						</span>
						<span className="text-primary-400">Agent AI</span>
					</h1>
				</FadeInWhenVisible>

				<FadeInWhenVisible>
					<p className="text-xl text-secondary-100 mb-12 max-w-2xl mx-auto">
						Join our community and shape the future of AI-driven meme
						investments on the blockchain.
					</p>
				</FadeInWhenVisible>

				{/* <ScaleIn>
					<div className="relative mt-20 mx-auto max-w-4xl aspect-[16/9] rounded-xl overflow-hidden bg-transparent shadow-2xl">
						<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
					</div>
				</ScaleIn> */}

				<ScaleIn>
					<div className="mt-10">
						<button className="bg-primary-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-primary-700 transition-colors duration-300 mr-4">
							Get Started
						</button>
						<button className="bg-secondary-300 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-secondary-200 transition-colors duration-300">
							Learn More
						</button>
					</div>
				</ScaleIn>
			</div>

			{/* Background decoration */}
			<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-600 rounded-full opacity-10 blur-3xl"></div>
				<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-400 rounded-full opacity-10 blur-3xl"></div>
				<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-800 rounded-full opacity-10 blur-3xl"></div>
			</div>
		</section>
	);
};

export default Banner;
