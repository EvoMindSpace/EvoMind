package com.ai.evomind_be.data.repositorys;

import com.ai.evomind_be.data.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
