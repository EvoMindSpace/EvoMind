package com.ai.evomind_be.service;

import com.ai.evomind_be.data.models.User;
import com.ai.evomind_be.data.repositorys.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@Service
public class UserService {
    private static final Logger logger = LoggerFactory.getLogger(UserService.class);
    @Autowired
    UserRepository userRepository;
    public User createAndCheckUser(Map<String, Object> attributes){
        try {
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
            return user;
        } catch (Exception e) {
            logger.error("Error processing CreateUser", e);
            throw e;
        }
    }
    public Map<String, Object> GetDataUser(Long userId) {
        try {
            Map<String, Object> result = new HashMap<>();
            User user = userRepository.findById(userId)
                    .orElseThrow(() -> new RuntimeException("User not found"));
            result.put("User",user);
            return result;
        } catch (Exception e) {
            logger.error("Error processing CreateUser", e);
            throw e;
        }
    }
    public User updateTotalRequest(User user) {
        try {
            LocalDateTime now = LocalDateTime.now();
            LocalDateTime updateDate = user.getUpdated_at();
            User userResult = new User();
            if(updateDate.toLocalDate().isEqual(now.toLocalDate())){
                user.setTotal_request(user.getTotal_request()+1);
                userResult=  userRepository.save(user);
            }
            else{
                user.setUpdated_at(now);
                user.setTotal_request(1L);
                user.setUpdated_at(now);
                userResult=  userRepository.save(user);
            }
            logger.info("update TotalRequest");
            return userResult;

        } catch (Exception e) {
            logger.error("Error processing CreateUser", e);
            throw e;
        }
    }
}
