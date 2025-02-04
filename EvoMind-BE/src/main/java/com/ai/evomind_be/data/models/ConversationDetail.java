package com.ai.evomind_be.data.models;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
@Data
@Entity
@Table(name = "conversation_details")
public class ConversationDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "conversation_id", nullable = false)
    private Conversation conversation;
    @Column(name = "message", nullable = false, columnDefinition = "TEXT")
    private String message;
    @Column(name = "is_question", nullable = false)
    private Boolean isQuestion;
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime timestamp = LocalDateTime.now();
}