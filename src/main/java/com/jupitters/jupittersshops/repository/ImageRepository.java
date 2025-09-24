package com.jupitters.jupittersshops.repository;

import com.jupitters.jupittersshops.model.Image;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository<Image, Long> {
}
