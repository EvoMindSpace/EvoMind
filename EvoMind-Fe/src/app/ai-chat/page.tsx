"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Copy, Download, Send, ThumbsDown, ThumbsUp } from "lucide-react";
import { useState } from "react";

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

export default function AiChat({ selectedChatbot }: ChatbotProps) {
	const [input, setInput] = useState("");
	const [messages, setMessages] = useState<Message[]>([
		{
			role: "agent",
			content: `Hello, I am ${selectedChatbot?.name}. How can I assist you today?`,
			timestamp: "11:16:32 PM",
		},
	]);

	const handleSendMessage = () => {
		if (!input.trim()) return;

		const newMessage: Message = {
			role: "user",
			content: input,
			timestamp: new Date().toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit",
				second: "2-digit",
			}),
		};

		setMessages([...messages, newMessage]);
		setInput("");
	};

	return (
		<div className="flex-1 flex flex-col">
			<ScrollArea className="flex-1 px-4">
				<div className="max-w-3xl mx-auto py-4 space-y-4">
					{messages.map((message, index) => (
						<div
							key={index}
							className={cn(
								"flex gap-4",
								message.role === "user" ? "justify-end" : "justify-start"
							)}
						>
							<div
								className={cn(
									"flex gap-3 max-w-[80%]",
									message.role === "user" && "flex-row-reverse"
								)}
							>
								{message.role === "agent" && (
									<div className="h-8 w-8 rounded-full bg-primary flex-shrink-0 mt-2" />
								)}
								<div className="flex flex-col gap-1">
									<div
										className={cn(
											"flex items-center gap-2",
											message.role === "user" && "justify-end"
										)}
									>
										<span className="text-sm font-medium">
											{message.role === "agent" ? selectedChatbot?.name : "You"}
										</span>
										<span className="text-xs text-muted-foreground">
											{message.timestamp}
										</span>
									</div>
									<div
										className={cn(
											"p-3 rounded-lg text-sm",
											message.role === "agent"
												? "bg-muted/50"
												: "bg-primary text-primary-foreground"
										)}
									>
										{message.content}
									</div>
									{message.role === "agent" && (
										<div className="flex items-center gap-1 mt-1">
											<Button variant="ghost" size="icon" className="h-7 w-7">
												<Copy className="h-3.5 w-3.5" />
											</Button>
											<Button variant="ghost" size="icon" className="h-7 w-7">
												<Download className="h-3.5 w-3.5" />
											</Button>
											<Button variant="ghost" size="icon" className="h-7 w-7">
												<ThumbsUp className="h-3.5 w-3.5" />
											</Button>
											<Button variant="ghost" size="icon" className="h-7 w-7">
												<ThumbsDown className="h-3.5 w-3.5" />
											</Button>
										</div>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</ScrollArea>
			<div className="p-4 border-t bg-background border-secondary-300">
				<div className="max-w-3xl mx-auto flex gap-2">
					<Textarea
						placeholder="Type a message..."
						value={input}
						onChange={(e) => setInput(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === "Enter" && !e.shiftKey) {
								e.preventDefault();
								handleSendMessage();
							}
						}}
						className="min-h-[44px] max-h-32"
					/>
					<Button onClick={handleSendMessage} className="shrink-0">
						<Send className="h-4 w-4" />
					</Button>
				</div>
			</div>
		</div>
	);
}
