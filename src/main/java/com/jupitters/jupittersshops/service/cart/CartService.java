package com.jupitters.jupittersshops.service.cart;

import com.jupitters.jupittersshops.exceptions.ResourceNotFoundException;
import com.jupitters.jupittersshops.model.Cart;
import com.jupitters.jupittersshops.repository.CartRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;

@Service
@RequiredArgsConstructor
public class CartService implements ICartService{
    private final CartRepository cartRepository;

    @Override
    public Cart getCart(Long id) {
        Cart cart = cartRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Cart not found!"));
        BigDecimal totalAamount = cart.getTotalAmount();

        return cart;
    }

    @Override
    public void clearCart(Long id) {

    }

    @Override
    public BigDecimal getTotalPrice(Long id) {
        return null;
    }
}
