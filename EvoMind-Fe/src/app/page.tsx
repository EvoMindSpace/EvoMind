"use client";

import { Footer } from "@/components/footer";
import { SparklesCore } from "@/components/sparkles";
import AirdropProgram from "@/features/home/components/airdrop-program";
import ContractFlow from "@/features/home/components/contract-flow";
import { CTASection } from "@/features/home/components/cta-section";
import Hero from "@/features/home/components/hero";
import HowItWork from "@/features/home/components/how-it-work";
import Navigation from "@/features/home/components/navigation";
import PlatformFeatures from "@/features/home/components/platform-features";
import { ProcessTimeline } from "@/features/home/components/process-timeline";
export default function Home() {
	return (
		// <div className="min-h-screen bg-[#111111] text-white">
		<main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] overflow-hidden">
			{/* Ambient background with moving particles */}
			<div className="relative">
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

				<div className="relative z-10">
					<Navigation />
					<Hero />
				</div>
			</div>

			{/* Platform Features Section */}
			<PlatformFeatures />

			{/* Airdrop Program Section */}
			<AirdropProgram />

			{/* how it works */}
			<HowItWork />

			{/* Contract Flow */}
			<ContractFlow />

			{/* CTA Section */}
			<CTASection />

			{/* Process Timeline */}
			<ProcessTimeline />

			{/* Footer */}
			<Footer />
		</main>
	);
}
