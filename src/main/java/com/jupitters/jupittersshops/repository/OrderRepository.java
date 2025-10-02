package com.jupitters.jupittersshops.repository;

import com.jupitters.jupittersshops.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
