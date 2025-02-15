"use client";

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
import { cn } from "@/lib/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { X } from "lucide-react";
import Image from "next/image";
import * as React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup
	.object({
		user_id: yup
			.number()
			.required("User ID is required")
			.min(0, "User ID must be positive"),
		message: yup.string().required("Message is required"),
		image: yup.mixed().required("Image is required"),
		agentName: yup.string().required("Agent Name is required"),
		conversation_id: yup
			.number()
			.required("Conversation ID is required")
			.min(0, "Conversation ID must be positive"),
	})
	.required();

type FormData = yup.InferType<typeof schema>;

interface AddChatbotModalProps {
	isOpen: boolean;
	onClose: () => void;
	onAddChatbot: (chatbot: {
		user_id: number;
		message: string;
		image: string;
		agentName: string;
		conversation_id: number;
	}) => void;
}

export function AddChatbotModal({
	isOpen,
	onClose,
	onAddChatbot,
}: AddChatbotModalProps) {
	const [imagePreview, setImagePreview] = React.useState<string | null>(null);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		setValue,
	} = useForm<FormData>({
		resolver: yupResolver(schema),
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
		onAddChatbot({
			user_id: data.user_id,
			message: data.message,
			image: data.image as string,
			agentName: data.agentName,
			conversation_id: data.conversation_id,
		});
		reset();
		setImagePreview(null);
		onClose();
	};

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className="sm:max-w-[550px] border border-purple-500/20 bg-card [&>button]:text-white">
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
							className={cn("h-[3.5rem] placeholder:text-muted-foreground", {
								"border-red-500": errors.agentName,
							})}
							placeholder="Enter agent name"
						/>
						{errors.agentName && (
							<p className="text-sm text-red-500">{errors.agentName.message}</p>
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
							<p className="text-sm text-red-500">{errors.message.message}</p>
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
								<p className="text-sm text-red-500">{errors.image.message}</p>
							)}
						</div>
					</div>

					<div className="flex justify-end pt-4">
						<Button type="submit">Add Chatbot</Button>
					</div>
				</form>
			</DialogContent>
		</Dialog>
	);
}
