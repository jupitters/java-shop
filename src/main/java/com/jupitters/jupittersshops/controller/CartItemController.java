package com.jupitters.jupittersshops.controller;

import com.jupitters.jupittersshops.model.Cart;
import com.jupitters.jupittersshops.model.CartItem;
import com.jupitters.jupittersshops.response.ApiResponse;
import com.jupitters.jupittersshops.service.cart.ICartItemService;
import org.springframework.http.ResponseEntity;

public class CartItemController {
    private ICartItemService cartItemService;

    public ResponseEntity<ApiResponse> addItemToCart(CartItem itemId, Cart cartId, Integer quantity){

    }
}
