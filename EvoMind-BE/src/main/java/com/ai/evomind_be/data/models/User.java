package com.ai.evomind_be.data.models;

import jakarta.persistence.*;
import jakarta.persistence.Id;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Table(name = "users")
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "username", nullable = false, unique = true)
    private String username;
    @Column(name = "email", nullable = false, unique = true)
    private String email;
    @Column(name = "img", nullable = true)
    private String img;
    @Column(name = "total_request", nullable = true)
    private Long total_request =0L;
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime created_at = LocalDateTime.now();
    @Column(name = "updated_at", nullable = true, updatable = true)
    private LocalDateTime updated_at = LocalDateTime.now();
}
