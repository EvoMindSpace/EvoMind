"use client";

import { conversationApi } from "@/apis/conversation.api";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/contexts/auth-context";
import { cn } from "@/lib/utils";
import { TCreateConversation } from "@/types/conversation.type";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { X } from "lucide-react";
import Image from "next/image";
import * as React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as yup from "yup";

const schema = yup
	.object({
		message: yup.string().required("Message is required"),
		image: yup.mixed().required("Image is required"),
		agentName: yup.string().required("Agent Name is required"),
	})
	.required();

type FormData = yup.InferType<typeof schema>;

interface AddChatbotModalProps {
	isOpen: boolean;
	onClose: () => void;
	// onAddChatbot: (chatbot: {
	// 	user_id: number;
	// 	message: string;
	// 	image: string;
	// 	agentName: string;
	// 	conversation_id: number;
	// }) => void;
}

export function AddChatbotModal({
	isOpen,
	onClose,
}: // onAddChatbot,
AddChatbotModalProps) {
	const [imagePreview, setImagePreview] = React.useState<string | null>(null);
	const [mounted, setMounted] = React.useState<boolean>(false);
	const queryClient = useQueryClient();

	const { user } = useAuth();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		setValue,
	} = useForm<FormData>({
		resolver: yupResolver(schema),
	});

	const createConversation = useMutation({
		mutationKey: ["create-conversation"],
		mutationFn: (body: TCreateConversation) =>
			conversationApi.createConversation(body),
	});

	const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			if (file.size > 5 * 1024 * 1024) {
				alert("Image size must be less than 5MB");
				return;
			}
			const reader = new FileReader();
			reader.onloadend = () => {
				const result = reader.result as string;
				setImagePreview(result);
				setValue("image", result);
			};
			reader.readAsDataURL(file);
		}
	};

	const onSubmit = (data: FormData) => {
		createConversation.mutate(
			{
				...data,
				user_id: user?.id as number,
				conversation_id: 0,
				image: data.image as string,
			},
			{
				onError() {
					toast.error("Failed to create conversation");
				},
				onSuccess(data) {
					console.log("🚀 ~ onSuccess ~ data:", data);
					toast.success("Conversation created successfully");
					queryClient.invalidateQueries({
						queryKey: ["conversation"],
					});
				},
			}
		);

		// onAddChatbot({
		// 	message: data.message,
		// 	image: data.image as string,
		// 	agentName: data.agentName,
		// });
		reset();
		setImagePreview(null);
		onClose();
	};

	React.useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<Dialog open={mounted && isOpen} onOpenChange={onClose}>
			<DialogContent className="sm:max-w-[550px] border border-purple-500/20 bg-card [&>button]:text-white">
				{mounted && (
					<>
						<DialogHeader>
							<DialogTitle className="text-white">Add New Chatbot</DialogTitle>
							<DialogDescription>
								Fill in the details to create a new chatbot.
							</DialogDescription>
						</DialogHeader>
						<form
							onSubmit={handleSubmit(onSubmit)}
							className="space-y-4 text-white"
						>
							<div className="space-y-2">
								<Label className="text-white" htmlFor="agentName">
									Agent Name
								</Label>
								<Input
									id="agentName"
									{...register("agentName")}
									className={cn(
										"h-[3.5rem] placeholder:text-muted-foreground",
										{
											"border-red-500": errors.agentName,
										}
									)}
									placeholder="Enter agent name"
								/>
								{errors.agentName && (
									<p className="text-sm text-red-500">
										{errors.agentName.message}
									</p>
								)}
							</div>

							<div className="space-y-2">
								<Label className="text-white" htmlFor="message">
									Description
								</Label>
								<Textarea
									id="message"
									{...register("message")}
									className={cn("px-2 rounded-lg", {
										"border-red-500": errors.message,
									})}
									placeholder="Enter description"
								/>
								{errors.message && (
									<p className="text-sm text-red-500">
										{errors.message.message}
									</p>
								)}
							</div>

							<div className="space-y-2">
								<Label className="text-white" htmlFor="image">
									Avatar
								</Label>
								<div className="space-y-2">
									<Input
										id="image"
										type="file"
										accept="image/*"
										onChange={handleImageUpload}
										className={cn(
											" h-[3.5rem] file:mr-4 file:py-2 px-2 cursor-pointer text-muted-foreground rounded-lg file:px-2 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-primary file:text-primary-foreground hover:file:bg-primary/90",
											errors.image ? "border-red-500" : ""
										)}
									/>
									{imagePreview && (
										<div className="relative w-20 h-20">
											<Image
												src={imagePreview || "/placeholder.svg"}
												alt="Preview"
												className="w-full h-full object-cover rounded-md"
												width={80}
												height={80}
											/>
											<Button
												type="button"
												variant="ghost"
												size="icon"
												className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-purple-500 hover:bg-purple-500/80 text-destructive-foreground"
												onClick={() => {
													setImagePreview(null);
													setValue("image", "");
												}}
											>
												<X className="h-4 w-4" />
												<span className="sr-only">Remove image</span>
											</Button>
										</div>
									)}
									{errors.image && (
										<p className="text-sm text-red-500">
											{errors.image.message}
										</p>
									)}
								</div>
							</div>

							<div className="flex justify-end pt-4">
								<Button type="submit" disabled={createConversation.isPending}>
									{createConversation.isPending ? "Adding..." : "Add Chatbot"}
								</Button>
							</div>
						</form>
					</>
				)}
			</DialogContent>
		</Dialog>
	);
}
