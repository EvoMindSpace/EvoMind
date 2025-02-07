"use client";

import { useState } from "react";
import Header from "./header";
import Sidebar from "./sidebar";

const LayoutDashboard = ({ children }: { children: React.ReactNode }) => {
	const [isSidebarExpanded, setIsSidebarExpanded] = useState<boolean>(false);
	return (
		<div className="flex flex-col text-white min-h-screen">
			<Header />
			<div className="flex h-[calc(100vh-72px)]">
				<Sidebar
					isExpanded={isSidebarExpanded}
					setIsExpanded={setIsSidebarExpanded}
				/>
				<main className="flex-1 overflow-y-auto scrollbar-hide bg-card  h-[calc(100vh-72px)]">
					{children}
				</main>
			</div>
		</div>
	);
};

export default LayoutDashboard;
