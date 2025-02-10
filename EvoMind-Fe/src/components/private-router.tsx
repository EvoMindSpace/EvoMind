"use client";

import { useAuth } from "@/contexts/auth-context";
import { useRouter } from "next/navigation";
import type React from "react"; // Added import for React
import { useEffect } from "react";

export function PrivateRoute({ children }: { children: React.ReactNode }) {
	const { user, loading } = useAuth();
	console.log("🚀 ~ PrivateRoute ~ user:", user);
	const router = useRouter();

	useEffect(() => {
		if (!loading && !user) {
			router.push("/");
		}
	}, [user, loading, router]);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (!user) {
		return null;
	}

	return <>{children}</>;
}
