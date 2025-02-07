package com.ai.evomind_be.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/").permitAll()
                        .requestMatchers(
                                "/api/v1/auth/**",
                                "/swagger-ui/**", "/swagger-resources/**", "/v2/api-docs",
                                "/ws/**", "/ws"
                        ).permitAll()
                        .anyRequest().authenticated()
                )
                .oauth2Login(oauth2Login->{
                    oauth2Login.successHandler((request, response, authentication) -> {response.sendRedirect("/api/user/login_google");});
                });
        return http.build();
    }
}