package com.jupitters.jupittersshops.service.order;

import com.jupitters.jupittersshops.exceptions.ResourceNotFoundException;
import com.jupitters.jupittersshops.model.Cart;
import com.jupitters.jupittersshops.model.Order;
import com.jupitters.jupittersshops.model.OrderItem;
import com.jupitters.jupittersshops.model.Product;
import com.jupitters.jupittersshops.repository.OrderRepository;
import com.jupitters.jupittersshops.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderService implements IOrderService{
    private final OrderRepository orderRepository;
    private final ProductRepository productRepository;

    @Override
    public Order placeOrder(Long userId) {
        return null;
    }

    private List<OrderItem> createOrderItems(Order order, Cart cart) {
        return cart.getItems()
                .stream()
                .map(cartItem -> {
                    Product product = cartItem.getProduct();
                    product.setInventory(product.getInventory() - cartItem.getQuantity());
                    productRepository.save(product);
                    return new OrderItem(
                            order,
                            product,
                            cartItem.getQuantity(),
                            cartItem.getUnitPrice());
                }).toList();
    }

    private BigDecimal calculateTotalAmount(List<OrderItem> orderItems) {
        return orderItems.stream()
                .map(item -> item.getPrice()
                        .multiply(new BigDecimal(item.getQuantity())))
                .reduce(BigDecimal.ZERO, BigDecimal::add);
    }

    @Override
    public Order getOrder(Long orderId) {
        return orderRepository.findById(orderId)
                .orElseThrow(() -> new ResourceNotFoundException("Order not found"));
    }
}
