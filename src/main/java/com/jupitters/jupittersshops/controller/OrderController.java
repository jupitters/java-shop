package com.jupitters.jupittersshops.controller;

import com.jupitters.jupittersshops.model.Order;
import com.jupitters.jupittersshops.response.ApiResponse;
import com.jupitters.jupittersshops.service.order.IOrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("${api.prefix}/orders")
public class OrderController {
    private final IOrderService orderService;

    @PostMapping("/order")
    public ResponseEntity<ApiResponse> createOrder(Long userId) {
        try {
            Order order = orderService.placeOrder(userId);
            return ResponseEntity.ok(new ApiResponse("Item Order success!", order));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ApiResponse("Error occurred: ", e.getMessage()));
        }
    }

    public ResponseEntity<ApiResponse> getOrderById(Long orderId) {
        Order order = orderService.getOrder(orderId);
        return ResponseEntity.ok(new ApiResponse("Success!", order));
    }
}
