package com.jupitters.jupittersshops.service.order;

import com.jupitters.jupittersshops.dto.OrderDto;
import com.jupitters.jupittersshops.enums.OrderStatus;
import com.jupitters.jupittersshops.model.Order;

import java.util.List;

public interface IOrderService {
    Order placeOrder(Long userId);

    List<OrderDto> getAllOrders();

    OrderDto getOrder(Long orderId);

    List<OrderDto> getUserOrders(Long userId);

    Order updateOrderStatus(OrderStatus order_status, Long orderId);

    OrderDto convertToDto(Order order);
}
