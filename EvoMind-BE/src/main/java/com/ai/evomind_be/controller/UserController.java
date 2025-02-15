package com.ai.evomind_be.controller;


import com.ai.evomind_be.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/user")
public class UserController {
    private static final Logger logger = LoggerFactory.getLogger(UserController.class);
    @Autowired
    private UserService userService;
    @GetMapping("/login_google")
    public ResponseEntity<Object> user(Long userId) {
        try {
            Map<String, Object> attributes = new HashMap<>();
            attributes=userService.GetDataUser(userId);
            logger.info("Login successful");
            return  ResponseEntity.ok(attributes);
        } catch (Exception e) {
            logger.error("Error processing user", e);
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST , e.getMessage());
        }
    }
}
