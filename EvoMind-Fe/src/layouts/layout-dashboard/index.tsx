"use client";

import { useState } from "react";
import Header from "./header";
import Sidebar from "./sidebar";

const LayoutDashboard = ({ children }: { children: React.ReactNode }) => {
	const [isSidebarExpanded, setIsSidebarExpanded] = useState<boolean>(false);
	return (
		<div className="flex flex-col h-screen text-white">
			<Header />
			<div className="flex flex-1 overflow-hidden">
				<Sidebar
					isExpanded={isSidebarExpanded}
					setIsExpanded={setIsSidebarExpanded}
				/>
				<main className="flex-1 overflow-y-auto p-4">{children}</main>
			</div>
		</div>
	);
};

export default LayoutDashboard;
