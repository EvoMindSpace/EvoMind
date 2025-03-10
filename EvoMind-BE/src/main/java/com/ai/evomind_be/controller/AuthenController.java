package com.ai.evomind_be.controller;

import com.ai.evomind_be.data.models.User;
import com.ai.evomind_be.service.UserService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.CacheManager;
import org.springframework.http.HttpStatus;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
public class AuthenController {
    @Autowired
    private UserService userService;
    @Autowired
    CacheManager cacheManager;
    @GetMapping("/")
    public Object getDataGoogle(OAuth2AuthenticationToken principal, HttpServletResponse response) {
        try {
            String urlFE =cacheManager.getCache("config").get("FE_API_AUTHO", String.class);
            Map<String, Object> attributes = ((OAuth2AuthenticationToken) principal).getPrincipal().getAttributes();
            User user =userService.createAndCheckUser(attributes);
            response.sendRedirect(urlFE+user.getId());
            return null;
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST , e.getMessage());
        }
    }
}
