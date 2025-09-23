package com.jupitters.jupittersshops.service.product;

import com.jupitters.jupittersshops.exceptions.ProductNotFoundException;
import com.jupitters.jupittersshops.model.Product;
import com.jupitters.jupittersshops.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService implements IProductService{
    private ProductRepository productRepository;

    @Override
    public Product addProduct(Product product) {
        return null;
    }

    @Override
    public List<Product> getAllProducts() {
        return List.of();
    }

    @Override
    public Product getProductById(Long id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException("Product not found!"));
    }

    @Override
    public void deleteProductById(Long id) {

    }

    @Override
    public void updateProduct(Product product, Long productId) {

    }

    @Override
    public List<Product> getProductByCategory(String category) {
        return List.of();
    }

    @Override
    public List<Product> getProductByBrand(String brand) {
        return List.of();
    }

    @Override
    public List<Product> getProductByCategoryAndBrand(String category, String brand) {
        return List.of();
    }

    @Override
    public List<Product> getProductsByName(String name) {
        return List.of();
    }

    @Override
    public List<Product> getProductsByBrandAndName(String brand, String name) {
        return List.of();
    }

    @Override
    public Long countProductsByBrandAndName(String brand, String name) {
        return 0L;
    }
}
