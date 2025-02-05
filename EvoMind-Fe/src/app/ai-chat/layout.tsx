import LayoutAiChat from "@/layouts/layout-chat";
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
	return <LayoutAiChat>{children}</LayoutAiChat>;
}
