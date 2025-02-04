package com.ai.evomind_be.data.repositorys;

import com.ai.evomind_be.data.models.ConversationDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConversationDetailRepository extends JpaRepository<ConversationDetail, Long> {
}
