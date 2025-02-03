package com.ai.evomind_be.Data.Repositorys;

import com.ai.evomind_be.Data.Model.Conversation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConversationRepository extends JpaRepository<Conversation, Integer> {
}
