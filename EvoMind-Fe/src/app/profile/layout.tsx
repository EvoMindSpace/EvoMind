import LayoutDashboard from "@/layouts/layout-dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Profile",
	description: "Profile",
};

export default function ProfileLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <LayoutDashboard>{children}</LayoutDashboard>;
}
