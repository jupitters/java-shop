package com.jupitters.jupittersshops.controller;

import com.jupitters.jupittersshops.exceptions.AlreadyExistsException;
import com.jupitters.jupittersshops.exceptions.ResourceNotFoundException;
import com.jupitters.jupittersshops.model.Category;
import com.jupitters.jupittersshops.response.ApiResponse;
import com.jupitters.jupittersshops.service.category.ICategoryService;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.HttpStatus.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("${api.prefix}/categories")
public class CategoryController {
    private final ICategoryService categoryService;

    @GetMapping("/all")


    @PostMapping("/add")
    public ResponseEntity<ApiResponse> addCategory(@RequestBody Category category) {
        try {
            Category newCategory = categoryService.addCategory(category);
            return ResponseEntity.ok(new ApiResponse("Added!", newCategory));
        } catch (AlreadyExistsException e) {
            return ResponseEntity.status(CONFLICT)
                    .body(new ApiResponse(e.getMessage(), null));
        }
    }

    @GetMapping("/id/{categoryId}")
    public ResponseEntity<ApiResponse> getCategoryById(@PathVariable Long categoryId){
        try {
            Category category = categoryService.getCategoryById(categoryId);
            return ResponseEntity.ok(new ApiResponse("Success!", category));
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(NOT_FOUND)
                    .body(new ApiResponse(e.getMessage(), null));
        }
    }

    @GetMapping("/name/{categoryName}")
    public ResponseEntity<ApiResponse> getCategoryByName(@PathVariable String categoryName){
        try {
            Category category = categoryService.getCategoryByName(categoryName);
            return ResponseEntity.ok(new ApiResponse("Found!", category));
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(NOT_FOUND)
                    .body(new ApiResponse(e.getMessage(), null));
        }
    }

    @DeleteMapping("/id/{categoryId}")
    public ResponseEntity<ApiResponse> deleteCategoryById(@PathVariable Long categoryId){
        try {
            categoryService.getCategoryById(categoryId);
            return ResponseEntity.ok(new ApiResponse("Deleted!", null));
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(NOT_FOUND)
                    .body(new ApiResponse(e.getMessage(), null));
        }
    }

    @PutMapping("/id/{categoryId}")
    public ResponseEntity<ApiResponse> updateCategory(@RequestBody Category category, @PathVariable Long categoryId){
        try {
            Category updatedCategory = categoryService.updateCategory(category, categoryId);
            return ResponseEntity.ok(new ApiResponse("Updated!", updatedCategory));
        } catch (ResourceNotFoundException e){
            return ResponseEntity.status(NOT_FOUND)
                    .body(new ApiResponse(e.getMessage(), null));
        }
    }

}
