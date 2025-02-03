// "use client";

import { Footer } from "@/components/footer";
import AirdropProgram from "@/features/home/components/airdrop-program";
import Banner from "@/features/home/components/banner";
import ContractFlow from "@/features/home/components/contract-flow";
import { CTASection } from "@/features/home/components/cta-section";
import HowItWork from "@/features/home/components/how-it-work";
import Navigation from "@/features/home/components/navigation";
import PlatformFeatures from "@/features/home/components/platform-features";
import { ProcessTimeline } from "@/features/home/components/process-timeline";
export default function Home() {
	return (
		// <div className="min-h-screen bg-[#111111] text-white">
		<div className="bg-secondary-400 min-h-screen text-white relative overflow-hidden scrollbar-hide">
			{/* Navigation */}
			<Navigation />

			{/* Hero Section */}
			<Banner />

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
		</div>
	);
}
