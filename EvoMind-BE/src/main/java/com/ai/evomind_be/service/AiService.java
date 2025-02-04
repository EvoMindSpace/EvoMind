package com.ai.evomind_be.service;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AiService {
    private final ChatClient chatClient;
    @Autowired
    public AiService(ChatClient.Builder builder) {
        this.chatClient = builder.build();
    }

    public String processMessage(String message) {
        return chatClient.prompt(message).call().content();
    }
}
