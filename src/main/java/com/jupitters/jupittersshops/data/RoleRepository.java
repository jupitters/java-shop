package com.jupitters.jupittersshops.data;

import com.jupitters.jupittersshops.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Role findByName(String role);
}
