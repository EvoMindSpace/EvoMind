package com.ai.evomind_be.controller;

import com.ai.evomind_be.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.Map;

@RestController
@RequestMapping("/api/user")
public class UserController {
    private static final Logger logger = LoggerFactory.getLogger(UserController.class);
    @Autowired
    private UserService userService;
    @GetMapping("/login_google")
    public Map<String, Object> user(OAuth2User principal) {
        try {
            if (!(principal instanceof OAuth2AuthenticationToken)) {
                throw new IllegalArgumentException("Invalid authentication type: Expected OAuth2AuthenticationToken, but got "
                        + principal.getClass().getName());
            }
            Map<String, Object> attributes = ((OAuth2AuthenticationToken) principal).getPrincipal().getAttributes();
            userService.createAndCheckUser(attributes);
            logger.info("Login successful");
            return attributes;
        } catch (Exception e) {
            logger.error("Error processing user", e);
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR , "System error");
        }
    }
}
