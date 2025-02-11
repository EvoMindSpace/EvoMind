"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";
import { Bot, LogOut, Settings, User, Wallet } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
	const router = useRouter();
	const [open, setOpen] = useState<boolean>(false);

	const handleProfileClick = () => {
		router.push("/profile");
		setOpen(false);
	};

	const handleSettingsClick = () => {
		// Xử lý khi nhấp vào Settings
		console.log("Settings clicked");
		setOpen(false);
	};

	const handleLogoutClick = () => {
		// Xử lý khi nhấp vào Logout
		console.log("Logout clicked");
		setOpen(false);
	};

	return (
		<header className="flex justify-between items-center p-4 bg-card border-b border-secondary-300 h-[72px] sticky top-0 z-10">
			<div className="flex items-center">
				<Link href="/" className="flex items-center space-x-2">
					<Bot className="w-8 h-8 text-purple-500" />

					{/* <span className="text-white font-medium text-xl">ResearchAI</span> */}
					<span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
						EvoMind
					</span>
				</Link>
			</div>
			<div className="flex items-center space-x-4">
				<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
					<Button
						variant="outline"
						className="text-white border-card hover:bg-purple-500/20"
					>
						<Wallet className="mr-2 h-5 w-5" />
						Connect Wallet
					</Button>
				</motion.div>

				<DropdownMenu open={open} onOpenChange={setOpen}>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="relative h-8 w-8 rounded-full">
							<Avatar className="h-8 w-8">
								<AvatarImage src="/avatars/01.png" alt="@example" />
								<AvatarFallback>EX</AvatarFallback>
							</Avatar>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						className="w-56 border-card"
						align="end"
						forceMount
						side="bottom"
					>
						<DropdownMenuItem
							onClick={handleProfileClick}
							className="text-white border-purple-500 hover:bg-purple-500/20"
						>
							<User className="mr-2 h-4 w-4" />
							<span>Profile</span>
						</DropdownMenuItem>
						<DropdownMenuItem
							onClick={handleSettingsClick}
							className="text-white border-purple-500 hover:bg-purple-500/20"
						>
							<Settings className="mr-2 h-4 w-4" />
							<span>Settings</span>
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem
							onClick={handleLogoutClick}
							className="text-white border-purple-500 hover:bg-purple-500/20"
						>
							<LogOut className="mr-2 h-4 w-4" />
							<span>Log out</span>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</header>
	);
}
