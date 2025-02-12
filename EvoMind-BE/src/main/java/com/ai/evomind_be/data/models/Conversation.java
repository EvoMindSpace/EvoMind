package com.ai.evomind_be.data.models;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
@Data
@Entity
@Table(name = "conversations")
public class Conversation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
    @Column(name = "agent_name", nullable = false, columnDefinition = "TEXT")
    private String agentName;
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();
    @Column(name = "image", nullable = false, columnDefinition = "TEXT")
    private String image;
    @Column(name = "last_message", nullable = false, columnDefinition = "TEXT")
    private String lastMessage;
}
