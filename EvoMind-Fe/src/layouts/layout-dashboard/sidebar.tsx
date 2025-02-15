import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import {
	Briefcase,
	ChevronsLeft,
	ChevronsRight,
	DiscIcon as Discord,
	FileText,
	HouseIcon,
	MessageSquare,
	Plus,
	Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
interface SidebarProps {
	isExpanded: boolean;
	setIsExpanded: (isExpanded: boolean) => void;
}

export default function Sidebar({ isExpanded, setIsExpanded }: SidebarProps) {
	const handleToggleSidebar = useCallback(
		() => setIsExpanded(!isExpanded),
		[isExpanded]
	);

	const [activeItem, setActiveItem] = useState<number>(0);

	const menuItems = [
		{
			index: 0,
			icon: HouseIcon,
			label: "Market",
			color: "text-primary-300",
			image: "https://app.holoworld.com/icons/navbar/home-white.svg",
			active: "https://app.holoworld.com/icons/navbar/home-active.svg",
			href: "/dashboard",
		},
		{
			index: 1,
			icon: Plus,
			label: "Create",
			image: "https://app.holoworld.com/icons/navbar/create-white.svg",
			active: "https://app.holoworld.com/icons/navbar/create-active.svg",
			href: "/create",
		},
		{
			index: 2,
			icon: Briefcase,
			label: "My Agents",
			image: "https://app.holoworld.com/icons/navbar/inventory-white.svg",
			active: "https://app.holoworld.com/icons/navbar/inventory-active.svg",
			href: "/my-agents",
		},
		{
			index: 3,
			icon: MessageSquare,
			label: "Chat",
			image: "https://app.holoworld.com/icons/navbar/chat-white.svg",
			active: "https://app.holoworld.com/icons/navbar/chat-active.svg",
			href: "/ai-chat",
		},
		// {
		// 	index: 4,
		// 	icon: Diamond,
		// 	label: "Stake",
		// 	image: "https://app.holoworld.com/icons/navbar/reward.svg",
		// 	active: "https://app.holoworld.com/icons/navbar/reward-active.svg",
		// 	href: "/stake",
		// },
	];

	const docs = [
		{
			index: 5,
			icon: FileText,
			label: "Docs",
			href: "/docs",
			image: "https://app.holoworld.com/icons/navbar/docs-light.svg",
			active: "https://app.holoworld.com/icons/navbar/docs.svg",
		},
		{
			index: 6,
			icon: Discord,
			label: "Discord",
			href: "/discord",
			image: "https://app.holoworld.com/icons/navbar/discord.svg",
			active: "https://app.holoworld.com/icons/navbar/discord-active.svg",
		},
		{
			index: 7,
			icon: Twitter,
			label: "Twitter",
			href: "/twitter",
			image: "https://app.holoworld.com/icons/navbar/icon-twitter-white.svg",
			active: "https://app.holoworld.com/icons/navbar/icon-twitter-active.svg",
		},
	];

	return (
		<motion.aside
			className="bg-card h-full flex flex-col justify-between border-r border-secondary-300"
			initial={{ width: "4rem" }}
			animate={{ width: isExpanded ? "16rem" : "4rem" }}
			transition={{ duration: 0.3, ease: "easeInOut" }}
		>
			<div className="h-full flex flex-col justify-between">
				<nav className="mt-4">
					{menuItems.map((item, index) => {
						return (
							<TooltipProvider key={index}>
								<Tooltip>
									<TooltipTrigger asChild key={index}>
										<Link
											href={item.href}
											className="flex items-center p-4 hover:bg-secondary-300 transition-colors gap-0"
										>
											<item.icon className="w-6 h-6 flex-shrink-0" />
											<motion.span
												className="ml-4 whitespace-nowrap"
												initial={{ opacity: 0, width: 0 }}
												animate={{
													opacity: isExpanded ? 1 : 0,
													width: isExpanded ? "auto" : 0,
												}}
												transition={{ duration: 0.2 }}
											>
												{item.label}
											</motion.span>
										</Link>
									</TooltipTrigger>

									<TooltipContent
										className="bg-purple-500/20 text-white border-purple-500"
										side="right"
									>
										<p>{item.label}</p>
									</TooltipContent>
								</Tooltip>
							</TooltipProvider>
						);
					})}
				</nav>

				<nav className="mb-4">
					<button
						onClick={handleToggleSidebar}
						className="w-full p-4 text-left hover:bg-secondary-300 transition-colors"
					>
						{isExpanded ? <ChevronsLeft /> : <ChevronsRight />}
					</button>
					{docs.map((item, index) => (
						<Link
							key={index}
							href={item.href}
							className="flex items-center p-4 hover:bg-secondary-300 transition-colors gap-0"
						>
							<Image
								src={item.index === activeItem ? item.active : item.image}
								alt={item.label}
								width={24}
								height={24}
								className="w-6 h-6 flex-shrink-0"
							/>
							<motion.span
								className="ml-4 whitespace-nowrap text-sm"
								initial={{ opacity: 0, width: 0 }}
								animate={{
									opacity: isExpanded ? 1 : 0,
									width: isExpanded ? "auto" : 0,
								}}
								transition={{ duration: 0.2 }}
							>
								{item.label}
							</motion.span>
						</Link>
					))}
				</nav>
			</div>
		</motion.aside>
	);
}
