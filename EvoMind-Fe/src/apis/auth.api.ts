import envConfig from "@/configs/config";
import { instances } from "@/configs/instances";

export const login = async (userId: string) =>
	instances(envConfig.NEXT_PUBLIC_API_URL).get("/api/user/login_google", {
		params: { userId },
	});
