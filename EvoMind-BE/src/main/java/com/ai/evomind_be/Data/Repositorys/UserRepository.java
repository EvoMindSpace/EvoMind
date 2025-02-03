package com.ai.evomind_be.Data.Repositorys;

import com.ai.evomind_be.Data.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
