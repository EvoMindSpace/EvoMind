"use client";

import { login } from "@/apis/auth.api";
import { useAuth } from "@/contexts/auth-context";
import { TUser } from "@/types/user.interface";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

const LoginOAuthContent = () => {
	const params = useSearchParams();
	const userId = params.get("user_id");
	const { setUser } = useAuth();

	const { data, isLoading, isSuccess } = useQuery<{ data: { User: TUser } }>({
		queryKey: ["login-auth"],
		queryFn: () => login(userId!),
		enabled: !!userId,
	});

	const fetchUser = async (user: TUser) => {
		await axios.post("/api/auth", user);
		window.location.href = "/dashboard";
	};

	useEffect(() => {
		if (isSuccess && !isLoading) {
			fetchUser(data.data.User);
			setUser(data.data.User);
		}
	}, [data?.data.User, setUser, isSuccess, isLoading]);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return null;
};

const LoginOAuth = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<LoginOAuthContent />
		</Suspense>
	);
};

export default LoginOAuth;
