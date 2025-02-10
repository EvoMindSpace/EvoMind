"use client";

import { login } from "@/apis/auth.api";
import { useAuth } from "@/contexts/auth-context";
import { TUser } from "@/types/user.interface";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { redirect, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const LoginOAuth = () => {
	const params = useSearchParams();
	const userId = params.get("user_id");

	const { setUser } = useAuth();

	const { data, isLoading, isSuccess } = useQuery<{ data: { User: TUser } }>({
		queryKey: ["login-auth"],
		queryFn: () => login(userId!),
		enabled: !!userId,
	});

	const fetchUser = async (user: TUser) => {
		console.log("🚀 ~ fetchUser ~ user:", user);
		await axios.post("/api/auth", user);
	};

	useEffect(() => {
		if (isSuccess && !isLoading) {
			console.log("Đang set user và gọi fetchUser");
			fetchUser(data.data.User);
			setUser(data.data.User);
			redirect("/dashboard");
		}
	}, [data?.data.User, setUser, isSuccess, isLoading]);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	// redirect("/dashboard");
	return <div>Loading...</div>;
};

export default LoginOAuth;
