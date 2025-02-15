"use client";

import { ArrowUp, Loader2, Menu } from "lucide-react";
import * as React from "react";

import { conversationApi } from "@/apis/conversation.api";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/contexts/auth-context";
import { cn } from "@/lib/utils";
import { TConversation, TCreateConversation } from "@/types/conversation.type";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import Image from "next/image";
import { toast } from "sonner";
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

export function ChatInterface({
	activeChatbot,
}: {
	activeChatbot: TConversation | null;
}) {
	const queryClient = useQueryClient();
	const [input, setInput] = React.useState("");
	const [isTyping, setIsTyping] = React.useState(false);
	const { user } = useAuth();

	const createConversation = useMutation({
		mutationKey: ["send-conversation"],
		mutationFn: (body: TCreateConversation) =>
			conversationApi.createConversation(body),
	});

	const lastMessageRef = React.useRef<HTMLDivElement>(null);
	const scrollAreaRef = React.useRef<HTMLDivElement>(null);
	const textareaRef = React.useRef<HTMLTextAreaElement>(null);

	const { data: conversation } = useQuery({
		queryKey: ["conversation", activeChatbot?.id],
		queryFn: () =>
			conversationApi.getConversationById({
				conversation_id: activeChatbot?.id!,
			}),
		enabled: !!activeChatbot?.id,
	});

	const filteredMessages = conversation || [];
	const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			handleSubmit(e);
		}
	};

	const handleSubmit = (e: React.FormEvent | React.KeyboardEvent) => {
		e.preventDefault();
		if (!input.trim()) return;
		setIsTyping(true);
		const newMessage: TCreateConversation = {
			user_id: user?.id!,
			message: input.trim(),
			image: activeChatbot?.image ?? "",
			agentName: activeChatbot?.agentName ?? "",
			conversation_id: activeChatbot?.id!,
		};
		createConversation.mutate(newMessage, {
			onSuccess(data) {
				setIsTyping(false);
				queryClient.invalidateQueries({
					queryKey: ["conversation", activeChatbot?.id],
				});
			},
			onError(error) {
				setIsTyping(false);
				toast.error("Error when sending message!");
			},
		});
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

	React.useEffect(() => {
		if (lastMessageRef.current) {
			lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [filteredMessages, isTyping]);

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
								activeChatbot={activeChatbot}
							/>
						</SheetContent>
					</Sheet>
					<Image
						height={32}
						width={32}
						src={activeChatbot?.image ?? ""}
						alt="Holo Character"
						className="h-8 w-8 md:h-10 md:w-10 rounded-full object-cover"
					/>
					<h1 className="text-base md:text-lg font-semibold text-zinc-200">
						{activeChatbot?.agentName}
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
								message.isQuestion ? "flex-row-reverse" : "flex-row"
							)}
							ref={
								index === filteredMessages.length - 1 ? lastMessageRef : null
							}
						>
							<Image
								src={
									message.isQuestion
										? message.conversation.user.img
										: message.conversation.image
								}
								alt={message.conversation.user.username}
								className="h-6 w-6 md:h-8 md:w-8 rounded-full object-cover border border-primary"
								height={32}
								width={32}
							/>
							<div
								className={cn(
									"max-w-[75%] md:max-w-[80%] rounded-lg px-3 py-2 md:px-4 md:py-2 text-xs md:text-sm",
									message.isQuestion
										? "bg-primary text-primary-foreground"
										: "bg-secondary text-secondary-foreground"
								)}
							>
								{message.message}
							</div>
						</motion.div>
					))}

					{isTyping && (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							className="flex gap-2 md:gap-3"
							ref={lastMessageRef}
						>
							<Image
								src={activeChatbot?.image ?? ""}
								alt={activeChatbot?.agentName ?? ""}
								className="h-6 w-6 md:h-8 md:w-8 rounded-full object-cover border border-primary"
								height={32}
								width={32}
							/>
							<div className="bg-secondary text-secondary-foreground rounded-lg px-3 py-2 md:px-4 md:py-2">
								<motion.div
									className="flex gap-1"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1 }}
								>
									<span className="h-1.5 w-1.5 bg-current rounded-full" />
									<span className="h-1.5 w-1.5 bg-current rounded-full" />
									<span className="h-1.5 w-1.5 bg-current rounded-full" />
								</motion.div>
							</div>
						</motion.div>
					)}
				</div>
			</ScrollArea>

			<div className="border-t border-border bg-background/80 backdrop-blur-sm p-3 md:p-4">
				<form
					// onSubmit={handleSubmit}
					className="relative"
				>
					<Textarea
						ref={textareaRef}
						value={input}
						onChange={(e) => setInput(e.target.value)}
						onKeyDown={handleKeyDown}
						placeholder={`Message ${activeChatbot?.agentName}...`}
						className="min-h-[40px] md:min-h-[48px] max-h-[160px] md:max-h-[200px] w-full resize-none rounded-lg bg-muted px-3 py-2 md:px-4 md:py-3 pr-10 md:pr-12 text-xs md:text-sm text-foreground placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-primary overflow-y-auto"
						rows={1}
					/>
					<Button
						type="submit"
						size="icon"
						className="absolute right-1 md:right-2 top-1 md:top-1.5 h-6 w-6 md:h-8 md:w-8 bg-primary hover:bg-primary/90 text-primary-foreground"
						disabled={!input.trim() || createConversation.isPending}
					>
						{createConversation.isPending ? (
							<Loader2 className="h-3 w-3 md:h-4 md:w-4 animate-spin" />
						) : (
							<ArrowUp className="h-3 w-3 md:h-4 md:w-4" />
						)}
						<span className="sr-only">Send message</span>
					</Button>
				</form>
			</div>
		</div>
	);
}
