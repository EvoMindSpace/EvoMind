package com.ai.evomind_be.data.models;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "config")
public class Config {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "key", nullable = false, columnDefinition = "TEXT")
    private String key;
    @Column(name = "value", nullable = false, columnDefinition = "TEXT")
    private String value;
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();
}
