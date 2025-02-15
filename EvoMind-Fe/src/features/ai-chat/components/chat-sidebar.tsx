"use client";

import { motion } from "framer-motion";
import { Plus, Search } from "lucide-react";
import * as React from "react";

import { conversationApi } from "@/apis/conversation.api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAuth } from "@/contexts/auth-context";
import { formatDate } from "@/lib/format-date.lib";
import { cn } from "@/lib/utils";
import { TConversation } from "@/types/conversation.type";
import { useQuery } from "@tanstack/react-query";
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

export function ChatSidebar({
	onSelectChatbot,
	activeChatbot,
}: {
	onSelectChatbot: (chatbot: TConversation) => void;
	activeChatbot: TConversation | null;
}) {
	const [search, setSearch] = React.useState("");
	const [isModalOpen, setIsModalOpen] = React.useState(false);
	const { user } = useAuth();

	const { data: conversations } = useQuery({
		queryKey: ["conversation"],
		queryFn: () => conversationApi.getAllConversation({ user_id: user?.id! }),
		enabled: !!user,
	});

	const filteredChatbots = React.useMemo(() => {
		return conversations?.filter((chatbot) =>
			chatbot.agentName.toLowerCase().includes(search.toLowerCase())
		);
	}, [conversations, search]);

	// set chatbot active
	React.useEffect(() => {
		if (!activeChatbot && filteredChatbots && filteredChatbots.length > 0) {
			onSelectChatbot(filteredChatbots[0]);
		}
	}, [activeChatbot, filteredChatbots, onSelectChatbot]);

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
				{filteredChatbots &&
					filteredChatbots.length > 0 &&
					filteredChatbots.map((chatbot, index) => (
						<motion.div
							key={chatbot.id}
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: index * 0.1 }}
							className={cn(
								"group relative mb-4 flex cursor-pointer gap-3 rounded-lg p-3 transition-colors",
								chatbot.id === activeChatbot?.id
									? "bg-primary/10"
									: "hover:bg-muted"
							)}
							onClick={() => onSelectChatbot(chatbot)}
						>
							<Image
								height={40}
								width={40}
								src={
									chatbot.image === "defaul"
										? "https://picsum.photos/536/354"
										: chatbot.image
								}
								alt={chatbot.agentName}
								className={cn(
									"h-10 w-10 rounded-full object-cover border",
									chatbot.id === activeChatbot?.id
										? "border-primary"
										: "border-muted"
								)}
								onError={(e: any) => {
									const target = e.target as HTMLImageElement;
									target.src = "/placeholder.svg";
									target.onerror = null; // Tránh vòng lặp vô hạn nếu placeholder cũng lỗi
								}}
							/>
							<div className="flex flex-1 flex-col overflow-hidden">
								<div className="flex items-center justify-between">
									<h3
										className={cn(
											"font-medium",
											chatbot.id === activeChatbot?.id
												? "text-primary"
												: "text-foreground"
										)}
									>
										{chatbot.agentName}
									</h3>
									<span className="text-xs text-muted-foreground">
										{formatDate(chatbot.createdAt)}
									</span>
								</div>
								<p className="truncate text-sm w-52 text-muted-foreground">
									{chatbot.lastMessage}
								</p>
							</div>
							{chatbot.id === activeChatbot?.id && (
								<div className="absolute right-2 top-2 h-2 w-2 rounded-full bg-primary" />
							)}
						</motion.div>
					))}
			</ScrollArea>

			<AddChatbotModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				// onAddChatbot={handleAddChatbot}
			/>
		</div>
	);
}
