package com.jupitters.jupittersshops.service.order;

import com.jupitters.jupittersshops.exceptions.ResourceNotFoundException;
import com.jupitters.jupittersshops.model.Order;
import com.jupitters.jupittersshops.model.OrderItem;
import com.jupitters.jupittersshops.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderService implements IOrderService{
    private final OrderRepository orderRepository;

    @Override
    public Order placeOrder(Long userId) {
        return null;
    }

    private BigDecimal calculateTotalAmount(List<OrderItem> orderItems) {

    }

    @Override
    public Order getOrder(Long orderId) {
        return orderRepository.findById(orderId)
                .orElseThrow(() -> new ResourceNotFoundException("Order not found"));
    }
}
