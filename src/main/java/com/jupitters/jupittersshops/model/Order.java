package com.jupitters.jupittersshops.model;

import com.jupitters.jupittersshops.enums.OrderStatus;

import java.math.BigDecimal;
import java.time.LocalDate;

public class Order {
    private Long orderId;
    private LocalDate orderDate;
    private BigDecimal totalAmount;
    private OrderStatus orderStatus;
}
