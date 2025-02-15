import LayoutDashboard from "@/layouts/layout-dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "AI Chat",
	description: "AI Chat",
};

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <LayoutDashboard>{children}</LayoutDashboard>;
}
