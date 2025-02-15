import envConfig from "@/configs/config";
import { instances } from "@/configs/instances";

export const aiChat = {
	// get conversation
	getConversation: async () => {
		const response = await instances(envConfig.NEXT_PUBLIC_API_URL).get(
			"/api/ai-chat/conversation"
		);
		return response.data;
	},
};
