package com.ai.evomind_be.dto.response;

import com.ai.evomind_be.data.models.Conversation;
import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

import java.time.LocalDateTime;

public class ConversationDetailResponse {

    private Long id;
    private Conversation conversation;
    private String message;
    private Boolean isQuestion;
    private LocalDateTime createdAt ;

    public ConversationDetailResponse(Long id, Conversation conversation, String message, Boolean isQuestion, LocalDateTime createdAt) {
        this.id = id;
        this.conversation = conversation;
        this.message = message;
        this.isQuestion = isQuestion;
        this.createdAt = createdAt;
    }
}
