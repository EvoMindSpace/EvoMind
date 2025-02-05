"use client";

import { SparklesCore } from "@/components/sparkles";
import { motion } from "framer-motion";
import {
	BarChart,
	ClipboardCheck,
	Code2,
	GraduationCap,
	Lightbulb,
	Palette,
	PenTool,
	Rocket,
	Search,
	Type,
	Users,
} from "lucide-react";

const topSteps = [
	{
		icon: Lightbulb,
		title: "Planning",
		items: [
			"Planning questionnaire",
			"Scoping the work",
			"Stakeholder interviews",
		],
	},
	{
		icon: Palette,
		title: "UI/UX Design",
		items: ["Persona development", "Task list creation", "Wireframing"],
	},
	{
		icon: PenTool,
		title: "Design",
		items: [
			"Design multiple site concepts",
			"Create iterations on concepts",
			"Design supporting graphics",
		],
	},
	{
		icon: ClipboardCheck,
		title: "Testing",
		items: ["Browser testing", "User testing", "Device testing"],
	},
	{
		icon: GraduationCap,
		title: "Training",
		items: ["On-site or phone sessions", "Virtual training resources"],
	},
	{
		icon: Users,
		title: "Support",
		items: ["Bug fixes", "Website maintenance", "Support changes"],
	},
];

const bottomSteps = [
	{
		icon: Search,
		title: "Research",
		items: ["Review of current state", "Competitive review", "Brand review"],
	},
	{
		icon: Type,
		title: "Content & Messaging",
		items: [
			"Review current material",
			"Content migration strategy",
			"New content & messaging",
		],
	},
	{
		icon: Code2,
		title: "Website Development",
		items: [
			"Create test instance",
			"Front-end development",
			"Back-end development",
		],
	},
	{
		icon: Rocket,
		title: "Site Launch",
		items: ["Migration", "Deployment", "Testing"],
	},
	{
		icon: BarChart,
		title: "Evaluation",
		items: [
			"Assess success against goals",
			"Review recommendations",
			"Discuss future work",
		],
	},
];

export function ProcessTimeline() {
	return (
		<div className="py-20 px-4 bg-black/[0.96] relative">
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
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className="text-4xl md:text-5xl font-bold text-center mb-20 text-white"
			>
				WEBSITE DESIGN & DEV PROCESS
			</motion.h2>

			<div className="relative max-w-7xl mx-auto">
				{/* Main Timeline Line */}
				<div className="absolute left-0 right-0 top-1/2 h-1 bg-card -translate-y-1/2" />

				{/* Top Row */}
				<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-32">
					{topSteps.map((step, index) => (
						<motion.div
							key={step.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className="relative"
						>
							<div className="absolute bottom-0 left-1/2 w-px h-16 bg-card translate-x-[-50%]" />
							<div className="text-center">
								<div className="w-16 h-16 rounded-full bg-card flex items-center justify-center mx-auto mb-4">
									<step.icon className="w-8 h-8 text-[#722ED1]" />
								</div>
								<h3 className="text-lg font-bold mb-4">{step.title}</h3>
								<ul className="text-sm text-gray-600 space-y-2">
									{step.items.map((item) => (
										<li key={item}>{item}</li>
									))}
								</ul>
							</div>
						</motion.div>
					))}
				</div>

				{/* Bottom Row */}
				<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
					{bottomSteps.map((step, index) => (
						<motion.div
							key={step.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: (index + topSteps.length) * 0.1 }}
							className="relative"
						>
							<div className="absolute top-0 left-1/2 w-px h-16 bg-card translate-x-[-50%]" />
							<div className="text-center pt-20">
								<div className="w-16 h-16 rounded-full bg-card flex items-center justify-center mx-auto mb-4">
									<step.icon className="w-8 h-8 text-[#722ED1]" />
								</div>
								<h3 className="text-lg font-bold mb-4">{step.title}</h3>
								<ul className="text-sm text-gray-600 space-y-2">
									{step.items.map((item) => (
										<li key={item}>{item}</li>
									))}
								</ul>
							</div>
						</motion.div>
					))}
				</div>

				{/* Start and End Arrows */}
				<div className="absolute left-[-40px] top-1/2 -translate-y-1/2">
					<div className="w-8 h-8 rounded-full border-2 border-[#722ED1] flex items-center justify-center">
						<div className="w-3 h-3 border-t-2 border-r-2 border-[#722ED1] rotate-45 translate-x-[-2px]" />
					</div>
				</div>
				<div className="absolute right-[-40px] top-1/2 -translate-y-1/2">
					<div className="w-8 h-8 rounded-full border-2 border-[#722ED1] flex items-center justify-center">
						<div className="w-3 h-3 border-b-2 border-l-2 border-[#722ED1] rotate-45 translate-x-[2px]" />
					</div>
				</div>
			</div>
		</div>
	);
}
