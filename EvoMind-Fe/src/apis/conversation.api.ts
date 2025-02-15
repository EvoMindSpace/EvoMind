import envConfig from "@/configs/config";
import { instances } from "@/configs/instances";
import {
	TConversation,
	TCreateConversation,
	TMessage,
} from "@/types/conversation.type";

export const conversationApi = {
	createConversation: async (body: TCreateConversation) => {
		const response = await instances(envConfig.NEXT_PUBLIC_API_URL).post(
			"/api/conversation/receiveMessage",
			body
		);
		return response.data;
	},
	getAllConversation: async (body: {
		user_id: number;
	}): Promise<TConversation[]> => {
		const response = await instances(envConfig.NEXT_PUBLIC_API_URL).get(
			"/api/conversation/GetConversation",
			{
				params: {
					userId: body.user_id,
				},
			}
		);
		return response.data;
	},
	getConversationById: async (body: {
		conversation_id: number;
	}): Promise<TMessage[]> => {
		const response = await instances(envConfig.NEXT_PUBLIC_API_URL).get(
			"/api/conversation/GetConversationDetail",
			{
				params: {
					conversationId: body.conversation_id,
				},
			}
		);
		return response.data;
	},
};
