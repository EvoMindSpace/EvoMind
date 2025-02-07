package com.ai.evomind_be.dto.response;

import lombok.Data;


import java.time.LocalDateTime;
@Data
public class ConversationResponse {
    private Long id;
    private String topic;
    private LocalDateTime createdAt;

    public ConversationResponse(Long id, String topic, LocalDateTime createdAt) {
        this.id = id;
        this.topic = topic;
        this.createdAt = createdAt;
    }
}
