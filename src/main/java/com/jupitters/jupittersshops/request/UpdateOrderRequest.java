package com.jupitters.jupittersshops.request;

import com.jupitters.jupittersshops.enums.OrderStatus;
import lombok.Data;

@Data
public class UpdateOrderRequest {
    Long id;
    OrderStatus order_status;
}
