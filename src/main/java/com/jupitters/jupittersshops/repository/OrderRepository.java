package com.jupitters.jupittersshops.repository;

import com.jupitters.jupittersshops.model.Order;
import com.jupitters.jupittersshops.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> user(User user);

    List<Order> findByUserId(Long userId);
}
