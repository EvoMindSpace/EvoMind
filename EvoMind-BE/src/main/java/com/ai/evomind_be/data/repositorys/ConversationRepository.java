package com.ai.evomind_be.data.repositorys;

import com.ai.evomind_be.data.models.Conversation;
import com.ai.evomind_be.data.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ConversationRepository extends JpaRepository<Conversation, Integer> {
    List<Conversation> findAllByUserId(Long userId);
}
