package com.ai.evomind_be.service;

import com.ai.evomind_be.data.models.Config;
import com.ai.evomind_be.data.models.User;
import com.ai.evomind_be.data.repositorys.ConfigRepository;
import com.ai.evomind_be.data.repositorys.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.CacheManager;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class ConfigService {
    private static final Logger logger = LoggerFactory.getLogger(ConfigService.class);
    @Autowired
    ConfigRepository configRepository;
    @Autowired
    CacheManager cacheManager;
    @Autowired
    UserRepository userRepository;
    @Autowired
    UserService userService;
    public Map<String, String> getConfig() {
        Map<String, String> config = new HashMap<String, String>();
        List<Config> lstConfig = configRepository.findAll();
        if (lstConfig.size() > 0) {
            config = lstConfig.stream()
                    .collect(Collectors.toMap(Config::getKey, Config::getValue));
        }
        return config;
    }
    public void checkRequest(Long userId) {
        try {
            User user = userRepository.findById(userId)
                    .orElseThrow(() -> new RuntimeException("User not found"));
            user = userService.updateTotalRequest(user);
            Long IP_API_REQUEST_LIMIT = Long.valueOf(cacheManager.getCache("config").get("IP_API_REQUEST_LIMIT", String.class));
            if(user.getTotal_request()>IP_API_REQUEST_LIMIT) {
                logger.error("The limit for the dev-net environment is "+ IP_API_REQUEST_LIMIT +" times per account.");
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "The limit for the dev-net environment is "+ IP_API_REQUEST_LIMIT +" times per account.");
            }
        } catch (NumberFormatException e) {
            logger.error("Error processing CreateUser", e);
            throw e;
        }
    }
}
