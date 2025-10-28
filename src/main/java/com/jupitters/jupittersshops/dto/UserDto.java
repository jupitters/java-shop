package com.jupitters.jupittersshops.dto;

import com.jupitters.jupittersshops.model.Cart;
import com.jupitters.jupittersshops.model.Order;
import lombok.Data;

import java.util.List;

@Data
public class UserDto {
    private Long id;
    private String firstName;
    private String lastName;
    private String address;
    private String email;
    private List<OrderDto> orders;
    private CartDto cart;
}
