import { AuthProvider } from "@/contexts/auth-context";
import { ReactQueryClientProvider } from "@/providers/QueryClientProvider";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "Homepage",
	description: "Homepage",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ReactQueryClientProvider>
			<AuthProvider>
				<html lang="en">
					<body className={poppins.className}>{children}</body>
				</html>
			</AuthProvider>
		</ReactQueryClientProvider>
	);
}
