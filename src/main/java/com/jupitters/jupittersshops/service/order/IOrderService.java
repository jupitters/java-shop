package com.jupitters.jupittersshops.service.order;

import com.jupitters.jupittersshops.dto.OrderDto;
import com.jupitters.jupittersshops.model.Order;

import java.util.List;

public interface IOrderService {
    Order placeOrder(Long userId);
    OrderDto getOrder(Long orderId);

    List<Order> getUserOrders(Long userId);
}
