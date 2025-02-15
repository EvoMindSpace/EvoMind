"use client";

import { useAuth } from "@/contexts/auth-context";
import { useRouter } from "next/navigation";
import type React from "react"; // Added import for React
import { useEffect } from "react";

export function PrivateRoute({ children }: { children: React.ReactNode }) {
	const { user } = useAuth();
	console.log("🚀 ~ PrivateRoute ~ user:", user);
	const router = useRouter();

	useEffect(() => {
		if (!user) {
			router.push("/");
		}
	}, [user, router]);

	if (!user) {
		return null;
	}

	return <>{children}</>;
}
