package com.ai.evomind_be.data.repositorys;

import com.ai.evomind_be.data.models.Conversation;
import com.ai.evomind_be.data.models.ConversationDetail;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ConversationDetailRepository extends JpaRepository<ConversationDetail, Long> {
    List<ConversationDetail> findAllByConversation(Conversation conversationId);
}
