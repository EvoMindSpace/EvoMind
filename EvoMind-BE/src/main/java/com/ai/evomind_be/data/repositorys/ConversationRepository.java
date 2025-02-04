package com.ai.evomind_be.data.repositorys;

import com.ai.evomind_be.data.models.Conversation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConversationRepository extends JpaRepository<Conversation, Integer> {
}
