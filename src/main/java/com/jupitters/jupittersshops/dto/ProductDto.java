package com.jupitters.jupittersshops.dto;

import com.jupitters.jupittersshops.model.Category;
import com.jupitters.jupittersshops.model.Image;
import jakarta.persistence.CascadeType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

import java.math.BigDecimal;
import java.util.List;

public class ProductDto {
    private Long id;
    private String name;
    private String brand;
    private String description;
    private BigDecimal price;
    private Integer inventory;
    private Category category;
    private List<ImageDto> images;
}
