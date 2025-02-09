package com.ai.evomind_be.controller;

import com.ai.evomind_be.dto.request.ConversationRequest;
import com.ai.evomind_be.dto.response.ConversationDetailResponse;
import com.ai.evomind_be.dto.response.ConversationResponse;
import com.ai.evomind_be.service.AiService;
import com.ai.evomind_be.service.ConversationDetailService;
import com.ai.evomind_be.service.ConversationService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/conversation")
public class ConversationController  {
    private static final Logger logger = LoggerFactory.getLogger(ConversationController.class);
    @Autowired
    AiService aiService;
    @Autowired
    ConversationDetailService conversationDetailService;
    @Autowired
    ConversationService conversationService;
    @GetMapping("/GetConversation")
    public ResponseEntity<List<ConversationResponse>> GetConversation(Long userId) {
        try {
            return ResponseEntity.ok(conversationService.GetListConversation(userId));
        } catch (Exception e) {
            logger.error("Error processing conversation", e);
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR , "System error");
        }
    }
    @GetMapping("/GetConversationDetail")
    public ResponseEntity<List<ConversationDetailResponse>> GetConversationDetail(Long conversationId) {
        try {
            return ResponseEntity.ok(conversationDetailService.GetListConversationDetail(conversationId));
        } catch (Exception e) {
            logger.error("Error processing conversation", e);
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR , "System error");
        }
    }

    @PostMapping("/receiveMessage")
    public ResponseEntity<String> receiveMessage(@RequestBody ConversationRequest conversationRequest) {
        try {

            String response = aiService.processMessage(conversationRequest.getMessage());
            conversationRequest.setResult_message(response);
            conversationDetailService.CreateConversationDetail(conversationRequest);
            logger.info("Response received: {}", response);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            logger.error("Error processing message", e);
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR , "System error");
        }
    }

}
