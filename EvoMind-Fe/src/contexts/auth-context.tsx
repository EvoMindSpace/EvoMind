"use client";

import { TUser } from "@/types/user.interface";
import Cookies from "js-cookie";
import { createContext, useContext, useEffect, useState } from "react";

type AuthContextType = {
	user: TUser | null;
	setUser: (user: TUser | null) => void;
	loading: boolean;
	error: string | null;
};

const initialContext: AuthContextType = {
	user: null,
	setUser: () => {},
	loading: false,
	error: null,
};

export const AuthContext = createContext<AuthContextType>(initialContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<TUser | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const storedUser = Cookies.get("user");
		if (storedUser) {
			try {
				setUser(JSON.parse(storedUser));
			} catch (e) {
				console.error("Error parsing user data from cookie:", e);
			}
		}
		setLoading(false);
	}, []);

	const updateUser = (newUser: TUser | null) => {
		setUser(newUser);
		if (newUser) {
			Cookies.set("user", JSON.stringify(newUser), { expires: 7 }); // Cookie expires in 7 days
		} else {
			Cookies.remove("user");
		}
	};

	return (
		<AuthContext.Provider value={{ user, setUser: updateUser, loading, error }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error("useAuth must be used within a AuthProvider");
	}

	return context;
};
