package com.jupitters.jupittersshops.data;

import com.jupitters.jupittersshops.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Role findByName(String role);
}
