package com.ai.evomind_be.data.repositorys;

import com.ai.evomind_be.data.models.Config;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConfigRepository extends JpaRepository<Config, Long> {
}
