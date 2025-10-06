package com.jupitters.jupittersshops.repository;

import com.jupitters.jupittersshops.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    boolean existsByEmail(String email);
}
