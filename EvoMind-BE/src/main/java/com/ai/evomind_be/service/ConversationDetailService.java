package com.ai.evomind_be.service;

import com.ai.evomind_be.controller.ConversationController;
import com.ai.evomind_be.data.models.Conversation;
import com.ai.evomind_be.data.models.ConversationDetail;
import com.ai.evomind_be.data.models.User;
import com.ai.evomind_be.data.repositorys.ConversationDetailRepository;
import com.ai.evomind_be.data.repositorys.ConversationRepository;
import com.ai.evomind_be.data.repositorys.UserRepository;
import com.ai.evomind_be.dto.request.ConversationRequest;
import com.ai.evomind_be.dto.response.ConversationDetailResponse;
import com.ai.evomind_be.dto.response.ConversationResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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
                logger.info("Create ConversationDetail From User" );
                //ConversationDetail AI
                conversationDetail.setId(null);
                conversationDetail.setMessage(conversationRequest.getResult_message());
                conversationDetail.setIsQuestion(Boolean.FALSE);
                conversationDetailRepository.save(conversationDetail);
                logger.info("Create ConversationDetail From AI" );
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

    public List<ConversationDetailResponse> GetListConversationDetail(Long conversationId){
        try {
            List<ConversationDetailResponse> conversationDetailResponses = new ArrayList<>();
            Conversation conversation = conversationRepository.findById(conversationId.intValue())
                    .orElseThrow(() -> new RuntimeException("Conversation not found"));
            List<ConversationDetail> listConversationByUser = conversationDetailRepository.findAllByConversation(conversation);
            conversationDetailResponses = listConversationByUser.stream()
                    .map(conversationDetail -> new ConversationDetailResponse(
                            conversationDetail.getId(),
                            conversationDetail.getConversation(),
                            conversationDetail.getMessage(),
                            conversationDetail.getIsQuestion(),
                            conversationDetail.getCreatedAt()
                    ))
                    .collect(Collectors.toList());
            logger.info("Get List ConversationDetail By User {}",conversation.getUser());
            return conversationDetailResponses;
        } catch (RuntimeException e) {
            logger.error("Error processing GetListConversationDetail", e);
            throw e;
        }
    }
}
