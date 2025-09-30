package com.jupitters.jupittersshops.service.cart;

import com.jupitters.jupittersshops.model.Cart;
import com.jupitters.jupittersshops.model.CartItem;
import com.jupitters.jupittersshops.model.Product;
import com.jupitters.jupittersshops.repository.CartItemRepository;
import com.jupitters.jupittersshops.service.product.IProductService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class CartItemService implements ICartItemService{
    private final CartItemRepository cartItemRepository;
    private final IProductService productService;
    private final ICartService cartService;

    @Override
    public void addItemToCart(Long cartId, Long productId, Integer quantity) {
        Cart cart = cartService.getCart(cartId);
        Product product = productService.getProductById(productId);
        CartItem cartItem = cart.getItems()
                .stream()
                .filter(item -> item.getProduct().getId().equals(product))
                .findFirst()
                .orElse(new CartItem());
    }

    @Override
    public void removeItemFromCart(Long cartId, Long productId) {

    }

    @Override
    public void updateItemQuantity(Long cartId, Long productId, Integer quantity) {

    }
}
