package com.jupitters.jupittersshops.data;

import com.jupitters.jupittersshops.model.Role;
import com.jupitters.jupittersshops.model.User;
import com.jupitters.jupittersshops.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Optional;
import java.util.Set;

@Transactional
@Component
@RequiredArgsConstructor
public class DataInitializer implements ApplicationListener<ApplicationReadyEvent> {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final RoleRepository roleRepository;

    @Override
    public void onApplicationEvent(ApplicationReadyEvent event) {
        Set<String> defaultRoles = Set.of("ROLE_ADMIN", "ROLE_USER");
        createDefaultRoles(defaultRoles);
        createDefaultUsers();
        createDefaultAdmins();
    }


    private void createDefaultRoles(Set<String> roles) {
        roles.forEach(roleName -> roleRepository.findByName(roleName)
                .orElseGet(() -> {
                    Role newRole = new Role(roleName);
                    roleRepository.save(newRole);
                    System.out.println("Created role: " + roleName);
                    return newRole;
                }));
    }

    private void createDefaultUsers() {
        Role userRole = roleRepository.findByName("ROLE_USER")
                .orElseThrow(() -> new RuntimeException("ROLE_USER not found"));

        for (int i = 1; i <= 5; i++) {
            String email = "user" + i + "@email.com";
            if (userRepository.existsByEmail(email)) continue;

            User user = new User();
            user.setFirstName("The");
            user.setLastName("User " + i);
            user.setEmail(email);
            user.setAddress("Street " + i + "Av. " + (i * Math.random() * 10));
            user.setPassword(passwordEncoder.encode("password"));
            user.setRoles(Set.of(userRole));
            userRepository.save(user);
            System.out.println("Default user " + i + " created successfully!");
        }
    }

    private void createDefaultAdmins() {
        Role adminRole = roleRepository.findByName("ROLE_ADMIN")
                .orElseThrow(() -> new RuntimeException("ROLE_ADMIN not found"));

        for (int i = 1; i <= 2; i++) {
            String email = "admin" + i + "@email.com";
            if (userRepository.existsByEmail(email)) continue;

            User admin = new User();
            admin.setFirstName("The");
            admin.setLastName("Admin " + i);
            admin.setEmail(email);
            admin.setAddress("Street " + i + "Av. " + (i * Math.random() * 10));
            admin.setPassword(passwordEncoder.encode("password"));
            admin.setRoles(Set.of(adminRole));
            userRepository.save(admin);
            System.out.println("Default admin " + i + " created successfully!");
        }
    }
}
