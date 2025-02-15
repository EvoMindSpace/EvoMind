"use client";

import { TUser } from "@/types/user.type";
import { createContext, useContext, useState } from "react";

type AuthContextType = {
	user: TUser | null;
	setUser: (user: TUser) => void;
};

const initialContext: AuthContextType = {
	user: null,
	setUser: () => {},
};

export const AuthContext = createContext<AuthContextType>(initialContext);

export const AuthProvider = ({
	children,
	initialUser = "",
}: {
	children: React.ReactNode;
	initialUser: string;
}) => {
	const [user, setUser] = useState<TUser>(
		initialUser && JSON.parse(initialUser)
	);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
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
