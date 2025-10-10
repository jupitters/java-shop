package com.jupitters.jupittersshops.security.config;

import com.jupitters.jupittersshops.security.user.ShopUserDetailsService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@RequiredArgsConstructor
public class ShopConfig {
    private final ShopUserDetailsService userDetailsService;

    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }
}
