"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const LoginOAuth = () => {
	const data = useQuery({
		queryKey: ["login-auth"],
		queryFn: () => {
			return axios.get(
				"https://evomindbejar.onrender.com/api/user/login_google"
			);
		},
	});
	console.log("🚀 ~ LoginOAuth ~ data:", data.data);

	return <div>LoginOAuth</div>;
};

export default LoginOAuth;
