package com.jupitters.jupittersshops.controller;

import com.jupitters.jupittersshops.model.User;
import com.jupitters.jupittersshops.response.ApiResponse;
import com.jupitters.jupittersshops.service.user.IUserService;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("${api.prefix}/users")
public class UserController {
    private final IUserService userService;

    public ResponseEntity<ApiResponse> getUserById(Long userId){
        User user = userService.getUserById(userId);
        return ResponseEntity.ok(new ApiResponse("Success!", user));
    }
}
