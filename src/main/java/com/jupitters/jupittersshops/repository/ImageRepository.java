package com.jupitters.jupittersshops.repository;

import com.jupitters.jupittersshops.model.Image;
import com.jupitters.jupittersshops.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ImageRepository extends JpaRepository<Image, Long> {
    List<Image> findByProductId(Long id);
}
