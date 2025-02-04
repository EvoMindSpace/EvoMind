package com.ai.evomind_be.service;

import com.ai.evomind_be.controller.ConversationController;
import com.ai.evomind_be.data.models.Conversation;
import com.ai.evomind_be.data.models.ConversationDetail;
import com.ai.evomind_be.data.repositorys.ConversationDetailRepository;
import com.ai.evomind_be.data.repositorys.ConversationRepository;
import com.ai.evomind_be.dto.request.ConversationRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
public class ConversationDetailService {
    private static final Logger logger = LoggerFactory.getLogger(ConversationDetailService.class);
    @Autowired
    ConversationService conversationService;
    @Autowired
    ConversationRepository conversationRepository;
    @Autowired
    ConversationDetailRepository conversationDetailRepository;
    public void CreateConversationDetail(ConversationRequest conversationRequest){
        try {
            Conversation conversation = null;
            if(conversationRequest.getConversation_id()==null){
                conversation = conversationService.CreateConversation(conversationRequest);
            }
            else {
                conversation = conversationRepository.findById(conversationRequest.getConversation_id().intValue())
                        .orElseThrow(() -> new RuntimeException("conversation not found"));
            }

            if(conversation!=null){
                //ConversationDetail User
                ConversationDetail conversationDetail = new ConversationDetail();
                conversationDetail.setId(null);
                conversationDetail.setConversation(conversation);
                conversationDetail.setMessage(conversationRequest.getMessage());
                conversationDetail.setIsQuestion(Boolean.TRUE);
                conversationDetailRepository.save(conversationDetail);
                logger.error("Create ConversationDetail From User" );
                //ConversationDetail AI
                conversationDetail.setId(null);
                conversationDetail.setMessage(conversationRequest.getResult_message());
                conversationDetail.setIsQuestion(Boolean.FALSE);
                conversationDetailRepository.save(conversationDetail);
                logger.error("Create ConversationDetail From AI" );
            }
            else {
                logger.error("conversation not found" + conversationRequest.getConversation_id());
                throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR , "System error");
            }

        } catch (Exception e) {
            logger.error("Error processing", e);
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR , "System error");
        }
    }
}
