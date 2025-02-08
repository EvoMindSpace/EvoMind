"use client";

import { Hero } from "@/features/dashboard/components/hero";
import { TokenGrid } from "@/features/dashboard/components/token-grid";
import { TrendingBar } from "@/features/dashboard/components/trending-bar";

const Dashboard = () => {
	return (
		<div className="w-full">
			<Hero />
			<div className="2xl:max-w-[1700px] mx-auto px-6">
				<TrendingBar />
				<TokenGrid />
			</div>
		</div>
	);
};

export default Dashboard;
