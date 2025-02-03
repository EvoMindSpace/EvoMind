package com.ai.evomind_be.Data.Model;

import jakarta.persistence.*;
import jakarta.persistence.Id;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Table(name = "users")
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto increment
    private Long id;
    @Column(name = "username", nullable = false, unique = true)
    private String username;
    @Column(name = "email", nullable = false, unique = true)
    private String email;
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime timestamp = LocalDateTime.now();
}
