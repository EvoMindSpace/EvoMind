package com.ai.evomind_be.Data.Repositorys;

import com.ai.evomind_be.Data.Model.ConversationDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConversationDetailRepository extends JpaRepository<ConversationDetail, Long> {
}
