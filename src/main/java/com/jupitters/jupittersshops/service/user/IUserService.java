package com.jupitters.jupittersshops.service.user;

import com.jupitters.jupittersshops.dto.UserDto;
import com.jupitters.jupittersshops.model.User;
import com.jupitters.jupittersshops.request.CreateUserRequest;
import com.jupitters.jupittersshops.request.UpdateUserRequest;

public interface IUserService {
    User getUserById(Long userId);
    User createUser(CreateUserRequest request);
    User updateUser(UpdateUserRequest request, Long userId);
    void deleteUser(Long userId);

    UserDto convertUserToDto(User user);
}
