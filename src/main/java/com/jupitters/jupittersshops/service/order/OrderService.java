package com.jupitters.jupittersshops.service.order;

import com.jupitters.jupittersshops.model.Order;
import com.jupitters.jupittersshops.repository.OrderRepository;

public class OrderService implements IOrderService{
    private final OrderRepository orderRepository;

    @Override
    public Order placeOrder(Long userId) {
        return null;
    }

    @Override
    public Order getOrder(Long orderId) {
        return null;
    }
}
