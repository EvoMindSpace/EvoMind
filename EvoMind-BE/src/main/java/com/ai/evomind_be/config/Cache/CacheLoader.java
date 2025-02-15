package com.ai.evomind_be.config.Cache;

import com.ai.evomind_be.data.repositorys.ConfigRepository;
import com.ai.evomind_be.service.ConfigService;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.Cache;
import org.springframework.cache.CacheManager;
import org.springframework.cache.concurrent.ConcurrentMapCacheManager;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Map;

@Component
public class CacheLoader {
    @Autowired
    ConfigService configService;
    @Autowired
    CacheManager cacheManager;
    public CacheLoader(ConfigService configService, CacheManager cacheManager) {
        this.configService = configService;
        this.cacheManager = cacheManager;
    }

    @PostConstruct
    public void preloadCache() {
        Map<String, String> list = configService.getConfig();
        if(list != null) {
            Cache cache = cacheManager.getCache("config");
            for (Map.Entry<String, String> entry : list.entrySet()) {
                cache.put(entry.getKey(), entry.getValue());
            }
        }

    }
}