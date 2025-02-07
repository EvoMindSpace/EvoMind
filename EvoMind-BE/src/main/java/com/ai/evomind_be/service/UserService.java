package com.ai.evomind_be.service;

import com.ai.evomind_be.data.models.User;
import com.ai.evomind_be.data.repositorys.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class UserService {
    private static final Logger logger = LoggerFactory.getLogger(UserService.class);
    @Autowired
    UserRepository userRepository;
    public Map<String, Object> createAndCheckUser(Map<String, Object> attributes){
        try {
            Map<String, Object>  result = new HashMap<>(attributes);
            String email = (String) attributes.get("email");
            String name = (String) attributes.get("name");
            String urlImg = (String) attributes.get("picture");
            User user = userRepository.findByEmail(email);
            if (urlImg == null) {
                urlImg = "default_image_url";
            }
            if(user==null){
                User newUser = new User();
                newUser.setEmail(email);
                newUser.setImg(urlImg);
                newUser.setUsername(name);
                user = userRepository.save(newUser);
                logger.info("New");
            }
            result.put("User",user);
            return result;
        } catch (Exception e) {
            logger.error("Error processing CreateUser", e);
            throw e;
        }
    }
}
