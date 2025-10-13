package com.jupitters.jupittersshops.repository;

import com.jupitters.jupittersshops.model.Role;
import com.jupitters.jupittersshops.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
}
