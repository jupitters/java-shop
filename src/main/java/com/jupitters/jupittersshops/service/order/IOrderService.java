package com.jupitters.jupittersshops.service.order;

import com.jupitters.jupittersshops.model.Order;

public interface IOrderService {
    Order placeOrder(Long userId);
    Order getOrder(Long orderId);
}
