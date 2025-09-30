package com.jupitters.jupittersshops.repository;

import com.jupitters.jupittersshops.model.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {
}
