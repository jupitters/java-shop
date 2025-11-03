package com.jupitters.jupittersshops.request;

import com.jupitters.jupittersshops.enums.OrderStatus;
import lombok.Data;

@Data
public class UpdateOrderRequest {
    private OrderStatus orderStatus;
}
