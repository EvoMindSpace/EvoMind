package com.ai.evomind_be.dto.request;

import com.ai.evomind_be.data.models.Conversation;
import lombok.*;

import java.time.LocalDateTime;
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class ConversationRequest {

    private Long user_id;
    private String message;
    private Long conversation_id ;
}
