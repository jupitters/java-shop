package com.jupitters.jupittersshops.controller;

import com.jupitters.jupittersshops.model.Order;
import com.jupitters.jupittersshops.response.ApiResponse;
import com.jupitters.jupittersshops.service.order.IOrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("${api.prefix}/orders")
public class OrderController {
    private final IOrderService orderService;

    public ResponseEntity<ApiResponse> createOrder(Long userId) {
        Order order = orderService.placeOrder(userId);
        return ResponseEntity.ok(new ApiResponse("Item Order success!", order));
    }
}
