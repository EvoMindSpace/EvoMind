import { AuthProvider } from "@/contexts/auth-context";
import { ReactQueryClientProvider } from "@/providers/QueryClientProvider";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "Homepage",
	description: "Homepage",
};

async function getCookieData() {
	const user = cookies().get("user");
	return new Promise((resolve) => resolve({ user }));
}

interface TValueData {
	name: string;
	value: string;
}

interface TCookieData {
	user: TValueData;
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const data = (await getCookieData()) as TCookieData;
	return (
		<ReactQueryClientProvider>
			<AuthProvider initialUser={data?.user?.value}>
				<html lang="en">
					<body className={poppins.className}>{children}</body>
				</html>
			</AuthProvider>
		</ReactQueryClientProvider>
	);
}
