package com.ai.evomind_be.dto.response;

import lombok.Data;


import java.time.LocalDateTime;
@Data
public class ConversationResponse {
    private Long id;
    private String agentName;
    private String image;
    private String lastMessage;
    private LocalDateTime createdAt;

    public ConversationResponse(Long id, String agentName, String image, String lastMessage, LocalDateTime createdAt) {
        this.id = id;
        this.agentName = agentName;
        this.image = image;
        this.lastMessage = lastMessage;
        this.createdAt = createdAt;
    }




}
