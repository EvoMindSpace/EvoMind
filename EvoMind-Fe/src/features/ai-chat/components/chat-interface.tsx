"use client";

import { motion } from "framer-motion";
import { ArrowUp, Menu } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ChatSidebar } from "./chat-sidebar";

interface Message {
	id: string;
	content: string;
	sender: "bot" | "user";
	avatar: string;
	username: string;
	chatbotId: string;
}

interface Chatbot {
	id: string;
	avatar: string;
	title: string;
}

const initialChatbots: Chatbot[] = [
	{
		id: "1",
		avatar:
			"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8im49C2rmianu5yxZ7lToR71b6sFe4.png",
		title: "Holo Charactersdsf",
	},
	{
		id: "2",
		avatar:
			"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8im49C2rmianu5yxZ7lToR71b6sFe4.png",
		title: "Holo Character",
	},
];

const initialMessages: Message[] = [
	{
		id: "1",
		content: "Hey there, I am Holov asd! How are you?",
		sender: "bot",
		avatar:
			"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8im49C2rmianu5yxZ7lToR71b6sFe4.png",
		username: "Holo Charactersdsf",
		chatbotId: "1",
	},
	{
		id: "2",
		content: "vaan xin chào",
		sender: "user",
		avatar: "/placeholder.svg",
		username: "User",
		chatbotId: "1",
	},
	{
		id: "3",
		content: "Chào bạn! Thế nào rồi? Có điều gì thú vị muốn chia sẻ không?",
		sender: "bot",
		avatar:
			"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8im49C2rmianu5yxZ7lToR71b6sFe4.png",
		username: "Holo Character",
		chatbotId: "2",
	},
	{
		id: "4",
		content: "khoong",
		sender: "user",
		avatar: "/placeholder.svg",
		username: "User",
		chatbotId: "2",
	},
	{
		id: "5",
		content:
			"Không sao cả! Đôi khi im lặng cũng là một cách thú vị để thưởng thức cuộc sống. Có điều gì khác bạn muốn làm hay hỏi không?",
		sender: "bot",
		avatar:
			"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8im49C2rmianu5yxZ7lToR71b6sFe4.png",
		username: "Holo Character",
		chatbotId: "2",
	},
];

export function ChatInterface({
	activeChatbotId,
}: {
	activeChatbotId: string;
}) {
	const [messages, setMessages] = React.useState<Message[]>(initialMessages);
	const [input, setInput] = React.useState("");
	const activeChatbot =
		initialChatbots.find((chatbot) => chatbot.id === activeChatbotId) ||
		initialChatbots[0];
	const scrollAreaRef = React.useRef<HTMLDivElement>(null);
	const textareaRef = React.useRef<HTMLTextAreaElement>(null);

	const filteredMessages = messages.filter(
		(message) => message.chatbotId === activeChatbotId
	);

	const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			handleSubmit(e);
		}
	};

	const handleSubmit = (e: React.FormEvent | React.KeyboardEvent) => {
		e.preventDefault();
		if (!input.trim()) return;
		const newMessage: Message = {
			id: Date.now().toString(),
			content: input.trim(),
			sender: "user",
			avatar: "/placeholder.svg",
			username: "User",
			chatbotId: activeChatbotId,
		};
		setMessages((prevMessages) => [...prevMessages, newMessage]);
		setInput("");
	};

	const adjustTextareaHeight = React.useCallback(() => {
		const textarea = textareaRef.current;
		if (textarea) {
			textarea.style.height = "inherit";
			textarea.style.height = `${textarea.scrollHeight}px`;
		}
	}, []);

	React.useEffect(() => {
		adjustTextareaHeight();
	}, [adjustTextareaHeight]);

	React.useEffect(() => {
		if (scrollAreaRef.current) {
			scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
		}
	}, [scrollAreaRef]); //Corrected dependency

	return (
		<div className="flex h-screen flex-col bg-card">
			<header className="flex items-center justify-between border-b border-secondary-300 px-4 py-3 md:px-6 md:py-4">
				<div className="flex items-center gap-3">
					<Sheet>
						<SheetTrigger asChild>
							<Button variant="ghost" size="icon" className="md:hidden">
								<Menu className="h-5 w-5" />
							</Button>
						</SheetTrigger>
						<SheetContent side="left" className="p-0 w-80">
							<ChatSidebar
								onSelectChatbot={() => {}}
								activeChatbotId={activeChatbotId}
							/>
						</SheetContent>
					</Sheet>
					<Image
						height={32}
						width={32}
						src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8im49C2rmianu5yxZ7lToR71b6sFe4.png"
						alt="Holo Character"
						className="h-8 w-8 md:h-10 md:w-10 rounded-full object-cover"
					/>
					<h1 className="text-base md:text-lg font-semibold text-zinc-200">
						Holo Charactersdsf
					</h1>
				</div>
			</header>

			<ScrollArea ref={scrollAreaRef} className="flex-1 p-3 md:p-4">
				<div className="space-y-4">
					{filteredMessages.map((message, index) => (
						<motion.div
							key={message.id}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 }}
							className={cn(
								"flex gap-2 md:gap-3",
								message.sender === "user" ? "flex-row-reverse" : "flex-row"
							)}
						>
							<img
								src={message.avatar || "/placeholder.svg"}
								alt={message.username}
								className="h-6 w-6 md:h-8 md:w-8 rounded-full object-cover border border-primary"
							/>
							<div
								className={cn(
									"max-w-[75%] md:max-w-[80%] rounded-lg px-3 py-2 md:px-4 md:py-2 text-xs md:text-sm",
									message.sender === "user"
										? "bg-primary text-primary-foreground"
										: "bg-secondary text-secondary-foreground"
								)}
							>
								{message.content}
							</div>
						</motion.div>
					))}
				</div>
			</ScrollArea>

			<div className="border-t border-border bg-background/80 backdrop-blur-sm p-3 md:p-4">
				<form onSubmit={handleSubmit} className="relative">
					<Textarea
						ref={textareaRef}
						value={input}
						onChange={(e) => setInput(e.target.value)}
						onKeyDown={handleKeyDown}
						placeholder={`Message ${activeChatbot.title}...`}
						className="min-h-[40px] md:min-h-[48px] max-h-[160px] md:max-h-[200px] w-full resize-none rounded-lg bg-muted px-3 py-2 md:px-4 md:py-3 pr-10 md:pr-12 text-xs md:text-sm text-foreground placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-primary overflow-y-auto"
						rows={1}
					/>
					<Button
						type="submit"
						size="icon"
						className="absolute right-1 md:right-2 top-1 md:top-1.5 h-6 w-6 md:h-8 md:w-8 bg-primary hover:bg-primary/90 text-primary-foreground"
						disabled={!input.trim()}
					>
						<ArrowUp className="h-3 w-3 md:h-4 md:w-4" />
						<span className="sr-only">Send message</span>
					</Button>
				</form>
			</div>
		</div>
	);
}
