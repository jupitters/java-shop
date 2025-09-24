package com.jupitters.jupittersshops.repository;

import com.jupitters.jupittersshops.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {

    Category findByName(String name);
}
