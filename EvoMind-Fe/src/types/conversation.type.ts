import { TUser } from "./user.type";

export type TCreateConversation = {
	user_id: number;
	message: string;
	image: string;
	agentName: string;
	conversation_id: number;
};

export type TConversation = {
	id: number;
	agentName: string;
	image: string;
	lastMessage: string;
	createdAt: string;
};

export type TMessage = {
	id: number;
	conversation: {
		id: number;
		user: TUser & { total_request: number };
		agentName: string;
		createdAt: string;
		image: string;
		lastMessage: string;
	};
	message: string;
	isQuestion: boolean;
	createdAt: string;
};
