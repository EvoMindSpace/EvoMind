"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChatInterface } from "@/features/ai-chat/components/chat-interface";
import { ChatSidebar } from "@/features/ai-chat/components/chat-sidebar";
import { TConversation } from "@/types/conversation.type";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
interface Message {
	role: "agent" | "user";
	content: string;
	timestamp: string;
}

interface ChatbotProps {
	selectedChatbot: {
		id: number;
		name: string;
	};
}

export default function AiChat() {
	const [isMobile, setIsMobile] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [activeChatbot, setActiveChatbot] = useState<TConversation | null>(
		null
	); // Mặc định là chatbot đầu tiên

	useEffect(() => {
		const checkIfMobile = () => setIsMobile(window.innerWidth < 768);
		checkIfMobile();
		window.addEventListener("resize", checkIfMobile);
		return () => window.removeEventListener("resize", checkIfMobile);
	}, []);

	const handleSelectChatbot = (chatbot: TConversation) => {
		setActiveChatbot(chatbot);
		setIsOpen(false);
	};

	return (
		<div className="flex h-[calc(100vh-72px)] bg-black">
			{isMobile ? (
				<Sheet open={isOpen} onOpenChange={setIsOpen}>
					<SheetTrigger asChild>
						<Button
							variant="ghost"
							size="icon"
							className="absolute top-4 left-4 z-50 md:hidden"
						>
							<Menu className="h-6 w-6" />
						</Button>
					</SheetTrigger>
					<SheetContent side="left" className="p-0 w-80">
						<ChatSidebar
							onSelectChatbot={handleSelectChatbot}
							activeChatbot={activeChatbot}
						/>
					</SheetContent>
				</Sheet>
			) : (
				<div className="hidden md:block border-r border-secondary-300">
					<ChatSidebar
						onSelectChatbot={handleSelectChatbot}
						activeChatbot={activeChatbot}
					/>
				</div>
			)}
			<div className="flex-1 flex flex-col">
				<ChatInterface activeChatbot={activeChatbot} />
			</div>
		</div>
	);
}
