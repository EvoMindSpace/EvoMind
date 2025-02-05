"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, Settings } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Thêm danh sách các AI chatbot mẫu
const chatbots = [
	{ id: 1, name: "GeneralAI" },
	{ id: 2, name: "CustomerServiceAI" },
	{ id: 3, name: "TechnicalSupportAI" },
	{ id: 4, name: "SalesAI" },
];

export default function LayoutAiChat({
	children,
}: {
	children: React.ReactNode;
}) {
	const [selectedChatbot, setSelectedChatbot] = useState(chatbots[0]);

	return (
		<div className="flex h-screen bg-card text-white">
			{/* Sidebar */}
			<div className="w-64 border-r bg-muted/10 border-secondary">
				{/* <div className="p-4 border-b">
					<div className="flex items-center justify-between">
						<span className="font-semibold">AI Chatbots</span>
						<Button variant="ghost" size="icon">
							<Plus className="h-4 w-4" />
						</Button>
					</div>
				</div> */}
				<div className="flex items-center p-4 border-b border-secondary-300">
					<Link href="/" className="flex items-center space-x-2">
						<Bot className="w-8 h-8 text-purple-500" />
						{/* <span className="text-white font-medium text-xl">ResearchAI</span> */}
						<span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
							EvoMind
						</span>
					</Link>
				</div>
				<ScrollArea className="h-[calc(100vh-64px)]">
					<div className="space-y-2 p-2">
						{chatbots.map((chatbot) => (
							<Button
								key={chatbot.id}
								variant={
									selectedChatbot.id === chatbot.id ? "secondary" : "ghost"
								}
								className="w-full justify-start"
								onClick={() => setSelectedChatbot(chatbot)}
							>
								<Bot className="mr-2 h-4 w-4" />
								{chatbot.name}
							</Button>
						))}
					</div>
				</ScrollArea>
			</div>

			{/* Main Content */}
			<div className="flex-1 flex flex-col">
				{/* Header */}
				<header className="h-14 border-b border-secondary-300 px-4 flex items-center justify-between">
					<h1 className="text-sm font-medium">{selectedChatbot.name}</h1>
					<Button variant="ghost" size="icon">
						<Settings className="h-4 w-4" />
					</Button>
				</header>
				{children}
			</div>
		</div>
	);
}
