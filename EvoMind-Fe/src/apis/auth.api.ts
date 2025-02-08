import envConfig from "@/configs/config";
import { instances } from "@/configs/instances";

export const login = async () =>
	instances(envConfig.NEXT_PUBLIC_API_URL).get("/");
