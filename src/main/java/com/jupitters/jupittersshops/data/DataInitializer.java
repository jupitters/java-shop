package com.jupitters.jupittersshops.data;

import com.jupitters.jupittersshops.model.User;
import com.jupitters.jupittersshops.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DataInitializer implements ApplicationListener<ApplicationReadyEvent> {
    private final UserRepository userRepository;

    @Override
    public void onApplicationEvent(ApplicationReadyEvent event) {
        createDefaultUserIfNotExists();
    }

    private void createDefaultUserIfNotExists(){
        for (int i = 1; i <= 5; i++){
            String defaultEmail = "user" + i + "@email.com";
            if(userRepository.existsByEmail(defaultEmail)){
                continue;
            }
            User user = new User();
            user.setFirstName("The ");
            user.setLastName("User " + i);
            user.setEmail(defaultEmail);
            user.setPassword("password");
            userRepository.save(user);
            System.out.println("Default user " + i + " created successfully!");
        }
    }
}
