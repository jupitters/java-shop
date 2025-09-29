package com.jupitters.jupittersshops.repository;

import com.jupitters.jupittersshops.model.Cart;
import com.jupitters.jupittersshops.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository<Cart, Long> {
}
