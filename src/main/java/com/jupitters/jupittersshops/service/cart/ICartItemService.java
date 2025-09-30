package com.jupitters.jupittersshops.service.cart;

import com.jupitters.jupittersshops.model.CartItem;

public interface ICartItemService {
    void addItemToCart(Long cartId, Long productId, Integer quantity);
    void removeItemFromCart(Long cartId, Long productId);
    void updateItemQuantity(Long cartId, Long productId, Integer quantity);

    CartItem getCartItem(Long cartId, Long productId);
}
