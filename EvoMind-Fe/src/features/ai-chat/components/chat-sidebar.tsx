"use client";

import { motion } from "framer-motion";
import { Plus, Search } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { AddChatbotModal } from "./add-chatbot-modal";

interface Message {
	id: string;
	avatar: string;
	title: string;
	message: string;
	timestamp: string;
}

interface Chatbot {
	id: string;
	avatar: string;
	title: string;
	message: string;
	timestamp: string;
}
const initialChatbots: Chatbot[] = [
	{
		id: "1",
		avatar:
			"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8im49C2rmianu5yxZ7lToR71b6sFe4.png",
		title: "Holo Charactersdsf",
		message: "Hey there, I am Holov asd! How are you?",
		timestamp: "Just now",
	},
	{
		id: "2",
		avatar:
			"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8im49C2rmianu5yxZ7lToR71b6sFe4.png",
		title: "Holo Character",
		message: "Ah, a cheerful greeting! I like it. What's on your mind...",
		timestamp: "1d",
	},
];
export function ChatSidebar({
	onSelectChatbot,
	activeChatbotId,
}: {
	onSelectChatbot: (id: string) => void;
	activeChatbotId: string;
}) {
	const [search, setSearch] = React.useState("");
	const [chatbots, setChatbots] = React.useState<Chatbot[]>(initialChatbots);
	const [isModalOpen, setIsModalOpen] = React.useState(false);

	const filteredChatbots = chatbots.filter((chatbot) =>
		chatbot.title.toLowerCase().includes(search.toLowerCase())
	);

	const handleAddChatbot = (newChatbot: {
		user_id: number;
		message: string;
		image: string;
		agentName: string;
		conversation_id: number;
	}) => {
		const chatbot: Chatbot = {
			id: Date.now().toString(),
			avatar: newChatbot.image,
			title: newChatbot.agentName,
			message: newChatbot.message,
			timestamp: "Just now",
		};
		setChatbots([...chatbots, chatbot]);
	};

	return (
		<div className="flex h-full w-full md:w-80 flex-col bg-card text-zinc-200">
			<header className="flex items-center justify-between p-4">
				<motion.h1
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					className="text-2xl font-bold tracking-wider"
				>
					chat.
				</motion.h1>
				<Button
					size="icon"
					variant="ghost"
					className="text-zinc-400 hover:text-zinc-200"
					onClick={() => setIsModalOpen(true)}
				>
					<Plus className="h-5 w-5" />
				</Button>
			</header>

			<div className="px-4 pb-2">
				<div className="relative">
					<Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
					<Input
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						className="w-full bg-zinc-900 pl-9 text-sm text-zinc-200 placeholder:text-zinc-500 focus-visible:ring-zinc-700"
						placeholder="Search Here"
					/>
				</div>
			</div>

			<ScrollArea className="flex-1 px-4">
				{filteredChatbots.map((chatbot, index) => (
					<motion.div
						key={chatbot.id}
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: index * 0.1 }}
						className={cn(
							"group relative mb-4 flex cursor-pointer gap-3 rounded-lg p-3 transition-colors",
							chatbot.id === activeChatbotId
								? "bg-primary/10"
								: "hover:bg-muted"
						)}
						onClick={() => onSelectChatbot(chatbot.id)}
					>
						<Image
							height={40}
							width={40}
							src={chatbot.avatar || "/placeholder.svg"}
							alt={chatbot.title}
							className={cn(
								"h-10 w-10 rounded-full object-cover border",
								chatbot.id === activeChatbotId
									? "border-primary"
									: "border-muted"
							)}
						/>
						<div className="flex flex-1 flex-col overflow-hidden">
							<div className="flex items-center justify-between">
								<h3
									className={cn(
										"font-medium",
										chatbot.id === activeChatbotId
											? "text-primary"
											: "text-foreground"
									)}
								>
									{chatbot.title}
								</h3>
								<span className="text-xs text-muted-foreground">
									{chatbot.timestamp}
								</span>
							</div>
							<p className="truncate text-sm w-52 text-muted-foreground">
								{chatbot.message}
							</p>
						</div>
						{chatbot.id === activeChatbotId && (
							<div className="absolute right-2 top-2 h-2 w-2 rounded-full bg-primary" />
						)}
					</motion.div>
				))}
			</ScrollArea>

			<AddChatbotModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				onAddChatbot={handleAddChatbot}
			/>
		</div>
	);
}
