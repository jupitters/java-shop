package com.jupitters.jupittersshops.service.user;

import com.jupitters.jupittersshops.model.User;
import com.jupitters.jupittersshops.request.CreateUserRequest;
import com.jupitters.jupittersshops.request.UserUpdateRequest;

public interface IUserService {
    User getUserById(Long userId);
    User createUser(CreateUserRequest request);
    User updateUser(UserUpdateRequest request, Long userId);
    void deleteUser(Long userId);
}
