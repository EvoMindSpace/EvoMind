package com.ai.evomind_be.service;

import com.ai.evomind_be.data.models.Conversation;
import com.ai.evomind_be.data.models.User;
import com.ai.evomind_be.data.repositorys.ConversationRepository;
import com.ai.evomind_be.data.repositorys.UserRepository;
import com.ai.evomind_be.dto.request.ConversationRequest;
import com.ai.evomind_be.dto.response.ConversationResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ConversationService {
    private static final Logger logger = LoggerFactory.getLogger(ConversationService.class);

    @Autowired
    ConversationRepository conversationRepository;
    @Autowired
    UserRepository userRepository;
    public Conversation CreateConversation(ConversationRequest conversationRequest,User user){
        try {
            Conversation conversation = new Conversation();
            conversation.setUser(user);
            conversation.setTopic(conversationRequest.getMessage());
            conversation= conversationRepository.save(conversation);
            return conversation;
        } catch (Exception e) {
            logger.error("Error processing CreateConversation", e);
            throw e;
        }
    }
    public List<ConversationResponse> GetListConversation(Long userId){
        try {
            List<ConversationResponse> conversationResponses = new ArrayList<>();
            User user = userRepository.findById(userId)
                    .orElseThrow(() -> new RuntimeException("User not found"));
            List<Conversation> listConversationByUser = conversationRepository.findAllByUserId(user.getId());
            conversationResponses = listConversationByUser.stream()
                    .map(conversation -> new ConversationResponse(
                            conversation.getId(),
                            conversation.getTopic(),
                            conversation.getCreatedAt()
                    ))
                    .collect(Collectors.toList());
            logger.info("Get List Conversation By User {}",user);
            return conversationResponses;
        } catch (RuntimeException e) {
            logger.error("Error processing GetListConversation", e);
            throw e;
        }
    }

}
