package com.jupitters.jupittersshops.service.cart;

import com.jupitters.jupittersshops.model.Cart;
import com.jupitters.jupittersshops.model.User;

import java.math.BigDecimal;

public interface ICartService {
    Cart getCart(Long id);
    void clearCart(Long id);
    BigDecimal getTotalPrice(Long id);

    Cart initializeNewCart(User user);

    Cart getCartByUserId(Long userId);
}
