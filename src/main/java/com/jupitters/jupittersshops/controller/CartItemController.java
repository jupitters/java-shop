package com.jupitters.jupittersshops.controller;

import com.jupitters.jupittersshops.model.Cart;
import com.jupitters.jupittersshops.model.CartItem;
import com.jupitters.jupittersshops.response.ApiResponse;
import com.jupitters.jupittersshops.service.cart.ICartItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RequiredArgsConstructor
@RestController
@RequestMapping("${api.prefix}/")
public class CartItemController {
    private ICartItemService cartItemService;

    public ResponseEntity<ApiResponse> addItemToCart(@RequestParam Cart cartId,
                                                     @RequestParam Long productId,
                                                     @RequestParam Integer quantity){
        cartItemService.addItemToCart(cartId, productId, quantity);
        return ResponseEntity.ok(new ApiResponse("Added successfull!", null));
    }
}
